---
title: The Multi-Model Provider Architecture
description: Configuring Credence with Anthropic Claude 3.7 Sonnet, OpenAI GPT-4o
  / o3-mini, DeepSeek-R1, and Local Ollama / vLLM.
since_version: v1.0.0
verified_version: v2.22.0
last_verified: 2026-09-13
---

# Multi-Model Provider Architecture

While Credence uses **Google Gemini 3.7 Flash** as its default reference engine, the core epistemic evaluation pipeline is completely **model-agnostic**.

Credence abstracts model inference behind a decoupled `LLMProvider` protocol interface, allowing newsrooms, enterprises, and independent researchers to plug in any frontier API or self-hosted open-weights model.

---

## 1. The Decoupled Provider Protocol

| Engine / Model | Thinking Token Budget | Input / Output per 1M | Latency SLA | Air-Gap Support | Headroom Circuit Breaker |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Google Gemini 3.7 Flash** (Default) | 4,096 tokens (Pareto optimal) | **$0.075 / $0.30** | 2.4s – 3.8s | Cloud API | Auto-trips at 30% quota |
| **Anthropic Claude 3.7 Sonnet** | Up to 16k tokens | **$3.00 / $15.00** | 4.8s – 7.2s | Cloud API | Supported |
| **OpenAI GPT-4o / o3-mini** | 0 – 8k reasoning tokens | **$2.50 / $10.00** | 3.5s – 5.5s | Azure / OpenAI | Supported |
| **DeepSeek-R1 (API)** | Up to 16k tokens | **$0.55 / $2.19** | 6.0s – 12.0s | Open-Weights API | Supported |
| **Ollama / vLLM (Llama 3.3 70B)** | 0 tokens (Direct prompt) | **$0.00** (Local hardware) | 3.0s – 6.0s | **100% Air-Gapped** | Offline mode (`$0.00`) |

---

## 2. Supported Provider Configurations

Switch providers effortlessly via environment variables or CLI flags:

### A. Anthropic Claude 3.7 Sonnet (Extended Thinking)
Ideal for deep investigative analysis with custom reasoning budgets:

```bash
export CREDENCE_LLM_PROVIDER=anthropic
export ANTHROPIC_API_KEY=sk-ant-...
export CREDENCE_MODEL=claude-3-7-sonnet-20250219
export CREDENCE_THINKING_BUDGET=8192

credence audit https://example.com/article
```

### B. OpenAI GPT-4o & o3-mini (Structured Outputs)
Leverages OpenAI's native JSON Schema validation:

```bash
export CREDENCE_LLM_PROVIDER=openai
export OPENAI_API_KEY=sk-proj-...
export CREDENCE_MODEL=gpt-4o  # or o3-mini

credence audit https://example.com/article
```

### C. DeepSeek-R1 & DeepSeek-V3 (Open-Weights Reasoning)
High-rigor syllogistic reasoning at open-weights API pricing:

```bash
export CREDENCE_LLM_PROVIDER=deepseek
export DEEPSEEK_API_KEY=sk-...
export CREDENCE_MODEL=deepseek-reasoner

credence audit https://example.com/article
```

### D. Local Ollama & vLLM (100% Offline & Private)
Run confidential audits with zero cloud egress:

```bash
export CREDENCE_LLM_PROVIDER=ollama
export OLLAMA_HOST=http://localhost:11434
export CREDENCE_MODEL=llama3.3:70b-instruct-q4_K_M

credence audit https://example.com/article
```

---

## 3. Universal OpenAI-Compatible Provider (`OpenAICompatibleProvider`)

Credence includes an out-of-the-box universal adapter for any OpenAI-compatible API endpoint, such as **vLLM**, **LM Studio**, **LocalAI**, **OpenRouter**, **Together AI**, **Groq**, or **Ollama** `/v1`:

```bash
# Connect to a local vLLM or LM Studio instance
export CREDENCE_LLM_PROVIDER=openai_compatible
export CREDENCE_API_BASE=http://localhost:8000/v1
export CREDENCE_API_KEY=sk-local-dev
export CREDENCE_MODEL=meta-llama/Llama-3.3-70B-Instruct

credence audit https://example.com/article
```

