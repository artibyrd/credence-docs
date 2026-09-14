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

```text
1. CONSUME: FastMCP 2.0 Client (<60s)
   "Start by using the MCP server."
   Connect Claude Desktop, Cursor, or Antigravity with zero infrastructure.
   Get real-time fact checking and the in-editor Epistemic Brake.
   |
   v
2. CONTRIBUTE: Volunteer Worker Daemon (<2m)
   "Not getting audits fast enough? Contribute as a worker."
   Run uvx credence worker to claim open mempool bounties.
   Earn cryptographic merit badges and accelerate verification throughput.
   |
   v
3. HOST & COORDINATE: Sovereign Node (<5m)
   "Have a team running lots of audits? Host your own node."
   Spin up a full coordinator node with 1-command ignition.
   Manage team mempools, customize rules, and federate across the global mesh.
```

---

## 🚀 Choose Your Quickstart Guide

Jump directly to the setup guide that matches your immediate goal:

### ⚡ 1. FastMCP 2.0 AI Assistant
* **Persona**: AI Developers, Researchers, Pair-Programmers
* **Interface**: Claude Desktop, Cursor IDE, Antigravity, Cline
* **Setup Time**: **< 60 Seconds**
* **Primary Goal**: Real-time fact-checking and hallucination defense inside your editor.
* **Quickstart Guide**: &rarr; **[Open FastMCP Client Quickstart](quickstart-mcp.md)**

### 🐝 2. Volunteer Worker Daemon
* **Persona**: Community Contributors, Homelab Operators, Model Enthusiasts
* **Interface**: Terminal Daemon (`uvx credence worker`)
* **Setup Time**: **< 2 Minutes**
* **Primary Goal**: Donate spare compute (local Ollama or API), clear mempool bounties, and climb the leaderboard.
* **Quickstart Guide**: &rarr; **[Open Volunteer Worker Quickstart](quickstart-worker.md)**

### 🏛️ 3. Sovereign Node & Coordinator
* **Persona**: Engineering Teams, Sysadmins, Sovereign Organizations
* **Interface**: Coordinator Engine, REST API, Web Admin Deck (`credence.nexus#admin`)
* **Setup Time**: **< 5 Minutes**
* **Primary Goal**: Full-stack sovereign hosting, team mempool coordination, and P2P mesh federation.
* **Quickstart Guide**: &rarr; **[Open Sovereign Node Quickstart](quickstart-node.md)**

---

## 📊 Quickstart Comparison & Decision Matrix

| Dimension | Tier 1: FastMCP Client | Tier 2: Volunteer Worker | Tier 3: Sovereign Node |
| :--- | :--- | :--- | :--- |
| **Primary Role** | Consumer (Queries truth) | Contributor (Solves bounties) | Operator (Coordinates network) |
| **Setup Time** | **< 60 Seconds** | **< 2 Minutes** | **< 5 Minutes** |
| **Hardware Footprint** | 0 MB server memory (Pure client) | 200 MB RAM (or local LLM VRAM) | 512 MB RAM + 1 vCPU |
| **Cost to Run** | **$0.00** (Free tier / Heuristics) | **$0.00** (Ollama) or pennies/bounty | **$0.00** (Local/Docker) or Cloud Run cap |
| **Required Keys** | Optional Gemini API key | Node Ed25519 key (Auto-generated) | Operator Bearer token + Node keypair |
| **Launch Command** | `uvx credence serve --mcp` | `uvx credence worker --node ...` | `curl ... | bash` &bull; `just ignite` |
| **Dedicated Guide** | [FastMCP Quickstart](quickstart-mcp.md) | [Worker Quickstart](quickstart-worker.md) | [Node Quickstart](quickstart-node.md) |

---

## 🌐 How the Three Roles Overlap in the Network

The Credence network functions through the cooperative interaction of these three roles:

```text
[1. Consumers (Claude / Cursor)]
               |
               | 1. credence_check_url (Queries URL)
               v
[3. Sovereign Coordinator Nodes]
   ├── Check Edge Cache ───────> (Cache Hit: Instant Response <15ms)
   └── Cache Miss ─────────────> (Enqueue Bounty onto Mempool)
                                           |
                                           | 2. Poll & Claim Lease
                                           v
                        [2. Volunteer Worker Fleet]
                           ├── Worker 1: Gemini 3.7 Flash
                           ├── Worker 2: Claude 3.7 Sonnet
                           ├── Worker 3: Local Ollama (Llama 3.3)
                           └── Worker 4: DeepSeek-R1
                                           |
                                           | 3. Submit G=1.00 Signed Attestation
                                           v
[3. Sovereign Coordinator Nodes] <─────────┘
   ├── Compute Multi-Model Bayesian Consensus
   ├── Apply The Galileo Rule (inv-galileo-rule)
   └── Return Verified Receipt to Consumer & Archive to Store
```

1. **Consumers Create Demand**: When a developer in Claude Desktop asks to verify a URL, FastMCP sends a query to the coordinator.
2. **Nodes Manage Coordination**: If the URL has not been audited yet, the coordinator places an audit bounty on the open mempool.
3. **Workers Provide Truth**: Distributed volunteer workers claim the bounty, evaluate the source text across diverse models, verify verbatim citations ($G=1.00$), and sign the verdict with their Ed25519 identity.
4. **Consensus Resolves**: The coordinator aggregates multiple worker reports into a Bayesian consensus score, permanently archiving the verified attestation.

---

## 🧭 Next Steps & External References

### 📚 Official Developer Tools & Documentation
* **MCP Protocol**: [Model Context Protocol Specification](https://modelcontextprotocol.io/) &bull; [Claude Desktop Downloads](https://claude.ai/download) &bull; [Cursor Code Editor](https://www.cursor.com/)
* **Package Management**: [Astral uv & uvx](https://docs.astral.sh/uv/) &bull; [Python Poetry](https://python-poetry.org/)
* **Containers & Orchestration**: [Docker Engine](https://docs.docker.com/engine/) &bull; [Google Cloud Run](https://cloud.google.com/run)

### 🔗 Related Guides & Playgrounds in Credence
* 🎮 **[Interactive Zero-Build Playgrounds](playground.md)**: Test 12 consensus algorithms live in your browser without installing anything.
* 🧭 **[Topic Index & Cheat Sheet](topic-index.md)**: Searchable reference covering all commands, settings, and flags.
* 📖 **[Auditing Webpages & Text Walkthrough](walkthroughs/01-auditing-webpages-and-text.md)**: In-depth guide to interpreting suspicion scores and violation categories.
* 🕸️ **[3-Node Mesh Quickstart](tutorials/05-mesh-quickstart.md)**: Spin up a local P2P gossip mesh in 5 minutes.
* 📜 **[Open Epistemic Mempool Protocol](protocols/open-epistemic-mempool.md)**: Deep dive into the Bayesian consensus engine.
