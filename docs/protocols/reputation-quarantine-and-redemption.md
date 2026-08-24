---
title: 'Epistemic Protocol Specification: Domain Reputation, Soft Quarantine & Redemption (EPEP-17)'
description: State machine transitions, half-life decay, exponential backoff, and evidentiary redemption for flagged publisher domains.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 8
---

# Epistemic Protocol Specification: Domain Reputation, Soft Quarantine & Redemption (EPEP-17)

The **Domain Reputation, Soft Quarantine & Redemption Protocol (EPEP-17)** governs how the Credence network handles low-integrity publisher domains without permanent censorship or subjective blacklisting. It establishes a deterministic, evidence-grounded lifecycle for flagging, isolating, and redeeming web domains.

---

## 1. Motivation & Threat Model

Traditional web trust systems suffer from two fatal flaws:
1. **Permanent Blacklisting Blindspots**: Once a domain is blacklisted, fact-checkers stop evaluating its articles. If the domain later publishes authentic investigative journalism (such as BuzzFeed News breaking international human rights investigations after publishing entertainment listicles), the system fails to recognize genuine truth.
2. **Immediate Forgiveness Vulnerability**: If a disinformation site can clear its history with a single retraction or by purchasing a clean domain alias, bad actors easily game reputation systems.

EPEP-17 solves both challenges using **Soft Quarantine** with continuous background polling and **Evidentiary Redemption Windows**.

---

## 2. State Machine & Transition Invariants

Every tracked Fully Qualified Domain Name (FQDN) exists in one of four formal states:

| Reputation State | Entry Threshold | Feed Impact | Redemption Protocol |
| :--- | :--- | :--- | :--- |
| **1. PRISTINE** | Suspicion $<20.0$, Grounding $G=1.00$ | Top feed ranking | Normal baseline |
| **2. NOTABLE_FLAGS** | Suspicion $>35.0$ on 3 audits | Warning badge attached | Self-correction on subsequent audits |
| **3. SOFT_QUARANTINE** | Uncorrected high-severity flags | Downranked in feeds | 14-day probation with $G=1.00$ grounding |
| **4. HARD_QUARANTINE** | Coordinated Sybil cartel / malware | Circuit breaker rejection | Manual cryptographic appeal or re-keying |

### 2.1 State Definitions

* **State 1: `PRISTINE`**: DCI $\ge 75.0$, rolling suspicion $\le 20.0$. Syndicated articles receive normal priority in peer gossips and feed digests.
* **State 2: `NOTABLE_FLAGS`**: Rolling suspicion between $20.1$ and $49.9$. Web widgets display cautionary advisories; peer nodes verify groundings before adopting attestations.
* **State 3: `SOFT_QUARANTINE`**: Rolling suspicion $\ge 50.0$ or astroturfing entropy $H < 0.30$. The domain is isolated: its articles are omitted from automated morning briefings, and downstream consumers receive prominent forensic warnings. However, the domain is **never deleted or blocked from ingestion**.
* **State 4: `PROBATION_REVIEW`**: Initiated when an operator or autonomous sifter logs consecutive clean audits on a quarantined domain. The domain enters a 50-article evaluation window.

---

## 3. Exponential Polling Backoff & Half-Life Decay

When a domain enters `SOFT_QUARANTINE`, automated background sifters do not abandon it. Instead, they apply exponential backoff to polling frequency to preserve LLM token budgets while monitoring for editorial improvement:

$$T_{\text{poll}} = T_{\text{base}} \times 2^{\min(k, 6)}$$

Where $T_{\text{base}} = 1\text{ hour}$, scaling up to a maximum of 64 hours between exploratory checks.

### Half-Life Reputation Decay

Past violations decay exponentially with an active half-life of 90 days:

$$S_{\text{historical}}(t) = S_0 \times e^{-\lambda t}, \quad \lambda = \frac{\ln 2}{90\text{ days}}$$

This ensures that historical editorial errors do not permanently condemn a reformed newsroom, while preventing overnight reputation laundering.

---

## 4. The BuzzFeed News Doctrine & Redemption Rules

A quarantined domain achieves full redemption to `PRISTINE` status only by meeting four strict empirical gates:
1. **Sample Depth**: Must publish $\ge 50$ consecutive articles evaluated across $\ge 30$ calendar days.
2. **Grounding Floor**: $100\%$ of factual assertions must achieve verbatim grounding ($G \ge 0.90$).
3. **Calibrated Suspicion**: Rolling average suspicion must remain $\le 15.0$.
4. **Correction Transparency**: Any factual retractions must feature transparent `<del>` or `[Correction]` markup rather than unannounced stealth edits.

---

## 5. CLI & FastMCP Operator Interfaces

```bash
# Inspect domain state machine status and quarantine history
$ credence report inmaricopa.com

# Request exploratory probationary audit window
$ credence check https://inmaricopa.com --profile ultra

# Query quarantine ledger via FastMCP 2.0
$ credence_get_domain_dossier(domain="inmaricopa.com")
```

---

## 6. Related Documentation & Case Studies

* 📰 [The BuzzFeed News Doctrine & Redemption Essay](../../blog/the-buzzfeed-news-doctrine.md)
* 📘 [The Invariant Bible](../invariants.md) — Soft Blacklisting & Redemption Invariants
* 🏛️ [Conflict of Pun-terest: InMaricopa Forensic Case Study](../../blog/conflict-of-pun-terest.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Reputation Quarantine And Redemption** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Reputation Quarantine And Redemption** using standard CLI commands and FastMCP 2.0 tools:

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