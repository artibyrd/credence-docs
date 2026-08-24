---
title: 'Tutorial 08: Sybil Cartel Demolition & Cartel Isolation'
description: Launch a multi-node Byzantine cartel attack and watch the Credence consensus engine detect, isolate, and quarantine malicious nodes.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 8
---

# Tutorial 08: Sybil Cartel Demolition & Cartel Isolation

In this tutorial, you will simulate an adversarial **Sybil Cartel Attack** where four malicious nodes coordinate to manipulate epistemic scores, and observe how the Credence consensus engine autonomously isolates the cartel.

---

## 1. The Sybil Attack Threat Model ($3f+1$ Fault Tolerance)

In decentralized consensus networks, a **Sybil attack** occurs when a single adversary creates multiple fake identities (nodes) to gain disproportionate voting weight.

Suppose an adversary runs 4 colluding nodes in a 13-node mesh. When a fraudulent article is published, all 4 colluding nodes broadcast falsified `PRISTINE (0.0)` audit receipts to whitewash the disinformation.

```
       [Honest Node 1] --- [Honest Node 2]
              \                /
               ▼              ▼
     [Bayesian Weighted Consensus Median] ◄-- [Honest Specialist (G=1.00)]
               ▲              ▲
              /                \
 [Cartel Node 1] -------- [Cartel Node 2]   (Colluding False Scores)
 [Cartel Node 3] -------- [Cartel Node 4]
```

---

## 2. Simulating the Cartel Attack in Python

Run the automated Byzantine Cartel isolation test suite:

```bash
# Execute cartel isolation gauntlet
$ pytest tests/integration/test_mesh_byzantine_cartel.py -v -s
```

### What Happens During the Test:
1. **Initial Swarm Setup**: 13 nodes connect in a Watts-Strogatz topology.
2. **Adversarial Injection**: 4 colluding nodes broadcast identical, ungrounded `0.0` scores for a fabricated medical claim.
3. **Detection via Covariance**: The consensus engine computes pairwise Pearson correlation coefficients ($r$) across peer score histories. The cartel nodes exhibit $r = 1.00$ with $0.00$ DOM citation grounding.
4. **The Galileo Override**: Honest specialist Node 13 provides an audit with exact character-offset citations ($G=1.00$) proving deception. The network triggers **The Galileo Rule**:
   $$\text{Final Consensus Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_{\text{specialist}} \times G\right) = 88.0\text{ (UNRELIABLE)}$$
5. **Autonomous Slashing & Quarantine**: The quality scores ($Q_i$) of all 4 cartel nodes are slashed by 50%, and their node IDs are placed in `SOFT_QUARANTINE`.

---

## 3. Inspecting the Quarantined Cartel

Verify that the malicious nodes are quarantined via CLI:

```bash
# Query domain and peer quarantine registry
$ credence mesh peers --quarantine
```

```
╭---------------------- 🚫 Quarantined Peer Nodes ----------------------╮
| Node ID: ed25519:7a8b9c... (Cartel-01)  | Status: QUARANTINED (Slash: 50%) |
| Node ID: ed25519:8b9c0d... (Cartel-02)  | Status: QUARANTINED (Slash: 50%) |
| Node ID: ed25519:9c0d1e... (Cartel-03)  | Status: QUARANTINED (Slash: 50%) |
| Node ID: ed25519:0d1e2f... (Cartel-04)  | Status: QUARANTINED (Slash: 50%) |
| Reason: Coordinated score covariance without verifiable DOM grounding   |
╰------------------------------------------------------------------------╯
```

---

## 4. Next Steps

* 📰 [Tutorial 09: Zero-Trust Feed Sifter Digest](09-zero-trust-feed-sifter-digest.md)
* 📐 [Robust Consensus Proofs & Galileo Rule](../mathematics/robust-consensus-proofs.md)
* 📘 [The Invariant Bible](../invariants.md) — Mesh Topology & Sybil Resistance

## Architectural Invariants & Verification Mechanics

The implementation of **08 Sybil Cartel Demolition** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **08 Sybil Cartel Demolition** using standard CLI commands and FastMCP 2.0 tools:

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
