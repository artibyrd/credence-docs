---
title: 'Tutorial 08: Sybil Cartel Demolition & Cartel Isolation'
description: Launch a multi-node Byzantine cartel attack and watch the Credence consensus engine detect, isolate, and quarantine malicious nodes.
since_version: v1.0.0
verified_version: v2.17.2
last_verified: 2026-08-25
sidebar:
  order: 8
---

# Tutorial 08: Sybil Cartel Demolition & Cartel Isolation

In this tutorial, you will simulate an adversarial **Sybil Cartel Attack** where four malicious nodes coordinate to manipulate epistemic scores, and observe how the Credence consensus engine autonomously isolates the cartel.

---

## 1. The Sybil Attack Threat Model ($3f+1$ Fault Tolerance)

In decentralized consensus networks, a **Sybil attack** occurs when a single adversary creates multiple fake identities (nodes) to gain disproportionate voting weight.

Suppose an adversary runs 4 colluding nodes in a 13-node mesh. When a fraudulent article is published, all 4 colluding nodes broadcast falsified `PRISTINE (0.0)` audit receipts to whitewash the disinformation.

[Honest Node 1] --- [Honest Node 2]
\                /
/                \
[Cartel Node 1] -------- [Cartel Node 2]   (Colluding False Scores)
[Cartel Node 3] -------- [Cartel Node 4]

---

## 2. Simulating the Cartel Attack in Python

Run the automated Byzantine Cartel isolation test suite:

```bash
# Execute cartel isolation gauntlet
$ pytest tests/integration/test_mesh_byzantine_cartel.py -v -s
```

### What Happens During the Test:
1. **Initial Swarm Setup**: 13 nodes connect in a Watts-Strogatz topology.
2. **Adversarial Injection**: 4 colluding nodes broadcast identical, ungrounded `0.0` scores for a fabricated medical claim.
3. **Detection via Covariance**: The consensus engine computes pairwise Pearson correlation coefficients ($r$) across peer score histories. The cartel nodes exhibit $r = 1.00$ with $0.00$ DOM citation grounding.
4. **The Galileo Override**: Honest specialist Node 13 provides an audit with exact character-offset citations ($G=1.00$) proving deception. The network triggers **The Galileo Rule**:
   $$\text{Final Consensus Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_{\text{specialist}} \times G\right) = 88.0\text{ (UNRELIABLE)}$$
5. **Autonomous Slashing & Quarantine**: The quality scores ($Q_i$) of all 4 cartel nodes are slashed by 50%, and their node IDs are placed in `SOFT_QUARANTINE`.

---

## 3. Inspecting the Quarantined Cartel

Verify that the malicious nodes are quarantined via CLI:

```bash
# Query domain and peer quarantine registry
$ credence mesh peers --quarantine
```

```json
{
  "quarantined_nodes": [
    { "node_id": "ed25519:7a8b9c...", "status": "QUARANTINED", "slash_penalty": "50%" },
    { "node_id": "ed25519:8b9c0d...", "status": "QUARANTINED", "slash_penalty": "50%" },
    { "node_id": "ed25519:9c0d1e...", "status": "QUARANTINED", "slash_penalty": "50%" },
    { "node_id": "ed25519:0d1e2f...", "status": "QUARANTINED", "slash_penalty": "50%" }
  ],
  "reason": "Coordinated score covariance without verifiable DOM grounding"
}
```

---

## 4. Next Steps

* 📰 [Tutorial 09: Zero-Trust Feed Sifter Digest](09-zero-trust-feed-sifter-digest.md)
* 📐 [Robust Consensus Proofs & Galileo Rule](../mathematics/robust-consensus-proofs.md)
* 📘 [The Invariant Bible](../invariants.md) — Mesh Topology & Sybil Resistance

---
## Neutralizing Coordinated Sybil Cartels

```bash
# Execute Sybil cartel isolation and slashing test
$ poetry run pytest tests/unit/mesh/test_merit_red_team.py -k "test_sybil_isolation" -v
```

| Cluster Node Role | Node Count | Submitted Score | Consensus Resolution |
| :--- | :---: | :--- | :--- |
| **Honest Swarm** | 8 | $S=14.2, G=1.00$ | Base consensus median |
| **Domain Specialist** | 1 | $S=12.0, G=1.00$ | Weighted heavily ($E_i=0.95$) |
| **Sybil Cartel** | 4 | $S=95.0, G=0.00$ | **Isolated via $3f+1$ & Slashed 50%** |

---
## Neutralizing Coordinated Attack Swarms

Detailed walk-through of the mathematical algorithms that detect and penalize colluding adversarial nodes.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **08 Sybil Cartel Demolition**:

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
