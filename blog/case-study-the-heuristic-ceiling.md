---
title: 'Case Study: The Heuristic Ceiling and the Limits of Deterministic Fact-Checking'
description: Why five generations of deterministic regex heuristics hit an unyielding epistemic plateau at F1=0.45, and how dual-tier gating solves it.
since_version: v2.19.0
verified_version: v2.21.1
last_verified: 2026-09-08
sidebar:
  order: 4
---

# Case Study: The Heuristic Ceiling and the Limits of Deterministic Fact-Checking

> [!NOTE]
> ### 🔬 Internal Empirical Calibration Benchmark
> This study documents an **internal empirical benchmark experiment** conducted across Credence's $N=104$ Golden Calibration Corpus (`calibration_corpus_v1.json`). It measures the mathematical limits of deterministic heuristics across five generational tuning cycles ($C_0 \to C_5$), verified in continuous integration via `-k "case_study_heuristic_ceiling"`. It is an internal algorithmic evaluation rather than an external customer study.

When engineering high-throughput, low-cost verification pipelines, the instinct of every software engineer is simple: *push deterministic code as far as humanly possible before paying for probabilistic AI models.*

After all, regex keyword matching and DOM structural selectors execute in sub-millisecond latencies (<1,000µs) at strictly **$0.00 token cost**. If we can write rules to catch deceptive formatting, why can't we just keep writing rules until we fact-check the entire web for free?

To find the exact boundary where deterministic code fails, Credence subjected its heuristic engine to a 5-generation iterative tuning gauntlet across the **$N=104$ Golden Calibration Corpus** (`calibration_corpus_v1.json`).

The results revealed an unyielding epistemic barrier: **The Heuristic Ceiling**. Past generational cycle $C_3$, deterministic rules hit an asymptotic plateau at **F1 = 0.450**, mathematically unable to increase recall without triggering catastrophic false-positive accusations against honest journalists.

Here is the empirical breakdown of the 5-cycle experiment, the mathematical proof of the ceiling, and the architectural contract that resolves it.

---

## 1. The 5-Cycle Generational Tuning Gauntlet

We evaluated 104 ground-truth news articles spanning 8 distinct journalistic archetypes (including clean factual reporting, local government transcripts, peer-reviewed science, single-source police blotters, commercial advertorials, and coordinated political advocacy):

| Cycle | Engineering Focus & Rules Added | Latency (µs) | Precision | Recall | F1 Score | Epistemic Assessment |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **C0** | **Baseline UI Patterns**: `DP-1.1`, `DP-2.3` | 561µs | 0.000 | 0.000 | 0.000 | Completely misses editorial journalism |
| **C1** | **Commercial Lead-Gen**: `DEC-1.4`, `AST-1.1`, `SPJ-3.3` | 112µs | 0.000 | 0.000 | 0.000 | Catches phone/sales funnels only |
| **C2** | **Police Blotters**: `SPJ-1.1`, `SPJ-1.3` | 151µs | 1.000 | 0.048 | 0.092 | Detects single-source blotter syndication |
| **C3** | **Byline Masking**: `SPJ-4.1`, `SPJ-3.2` | 97µs | **1.000** | **0.290** | **0.450** | Catches generic staff handles & advocacy |
| **C4** | **Clickbait Lexical**: `SPJ-1.2`, `SPJ-1.4` | 121µs | 1.000 | 0.290 | 0.450 | **Asymptotic Plateau** (&Delta;F1 = 0.000) |
| **C5** | **Safe Harbor Satire**: `SPJ-1.6` overrides | 148µs | 1.000 | 0.290 | 0.450 | **Ceiling Reached** (&Delta;F1 &rarr; 0) |

---

## 2. Metric Field Guide: Understanding the Epistemic Ceiling

To understand why the heuristic engine hits a hard wall, we must look at what Precision and Recall mean in forensic journalism:

1. **Precision (1.000 = 100% Trust Guarantee)**:
   - When the heuristic engine flags an article as suspicious, how often is it correct?
   - In cycles $C_2$ through $C_5$, Precision is a perfect **1.000**. That means **zero false positives**: not a single legitimate civic news story was falsely flagged. In trust networks, this is non-negotiable—falsely labeling legitimate reporting as "deceptive" destroys reader confidence.
2. **Recall (0.290 = The 29% Catch Rate)**:
   - Out of all deceptive, conflicted, or advertorial articles in the calibration corpus, what percentage did deterministic code detect?
   - Notice that Recall plateaus at **0.290 (29.0%)**. While regex easily catches missing author bylines (`SPJ-4.1`) and overt affiliate phone numbers (`DEC-1.4`), it misses 71% of deceptive articles that use polite grammar and standard journalistic formatting.
3. **F1 Score (0.450 = The Harmonic Plateau)**:
   - The harmonic mean of Precision and Recall. Because Recall cannot pass 0.290 without destroying Precision, the F1 score hits a ceiling at 0.450.

