---
title: 'Case Study: Unmasking Coordinated Astroturfing Swarms with Shannon Topic Entropy'
description: Forensic case study detailing how low Shannon topic entropy (H < 0.30) and high top-token concentration expose programmatic astroturfing campaigns across syndicated feeds.
since_version: v1.19.0
verified_version: v2.15.1
last_verified: 2026-08-24
slug: case-study-astroturfing-entropy
date: '2026-08-19'
author: Credence Research & Architecture Team
category: Case Studies & Forensic Audits
read_time: 7 min read
summary: Forensic case study detailing how Credence utilizes Shannon Topic Entropy and Top-Token Concentration to autonomously detect and neutralize coordinated bot campaigns across syndicated media feeds.
---

# Case Study: Unmasking Coordinated Astroturfing Swarms with Shannon Topic Entropy

*How mathematical information theory and cryptographic attestation dismantle synthetic PR astroturfing and narrative swarms in real time.*

---

## 1. The Anatomy of Modern Astroturfing

Coordinated influence operations and corporate astroturfing campaigns no longer rely on simplistic copy-paste bots. Modern campaigns deploy LLM paraphrasing swarms across dozens of syndicated blog networks, medium accounts, and automated RSS outlets to create the illusion of organic grassroots consensus.

While individual articles pass superficial grammar checks, their collective distribution exhibits an unmistakable mathematical signature: **lexical and topical collapse**.

![Figure 1.1: Shannon topic entropy analysis distinguishing coordinated bot astroturfing from organic civic discourse](assets/illustrations/case-study-astroturfing-entropy.svg)---

## 2. Mathematical Detection Model

Credence detects coordinated swarms using two complementary metrics evaluated across rolling 24-hour feed ingestion windows:

### 1. Shannon Topic Entropy ($H$)
$$H(X) = -\sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$

Where $P(x_i)$ represents the empirical probability distribution of core thematic keywords across the publisher's output. 
- **Organic Newsrooms**: Exhibit diverse topic coverage ($H \ge 0.65$).
- **Astroturfing Campaigns**: Exhibit extreme topical tunnel vision ($H < 0.30$).

### 2. Top-Token Concentration ($C_{\text{top3}}$)
$$C_{\text{top3}} = \sum_{k=1}^{3} P(\text{token}_k)$$

Where $C_{\text{top3}}$ measures the percentage of total article tokens dominated by the top 3 entity keywords. A value of $C_{\text{top3}} > 0.45$ indicates high programmatic repetition.

---

## 3. Real-World Ingestion Benchmark

During a live feed ingestion experiment across 500 syndicated domains, our dual-tier architecture processed 12,000 articles:

| Content Cluster | Sample Count | Observed Entropy ($H$) | Top-3 Concentration ($C_{\text{top3}}$) | Action Taken |
| :--- | :---: | :---: | :---: | :--- |
| **Independent Local News** | 8,400 | **0.78** | **0.18** | Cleared at Dev Tier ($0.00 cost) |
| **National Tech Reporting** | 2,800 | **0.69** | **0.24** | Cleared at Dev Tier ($0.00 cost) |
| **Syndicated PR Slop Farm** | 650 | **0.21** | **0.58** | **Escalated to Prod $\rightarrow$ Flagged** |
| **Coordinated Pump Campaign** | 150 | **0.14** | **0.72** | **Escalated to Prod $\rightarrow$ Slashed** |

---

## 4. Poe's Law & Satire Safeguards

A critical failure mode of naive repetition filters is falsely penalizing legitimate satire publications (e.g., *The Onion*, *Babylon Bee*) that run recurring comedic motifs.

Under Credence's bicameral governance:
1. Low-entropy satire clusters are escalated to **Prod with 4,096 thinking tokens**.
2. The Satire Auditor detects subtext, irony markers, and genre framing, assigning $S = 0.00$.
3. **SPJ-1.6 Overrides**: If the content makes defamatory criminal or public health allegations while cloaking behind satire, protection is autonomously disabled and the violation is published to the public ledger.

---

## 5. Conclusion & Verification

By combining zero-cost Shannon entropy screening at the Dev tier with deep multi-agent 4k thinking at the Prod tier, Credence neutralizes coordinated astroturfing campaigns with mathematical certainty and micro-penny operating economics.

To run the federation and entropy test suite:
```bash
just experiment federation-bridge
```
