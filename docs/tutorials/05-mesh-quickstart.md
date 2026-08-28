---
title: 'Tutorial 05: Bootstrapping a 3-Node Local P2P Mesh in 5 Minutes'
description: Boot three independent local nodes on separate ports, peer them via WebSockets, and watch attestation gossip in action.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 5
---

# Tutorial 05: Bootstrapping a 3-Node Local P2P Mesh in 5 Minutes

In this tutorial, you will launch 3 independent Credence nodes locally on separate ports, peer them over WebSockets, and observe real-time **attestation gossip** and **Bayesian consensus**.

---

## 1. Booting Node 1 (Bootstrap Seed)

In your first terminal window, boot Node 1 on port 8765:

```bash
# Terminal 1: Launch Bootstrap Seed Node
$ credence germinate --port 8765 --alias "node-1-seed"
```

Node 1 initializes its SQLite WAL state store, mints its Ed25519 identity, and listens for gossip connections on `ws://127.0.0.1:8765/gossip`.

---

## 2. Booting Node 2 & Node 3

In your second and third terminal windows, boot two peer nodes and connect them to Node 1:

```bash
# Terminal 2: Launch Peer Node 2
$ credence germinate --port 8766 --alias "node-2" --peer "ws://127.0.0.1:8765/gossip"

# Terminal 3: Launch Peer Node 3
$ credence germinate --port 8767 --alias "node-3" --peer "ws://127.0.0.1:8765/gossip"
```

---

## 3. Observing Attestation Gossip & 100% Token Savings

Now, perform an audit on Node 1:

```bash
# Terminal 1: Audit an article URL
$ credence audit https://example.com/news-story --port 8765
```

Within **12 milliseconds**, Node 1 signs an Ed25519 attestation and gossips it to Node 2 and Node 3.

Now query Node 3 for the same URL:

```bash
# Terminal 3: Query consensus on Node 3
$ credence audit https://example.com/news-story --port 8767
```

### Result: 0 Tokens Consumed!
Node 3 verifies Node 1's Ed25519 signature in **$0.4\text{ms}$** and adopts the cached audit result with **zero LLM inference tokens consumed**!

---

## 4. Next Steps

* 💥 [Tutorial 06: 13-Node Chaos Lab & Byzantine Cartel Defense](06-thirteen-node-chaos-lab.md)
* 📐 [Mathematics of Robust Consensus & Galileo Rule Proof](../mathematics/robust-consensus-proofs.md)

---
## Bootstrapping a 3-Node Local P2P Mesh Cluster

To observe real-time gossip propagation, BitTorrent work-sharing, and attestation synchronization locally:

```bash
# Terminal 1: Seed Node Genesis
$ credence germinate --alias "seed-01" --port 8001

# Terminal 2: Peer Node 02 Connects
$ credence germinate --alias "peer-02" --port 8002 --seeds ws://127.0.0.1:8001/ws

# Terminal 3: Peer Node 03 Connects
$ credence germinate --alias "peer-03" --port 8003 --seeds ws://127.0.0.1:8001/ws
```

| Swarm Node Alias | Local Port | Role in Consensus | Compute Spend |
| :--- | :---: | :--- | :--- |
| **`seed-01`** | `8001` | Evaluates target article with Gemini 3.7 | 100% evaluation spend |
| **`peer-02`** | `8002` | Adopts signed Ed25519 attestation via WebSocket | **0 tokens ($0.00 spent)** |
| **`peer-03`** | `8003` | Adopts signed Ed25519 attestation via WebSocket | **0 tokens ($0.00 spent)** |

---
## Running Local 3-Node P2P Gossip Clusters

Tutorial on observing real-time attestation gossip and zero-token work-sharing across local nodes.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **05 Mesh Quickstart**:

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
