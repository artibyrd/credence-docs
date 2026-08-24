---
title: 'Operational Guide: Zero-Downtime Canary and Blue-Green Deployments'
description: Traffic splitting, automated revision rollbacks, telemetry health gates, and blue-green Cloud Run deploys.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 16
---

# Operational Guide: Zero-Downtime Canary and Blue-Green Deployments

This guide details the automated traffic-splitting, telemetry observation windows, and zero-downtime canary deployment procedures executed during Credence production releases.

---

## 1. The 3-Stage Canary Traffic-Splitting Sequence

| Canary Phase | Traffic Allocation | Health & Latency Validation | Rollback & Cutover Action |
| :--- | :---: | :--- | :--- |
| **Phase 1: Shadow Deploy** | `0%` | Direct HTTP probe to revision URL | Verify container boot & memory limits |
| **Phase 2: Canary Split** | `10%` | 5-minute telemetry observation window | P95 latency < 250ms, 0% 5xx errors |
| **Phase 3: Full Cutover** | `100%` | Route all production traffic to Revision B | Keep Revision A standby for 15 min |

---

## 2. Step-by-Step Canary Runbook (CLI & Terraform)

```bash
# Step 1: Deploy new container revision without routing public traffic
$ gcloud run deploy credence-server-prod \
    --image gcr.io/credence-prod-505902/credence:v2.16.2 \
    --no-traffic \
    --region us-central1

# Step 2: Route 10% canary traffic for observation
$ gcloud run services update-traffic credence-server-prod \
    --to-revisions LATEST=10 \
    --region us-central1

# Step 3: Monitor live telemetry via ITLP-v1
$ credence stats --window 5m

# Step 4: Promote to 100% traffic upon clean telemetry observation
$ gcloud run services update-traffic credence-server-prod \
    --to-latest \
    --region us-central1
```

---

## 3. Instant Rollback Triggers

If P95 latency exceeds $500\text{ms}$ or the 5xx error rate exceeds $0.1\%$ during the canary window:
```bash
# Instantly roll back 100% of traffic to previous known-good revision
$ gcloud run services update-traffic credence-server-prod \
    --to-revisions PREVIOUS=100 \
    --region us-central1
```

---

## 4. Related Guides

* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 🏛️ [Single-Project vs Dual-Project Topologies](single-vs-dual-project-gcp.md)
* 📘 [The Invariant Bible](../invariants.md) — 4-Phase Release & Lean Learning Lifecycle

---
## Zero-Downtime Canary Deployments on Cloud Run

Canary traffic splitting shifts traffic gradually to new container revisions while monitoring error rates and latencies.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Zero Downtime Canary And Blue Green** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Zero Downtime Canary And Blue Green** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "zero_downtime_canary_and_blue_green" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
