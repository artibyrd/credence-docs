---
title: 'Operational Guide: Cost Governance & Real-Time Token Dashboard'
description: Managing spending limits, inspecting token burn rates, tripping circuit breakers, and configuring live cost dashboards.
since_version: v1.12.0
verified_version: v2.16.6
last_verified: 2026-08-24
sidebar:
  order: 19
---

# Operational Guide: Cost Governance & Real-Time Token Dashboard

This operational guide provides operators with complete instructions for monitoring LLM token expenditures, configuring financial tripwires, and managing the **Real-Time Cost Dashboard** (`credence.nexus/cost.html`).

---

## 1. The Cost Governance Architecture

The **Token Safety Governor** protects node operators from runaway API billing spikes by enforcing three strict spending boundaries:

1. Hourly Token Ceiling: Max 100k tokens / hour
2. Daily USD Hard Cap: Max $0.50 / day spend cap
3. 30% Headroom Tripwire: Offline fallback at 70% burn

---

## 2. Real-Time Terminal Cost Diagnostics

Operators can inspect token expenditures and spending velocity from the CLI:

```bash
# View live token odometer and hourly budget status
$ credence governor status

# View detailed 30-day historical spending breakdown
$ credence governor history --window 30d

# Dynamically set new hourly token limit
$ credence governor set --max-hourly 150000
```

### Sample Terminal Output

╭---------------------- 💰 Token Safety Governor ----------------------╮
Hourly Limit:     100,000 Tokens   | Used (This Hour): 14,250 (14.2%)
Daily Cap (USD):  $0.50 Max        | Spent (Today):    $0.06 (12.0%)
Headroom State:   ACTIVE (85.8% Headroom Available)
Active Model:     gemini-3.7-flash ($0.34 / 1M tokens)
Default Thinking: 1,024 Tokens
Circuit Breaker:  ONLINE & READY
╰----------------------------------------------------------------------╯

---

## 3. Emergency Circuit Breakers

If an operator needs to instantly halt external LLM API consumption during an active development session:

```bash
# Trip emergency manual circuit brake
$ credence governor brake --reason "Manual override for local development"

# Resume autonomous execution when ready
$ credence governor resume
```

---

## 4. Related Protocols & Blueprints

* 🛡️ [Token Safety Governor Protocol Specification](../protocols/token-governor.md)
* 📊 [Cross-Model Epistemic & Economic Pareto Benchmark](../protocols/cross-model-pareto-benchmark.md)

---
## Financial Governance & Budget Telemetry

To protect node operators against unexpected API billing spikes during breaking news events, the Token Governor enforces strict mathematical spending bounds:

| Spend Tier | Hourly Token Cap | Permitted Workloads | Throttling Action |
| :--- | :---: | :--- | :--- |
| **Green Zone** | `0 – 70,000` | All workloads (Feed sifters, gossip, FastMCP) | Unthrottled operation |
| **Yellow Zone** | `70,000 – 100,000` | Interactive queries & FastMCP pair programming | Sifter and background tasks paused |
| **Red Zone** | `> 100,000` | Offline regex heuristics & peer attestation cache | Trips `QUOTA_PRESERVED` circuit breaker |

```bash
# Check current hourly spend and remaining headroom
$ credence quota status --json
```

---
## Token Budget Monitoring and Spend Controls

The Token Governor dashboard displays real-time token burn rates, remaining headroom, and active circuit breaker states.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Cost Governance And Dashboard** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Cost Governance And Dashboard** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "cost_governance_and_dashboard" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
