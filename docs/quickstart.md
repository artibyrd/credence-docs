---
title: "The Credence Graduation Path & Quickstart Directory"
description: "Explore the 3 ways to use Credence and follow the progressive graduation path from FastMCP assistant to volunteer worker to sovereign coordinator node."
since_version: v1.0.0
verified_version: v2.22.0
last_verified: 2026-09-14
---

# The Credence Graduation Path & Quickstart Directory 🧭

Welcome to Credence! Because Credence is both an in-editor developer tool and a decentralized epistemic consensus network, different users enter the ecosystem at different layers. 

Rather than forcing a single monolithic quickstart, Credence provides **three focused, role-specific quickstarts** connected by a progressive **Graduation Path**:

![Figure 1.1: The Credence progressive graduation path from in-editor FastMCP consumption to volunteer worker compute to sovereign node coordination](assets/illustrations/the-credence-graduation-path.svg)

1. **Consume: FastMCP 2.0 Client (<60s)** — *"Start by using the MCP server."* Connect Claude Desktop, Cursor, or Antigravity with zero infrastructure. Get real-time fact checking and the in-editor Epistemic Brake.
2. **Contribute: Volunteer Worker Daemon (<2m)** — *"Not getting audits fast enough? Contribute as a worker."* Run `uvx credence worker` to claim open mempool bounties. Earn cryptographic merit badges and accelerate verification throughput across the network.
3. **Host & Coordinate: Sovereign Node (<5m)** — *"Have a team running lots of audits? Host your own node."* Spin up a full coordinator node with 1-command ignition. Manage team mempools, customize rules, and federate across the global mesh.

---

## 🚀 Choose Your Quickstart Guide

Jump directly to the setup guide that matches your immediate goal:

### ⚡ 1. FastMCP 2.0 AI Assistant
* **Persona**: AI Developers, Researchers, Pair-Programmers
* **Interface**: Claude Desktop, Cursor IDE, Antigravity, Cline
* **Setup Time**: **< 60 Seconds**
* **Primary Goal**: Real-time fact-checking and hallucination defense inside your editor.
* **Quickstart Guide**: → **[Open FastMCP Client Quickstart](quickstart-mcp.md)**

### 🐝 2. Volunteer Worker Daemon
* **Persona**: Community Contributors, Homelab Operators, Model Enthusiasts
* **Interface**: Terminal Daemon (`uvx credence worker`)
* **Setup Time**: **< 2 Minutes**
* **Primary Goal**: Donate spare compute (local Ollama or model APIs), clear mempool bounties, and climb the leaderboard.
* **Quickstart Guide**: → **[Open Volunteer Worker Quickstart](quickstart-worker.md)**

### 🏛️ 3. Sovereign Node & Coordinator
* **Persona**: Engineering Teams, Sysadmins, Sovereign Organizations
* **Interface**: Coordinator Engine, REST API, Web Admin Deck (`credence.nexus#admin`)
* **Setup Time**: **< 5 Minutes**
* **Primary Goal**: Full-stack sovereign hosting, team mempool coordination, and P2P mesh federation.
* **Quickstart Guide**: → **[Open Sovereign Node Quickstart](quickstart-node.md)**

---

## 📊 Quickstart Comparison & Decision Matrix

| Dimension | Tier 1: FastMCP Client | Tier 2: Volunteer Worker | Tier 3: Sovereign Node |
| :--- | :--- | :--- | :--- |
| **Primary Role** | Consumer (Queries truth) | Contributor (Solves bounties) | Operator (Coordinates network) |
| **Setup Time** | **< 60 Seconds** | **< 2 Minutes** | **< 5 Minutes** |
| **Minimum Hardware** | 0 MB server RAM (Client only) | 256 MB RAM (API worker) / 8 GB RAM (Ollama 8B Q4) | 512 MB RAM + 1 vCPU |
| **Recommended Hardware** | Standard developer workstation | 2 GB RAM (Multi-model API) / 16 GB+ VRAM (Local 70B/Qwen) | 2 GB RAM + 2 vCPUs + NVMe SSD |
| **Cost to Run** | **$0.00** (Free tier / Heuristics) | **$0.00** (Local Ollama) or pennies/bounty | **$0.00** (Local/Docker) or standard cloud tier |
| **Required Keys** | None (Remote SSE default) or any supported model API key / local Ollama | Ed25519 worker keypair (Auto-generated) + optional model API key | Operator Bearer token + Node Ed25519 keypair |
| **Launch Command** | `uvx credence serve --mcp` | `uvx credence worker --node ...` | `curl ... | bash` • `just ignite` |
| **Dedicated Guide** | [FastMCP Quickstart](quickstart-mcp.md) | [Worker Quickstart](quickstart-worker.md) | [Node Quickstart](quickstart-node.md) |

---

## 🌐 How the Three Roles Overlap in the Network

The Credence network functions through the cooperative interaction of these three roles:

![Figure 1.2: Tripartite consensus topology illustrating consumer demand, coordinator mempool dispatch, and volunteer worker attestation](assets/illustrations/mempool-worker-consensus.svg)

1. **Consumers Create Demand**: When a developer in Claude Desktop asks to verify a URL, FastMCP sends a query to the coordinator.
2. **Nodes Manage Coordination**: If the URL has not been audited yet, the coordinator places an audit bounty on the open mempool.
3. **Workers Provide Truth**: Distributed volunteer workers claim the bounty, evaluate the source text across diverse models, verify verbatim citations ($G=1.00$), and sign the verdict with their Ed25519 identity.
4. **Consensus Resolves**: The coordinator aggregates multiple worker reports into a Bayesian consensus score, permanently archiving the verified attestation.

---

## 🧭 Next Steps & External References

### 📚 Official Developer Tools & Documentation
* **MCP Protocol**: [Model Context Protocol Specification](https://modelcontextprotocol.io/) • [Claude Desktop Downloads](https://claude.ai/download) • [Cursor Code Editor](https://www.cursor.com/)
* **Package Management**: [Astral uv & uvx](https://docs.astral.sh/uv/) • [Python Poetry](https://python-poetry.org/)
* **Containers & Orchestration**: [OCI & Docker Engine](https://docs.docker.com/engine/) • Cloud Container Platforms (Cloud Run, AWS ECS, Fly.io, or VPS)

### 🔗 Related Guides & Playgrounds in Credence
* 🎮 **[Interactive Zero-Build Playgrounds](playground.md)**: Test 12 consensus algorithms live in your browser without installing anything.
* 🧭 **[Topic Index & Cheat Sheet](topic-index.md)**: Searchable reference covering all commands, settings, and flags.
* 📖 **[Auditing Webpages & Text Walkthrough](walkthroughs/01-auditing-webpages-and-text.md)**: In-depth guide to interpreting suspicion scores and violation categories.
* 🕸️ **[3-Node Mesh Quickstart](tutorials/05-mesh-quickstart.md)**: Spin up a local P2P gossip mesh in 5 minutes.
* 📜 **[Open Epistemic Mempool Protocol](protocols/open-epistemic-mempool.md)**: Deep dive into the Bayesian consensus engine.
