from __future__ import annotations

from functools import lru_cache
from pathlib import Path
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    tradingview_webhook_secret: str = ""
    telegram_bot_token: Optional[str] = None
    telegram_chat_id: Optional[str] = None
    oanda_account_id: Optional[str] = None
    oanda_api_token: Optional[str] = None
    auto_execute: bool = False
    default_order_units: int = 10000
    event_log_path: Path = Path("storage/events.jsonl")

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    """Cache settings so we only parse env vars once per process."""

    settings = Settings()
    # Ensure the log directory exists up-front so writes do not fail later.
    settings.event_log_path.parent.mkdir(parents=True, exist_ok=True)
    return settings
