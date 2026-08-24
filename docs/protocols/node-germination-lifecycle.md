---
title: Node Germination Lifecycle & Identity Minting
description: Cryptographic identity minting, state migration, peer discovery, and background worker lifecycle.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 10
---

# Node Germination Lifecycle & Identity Minting

This specification details the cryptographic state machine, local file permissions, and concurrency locks executed during **Node Germination** (`credence germinate`).

---

## 1. Genesis State & Key Minting Invariants

Every Credence node derives its identity from an unforgeable Ed25519 keypair stored in the node's local state directory (`data/node.key` or `.env`):

```
                       |  Uninitialized Host    |
                                   | credence germinate
                                   ▼
                       | 1. Mint Ed25519 Keypair |
                       |    chmod 0600 node.key |
                                   |
                                   ▼
                       | 2. Init SQLite WAL &   |
                       |    Apply Migrations    |
                                   |
                                   ▼
                       | 3. Bootstrap Discovery |
                       |    & Peering Handshake |
                                   |
                                   ▼
                       | 4. Miracle-Gro Burst   |
                       |    Verification        |
                                   |
                                   ▼
                       | ACTIVE NODE (Tier I)   |
```

### Key Storage & File Permission Invariants
- `node.key` must be written with strict POSIX permissions `0600` (read/write by owner only).
- Public key hex string is broadcast in all gossip messages and used as the unique Node ID (`ed25519:<hex>`).
- If `node.key` already exists, `credence germinate` reloads the existing identity without overwriting cryptographic keys.

---

## 2. Concurrency & Sub-Transaction Invariants

To guarantee that concurrent background workers (feed sifters, FastMCP requests, and P2P gossip relays) never corrupt the local SQLite ledger:
1. **Write-Ahead Logging (WAL)**: SQLite is initialized with `PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;`.
2. **Atomic Ingestion Locks**: Write operations acquire an in-process asyncio mutex per content SHA-256 to prevent duplicate audits on the same article.
3. **Isolated CAS Write-Rename**: Content-Addressable Storage (CAS) blobs are written to temporary scratch files and atomically renamed into `data/cas/sha256/...` to guarantee non-corrupted reads.

---

## 3. REST API Gateway & Auto-Ignition Endpoints

When deployed in container environments (Cloud Run, Docker, Kubernetes), the node exposes health probes and ignition triggers:

```
GET  /healthz                   # Liveness probe (returns 200 OK once SQLite WAL is verified)
GET  /readyz                    # Readiness probe (returns 200 OK when P2P peer links >= 1)
POST /api/v1/node/germinate     # Triggers idempotent ignition with burst audit parameter
GET  /api/v1/node/identity      # Returns node public key, alias, and earned epistemic tier
```

---

## 4. Operator Diagnostics

```bash
# Verify node cryptographic integrity and active permissions
$ credence stats

# Inspect node identity and active peer connections
$ credence identity show
```

---

## 5. Related Documentation

* 🚀 [Quickstart Guide](../quickstart.md)
* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 🐳 [Docker Compose Quickstart](../operations/docker-compose-quickstart.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Node Germination Lifecycle** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Node Germination Lifecycle** using standard CLI commands and FastMCP 2.0 tools:

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