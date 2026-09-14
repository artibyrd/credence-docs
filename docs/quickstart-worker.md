---
title: "Quickstart: Volunteer Worker Daemon (Open Mempool Compute)"
description: "Donate spare compute, claim mempool audit bounties, earn cryptographic merit badges, and climb the leaderboard with uvx credence worker in under 2 minutes."
since_version: v2.22.0
verified_version: v2.22.0
last_verified: 2026-09-14
---

# Quickstart: Volunteer Worker Daemon (Open Mempool Compute) 🐝

Contribute spare compute to the open epistemic mempool, earn verifiable merit badges, and climb the contributor leaderboard in **under 2 minutes**.

---

## 🎯 What a Volunteer Worker Does

Credence replaces single-model evaluation monocultures with a decentralized, multi-model consensus network. Instead of trusting a single AI model or a single company to decide what is true, the network distributes evaluation bounties across a fleet of independent volunteer workers running diverse cognitive models.

When you run a **Volunteer Worker Daemon**:

1. **Polls the Open Mempool**: Your worker continuously checks the coordinator's queue for unfulfilled evaluation bounties via `POST /api/queue/claim`.
2. **Performs Blind Evaluation**: Your worker fetches the source content and independently evaluates it against standardized journalistic (SPJ) and logical fallacy (IEP) rules using your configured model.
3. **Extracts Verbatim DOM Grounding ($G=1.00$)**: Every finding is backed by exact, character-for-character quotes from the source text. Hallucinated findings are automatically discarded.
4. **Signs and Submits Attestations**: Your worker signs the completed evaluation receipt using its unique Ed25519 cryptographic key and submits it back to the mempool via `POST /api/queue/submit`.
5. **Drives Bayesian Consensus**: Multiple workers running distinct model families (Gemini, Claude, GPT, DeepSeek, Llama, Mistral, Qwen) converge on a Bayesian consensus score. If a lone worker discovers an undeniable, grounded deception that other models missed, **The Galileo Rule** triggers to ensure truth prevails over consensus.

---

## 🚀 2-Minute Quickstart: 1-Command Launch via uvx

You can run a volunteer worker immediately with **zero installation** using `uvx`. Choose whether you want to evaluate with cloud APIs or 100% private local models.

:::tabs
=== Option A: Google Gemini 3.7 Flash (Default / Ultra-Low Cost)
```bash
# Set your Gemini API key (from Google AI Studio)
export CREDENCE_GEMINI_API_KEY="<your-gemini-api-key>"

# Launch the worker daemon connecting to the public network
uvx credence worker --node https://credence.run --model google/gemini-3.8-flash
```

=== Option B: 100% Offline Local Ollama ($0.00 Spend)
If you have Ollama running locally, you can donate compute with zero external API costs and absolute privacy:

```bash
# Launch worker using local Llama 3.3 70B via Ollama
uvx credence worker --node https://credence.run --model ollama/llama3.3:70b
```

=== Option C: Anthropic Claude 3.7 Sonnet
```bash
export CREDENCE_ANTHROPIC_API_KEY="<your-anthropic-api-key>"
uvx credence worker --node https://credence.run --model anthropic/claude-3.7-sonnet
```

=== Option D: DeepSeek-R1 (API or Local vLLM)
```bash
export CREDENCE_DEEPSEEK_API_KEY="<your-deepseek-api-key>"
uvx credence worker --node https://credence.run --model deepseek/deepseek-reasoner
```
:::

---

## 🌐 Universal Model Lineage Support

Credence is vendor-agnostic and explicitly designed to support any open-weights or proprietary model:

* **Commercial APIs**: Google Gemini (`google/*`), Anthropic Claude (`anthropic/*`), OpenAI GPT (`openai/*`), DeepSeek (`deepseek/*`).
* **Open-Weights Model Families**: Meta Llama (`meta-llama/*`), Mistral AI (`mistralai/*`), Qwen (`qwen/*`).
* **Local Inference Servers**: Ollama (`ollama/*`), vLLM (`vllm/*`), LM Studio (`lmstudio/*`), or any OpenAI-compatible HTTP endpoint.
* **Custom Fine-Tunes**: Use prefix notation `custom/<family>/<model>` or `<vendor>/<model>`.

