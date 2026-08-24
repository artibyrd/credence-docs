---
title: 'Scaling System Invariants: How We Prevented Context Bloat and Attention Dilution
  in Autonomous AI Coding'
description: Why flat AGENTS.md rulebooks fail at scale, and how a 3-tier governance
  architecture with shift-left automated tests preserves LLM reasoning precision.
since_version: v1.15.0
verified_version: v2.16.6
last_verified: 2026-08-24
---

# Scaling System Invariants: How We Prevented Context Bloat and Attention Dilution in Autonomous AI Coding

*By the Credence Core Engineering Team*  
*August 19, 2026*

---

## 1. The Growth Trap of AI System Prompts

In early 2026, as autonomous AI coding assistants (like Google Antigravity, Claude 3.7 Sonnet, and Cursor) moved from writing simple functions to architecting multi-plane distributed networks, a new governance challenge emerged: **The Invariant Sprawl**.

Every time a production bug is squashed, an edge case is identified, or an architectural pattern is standardized, the instinctive reaction is to add a new rule to `AGENTS.md`:

- *"Always verify Ed25519 signatures with RFC 8785 canonical bytes."*
- *"Always enforce min_instance_count = 0 with Startup CPU Boost."*
- *"Ensure all Markdown documents start with YAML frontmatter."*
- *"Never use boolean or on ElementTree XML elements."*
- *"Use set -euo pipefail safe streaming in bash scripts."*

By release **v1.14.1**, our `AGENTS.md` had accumulated over 30 distinct rules across 1,800 tokens.

And that's when we observed a subtle, dangerous degradation: **Attention Dilution**.

When presented with a massive flat list of rules on every turn, LLMs don't weight every sentence equally. Critical cryptographic contracts (e.g. anti-tampering verification) were competing for cognitive bandwidth with tactical shell idioms (`pipefail` workarounds) and Markdown formatting trivia. The prompt was turning into **"Cognitive Oatmeal"**—a dense, unprioritized mush where crucial safety guardrails were easily overlooked.

Here is how we solved it in **v1.15.0** with a **3-Tier Scalable Invariant Architecture**.

---

## 2. The Anatomy of the Failure: Why Flat Rulebooks Break

Flat rulebooks suffer from three fundamental architectural flaws:
1. **Zero Prioritization**: Security vulnerabilities and typo-level syntax constraints receive identical prominence in the prompt.
2. **Context Window Tax**: Static rules are re-ingested on every conversation step, burning input token budgets that should be reserved for reasoning and thinking tokens.
3. **Fuzzy Enforcement of Deterministic Logic**: Asking an LLM to "remember to format frontmatter" is inherently probabilistic. When a rule can be verified by a deterministic script in 10 milliseconds, relying on LLM memory is an architectural smell.

---

## 3. The 3-Tier Invariant Scalability Framework

To solve this, we stratified our invariant ecosystem into three clear tiers based on **criticality, scope, and automation feasibility**:

### Tier 0: Universal Non-Negotiables (`AGENTS.md` &mdash; Strict Core)
- **Token Budget**: **< 800 tokens** (strictly enforced).
- **Prioritized Cognitive Hierarchy**:
  - **Class α (Alpha)**: Sovereign Safety & Custody (P0: Mk1 eyeball, $G=1.00$ grounding, Ed25519 canonical JSON, SSRF defense).
  - **Class β (Beta)**: Execution Topology & Release Lifecycle (P1: 4-phase lifecycle, cart-before-horse, CI/CD gates, hermetic tests).
  - **Class γ (Gamma)**: Interface Symmetry & Governance (P2: 4-way parity, epistemic lensing pyramid, multi-model sovereignty).

### Tier 1: Progressive Subsystem Skills (`.agents/skills/`)
- **Scope**: On-demand procedural playbooks and specialized domain knowledge.
- **Mechanism**: Only skill titles and brief descriptions ($\le 280$ chars / $\le 40$ words) live in the agent's root prompt. When the agent works on Cloud Run compute, the `cloudrun-ops` skill dynamically loads. When testing P2P consensus, `mesh-cluster` activates.
- **Enforcement**: Validated by automated linter (`scripts/lint_skills.py`).

### Tier 2: Shift-Left Automated Test Gates (`test_docs_integrity.py` & `Justfile`)
- **Philosophy**: *If a machine can assert it deterministically, never waste LLM attention tokens prompting for it.*
- **Implementation**: Formatting, sitemap routing, and manifest version verification run in a lightning-fast Pytest suite (`test_docs_integrity.py` running in $<1.5\text{s}$).
- **The Demotion Highway**: Automated static scanner (`just audit-demotions`) identifies rules that have reached 100% test coverage and graduates them out of Tier 0 prompt memory.

---

## 4. Invariant Mutability: The 6-State Lifecycle

Invariants are not permanent dogma; they reflect the strongest empirical findings at project epoch $t$. Credence manages invariants through a 6-state lifecycle:

---

## 5. The Results: 62% Token Reduction & Zero Cognitive Degradation

| Metric | Flat Rulebook (v1.14.1) | 3-Tier Governance Engine (v2.3.0) | Improvement |
| :--- | :--- | :--- | :--- |
| **Universal Prompt Token Overhead** | ~1,850 tokens | ~710 tokens | **-61.6% Token Savings** |
| **Cognitive Hierarchy** | Unordered Flat List | Ranked Class $\alpha / \beta / \gamma$ | **100% Focused Attention** |
| **Formatting Failure Detection** | Probabilistic (Prompt-based) | Deterministic ($<0.3\text{s}$ Pytest) | **100% Deterministic** |
| **Lifecycle Pruning** | Manual Accumulation | Automated Demotion Scanner | **Zero Rule Bloat** |

---

## 6. Takeaways for AI-Native Engineering Teams

1. **Rank by Cognitive Severity**: Structure your root prompt into Class $\alpha$ (fatal safety), Class $\beta$ (process topology), and Class $\gamma$ (ergonomics).
2. **Build a Demotion Highway**: Continuously graduate mechanical constraints from prompt text into unit tests.
3. **Budget Skill Descriptions**: Keep skill metadata compact ($\le 280$ chars) so agent discovery remains lean.
4. **Treat Invariants as Mutable Truths**: Re-evaluate invariants at every major milestone rather than treating them as unchangeable scripture.
