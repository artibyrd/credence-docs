---
title: 'The Silicon Hangover: When Context Windows Suffer from Prompt Gluttony'
description: Why dumping 50,000 tokens of rules into system prompts causes cognitive oatmeal, and the 4-tier knowledge taxonomy that keeps AI agents razor-sharp under 800 tokens.
since_version: v1.15.0
verified_version: v1.19.0
last_verified: '2026-08-19'
date: '2026-08-19'
series: 'The Wetware Chronicles'
genre: 'satirical-empiricism'
rule_id: 'SPJ-42.0'
author: The Credence Epistemic Governance Group
---

# The Silicon Hangover: When Context Windows Suffer from Prompt Gluttony 🧘

> [!TIP]
> **Epistemic Disclosure (Rule SPJ-42.0 — Ministry of Silly Protocols)**: This article is certified *Tongue-in-Cheek*. The `<800 token` invariant in `AGENTS.md` and the 4-tier knowledge taxonomy are live architectural standards enforced across the Credence repository.

---

In the early days of generative AI, prompt engineering followed a simple, brute-force philosophy:

> *"If the AI makes a mistake, just add 500 more words of instructions to the system prompt explaining why it shouldn't do that."*

Within six months, engineering repositories across the world ended up with 30-page `SYSTEM_PROMPT.md` files containing 40,000 tokens of dense, contradictory rules: CSS formatting guides, database migration tips, git conventions, API specs, and obscure edge-case warnings.

The result was predictable: **The Silicon Hangover (also known as Cognitive Oatmeal)**.

```mermaid
graph TD
    subgraph PromptGluttony ["❌ Prompt Gluttony (50k Flat Tokens)"]
        Flat["35+ Unordered Invariants Dumped into System Prompt"]
        Dilution["1. Attention Dilution<br/>(Critical security rules lost in noise)"]
        Oatmeal["2. Cognitive Oatmeal<br/>(Markdown trivia given equal weight to SSRF security)"]
        Waste["3. Token Friction<br/>(Re-parsing static rules on every turn)"]
        Flat --> Dilution
        Flat --> Oatmeal
        Flat --> Waste
    end

    subgraph StratifiedDiet ["🛡️ The 4-Tier Knowledge Taxonomy (&lt;800 Tokens)"]
        T0["Tier 0: Universal Invariants (AGENTS.md &lt; 800 tokens)"]
        T1["Tier 1: Progressive Subsystem Skills (.agents/skills/)"]
        T2["Tier 2: Shift-Left Automated Test Gates (0.3s)"]
        T3["Tier 3: Master Documentation Catalog"]
        T0 --> T1
        T0 --> T2
        T0 --> T3
    end

    style PromptGluttony fill:#7f1d1d,stroke:#f87171,stroke-width:2px,color:#fef2f2
    style StratifiedDiet fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
```

---

## 🥣 The Pathology of Cognitive Oatmeal

When an LLM's context window is flooded with flat, un-stratified instructions:
1. **Attention Dilution**: Transformer self-attention is a finite mathematical resource. When an agent must attend to 40,000 tokens of instructions, the attention weights assigned to critical security rules (e.g. *SSRF loopback defense*) decay toward zero.
2. **False Equivalence**: The agent gives equal cognitive weight to trivial aesthetic styling (*"Always put a blank line before lists"*) and mission-critical cryptographic invariants (*"Never alter signed RFC 8785 JSON bytes"*).
3. **Latency & Cost Explosion**: Re-evaluating 40,000 tokens on every conversational turn inflates inference costs by 1,000% and slows execution down to a crawl.

---

## 🏛️ The 4-Tier Knowledge Taxonomy Solution

To solve cognitive bloat forever, Credence stratifies all system knowledge into four decoupled layers based on **enforcement criticality, execution scope, and automation feasibility**:

```mermaid
graph TD
    subgraph T0 ["Tier 0: Universal Core Invariants (AGENTS.md &lt; 800 Tokens)"]
        T0_A["P0: Epistemic Grounding (G=1.00)"]
        T0_B["P0: Human Review ('Mk1 Eyeball')"]
        T0_C["P0: Network SSRF & Billion Laughs Defense"]
        T0_D["P0: RFC 8785 Canonical JSON & Ed25519 Custody"]
        T0_E["P0: Zero-npm Web Standard & 4-Way Parity"]
    end

    subgraph T1 ["Tier 1: Progressive Subsystem Skills (.agents/skills/)"]
        T1_A["cloudrun-ops (Scale-to-Zero, CPU Boost)"]
        T1_B["mesh-cluster (Watts-Strogatz, 3f+1 Cartel Defense)"]
        T1_C["white-label-ops (Terraform Multi-Domain)"]
        T1_D["epistemic-benchmark (Golden 12 Suite)"]
    end

    subgraph T2 ["Tier 2: Shift-Left Test Gates (tests/test_docs_integrity.py)"]
        T2_A["YAML Frontmatter Checks (&lt;0.3s)"]
        T2_B["Zero-npm package.json Assertions"]
        T2_C["7-Manifest Semantic Version Parity"]
        T2_D["Mermaid WCAG Dark Slate Contrast"]
    end

    T0 --> T1
    T0 --> T2
```

### Layer 1: Tier 0 Universal Invariants (`AGENTS.md`)
* **Execution Mode:** `always_on`
* **Token Budget:** Strict hard ceiling of **< 800 tokens**.
* Contains only P0 non-negotiables that apply across every file, turn, and subsystem.

### Layer 2: Tier 1 Progressive Subsystem Skills (`.agents/skills/`)
* **Execution Mode:** `on_demand`
* Loaded dynamically only when the agent touches that specific subsystem (e.g. `cloudrun-ops` when modifying Terraform or Dockerfiles).

### Layer 3: Tier 2 Shift-Left Automated Test Gates (`test_docs_integrity.py`)
* **Execution Mode:** `automated_ci`
* Rules that can be expressed as deterministic code (frontmatter validation, sitemap coverage, version parity) are removed from the prompt entirely and verified in **< 0.3 seconds** via Pytest.

---

## 📈 The Result: Maximum Focus & Zero Hangover

By keeping universal prompt memory under 800 tokens and offloading trivia to automated test assertions:
* The agent’s attention remains 100% focused on active problem solving.
* Hallucinations drop to near-zero.
* Inference turn latency remains blazing fast (< 2 seconds).

Treat your AI's context window like human working memory: keep it clean, keep it focused, and never feed it cognitive oatmeal.