The Bayesian consensus engine uses this lineage taxonomy to ensure architectural diversity: consensus requires verification from at least two distinct cognitive model families before a final verdict is sealed.

---

## 🏆 Tracking Your Merit, Badges & Leaderboard Rank

Every bounty your worker clears increases your standing on the public leaderboard:

* **Live Leaderboard**: View real-time standings at [`https://credence.nexus#leaderboard`](https://credence.nexus#leaderboard).
* **Worker Quality Score ($Q_w$)**: Your worker's reliability score on a 0.0 to 10.0 scale, calculated as:
  $$Q_w = 0.50 + 0.25 \cdot \text{Volume} + 0.15 \cdot \text{Grounding} + 0.10 \cdot \text{Longevity}$$
* **10-Tier Merit Badges**: Unlock verifiable badges including `first_bounty` (Pioneer Worker), `verbatim_hawk` ($G=1.00$ precision), `galileo_champion` (solitary grounded dissenter override), and `iron_pillar` ($99\%$ claim fulfillment).
* **Dynamic SVG Profile Badge**: Embed your live merit badge directly into your personal portfolio or GitHub README:

```markdown
[![Credence Worker](https://credence.run/api/badge/worker/<your-pubkey>.svg)](https://credence.nexus#worker/<your-pubkey>)
```

---

## 🔑 Preserving Your Worker Identity & Keys

Your Ed25519 keypair is your network identity. Your earned badges, completed bounty history, and leaderboard rank are permanently bound to your public key.

When switching machines or updating containers, preserve your identity:

```bash
# 1. View your active public key
credence key show

# 2. Export your private key to a secure backup file
credence key export --out ~/.credence/worker_backup.pem

# 3. Restore your identity on a new machine
credence key import ~/.credence/worker_backup.pem
```

### Zero-Disk Injection for Ephemeral Environments (Docker / Cloud Run)

For serverless containers or Kubernetes pods with ephemeral storage, pass your key via standard environment variables or mounted secrets:

```bash
export CREDENCE_NODE_KEY_PEM="$(cat ~/.credence/worker_backup.pem)"
uvx credence worker --node https://credence.run
```

---

## 🔄 How Workers Overlap with the Network

Volunteer workers provide the engine power for the entire Credence ecosystem:

```text
[FastMCP Clients (Claude / Cursor)]
               |
               | (1. Enqueue Audit Bounties)
               v
[Coordinator Mempool Queue (POST /api/queue/claim)]
               |
               | (2. Claim & Evaluate)
               v
[Volunteer Worker Fleet (You!)]
               |
               | (3. Submit G=1.00 Signed Attestations)
               v
[Consensus Engine & Public Explorer (credence.report)]
```

Without volunteer workers, AI coding assistants querying fresh URLs would wait in backlog queues. By running a worker daemon, you accelerate verification latency for developers worldwide while earning cryptographic credit.

---

## 🎓 The Credence Graduation Path

| Graduation Step | Why Graduate? | Next Quickstart Guide |
| :--- | :--- | :--- |
| **Consume via FastMCP** | Want your own AI coding assistant (Claude or Cursor) to benefit from the network you are powering? | [Quickstart: FastMCP AI Assistant](quickstart-mcp.md) |
| **Host a Sovereign Node** | Running a fleet of workers and need your own coordinator queue, internal team caching, or private database? | [Quickstart: Sovereign Node](quickstart-node.md) |

---

## 🔗 Related Specifications & System Invariants

* 📖 [The Credence Graduation Path Hub](quickstart.md): Complete overview of the 3 roles and network architecture.
* 📜 [Open Epistemic Mempool Protocol](protocols/open-epistemic-mempool.md): State machine specification for leases and Bayesian consensus.
* ⚖️ [System Invariant: The Galileo Rule](invariants.md#inv-galileo-rule): Asymmetric Bayesian truth weighting for grounded dissenters.
* 👁️ [System Invariant: Verbatim Anti-Truncation](invariants.md#inv-verbatim-anti-truncation): Verbatim citation standards across worker submissions.
