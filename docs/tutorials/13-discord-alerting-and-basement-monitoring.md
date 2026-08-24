---
title: 'Tutorial 13: Discord Alerting & Basement Homelab Monitoring'
description: Configure real-time Discord webhook notifications, systemd service daemons, and low-power basement monitoring.
since_version: v1.12.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 13
---

# Tutorial 13: Discord Alerting & Basement Homelab Monitoring

In this tutorial, you will configure your self-hosted Credence node or homelab server to broadcast real-time **Discord Webhook alerts** whenever high-severity disinformation, astroturfing campaigns, or mesh health anomalies are detected.

---

## 1. Why Basement Monitoring Matters

A sovereign node running in your basement on a Raspberry Pi or mini-PC acts as your personal, 24/7 information watchdog. When breaking news hits syndicated RSS feeds, the background sifter evaluates incoming claims automatically. Setting up Discord webhooks gives you instant mobile alerts when a tracked domain commits egregious ethics violations.

---

## 2. Choosing Your Monitoring Alert Tiers

Credence provides three configurable alerting tiers:

| Alert Tier | Trigger Condition | Discord Embed Color | Example Notification |
| :--- | :--- | :---: | :--- |
| **P0: Critical Disinformation** | Suspicion Score $\ge 70.0$ or Medical Miracle Cure | 🔴 Red (`#ef4444`) | Critical ungrounded health claim detected on syndicated feed. |
| **P1: Astroturfing Swarm** | Topic Entropy $H < 0.30$ ($d_H \le 3$) | 🟠 Orange (`#f59e0b`) | Syndicate mirror farm republishing identical AI slop. |
| **P2: Daily Digest Summary** | Scheduled Morning Briefing (08:00 AM) | 🟢 Green (`#10b981`) | 24-hour summary of clean vs. suspicious audited articles. |

---

## 3. Step-by-Step Configuration

Follow these steps to configure real-time Discord webhook dispatching on your self-hosted node:

### Step 1: Create a Discord Webhook
1. In Discord, open your server **Server Settings** $\rightarrow$ **Integrations** $\rightarrow$ **Webhooks**.
2. Click **New Webhook**, name it `Credence Watchdog`, and select your alert channel (e.g., `#epistemic-alerts`).
3. Click **Copy Webhook URL**.

### Step 2: Configure Environment Variables (`.env`)
```ini
# Discord Webhook Notification URL
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz

# Minimum suspicion threshold to trigger immediate alert
DISCORD_ALERT_THRESHOLD=65.0

# Enable automated 08:00 AM daily briefing digest
DISCORD_DAILY_DIGEST=true
```

### Step 3: Test Webhook Dispatch
```bash
# Send a test alert to verify Discord webhook connectivity
$ credence notify test --channel discord

# Run a live test audit and trigger notification
$ credence audit https://example.com/test-article --notify
```

---

## 4. Running as a Persistent systemd Daemon

To ensure your node runs continuously on your basement server across reboots:

```bash
# Generate production systemd service definition
$ credence service install --user

# Enable and start the background watchdog service
$ sudo systemctl enable --now credence-watchdog.service

# View live service logs
$ journalctl -u credence-watchdog.service -f
```

---

## 5. Next Steps

* 🛡️ [Tutorial 14: Operator Security & Admin Workstation](14-operator-security-and-admin-workstation.md)
* 🍓 [Raspberry Pi & Homelab Setup Guide](../operations/raspberry-pi-homelab.md)

## Architectural Invariants & Verification Mechanics

The implementation of **13 Discord Alerting And Basement Monitoring** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **13 Discord Alerting And Basement Monitoring** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "tutorials"

# Inspect real-time execution metrics and Bayesian concordance
$ credence stats --detailed --window 24h

# Export canonical verification receipts for external compliance
$ credence verify --json --audit-trail
```

### Quantitative Operational Benchmarks

| Metric / Dimension | Target Performance | Worst-Case Tolerance | Subsystem Status |
| :--- | :---: | :---: | :--- |
| **Verification Latency** | $< 15\text{ ms}$ (Local Cache) | $< 250\text{ ms}$ (P95 Mesh Gossip) | ✅ Optimal |
| **Grounding Precision ($G$)** | $1.00$ (Verbatim DOM Match) | $0.90$ (Probation Window) | ✅ Certified |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle) | ✅ Protected |
| **Memory Consumption** | $< 150\text{ MB RAM}$ | $< 256\text{ MB RAM}$ | ✅ Lean |

### RFC Standards & Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../playground.md)
