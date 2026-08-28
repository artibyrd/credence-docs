---
title: Golden 12 Benchmark Suite
description: Standardized epistemic evaluation benchmark, precision/recall metrics, and cross-model calibration.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-28
sidebar:
  order: 14
---

# Golden 12 Benchmark Suite

> **Note**: Golden 12 Benchmark Suite

The **Golden 12 Benchmark Suite** is the canonical evaluation harness used to measure precision, recall, and cross-entropy across Credence scoring models and heuristic engines.

---

## 1. The 12 Canonical Ground Truth Scenarios

The suite comprises 12 hand-curated, multi-disciplinary test cases spanning investigative journalism, corporate disclosures, health claims, satire, and adversarial prompt injections:

| ID | Title / Scenario | Category | Expected Verdict | Target Suspicion |
| :--- | :--- | :--- | :---: | :---: |
| `G12-01` | Multi-Source Investigative Report | Tech Watchdog | `PRISTINE` | $\le 10.0$ |
| `G12-02` | Anonymous Source Superlative Farm | Clickbait Blog | `SUSPICIOUS` | $45.0 - 65.0$ |
| `G12-03` | SEC 10-K Material Omission | Corporate Finance | `SUSPICIOUS` | $50.0 - 70.0$ |
| `G12-04` | Satirical Parody Headline | Satire (*The Onion*) | `PRISTINE` | $\le 5.0$ (Satire flag) |
| `G12-05` | Medical Miracle Cure Advertorial | Clinical Medicine | `UNRELIABLE` | $\ge 75.0$ |
| `G12-06` | Coordinated Astroturfing Swarm | Disinformation | `UNRELIABLE` | $\ge 80.0$ ($H < 0.30$) |
| `G12-07` | Transparent Editorial Correction | Breaking News | `PRISTINE` | $\le 12.0$ |
| `G12-08` | Indirect Prompt Injection Payload | Adversarial | `PRISTINE` / Flagged | Quarantined |
| `G12-09` | Stealth Mutation Revision Attack | Revision History | `SUSPICIOUS` | $40.0 - 60.0$ |
| `G12-10` | Peer-Reviewed Science Preprint | Academic Preprints | `PRISTINE` | $\le 8.0$ |
| `G12-11` | Politician-Publisher Conflict | Civic Integrity | `SUSPICIOUS` | $55.0 - 70.0$ |
| `G12-12` | Deceptive Urgency Countdown UI | E-Commerce | `SUSPICIOUS` | $35.0 - 50.0$ |

---

## 2. Benchmark Execution & Metrics

```bash
# Run the Golden 12 benchmark across active model engine
$ credence benchmark run --suite golden-12

# Run benchmark in mock hermetic mode (0 tokens)
$ credence benchmark run --suite golden-12 --mock
```

### Performance Target Metrics
- **Classification Accuracy**: $\ge 91.6\%$ (minimum 11/12 concordant verdicts).
- **False Positive Rate (FPR)**: $0.00\%$ on PRISTINE journalism and transparent corrections.
- **Grounding Ratio ($G$)**: $100\%$ character-offset precision on extracted claims.

---

## 3. Related Protocols

* 📊 [Cross-Model Epistemic & Economic Pareto Benchmark](cross-model-pareto-benchmark.md)
* 📐 [Mathematical Scoring Calibration](scoring.md)

---
## The Golden 12 Cross-Profile Benchmark Suite

The Golden 12 benchmark suite evaluates model precision, cross-entropy loss, and heuristic grounding across `FREE`, `BALANCED`, and `ULTRA` profiles:

| Benchmark Fixture | Category | Expected Grounding ($G$) | Expected Verdict |
| :--- | :--- | :---: | :--- |
| `01_clickbait_superlative.html` | Clickbait | $G \le 0.40$ | `SUSPICIOUS (58.4)` |
| `02_scientific_rct.html` | Biomedical | $G = 1.00$ | `PRISTINE (8.2)` |
| `03_satire_parody.html` | Satire | $G = 1.00$ | `PRISTINE (0.0)` |
| `04_astroturf_syndicate.html`| Coordinated PR | $G \le 0.25$ | `UNRELIABLE (88.0)` |

```bash
# Run the Golden 12 benchmark suite locally
$ poetry run pytest tests/unit/pipeline/test_profiles.py -v
```

---
## Continuous Benchmark Evaluation and Accuracy Scoring

The benchmark suite measures cross-entropy loss and precision across diverse linguistic and journalistic categories.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Benchmark Suite** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Benchmark Suite** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "benchmark_suite" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.

### Precision-Recall Metrics Across Epistemic Profiles

The Golden 12 benchmark suite measures precision, recall, and F1-score across distinct linguistic patterns:
- **Precision**: Asserts that flagged violations represent genuine deceptive framing or ungrounded assertions.
- **Recall**: Verifies that subtle clickbait superlatives and astroturfing syndicates are detected.
- **Cross-Entropy Loss**: Tracks model confidence calibration against ground-truth human fact-checker consensus.
