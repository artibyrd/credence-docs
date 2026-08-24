---
title: 'Tutorial 05: Bootstrapping a 3-Node Local P2P Mesh in 5 Minutes'
description: Boot three independent local nodes on separate ports, peer them via WebSockets, and watch attestation gossip in action.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 5
---

# Tutorial 05: Bootstrapping a 3-Node Local P2P Mesh in 5 Minutes

In this tutorial, you will launch 3 independent Credence nodes locally on separate ports, peer them over WebSockets, and observe real-time **attestation gossip** and **Bayesian consensus**.

---

## 1. Booting Node 1 (Bootstrap Seed)

In your first terminal window, boot Node 1 on port 8765:

```bash
# Terminal 1: Launch Bootstrap Seed Node
$ credence germinate --port 8765 --alias "node-1-seed"
```

Node 1 initializes its SQLite WAL state store, mints its Ed25519 identity, and listens for gossip connections on `ws://127.0.0.1:8765/gossip`.

---

## 2. Booting Node 2 & Node 3

In your second and third terminal windows, boot two peer nodes and connect them to Node 1:

```bash
# Terminal 2: Launch Peer Node 2
$ credence germinate --port 8766 --alias "node-2" --peer "ws://127.0.0.1:8765/gossip"

# Terminal 3: Launch Peer Node 3
$ credence germinate --port 8767 --alias "node-3" --peer "ws://127.0.0.1:8765/gossip"
```

---

## 3. Observing Attestation Gossip & 100% Token Savings

Now, perform an audit on Node 1:

```bash
# Terminal 1: Audit an article URL
$ credence audit https://example.com/news-story --port 8765
```

Within **12 milliseconds**, Node 1 signs an Ed25519 attestation and gossips it to Node 2 and Node 3.

Now query Node 3 for the same URL:

```bash
# Terminal 3: Query consensus on Node 3
$ credence audit https://example.com/news-story --port 8767
```

### Result: 0 Tokens Consumed!
Node 3 verifies Node 1's Ed25519 signature in **$0.4\text{ms}$** and adopts the cached audit result with **zero LLM inference tokens consumed**!

---

## 4. Next Steps

* 💥 [Tutorial 06: 13-Node Chaos Lab & Byzantine Cartel Defense](06-thirteen-node-chaos-lab.md)
* 📐 [Mathematics of Robust Consensus & Galileo Rule Proof](../mathematics/robust-consensus-proofs.md)

## Architectural Invariants & Verification Mechanics

The implementation of **05 Mesh Quickstart** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **05 Mesh Quickstart** using standard CLI commands and FastMCP 2.0 tools:

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
