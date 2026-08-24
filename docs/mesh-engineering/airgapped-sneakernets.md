---
title: Air-Gapped Truth Bundles & Sneakernets
description: Exporting and importing cryptographically signed .credence.bundle archives
  across air-gapped secure facilities, vessels, or conflict zones.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# Air-Gapped Truth Bundles & Sneakernets

In environments with total internet censorship, maritime isolation, or military air-gaps, live WebSocket mesh peering is impossible.

Credence supports **Air-Gapped Truth Bundles (`.credence.bundle`)** allowing offline nodes to exchange signed attestations, consensus scores, and taxonomy catalogs over physical media (USB drives, SD cards, local ad-hoc Wi-Fi).

---

## 1. The Air-Gapped Sneakernet Flow

Sneakernet synchronization operates through a three-step physical custody transfer:
1. **Online Export**: Connected frontier nodes export signed attestation bundles to encrypted physical storage.
2. **Physical Transit**: Media is transported across air-gap perimeters to isolated facilities or vessels.
3. **Offline Ingestion**: Air-gapped nodes verify Ed25519 signatures locally and integrate new attestations without network connectivity.

---

## 2. Exporting an Epistemic Truth Bundle

From an online node:

```bash
# Export all attestations and taxonomy updates from the past 48 hours
credence bundle export \
  --output ./bundles/truth-bundle-2026-08-17.credence.json \
  --since 48h \
  --include-taxonomies
```

### Bundle Structure (`truth-bundle.credence.json`):
```json
{
  "bundle_version": "1.0.0",
  "generated_at_utc": "2026-08-17T18:00:00Z",
  "issuer_pubkey": "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
  "attestation_count": 142,
  "attestations": [ ... ],
  "taxonomies": [ ... ],
  "bundle_signature_ed25519": "c9a8b7..."
}
```

---

## 3. Importing into an Air-Gapped Node

On the isolated system:

```bash
credence bundle import ./bundles/truth-bundle-2026-08-17.credence.json
```

### Verification Safeguards:
1. **Root Signature Verification**: Verifies the bundle envelope signature against known genesis public keys.
2. **Itemized Attestation Verification**: Iterates over every enclosed `AuditReport`, checking Ed25519 signatures and RFC 8785 canonical bytes.
3. **Hermetic DB Ingestion**: Populates local SQLite database without initiating any outbound network connections.

## Architectural Invariants & Verification Mechanics

The implementation of **Airgapped Sneakernets** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Airgapped Sneakernets** using standard CLI commands and FastMCP 2.0 tools:

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
