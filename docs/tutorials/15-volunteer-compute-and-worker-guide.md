---
title: "Tutorial 15: Volunteer Compute & Worker Fleet Guide"
description: "How to contribute spare compute to the open epistemic mempool, climb the volunteer leaderboard, and earn cryptographic achievement badges."
since_version: "v2.22.0"
verified_version: "v2.22.0"
last_verified: 2026-09-13
---

# Tutorial 15: Volunteer Compute & Worker Fleet Guide

The **Credence Open Epistemic Mempool** transforms fact-checking from a centralized bottleneck into a distributed, peer-powered consensus engine. Anyone with spare compute—whether an API key for Google Gemini or Anthropic Claude, a local workstation running Ollama or vLLM, or an air-gapped homelab server—can contribute blind evaluations to the network.

In this tutorial, you will learn how to:
1. Launch a volunteer worker daemon in 10 seconds using zero installation (`uvx`).
2. Configure inference providers across Google Gemini, Anthropic Claude, OpenAI, DeepSeek, and custom local models.
3. Target high-priority in-chat IDE requests via client affinity.
4. Climb the contributor leaderboard and unlock cryptographic achievement badges.
5. Secure your Ed25519 worker identity key across machine migrations.

---

## 1. The Architecture of Volunteer Compute

In a traditional fact-checking workflow, a single model or authority evaluates a claim. In Credence, evaluation requests are placed into a public **Epistemic Mempool Queue** where multiple independent volunteer workers pick up leases:

1. **Enqueue Job**: The client (IDE FastMCP session, Web Workstation, or Edge probe) posts an audit request with priority and quorum targets.
2. **Open Mempool Queue**: The coordinator applies single-flight deduplication via content-addressable SHA-256 hashes.
3. **Atomic Multi-Model Claim**: Eligible workers from distinct model families (e.g. Gemini, Claude, DeepSeek) atomically claim time-bounded leases.
4. **Blind Evaluation**: Each worker performs isolated evaluation and signs its report with Ed25519 without viewing peer submissions.
5. **Bayesian Consensus**: Coordinator aggregates cross-model scores and triggers Galileo Rule overrides when grounded violations ($G=1.00$) are present.
6. **Attestation & Rewards**: Final signed attestation is anchored, and contributor quality scores and badges are updated.

Every volunteer worker performs **Blind Evaluation**:
- Workers receive only the normalized source text and URL to evaluate.
- Workers cannot see other nodes' or workers' evaluations prior to submitting.
- Submissions are cryptographically signed with the worker's unique Ed25519 keypair.
- Verbatim grounding ($G=1.00$) is enforced character-for-character: any hallucinated quote triggers immediate rejection.

---

## 2. Quickstart: Launching Your Worker with Zero Install

You do not need to clone the repository or manually manage virtual environments. Using `uvx`, you can run the volunteer worker directly:

```bash
# Launch a volunteer worker using Google Gemini
export GEMINI_API_KEY="AIzaSy..."
uvx credence worker --model google/gemini-3.8-flash --continuous
```

Upon launching, the worker outputs a terminal odometer and registers with the coordinator:

```bash
# Terminal execution output
# Worker Pubkey: 9f486ba6241d69...733db917df
# Model Slug: google/gemini-3.8-flash
# Model Family: google/gemini
# Client Affinity: all (general mempool)
# Coordinator: https://credence.run
# Bounty cleared: 837a16b3... | Status: accepted | Badges: ['first_bounty'] | Total Cleared: 1
```

---

## 3. Supported Model Providers & Custom Endpoints

Credence supports diverse model families to prevent single-vendor monoculture and bias.

### Google Gemini (Recommended Default)
```bash
export GEMINI_API_KEY="AIzaSy..."
uvx credence worker --model google/gemini-3.7-flash
```

### Anthropic Claude
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
uvx credence worker --model anthropic/claude-3-7-sonnet
```

### OpenAI GPT-4o
```bash
export OPENAI_API_KEY="sk-..."
uvx credence worker --model openai/gpt-4o
```

### 100% Offline Local Inference (Ollama or vLLM)
To run fully offline without sending data to cloud APIs, run Ollama locally and point the worker to your local endpoint:

```bash
# Pull your preferred open-weights model
ollama run deepseek-r1:70b

