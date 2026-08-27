---
title: 'Technical Blueprint: Multi-Model Evaluation Comparison Matrix'
description: Longitudinal model provenance tracking, pairwise score deltas, taxonomy violation diffs, and multi-model sovereignty.
since_version: v2.18.0
verified_version: v2.18.0
last_verified: 2026-08-27
sidebar:
  order: 23
---

# Technical Blueprint: Multi-Model Evaluation Comparison Matrix

This technical blueprint specifies the **Multi-Model Evaluation Comparison Matrix** and cross-engine revision diffing protocol implemented in Credence `v2.18.0`.

---

## 1. Multi-Model Sovereignty (`inv-multi-model-sovereignty`)

Credence firmly rejects single-model epistemic monopolies. Relying exclusively on any single proprietary AI model creates systemic blind spots, vendor lock-in, and susceptibility to model-specific hallucinations or alignment drifts.

In high-stakes news auditing, different AI model families and offline engines possess distinct analytical strengths:

| Engine / Model Adapter | Primary Strength | Typical Confidence | Compute Profile |
| :--- | :--- | :--- | :--- |
| **Offline Structural Heuristics (`v1.1.0`)** | Deterministic syntax patterns, generic bylines, undisclosed pass-throughs | Bounded at $\le 25\%$ | $0.00 token cost, offline execution |
| **Gemini 3.7 Flash** | Rapid contextual analysis, complex journalistic context, 4k thinking budget | $90\% - 98\%$ | Low latency, balanced cost |
| **Claude 3.7 Sonnet / GPT-4o** | Subtle dialectical fallacies, rhetorical nuance, complex legal analysis | $92\% - 99\%$ | Ultra-precision, deep reasoning |
| **DeepSeek R1 / Ollama** | Open-weights sovereign verification, air-gapped forensic auditing | $88\% - 95\%$ | Sovereign local compute |

When an article snapshot undergoes multiple evaluation passes over time (for instance, an initial zero-cost heuristic pass followed by an evaluator LLM sweep), Credence records each pass immutably in SQLite and computes a **Model Comparison Matrix**.

---

## 2. Pairwise Comparison Mathematics

For any pair of evaluation passes $A$ (baseline pass) and $B$ (target comparison pass) executed against the same article snapshot:

### 1. Score Delta Calculation
$$\Delta S_{A \to B} = S_B - S_A$$

Where $S \in [0.0, 100.0]$ is the calibrated suspicion score. A negative delta indicates an improvement in epistemic standing, while a positive delta reflects additional detected violations.

### 2. Taxonomy Violation Set Operations
Let $V_A$ and $V_B$ denote the set of detected rule IDs in passes $A$ and $B$, respectively:

$$\text{Violations Overlap} = V_A \cap V_B$$

$$\text{Violations Added} = V_B \setminus V_A$$

$$\text{Violations Removed} = V_A \setminus V_B$$

### 3. Jaccard Epistemic Similarity Index
The concordance between two evaluation passes is quantified using the Jaccard similarity coefficient:

$$J(V_A, V_B) = \frac{|V_A \cap V_B|}{|V_A \cup V_B|}$$

When both models detect zero violations ($|V_A \cup V_B| = 0$), the index defaults to $J = 1.00$.

### 4. Confidence-Weighted Epistemic Distance
To account for varying model confidences ($c_A, c_B \in [0.0, 1.0]$), Credence computes the normalized epistemic distance $D(A, B)$:

$$D(A, B) = \frac{|\Delta S_{A \to B}|}{100.0} \times \left(1.0 - \frac{c_A + c_B}{2}\right)$$

---

## 3. Epistemic Discrepancy Categorization

Discrepancies between model passes are categorized into three distinct operational bands:

| Discrepancy Band | Threshold ($|\Delta S|$) | Interpretation & Operator Action |
| :--- | :--- | :--- |
| **Consensus Agreement** | $|\Delta S| < 10.0$ | High cross-model alignment. Both engines agree on the core factual integrity or violation status of the text. |
| **Rhetorical Nuance** | $10.0 \le |\Delta S| < 25.0$ | Moderate divergence. Typically caused by differing interpretations of secondary fallacies (e.g. slippery slope vs. legitimate causal inference). |
| **Epistemic Divergence** | $|\Delta S| \ge 25.0$ | Significant disagreement. Triggers human-in-the-loop review ("Mk1 Eyeball") or automated re-evaluation via a third independent model family. |

When an epistemic divergence is identified in an active newsroom pipeline, Credence marks the attestation with a divergence warning badge and queues the document for editorial arbitration.

---

## 4. Multi-Interface Tooling & Usage

The model comparison matrix is fully integrated across all Credence interfaces:

### CLI Comparison Command
```bash
# Compare all evaluation passes for a URL in a formatted terminal table
$ credence compare https://example.com/investigative-report

# Output raw structured JSON matrix for CI/CD pipelines
$ credence compare https://example.com/investigative-report --json
```

### FastMCP 2.0 Integration
```json
{
  "tool": "credence_compare_models",
  "arguments": {
    "url": "https://example.com/investigative-report"
  }
}
```

### Zero-Build Web UI Visualization
In `web/credence.report/viewer.html`, the report viewer dynamically renders a **Multi-Model Comparison Tab** when multiple passes are detected, highlighting rule additions, subtractions, and score trajectories in real time.

---

## 5. Temporal Evolution & Revision Trajectories

In addition to static pairwise diffs, the matrix tracks longitudinal article revisions over time. When newsrooms issue silent edits, retractions, or substantive factual updates, Credence links consecutive snapshot revisions:

- **Revision Index ($k$)**: Sequential integer ordering of captured snapshots.
- **Token Drift ($\delta_T$)**: Normalized Levenshtein and SimHash distance between article revisions.
- **Lifetime Trajectory Status**: Classified as `IMPROVING` ($\Delta S \le -5.0$), `DEGRADING` ($\Delta S \ge +5.0$), or `STABLE`.

This longitudinal model matrix ensures that news organizations receive verifiable credit for substantive editorial corrections.
