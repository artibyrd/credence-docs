---
title: 'Walkthrough 05: Migrating from Credence v1.x to v2.x'
description: Step-by-step migration guide for upgrading codebase, database schemas, and CLI commands from v1.x to v2.x.
since_version: v2.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 5
---

# Walkthrough 05: Migrating from Credence v1.x to v2.x

This walkthrough guides operators and developers through migrating existing Credence deployments from **v1.x** to the modular, high-efficiency **v2.x architecture**.

---

## 1. Key Architectural Changes in v2.x

1. **500 LOC Ceiling Law (`inv-architecture-governance`)**: Subsystems decoupled into clean subpackages (`credence.pipeline`, `credence.mesh`, `credence.governor`, `credence.identity`).
2. **Deterministic Calculation Naming (`compute_*`)**: Pure mathematical functions renamed to `compute_*` across all modules.
3. **FastMCP 2.0 Dual Transport**: Added native stdio and SSE support for AI coding assistants.
4. **Scale-to-Zero Cloud Run**: Migration from persistent VM daemons to stateless serverless containers.

---

## 2. Updating Function Imports

Update legacy function imports in your Python scripts:

### Topic Entropy & Weather Calculations
```python
# ❌ Old v1.x
from credence.scoring import calculate_entropy

# ✓ New v2.x
from credence.metrics.entropy import compute_topic_entropy
```

### Node Longevity & Uptime Decay
```python
# ❌ Old v1.x
from credence.mesh.quality import get_uptime_score

# ✓ New v2.x
from credence.mesh.quality import compute_node_quality
```

### Bayesian Consensus Evaluation
```python
# ❌ Old v1.x
from credence.consensus import evaluate_consensus

# ✓ New v2.x
from credence.mesh.consensus import compute_bayesian_consensus
```

---

## 3. Database Schema Migration

Upgrade your local SQLite or PostgreSQL database:

```bash
# Backup existing database
$ cp data/credence.db data/credence-v1-backup.db

# Apply v2.x database migrations
$ credence db upgrade head

# Verify schema integrity
$ credence db check-integrity
```

---

## 4. Related Guides

* 📘 [V2 Architecture & 500 LOC Modularity Blueprint](../blueprints/v2-architecture-and-500-loc-modularity.md)
* 🚀 [Release Changelog](../changelog.md)

## Architectural Invariants & Verification Mechanics

The implementation of **05 Migrating From V1 To V2** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **05 Migrating From V1 To V2** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "walkthroughs"

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
