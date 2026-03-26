# Turtle Soup → OANDA Automation

FastAPI service that receives TradingView Turtle Soup alerts, validates them, notifies Telegram for manual approval, and (in later phases) routes approved orders to the OANDA Practice API.

## Repo Layout
```
automation/turtle-soup-oanda/
├── README.md
├── requirements.txt
├── .env.example
├── server/
│   ├── __init__.py
│   ├── config.py
│   ├── main.py
│   └── models.py
├── clients/
│   ├── __init__.py
│   └── oanda.py
├── notifications/
│   ├── __init__.py
│   └── telegram.py
└── storage/
    └── .gitkeep
```

## Environment
Copy `.env.example` to `.env` (or export the variables another way) and fill in:

```
TRADINGVIEW_WEBHOOK_SECRET=shared-secret-here
TELEGRAM_BOT_TOKEN=123456:bot-token
TELEGRAM_CHAT_ID=123456789
AUTO_EXECUTE=false
DEFAULT_ORDER_UNITS=10000
OANDA_ACCOUNT_ID=101-002-38678740-001
OANDA_API_TOKEN=your-oanda-token
```

> The service only needs the OANDA credentials once we move past Phase 1. They are optional for log-only mode.

## Install & Run (Phase 1)
```
cd automation/turtle-soup-oanda
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn server.main:app --reload --port 8100
```

TradingView webhook URL (local dev): `http://localhost:8100/webhook/turtle-soup`

### Example payload (from TradingView alert body)
```json
{
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
```

## Webhook Flow (Phase 1)
1. TradingView alert sends JSON payload with the shared secret.
2. FastAPI validates the secret + schema.
3. Event is appended to `storage/events.jsonl`.
4. Telegram notifier posts the trade summary (if bot token + chat ID are configured).
5. Broker execution is skipped until we enable Phase 2.

## Risk Defaults
See [`RISK_RULES.md`](RISK_RULES.md) for the current demo parameters (10k units/order, brackets from the alert, auto-exec toggle).

## Next Phases
- **Phase 2:** connect to OANDA Practice, send market orders when trades are approved.
- **Phase 3:** add risk filters, duplicate suppression, and session windows.
- **Phase 4:** enable semi/full auto with health monitoring and journaling datastore.


## Deploying to Render
1. Push this folder to a GitHub repo (only the `automation/turtle-soup-oanda` contents are needed).
2. On Render → **New +** → **Web Service** → choose the repo.
3. When prompted, set:
   - Environment: **Docker**
   - Build command: *(leave blank — Dockerfile handles it)*
   - Start command: *(leave blank)*
4. After deploy, set the env vars shown in `render.yaml` (Dashboard → Environment).
5. The live webhook URL will be `https://<your-service>.onrender.com/webhook/turtle-soup`.
