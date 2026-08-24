---
title: 'Operational Guide: Tailscale & WireGuard Mesh Peering'
description: Encrypted point-to-point mesh networking, overlay subnet peering, and NAT traversal for Credence nodes.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 21
---

# Operational Guide: Tailscale & WireGuard Mesh Peering

This guide details how to configure **Tailscale** and **WireGuard** overlay networks to peer self-hosted Credence nodes across corporate firewalls, residential NATs, and multi-cloud regions with zero public IP exposure.

---

## 1. NAT Traversal & Encrypted Mesh Overlay

In peer-to-peer gossip networks, nodes hosted on residential broadband or behind university firewalls cannot accept inbound WebSocket connections without complex port-forwarding.

Using Tailscale or native WireGuard solves this:
- Nodes join a private, encrypted mesh overlay (e.g., `100.64.0.0/10`).
- Direct peer-to-peer encrypted WireGuard tunnels are established using DERP NAT traversal.
- P2P gossip streams flow securely over private IP addresses (`ws://100.x.y.z:8765/gossip`).

[Homelab Node (Behind NAT)] --► [WireGuard Encrypted Tunnel] ◄-- [Cloud Run Node]

---

## 2. Step-by-Step Peering Runbook

### Step 1: Install Tailscale on Node Host
```bash
# Install Tailscale on Ubuntu/Debian host
$ curl -fsSL https://tailscale.com/install.sh | sh
$ sudo tailscale up --authkey=tskey-auth-your-key
```

### Step 2: Launch Credence on Tailscale Subnet
```bash
# Bind Credence gossip listener strictly to private Tailscale IP
$ credence germinate \
    --host $(tailscale ip -4) \
    --port 8765 \
    --alias "tailscale-worker-01"
```

### Step 3: Peer with Remote Mesh Seed
```bash
$ credence mesh connect --peer "ws://100.82.14.92:8765/gossip"
```

---

## 3. Related Guides

* 🕸️ [Tutorial 05: 3-Node Mesh Quickstart](../tutorials/05-mesh-quickstart.md)
* 🍓 [Raspberry Pi Homelab Guide](raspberry-pi-homelab.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Tailscale Wireguard Mesh** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Tailscale Wireguard Mesh** using standard CLI commands and FastMCP 2.0 tools:

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
