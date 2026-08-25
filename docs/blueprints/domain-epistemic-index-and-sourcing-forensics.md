---
title: 'Technical Blueprint: Domain Epistemic Index & Sourcing Forensics'
description: Rolling Domain Credence Index (DCI), 30-day Bayesian decay, source network graphs, and conflict-of-interest detection.
since_version: v1.12.0
verified_version: v2.16.7
last_verified: 2026-08-24
sidebar:
  order: 15
---

# Technical Blueprint: Domain Epistemic Index & Sourcing Forensics

This technical blueprint details the mathematical formulation, rolling decay windows, and source network graph forensics used by Credence to compute the **Domain Credence Index (DCI)**.

---

## 1. Mathematical Formulation of the DCI

The **Domain Credence Index (DCI)** is a calibrated trust metric ($0.0 - 100.0$) assigned to publisher Fully Qualified Domain Names (FQDNs):

$$\text{DCI}(d) = 100 \times \left(1.0 - \bar{S}_d\right) \times \left(1.0 - P_{\text{astro}}\right) \times G_d$$

Where:
- $\bar{S}_d \in [0.0, 1.0]$: The rolling 30-day exponential decay mean suspicion score for domain $d$.
- $P_{\text{astro}} \in [0.0, 1.0]$: Astroturfing penalty triggered when topic entropy $H < 0.30$ ($P_{\text{astro}} = 0.40$).
- $G_d \in [0.0, 1.0]$: The aggregate verifiable citation grounding ratio across all audited articles from domain $d$.

---

## 2. Exponential 30-Day Rolling Window Decay

To ensure that recent journalistic behavior carries higher weight while preventing historical violations from permanently condemning a reformed newsroom, individual article scores decay with an exponential half-life of 30 days:

$$w_i(t) = e^{-\lambda \cdot (t_{\text{now}} - t_i)}, \quad \lambda = \frac{\ln 2}{30\text{ days}}$$

$$\bar{S}_d = \frac{\sum_{i=1}^{M} w_i(t) \cdot S_i}{\sum_{i=1}^{M} w_i(t)}$$

---

## 3. Publisher Conflict-of-Interest Network Graph

Credence constructs a directed citation graph linking publisher domains to cited sources:

[Investigative Article (Domain A)]
| Sourcing Attribution Layer | Forensic Citation Target | Grounding Level | Epistemic Assessment |
| :--- | :--- | :---: | :--- |
| **Tier 1: Primary Record** | Official court docket (PACER) | $G=1.00$ | High Integrity Standard |
| **Tier 2: News Wire** | Direct Reuters / AP wire dispatch | $G=0.95$ | Verified Attribution |
| **Tier 3: Commercial Link** | Undisclosed affiliate sponsor | $G=0.00$ | IEP-COMM-1 Conflict Flagged |

If $>40\%$ of citations on a domain resolve to commercial affiliate links or parent company subsidiaries without transparent disclosure, the system logs an automated `CONFLICT_OF_INTEREST` violation.

---

## 4. Querying Domain Intelligence via API

```bash
# Query domain dossier via CLI
$ credence domain intel reuters.com

# Inspect rolling 30-day DCI history
$ credence domain history reuters.com --window 30d
```

### JSON Response Schema

```json
{
  "domain": "reuters.com",
  "dci_score": 94.6,
  "classification": "HIGH_INTEGRITY",
  "evaluations_count": 1420,
  "grounding_ratio": 0.984,
  "topic_entropy": 0.84,
  "status": "PRISTINE",
  "last_audited": "2026-08-24T02:00:00Z"
}
```

---

## 5. Related Protocols & Blueprints

* 🌐 [Global Web Intelligence Protocol (WEIP-v1)](../protocols/web-epistemic-intelligence.md)
* 📘 [The Invariant Bible](../invariants.md) — Namespaced Fixed Taxonomies
* 📰 [The Domain Epistemic Index Case Study](../../blog/the-domain-epistemic-index.md)

---
## Domain Credence Index (DCI) Formulation & Sourcing Decay

The Domain Credence Index represents the rolling Bayesian credibility reputation score of an entire publishing namespace:

$$\text{DCI}(\text{domain}) = \frac{\sum_{i=1}^{N} w_i \cdot (100 - S_i) \cdot \exp\left(-\frac{\Delta t_i}{\tau}\right)}{\sum_{i=1}^{N} w_i \cdot \exp\left(-\frac{\Delta t_i}{\tau}\right)}$$

Where:
- $S_i \in [0, 100]$ is the historical suspicion score of the $i$-th audited article.
- $w_i = G_i \cdot E_i$ is the evidence weight combining verbatim grounding ratio $G_i$ and reviewer expertise $E_i$.
- $\Delta t_i$ is the age of the audit receipt in days, decaying over half-life $\tau = 30\text{ days}$.

| DCI Score Tier | Reputation Classification | Editorial Characterization | Sifter Action |
| :--- | :--- | :--- | :--- |
| **$85.0 – 100.0$** | **Tier I: Pristine Standard** | Verifiable sourcing, primary citations, transparent corrections | Pass-through with zero delay |
| **$65.0 – 84.9$** | **Tier II: Generally Reliable**| Occasional unnamed sourcing or superlative framing | Normal queue evaluation |
| **$40.0 – 64.9$** | **Tier III: Notable Flags** | Frequent clickbait headers, undisclosed commercial links | Mandatory heuristic audit |
| **$0.0 – 39.9$** | **Tier IV: Soft Quarantine** | Coordinated astroturfing or ungrounded assertions | Flagged in morning briefing |

---
## Domain Credence Index Aggregation Architecture

The DCI aggregator computes rolling 30-day exponential decay scores across all tracked newsroom domains, updating trust badges in real time.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Domain Epistemic Index And Sourcing Forensics** operates according to strict operational parameters and deterministic boundaries:

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