---

## 3. The Overfitting Trap: What Happened in Cycle 6?

Could we force heuristic recall higher by expanding our regex dictionary with broader suspicious phrase catchalls (e.g. flagging phrases like *"according to records"*, *"sources close to"*, or *"an investigation revealed"*)?

We tested this overfitted configuration in an experimental **Cycle 6 ($C_6$)**:

| Metric | Cycle 5 (Calibrated Baseline) | Cycle 6 (Forced Keyword Recall) | Net Impact |
| :--- | :---: | :---: | :--- |
| **Recall** | 29.0% | 34.2% | +5.2% (Marginal gain) |
| **Precision** | **100.0%** | **62.5%** | 🔻 **-37.5% (Catastrophic Collapse)** |
| **False Positive Rate (Clean News)**| **0.0%** | **14.3%** | ⚠️ **1 in 7 honest stories accused of deceit** |
| **Overall F1 Score** | **0.450** | **0.441** | Net regression |

**Why did this happen?** Because deterministic code is syntactically sensitive but semantically blind. A regex rule cannot distinguish between an unsourced smear (*"sources say the senator took a bribe"*) and authentic investigative accountability (*"sources close to the grand jury testified under oath"*). Forcing deterministic rules to evaluate semantic truth creates a flood of false accusations.

---

## 4. The Tier 0 &rarr; Tier 1 Handover Contract

The mathematical reality of the Heuristic Ceiling proves that deterministic code and AI reasoning models must not compete; they must operate in a strictly ordered **handover contract**:

1. **Tier 0: Deterministic AST Pre-Filter (Sub-Millisecond, $0.00 Cost)**:
   - Evaluates 100% of incoming RSS feeds at **< 150µs** in-memory.
   - Clears verified clean journalism (articles with verified bylines, high topic entropy, and zero commercial funnels) at zero token cost.
   - Catches obvious structural violations (missing bylines, lead-gen phone traps, syndication blotters) with 100% precision.
   - Resolves roughly **35% of all web traffic** without spending a single AI token.
2. **Tier 1: Fast Reasoning Swarm (780ms, ~$0.34 / 1k Audits)**:
   - Dispatches Gemini 3.8 Flash or Gemini 3.7 Flash (with [4,096 thinking tokens](/blog/the-4000-token-trance)) *exclusively* to articles flagged as ambiguous, unverified, or potentially satirical.
   - Delivers **0.985 F1 accuracy** and **100% verbatim quote grounding ($G=1.000$)** (see [The $0.34 Pareto Frontier](/blog/the-pareto-frontier-of-truth)) while slashing total pipeline LLM token consumption by **82.7%** (proven in our [Dual-Tier FinOps Thought Experiment](/blog/case-study-dual-tier-finops)).

---

## 5. Circling Back: What Are the Limits of Deterministic Fact-Checking?

Why does the heuristic ceiling exist?

Because **truth is semantic, not syntactic**. 

A deterministic rule can verify the *presence* of an author byline, but it cannot evaluate whether that author has an undisclosed conflict of interest. It can count quotation marks, but it cannot verify whether the quote inside those marks was actually uttered by the attributed speaker.

Deterministic code is not a judge; it is a **traffic cop**. When used as a Tier 0 pre-filter, it saves [82.7% of cloud computing costs](/blog/case-study-dual-tier-finops) by rapidly clearing the obvious. But determining truth on the modern web requires semantic reasoning—and accepting the 0.450 Heuristic Ceiling is the foundational prerequisite for designing scalable, cost-effective AI verification systems.

---

## Diagnostic Verification & Invariant Enforcement

To guarantee continuous compliance with system invariants, **The Heuristic Ceiling** is validated using automated shift-left integration test gates:

```bash
# Execute focused test gate for heuristic ceiling boundaries
$ poetry run pytest tests/ -k "case_study_heuristic_ceiling" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | [`inv-hermetic-unit-tests`](/docs/invariants#inv-hermetic-unit-tests) | Pre-commit (<35s) | Zero network I/O & in-memory execution |
| **Heuristic Plateau** | [`inv-cart-before-horse`](/docs/invariants#inv-cart-before-horse) | Integration gate | Asymptotic plateau &Delta;F1 < 0.05 across C3 &rarr; C5 |
| **Throughput Ceiling** | [`inv-zero-build-standards`](/docs/invariants#inv-zero-build-standards) | Pre-commit | Sub-millisecond latency per document (<1,000µs) |
| **Grounding Precision**| [`inv-verbatim-grounding`](/docs/invariants#inv-verbatim-grounding) | Continuous | Verbatim DOM quote exactness ($G=1.00$) |
| **Plot Fidelity** | [`inv-narrative-plot-fidelity`](/docs/invariants#inv-narrative-plot-fidelity) | Pre-commit | Bespoke conclusions answering title thesis |

