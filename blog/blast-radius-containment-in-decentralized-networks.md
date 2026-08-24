---
title: 'Blast Radius Containment in Decentralized Networks'
description: An architectural essay on preventing cross-environment state bleed, key compromise containment, and epistemic security.
since_version: v1.18.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 14
---

# Blast Radius Containment in Decentralized Networks

In a decentralized peer-to-peer trust network, **blast radius containment** is not an optimization—it is an existential survival prerequisite.

If an experimental developer build, a rogue staging container, or a compromised ephemeral node can broadcast invalid audit attestations that pollute the shared Bayesian ledger, the entire consensus collapses. Trust in distributed systems is asymmetric: it takes thousands of verified evaluations to build reputation, and a single poisoned consensus state to destroy it.

When designing Credence, we engineered blast radius containment into every layer of the system: from cryptographic key custody to multi-cloud IAM boundaries.

---

## The 3-Plane Blast Radius Boundary

Credence enforces physical and logical separation across three decoupled architectural planes:

```
| 1. EDGE PLANE (Cloudflare Anycast CDN & Workers)                       |
|    • Public routing, vector SVG caching, zero-npm static delivery      |
|    • Blast Containment: Edge can never access database write credentials|
                                   |
                                   ▼
| 2. COMPUTE PLANE (Google Cloud Run v2 Stateless Containers)             |
|    • Epistemic evaluation pipelines, LLM adapters, FastMCP 2.0         |
|    • Blast Containment: Scale-to-Zero isolation; ephemeral RAM state    |
                                   |
                                   ▼
| 3. INFRASTRUCTURE & LEDGER PLANE (Sovereign Storage & Root Custody)   |
|    • SQLite WAL / Cloud SQL, Ed25519 root keys (credence.foundation)   |
|    • Blast Containment: Posix 0600 keys; keyless WIF authentication    |
```

---

## Dual-Project GCP Isolation: Preventing State Bleed

A common anti-pattern in cloud architectures is hosting Development and Production workloads inside the same cloud project under different naming prefixes. While convenient, a single IAM misconfiguration or leaked service account key grants full read/write access across both environments.

Credence mandates **Dual-Project Physical Isolation**:
1. **Development Project (`credence-dev-495173`)**: Completely independent billing, separate Secret Manager instances, and ephemeral SQLite state. All test node attestations are signed with developmental Ed25519 keys tagged `stage=dev`.
2. **Production Project (`credence-prod-505902`)**: Production Google Cloud Run services communicate exclusively with production Secret Manager vaults. Production mesh nodes automatically reject any gossip envelope signed with a `stage=dev` public key.

---

## Network Ingestion Boundaries & SSRF Firewalls

When autonomous nodes fetch external web URLs for ethical and factual evaluation, malicious actors frequently attempt **Server-Side Request Forgery (SSRF)** attacks to query internal cloud infrastructure:

- **Cloud Metadata Interception**: Querying `http://169.254.169.254/computeMetadata/v1/` to steal container service account tokens.
- **Localhost Loopback Pivoting**: Attempting to access internal admin ports (`http://localhost:8765/admin`).

Credence enforces strict ingestion defense in accordance with `inv-untrusted-ingestion`:
- All IP addresses are resolved before socket initialization. Link-local (`169.254.0.0/16`), loopback (`127.0.0.0/8`), and private RFC 1918 networks are permanently blacklisted at the kernel level.
- Maximum redirect chains are clamped to $\le 3$ hops, with SSL certificates enforced unconditionally.

---

## Cryptographic Key Rotation & Quarantine Blast Walls

If a peer node's Ed25519 private key is compromised:
1. **Instant Reputation Slashing**: The network triggers an automated 50% score slash across all historical evaluations associated with the compromised public key.
2. **Bayesian Quarantine**: The compromised node ID is broadcast via the P2P gossip quarantine topic (`EPEP-17`), causing peer nodes to drop all incoming messages from that key within $O(\log N)$ network propagation time.
3. **Zero Impact on Root Custody**: Because individual node keys cannot modify the root governance catalog (`keys.credence.foundation/root.pub`), network-wide standards remain 100% untampered.

By constraining failure to isolated cryptographic cells, Credence ensures that the truth of the network remains unshakeable.

## Architectural Invariants & Verification Mechanics

The implementation of **Blast Radius Containment In Decentralized Networks** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Blast Radius Containment In Decentralized Networks** using standard CLI commands and FastMCP 2.0 tools:

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