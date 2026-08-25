---
title: Synthetic AI Content & Media Provenance Blueprint
description: Shannon topic entropy collapse, C2PA cryptographic provenance, top-token concentration, and AI content farm detection.
since_version: v1.11.0
verified_version: v2.16.8
last_verified: 2026-08-25
sidebar:
  order: 4
---

# Synthetic AI Content & Media Provenance Blueprint

This blueprint specifies the forensic architecture used by Credence to detect automated AI content farms, measure lexical topic entropy collapse, and verify C2PA cryptographic provenance on digital media.

---

## 1. Automated Content Farm Detection Architecture

Synthetic AI content farms generate thousands of low-effort, keyword-stuffed articles per day to capture programmatic ad revenue. Credence detects these operations using three distinct mathematical and linguistic forensic layers:

Incoming Document Stream
Layer 1: Lexical Shannon Topic Entropy (H_topic)
- Measures vocabulary distribution & n-gram spread
(Flagged if H < 0.30)
Layer 2: Top-3 Token Concentration Penalty (C_top3)
- Penalizes repetitive programmatic phrasing
(Flagged if C > 0.40)
Layer 3: SimHash-64 Cluster Hamming Distance (d_H)
- Detects coordinated narrative syndicate cloning
(Flagged if d_H <= 3)
Automated Astroturfing Quarantine & Score Penalty

---

## 2. Mathematical Detection Formulation

### 2.1 Lexical Shannon Topic Entropy ($H_{\text{topic}}$)
Let $p_i$ be the normalized frequency of token $i$ across a 50-article sliding window from a publisher domain:

$$H_{\text{topic}} = -\sum_{i=1}^{V} p_i \log_2(p_i)$$

- **Authentic Editorial Newsrooms**: $H_{\text{topic}} \ge 0.75$ (Rich lexical variation, diverse topic coverage).
- **Synthetic Content Farms / Bot Swarms**: $H_{\text{topic}} < 0.30$ (Extreme keyword concentration on commercial affiliate topics).

### 2.2 Top-3 Token Concentration ($C_{\text{top3}}$)
Measures the proportion of total noun/verb phrases occupied by the top 3 most frequent non-stopword tokens:

$$C_{\text{top3}} = \frac{\sum_{j=1}^{3} f_{\text{top}_j}}{\sum_{k=1}^{V} f_k}$$

When $C_{\text{top3}} > 0.40$ and $H_{\text{topic}} < 0.30$, the system triggers an autonomous **Astroturfing Alert** and applies a $40.0$ point suspicion floor.

---

## 3. SimHash-64 Mirror Network Detection

To detect syndicate networks republishing identical AI-generated slop across multiple throwaway domains, Credence calculates a 64-bit SimHash fingerprint for every article:

$$h(\text{doc}) = \sum_{w \in \text{tokens}} \text{sign}(v_w) \cdot \text{hash}_i(w)$$

If the bitwise Hamming distance $d_H(h_A, h_B) \le 3$ between articles on distinct domains, both domains are linked in the **Syndicate Mirror DAG** (`credence.report/#mirrors`).

---

## 4. Operator CLI & Audit Commands

```bash
# Measure topic entropy and astroturfing risk for a domain
$ credence domain entropy spam-news-daily.com

# Inspect SimHash bitwise differential against known content farms
$ credence evaluate diff https://site-a.com/article https://site-b.com/article
```

---

## 5. Related Articles & Blueprints

* 📰 [Case Study: Unmasking Astroturfing Swarms with Topic Entropy](../../blog/case-study-astroturfing-entropy.md)
* 🍕 [The Pizza Hut Problem Essay](../../blog/the-pizza-hut-problem.md)
* 🎮 [Zero-Trust Dynamic Feed Simulator Playground](../playground.md)

---
## Synthetic Media Provenance & Deepfake Detection

As generative video, voice cloning, and synthetic imagery proliferate, verifying digital content requires cryptographic provenance validation:

| Provenance Dimension | Cryptographic Check | Expected Verification Output | Integrity Classification |
| :--- | :--- | :--- | :--- |
| **C2PA Manifest** | Embedded XMP metadata signature | Valid certificate authority chain | Authentic Media Provenance |
| **Temporal Consistency** | Video frame-by-frame SimHash | Stable variance across timestamps | Genuine Live Recording |
| **Audio Watermarking** | High-frequency spectral analysis | Synthetically generated noise profile | Flagged as AI Voice Clone |

```bash
# Verify provenance metadata on digital asset
$ credence verify assets/sample-media.jpg --json
```

---
## Provenance Verification via C2PA Manifests

Validating C2PA metadata allows the epistemic engine to verify the chain of custody for digital images and video recordings.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Synthetic Media Provenance** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Synthetic Media Provenance** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "synthetic_media_provenance" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
