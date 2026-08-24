---
title: 'Tutorial 01: Dissecting Sensationalized Headlines & Clickbait'
description: Learn how Credence uses offline heuristic regexes and syllogistic reasoning to tear down hyperbolic headlines.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 1
---

# Tutorial 01: Dissecting Sensationalized Headlines & Clickbait

In this hands-on tutorial, you will learn how Credence analyzes sensationalized headlines, detects emotional manipulation, and calculates the **Clickbait Severity Index (CSI)** using both offline heuristics and reasoning models.

---

## 1. The Anatomy of Clickbait

Clickbait relies on specific linguistic patterns designed to trigger dopamine responses and exploit curiosity gaps:
1. **The Curiosity Gap**: Deliberately withholding the core subject (`"You won't believe what happened next..."`).
2. **Superlative Saturation**: Excessive use of extreme adjectives (`"Shocking"`, `"Mind-blowing"`, `"Unbelievable"`).
3. **Emotional Provocation**: Framing neutral events in high-arousal moral outrage terms.

---

## 2. Running Your First Clickbait Audit

Execute an audit on a hyperbolic headline using the CLI:

```bash
# Basic audit using the default BALANCED profile (1,024 thinking tokens)
$ credence audit "https://example-news-blog.com/shocking-breakthrough-revealed"

# Run in FREE offline mode (0 tokens, 100% heuristic regexes)
$ credence audit "https://example-news-blog.com/shocking-breakthrough-revealed" --profile free
```

### Understanding the Terminal Output

```json
{
  "url": "https://example-news-blog.com/shocking-breakthrough",
  "classification": "SUSPICIOUS",
  "suspicion_score": 58.4,
  "grounding_ratio": 0.42,
  "verdict": "Low grounding ratio and unverified claims"
}
```

---

## 3. Dissecting the Forensic Evidence

Credence compares the extracted headline against the core claim entities extracted from the article DOM:
- **Headline Claim**: `"Scientists Reveal Miracle Cancer Cure!"`
- **Article Body Reality**: Study conducted in petri dishes on isolated cell cultures with no clinical trials.
- **Verdict**: Critical headline-body dissonance violation (`SPJ-1.1`), elevating suspicion by $+35.0$ points.

---

## 4. Next Steps

* 🎓 [Tutorial 02: Poe's Law & Satire Cloaking](02-satire-vs-disinformation.md)
* 🤖 [Tutorial 03: FastMCP 2.0 with Claude & Cursor](03-claude-cursor-fastmcp.md)

## Architectural Invariants & Verification Mechanics

The implementation of **01 Clickbait Teardown** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **01 Clickbait Teardown** using standard CLI commands and FastMCP 2.0 tools:

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
