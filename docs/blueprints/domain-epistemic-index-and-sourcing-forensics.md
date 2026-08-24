---
title: 'Technical Blueprint: Domain Epistemic Index & Sourcing Forensics'
description: Rolling Domain Credence Index (DCI), 30-day Bayesian decay, source network graphs, and conflict-of-interest detection.
since_version: v1.12.0
verified_version: v2.16.2
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
+--► [Primary Court Document (PACER)] ---► Grounding: G = 1.00 (High Integrity)
+--► [Commercial Affiliate Sponsor]   ---► IEP-COMM-1 (Conflict Flagged)

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

## Architectural Invariants & Verification Mechanics

The implementation of **Domain Epistemic Index And Sourcing Forensics** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Domain Epistemic Index And Sourcing Forensics** using standard CLI commands and FastMCP 2.0 tools:

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
