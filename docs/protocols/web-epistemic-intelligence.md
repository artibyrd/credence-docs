---
title: Global Web Intelligence, DCI & Epistemic Weather
description: Real-time epistemic intelligence protocol, publisher domain trust indices, and network weather forecasting.
since_version: v1.12.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 6
---

# Global Web Intelligence, DCI & Epistemic Weather

The **Web Epistemic Intelligence Protocol (WEIP-v1)** defines how Credence aggregates decentralized audit receipts across the web to compute long-term **Domain Credence Indices (DCI)**, track systemic disinformation campaigns, and publish real-time **Epistemic Weather Forecasts**.

---

## 1. Domain Credence Index (DCI) Architecture

The **Domain Credence Index (DCI)** is a rolling, evidence-grounded trust metric assigned to publisher Fully Qualified Domain Names (FQDNs). Unlike traditional blacklists or subjective fact-checking ratings, the DCI is computed deterministically from verified Ed25519 audit receipts signed by mesh peer nodes:

$$\text{DCI}(d) = 100 \times \left(1.0 - \bar{S}_d\right) \times \left(1.0 - P_{\text{astro}}\right) \times G_d$$

Where:
- $\bar{S}_d \in [0.0, 1.0]$: Rolling 30-day mean suspicion score for domain $d$.
- $P_{\text{astro}} \in [0.0, 1.0]$: Coordinated astroturfing penalty (triggered when topic entropy $H < 0.30$).
- $G_d \in [0.0, 1.0]$: Citation grounding ratio across all audited articles on domain $d$.

---

## 2. Metric Definitions & Epistemic Weather Taxonomy

The network computes four core macro-telemetry indices to describe the information health of the internet:

### 2.1 Metric Definitions

1. **Global Grounding Index ($G_{\text{global}}$)**: The network-wide percentage of factual claims backed by exact, verbatim DOM citations ($G=1.00$).
2. **Topic Entropy ($H_{\text{topic}}$)**: Shannon entropy of lexical token distributions across published articles, detecting synchronized bot farm narrative seeding:
   $$H_{\text{topic}} = -\sum_{i=1}^{K} p_i \log_2(p_i)$$
3. **Astroturfing Velocity ($V_{\text{astro}}$)**: Rate of near-duplicate article propagation across distinct domains measured via SimHash-64 Hamming distances ($d_H \le 3$).
4. **Stealth Mutation Frequency ($M_{\text{stealth}}$)**: The frequency with which publisher domains perform unacknowledged substantive edits to live articles after initial indexing.

### 2.2 Epistemic Weather Classification Bands

| Weather Status | DCI Range | Grounding ($G$) | Topic Entropy ($H$) | Network Condition |
| :--- | :---: | :---: | :---: | :--- |
| ☀️ **Pristine Sunlight** | $\ge 85.0$ | $\ge 0.95$ | $\ge 0.75$ | High-veracity journalism, diverse sourcing, zero coordinated slop. |
| ⛅ **Scattered Fog** | $65.0 - 84.9$ | $0.80 - 0.94$ | $0.55 - 0.74$ | Occasional ungrounded claims, clickbait framing, or editorial bias. |
| 🌧️ **Heavy Smog** | $40.0 - 64.9$ | $0.60 - 0.79$ | $0.35 - 0.54$ | Widespread anonymous assertions, promotional advertorials, and PR repackaging. |
| ⛈️ **Toxic Superstorm** | $< 40.0$ | $< 0.60$ | $< 0.35$ | Coordinated astroturfing swarms, synthetic AI slop farms, or viral disinformation campaigns. |

---

## 3. Wire Protocols & Query Endpoints

Client applications, browser extensions, and autonomous agents query DCI records via standardized endpoints:

### Retrieval Query Example

```bash
# Query domain intelligence via CLI
$ credence domain intel reuters.com

# Or via FastMCP 2.0 Resource URI:
credence://intelligence/domains/reuters.com

# Or via REST API:
GET https://credence.report/api/v1/domain/reuters.com
```

### JSON Response Schema

```json
{
  "domain": "reuters.com",
  "dci_score": 92.4,
  "classification": "HIGH_INTEGRITY",
  "weather_status": "PRISTINE_SUNLIGHT",
  "evaluations_count": 1420,
  "grounding_ratio": 0.984,
  "topic_entropy": 0.82,
  "top_violation_types": [],
  "last_audited": "2026-08-24T01:30:00Z"
}
```

---

## 4. Academic Standards & References

* 📘 [The Invariant Bible](../invariants.md) — Epistemic Scoring Invariants
* 📰 [The Domain Epistemic Index Case Study](../../blog/the-domain-epistemic-index.md)
* 🍕 [The Pizza Hut Problem & Astroturfing Defense](../../blog/the-pizza-hut-problem.md)
* 🎮 [Zero-Trust Dynamic Feed Simulator Playground](../playground.md)

---
## Web Epistemic Intelligence & Heuristic Extraction

The ingestion engine transforms raw, messy HTML into clean, normalized DOM trees for forensic analysis:

| Normalization Step | Sanitization Action | Epistemic Protection |
| :--- | :--- | :--- |
| **Script/Style Stripping** | Removes `<script>`, `<style>`, `<iframe>` | Prevents XSS and malicious execution |
| **Entity Decoding** | Decodes HTML entities (`&amp;`, `&quot;`) | Preserves character-exact DOM grounding |
| **Tag Flattening** | Strips layout `<div>` and `<span>` tags | Produces clean textual corpus for SimHash |
| **Metadata Extraction** | Extracts OpenGraph, Schema.org, Dublin Core | Captures author attribution and publication dates |

```python
from credence.ingestion.extractor import extract_clean_dom_text

# Normalize raw HTML into structured DOM text
dom_text = extract_clean_dom_text(raw_html, allow_local=False)
assert "<script>" not in dom_text
```

---
## Robust HTML Sanitization and Entity Decoding

Semantic text extraction strips scripts and styles while preserving verbatim character exactness for grounding.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Web Epistemic Intelligence** operates according to strict operational parameters and deterministic boundaries:

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
