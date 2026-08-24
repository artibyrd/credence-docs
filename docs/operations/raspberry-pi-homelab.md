---
title: Raspberry Pi & HomeLab 24/7 Node Runbook
description: Deploying a low-power ARM64 Credence mesh node with systemd, automated
  SQLite maintenance, and dynamic DNS.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

> **Note**: Raspberry Pi & HomeLab 24/7 Node Runbook

Running a persistent Credence node on a **Raspberry Pi 5 (8GB)** or low-power mini-PC contributes seed capacity to the Credence Mesh, seeds syndicated news attestations to peers, and provides a local 0-token caching proxy for home and office AI agents.

---

## 1. Hardware Requirements

- **Device**: Raspberry Pi 5 (4GB or 8GB RAM recommended) or any ARM64 / x86-64 mini-PC.
- **Storage**: High-endurance microSD (A2 rated) or NVMe SSD HAT (recommended for high SQLite write endurance).
- **Power**: 5V/5A USB-C power supply with UPS backup.
- **OS**: Ubuntu Server 24.04 LTS (64-bit) or Debian 12 (Bookworm).

---

## 2. Installation on ARM64

```bash
# 1. Update system packages
sudo apt update && sudo apt install -y python3-pip python3-venv git curl

# 2. Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# 3. Clone and install Credence
git clone https://github.com/artibyrd/credence.git /opt/credence
cd /opt/credence
poetry install --only main
```

---

## 3. Configuring `systemd` Daemon (`credence-node.service`)

Create a systemd unit file at `/etc/systemd/system/credence-node.service`:

```ini
[Unit]
Description=Credence P2P Mesh & FastMCP Node
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/opt/credence
ExecStart=/home/pi/.local/bin/poetry run credence mesh start --port 8765 --node-name "homelab-pi5-alpha"
Restart=always
RestartSec=10
LimitNOFILE=65536
Environment=CREDENCE_GEMINI_API_KEY=your-gemini-key
Environment=CREDENCE_PROFILE=BALANCED

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now credence-node
sudo systemctl status credence-node
```

---

## 4. Monitoring & Dynamic DNS

If hosting a public seed peer behind a residential ISP:
1. **Port Forwarding**: Forward TCP port `8765` from your router to your Raspberry Pi local IP.
2. **Dynamic DNS (DuckDNS / Cloudflare DDNS)**: Keep `pi-node.yourdomain.com` pointed to your residential IPv4/IPv6.
3. **Check Logs**:
```bash
   journalctl -u credence-node -f -n 50
```

---

## 5. Linux Administration & Hardware References

### 📚 Official Hardware & System Documentation
* **Raspberry Pi**: [Raspberry Pi 5 Hardware Specs & NVMe HAT Documentation](https://www.raspberrypi.com/documentation/)
* **Operating Systems**: [Ubuntu Server 24.04 LTS for ARM64](https://ubuntu.com/download/raspberry-pi) &bull; [Debian Bookworm on ARM](https://www.debian.org/ports/arm/)
* **Service Management**: [systemd Service Units & Resource Control](https://systemd.io/)
* **DNS & Dynamic IP**: [Cloudflare Dynamic DNS (DDNS) API Automation](https://developers.cloudflare.com/api/operations/dns-records-for-a-zone-patch-dns-record)

### 🔗 Related Homelab Guides in Credence
* 🗄️ [Database Pruning & SQLite WAL Maintenance](database-pruning-wal.md)
* 🔒 [Tailscale & WireGuard Overlay Peering](tailscale-wireguard-mesh.md)
* 🔔 [Tutorial 13: Discord Alerting & Basement Monitoring](../tutorials/13-discord-alerting-and-basement-monitoring.md)
* 💡 [Blog: Testing 13-Node Swarms on a $35 Raspberry Pi](../../blog/testing-13-node-swarms-on-a-raspberry-pi.md)
* 🚀 [Tutorial 11: Autonomous Node Germination & Ignition](../tutorials/11-autonomous-node-germination-and-swarm-ignition.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Raspberry Pi Homelab** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Raspberry Pi Homelab** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "operations"

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
