---
title: Scoring Calibration & Mathematical Rubrics
description: Mathematical formulation of the Epistemic Suspicion Score, non-linear saturation curve, and classification rubrics.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

```
 Raw Document Text
        |
        ▼
| Stage 1: Fast Regex Heuristics (0 tokens, instant)     |
|  • Calculates Clickbait Index, Superlative Density     |
                           | If boundary score (15 < S < 65)
                           ▼
| Stage 2: Specialist Reasoning Model (Gemini 3.7 Flash) |
|  • Dissects syllogistic logic & extracts DOM quotes    |
                           | If high-stakes / medical / SEC
                           ▼
| Stage 3: Escalation Reasoning (4,096 Thinking Tokens)  |
|  • Deep forensic cross-examination & source grounding  |
```

---

## 4. Interactive Calibration Tools

* 🎮 [Interactive Saturation Curve Plotter](../playground.md)
* 📐 [Robust Consensus Proofs & Mathematical Foundations](../mathematics/robust-consensus-proofs.md)
* 📘 [The Invariant Bible](../invariants.md) — Epistemic Scoring Invariants

## Architectural Invariants & Verification Mechanics

The implementation of **Scoring** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Scoring** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "protocols"

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


---

## 5. Non-Linear Saturation Dynamics

The exponential diminishing returns saturation curve ($k=0.045$) ensures that minor editorial blemishes (such as a single sensationalized adjective in a 3,000-word investigative report) do not unjustly drag a high-integrity article into suspicious territory.

Conversely, multiple coordinated violations (such as undisclosed affiliate links paired with ungrounded medical claims) rapidly saturate the formula toward critical suspicion ($S \ge 75.0$), triggering immediate quarantine alerts.