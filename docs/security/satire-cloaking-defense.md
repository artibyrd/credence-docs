---
title: Poe's Law & Satire Cloaking Defense
description: Two-tier satire pipeline, linguistic irony detection, SPJ-1.6 overrides, and protecting genuine parody.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 1
---

# Poe's Law & Satire Cloaking Defense

This security specification details how Credence differentiates authentic political parody from malicious disinformation cloaked as satire under **Poe's Law**.

---

## 1. Two-Tier Satire Pipeline

Poe's Law observes that without a clear indicator of intent, it is impossible to create a parody of extreme views so obviously exaggerated that it cannot be mistaken for genuine extremism. Credence resolves this with a **Two-Tier Evaluation Pipeline**:

| Security Evaluation Tier | Parody Cue / Grounding Test | Scoring Rule | Epistemic Resolution |
| :--- | :--- | :--- | :--- |
| **Tier 1: Linguistic Irony** | Parody framing, absurdism cues, publisher history | Neutralizes score ($S=0.00$) | Legitimate satire protected |
| **Tier 2: Factual Allegation**| Verifiable real-world claims in parody context | Triggers SPJ-1.6 review | Inspects underlying defamation |
| **Tier 3: Cloaking Detection**| Disinformation disguised under satire disclaimers | Flags deceptive masquerading | Assigns high suspicion score |

---

## 2. Satire Neutralization vs. Defamation Overrides

1. **Authentic Parody Neutralization**: When a recognized satire outlet (*The Onion*, *Babylon Bee*) publishes an absurd or exaggerated story, heuristic clickbait and superlative penalties are completely wiped ($S = 0.00$), and the document is classified as `PRISTINE (SATIRE)`.
2. **The `SPJ-1.6` Malicious Cloaking Override**: If an unverified outlet publishes defamatory factual allegations (e.g., alleging a named election official was arrested for treason) and subsequently attempts to escape penalties by asserting "it was satire", Credence triggers the `SPJ-1.6` override:
   - Evaluates whether reasonable readers would recognize parody.
   - Assesses public disclosure notices and prominent satire labeling.
   - If deceptive intent is proven, full disinformation penalties apply.

---

## 3. Operator CLI & FastMCP Verification

```bash
# Evaluate a satire article with contextual disclosure
$ credence audit https://theonion.com/article-example --profile balanced

# Output:
# [PRISTINE] Suspicion Score: 0.0 / 100
# Flags: [SATIRE_IDENTIFIED] Parody context recognized; heuristic penalties neutralized.
```

---

## 4. Related Protocols & Essays

* 📰 [Poe's Law and the Satire Cloak Essay](../../blog/poes-law-and-the-satire-cloak.md)
* 📘 [The Invariant Bible](../invariants.md) — Poe's Law & Satire Safeguards
* 🎓 [Tutorial 02: Poe's Law & Satire Cloaking](../tutorials/02-satire-vs-disinformation.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Satire Cloaking Defense** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Satire Cloaking Defense** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "security"

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