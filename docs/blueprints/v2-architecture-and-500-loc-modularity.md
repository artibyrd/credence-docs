---
title: 'Technical Blueprint: V2 Modular Architecture & 500 LOC Subpackage Decoupling'
description: Deconstructing monoliths, subsystem boundaries, compute_* calculation purity, and architectural governance.
since_version: v2.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 13
---

# Technical Blueprint: V2 Modular Architecture & 500 LOC Subpackage Decoupling

This technical blueprint documents the structural decomposition, module boundaries, and governance invariants implemented in the **Credence v2.x Modular Architecture**.

---

## 1. The Monolith Problem in v1.x

In Credence v1.x, the codebase grew organically into large files: `credence.py` contained CLI parsing, SQLite operations, and WebSocket handlers in over 1,200 lines of code. This monolithic structure created several architectural problems:
1. **Circular Import Deadlocks**: Asynchronous mesh controllers could not import scoring helpers without triggering circular import errors.
2. **Degraded AI Cognitive Performance**: LLMs assisting with codebase maintenance struggled to track multi-subsystem side effects in 1,000+ line files.
3. **Flaky Test Suites**: Testing a single mathematical formula required mocking the entire SQLite database and WebSocket networking stack.

---

## 2. The 500 LOC Subpackage Decoupling Architecture

In v2.0, we decomposed the codebase into focused subpackages, enforcing **The 500 LOC Ceiling Law (`inv-architecture-governance`)**:

credence/
+-- cli/                          # CLI commands & argument parsing (<400 LOC)
+-- commands/                 # Discrete command handlers (<300 LOC each)
+-- main.py                   # Main CLI dispatch entry point
+-- pipeline/                     # Scrubber, regex heuristics, and LLM adapters
+-- scrubber.py               # DOM normalization & tag stripping (<250 LOC)
+-- heuristics.py             # 46 offline regex rules (<300 LOC)
+-- llm_adapter.py            # Frontier reasoning engine bridge (<350 LOC)
+-- evaluator.py              # Calibrated scoring & saturation (<280 LOC)
+-- mesh/                         # P2P gossip, consensus, and quality scoring
+-- cluster.py                # WebSocket connection manager (<350 LOC)
+-- consensus.py              # Bayesian weighted medians & Galileo Rule (<300 LOC)
+-- quality.py                # 5-factor node quality & uptime (<250 LOC)
+-- governor/                     # Token budget & circuit breakers (<350 LOC)
+-- identity/                     # Ed25519 identity, root signing, & CAS (<300 LOC)
+-- models/                       # SQLModel & Pydantic entity schemas (<350 LOC)

---

## 3. Core Architectural Contracts

1. **Subsystem Isolation**: Modules communicate exclusively through typed interfaces and Pydantic models.
2. **Pure `compute_*` Calculations**: All mathematical and algorithmic transformations are implemented as pure, side-effect-free functions prefixed with `compute_*`.
3. **Shift-Left Governance Gates**: Pre-commit tests statically assert that no Python file or Justfile exceeds 500 lines.

---

## 4. Automated Governance Verification

```bash
# Run architectural governance test gate
$ pytest tests/governance/test_docs_integrity.py -k test_python_and_justfile_500_loc_ceiling
```

---

## 5. Related Blueprints & Protocols

* 📘 [The Invariant Bible](../invariants.md) — Architecture Governance & Modularity
* 📜 [The 500 LOC Ceiling Law Essay](../../blog/the-500-loc-ceiling-law.md)
* 🚀 [Release Changelog](../changelog.md)

---
## Modularity and the 500-Line Ceiling Law

Strict line-count limits encourage modular design, pure functions, and decoupled test suites across the ecosystem.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **V2 Architecture And 500 Loc Modularity** operates according to strict operational parameters and deterministic boundaries:

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **V2 Architecture And 500 Loc Modularity** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "v2_architecture_and_500_loc_modularity" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.

### Decoupling Guidelines for FastMCP & Storage Subsystems

When refactoring modules to comply with the 500 LOC Ceiling Law:
- Isolate database connection pooling and query definitions in dedicated DAO repositories.
- Keep FastMCP tool definitions separated from underlying pure calculation engines.
- Ensure all business logic remains testable in-memory with zero external service dependencies.
