---
title: 'Tutorial 06: Running a 13-Node Watts-Strogatz Chaos Simulation'
description: Simulate a 13-node peer mesh in memory, inject Byzantine Sybil cartels, and verify the Galileo Rule override.
since_version: v1.0.0
verified_version: v2.16.6
last_verified: 2026-08-24
sidebar:
  order: 6
---

# Tutorial 06: Running a 13-Node Watts-Strogatz Chaos Simulation

In this tutorial, you will execute a simulated **13-node Watts-Strogatz small-world mesh** in memory and test the network's resilience against **Byzantine Sybil cartels ($3f+1$)**.

---

## 1. The Watts-Strogatz Topology ($N=13, k=4, \beta=0.20$)

A Watts-Strogatz graph provides high clustering with short characteristic path lengths, allowing epidemic gossip to reach all nodes in $O(\log N)$ hops.

![Figure 1.1: 13-node Watts-Strogatz peer mesh clustering and Byzantine Sybil cartel defense](assets/illustrations/mesh-network.svg)

| Cluster Lattice Parameter | Value | Architectural Impact |
| :--- | :---: | :--- |
| **Total Cluster Nodes ($N$)** | `13` | Smallest complete cluster for $3f+1$ Byzantine safety |
| **Mean Degree ($k$)** | `4` | Each node maintains 4 persistent WebSocket peer links |
| **Rewiring Probability ($eta$)**| `0.20` | Creates short-range clustering with global shortcuts |

---

## 2. Running the Chaos Simulation

Execute the 13-node in-memory simulation test:

```bash
# Run the 13-node cluster chaos suite
$ pytest tests/integration/test_mesh_cluster_gossip.py -v
```

---

## 3. Injecting a Byzantine Cartel Attack

In the simulation, 4 colluding nodes ($f = \lfloor(13-1)/3\rfloor = 4$) broadcast fraudulent `PRISTINE (0.0)` attestations for a known disinformation article:

```bash
# Run the Byzantine Cartel isolation test
$ pytest tests/integration/test_mesh_byzantine_cartel.py -v
```

### The Galileo Rule in Action
When Node 13 (a high-expertise specialist with $E_i = 1.0, G = 1.00$) submits verified, grounded quotes showing severe fraud, the network invokes **The Galileo Rule**:

$$\text{Final Consensus Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_k \times G_k\right) = 84.5\text{ (SUSPICIOUS)}$$

The 4-node cartel is defeated, and their quality scores ($Q_i$) are slashed by 50%.

---

## 4. Next Steps

* 💾 [Tutorial 07: Air-Gapped Sneakernet Bundles](07-air-gapped-and-adhoc-mesh.md)
* 📐 [Mathematical Proof of Byzantine Fault Tolerance](../mathematics/robust-consensus-proofs.md)

---
## 13-Node Watts-Strogatz Chaos & Byzantine Cartel Defense

The 13-node chaos lab stresses the P2P network under adversarial Sybil attacks and simulated network partitions:

| Node Cluster Group | Node IDs | Behavior Under Chaos | Epistemic Outcome |
| :--- | :--- | :--- | :--- |
| **Honest Swarm** | Nodes 0..8 | Evaluates and relays grounded audits ($G=1.00$) | Forms robust Bayesian consensus |
| **Domain Specialist**| Node 9 | Deep taxonomy expertise in subject matter ($E_i \ge 0.90$) | Expertise-weighted consensus median |
| **Adversarial Cartel**| Nodes 10..12| Injects colluding false scores ($S=0.0$) | **Isolated via $3f+1$ & Slashed 50%** |

```bash
# Execute 13-node Watts-Strogatz chaos simulation
$ poetry run pytest tests/unit/mesh/test_mesh.py -k "test_watts_strogatz" -v
```

---
## Simulating Byzantine Partitions in 13-Node Meshes

Hands-on lab demonstrating how weighted consensus medians isolate colluding Sybil cartels during network partitions.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **06 Thirteen Node Chaos Lab**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **06 Thirteen Node Chaos Lab** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "06_thirteen_node_chaos_lab" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
