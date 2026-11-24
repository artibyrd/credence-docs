---
title: "Tutorial 15: Volunteer Compute & Worker Fleet Guide"
description: "How to contribute spare compute to the open epistemic mempool, climb the volunteer leaderboard, and earn cryptographic achievement badges."
since_version: "v2.22.0"
verified_version: v2.23.0
last_verified: 2026-11-23
---

# Tutorial 15: Volunteer Compute & Worker Fleet Guide

The **Credence Open Epistemic Mempool** transforms fact-checking from a centralized bottleneck into a distributed, peer-powered consensus engine. Anyone with spare compute—whether an API key for Google Gemini, Anthropic Claude, OpenAI, or DeepSeek, a local workstation running Ollama or vLLM, or an air-gapped homelab server—can contribute blind evaluations to the network.

In this tutorial, you will learn how to:
1. Launch a volunteer worker daemon in seconds using zero permanent install (`uvx`).
2. Configure inference providers across Google Gemini, Anthropic Claude, OpenAI, DeepSeek, and local open-weights servers.
3. Target high-priority in-chat IDE requests via client affinity.
4. Climb the contributor leaderboard and unlock all 10 cryptographic achievement badges.
5. Secure your Ed25519 worker identity key across machine migrations.

---

## 1. The Architecture of Volunteer Compute

In a traditional fact-checking workflow, a single model or authority evaluates a claim. In Credence, evaluation requests are placed into a public **Epistemic Mempool Queue** where multiple independent volunteer workers claim leases:

1. **Enqueue Job**: The client (IDE FastMCP session, Web Workstation, or public caller) posts an audit request with priority and quorum targets. For public `http(s)://` URLs, the coordinator captures authoritative normalized text via an SSRF-safe, 10 MB-capped fastpath HTTP fetch.
2. **Open Mempool Queue**: The coordinator applies single-flight deduplication via content-addressable SHA-256 hashes.
3. **Atomic Multi-Model Claim**: Eligible workers from distinct canonical model families (resolved server-side from `model_slug`) present an Ed25519 proof-of-possession signature to atomically claim time-bounded leases.
4. **Blind Evaluation**: Each worker performs isolated evaluation and signs its report with Ed25519 without viewing peer submissions.
5. **Bayesian Consensus**: The coordinator enforces fail-closed $G=1.00$ verbatim grounding, aggregates cross-model scores via `BayesianConsensusAggregator`, and triggers Galileo Rule overrides when grounded minority findings exist.
6. **Attestation & Rewards**: Final signed attestations are archived, and contributor quality scores ($Q_w$) and all 10 achievement badges are updated.

Every volunteer worker performs **Blind Evaluation**:
- Workers receive only the coordinator-captured normalized source text and URL to evaluate.
- Workers cannot see other nodes' or workers' evaluations prior to submitting.
- Submissions are cryptographically signed with the worker's unique Ed25519 keypair.
- Verbatim grounding ($G=1.00$) is enforced fail-closed character-for-character: any hallucinated quote triggers HTTP 422 rejection and slashes worker quality ($Q_w$).

---

## 2. Quickstart: Launching Your Worker with Zero Install

You do not need to clone the repository or manually manage virtual environments. Using `uvx`, you can run the volunteer worker directly:

```bash
# Launch a volunteer worker using Google Gemini
export GEMINI_API_KEY="<your-gemini-api-key>"
uvx --from git+https://github.com/artibyrd/credence credence worker --model google/gemini-3.8-flash --continuous
```

Upon launching, the worker outputs a terminal odometer and begins polling the coordinator:

```bash
# Terminal execution output
# Worker Pubkey:   9f486ba6241d6961e8c40b9132a4f570d8b2a6c4e1f9b3a70562d8e4733db917
# Model Slug:      google/gemini-3.8-flash
# Model Family:    google/gemini
# Client Affinity: all (general mempool)
# Coordinator:     https://credence.run
# [✓] Bounty cleared: 837a16b3-2c91-4b88-9a21-51e73f0a4d12 | Status: accepted | Badges: ['first_bounty', 'model_pioneer'] | Tokens: 2140
```

---

## 3. Supported Model Providers & Custom Endpoints

Credence supports diverse model families to prevent single-vendor monoculture and bias. You can also set the universal `CREDENCE_MODEL_API_KEY` environment variable as a provider-agnostic fallback.

### Google Gemini
```bash
export GEMINI_API_KEY="<your-gemini-api-key>"
uvx --from git+https://github.com/artibyrd/credence credence worker --model google/gemini-3.8-flash
```

### Anthropic Claude
```bash
export ANTHROPIC_API_KEY="<your-anthropic-api-key>"
uvx --from git+https://github.com/artibyrd/credence credence worker --model anthropic/claude-3-7-sonnet
```

### OpenAI GPT-4o
```bash
export OPENAI_API_KEY="<your-openai-api-key>"
uvx --from git+https://github.com/artibyrd/credence credence worker --model openai/gpt-4o
```

### DeepSeek API
```bash
export DEEPSEEK_API_KEY="<your-deepseek-api-key>"
uvx --from git+https://github.com/artibyrd/credence credence worker --model deepseek/deepseek-chat
```

