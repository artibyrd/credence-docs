---
title: Watts-Strogatz Small-World Dynamics
description: Mathematical formulation of small-world network topology (N=13, k=4,
  p=0.20), clustering coefficients, and epidemic gossip diffusion.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-28
---

# Watts-Strogatz Small-World Dynamics

Decentralized epistemic mesh networks require two competing properties:
1. **High Local Clustering ($C$)**: Dense local peer connections for robust cooperative verification and fault tolerance.
2. **Short Characteristic Path Length ($L$)**: Rapid multi-hop gossip diffusion to propagate signed attestations globally in sub-second time.

Credence models its 13-node cluster and global overlay network on the **Watts-Strogatz Small-World Model**.

---

## 1. Mathematical Topology Parameters

- **Node Count ($N$)**: $13$ nodes in local cluster benchmark / minimum swarm size.
- **Initial Regular Ring Degree ($k$)**: $4$ (each node initially connects to its $2$ nearest neighbors on each side).
- **Rewiring Probability ($p$)**: $0.20$ ($20\%$ of edges are randomly rewired to create global shortcuts).

![Figure 1.1: Watts-Strogatz small-world mesh clustering, rendezvous feed routing, and Sybil resistance](assets/illustrations/watts-strogatz-dynamics.svg)

---

## 2. Clustering Coefficient & Average Path Length

### High Clustering Coefficient ($C \approx 0.50$):
The clustering coefficient measures the probability that two neighbors of a node are also neighbors of each other:

$$C(p) \approx \frac{3(k-2)}{4(k-1)} (1-p)^3$$

For $k=4, p=0.20$: $C \approx 0.486$.

### Short Characteristic Path Length ($L \le 2.3$ hops):
Despite having only 26 total edges, the average shortest path between any two arbitrary nodes is:

$$L \le 2.30 \text{ hops}$$

---

## 3. Epidemic Gossip Diffusion (The Invariant Bible)

When a node completes an audit and gossips the signed envelope:
1. **Hop 1**: Reaches 4 direct neighbors ($T = 0 \text{ms} + \text{latency}$).
2. **Hop 2**: Reaches 85% of the cluster ($T \approx 120 \text{ms}$).
3. **Hop 3**: 100% saturation of all 13 nodes ($T \le 250 \text{ms}$).

The Watts-Strogatz topology guarantees that every node receives signed attestations in $\le 3$ hops while minimizing redundant network socket overhead.

---
## Small-World Watts-Strogatz Lattice Dynamics

The P2P gossip layer implements a Watts-Strogatz small-world graph ($N=13, k=4, p=0.15$) to minimize gossip propagation latency while ensuring Byzantine partition tolerance:

$$\bar{L} \approx \frac{\ln(N)}{\ln(k)} \approx 1.84 \text{ hops}$$

| Lattice Dimension | Parameter | Operational Impact |
| :--- | :---: | :--- |
| **Node Count ($N$)** | `13` | Smallest complete cluster for $3f+1$ Byzantine safety ($f=4$) |
| **Mean Degree ($k$)** | `4` | Each node maintains 4 persistent WebSocket links |
| **Rewiring Probability ($p$)** | `0.15` | Creates long-range short-cuts across global regions |

---
## Small-World Graph Properties in P2P Gossip

A Watts-Strogatz lattice guarantees high clustering and short average path lengths, enabling sub-second gossip dissemination.

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

To ensure continuous compliance with system invariants, **Watts Strogatz Dynamics** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "watts_strogatz_dynamics" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
