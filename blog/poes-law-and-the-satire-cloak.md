---
title: 'Poe’s Law and the Satire Cloak: Teaching an AI When NOT to Be a Pedant'
description: The comedy and mathematics of detecting satire without letting malicious actors hide factual defamation and commercial astroturfing behind 'it’s just a joke.'
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
date: '2026-08-19'
series: 'The Wetware Chronicles'
genre: 'satirical-empiricism'
rule_id: 'SPJ-42.0'
author: The Credence Epistemic Security Group
---

# Poe’s Law and the Satire Cloak: Teaching an AI When NOT to Be a Pedant 🎭

> [!TIP]
> **Epistemic Disclosure (Rule SPJ-42.0 — Ministry of Silly Protocols)**: This article is certified *Tongue-in-Cheek*. The mathematical interaction between Poe's Law Satire Neutralization (The Invariant Bible) and `SPJ-1.6` Cloaking Overrides is an active protocol component in the Credence pipeline.

---

In 2005, internet commentator Nathan Poe formulated a famous axiom:

> *"Without a clear indicator of the author's intent, it is impossible to create a parody of extreme views so obviously exaggerated that it cannot be mistaken by some readers for a sincere expression of the view."*

For an artificial intelligence trained on literal semantic parsing, **Poe’s Law is an epistemic minefield**.

If an AI reads a headline from *The Onion* like *"NASA Discovers Planet Made Entirely of Unopened Junk Mail,"* a naive fact-checker will flag the article as **100% Deceptive Propaganda** and issue emergency scientific corrections to astronomical journals.

Conversely, if a bad actor publishes a defamatory smear alleging a political candidate poisoned a reservoir, and then tacks on a tiny footer saying *"For entertainment purposes only,"* a gullible AI might shrug its digital shoulders and assign a suspicion score of 0.00.

In Credence, we solved this dual challenge with **The Satire Cloaking Invariant**.

![Figure 1.1: Poe's law satire safeguard vs SPJ-1.6 mandatory factual allegation override decision tree](assets/illustrations/poes-law-and-the-satire-cloak.svg)---

## 🛑 The "It's Just a Prank, Bro" Attack Vector

In information warfare, **Satire Cloaking** is the practice of disguising intentional disinformation, commercial astroturfing, or character assassination as "humor" to evade platform moderation filters.

Under **The Invariant Bible: Poe's Law & Satire Safeguards**, Credence enforces a strict mathematical separation:

1. **Legitimate Satire (Suspicion = 0.00):** Hyperbole, cultural irony, and surrealist commentary that does not manufacture verifiable factual allegations against living individuals or public health infrastructure are neutralized to **0.00 suspicion**. We don't fact-check jokes about NASA finding junk mail planets.
2. **The `SPJ-1.6` Cloaking Override:** If content contains specific factual allegations (e.g. alleging financial fraud, corporate bribery, or medical contamination) while attempting to hide behind parody disclaimers, the satire defense is **autonomously revoked**.

$$\text{Suspicion}(\text{Claim}) = \begin{cases} 0.00 & \text{if } \text{IsSatire} \land \neg \text{HasFactualAllegation} \\ \text{FullAudit}(\text{Claim}) & \text{if } \text{HasFactualAllegation} \text{ (SPJ-1.6 Override)} \end{cases}$$

---

## 🔬 Mathematical Entropy Calibration

To ensure astroturfers cannot bypass the network by masking native advertising as humorous editorial, Credence combines **Shannon Topic Entropy ($H$)** with **Top-Token Concentration ($C_{\text{top3}}$)**:

When an article is genuine satire, its vocabulary is broad, literary, and unpredictable ($H \ge 0.70$). When an article is a disguised native advertisement pretending to be a funny blog post, its token distribution collapses around specific promotional phrases ($H < 0.30$).

---

## 🌟 The Balance of Humor and Truth

A free society requires both rigorous truth and biting satire. By teaching our AI when to laugh and when to audit, Credence ensures that humor remains protected while deceptive propaganda finds nowhere to hide.

## Architectural Invariants & Verification Mechanics

The implementation of **Poes Law And The Satire Cloak** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Poes Law And The Satire Cloak** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blog"

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

* 📘 [The Invariant Bible](../docs/invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../docs/feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../docs/changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../docs/playground.md)
