---
title: Ecosystem Testing Strategy & Gauntlet
description: 6-tier hermetic test architecture, shift-left governance gates, in-memory 13-node mesh swarm, and live rotating gauntlet.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 13
---

# Ecosystem Testing Strategy & Gauntlet

Credence enforces a **6-Tier Shift-Left Testing Architecture** designed to execute in $<35$ seconds in memory while guaranteeing mathematical, cryptographic, and interface integrity.

---

## 1. The 6-Tier Shift-Left Testing Hierarchy

| Testing Tier | Scope & Focus | Target Duration | Dependencies |
| :--- | :--- | :--- | :--- |
| **Tier 1: Hermetic Unit Tests** | Core algorithms, scoring, and crypto | `<15s` | In-memory SQLite, 0 network |
| **Tier 2: Universal Interface Isolation**| 4-way parity (CLI, FastMCP, TUI, Web) | `<5s` | Zero-npm vanilla modules |
| **Tier 3: 13-Node Mesh Cluster** | Watts-Strogatz P2P consensus simulation | `<8s` | In-memory WebSocket gossip |
| **Tier 4: Adversarial Protocol Defenses**| Byzantine Sybil cartel slashing | `<5s` | Mock adversarial nodes |
| **Tier 5: Zero-Build DOM Integrity** | Interactive playground route mounting | `<5s` | Static AST and DOM handlers |
| **Tier 6: Live Rotating E2E Gauntlet** | Full-stack end-to-end evaluation | `<30s` | Rotated deterministic seeds |

---

## 2. Detailed Tier Specifications

### 2.1 Tier 1: Hermetic In-Memory Unit & Math Suite (`@pytest.mark.unit`)
- Executes entirely in-process using SQLite WAL in memory and mock keypairs.
- Tests SimHash-64 bitwise Hamming distance, Shannon topic entropy calculations, RFC 8785 canonical JSON sorting, and token governor spending limits.
- Zero network I/O, zero browser runtimes.

### 2.2 Tier 2: Universal Interface Isolation & 4-Way Parity
- Validates 100% feature symmetry across CLI commands, FastMCP 2.0 tools, Textual TUI widgets, and Web UI components.
- Asserts that all interfaces deserialize datetime timestamps to RFC 3339 strings and display identical score badges.

### 2.3 Tier 3: 13-Node P2P Mesh Cluster & Byzantine Defense
- Boots 13 lightweight asynchronous node instances in memory connected in a Watts-Strogatz small-world lattice ($k=4, \beta=0.20$).
- Tests epidemic gossip propagation, $3f+1$ Byzantine Sybil cartel resistance, network partition healing, and The Galileo Rule override.

### 2.4 Tier 4: Adversarial Red-Team & Protocol Defense
- Injects malicious prompt injections, XML bombs, SSRF target URLs, and parser cloaking payloads.
- Verifies that `<untrusted_source_text>` wrapping prevents prompt injection leaks and that metadata IP requests are blocked.

### 2.5 Tier 5: Zero-Build Playwright & DOM Integrity
- Runs headless browser checks asserting that all 14 interactive playgrounds mount without JavaScript console errors and that zero npm dependencies exist in `credence-docs/`.

### 2.6 Tier 6: Reusable Live Rotating E2E Gauntlet
- Periodically executes deterministic audits against real-world news feeds using rotating seed anchors.

---

## 3. Operational Task Commands & Test Runner Guide

```bash
# 1. Run standard hermetic unit test suite (<35s)
$ just test-unit

# 2. Run documentation integrity, frontmatter, parity, and living canon tests
$ just test-docs

# 3. Run mock end-to-end integration tests
$ just test-mock

# 4. Run reusable live rotating E2E gauntlet
$ just test-live

# 5. Run parallel pre-commit QA verification gate (<3s)
$ just check
```

---

## 4. Related Protocols & References

* 📘 [The Invariant Bible](../invariants.md) — Hermetic Unit Test Isolation
* 💥 [Tutorial 06: 13-Node Chaos Lab](../tutorials/06-thirteen-node-chaos-lab.md)
* 🍓 [Testing 13-Node Swarms on a Raspberry Pi Essay](../../blog/testing-13-node-swarms-on-a-raspberry-pi.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Testing Strategy** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Testing Strategy** using standard CLI commands and FastMCP 2.0 tools:

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