---

## 4. Open Model Namespace Architecture (`<namespace>/<model_id>`)

Credence supports an open, two-tier URI namespace for cognitive models rather than a closed, hardcoded enum:

$$\text{Model Identifier} = \langle\text{namespace}\rangle / \langle\text{model\_id}\rangle$$

| Namespace Type | Example Slugs | Epistemic Role |
| :--- | :--- | :--- |
| **Frontier Commercial** | `google/gemini-2.5-pro`, `anthropic/claude-3.7-sonnet`, `openai/o3-mini` | High-accuracy reference anchors ($Q_{\text{model}} \approx 0.95$) |
| **Open-Weights Ecosystem** | `alibaba/qwen2.5-72b`, `deepseek/deepseek-r1-14b`, `meta/llama-3.3-70b` | Diverse independent perspectives & sovereign audits |
| **Academic & Research** | `allenai/tulu-3-70b`, `stanford-nlp/epistemic-70b`, `moonshot/kimi-k1.5` | Specialized reasoning and domain evaluations |
| **Custom & Homelab** | `local/my-fine-tune-mlx`, `acme-corp/financial-auditor-v2` | Proprietary fine-tunes and organizational models |

### Dynamic Model Family Resolution

To prevent redundant duplicate computation when workers run cosmetic variations of identical weights, the node resolves model slugs into base family clusters:

```python
def resolve_model_family(model_slug: str, base_family: str | None = None) -> str:
    """Resolve an open model slug to an epistemic family cluster."""
    if base_family:
        return base_family.lower().strip()
    slug = model_slug.lower().strip()
    if any(k in slug for k in ("gemini", "gemma")): return "google/gemini"
    if any(k in slug for k in ("claude", "anthropic")): return "anthropic/claude"
    if any(k in slug for k in ("gpt-", "o1", "o3", "openai")): return "openai/gpt"
    if any(k in slug for k in ("deepseek", "r1")): return "deepseek/reasoner"
    if any(k in slug for k in ("llama", "meta-llama")): return "meta/llama"
    if any(k in slug for k in ("qwen", "qwq")): return "alibaba/qwen"
    if any(k in slug for k in ("mistral", "mixtral", "codestral")): return "mistral/mixtral"
    if any(k in slug for k in ("grok", "xai")): return "xai/grok"
    if any(k in slug for k in ("command", "cohere")): return "cohere/command"
    if any(k in slug for k in ("kimi", "moonshot")): return "moonshot/kimi"
    if "/" in slug:
        return slug.split("/", 1)[0].strip()
    return f"custom/{slug}"
```

---

## 5. Distributed Volunteer Worker Integration

Volunteer workers can contribute compute to the open mempool using any supported model or custom inference endpoint:

```bash
# Run worker with local Ollama model
uvx credence worker --node https://credence.run --model ollama/llama3.3:70b

# Run worker with OpenAI-compatible endpoint (vLLM, LM Studio, OpenRouter)
uvx credence worker \
  --node https://credence.run \
  --model custom/deepseek-r1-distill \
  --api-base http://localhost:8000/v1 \
  --api-key sk-local-inference
```

---

## 6. Zero-Trust Epistemic Verification ($G=1.00$)

Credence safely accepts evaluations from **any custom, unvetted, or experimental model** because all findings must satisfy **verbatim DOM grounding**:
1. **Deterministic Grounding Gate**: Every rule citation must contain an exact character-offset substring from the raw webpage DOM ($G=1.00$). Any hallucinated quote causes instant `HTTP 422` rejection.
2. **Taxonomy Adherence**: Rule IDs must map to official catalog standards (SPJ Journalistic Ethics, IEP Fallacies, Deceptive Patterns).
3. **Cryptographic Accountability**: Workers sign reports with Ed25519 keys, anchoring reputation to verifiable accuracy.
