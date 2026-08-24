---
title: DNS SRV & Dynamic Discovery Architecture
description: Configuring RFC 2782 DNS SRV records (_mesh._tcp.credence.nexus) with
  weighted priorities and failover sequences.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# DNS SRV & Dynamic Discovery Architecture

When HTTPS seed endpoints are unreachable or undergoing maintenance, Credence falls back to **Tier 2 Discovery: Dynamic DNS SRV Records** (RFC 2782).

DNS SRV allows the Credence network to advertise live WebSocket relays and bootstrap seed peers with priority weights and port assignments directly via decentralized DNS resolution.

---

## 1. RFC 2782 DNS SRV Format

Credence queries the `_mesh._tcp.credence.nexus` service record:

```text
_service._proto.name.  TTL  Class  SRV  Priority  Weight  Port  Target.
```

### Production DNS Zone Example (`credence.nexus`):
```zone
; Primary North America Seed Relays (Priority 10)
_mesh._tcp.credence.nexus.  300  IN  SRV  10  60  8765  seed-us-east.credence.nexus.
_mesh._tcp.credence.nexus.  300  IN  SRV  10  40  8765  seed-us-west.credence.nexus.

; Secondary Europe & Asia Seed Relays (Priority 20)
_mesh._tcp.credence.nexus.  300  IN  SRV  20  50  8765  seed-eu-central.credence.nexus.
_mesh._tcp.credence.nexus.  300  IN  SRV  20  50  8765  seed-ap-east.credence.nexus.

; Fallback Community Relays (Priority 50)
_mesh._tcp.credence.nexus.  300  IN  SRV  50  100 8765  community-relay1.credence.org.
```

---

## 2. Weighted Selection Algorithm

When resolving SRV records:
1. **Sort by Priority**: The client attempts connections to records with the lowest `Priority` integer first ($10 \to 20 \to 50$).
2. **Weighted Probability**: Among records with identical priority, candidate peers are chosen proportionally based on `Weight`:
   $$P(\text{seed}_i) = \frac{\text{Weight}_i}{\sum_j \text{Weight}_j}$$
3. **Connection Handshake**: The client initiates a WebSocket connection (`ws://seed-us-east.credence.nexus:8765`) and requests the peer manifest.

---

## 3. Testing SRV Records via CLI

```bash
# Query live SRV records using dig
dig _mesh._tcp.credence.nexus SRV

# Query using Credence CLI discovery diagnostic
credence mesh discover --tier dns-srv
```

## Architectural Invariants & Verification Mechanics

The implementation of **Dns Srv Discovery** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Dns Srv Discovery** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "mesh-engineering"

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