### 100% Offline Local Inference (Ollama or vLLM)
To run fully offline without sending data to cloud APIs, run Ollama locally and point the worker to your local endpoint:

```bash
# Pull your preferred open-weights model
ollama run deepseek-r1:70b

# Launch the worker daemon targeting your local instance
export OLLAMA_HOST="http://localhost:11434"
uvx --from git+https://github.com/artibyrd/credence credence worker \
  --model ollama/deepseek-r1:70b \
  --continuous
```

### Custom & Open-Weights Inference Endpoints
If you host models using vLLM, Together AI, Groq, or RunPod:
```bash
uvx --from git+https://github.com/artibyrd/credence credence worker \
  --model meta/llama-3.3-70b \
  --api-base https://api.groq.com/openai/v1 \
  --api-key "<your-groq-api-key>" \
  --continuous
```

---

## 4. Client Affinity: Serving Your Own IDE Sessions

When using the FastMCP extension in Claude Desktop or Cursor, evaluation requests can be tagged with a client affinity identifier. If you want your local worker to prioritize evaluating requests coming from your own IDE session:

```bash
# In your terminal:
uvx --from git+https://github.com/artibyrd/credence credence worker --affinity fastmcp-ide-session --model google/gemini-3.8-flash
```

When an audit is triggered inside Cursor or Claude on a hosted coordinator, your worker immediately claims the priority-1 (15s) lease, executes the evaluation, and unblocks your in-chat FastMCP Epistemic Brake.

---

## 5. Contributor Telemetry, Leaderboards & Badges

As your worker daemon clears bounties, the coordinator continuously tracks your contributions:
- **Quality Score ($Q_w$)**: Computed in `[0.10, 1.00]` based on bounty volume, grounding accuracy ratio $A_{\text{ground}} = \frac{N_{\text{completed}}}{N_{\text{completed}} + R_{\text{reject}}}$, worker longevity, and `-0.15` slashing per ungrounded rejection (displayed scaled `× 10` as `0.0–10.0` on `credence.nexus`):
  $$Q_w = \text{clamp}\!\left(0.50 + 0.25 \cdot \min\!\left(1, \frac{N_{\text{bounties}}}{50}\right) + 0.15 \cdot A_{\text{ground}} + 0.10 \cdot \min\!\left(1, \frac{T_{\text{days}}}{14}\right) - 0.15 \cdot R_{\text{reject}},\ 0.10,\ 1.00\right)$$
- **Tokens Donated**: Authentic LLM prompt, completion, and thinking tokens reported by the worker's inference provider (clamped per submission to prevent wash-farming).
- **Estimated Value Saved ($)**: Network savings calculated using blended baseline API rates ($0.34 per 1M tokens).

### Achievement Badges (All 10 Registered Worker Milestones)

| Icon | Badge ID | Title | Exact Coordinator Requirement |
| :--- | :--- | :--- | :--- |
| 🎯 | `first_bounty` | **First Bounty** | Successfully fulfill 1+ mempool audit job. |
| ⚡ | `speed_demon` | **Speed Demon** | Complete and submit a verified audit in under 15.0 seconds from lease claim. |
| 🏹 | `bounty_hunter` | **Bounty Hunter** | Complete 25+ distributed audit bounties. |
| 👑 | `bounty_legend` | **Bounty Legend** | Complete 100+ distributed audit bounties. |
| 🌈 | `diversity_champion` | **Diversity Champion** | Contribute verified audits across 3+ distinct canonical model families. |
| 🧪 | `model_pioneer` | **Model Pioneer** | First worker to introduce and anchor a new model family on the coordinator. |
| 🦉 | `night_owl` | **Night Owl** | Submit 1+ verified audit during off-peak UTC hours (00:00–05:59 UTC). |
| ⚔️ | `weekend_warrior` | **Weekend Warrior** | Contribute 10+ verified audits during UTC Saturday/Sunday hours. |
| 🎯 | `precision_striker` | **Precision Striker** | Accumulate 50+ verbatim-grounded citations with 0 grounding rejections and $Q_w \ge 0.80$. |
| 🛡️ | `iron_worker` | **Iron Worker** | Complete 500+ audits with 0 grounding rejections and $Q_w \ge 0.85$. |

---

## 6. Live SVG Profile Badge

Every contributor receives a dynamic SVG badge that updates in real time as you fulfill bounties. You can embed this badge in your GitHub profile or project documentation:

```markdown
[![Credence Worker](https://credence.run/api/badge/worker/YOUR_64_HEX_PUBKEY.svg)](https://credence.nexus/#worker/YOUR_64_HEX_PUBKEY)
```

Clicking the badge opens your **Contributor Dossier** on Credence Nexus, showcasing your verified audit history, quality score, and unlocked badges.

---

## 7. Next Steps

- Consult the [Worker Key Custody & Migration Cookbook](../cookbooks/worker-key-custody-and-migration.md) to preserve your identity when switching workstations.
- Read the [Open Epistemic Mempool Protocol Specification](../protocols/open-epistemic-mempool.md) for detailed queue mechanics and Byzantine consensus proofs.
- Track network contributions in real time on the [Credence Nexus Leaderboard](https://credence.nexus/#leaderboard).
