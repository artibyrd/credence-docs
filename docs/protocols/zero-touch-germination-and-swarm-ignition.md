---
title: Zero-Touch Node Germination & Swarm Ignition
description: 4-stage automated node bootstrap, Ed25519 identity generation, seed sync, and miracle-gro ignition.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 7
---

# Zero-Touch Node Germination & Swarm Ignition

The **Zero-Touch Node Germination Protocol** enables a fresh host or container to transition from an uninitialized state to an active, cryptographically certified Credence node in under **30 seconds** with zero human intervention.

---

## 1. The 4-Stage Germination Sequence

When `credence germinate` or `just ignite` is executed, the node proceeds through 4 deterministic lifecycle stages:

| Ignition Stage | Elapsed Time | Subsystem Action | Verification Output |
| :--- | :--- | :--- | :--- |
| **Stage 1: Genesis** | `<0.5s` | Generate Ed25519 keypair | Public key printed to console |
| **Stage 2: Ignition** | `<1.0s` | Initialize SQLite WAL database | Schema migrations applied |
| **Stage 3: Peer Discovery** | `<1.5s` | Resolve DNS-SRV / seed peers | P2P gossip mesh connected |
| **Stage 4: Doctor Check** | `<2.0s` | Verify FastMCP & Token Governor | Node operational & germinating |

### 1.1 Stage 1: Genesis & Cryptographic Identity Minting
- The node generates a high-entropy Ed25519 private key (`node.key`) with 256 bits of cryptographic entropy.
- Calculates its public key hex string and derives its unique node identifier (`ed25519:<pubkey_hex>`).
- Derives a cryptographically secure operator token and writes local configuration to `.env`.

### 1.2 Stage 2: State Store Initialization
- Initializes local SQLite database with Write-Ahead Logging (`PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL;`).
- Applies all database migrations idempotently in $<50\text{ms}$.
- Scaffolds the content-addressable storage (CAS) blob directories for cached snapshot artifacts.

### 1.3 Stage 3: Bootstrap Seed Discovery & Peering
- Fetches the canonical seed manifest (`https://seeds.credence.nexus/peers.json`) and verifies root Ed25519 signatures against `credence.foundation`.
- Discovers nearby active mesh peers via DNS SRV records (`_credence-mesh._tcp.credence.nexus`).
- Establishes WebSocket gossip links with top-quality peer seeds.

### 1.4 Stage 4: Miracle-Gro Burst Audit & Self-Certification
- Sifts and audits a pre-flight burst of 3 verified reference benchmark articles across distinct domains.
- Generates its first cryptographic audit attestations ($G=1.00$) and broadcasts them to the mesh.
- Receives peer attestation confirmations, establishing initial Node Quality ($Q_i \ge 0.60$) and unlocking **Tier I Sprout Node** status.

---

## 2. Developer & Operator Commands

### One-Command Full Ignition (`just ignite`)

```bash
# Complete one-command bootstrap: preflight, identity minting, germination, and health verification
$ just ignite
```

### Manual CLI Germination

```bash
# Execute germination with custom burst audit depth
$ credence germinate --burst 3 --alias "my-sovereign-node"

# Inspect active node identity and earned reputation
$ credence identity show
```

### Terminal Output Verification

```json
{
  "node_alias": "sifter-node-01",
  "public_key": "9580dc91601992b33e3fd76718fcf94a69c76bf233...",
  "state_storage": "SQLite WAL (data/credence.db)",
  "epistemic_tier": "TIER_I_SPROUT_NODE",
  "initial_quality_qi": 0.950,
  "status": "ONLINE"
}
```

---

## 3. Related Protocols & Tutorials

* 🌱 [Tutorial 11: Autonomous Node Germination & Swarm Ignition](../tutorials/11-autonomous-node-germination-and-swarm-ignition.md)
* 🕸️ [Tutorial 05: 3-Node Mesh Quickstart](../tutorials/05-mesh-quickstart.md)
* 💎 [Bootstrap Seed Governance & Node Quality](../bootstrap-seeds.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Zero Touch Germination And Swarm Ignition** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Zero Touch Germination And Swarm Ignition** using standard CLI commands and FastMCP 2.0 tools:

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