# Launch the worker daemon targeting your local instance
uvx credence worker \
  --model deepseek-r1:70b \
  --api-base http://localhost:11434/v1 \
  --continuous
```

### Custom & Open-Weights Inference Endpoints
If you host models using vLLM, Together AI, Groq, or RunPod:
```bash
uvx credence worker \
  --model meta/llama-3.3-70b \
  --api-base https://api.groq.com/openai/v1 \
  --api-key gsk_... \
  --continuous
```

---

## 4. Client Affinity: Serving Your Own IDE Sessions

When using the FastMCP extension in Claude Desktop or Cursor, evaluation requests can be tagged with a client affinity identifier. If you want your local worker to prioritize evaluating requests coming from your own IDE session:

```bash
# In your terminal:
uvx credence worker --affinity fastmcp-ide-session --model google/gemini-3.7-flash
```

When an audit is triggered inside Cursor or Claude, your worker immediately claims the priority-1 lease, executes the evaluation in under 4 seconds, and unblocks your in-chat FastMCP epistemic brake.

---

## 5. Contributor Telemetry, Leaderboards & Badges

As your worker daemon clears bounties, the coordinator continuously tracks your contributions:
- **Quality Score ($Q_w$)**: Computed based on bounty volume, perfect $G=1.00$ grounding, and worker longevity:
  $$Q_w = 0.50 + 0.25 \cdot \min\left(1, \frac{N_{\text{bounties}}}{50}\right) + 0.15 \cdot G + 0.10 \cdot \min\left(1, \frac{T_{\text{days}}}{14}\right)$$
- **Tokens Donated**: Total LLM prompt and completion tokens contributed to public interest research.
- **Estimated Value Saved ($)**: Network savings calculated using blended baseline API rates ($0.34 per 1M tokens).

### Achievement Badges

| Badge | Title | Requirement |
| :--- | :--- | :--- |
| 🎯 | **First Bounty** | Successfully fulfil your first mempool audit job. |
| 🏹 | **Bounty Hunter** | Fulfill 50+ verified audit bounties. |
| 👑 | **Bounty Legend** | Fulfill 250+ verified audit bounties. |
| ⚡ | **Speed Demon** | Fulfill an audit bounty with sub-5.0s total turnaround. |
| 🔬 | **Precision Striker**| 25+ verified violations with zero grounding rejections ($G=1.00$). |
| 🛡️ | **Iron Worker** | 100+ consecutive jobs without a single failed lease. |
| 🌐 | **Cross Pollinator**| Fulfill bounties across 3 or more distinct model families. |
| 🌌 | **Galileo Pioneer** | Provide the solitary grounded finding that triggers a Galileo override. |
| 💎 | **Token Philanthropist** | Donate 1,000,000+ tokens to the public verification commons. |
| 🌳 | **Centurion Contributor** | Maintain active contributor status across 30+ calendar days. |

---

## 6. Live SVG Profile Badge

Every contributor receives a dynamic SVG badge that updates in real time as you fulfill bounties. You can embed this badge in your GitHub profile or project documentation:

```markdown
[![Credence Worker](https://credence.run/api/badge/worker/YOUR_PUBKEY.svg)](https://credence.nexus/#worker/YOUR_PUBKEY)
```

Clicking the badge opens your **Contributor Dossier** on Credence Nexus, showcasing your verified audit history, quality score, and unlocked badges.

---

## 7. Next Steps

- Consult the [Worker Key Custody & Migration Cookbook](../cookbooks/worker-key-custody-and-migration.md) to preserve your identity when switching workstations.
- Read the [Open Epistemic Mempool Protocol Specification](../protocols/open-epistemic-mempool.md) for detailed queue mechanics and Byzantine consensus proofs.
- Track network contributions in real time on the [Credence Nexus Leaderboard](https://credence.nexus/#leaderboard).
