---
title: 'Walkthrough 05: Migrating from Credence v1.x to v2.x'
description: Step-by-step migration guide for upgrading codebase, database schemas, and CLI commands from v1.x to v2.x.
since_version: v2.0.0
verified_version: v2.18.1
last_verified: 2026-08-28
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

---
## Upgrading Custom Pipelines to Credence v2.0.0

Upgrading from Credence v1.x to v2.0.0 introduces pure compute ontologies and FastMCP 2.0:

| Legacy v1.x Pattern | Modern v2.0.0 Replacement | Migration Rationale |
| :--- | :--- | :--- |
| `credence.evaluate(url)` | `credence.pipeline.evaluate_snapshot()` | Pure functional pipeline with CAS |
| `FastMCP 1.0 stdio` | `FastMCP 2.0 dual transport (stdio + SSE)` | Remote cluster compatibility |
| Hardcoded Invariants | Dynamic Living Canon references | Scalable invariant governance |

```bash
# Run automated v2 migration check
$ credence migrate --check
```

---
## Step-by-Step Upgrades to Credence v2.0.0

Detailed instructions for migrating legacy v1 scripts and configuration files to the modern v2 architecture.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **05 Migrating From V1 To V2**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **05 Migrating From V1 To V2** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "05_migrating_from_v1_to_v2" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
