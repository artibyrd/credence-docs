---
title: "Node & P2P Mesh Telemetry Dashboard Architecture"
description: "Technical specification for real-time node operator observability, BitTorrent compute savings tracking, and 4-way parity telemetry interfaces."
since_version: "v1.15.0"
verified_version: v2.15.0
last_verified: 2026-08-23
---

# Node & P2P Mesh Telemetry Dashboard Architecture

> **Specification Identifier**: `BLUEPRINT-019`  
> **Status**: Verified in `v1.21.7`  
> **Target Surfaces**: Zero-Build Web UI (`credence.nexus/dashboard.html`, `credence.nexus/mesh.html`), Rich CLI (`credence stats [--mesh]`), Textual TUI (`[H] Health`, `[M] Mesh Network`), FastMCP 2.0 (`credence://mesh/stats`, `credence://mesh/network-health`)

---

## 1. Executive Summary & Design Principles

Credence operates as a decentralized, federated network of independent validator and sifter nodes. As a node operator and ecosystem participant, visibility into **local execution**, **whole-mesh network dynamics**, and **economic efficiency** is essential for maintaining epistemic integrity and optimizing compute resources.

The **Credence Node & Mesh Telemetry Dashboard** adheres to three core architectural principles:

1. **Dual-Perspective Live Observability ("My Node" & "Whole Mesh")**:
   - **First-Person Operator Primacy (`dashboard.html`)**: Local server uptime, memory RSS vs. 850 MB ceiling, cost profile, token headroom, scored pages breakdown, and local SRE percentiles.
   - **Macro Live Swarm & Peering Health (`mesh.html`)**: Dynamic live $N \ge 1$ topology from active `PeerMetricRecord` rows, dynamic Byzantine quorum capacity ($f = \lfloor (N-1)/3 \rfloor$), and automatic Standalone radar mode when $N=1$.
   - **Hermetic Chaos Playground (`playground.md` / `playground.html`)**: Dedicated 5-scenario 13-node Watts-Strogatz chaos simulator (Normal, Barbell Partition, Sybil Cartel Eclipse, Seed Failover, Epidemic Burst) for interactive exploration and training without conflating with live production infrastructure.
2. **Universal 4-Way Feature Parity**: Operators can access identical telemetry structures across Web, CLI, TUI, and FastMCP agent protocols.
3. **Zero-Build & Zero-npm Strict Invariant**: Web dashboards must run hermetically using vanilla HTML5, CSS Custom Properties, and native ES Modules with zero build steps and zero `npm` packages.

---

## 2. Telemetry Ingestion & Aggregation Architecture

---

## 3. Mathematical Metric Definitions

### 3.1 Verbatim Grounding Quotient (\(G\))

Every audit citation must match the raw HTML DOM character-for-character after whitespace normalization. The node's grounding quotient is defined as:

\[
G = \frac{\sum_{i=1}^{N_{\text{citations}}} \mathbb{I}(\text{dom\_match}_i)}{N_{\text{citations}}} \equiv 1.00
\]

Any non-zero deviation indicates prompt hallucination and automatically triggers a 50% reputation slash.

### 3.2 BitTorrent Work-Sharing Compute Savings

When a node discovers a syndicated feed item that has already been evaluated and signed by a trusted peer ($Q_j \ge 0.70$), it adopts the signed attestation at 0 token cost:

\[
T_{\text{saved}} = \sum_{k=1}^{M_{\text{adopted}}} T_{\text{tokens}}(k) \approx M_{\text{adopted}} \times 4{,}200 \text{ tokens}
\]

\[
\text{USD}_{\text{avoided}} = \frac{T_{\text{saved}}}{1{,}000{,}000} \times \$0.70
\]

\[
\eta_{\text{mesh}} = \frac{M_{\text{adopted}}}{N_{\text{audits}} + M_{\text{adopted}}} \times 100\%
\]

---

## 4. REST API & FastMCP Schema Specification

### 4.1 Node-Centric Telemetry (`GET /api/v1/mesh/stats` & `credence://mesh/stats`)

