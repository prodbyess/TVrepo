from __future__ import annotations

import logging
from typing import Any, Optional

import httpx

logger = logging.getLogger(__name__)


class OandaClient:
    def __init__(self, account_id: Optional[str], api_token: Optional[str], practice: bool = True) -> None:
        self.account_id = account_id
        self.api_token = api_token
        self.base_url = "https://api-fxpractice.oanda.com/v3" if practice else "https://api-fxtrade.oanda.com/v3"

    @property
    def enabled(self) -> bool:
        return bool(self.account_id and self.api_token)

    async def submit_market_order(self, payload: dict[str, Any]) -> dict[str, Any]:
        if not self.enabled:
            logger.info("OANDA client skipped (credentials not configured)")
            return {"status": "skipped", "reason": "oanda_disabled"}

        url = f"{self.base_url}/accounts/{self.account_id}/orders"
        headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json",
        }

        async with httpx.AsyncClient(timeout=15) as client:
            response = await client.post(url, json=payload, headers=headers)
            response.raise_for_status()
            return response.json()
