from __future__ import annotations

import logging
from textwrap import dedent
from typing import Optional

import httpx

from server.models import TurtleSoupAlert

logger = logging.getLogger(__name__)


class TelegramNotifier:
    def __init__(self, bot_token: Optional[str], chat_id: Optional[str]) -> None:
        self.bot_token = bot_token
        self.chat_id = chat_id
        self.base_url = f"https://api.telegram.org/bot{bot_token}" if bot_token else None

    @property
    def enabled(self) -> bool:
        return bool(self.bot_token and self.chat_id)

    async def send_alert(self, alert: TurtleSoupAlert) -> Optional[dict[str, str]]:
        if not self.enabled:
            logger.info("Telegram notifier skipped (missing bot credentials)")
            return None

        message = dedent(
            f"""
            🐢 Turtle Soup Alert
            Symbol: {alert.symbol}
            Direction: {alert.direction.upper()} ({alert.timeframe})
            Entry: {alert.entry_price}
            SL / TP: {alert.sl_price} / {alert.tp_price}
            Session: {alert.session_tag or '-'}
            Alert ID: {alert.alert_id or '-'}
            """
        ).strip()

        url = f"{self.base_url}/sendMessage"
        payload = {
            "chat_id": self.chat_id,
            "text": message,
            "parse_mode": "Markdown",
        }

        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            return response.json()
