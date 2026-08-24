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

```
credence/
+-- cli/                          # CLI commands & argument parsing (<400 LOC)
|   +-- commands/                 # Discrete command handlers (<300 LOC each)
|   +-- main.py                   # Main CLI dispatch entry point
+-- pipeline/                     # Scrubber, regex heuristics, and LLM adapters
|   +-- scrubber.py               # DOM normalization & tag stripping (<250 LOC)
|   +-- heuristics.py             # 46 offline regex rules (<300 LOC)
|   +-- llm_adapter.py            # Frontier reasoning engine bridge (<350 LOC)
|   +-- evaluator.py              # Calibrated scoring & saturation (<280 LOC)
+-- mesh/                         # P2P gossip, consensus, and quality scoring
|   +-- cluster.py                # WebSocket connection manager (<350 LOC)
|   +-- consensus.py              # Bayesian weighted medians & Galileo Rule (<300 LOC)
|   +-- quality.py                # 5-factor node quality & uptime (<250 LOC)
+-- governor/                     # Token budget & circuit breakers (<350 LOC)
+-- identity/                     # Ed25519 identity, root signing, & CAS (<300 LOC)
+-- models/                       # SQLModel & Pydantic entity schemas (<350 LOC)
```

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

## Architectural Invariants & Verification Mechanics

The implementation of **V2 Architecture And 500 Loc Modularity** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **V2 Architecture And 500 Loc Modularity** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blueprints"

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
