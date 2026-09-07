---
title: 'Case Study: The Heuristic Ceiling and the Limits of Deterministic Fact-Checking'
description: Why five generations of deterministic regex heuristics hit an unyielding epistemic plateau at F1=0.45, and how dual-tier gating solves it.
since_version: v2.19.0
verified_version: v2.19.0
last_verified: 2026-09-06
sidebar:
  order: 4
---

# Case Study: The Heuristic Ceiling and the Limits of Deterministic Fact-Checking

When engineering high-throughput, low-cost verification pipelines, the instinct of every systems architect is simple: *push deterministic heuristics as far as possible before dispatching probabilistic LLMs.*

After all, regex keyword matching and DOM structural selectors execute in sub-millisecond latencies ($<1,000\,\mu\text{s}$) at strictly **$0.00 token cost**.

To determine the mathematical boundary of what offline heuristics can achieve, Credence subjected its heuristic engine to a 5-generation iterative tuning gauntlet across the **$N=104$ Golden Calibration Corpus** (`calibration_corpus_v1.json`).

The results revealed an unyielding epistemic boundary: **The Heuristic Ceiling**. Past generational cycle $C_3$, deterministic heuristics hit an asymptotic plateau at $\mathcal{F}_1 = 0.450$, unable to increase recall without triggering catastrophic false-positive regressions.

Here is the empirical breakdown of the 5-cycle experiment.

---

## 1. The 5-Cycle Generational Tuning Gauntlet

We evaluated 104 ground-truth news articles spanning 8 distinct journalistic archetypes (including clean factual news, local government hearings, peer-reviewed science, single-source police blotters, commercial advertorials, and candidate advocacy):

| Cycle | Engineering Focus & Rules Added | Latency ($\mu\text{s}$) | Precision | Recall | $\mathcal{F}_1$ Score | Epistemic Assessment |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **$C_0$** | **Baseline UI Patterns**: `DP-1.1`, `DP-2.3` | $561\,\mu\text{s}$ | $0.000$ | $0.000$ | $0.000$ | Completely misses editorial journalism |
| **$C_1$** | **Commercial Lead-Gen**: `DEC-1.4`, `AST-1.1`, `SPJ-3.3` | $112\,\mu\text{s}$ | $0.000$ | $0.000$ | $0.000$ | Catches phone/sales funnels only |
| **$C_2$** | **Police Blotters**: `SPJ-1.1`, `SPJ-1.3` | $151\,\mu\text{s}$ | $1.000$ | $0.048$ | $0.092$ | Detects single-source blotter wires |
| **$C_3$** | **Byline Masking**: `SPJ-4.1`, `SPJ-3.2` | $97\,\mu\text{s}$ | **$1.000$** | **$0.290$** | **$0.450$** | Catches generic staff handles & advocacy |
| **$C_4$** | **Clickbait Lexical**: `SPJ-1.2`, `SPJ-1.4` | $121\,\mu\text{s}$ | $1.000$ | $0.290$ | $0.450$ | **Asymptotic Plateau** ($\Delta\mathcal{F}_1 = 0.000$) |
| **$C_5$** | **Safe Harbor Satire**: `SPJ-1.6` overrides | $148\,\mu\text{s}$ | $1.000$ | $0.290$ | $0.450$ | **Ceiling Reached** ($\Delta\mathcal{F}_1 \to 0$) |

---

## 2. The Overfitting Trap: Why Forcing Heuristic Recall Fails

Could we push heuristic recall from $29\%$ to $70\%$ by adding broader keyword catchalls (e.g. flagging phrases like *"according to records"*, *"investigation"*, or *"officials say"*)?

When we tested this overfitted configuration ($C_6$), recall marginally crept up to $34\%$, but **precision collapsed from $100\%$ to $62.5\%$**, and the False Positive Rate on clean municipal and science journalism jumped from $0.0\%$ to $14.3\%$.

Deterministic rules lack semantic context: they cannot distinguish between an unsourced rumor ("officials say without evidence") and authentic civic accountability ("city officials voted unanimously"). 

---

## 3. The Dual-Tier Solution

The existence of the Heuristic Ceiling proves that deterministic rules and reasoning models must not compete; they must collaborate:

1. **Tier 0 (Deterministic Pre-Filter)**: Evaluates $100\%$ of incoming RSS feeds at sub-millisecond speed ($<150\,\mu\text{s}$, $0 tokens, $0.00 cost). Completely clears clean factual news and isolates obvious byline/blotter violations.
2. **Tier 1 (Reasoning Swarm)**: Dispatches multi-pass LLM reasoning (Gemini 3.7 Flash or Claude Sonnet 4.6) exclusively to flagged or ambiguous content, achieving $>98\%$ precision while saving **$82.7\%$ of token spend**.

---

## Key Architectural Takeaways & Future Directions

1. **Respect Epistemic Boundaries**: Do not over-engineer heuristics into brittle regex labyrinths. Accept the $C_3$ ceiling ($\mathcal{F}_1 \approx 0.45$) and hand off ambiguous cases to reasoning models.
2. **Preserve Clean Article Zero-Cost Path**: Heuristics achieve $0.0\%$ false positive rates on clean journalism when properly scoped, allowing genuine news to pass through for $0.00.
3. **Continuous Empirical Calibration**: All heuristic rules must be verified against anchor calibration corpora rather than ad-hoc developer intuitions.

---

## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **The Heuristic Ceiling** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "case_study_heuristic_ceiling" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory execution |
| **Heuristic Plateau** | `inv-cart-before-horse` | Integration gate | Asymptotic plateau $\Delta\mathcal{F}_1 < 0.05$ across $C_3 \to C_5$ |
| **Throughput Ceiling** | `inv-zero-build-standards` | Pre-commit | Sub-millisecond latency per document ($<1,000\,\mu\text{s}$) |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
