---
title: Scoring Calibration & Mathematical Rubrics
description: Mathematical formulation of the Epistemic Suspicion Score, non-linear saturation curve, and classification rubrics.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 4
---

# Scoring Calibration & Mathematical Rubrics

Credence evaluates digital prose using a mathematically rigorous, continuous **Epistemic Suspicion Score ($S \in [0.0, 100.0]$)** rather than binary true/false classifications.

---

## 1. Mathematical Formulation

The overall suspicion score $S$ is calculated from three primary components:
1. **Raw Cumulative Violation Weight ($V$)**:
   $$V = \sum_{i=1}^{M} w_i \times c_i \times s_i$$
   Where $w_i$ is the rule severity weight, $c_i \in [0.0, 1.0]$ is confidence, and $s_i$ is severity.
2. **Exponential Diminishing Returns Saturation Curve**:
   To prevent minor formatting infractions from overwhelming an article score while ensuring egregious violations rapidly elevate suspicion, $V$ is mapped through a non-linear saturation function:
   $$S_{\text{base}} = 100 \times \left(1.0 - e^{-k \cdot V}\right), \quad k = 0.045$$
3. **Verbatim Grounding Multiplier ($G$)**:
   If an audit extracts factual allegations without verbatim DOM character-offset grounding, the score is penalized:
   $$S = \min\left(100.0, S_{\text{base}} \times \left(1.0 + 0.5 \times (1.0 - G)\right)\right)$$

---

## 2. Four Universal Classification Bands

| Score Range | Classification | Color Token | Interpretation |
| :---: | :--- | :---: | :--- |
| **$0.0 - 15.0$** | **`PRISTINE`** | `#10b981` (Green) | High-integrity journalism, verbatim sources, transparent corrections, zero deceptive patterns. |
| **$15.1 - 35.0$** | **`NOTABLE_FLAGS`** | `#f59e0b` (Amber) | Minor clickbait phrasing, sensationalized headlines, or unverified secondary quotes. |
| **$35.1 - 65.0$** | **`SUSPICIOUS`** | `#ef4444` (Red) | High superlative density, anonymous assertions, undisclosed advertorial camouflage. |
| **$65.1 - 100.0$** | **`UNRELIABLE`** | `#7c3aed` (Purple) | Egregious disinformation, fabricated citations, coordinated astroturfing narrative. |

---

## 3. Heuristic vs. LLM Multi-Stage Scoring Pipeline

| Scoring Pipeline Stage | Heuristic / Model | Cost (Tokens) | Latency | Epistemic Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 1: Fast Regex** | Clickbait Index, Superlative Density | 0 tokens | `<5ms` | Instant pass for obvious extremes |
| **Stage 2: Heuristic Scrubber**| Shannon Entropy, Syllogism Scan | 0 tokens | `<10ms` | Detects AI slop and astroturfing |
| **Stage 3: LLM Verification** | Gemini 3.7 Flash Thinking | 1,024 tokens | `1.2s` | Deep claim grounding ($G=1.00$) |
| **Stage 4: Attestation Minting**| Ed25519 Signature on Canonical JSON | 0 tokens | `<1ms` | Signed verifiable receipt |

---

## 4. Longitudinal Sourcing Forensics & Publisher Ratios

Beyond single-article suspicion scores, Credence evaluates structural publisher incentives and editorial hygiene using continuous sourcing ratios:

1. **Byline Transparency Index ($R_{\text{byline}}$)**:
   $$R_{\text{byline}} = \frac{N_{\text{named\_authors}}}{N_{\text{total\_articles}}}$$
   Scores $100.0$ for verifiable named human journalists and drops to $0.0$ when publications rely on generic handles (`"Staff"`, `"Admin"`, `"News Desk"`) to obscure editorial accountability.

