---
title: 'Cookbook: $4/Month Hetzner VPS & Systemd Setup'
description: Deploying a 24/7 self-hosted sovereign node on a budget Hetzner cloud server using systemd and SQLite WAL.
since_version: v1.14.0
verified_version: v2.16.2
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

## Architectural Invariants & Verification Mechanics

The implementation of **Hetzner Vps And Systemd Setup** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Hetzner Vps And Systemd Setup** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "cookbooks"

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
