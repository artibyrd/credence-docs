---
title: 'Technical Blueprint: Invariant Scalability & 4-Tier Knowledge Governance'
description: The 4-Tier Knowledge Taxonomy (/remember), AGENTS.md context economy (<800 tokens), and dynamic Living Canon governance.
since_version: v1.13.0
verified_version: v2.16.7
last_verified: 2026-08-24
sidebar:
  order: 16
---

# Technical Blueprint: Invariant Scalability & 4-Tier Knowledge Governance

![Figure 1.1: Invariant scalability governance and 4-tier knowledge placement taxonomy](assets/illustrations/invariant-scalability-and-knowledge-governance.svg)


This technical blueprint specifies the **4-Tier Knowledge Taxonomy**, context budget governance, and continuous learning lifecycle enforced by Credence to prevent context bloat across autonomous agent workflows.

---

## 1. The Context Economy Challenge in Autonomous Systems

In multi-agent systems, developers frequently make the mistake of appending every new lesson, bug fix, or command example directly to the agent's root instruction file (`AGENTS.md`).

Within weeks, `AGENTS.md` balloons to thousands of tokens. This context bloat causes three severe problems:
1. **Instruction Degradation**: Core sovereign safety invariants are diluted by minor formatting tips.
2. **Context Window Exhaustion**: Every prompt burns thousands of unnecessary tokens before reading the first line of codebase code.
3. **Fragile Invariant Canon**: Ad-hoc numbering ("Rule 47", "The Invariant Bible") breaks every time a rule is added or removed.

Credence solves this with **The 4-Tier Knowledge Placement Taxonomy**.

---

## 2. The 4-Tier Knowledge Placement Taxonomy (`/remember`)

Tier 0: UNIVERSAL CORE INVARIANTS (`AGENTS.md` - <800 Tokens)
| Knowledge Placement Tier | Architectural Artifact | Governance Scope | Token Budget Rule |
| :--- | :--- | :--- | :--- |
| **Tier 0: Universal Core** | `AGENTS.md` | Non-negotiable safety, custody, and release gates | Strict `< 800` tokens total |
| **Tier 1: Progressive Skills**| `.agents/skills/` | Deep operational runbooks & domain procedures | Loaded on-demand per task |
| **Tier 2: Integrity Gates** | `tests/governance/` | Shift-left automated assertions (Parity, 500 LOC) | Hard failures in CI |
| **Tier 3: Canonical Blueprints**| `docs/blueprints/` | Mathematical proofs, architecture specs | Full human documentation |

---

## 3. Dynamic Living Canon Invariant (`inv-living-canon`)

Credence prohibits hardcoded numerical invariant counters in documentation prose (e.g., "The Invariant Bible"). Instead:
- System invariants are referenced as **The Invariant Bible** or **The Living Canon of System Invariants**.
- Specific rules use semantic alphanumeric slugs (`inv-verbatim-grounding`, `inv-canonical-json-ed25519`).
- Adding or reordering invariants never breaks existing documentation links.

---

## 4. Shift-Left Governance Verification

```bash
# Verify AGENTS.md token budget (<800 tokens) and Living Canon naming
$ pytest tests/governance/test_docs_integrity.py -k test_zero_hardcoded_invariant_counts_in_docs
```

---

## 5. Related Guides & Blueprints

* 🧠 [Knowledge Governance Skill Guide](../invariants.md)
* 📘 [The Invariant Bible](../invariants.md)
* 🚀 [Release Changelog](../changelog.md)

---
## Invariant Taxonomy & Knowledge Placement Rules

Knowledge is governed across four tiers: Tier 0 Universal Invariants, Tier 1 Progressive Skills, Tier 2 Integrity Test Gates, and Tier 3 Standard Task Commands.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Invariant Scalability And Knowledge Governance** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Invariant Scalability And Knowledge Governance** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "invariant_scalability_and_knowledge_governance" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.

### Progressive Disclosure & Token Economy

To prevent system prompt bloat while retaining deep architectural context:

- **Tier 0 Invariants**: Universally enforced across all sessions (<800 tokens total in AGENTS.md).
- **Tier 1 Progressive Skills**: Detailed subsystem runbooks located in `.agents/skills/` and loaded on demand.
- **Tier 2 Automated Gates**: Shift-left governance tests asserting manifest parity, zero-npm standards, and dynamic Living Canon naming.