2. **Single-Source Blotter Ratio ($R_{\text{single}}$)**:
   $$R_{\text{single}} = \frac{N_{\text{single\_source}}}{N_{\text{total\_articles}}}$$
   Measures reliance on uncorroborated government or law enforcement press releases passed through without independent verification.

3. **Conflict of Interest Exposure ($R_{\text{COI}}$)**:
   $$R_{\text{COI}} = \frac{N_{\text{unrecused\_conflicts}}}{N_{\text{civic\_articles}}}$$
   Quantifies coverage of commercial partners, advertisers, or political figures where editorial recusal or explicit disclosure was omitted.

4. **Advertorial Separation Index ($ASI$)**:
   $$ASI = \max\left(0.0, \min\left(100.0, 100.0 - \sum \text{Violations}_{\text{advertorial}} \times 15.0\right)\right)$$
   Evaluates native commercial blur, sponsor masking, and hidden promotional directories.

5. **Composite Domain Credence Index ($DCI$)**:
   $$\text{DCI} = 100.0 - \left(0.50 \cdot S_{\text{recency}} + 0.30 \cdot \min(50.0, \text{Density}) + 0.20 \cdot (1.0 - R_{\text{byline}}) \cdot 100\right)$$

---

## 5. Deterministic Taxonomy State Root Hashing & Staleness

To maintain absolute provenance over changing standards, every attestation records the **Composite Taxonomy Root Hash**:

$$\text{Taxonomy Root Hash} = \text{SHA256}\left(\bigoplus_{i=1}^{N} \text{catalog\_id}_i : \text{catalog\_hash}_i\right)$$

Where $\bigoplus$ denotes canonical lexicographically sorted JSON serialization.

### Automated Staleness & Re-Audit Invalidation
An existing audit is flagged as `STALE_TAXONOMY` whenever:
$$\text{Taxonomy Root Hash}_{\text{audit}} \ne \text{Taxonomy Root Hash}_{\text{active\_registry}}$$

When detected, Sentinel daemons and CLI workflows (`just audit-stale`) automatically trigger targeted micro-passes across newly added or modified rule clusters.

---

## 6. Interactive Calibration Tools

* 🎮 [Interactive Saturation Curve Plotter](../playground.md)
* 📐 [Robust Consensus Proofs & Mathematical Foundations](../mathematics/robust-consensus-proofs.md)
* 📘 [The Invariant Bible](../invariants.md) — Epistemic Scoring Invariants


---
## Epistemic Scoring Pipeline & Calibration Formulas

The composite Epistemic Suspicion Score $S \in [0, 100]$ combines regex heuristics, linguistic entropy, and LLM claim grounding:

$$S = w_{\text{heuristic}} \cdot S_{\text{heuristic}} + w_{\text{llm}} \cdot S_{\text{llm}} \cdot (2 - G)$$

Where:
- $S_{\text{heuristic}}$ is computed in $0$ tokens via clickbait regex and Shannon entropy ($H$).
- $S_{\text{llm}}$ is the model's calibrated violation severity assessment.
- $G \in [0, 1.00]$ is the character-for-character verbatim grounding ratio.

| Scoring Range | Epistemic Classification | UI Badge Color | Network Handling |
| :--- | :--- | :--- | :--- |
| **$0.0 – 19.9$** | **PRISTINE** | Emerald Green (`#10b981`) | Top feed prioritization & zero-token mesh adoption |
| **$20.0 – 59.9$** | **NOTABLE_FLAGS** | Amber Warning (`#f59e0b`) | Warning badge attached with specific violation cards |
| **$60.0 – 100.0$** | **UNRELIABLE / SUSPICIOUS** | Crimson Alert (`#ef4444`) | Filtered in feed sifters & downranked in leaderboards |

---
## Multi-Stage Epistemic Suspicion Scoring Formula

The scoring formula blends zero-token regex heuristics with grounded LLM reasoning for optimal speed and accuracy.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Scoring** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Scoring** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "scoring" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
