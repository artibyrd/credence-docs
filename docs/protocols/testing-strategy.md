---
title: Ecosystem Testing Strategy & Gauntlet
description: 6-tier hermetic test architecture, shift-left governance gates, in-memory 13-node mesh swarm, and live rotating gauntlet.
since_version: v1.0.0
verified_version: v2.18.3
last_verified: 2026-08-29
sidebar:
  order: 13
---

# Ecosystem Testing Strategy & Gauntlet

Credence enforces a **6-Tier Shift-Left Testing Architecture** designed to execute in $<35$ seconds in memory while guaranteeing mathematical, cryptographic, and interface integrity.

---

## 1. The 6-Tier Shift-Left Testing Hierarchy

| Testing Tier | Scope & Focus | Target Duration | Dependencies |
| :--- | :--- | :--- | :--- |
| **Tier 1: Hermetic Unit Tests** | Core algorithms, scoring, and crypto | `<15s` | In-memory SQLite, 0 network |
| **Tier 2: Universal Interface Isolation**| 4-way parity (CLI, FastMCP, TUI, Web) | `<5s` | Zero-npm vanilla modules |
| **Tier 3: 13-Node Mesh Cluster** | Watts-Strogatz P2P consensus simulation | `<8s` | In-memory WebSocket gossip |
| **Tier 4: Adversarial Protocol Defenses**| Byzantine Sybil cartel slashing | `<5s` | Mock adversarial nodes |
| **Tier 5: Zero-Build DOM Integrity** | Interactive playground route mounting | `<5s` | Static AST and DOM handlers |
| **Tier 6: Live Rotating E2E Gauntlet** | Full-stack end-to-end evaluation | `<30s` | Rotated deterministic seeds |

---

## 2. Detailed Tier Specifications

### 2.1 Tier 1: Hermetic In-Memory Unit & Math Suite (`@pytest.mark.unit`)
- Executes entirely in-process using SQLite WAL in memory and mock keypairs.
- Tests SimHash-64 bitwise Hamming distance, Shannon topic entropy calculations, RFC 8785 canonical JSON sorting, and token governor spending limits.
- Zero network I/O, zero browser runtimes.

### 2.2 Tier 2: Universal Interface Isolation & 4-Way Parity
- Validates 100% feature symmetry across CLI commands, FastMCP 2.0 tools, Textual TUI widgets, and Web UI components.
- Asserts that all interfaces deserialize datetime timestamps to RFC 3339 strings and display identical score badges.

### 2.3 Tier 3: 13-Node P2P Mesh Cluster & Byzantine Defense
- Boots 13 lightweight asynchronous node instances in memory connected in a Watts-Strogatz small-world lattice ($k=4, \beta=0.20$).
- Tests epidemic gossip propagation, $3f+1$ Byzantine Sybil cartel resistance, network partition healing, and The Galileo Rule override.

### 2.4 Tier 4: Adversarial Red-Team & Protocol Defense
- Injects malicious prompt injections, XML bombs, SSRF target URLs, and parser cloaking payloads.
- Verifies that `<untrusted_source_text>` wrapping prevents prompt injection leaks and that metadata IP requests are blocked.

### 2.5 Tier 5: Zero-Build Playwright & DOM Integrity
- Runs headless browser checks asserting that all 14 interactive playgrounds mount without JavaScript console errors and that zero npm dependencies exist in `credence-docs/`.

### 2.6 Tier 6: Reusable Live Rotating E2E Gauntlet
- Periodically executes deterministic audits against real-world news feeds using rotating seed anchors.

---

## 3. Operational Task Commands & Test Runner Guide

```bash
# 1. Run standard hermetic unit test suite (<35s)
$ just test-unit

# 2. Run documentation integrity, frontmatter, parity, and living canon tests
$ just test-docs

# 3. Run mock end-to-end integration tests
$ just test-mock

# 4. Run reusable live rotating E2E gauntlet
$ just test-live

# 5. Run parallel pre-commit QA verification gate (<3s)
$ just check
```

---

## 4. Related Protocols & References

* 📘 [The Invariant Bible](../invariants.md) — Hermetic Unit Test Isolation
* 💥 [Tutorial 06: 13-Node Chaos Lab](../tutorials/06-thirteen-node-chaos-lab.md)
* 🍓 [Testing 13-Node Swarms on a Raspberry Pi Essay](../../blog/testing-13-node-swarms-on-a-raspberry-pi.md)

---
## The 6-Tier Epistemic Testing Hierarchy

From hermetic unit tests to 13-node mesh simulations, multi-tiered testing ensures bulletproof real-world reliability.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Testing Strategy** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Testing Strategy** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "testing_strategy" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
