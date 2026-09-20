---
title: "Quickstart: Sovereign Node & Coordinator (Full-Stack Hosting)"
description: "Host a sovereign Credence node, manage mempool queues, germinate cryptographic keys, and unlock the browser Admin Command Deck in under 5 minutes."
since_version: v2.22.0
verified_version: v2.22.0
last_verified: 2026-09-14
---

# Quickstart: Sovereign Node & Coordinator (Full-Stack Hosting) 🏛️

Host your own sovereign Credence coordinator node, run local mempools, and unlock the browser Admin Command Deck in **under 5 minutes**.

---

## 🎯 What a Sovereign Node Does

A **Sovereign Node** is the operational backbone of the Credence verification network. While FastMCP clients submit queries and volunteer workers process bounties, the coordinator node manages state, enforces security boundaries, and routes consensus across the network.

When you host a node:

1. **Hosts the Open Mempool Queue**: Exposes `/api/queue/*` REST endpoints allowing local or remote volunteer workers to claim bounties and submit signed evaluations.
2. **Maintains the Verification Store**: Persists audits, attestation receipts, and contributor vitals in a high-performance SQLite WAL database (or planetary PostgreSQL cluster).
3. **P2P Mesh Peering & Gossip**: Peers with external Credence nodes via Watts-Strogatz small-world topology, gossiping signed Ed25519 envelopes across the decentralized network.
4. **Hosts the Admin Command Deck**: Provides a visual browser workstation (`https://credence.nexus#admin` or local host) to inspect token burn rates, adjust circuit breakers, view peer topologies, and seed RSS feeds.
5. **Runs Autonomous Feed Sifting**: Dispatches background cron daemons that continuously sift monitored RSS/Atom feeds against promotional astroturfing and topic entropy collapse.

---

## 🚀 5-Minute Quickstart: Choose Your Deployment Topology

Credence nodes are zero-build and lightweight, running on anything from a $35 Raspberry Pi to serverless cloud infrastructure.

:::tabs
=== Option A: 1-Command Local Ignite (Linux & macOS)
Install the CLI and bootstrap a fully calibrated local node in one command:

```bash
# 1. Install Credence CLI
curl -fsSL https://credence.run/install.sh | bash

# 2. Ignite: checks environment, germinates keys, seeds data, and runs self-test
just ignite
```

=== Option B: Docker Container (One-Liner)
Run a self-contained container with SQLite persistence and Chromium headless extraction:

```bash
docker run -d \
  --name credence-node \
  -p 8000:8000 \
  -v ~/.credence:/root/.credence \
  -e CREDENCE_MODEL_API_KEY="<your-api-key>" \
  ghcr.io/artibyrd/credence:latest
```

=== Option C: Serverless Cloud Containers (Cloud Run, AWS, Fly.io, or VPS)
Deploy to cloud containers with automatic scale-to-zero ($0.00 idle cost) and Workload Identity:

```bash
# Provision Cloud Run service via Terraform
cd terraform/gcp
terraform init && terraform apply
```
:::

---

## 🌱 Instant Node Germination (Bootstrap in <5s)

Before serving traffic, every node must establish its cryptographic root and baseline knowledge base. Run `credence germinate` to perform **zero-touch node ignition**:

```bash
credence germinate
```

In under 5 seconds, germination automatically:
1. **Mints an Ed25519 Cryptographic Identity**: Creates your node's sovereign public/private keypair at `~/.credence/identity.pem`.
2. **Inoculates Genesis Attestations ($0.00 Spend)**: Seeds 50+ pre-evaluated canonical articles and ethical taxonomy rubrics directly into your database with zero API token spend.
3. **Sows 24 Curated Feeds**: Populates initial RSS/Atom feeds across technology, civic policy, and science journals.

---

## 🔐 Operator Security & Unlocking the Browser Admin Deck

To protect your node from unauthorized mutation, Credence enforces Bearer token authentication on all administrative endpoints.

### 1. Bootstrap Your Operator Admin Token

Generate an operator secret token in your local `.env` file:

```bash
# Bootstrap operator credentials
just auth-bootstrap local

# Print your active operator token
just auth-token
```

### 2. Unlock the Browser Admin Command Deck

1. Open your browser and navigate to the Admin Command Deck at [`https://credence.nexus#admin`](https://credence.nexus#admin) (or `http://localhost:8000/credence.nexus/#admin`).
2. Enter your operator Bearer token in the unlock prompt.
3. You now have full operational control over:
   - **Cost Governance & Token Breaker**: Set daily budget ceilings ($15/mo cap) and configure the 30% headroom circuit breaker.
   - **Mempool Coordinator**: Inspect queued bounties, active worker leases, and consensus convergence times.
   - **P2P Mesh Peers**: Monitor active gossip connections and DNS SRV discovery.
   - **Seed Inoculation**: Trigger immediate feed sweeps or import Genesis packs.

---

## 📟 Launching the Terminal Dashboard (Textual TUI Workstation)

For headless servers and terminal enthusiasts, Credence includes a full-screen Textual IDE dashboard:

```bash
credence tui
```

![Figure 4.2: Credence Textual TUI inspector terminal workstation](assets/tui/01-inspector-rich.svg)

* **Inspector (`1`)**: Audit live URLs, inspect highlighted citations, and navigate exact DOM quotes.
* **Taxonomies (`2`)**: Browse active SPJ ethical rules and IEP logical fallacies.
* **Vitals & Quota (`5`)**: Real-time token consumption meters and circuit breaker status.
* **Mesh Network (`6`)**: Live peer node telemetry and gossip message latency.

---

## 🌐 How Sovereign Nodes Overlap with the Network

A sovereign node acts as the gravitational center for your team or organization:

![Figure 4.1: Tripartite consensus topology illustrating consumer demand, coordinator mempool dispatch, and volunteer worker attestation](assets/illustrations/mempool-worker-consensus.svg)

* **Local Sovereignty**: Your team's queries stay private on your coordinator node.
* **Collaborative Verification**: Your node can dispatch difficult bounties to the global mempool or accept bounties from federated peers.

---

## 🎓 The Credence Graduation Path

| Graduation Step | Why Graduate? | Next Quickstart Guide |
| :--- | :--- | :--- |
| **Point AI Assistants to Your Node** | Ready to give your entire team the in-IDE Epistemic Brake connected directly to your private node? | [Quickstart: FastMCP AI Assistant](quickstart-mcp.md) |
| **Scale Throughput with Workers** | Need to process high-volume RSS feeds without overloading your coordinator CPU? Attach volunteer workers! | [Quickstart: Volunteer Worker](quickstart-worker.md) |

---

## 🔗 Related Specifications & System Invariants

* 📖 [The Credence Graduation Path Hub](quickstart.md): Complete overview of the 3 roles and network architecture.
* 🏛️ [Node Germination Lifecycle Specification](protocols/node-germination-lifecycle.md): Zero-touch ignition, seed inoculation, and swarm bootstrapping.
* ☁️ [Google Cloud Run Deployment Blueprint](deployment-cloudrun.md): Terraform architecture, scale-to-zero cold start tuning, and $15/mo budget caps.
* 🔒 [System Invariant: Tenant Decoupling](invariants.md#inv-sovereign-config-decoupling): Zero hardcoded tenant domains across core engines.
