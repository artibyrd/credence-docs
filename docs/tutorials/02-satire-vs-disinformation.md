---
title: "Tutorial 02: Distinguishing Satire from Disinformation (Poe's Law)"
description: Learn how Credence protects political parody while catching malicious defamation cloaked as satire.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 2
---

# Tutorial 02: Distinguishing Satire from Disinformation (Poe's Law)

In this tutorial, you will explore how Credence implements **Poe's Law Safeguards** to protect authentic satire (*The Onion*, *Babylon Bee*) while preventing malicious actors from using "parody" as a legal shield for defamation.

---

## 1. The Satire Classification Dilemma

Under **Poe's Law**, sufficiently extreme political views and genuine absurd parody become indistinguishable without explicit intent markers. Standard AI models make two common errors:
1. **False Positives**: Flagging *The Onion* as "fake news" because its literal assertions are false.
2. **False Negatives**: Excusing viral defamatory conspiracy theories because the publisher claimed "it was just satire."

---

## 2. Auditing Authentic Satire

Run an audit on a recognized satire article:

```bash
# Audit an article from a verified satire publisher
$ credence audit https://theonion.com/article-example --profile balanced
```

### Result Analysis
Credence detects the satire context, sets `SATIRE_IDENTIFIED=true`, and neutralizes heuristic clickbait penalties ($S = 0.00$), classifying the piece as `PRISTINE (SATIRE)`.

---

## 3. Auditing Malicious Satire Cloaking

Now audit a defamatory article from a disreputable outlet that asserts criminal charges against private citizens while claiming parody:

```bash
$ credence audit https://fake-wire.com/official-arrested-treason --profile ultra --thinking-budget 4096
```

### Result Analysis
The model triggers the `SPJ-1.6` override:
- Factual allegations against named real individuals are identified.
- No public satire disclaimer or absurd framing is present in the DOM.
- The article receives an unmitigated `UNRELIABLE` classification with a suspicion score $>80.0$.

---

## 4. Next Steps

* 🤖 [Tutorial 03: FastMCP 2.0 with Claude & Cursor](03-claude-cursor-fastmcp.md)
* 🛡️ [Poe's Law & Satire Cloaking Security Specification](../security/satire-cloaking-defense.md)

## Architectural Invariants & Verification Mechanics

The implementation of **02 Satire Vs Disinformation** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **02 Satire Vs Disinformation** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "tutorials"

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
