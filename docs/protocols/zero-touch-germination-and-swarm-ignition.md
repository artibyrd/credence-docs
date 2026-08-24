---
title: Zero-Touch Node Germination & Swarm Ignition
description: 4-stage automated node bootstrap, Ed25519 identity generation, seed sync, and miracle-gro ignition.
since_version: v1.13.0
verified_version: v2.16.6
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

---
## Swarm Ignition & Automated Mesh Clustering

To launch a distributed multi-node cluster across multiple servers in a single command:

```bash
# Initialize and ignite a 5-node local testing swarm
$ credence ignite --nodes 5 --burst 3
```

| Swarm Ignition Step | Target Duration | Resource Consumption | Operational Status |
| :--- | :---: | :--- | :--- |
| **1. Key Generation** | `<100ms` | 5 unique Ed25519 keypairs minted | Keys active |
| **2. WebSocket Mesh** | `<500ms` | Form Watts-Strogatz lattice topology | Mesh connected |
| **3. Miracle-Gro Burst**| `<2.0s` | Audits 3 novel feed items concurrently | Attestations minted |
| **4. Telemetry Sync** | `<100ms` | Syncs `reports.json` for Web UI | Ready for inspection |

---
## One-Command Swarm Bootstrapping and Ignition

Ignition scripts automate the deployment and peering of multi-node testing clusters in under two seconds.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Zero Touch Germination And Swarm Ignition** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Zero Touch Germination And Swarm Ignition** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "zero_touch_germination_and_swarm_ignition" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
