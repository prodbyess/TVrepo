from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, Field


class TurtleSoupAlert(BaseModel):
    secret: str = Field(..., description="Shared secret for webhook authentication")
    symbol: str
    timeframe: str
    direction: str
    entry_price: float = Field(..., alias="entryPrice")
    sl_price: float = Field(..., alias="slPrice")
    tp_price: float = Field(..., alias="tpPrice")
    timestamp: datetime
    session_tag: Optional[str] = Field(None, alias="sessionTag")
    alert_id: Optional[str] = Field(None, alias="alertId")
    metadata: Optional[dict[str, Any]] = None

    model_config = {
        "populate_by_name": True,
        "json_schema_extra": {
            "example": {
                "secret": "tradingview-secret",
                "symbol": "EURUSD",
                "timeframe": "15m",
                "direction": "long",
                "entryPrice": 1.0850,
                "slPrice": 1.0830,
                "tpPrice": 1.0895,
                "timestamp": "2026-03-25T16:35:00Z",
                "sessionTag": "London",
                "alertId": "tv-abc-123",
                "metadata": {
                    "atr": 0.0025,
                    "confirmBars": 2
                }
            }
        }
    }

    def to_event(self) -> dict[str, Any]:
        return {
            "symbol": self.symbol,
            "timeframe": self.timeframe,
            "direction": self.direction,
            "entry_price": self.entry_price,
            "sl_price": self.sl_price,
            "tp_price": self.tp_price,
            "timestamp": self.timestamp.isoformat(),
            "session_tag": self.session_tag,
            "alert_id": self.alert_id,
            "metadata": self.metadata or {},
        }
