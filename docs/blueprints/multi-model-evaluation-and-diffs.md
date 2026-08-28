---
title: 'Technical Blueprint: Multi-Model Evaluation Comparison Matrix'
description: Longitudinal model provenance tracking, pairwise score deltas, taxonomy violation diffs, and multi-model sovereignty.
since_version: v2.18.0
verified_version: v2.18.1
last_verified: 2026-08-28
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

---

## 6. Granular Cluster-Level Micro-Agent Swarm Topology

Monolithic evaluation passes (dumping 25+ logical fallacies or 15+ ethics rules into a single giant LLM prompt) introduce severe attention dilution, missed violations, and cognitive hallucinations.

Credence partitions evaluations at the **`TaxonomyCluster`** semantic boundary, restricting each specialist micro-agent pass to **3–6 bounded rules**:

```
[Evaluator Dispatcher]
  ├── Fallacy Cluster 1: Relevance & Personal Attacks (FALLACY-1.1 to 1.4)
  ├── Fallacy Cluster 2: Presumption & Circularity (FALLACY-2.1 to 2.4)
  ├── Fallacy Cluster 3: Causal & Inductive Reasoning (FALLACY-3.1 to 3.4)
  ├── Fallacy Cluster 4: Rhetorical Distortion & Evasion (FALLACY-4.1 to 4.4)
  ├── Ethics Cluster 1: Truth & Sourcing Provenance (SPJ-1.1 to 1.6)
  ├── Ethics Cluster 2: Independence & Governance COI (SPJ-3.1 to 3.4)
  ├── Ethics Cluster 3: Harm & Accountable Transparency (SPJ-2.x, SPJ-4.x)
  ├── Deception Cluster 1: Commercial Camouflage (DEC-1.1 to 1.3)
  ├── Deception Cluster 2: Urgency & Astroturfing (DEC-1.4, AST-1.x)
  └── Domain Clusters: Municipal Governance, Clinical Evidence, etc.
```

Each micro-agent focuses exclusively on its assigned rubric, returning structured violation objects that undergo strict $G=1.00$ verbatim DOM grounding verification.

---

## 7. Dual Execution Driver Architecture

To ensure operational resilience and zero external quota dependency, Credence implements a co-equal dual execution driver layer:

1. **Google AI Studio / Cloud LLM API Driver**:
   - Uses `GEMINI_API_KEY`, Claude, or OpenAI endpoints for standard CLI, FastMCP, and production server daemon deployments.
2. **Antigravity-Native Agent Driver**:
   - Executes audits directly within Antigravity's cognitive agent session using internal reasoning tokens.
   - Eliminates external 429 rate limit exceptions and token quota costs during development and operator-driven research workflows.

