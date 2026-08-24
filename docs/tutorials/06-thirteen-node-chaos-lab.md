---
title: 'Tutorial 06: Running a 13-Node Watts-Strogatz Chaos Simulation'
description: Simulate a 13-node peer mesh in memory, inject Byzantine Sybil cartels, and verify the Galileo Rule override.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 6
---

# Tutorial 06: Running a 13-Node Watts-Strogatz Chaos Simulation

In this tutorial, you will execute a simulated **13-node Watts-Strogatz small-world mesh** in memory and test the network's resilience against **Byzantine Sybil cartels ($3f+1$)**.

---

## 1. The Watts-Strogatz Topology ($N=13, k=4, \beta=0.20$)

A Watts-Strogatz graph provides high clustering with short characteristic path lengths, allowing epidemic gossip to reach all nodes in $O(\log N)$ hops.

```
       [01] --- [02] --- [03]
      /   \     /  \     /   \
   [13]   [04] ---- [05]   [06]
     |      |         |      |
   [12]   [07] ---- [08]   [09]
      \   /     \  /     \   /
       [11] --- [10] --- [..]
```

---

## 2. Running the Chaos Simulation

Execute the 13-node in-memory simulation test:

```bash
# Run the 13-node cluster chaos suite
$ pytest tests/integration/test_mesh_cluster_gossip.py -v
```

---

## 3. Injecting a Byzantine Cartel Attack

In the simulation, 4 colluding nodes ($f = \lfloor(13-1)/3\rfloor = 4$) broadcast fraudulent `PRISTINE (0.0)` attestations for a known disinformation article:

```bash
# Run the Byzantine Cartel isolation test
$ pytest tests/integration/test_mesh_byzantine_cartel.py -v
```

### The Galileo Rule in Action
When Node 13 (a high-expertise specialist with $E_i = 1.0, G = 1.00$) submits verified, grounded quotes showing severe fraud, the network invokes **The Galileo Rule**:

$$\text{Final Consensus Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_k \times G_k\right) = 84.5\text{ (SUSPICIOUS)}$$

The 4-node cartel is defeated, and their quality scores ($Q_i$) are slashed by 50%.

---

## 4. Next Steps

* 💾 [Tutorial 07: Air-Gapped Sneakernet Bundles](07-air-gapped-and-adhoc-mesh.md)
* 📐 [Mathematical Proof of Byzantine Fault Tolerance](../mathematics/robust-consensus-proofs.md)

## Architectural Invariants & Verification Mechanics

The implementation of **06 Thirteen Node Chaos Lab** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **06 Thirteen Node Chaos Lab** using standard CLI commands and FastMCP 2.0 tools:

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
