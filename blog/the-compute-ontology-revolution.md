---
title: 'The compute_* Ontology Revolution: Why Precision in Naming Eliminates Epistemic
  Ambiguity'
description: How standardizing on compute_* naming across calculation functions eradicated
  semantic ambiguity and unified mathematical governance in Credence v2.0.0.
date: '2026-08-20'
author: Credence Protocol Research
category: Epistemology
since_version: v2.0.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# The compute_* Ontology Revolution: Why Precision in Naming Eliminates Epistemic Ambiguity

In software engineering, naming things is notoriously difficult. But in an epistemic trust protocol where mathematical rigor determines whether an allegation is verified news or deceptive astroturfing, inconsistent naming is not merely an aesthetic annoyance—it is a vector for conceptual ambiguity.

In the evolution to **Credence v2.0.0**, we executed a total ontology audit across all mathematical routines, deprecating `calculate_*` and `calc_*` in favor of the strict, sovereign **`compute_*`** prefix.

---

## 1. Calculation vs. Computation

Why make a major version break over a naming prefix?

- **`calc_*`**: Casual, abbreviated, and frequently overloaded for superficial arithmetic (e.g. `calc_width()`, `calc_offset()`).
- **`calculate_*`**: Imperative, verbose, and historically blended with UI rendering logic and database fetching side effects.
- **`compute_*`**: Mathematically pure, deterministic, and side-effect free. In functional and epistemic protocols, `compute_*` denotes a deterministic transformation: given identical cryptographic and attestation inputs, it yields the exact same metric output every time.

---

## 2. The Living Invariant Gate

We backed the ontology rule with an automated AST-parsing integrity test that walks the Abstract Syntax Tree of every Python file in the repository:

```python
@pytest.mark.unit
def test_compute_naming_ontology_invariant() -> None:
    """Verify that calculation functions adhere strictly to compute_* naming (banning calc_* / calculate_*)."""
    disallowed = ("calculate_", "calc_")
    violations = []
    for py_file in SRC_ROOT.rglob("*.py"):
        tree = ast.parse(py_file.read_text(encoding="utf-8"))
        for node in ast.walk(tree):
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                if any(node.name.startswith(p) for p in disallowed):
                    violations.append((node.name, py_file.name))
    assert not violations, f"Functions violating compute_* naming ontology: {violations}"
```

---

## 3. Epistemic Grounding in Action

By standardizing every formula—from Shannon entropy (`compute_topic_entropy`) to uptime half-life decay (`compute_half_life_uptime`) and Bayesian consensus medians (`compute_consensus`)—developers, researchers, and automated AI agents can immediately discern pure mathematical computation from stateful orchestration.

Precision in language is the bedrock of precision in truth.
