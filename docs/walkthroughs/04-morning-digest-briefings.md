---
title: 'Feature Walkthrough: Daily Morning Epistemic Briefings'
description: Multi-interface walkthrough for compiling executive intelligence briefings,
  newsletter exports, and FastMCP morning digest streams.
since_version: v1.0.0
verified_version: v2.18.3
last_verified: 2026-08-29
sidebar:
  order: 4
---

# Feature Walkthrough: Daily Morning Epistemic Briefings

Learn how to aggregate 24-hour syndicated coverage into high-contrast executive briefings, filter verified journalism from rhetorical fallacies, and measure BitTorrent mesh compute savings across all interfaces.

> [!NOTE]
> **Persistent Interface Preference**: Switching tabs updates your active preference across all documentation pages in the portal.

---

## 1. Compiling 24-Hour Epistemic Briefings

Generate the daily executive morning briefing across verified journalism, fallacy warnings, and satire alerts.

:::tabs
=== 🖥️ CLI Terminal
```bash
# Render high-contrast colored executive briefing directly in terminal
credence digest --format terminal
```

```json
{
  "total_articles_sifted": 61,
  "clean_verified": 49,
  "flagged_deceptions": 11,
  "satire_cues_detected": 1,
  "swarm_mesh_compute_savings_tokens": 32000,
  "dollar_savings_usd": 0.01,
  "zero_token_adoptions": 10
}
```

=== ⚡ FastMCP 2.0
Query the live 24-hour morning briefing directly over FastMCP tool or resource:

```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "credence_generate_digest",
    "arguments": { "hours": 24 }
  }
}
```

Or subscribe to dynamic live updates via `credence://digest/morning`.

=== 📟 Textual TUI
1. Launch `credence tui`.
2. Press `5` or navigate to the **🌅 Morning Digest** pane.
3. Review the live 24-hour briefing breakdown and zero-token compute savings.

![Credence TUI Morning Digest](../../assets/tui/08-morning-digest.svg)

=== 📄 Export & JSON
```bash
# Export formatted Markdown report for static sites or newsletters
credence digest --format markdown --output morning_brief.md --hours 24

# Export structured JSON for database ingestion or webhook alerts
credence digest --format json --output /var/log/credence/digest.json
```
:::

---

## 2. Inspecting Swarm Compute Savings

Measure the empirical compute savings achieved by adopting signed attestations from peer nodes.

:::tabs
=== CLI Digest
```bash
# Display compute savings breakdown
credence digest stats
```

=== FastMCP Tools
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "credence_get_quota_status",
    "arguments": {}
  }
}
```

=== Python SDK
```python
from credence.feeds.digest import calculate_digest_savings

stats = await calculate_digest_savings(hours=24)
print(f"Total Sifted: {stats.total_articles}")
print(f"Tokens Saved: {stats.tokens_saved}")
print(f"Mesh Savings %: {stats.savings_percentage}%")
```

=== 📟 Textual TUI Workstation
1. In `credence tui`, press `5` to open the **⚡ Token Quota** pane.
2. Monitor your hourly and daily token headroom budgets in real time.
3. Verify that the **Circuit Breaker Status** remains `🟢 HEALTHY (Normal Concurrency)` and review 24h estimated spend.

![Credence TUI Token Quota](../../assets/tui/09-token-quota.svg)
:::

---

## 3. Executive Intelligence Section Breakdown

| Section | Inclusion Criteria | Key Metadata Displayed |
| :--- | :--- | :--- |
| **🛡️ Verified Journalism** | Suspicion $< 20.0$, $G = 1.00$, diverse sources | Publisher identity, character offset, topic entropy |
| **⚠️ Rhetorical Warnings** | Suspicion $20.0 - 50.0$, informal fallacies | Rule URI (`IEP:INFORMAL/...`), verbatim quote |
| **🚨 Flagged Deceptions** | Suspicion $\ge 50.0$, corporate astroturfing | Violation severity (1–5), dark pattern classifier |
| **🎭 Validated Satire** | Suspicion $= 0.00$, Poe's Law cues matched | Schema.org badge, satire indicator, neutral verdict |
| **⚡ Swarm Compute Savings** | Zero-token adoptions across 13-node cluster | Total LLM tokens avoided, $0.00 cost multiplier |

> [!TIP]
> Run `credence digest --hours 12` in a cron job at 06:00 UTC to automate your morning briefing dispatch via email or webhooks.


---

## 4. Automation & Headless Sifter Integration

For enterprise newsrooms and automated intelligence pipelines, Credence can compile and syndicate morning briefings autonomously:

```bash
# Automated cron job recipe: compiles digest, verifies cryptographic signatures, and dispatches markdown
$ credence digest --hours 24 --format markdown --output /var/www/reports/morning-digest.md

# Publish live cryptographic attestation feed
$ credence sifter publish-feed --output /var/www/feeds/verified-morning.xml
```

### Architectural Invariants Enforced
- **Zero-Token Adoptions (`inv-multi-model-sovereignty`)**: Verified attestations signed by mesh peer nodes with $Q_i \ge 0.70$ are adopted with $0$ LLM tokens.
- **Verbatim Grounding (`inv-verbatim-grounding`)**: Briefing claim summaries are linked directly to character-offset DOM quotes.
- **RFC 8785 Serialization (`inv-canonical-json-ed25519`)**: All JSON exports use deterministic canonical byte ordering.
