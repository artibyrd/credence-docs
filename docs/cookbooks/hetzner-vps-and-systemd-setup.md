---
title: 'Cookbook: $4/Month Hetzner VPS & Systemd Setup'
description: Deploying a 24/7 self-hosted sovereign node on a budget Hetzner cloud server using systemd and SQLite WAL.
since_version: v1.14.0
verified_version: v2.16.3
last_verified: 2026-08-24
sidebar:
  order: 8
---

# Cookbook: $4/Month Hetzner VPS & Systemd Setup

This cookbook demonstrates how to provision and deploy a fully autonomous, 24/7 Credence sovereign node on a **$4/month Hetzner CX22 Cloud VPS** (2 vCPU, 4GB RAM) using native systemd service daemons.

---

## 1. Provisioning Your Hetzner Server

1. Log into **Hetzner Cloud Console** and click **Add Server**.
2. Select **Ubuntu 24.04 LTS** and instance type **CX22** ($4.00 / month).
3. Add your SSH public key and click **Create & Buy Now**.

---

## 2. Server Installation Commands

SSH into your new server and install Credence:

```bash
# 1. Update system packages and install Python 3.12 + pipx
$ sudo apt update && sudo apt upgrade -y
$ sudo apt install -y python3-pip python3-venv git pipx

# 2. Install Credence CLI globally via pipx
$ pipx install credence

# 3. Mint node identity and bootstrap SQLite WAL state
$ credence germinate --alias "hetzner-sovereign-01"
```

---

## 3. Creating the systemd Background Service

```bash
# Generate and install systemd unit file
$ sudo tee /etc/systemd/system/credence.service > /dev/null <<EOF
[Unit]
Description=Credence Epistemic Sovereign Node
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu
ExecStart=/home/ubuntu/.local/bin/credence serve --port 8765 --sifter
Restart=always
RestartSec=5
EnvironmentFile=/home/ubuntu/.env

[Install]
WantedBy=multi-user.target
EOF

# Enable and start the service
$ sudo systemctl daemon-reload
$ sudo systemctl enable --now credence.service
```

---

## 4. Related Guides

* 🍓 [Raspberry Pi Homelab Guide](../operations/raspberry-pi-homelab.md)
* 🐳 [Docker Compose Quickstart](../operations/docker-compose-quickstart.md)

---
## 24/7 Background Daemon Setup on Low-Cost VPS

To host an autonomous 24/7 Credence node on a Hetzner Cloud or Linode VPS for $<\$5/\text{month}$:

### Systemd Service Definition (`/etc/systemd/system/credence.service`)
```ini
[Unit]
Description=Credence Sovereign Epistemic Node
After=network.target

[Service]
Type=simple
User=credence
WorkingDirectory=/opt/credence
ExecStart=/opt/credence/.venv/bin/credence sifter run --daemon --interval 3600
Restart=always
RestartSec=10
LimitNOFILE=65535
ProtectSystem=full
ProtectHome=true

[Install]
WantedBy=multi-user.target
```

| Service Parameter | Configuration Value | Security & Reliability Benefit |
| :--- | :--- | :--- |
| `Restart=always` | Automatic recovery | Node restarts automatically on OOM or system reboot |
| `ProtectSystem=full` | Read-only OS filesystem | Sandboxes daemon against unauthorized binary modifications |
| `LimitNOFILE=65535` | 65,535 file descriptors | Supports hundreds of concurrent WebSocket mesh connections |

---
## Hosting Autonomous Nodes on Hetzner VPS

A systemd service configuration ensures 24/7 reliability for background feed sifters on low-cost virtual private servers.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```
