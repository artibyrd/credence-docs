---
title: Token Safety Governor
description: In-database token buckets, spending ceilings, thinking token accounting, and automated circuit breakers.
since_version: v1.0.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 1
---

# Token Safety Governor Specification

The **TokenBudgetGovernor** manages LLM token consumption, cost caps, and reasoning quality to ensure autonomous audits never exhaust shared API quotas or starve interactive developer pairing sessions.

---

## 1. The Token Coexistence Challenge

When developing autonomous AI pipelines that make repeated LLM calls, sharing a single `GEMINI_API_KEY` across background workers and interactive developer pairing creates high operational risk:
- A large feed-sifting or background scraping run could rapidly consume all **TPM (Tokens Per Minute)** or **RPD (Requests Per Day)** quota.
- Interactive pairing with Antigravity encounters unexpected `429 ResourceExhausted` errors, grinding development to a halt.
- Runaway recursive agent loops can incur uncontrolled cloud API billing spikes.

Credence solves this with the **Token Safety Governor Subsystem**, enforcing strict local financial ceilings and offline fallback buffers.

---

## 2. 5-Layer Token Safety Architecture

The Token Safety Governor operates as a hierarchical 5-layer defensive funnel:

| Governor Layer | Subsystem Mechanism | Spend Impact | Headroom Action |
| :--- | :--- | :--- | :--- |
| **Layer 1: P2P Attestation** | Adopts cached Ed25519 receipt from mesh peers | 0 tokens ($0.00) | Instant cache hit |
| **Layer 2: FREE Heuristics** | Regex patterns & Shannon entropy check | 0 tokens ($0.00) | Filters obvious spam |
| **Layer 3: BALANCED Evaluation**| Gemini 3.7 Flash with 1,024 thinking tokens | ~$0.00034 | Normal audit execution |
| **Layer 4: Circuit Breaker** | `QUOTA_PRESERVED` trips at 70% headroom | Blocks background spend | Preserves interactive quota |

1. **Layer 1 (P2P Work-Sharing)**: When an article URL or content SHA-256 is received, the node checks its local cache and queries peer nodes. If a valid Ed25519 attestation exists from a peer with $Q_i \ge 0.70$, it adopts the signed result directly—**saving 100% of LLM inference tokens**.
2. **Layer 2 (Offline Heuristic Pre-Filter)**: If no attestation exists, the document is evaluated against 46 offline regex rules (clickbait, superlative density, promotional links). If clearly clean or clearly spam, it terminates without calling frontier models.
3. **Layer 3 (30% Headroom Tripwire)**: Before invoking external inference, the governor checks the rolling token bucket. If current usage exceeds 70% of the hourly ceiling (`QUOTA_PRESERVED` state), background batch jobs pause and yield to interactive requests.
4. **Layer 4 (DOM Scrubber)**: HTML boilerplate, navbars, ads, and tracking scripts are stripped before LLM ingestion, reducing raw context size by 85%.
5. **Layer 5 (Calibrated Thinking Engine)**: Inference is constrained to exact thinking token budgets (`1024` default, `4096` escalation), preventing infinite deliberation loops.

---

## 3. Configuration Parameters (`.env`)

| Variable | Default | Description |
|---|---|---|
| `CREDENCE_GEMINI_API_KEY` | `None` | **Isolated API Key** (Prioritized over `GEMINI_API_KEY` to separate project quota). |
| `MAX_TOKENS_PER_HOUR` | `100,000` | Hourly safety ceiling. Reaching this triggers offline fallback. |
| `MAX_TOKENS_PER_DAY` | `1,000,000` | Rolling 24-hour token consumption cap. |
| `MAX_DAILY_BUDGET_USD` | `$0.50` | Maximum estimated USD spend allowed in a 24-hour window. |
| `ENABLE_CIRCUIT_BREAKER` | `True` | Automatically enables graceful offline heuristic fallback when limits are reached. |
| `DEFAULT_SPECIALIST_MODEL` | `gemini-3.7-flash` | Primary workhorse for specialist auditors. |
| `DEFAULT_THINKING_BUDGET` | `1024` | Thinking/reasoning tokens allocated for deep syllogistic dissection. |
| `ESCALATION_THINKING_BUDGET` | `4096` | High-thinking budget allocated for ambiguous or contested boundary scores. |

---

## 4. Thinking Token Allocation & Cost Profiles

Reasoning models like **Gemini 3.7 Flash with Thinking** generate internal reasoning traces billed at completion token rates:

* **FREE Profile**: 0 thinking tokens, $0.00 ceiling, max speed, 100% offline heuristic regex evaluation.
* **BALANCED Profile**: 1,024 thinking tokens, $0.50/day spend cap, default evaluation mode for news and investigative audits.
* **ULTRA Profile**: 4,096–16,384 thinking tokens, deep philosophical syllogism extraction and high-stakes legal/medical claims.

### Real-Time Governor CLI Commands

Operators can monitor spending and configure limits dynamically:

```bash
# Inspect current token usage, spend, and active headroom
$ credence quota status

# Apply cost optimization and dynamic headroom limits
$ credence quota optimize --apply

# Trip emergency manual circuit breaker
$ credence quota stop --reason "High interactive workload"

# Resume normal autonomous execution
$ credence quota resume
```

---

## 5. Architectural References & Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — Multi-Model Sovereignty & Token Budget Invariants
* 🎮 [Interactive Token Governor Playground](../playground.md)
* 💰 [Mathematical Economics of Truth](../mathematics/economics-of-truth.md)
* 🛠️ [Cost Governance & Dashboard Runbook](../operations/cost-governance-and-dashboard.md)

---
## Financial Safety and Circuit Breaker Mechanics

The Token Governor protects operators from unexpected API costs by enforcing strict hourly token ceilings.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Token Governor** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
