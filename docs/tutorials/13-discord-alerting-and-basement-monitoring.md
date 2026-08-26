---
title: 'Tutorial 13: Discord Alerting & Basement Homelab Monitoring'
description: Configure real-time Discord webhook notifications, systemd service daemons, and low-power basement monitoring.
since_version: v1.12.0
verified_version: v2.17.4
last_verified: 2026-08-26
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

---
## Real-Time Discord Alerts & Basement Ops

```bash
# Test Discord webhook integration
$ credence notify --test --channel discord
```

| Alert Severity | Discord Embed Color | Trigger Condition |
| :--- | :--- | :--- |
| **CRITICAL** | Crimson (`#ef4444`) | Major breaking news with Suspicion $>80.0$ |
| **WARNING** | Amber (`#f59e0b`) | Uncorrected high-severity journalistic violation |
| **INFO** | Emerald (`#10b981`) | Daily morning briefing summary report |

---
## Configuring Discord Alerts and Real-Time Webhooks

Setting up automated Discord notifications for breaking news stories and suspicious disinformation campaigns.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **13 Discord Alerting And Basement Monitoring**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```
