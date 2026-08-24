---
title: 'Operational Guide: Simple vs Advanced Operating Modes'
description: Comprehensive operational guide comparing Simple Sovereign Mode (SQLite/Local) and Advanced Planetary Cloud Mode (PostgreSQL/Cloud Run/R2).
since_version: v1.17.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# Operational Guide: Simple vs Advanced Operating Modes

Credence operates in two distinct operational topologies sharing the exact same codebase and business logic.

---

## 1. Topologies at a Glance

### Topology A: Simple Mode (Sovereign Local)
- **Database**: Embedded SQLite WAL (`data/credence.db`).
- **State**: In-memory Python structures.
- **Blobs**: Local directory (`data/snapshots/`).
- **Monthly Cost**: **$0.00 / month**.
- **Ideal For**: Developers, single-workstation newsrooms, Raspberry Pi homelabs.

### Topology B: Advanced Mode (Planetary Cloud)
- **Compute**: Google Cloud Run v2 (0 to 500 container replicas).
- **Database**: Managed Serverless PostgreSQL (Neon / Cloud SQL).
- **State**: Serverless Redis / Valkey (Upstash / Memorystore).
- **Blobs**: Cloudflare R2 (`credence-snapshots`) with $0 egress fees.
- **Edge**: Cloudflare Anycast CDN & Worker Edge Router ($<20\text{ms}$ global read latency).
- **Monthly Cost**: **~$5 – $40 / month**.
- **Ideal For**: High-throughput public nodes, browser extension backends, multi-tenant organizations.

---

## 2. Quickstart Runbooks

### Simple Mode (60 Seconds)
```bash
just setup
just ignite
just tui
```

### Advanced Mode (Cloud Deployment)
```bash
# Set production secrets
export DATABASE_URL="postgresql+asyncpg://user:pass@ep-cool.neon.tech/credencedb?ssl=require"
export REDIS_URL="rediss://default:pass@us1-upstash.io:6379"
export STORAGE_BACKEND="s3"
export S3_BUCKET_NAME="credence-snapshots"

# Deploy Compute and Edge
just deploy backend
just deploy edge
```

## Architectural Invariants & Verification Mechanics

The implementation of **Simple Vs Advanced Modes** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Simple Vs Advanced Modes** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "operations"

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
