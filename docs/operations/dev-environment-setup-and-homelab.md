---
title: 'Operational Guide: Dev Environment Setup and Homelab'
description: Fast local workstation bootstrapping, hermetic testing, Justfile recipes, and running local dev server nodes.
since_version: v1.14.0
verified_version: v2.17.0
last_verified: 2026-08-25
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

---
## Setting Up a Local Development Environment and Homelab

Step-by-step instructions for configuring poetry, Python 3.12, and local SQLite for fast offline 개발 and testing.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Dev Environment Setup And Homelab** in production, operators should adhere to the following maintenance procedures:

| Operational Phase | Frequency | Standard Command / Tool | Verification Target |
| :--- | :--- | :--- | :--- |
| **Pre-Flight Health Check** | Prior to deploy | `just preflight` | Toolchain, Python 3.12, Docker status |
| **Diagnostic Scan** | Hourly (Automated) | `credence stats --json` | Latency, memory usage, token headroom |
| **State Pruning** | Weekly | `credence db prune --retention-days 30` | SQLite WAL cleanup & disk optimization |
| **Failover Drill** | Monthly | `credence db backup --verify-replica` | Cross-region replica readiness verification |

```bash
# Verify operational readiness
$ credence stats --detailed
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Dev Environment Setup And Homelab** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "dev_environment_setup_and_homelab" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
