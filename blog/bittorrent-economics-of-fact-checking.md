---
title: 'The BitTorrent Economics of Fact-Checking: Slashing LLM Bills by 92%'
description: How cooperative P2P feed pre-ingestion turns syndicated news auditing
  into a zero-token cooperative commons.
since_version: v1.0.0
verified_version: v2.15.1
last_verified: 2026-08-24
sidebar:
  order: 3
---

# The BitTorrent Economics of Fact-Checking: Slashing LLM Bills by 92%

Running large language models to evaluate real-time information is expensive.

If 100 developers, newsrooms, and AI agent frameworks each independently ingest and fact-check the top 500 articles from Reuters, the Associated Press, and Bloomberg every day, they are collectively burning **tens of thousands of dollars per month in redundant LLM API tokens**.

Why are 100 different computers doing the exact same evaluation 100 times?

![Figure 1.1: Decentralized compute swarm economics and deduplicated gossip audit propagation](assets/illustrations/bittorrent-economics-of-fact-checking.svg)### Swarm Scaling & Monthly LLM API Cost

| Swarm Size ($N$) | Centralized Redundant Cost (500 Arts/day) | Credence P2P Mesh Cost | Net Compute Savings |
| :--- | :--- | :--- | :--- |
| **1 Node** | $45.00 / month | $45.00 / month | 0.0% |
| **5 Nodes** | $225.00 / month | $45.00 / month | **80.0%** |
| **13 Nodes (Default)** | $585.00 / month | $45.00 / month | **92.3%** |
| **50 Nodes** | $2,250.00 / month | $45.00 / month | **98.0%** |
| **100 Nodes** | $4,500.00 / month | $45.00 / month | **99.0%** |

> [!NOTE]
> **Zero-Token Attestation Adoption**: Peer nodes verify RFC 8785 Ed25519 envelopes and DOM character offsets in $< 1\text{ms}$ using local CPU cycles, consuming exactly **0 LLM API tokens**.

---

## Lessons from BitTorrent: Divide, Sign, and Seed

Credence borrows the proven economics of BitTorrent and applies them to epistemic evaluation:

1. **Syndicated Feed Partitioning**: When 13 nodes form a Watts-Strogatz local or distributed cluster, high-volume RSS feeds are divided deterministically across peers.
2. **Ed25519 Signed Attestation Gossip**: When Node 1 audits an article, it signs the JSON report with its private key and gossips the envelope over WebSocket relays.
3. **Zero-Token Adoption**: When Node 7 receives an audit request for that same article, it checks the signature, verifies that Node 1 has a high quality score ($Q \ge 0.80$), and returns the verified report instantly.

---

## The Results: 92.3% Compute Savings

In our 13-node cluster benchmarks, cooperative feed pre-ingestion achieved **92.3% compute savings** compared to standalone evaluation.

By turning epistemic evaluation into a decentralized, content-addressed cooperative commons, we make high-rigor fact-checking economically sustainable for everyone.
