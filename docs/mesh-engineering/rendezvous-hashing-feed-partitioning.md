---
title: Zero-Coordination Swarm Partitioning with Rendezvous Hashing
description: How Credence P2P mesh clusters use Highest Random Weight (HRW) Rendezvous
  Hashing to partition syndicated feeds without central coordinators, saving 92.3%
  compute.
since_version: v1.14.1
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Zero-Coordination Swarm Partitioning with Rendezvous Hashing

In a decentralized peer-to-peer verification network, thousands of news outlets, RSS feeds, and municipal public notices must be continuously monitored and audited for epistemic integrity.

However, having every node redundantly audit every single article burns expensive LLM inference tokens. Conversely, having a centralized load balancer assign feeds introduces a single point of failure and censorship vulnerability.

Credence solves this dilemma by employing **Highest Random Weight (HRW) Rendezvous Hashing** (`compute_feed_affinity`). This allows arbitrary swarms of independent peer nodes to partition candidate feeds deterministically with **zero coordination, zero central state, and zero distributed locks**.

---

## 1. The Highest Random Weight (HRW) Hashing Algorithm

Given a syndicated feed URL $f$ and a set of active mesh peer public keys $\mathcal{N} = \{N_1, N_2, \dots, N_k\}$, each node independently computes the affinity score $W(f, N_i)$:

\[
W(f, N_i) = \text{SHA-256}\Big(\text{canonical}(f) \mathbin{\Vert} N_i\Big)
\]

The node with the highest weight for feed $f$ is deterministically assigned primary auditing responsibility:

\[
N^*(f) = \arg\max_{N_i \in \mathcal{N}} W(f, N_i)
\]

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                   HRW RENDEZVOUS HASHING & ZERO-COORDINATION FEED PARTITIONING                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Syndicated Feed URL ($f$) ──▶ Weight Hash: $W(f, N_i) = \text{SHA-256}(\text{canonical}(f) \Vert N_i)$│
│                                              │                                                   │
│                                              ▼                                                   │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Active Peer Nodes & Deterministic Weight Matrix:                                           │   │
│ │ • Node 1 (Pubkey A): $W(f, N_1) = \text{0x4a1b}\dots$                                      │   │
│ │ • Node 2 (Pubkey B): $W(f, N_2) = \text{0xf9e3}\dots$ 🏆 [MAX WEIGHT $\to$ PRIMARY AUDITOR] │   │
│ │ • Node 3 (Pubkey C): $W(f, N_3) = \text{0x12c8}\dots$                                      │   │
│ └────────────────────────────────────────────┬───────────────────────────────────────────────┘   │
│                                              │                                                   │
│                                              ▼                                                   │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Node 2 Conducts Full LLM Evaluation ($0.0003 spend) ──▶ Signs RFC 8785 Ed25519 Envelope   │   │
│ └────────────────────────────────────────────┬───────────────────────────────────────────────┘   │
│                                              │                                                   │
│                         ┌────────────────────┴────────────────────┐                              │
│                         ▼ Epidemic Gossip Diffusion               ▼ Epidemic Gossip Diffusion    │
│ ┌──────────────────────────────────────────┐   ┌──────────────────────────────────────────┐      │
│ │ Node 1 (`ws://8761`)                     │   │ Node 3 (`ws://8763`)                     │      │
│ │ • In-memory signature verify (<1ms)      │   │ • In-memory signature verify (<1ms)      │      │
│ │ • Adopt into local SQLite DB ($0.00 cost)│   │ • Adopt into local SQLite DB ($0.00 cost)│      │
│ └──────────────────────────────────────────┘   └──────────────────────────────────────────┘      │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 🎯 Swarm Result: 92.3% Compute Savings across 13 nodes with 0 locks and 0 central coordinators   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Mathematical Properties & Resilience

### 1. Zero Coordination Overhead
Because SHA-256 is deterministic, every node in the cluster independently arrives at the exact same primary auditor assignment for feed $f$ without exchanging a single network handshake or acquiring a distributed lock.

### 2. Minimal Disruption on Node Churn ($1/k$)
When a new node joins or an existing node leaves a cluster of size $k$, traditional modulo hashing ($H(f) \pmod k$) shuffles nearly 100% of feed assignments. With HRW Rendezvous Hashing, only an optimal fraction of $\frac{1}{k}$ feeds are reassigned, preventing cluster-wide audit storms.

### 3. BitTorrent Work-Sharing Economics (92.3% Savings)
In a 13-node cluster:
- 1 primary node performs the initial LLM evaluation and signs the resulting canonical receipt with its Ed25519 private key.
- 12 peer nodes receive the signed attestation over multi-hop gossip diffusion, verify the cryptographic signature in under 1ms, and adopt the record locally into SQLite.
- **Compute Savings**: **92.3% reduction in inference tokens** ($12/13$ of evaluations cost **$0.00**).

---

## 3. Python Implementation Reference

The core rendezvous affinity calculation is implemented in `credence/feeds/dedup.py`:

```python
import hashlib

def compute_feed_affinity(feed_url: str, node_pubkey_hex: str) -> int:
    """Compute deterministic Highest Random Weight (HRW) affinity score.
    
    Combines canonical feed URL bytes and node public key hex to derive
    a 256-bit integer weight for zero-coordination swarm partitioning.
    """
    payload = f"{feed_url.strip().lower()}::{node_pubkey_hex.lower()}".encode("utf-8")
    digest = hashlib.sha256(payload).hexdigest()
    return int(digest, 16)
```

To determine whether the local node is the primary auditor for a feed among known peers:

```python
def is_primary_auditor(feed_url: str, local_pubkey: str, peer_pubkeys: list[str]) -> bool:
    all_nodes = [local_pubkey] + peer_pubkeys
    local_weight = compute_feed_affinity(feed_url, local_pubkey)
    max_weight = max(compute_feed_affinity(feed_url, pk) for pk in all_nodes)
    return local_weight == max_weight
```

---

## 4. Invariants & Security Boundaries

- **Atomic Inoculation (Invariant 18)**: Feed sifting and seed insertion must execute within atomic commit/rollback sub-transactions to prevent half-ingested feed state during network splits.
- **Attestation Anti-Tampering (Invariant 19)**: Modifying any field in an adopted attestation (`suspicion_score`, `violations`, `content_sha256`) immediately breaks Ed25519 signature verification and triggers a 50% reputation slash against the relaying peer.
