---
title: Bootstrap Seed Governance & Node Quality
description: 5-factor node quality equation (Q_i), signed seed directory distribution,
  and 4-tier discovery fallback.
since_version: v1.0.0
verified_version: v2.16.3
last_verified: 2026-08-24
---

> **Note**: Bootstrap Seed Governance & Node Quality

Credence employs a decentralized, cryptographically verifiable **Bootstrap Seed Protocol** to allow new and recovering nodes to discover healthy peers without relying on centralized coordination servers.

---

## 1. 5-Factor Epistemic Node Quality Metric ($Q_i$)

Candidate seed nodes are ranked by a composite quality metric ($Q_i \in [0.0, 1.0]$):

$$Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$$

---

## 2. 4-Tier Discovery Fallback Sequence

1. **Tier 1: Signed Genesis Seed Manifest (`seeds.credence.nexus/peers.json`)**: Fetches signed JSON via HTTPS/R2, verifying signature against hardcoded root public key.
2. **Tier 2: Dynamic DNS SRV Records (`_mesh._tcp.credence.nexus`)**: Queries DNS SRV records for live relay endpoints.
3. **Tier 3: Local SQLite Peer Cache (`data/peers.db`)**: Reconnects to historically reputable peers ($Q_i \ge 0.70$) seen in the last 7 days.
4. **Tier 4: Localhost Default (`ws://127.0.0.1:8765`)**: Fallback for isolated developer nodes and local chaos testbeds.

---
## Canonical Bootstrap Seeds & Mesh Genesis Directory

When bootstrapping a fresh Credence node, connecting to canonical seed nodes provides immediate peer discovery:

| Seed Identifier | Public WebSocket Endpoint | Geographic Region | Trust Anchor Fingerprint |
| :--- | :--- | :--- | :--- |
| `seed-alpha` | `wss://seed-alpha.credence.nexus/ws` | US Central (`us-central1`) | `ed25519:9580dc91601992b3...` |
| `seed-bravo` | `wss://seed-bravo.credence.nexus/ws` | Europe West (`europe-west1`)| `ed25519:7a8b9c0d1e2f3a4b...` |
| `seed-charlie` | `wss://seed-charlie.credence.nexus/ws` | Asia East (`asia-east1`) | `ed25519:3b4c5d6e7f8a9b0c...` |

```bash
# Connect to canonical bootstrap mesh network
$ credence mesh connect --seeds wss://seed-alpha.credence.nexus/ws,wss://seed-bravo.credence.nexus/ws
```

---
## Seed Peering Protocols and Mesh Genesis

Bootstrap seeds provide the initial DNS-SRV and WebSocket endpoints for newly germinated nodes joining the global truth lattice.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Bootstrap Seeds** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "bootstrap_seeds" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
