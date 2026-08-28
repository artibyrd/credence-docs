---
title: Automated Morning Feed Sifter & Epistemic Digest
description: Setting up zero-trust feed autodiscovery, dynamic quality governance,
  background sifting daemons, and automated executive intelligence briefings.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-28
---

# Automated Morning Feed Sifter & Epistemic Digest

Newsrooms, OSINT analysts, enterprise compliance teams, and executive researchers spend hours filtering through hundreds of RSS, Atom, and JSON feeds every morning.

This cookbook shows how to set up an autonomous, zero-trust **Credence Morning Feed Sifter** that discovers feeds dynamically, executes pre-flight forensic audits against commercial takeover (the "Pizza Hut Problem"), partitions workloads across P2P mesh peers, and compiles daily executive epistemic digests at **92.3% compute savings**.

---

## 1. Zero-Trust Architecture Overview

> [!TIP]
> **Zero-Configuration Work-Sharing**: When multiple team members or automated agents run the sifter daemon across your local network or VPN, they automatically partition feed ingestion using Rendezvous Hashing without requiring a central coordination server.

---

## 2. Dynamic Zero-Trust Feed Discovery & Pre-Flight Inspection

Avoid static whitelists. Autodiscover feed endpoints dynamically and verify their topic entropy and editorial grounding before adding them to active ingestion:

```bash
# 1. Autodiscover feed candidate endpoints from any target website
credence feed discover "https://arstechnica.com"
credence feed discover "https://apnews.com"

# 2. Run a pre-flight forensic audit (evaluates topic diversity H_topic and SPJ ethics)
credence feed inspect "https://arstechnica.com/feed"

# 3. Bootstrap diverse categorized presets (investigative tech, science preprints, regional)
credence feed bootstrap-presets --category investigative-tech
credence feed bootstrap-presets --category science-preprints

# 4. Or ignite all 24 presets with 0-token mesh peer adoption in 1 command:
credence germinate
```

---

## 3. Dynamic Feed Health Governance (\(F_j\))

Every subscribed feed is continuously evaluated. Outlets that experience corporate acquisitions, undisclosed commercial astroturfing, or drops in verifiable grounding are autonomously demoted:

$$F_j = 0.35 (1.0 - \bar{S}_j/100) + 0.25 G_j + 0.20 H_{\text{topic}} + 0.20 T_{\text{freshness}}$$

View dynamic feed health rankings at any time:

```bash
credence feed health
```

| Feed Title / Channel | Quality ($F_j$) | Avg Suspicion | Grounding ($G$) | Entropy ($H$) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ProPublica: Main Feeds** | `0.89` | `4.2` | `100%` | `0.88` | `ACTIVE` |
| **The Markup: Investigations** | `0.87` | `6.1` | `100%` | `0.84` | `ACTIVE` |
| **Ars Technica: Lab** | `0.84` | `8.5` | `95%` | `0.81` | `ACTIVE` |
| **Krebs on Security** | `0.85` | `5.0` | `100%` | `0.82` | `ACTIVE` |
| **404 Media** | `0.82` | `9.0` | `92%` | `0.79` | `ACTIVE` |

---

## 4. Sentinel Mode for High-Priority & Ongoing Case Studies

When conducting an ongoing investigative case study on a specific media outlet (such as our longitudinal analysis of `inmaricopa.com`), standard 15–30 minute polling cycles may be too infrequent, leading to concerns about selection latency or cherry-picking.

**Sentinel Mode** designates high-priority target sources for rapid, guaranteed scanning:

```bash
# 1. List current Sentinel feeds and their high-frequency cadence
credence feeds sentinel list

# 2. Enable Sentinel Mode on a target news feed (5-minute / 300s default)
credence feeds sentinel enable https://inmaricopa.com/feed/

# 3. Configure custom high-frequency polling interval (e.g. 120 seconds)
credence feeds sentinel set-interval https://inmaricopa.com/feed/ 120

# 4. Disable Sentinel Mode when the intensive observation window concludes
credence feeds sentinel disable https://inmaricopa.com/feed/
```

### Sentinel Mode Anti-Abuse & Anti-Starvation Invariants

To ensure Sentinel Mode cannot be exploited by bad actors to bypass organic germination or monopolize node resources, the scheduler enforces five mathematical invariants:

