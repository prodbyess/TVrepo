from __future__ import annotations

import json
import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import Depends, FastAPI, HTTPException
from httpx import HTTPStatusError, RequestError

from clients.oanda import OandaClient
from notifications.telegram import TelegramNotifier
from server.config import Settings, get_settings
from server.models import TurtleSoupAlert
from server.orders import build_market_order

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("turtle_soup_webhook")

app = FastAPI(title="Turtle Soup → OANDA", version="0.2.0")


def get_notifier(settings: Settings = Depends(get_settings)) -> TelegramNotifier:
    return TelegramNotifier(settings.telegram_bot_token, settings.telegram_chat_id)


def get_oanda_client(settings: Settings = Depends(get_settings)) -> OandaClient:
    return OandaClient(settings.oanda_account_id, settings.oanda_api_token)


@app.get("/health")
def healthcheck() -> dict[str, str]:
    return {"status": "ok", "ts": datetime.now(timezone.utc).isoformat()}


@app.post("/webhook/turtle-soup")
async def handle_turtle_soup_alert(
    alert: TurtleSoupAlert,
    settings: Settings = Depends(get_settings),
    notifier: TelegramNotifier = Depends(get_notifier),
    oanda_client: OandaClient = Depends(get_oanda_client),
) -> dict:
    if not settings.tradingview_webhook_secret:
        raise HTTPException(status_code=500, detail="Webhook secret not configured")

    if alert.secret != settings.tradingview_webhook_secret:
        raise HTTPException(status_code=401, detail="Invalid secret")

    event = alert.to_event()
    event["received_at"] = datetime.now(timezone.utc).isoformat()
    _append_event(settings.event_log_path, event)

    await notifier.send_alert(alert)

    logger.info(
        "Alert logged",
        extra={"symbol": alert.symbol, "direction": alert.direction, "timeframe": alert.timeframe},
    )

    broker_status = "disabled"
    broker_payload: Optional[dict] = None

    if oanda_client.enabled and settings.auto_execute:
        order_payload = build_market_order(alert, settings.default_order_units)
        try:
            broker_payload = await oanda_client.submit_market_order(order_payload)
            broker_status = "submitted"
        except HTTPStatusError as exc:
            logger.exception("OANDA rejected order | %s", exc.response.text)
            raise HTTPException(status_code=502, detail=f"OANDA rejected order: {exc.response.text}") from exc
        except RequestError as exc:
            logger.exception("OANDA request failed | %s", exc)
            raise HTTPException(status_code=502, detail="OANDA request failed") from exc
    elif oanda_client.enabled and not settings.auto_execute:
        broker_status = "manual_gate"

    return {
        "status": "logged",
        "broker": broker_status,
        "auto_execute": settings.auto_execute,
        "order": broker_payload,
    }


def _append_event(path: Path, event: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as fp:
        fp.write(json.dumps(event) + "\n")
