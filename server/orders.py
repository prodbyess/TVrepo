from __future__ import annotations

from server.models import TurtleSoupAlert


def normalize_instrument(symbol: str) -> str:
    cleaned = symbol.replace("/", "").replace("_", "").upper()
    if len(cleaned) != 6:
        return symbol.upper()
    return f"{cleaned[:3]}_{cleaned[3:]}"


def build_market_order(alert: TurtleSoupAlert, units: int) -> dict:
    instrument = normalize_instrument(alert.symbol)
    signed_units = units if alert.direction.lower() == "long" else -units

    order = {
        "order": {
            "type": "MARKET",
            "instrument": instrument,
            "units": signed_units,
            "timeInForce": "FOK",
            "positionFill": "DEFAULT",
            "clientExtensions": {
                "comment": f"turtle-soup:{alert.alert_id or 'manual'}",
            },
            "takeProfitOnFill": {"price": f"{alert.tp_price:.5f}"},
            "stopLossOnFill": {"price": f"{alert.sl_price:.5f}"},
        }
    }
    return order
