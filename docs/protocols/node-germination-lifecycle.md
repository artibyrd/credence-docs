---
title: Node Germination Lifecycle & Identity Minting
description: Cryptographic identity minting, state migration, peer discovery, and background worker lifecycle.
since_version: v1.13.0
verified_version: v2.16.7
last_verified: 2026-08-24
sidebar:
  order: 10
---

# Node Germination Lifecycle

![Figure 1.1: 5-second zero-touch node germination lifecycle and cryptographic identity genesis](assets/illustrations/node-germination-lifecycle.svg) & Identity Minting

This specification details the cryptographic state machine, local file permissions, and concurrency locks executed during **Node Germination** (`credence germinate`).

---

## 1. Genesis State & Key Minting Invariants

Every Credence node derives its identity from an unforgeable Ed25519 keypair stored in the node's local state directory (`data/node.key` or `.env`):

| Lifecycle Step | Command Trigger | Subsystem Action | Security State |
| :--- | :--- | :--- | :--- |
| **1. Key Generation** | `credence germinate` | Generates RFC 8032 Ed25519 keypair | `chmod 0600 node.key` |
| **2. Database Init** | Pure SQLite WAL | Initializes schema & indices | Hermetic local storage |
| **3. Mesh Registration** | WebSocket handshake | Connects to seed peers | Sprout Node Tier I active |

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

---
## The 5-Second Zero-Touch Germination Lifecycle

Bootstrapping a sovereign Credence node executes in under 5 seconds with zero manual configuration files:

| Germination Phase | Elapsed Time | Subsystem Action | Security State |
| :--- | :---: | :--- | :--- |
| **1. Identity Genesis** | `<0.5s` | Mint RFC 8032 Ed25519 keypair | POSIX `0600` key custody |
| **2. State Store Init** | `<1.0s` | Initialize SQLite WAL database schemas | Hermetic local storage |
| **3. Soil Sowing** | `<1.5s` | Register 26 categorized RSS feeds | Feeds active in DB |
| **4. Peer Inoculation**| `<2.5s` | Connect to bootstrap seed peers via WebSocket | Adopt 5 cached attestations |
| **5. Doctor Verification**| `<3.5s` | Assert FastMCP and Token Governor health | Node operational & germinated |

```bash
# Run one-command automated germination
$ credence germinate --alias "my-sovereign-node"
```

---
## Automated Key Minting and State Initialization

Node germination initializes cryptographic identities and database schemas in a single non-interactive command.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Node Germination Lifecycle** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Node Germination Lifecycle** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "node_germination_lifecycle" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
