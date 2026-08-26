---
title: 'Technical Blueprint: Operator Telemetry & Mesh Dashboard'
description: Real-time operator metrics, WebSocket ring buffer aggregation, D3/SVG vector telemetry, and zero-mock production boundary.
since_version: v1.12.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 11
---

# Technical Blueprint: Operator Telemetry & Mesh Dashboard

This technical blueprint specifies the architecture of the **Operator Telemetry & Mesh Dashboard** (`credence.nexus/dashboard.html` and `credence.nexus/mesh.html`), enforcing strict real-time data streaming, in-memory ring buffers, and the **Zero-Mock Production Boundary Invariant (`inv-production-telemetry-boundary`)**.

---

## 1. Zero-Mock Production Boundary Invariant

A critical invariant in Credence is the strict physical boundary between **Production Telemetry** and **Simulated Environments**:
- **Operator Dashboard (`credence.nexus/dashboard.html`)**: Must report 100% genuine node reality. If the node is running in isolation ($N=1$), it must display `STANDALONE (0 Peers Connected)` with active local SQLite metrics. Zero synthetic or hardcoded peer graphs are permitted in production surfaces.
- **Interactive Playground (`docs.credence.run/#playground`)**: Sandboxed educational simulators belong exclusively inside documentation playground routes, clearly marked with simulation badges.

| Observability Plane | Target Environment | Telemetry Source | Simulation Allowed |
| :--- | :--- | :--- | :---: |
| **Production Dashboards** | `credence.nexus` / `admin.credence.run` | 100% Genuine Node State ($N \ge 1$) | **NO** (Zero mock data) |
| **Documentation Lab** | `docs.credence.run/#docs/playground` | Educational Chaos & Simulators | **YES** (Interactive playground) |

---

## 2. Real-Time Telemetry Pipeline & Streaming Architecture

The telemetry pipeline aggregates metrics across four discrete operational dimensions using a lock-free in-memory ring buffer:

Node Subsystems (Auditor, P2P Mesh, Token Governor, FastMCP)
In-Memory 1,000-Event Circular Ring Buffer
- Atomic timestamped metric events
- Zero disk I/O overhead on hot query paths
FastMCP SSE & REST API Gateway (`/api/v1/telemetry`)
- Compresses event histograms into coarse buckets
- Applies differential privacy transformations
Zero-Build Web Dashboard (`credence.nexus/mesh.html`)
- Native SVG vector gauge rendering
- Real-time peer latency & Byzantine chord diagrams

---

## 3. Core Telemetry Dimensions & Formulas

1. **P2P Work-Sharing Efficiency ($\eta_{\text{mesh}}$)**:
   $$\eta_{\text{mesh}} = \frac{N_{\text{attestation\_hits}}}{N_{\text{total\_audits}}} \times 100\%$$
   Measures the percentage of incoming queries resolved via cached Ed25519 peer receipts rather than raw LLM inference.
2. **Token Headroom Velocity ($V_{\text{headroom}}$)**:
   Calculates the rolling rate of token expenditure relative to the 70% safety ceiling, predicting whether the node will trip into `QUOTA_PRESERVED` mode within the current hour.
3. **Consensus Concordance Median ($C_{\text{global}}$)**:
   Tracks network-wide agreement across peer score outputs, identifying emerging network partitions or rogue Sybil cartels ($3f+1$).

---

## 4. REST API & FastMCP Endpoints

```
GET  /api/v1/telemetry/live        # Returns real-time JSON metrics snapshot
GET  /api/v1/telemetry/history     # Returns 24-hour histogram buckets
GET  /sse/telemetry                # Server-Sent Events stream for live dashboards
```

### JSON Response Schema

```json
{
  "node_id": "ed25519:6c57f7b3a1b2...",
  "node_mode": "STANDALONE",
  "connected_peers_count": 0,
  "uptime_seconds": 86400,
  "rolling_hourly_tokens": 14200,
  "headroom_percentage": 85.8,
  "work_sharing_ratio": 0.923,
  "p95_latency_ms": 142.5,
  "status": "HEALTHY"
}
```

---

## 5. Operator CLI & Diagnostic Inspection

```bash
# Query live real-time telemetry metrics in terminal
$ credence stats

# Stream continuous telemetry updates
$ credence stats --watch --interval 1s
```

---

## 6. Related Protocols & Blueprints

* 🌐 [Interface Telemetry Loopback Protocol (ITLP-v1)](../protocols/telemetry-loopback.md)
* 📘 [The Invariant Bible](../invariants.md) — Production Telemetry vs. Simulation Boundary
* 📊 [Cross-Model Epistemic Pareto Benchmark](../protocols/cross-model-pareto-benchmark.md)

---
## Node & Mesh Telemetry Dashboard Architecture

The Credence operator telemetry dashboard (`credence.nexus`) provides real-time observability into local node health, P2P gossip propagation, and token consumption:

| Dashboard Metric | Subsystem Origin | Optimal Range | Alert Threshold |
| :--- | :--- | :--- | :--- |
| **Query Latency (P50/P95)**| Starlette FastMCP Engine | `0.5ms – 5.0ms` | `> 250ms` (Throttled) |
| **Token Headroom Safety** | Token Governor Subsystem | `85.0% – 100.0%` | `< 30.0%` (Preserved Mode) |
| **Peer Gossip Concordance**| Watts-Strogatz Mesh Relay | $C_i \ge 0.850$ | $C_i < 0.600$ (Probation) |
| **SQLite WAL Lock Time** | Async Storage Engine | `< 0.05ms` | `> 5.0ms` (Checkpoint needed) |

```bash
# Inspect live node telemetry from local CLI
$ credence stats --json
```

---
## Real-Time Prometheus & Starlette Telemetry Metrics

The `/health` endpoint exports JSON telemetry covering memory usage, request counts, P50/P95 latencies, and active alerts.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Node And Mesh Telemetry Dashboard** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
