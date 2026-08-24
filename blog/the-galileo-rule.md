---
title: 'The Galileo Rule: Why Grounded Truth Must Always Defeat Consensus Swarms'
description: How a single specialist with verbatim DOM citations overrides a 100-node Sybil cartel in Bayesian consensus.
since_version: v1.12.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 22
---

# The Galileo Rule: Why Grounded Truth Must Always Defeat Consensus Swarms

In 1632, Galileo Galilei published his *Dialogue Concerning the Two Chief World Systems*, demonstrating that the Earth revolved around the Sun.

At the time, the overwhelming consensus of religious authorities, academic faculties, and civil institutions insisted upon a geocentric universe. If truth were determined purely by a democratic vote or average consensus across all active observers, Galileo would have been overwhelmingly outvoted. Yet Galileo was right, and the entire consensus was wrong—because Galileo possessed empirical, verifiable observations.

In decentralized trust systems, this historical reality creates a profound mathematical challenge: **How do you prevent a swarm of low-quality or colluding nodes from voting down authentic truth?**

Credence answers this question with **The Galileo Rule (`inv-verbatim-grounding`)**.

---

## The Vulnerability of Pure Democratic Consensus

In naive Byzantine Fault Tolerant networks, nodes compute the median or mean score across all peer votes:

$$\bar{S}_{\text{naive}} = \frac{1}{N} \sum_{i=1}^{N} S_i$$

If an adversary deploys a Sybil swarm of 10 colluding nodes that broadcast `0.0 (PRISTINE)` for a fraudulent corporate earnings report, while 2 honest specialist nodes report `85.0 (FRAUD)`, the naive consensus median calculates:

$$\text{Median}(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85) = 0.0\text{ (CLEAN)}$$

The truth is completely suppressed by brute numerical force.

---

## The Mathematical Formulation of The Galileo Rule

To prevent consensus suppression, Credence enforces an asymmetric evidentiary override:

$$\text{Final Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_k \times G_k\right)$$

Where:
- $\bar{S}_{\text{consensus}}$ is the expertise-weighted Bayesian median across all peers.
- $S_k$ is the suspicion score evaluated by specialist node $k$ ($E_k \ge 0.90$).
- $G_k \in [0.0, 1.0]$ is the specialist's **verifiable citation grounding ratio**.

| Swarm Consensus Voter | Voter Expertise & Grounding | Submitted Score | Galileo Rule Resolution |
| :--- | :--- | :--- | :--- |
| **10 Generalist Nodes** | Generalist profile, 0 citations ($G=0.00$) | $S=0.0$ (Complacent Pass) | Majority vote ungrounded |
| **1 Specialist Node** | Domain specialist, verbatim DOM quotes ($G=1.00$) | $S=88.0$ (Definitive Violation) | **Galileo Rule Overrides Majority** |
| **Final Consensus Score** | Grounded evidence prevails over ungrounded consensus | **$S=88.0$ (PRISTINE Grounding)** | Prevents democratic hallucination |

---

## Why Verbatim Grounding ($G=1.00$) Is Essential

The Galileo Rule cannot be abused by rogue actors because the override is gated strictly by **character-for-character DOM grounding**:
- If a rogue node submits an ungrounded high suspicion score ($G=0.0$), the override evaluates to $88.0 \times 0.0 = 0.0$, neutralizing the attack.
- Only when the node extracts exact, unalterable DOM evidence verifying an egregious violation does its lone vote carry the authority to overturn the swarm.

Truth is not a popularity contest. By codifying The Galileo Rule into our mathematical consensus, Credence ensures that evidence always triumphs over noise.

## Architectural Invariants & Verification Mechanics

The implementation of **The Galileo Rule** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **The Galileo Rule** using standard CLI commands and FastMCP 2.0 tools:

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