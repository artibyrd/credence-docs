---
title: 'Operational Guide: Dev Environment Setup and Homelab'
description: Fast local workstation bootstrapping, hermetic testing, Justfile recipes, and running local dev server nodes.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 2
---

# Operational Guide: Dev Environment Setup and Homelab

This guide provides step-by-step instructions for onboarding developers, setting up local homelab workstations, and running Credence in under **60 seconds**.

---

## 1. Quick Developer Onboarding (`just ignite`)

Credence provides a single onboarding command that validates system dependencies, mints test identities, and runs a pre-flight self-audit:

```bash
# 1. Clone repository and initialize dev environment
$ git clone https://github.com/credence-trust/credence.git
$ cd credence

# 2. Run automated one-command ignition sequence
$ just ignite
```

The `just ignite` recipe executes:
1. Validates Python 3.12+ and Poetry installation.
2. Installs hermetic Python dependencies via `poetry install`.
3. Mints a local development Ed25519 node keypair and bootstraps `.env`.
4. Executes the hermetic in-memory test suite (`just test-unit`).
5. Runs `credence doctor` to certify node health.

---

## 2. Running Local Development Services

```bash
# Launch local REST API, FastMCP SSE stream, and static Web UI with hot reload:
$ just dev

# In a separate terminal, launch the interactive Textual TUI Workstation:
$ just tui
```

### Dev Ports & Local Gateways
- **Local Web UI & Docs Portal**: `http://localhost:8765/`
- **FastMCP 2.0 SSE Transport**: `http://localhost:8765/sse`
- **P2P Gossip WebSocket**: `ws://localhost:8765/gossip`
- **REST API Endpoints**: `http://localhost:8765/api/v1/`

---

## 3. Testing Against Dev Cloud Run (`credence-dev-495173`)

To test your local changes against the live cloud development instance before opening a pull request:

```bash
# Deploy local branch to Dev Cloud Run preview
$ just deploy-dev

# Probe live dev preview endpoints
$ credence stats --endpoint https://dev.credence.run
```

---

## 4. Related Guides

* 🍓 [Raspberry Pi & Homelab Runbook](raspberry-pi-homelab.md)
* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 📘 [The Invariant Bible](../invariants.md) — Decoupled Workspaces & Hermetic Tests

## Architectural Invariants & Verification Mechanics

The implementation of **Dev Environment Setup And Homelab** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Dev Environment Setup And Homelab** using standard CLI commands and FastMCP 2.0 tools:

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
