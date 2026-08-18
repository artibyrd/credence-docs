---
title: "ADR: Why Gemini 3.7 Flash as Default Engine"
description: "Architectural Decision Record explaining the technical, mathematical, and economic rationale behind choosing Gemini 3.7 Flash."
---

When designing an open epistemic evaluation engine intended to run across thousands of federated nodes, **inference economics** and **thinking token density** dictate the viability of the entire network.

This Architectural Decision Record (ADR) documents the reasons why **Google Gemini 3.7 Flash** was selected as the reference default engine, and outlines explicit criteria for when organizations should select alternative providers.

---

## 1. Context & Core Constraints

Epistemic auditing is computationally intensive. A single webpage audit requires:
1. Ingesting full-page rendered DOM text ($2,000 \dots 15,000$ tokens).
2. Cross-referencing against 50+ itemized taxonomy rules.
3. Conducting multi-step chain-of-thought syllogistic deduction (1,024 to 16,384 thinking tokens).
4. Verifying exact character offset grounding ($G = 1.0$).

If each audit costs $\$0.10 \dots \$0.50$, running a 500-article daily news feed would cost **$\$1,500 \dots \$7,500$ per month per node**, making decentralized mesh participation economically impossible for independent journalists and homelab operators.

---

## 2. Quantitative Model Comparison Matrix

| Evaluation Metric | **Google Gemini 3.7 Flash** *(Selected Default)* | **Anthropic Claude 3.7 Sonnet** | **OpenAI GPT-4o** | **DeepSeek-R1 (API)** | **Local Llama 3.3 70B (Ollama)** |
|:---|:---|:---|:---|:---|:---|
| **Input Price (per 1M tokens)** | **$0.075** | $3.00 | $2.50 | $0.55 | **$0.00** (Hardware power) |
| **Output / Thinking Price (per 1M)** | **$0.30** | $15.00 | $10.00 | $2.19 | **$0.00** (Hardware power) |
| **Context Window** | **1,048,576 tokens** | 200,000 tokens | 128,000 tokens | 64,000 tokens | 128,000 tokens |
| **Thinking Budget Control** | **Dynamic ($0 \dots 65,536$)** | Dynamic ($1,024 \dots 64,000$) | Static o-series | Continuous | Model-dependent |
| **Time to First Token (TTFT)** | **<450 ms** | ~1,200 ms | ~900 ms | ~2,500 ms | ~800 ms (local GPU) |
| **Cost for 500 Audits/Day** | **~$13.85 / month** | ~$480 / month | ~$360 / month | ~$92 / month | **~$4 / month** (Electricity) |

---

## 3. Key Decision Drivers

1. **The \$15/Month Budget Invariant**: Gemini 3.7 Flash allows a full-time seed node to evaluate **500+ daily articles** while staying well under the \$15.00/month Cloud Run budget ceiling.
2. **Thinking Density Without Latency Penalties**: Gemini 3.7 Flash executes 1,024 to 4,096 thinking tokens in under 1.8 seconds, enabling near-instant CLI and FastMCP response times.
3. **Massive Context Headroom**: With a 1M+ token window, Credence can ingest massive 100-page regulatory filings, scientific papers, and raw DOM trees without chunking or context fragmentation.

---

## 4. When You Should Switch Providers

| Scenario / Constraint | Recommended Provider | Why |
|:---|:---|:---|
| **Classified / Sensitive Intelligence** | **Local Ollama (Llama 3.3 70B)** | 100% air-gapped; zero data leaves your local RAM/VRAM. |
| **Deep Legal & Philosophical Nuance** | **Claude 3.7 Sonnet (Thinking)** | Unmatched subtlety in identifying rhetoric and structural straw men. |
| **Enterprise Azure/OpenAI Existing Credits** | **OpenAI GPT-4o / o3-mini** | Direct consumption of existing enterprise volume agreements. |