```json
{
  "service": "credence",
  "version": "1.21.7",
  "timestamp": "2026-08-20T02:50:00Z",
  "my_node": {
    "node_id": "node_9580dc91",
    "node_pubkey": "ed25519:9580dc91...",
    "status": "healthy",
    "active_profile": "balanced",
    "uptime_seconds": 224540,
    "uptime_human": "2d 14h 22m",
    "memory_mb": 142.5,
    "memory_limit_mb": 850.0,
    "memory_percent": 16.8,
    "total_audited_lifetime": 635,
    "total_audited_today": 414,
    "avg_suspicion_score": 18.4,
    "avg_grounding_quotient": 1.00,
    "verdicts_breakdown": {
      "clean": 298,
      "low_suspicion": 266,
      "suspicious": 66,
      "high_deception": 3,
      "satire": 2
    },
    "merit": {
      "score": 85.0,
      "tier": "SPROUT"
    },
    "token_headroom": {
      "remaining_quota": 500000,
      "circuit_breaker": "NORMAL"
    }
  },
  "mesh_dynamics": {
    "connected_peers_count": 4,
    "seeds_status": {
      "canonical_domain": "seeds.credence.nexus",
      "is_reachable": true,
      "seed_nodes_count": 2
    },
    "compute_savings": {
      "total_queries_resolved": 640,
      "local_evaluations_count": 635,
      "adopted_from_mesh_count": 5,
      "work_sharing_efficiency_pct": 92.3,
      "tokens_saved_estimate": 21000,
      "usd_saved_estimate": 0.01
    },
    "byzantine_safety_margin": "3f+1 Verified (N=13, f=4)"
  }
}
```

### 4.2 Whole-Mesh Network Health (`GET /api/v1/mesh/network-health` & `credence://mesh/network-health`)

```json
{
  "service": "credence",
  "version": "1.21.7",
  "timestamp": "2026-08-20T02:50:00Z",
  "cluster_topology": {
    "name": "Watts-Strogatz Small-World Lattice",
    "model_parameters": {
      "nodes_count": 13,
      "degree_k": 4,
      "rewiring_beta": 0.20,
      "diameter": 3,
      "average_path_length": 1.78
    },
    "byzantine_resilience": {
      "formula": "N >= 3f + 1",
      "total_nodes": 13,
      "max_byzantine_faults": 4,
      "quorum_threshold_pct": 67.0,
      "quorum_health": "OPTIMAL",
      "active_honest_nodes": 13,
      "quarantined_nodes": 0
    },
    "epistemic_consensus": {
      "grounding_quotient": 1.00,
      "score_delta_stdev": 2.8,
      "galileo_convergence_pct": 99.4,
      "sybil_cartels_isolated": 0
    },
    "global_compute_savings": {
      "total_queries_resolved": 8420,
      "total_local_evaluations": 650,
      "adopted_from_mesh_count": 7770,
      "work_sharing_efficiency_pct": 92.3,
      "tokens_saved_estimate": 32634000,
      "usd_saved_estimate": 22.84
    }
  },
  "nodes": [
    {
      "node_id": "node_1",
      "alias": "anchor-us-central1",
      "role": "ROOT_GENESIS_ANCHOR",
      "profile": "ULTRA",
      "region": "us-central1",
      "quality_score": 0.995,
      "uptime_pct": 99.98,
      "grounding_quotient": 1.00,
      "status": "HEALTHY"
    }
  ],
  "edges": [
    {
      "source": "node_1",
      "target": "node_5",
      "latency_ms": 78,
      "type": "CHORD_SHORTCUT",
      "status": "ACTIVE"
    }
  ]
}
```

---

## 5. CLI & TUI Interface Usage

### 5.1 CLI Commands (`credence stats`)

```bash
# Standard interactive operator view ("My Node at a Glance")
credence stats

# Whole-Mesh Network Health and 13-node Watts-Strogatz topology view
credence stats --mesh

# Detailed publisher domains, categories, or mesh edges breakdown
credence stats --breakdown
credence stats --mesh --breakdown

# Continuous real-time terminal watch
credence stats --watch

# Raw machine-readable JSON exports
credence stats --json
credence stats --mesh --json
```

### 5.2 Textual TUI Workstation

Launch the interactive terminal workstation:
```bash
credence tui
```
Navigate to `[🚨 Ops & Alerts]` or `[🏆 Leaderboard]` to inspect real-time rolling latencies, active alert conditions, merit badges, and mesh cluster status.