1. **Guaranteed Organic Soil Floor ($C_{\text{organic}} \ge 50\%$)**: In every sifter and boredom cycle, Sentinel items can consume at most 50% of the audit burst. At least 50% of capacity is strictly reserved for organic root citations (`extract_root_candidates`) and peer attestations.
2. **Sentinel Capacity Ceiling ($N_{\text{max}} = 10$)**: A node can register at most 10 active Sentinel feeds simultaneously.
3. **Cadence Safety Floor ($\Delta t \ge 60\text{s}$)**: Polling intervals below 60 seconds are rejected to prevent self-inflicted denial-of-service.
4. **Reputation Quarantine Integrity**: Enabling Sentinel Mode on a quarantined domain increases observation frequency, but **does not bypass** quarantine status or the BuzzFeed News Doctrine redemption rules.
5. **Verbatim Grounding & Entropy Eviction**: Stuffed feeds generating repetitive astroturfing ($H < 0.30$) or ungrounded claims ($G < 1.00$) are autonomously downgraded to `SENTINEL_PAUSED`.

---

## 5. Running the Background Sifter Daemon

Launch the real-time sifter daemon as a background systemd service or long-running worker. The daemon uses **Rendezvous Hashing (HRW)** to divide scraping duties across peer nodes, adopting attestations from peer nodes in **0 LLM tokens ($0.00 cost)**:

```bash
# Run sifter daemon with 5-minute polling cycles
credence sifter --interval 300 --profile balanced
```

---

## 6. Generating Daily Morning Epistemic Briefings

Generate executive intelligence summaries across 4 categories (Clean Journalism, Rhetorical Fallacies, Deceptive Flags, Satire Alerts, and Compute Savings):

```bash
# Display high-contrast terminal briefing
credence digest --format terminal

# Export to Markdown document for newsletters or static sites
credence digest --format markdown --output morning_brief.md --hours 24

# Export to JSON for downstream agent workflows
credence digest --format json --output digest.json
```

### Morning Briefing Structure & Sections

| Section | Content & Source Filters | Key Metrics Tracked |
| :--- | :--- | :--- |
| **🛡️ Verified Journalism** | $S < 20.0$, $G = 1.00$, Diverse sources | Grounding character offset, publisher key |
| **⚠️ Flagged Deceptions** | $S \ge 50.0$, Dark patterns, smears | Rule URI, violation severity (1–5) |
| **🎭 Satire & Parody** | $S = 0.00$, Poe's Law cues validated | Satire indicator, neutral score |
| **⚡ Swarm Compute Savings** | P2P zero-token adoption stats | Tokens saved, $0.00 cost multiplier |

### Sample Briefing Output

```markdown
# 🌅 Credence Morning Epistemic Digest
*Generated on 2026-08-18 06:00:00 UTC (Past 24 Hours)*

---
## 📊 Executive Swarm Summary
- **Total Articles Sifted**: `61`
- **Clean & Verified Coverage**: `49`
- **Questionable / Fallacious / Deceptive**: `11`
- **Verified Satire / Parody**: `1`
- **BitTorrent Mesh Compute Savings**: **`32,000` tokens (~$0.01)** across `10` zero-token adoptions.

---
## 🛡️ Clean & Verified Journalism (Top Scored)
- **[Autonomous Freight Safety Standards](https://example.org/clean-report)**  
  *Score: `0.0` | Zero violations detected*

## ⚠️ Rhetorical Fallacies & Clickbait Warnings
- **[Editorial: Inflation Policy Debate](https://example.org/op-ed)**  
  *Score: `61.3` | Flag: `FALLACY-1.1` (Ad Hominem)*  
  > "failed accountant who dresses like a circus clown"
```

---

## 7. Automating via FastMCP & AI Agents

If you use Claude, Cursor, or autonomous AI agents, you can manage Sentinel sources and generate digests directly through FastMCP 2.0:

* **Tool**: `credence_set_feed_sentinel_mode(feed_url="https://inmaricopa.com/feed/", enabled=True, interval_seconds=300)`
* **Tool**: `credence_list_sentinel_sources()`
* **Tool**: `credence_discover_feeds(target_url="https://apnews.com")`
* **Tool**: `credence_inspect_feed_health(feed_url="https://example.com/feed.xml")`
* **Tool**: `credence_generate_digest(hours=24)`
* **Resource**: `credence://digest/morning`
* **Resource**: `credence://feeds/sentinels`
