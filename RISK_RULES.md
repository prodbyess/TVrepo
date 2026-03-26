# Turtle Soup Demo Risk Rules

Applies while the strategy runs on the OANDA Practice account.

| Rule | Value |
|------|-------|
| Default order size | 10,000 units (≈ one mini lot) |
| Direction | Determined by alert (`long` = buy, `short` = sell) |
| Bracket orders | Stop-loss + take-profit from alert payload |
| Auto execute | Disabled by default (`AUTO_EXECUTE=false`). Toggle to `true` for fully automated demo. |
| Daily trade cap | TBD (logging only in Phase 1/2) |

> These rules are intentionally conservative. Update `AUTO_EXECUTE` and `DEFAULT_ORDER_UNITS` in `.env` to change behavior, and add additional caps (max trades/day, stop-after-losses) before going live.
