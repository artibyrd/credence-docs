---
title: 'The Compute Ontology Revolution: Why Pure Math Belongs in compute_* Functions'
description: How standardizing on compute_* naming across Python, TypeScript, and Rust eliminates state mutation bugs.
since_version: v1.13.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 23
---

# The Compute Ontology Revolution: Why Pure Math Belongs in compute_* Functions

In large software codebases, naming conventions are frequently dismissed as superficial aesthetic preferences. Developers mix and match prefixes indiscriminately: `get_score()`, `calculate_entropy()`, `eval_consensus()`, `parse_quality()`, and `generate_simhash()`.

This lack of semantic discipline conceals a catastrophic architectural hazard: **hidden state mutation**.

When a function named `get_quality()` internally makes network requests, updates database rows, or alters class attributes, callers cannot reason about its side effects. In a high-throughput epistemic evaluation engine processing hundreds of concurrent gossip envelopes, state mutation inside calculation pipelines leads to race conditions, memory leaks, and non-deterministic scores.

To eliminate this class of defects, Credence established **The Compute Naming Ontology (`inv-architecture-governance`)**.

---

## The Strict Compute Ontology Contract

Under the Credence compute ontology, any function prefixed with `compute_*` must adhere to three non-negotiable mathematical properties:

| Compute Ontology Invariant | Definition & Rule | Forbidden Operations | Verification Test Gate |
| :--- | :--- | :--- | :--- |
| **1. 100% Pure Functions** | Mathematical transformations only | Zero global state mutations | Static AST analyzer |
| **2. Zero Network or DB I/O** | `compute_*` functions never perform I/O | No `httpx`, `sqlite`, or async calls | `test_compute_naming_ontology_invariant` |
| **3. Deterministic Repeatability**| Same inputs always yield identical outputs | No non-deterministic timestamps | Hermetic unit test assertions |

1. **100% Pure Calculation**: A `compute_*` function takes inputs and returns calculated outputs without modifying its arguments or global state.
2. **Zero Async / Zero I/O**: `compute_*` functions never execute `await`, query SQLite, or open network sockets.
3. **Deterministic Idempotency**: Calling `compute_topic_entropy(tokens)` a million times with the same input will always produce the exact same 64-bit float.

---

## Refactoring in Practice: Before & After

### ❌ The Legacy Anti-Pattern (v1.x)
```python
# Ambiguous name with hidden DB and network side effects
async def get_node_quality(node_id: str) -> float:
    db_node = await db.fetch_node(node_id) # Hidden DB I/O
    latency = await ping_node(db_node.ip)   # Hidden Network I/O
    score = (db_node.uptime * 0.25) + (latency * 0.10)
    db_node.last_quality = score           # State mutation!
    return score
```

### ✓ The Modular Compute Ontology (v2.x)
```python
# Pure mathematical function (Instant, thread-safe, hermetic)
def compute_node_quality(
    uptime: float, 
    concordance: float, 
    grounding: float, 
    latency_ms: float, 
    seed_valid: bool
) -> float:
    return (0.25 * uptime) + (0.30 * concordance) + (0.25 * grounding) + (0.10 * latency_ms) + (0.10 * (1.0 if seed_valid else 0.0))
```

---

## Benefits of the Compute Ontology

- **Instant Hermetic Testing**: Pure `compute_*` functions can be unit-tested across millions of generative edge cases in $<1\text{ms}$ with zero fixtures or mocks.
- **Trivial Cross-Language Portability**: Pure calculation functions translate line-for-line from Python to TypeScript (in `app.js` and extension content scripts) and Rust.
- **Effortless Parallelization**: Because they have zero side effects, `compute_*` pipelines scale across multi-core CPU threads without locks or mutexes.

Standardizing our naming ontology was not about syntax—it was about declaring our commitment to mathematical purity.

---
## The 3 Compute Ontology Invariants

To eliminate side-effects and ensure deterministic scoring across all platforms, Credence enforces the **Compute Naming Ontology**:

| Compute Invariant | Mathematical Rule | Prohibited Operations | Verification Test Gate |
| :--- | :--- | :--- | :--- |
| **1. Pure Functions** | $f(x) = y$ depends only on inputs | Zero global state mutation | AST static scanner |
| **2. Zero I/O** | `compute_*` functions never perform I/O | No network, database, or disk reads | `test_compute_naming_ontology` |
| **3. Determinism** | Identical inputs produce identical outputs | No non-deterministic timestamps | Hermetic unit assertions |

```python
# Valid compute_* pure function
def compute_shannon_entropy(tokens: list[str]) -> float:
    """Pure mathematical calculation: zero I/O, zero global mutations."""
    import math
    from collections import Counter
    if not tokens:
        return 0.0
    counts = Counter(tokens)
    total = len(tokens)
    return -sum((c / total) * math.log2(c / total) for c in counts.values())
```

---
## Strict Functional Purity in Epistemic Calculations

Functions prefixed with `compute_*` must remain mathematically pure, taking input parameters and returning deterministic values with zero external side effects.
