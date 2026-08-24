---
title: Synthetic AI Content & Media Provenance Blueprint
description: Shannon topic entropy collapse, C2PA cryptographic provenance, top-token concentration, and AI content farm detection.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 4
---

# Synthetic AI Content & Media Provenance Blueprint

This blueprint specifies the forensic architecture used by Credence to detect automated AI content farms, measure lexical topic entropy collapse, and verify C2PA cryptographic provenance on digital media.

---

## 1. Automated Content Farm Detection Architecture

Synthetic AI content farms generate thousands of low-effort, keyword-stuffed articles per day to capture programmatic ad revenue. Credence detects these operations using three distinct mathematical and linguistic forensic layers:

```
 Incoming Document Stream
           |
           ▼
| Layer 1: Lexical Shannon Topic Entropy (H_topic)       |
|    • Measures vocabulary distribution & n-gram spread  |
                           | (Flagged if H < 0.30)
                           ▼
| Layer 2: Top-3 Token Concentration Penalty (C_top3)    |
|    • Penalizes repetitive programmatic phrasing        |
                           | (Flagged if C > 0.40)
                           ▼
| Layer 3: SimHash-64 Cluster Hamming Distance (d_H)     |
|    • Detects coordinated narrative syndicate cloning   |
                           | (Flagged if d_H <= 3)
                           ▼
| Automated Astroturfing Quarantine & Score Penalty      |
```

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

## Architectural Invariants & Verification Mechanics

The implementation of **Synthetic Media Provenance** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Synthetic Media Provenance** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blueprints"

# Inspect real-time execution metrics and Bayesian concordance
$ credence stats --detailed --window 24h

# Export canonical verification receipts for external compliance
$ credence verify --json --audit-trail
```

### Quantitative Operational Benchmarks

| Metric / Dimension | Target Performance | Worst-Case Tolerance | Subsystem Status |
| :--- | :---: | :---: | :--- |
| **Verification Latency** | $< 15\text{ ms}$ (Local Cache) | $< 250\text{ ms}$ (P95 Mesh Gossip) | ✅ Optimal |
| **Grounding Precision ($G$)** | $1.00$ (Verbatim DOM Match) | $0.90$ (Probation Window) | ✅ Certified |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle) | ✅ Protected |
| **Memory Consumption** | $< 150\text{ MB RAM}$ | $< 256\text{ MB RAM}$ | ✅ Lean |

### RFC Standards & Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../playground.md)