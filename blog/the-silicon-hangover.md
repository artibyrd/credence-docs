---
title: 'The Silicon Hangover: When Context Windows Suffer from Prompt Gluttony'
description: Why dumping 50,000 tokens of rules into system prompts causes cognitive oatmeal, and the 4-tier knowledge taxonomy that keeps AI agents razor-sharp under 800 tokens.
since_version: v1.15.0
verified_version: v2.10.1
last_verified: 2026-08-22
date: '2026-08-19'
series: 'The Wetware Chronicles'
genre: 'satirical-empiricism'
rule_id: 'SPJ-42.0'
author: The Credence Epistemic Governance Group
---

# The Silicon Hangover: When Context Windows Suffer from Prompt Gluttony 🧘

> [!TIP]
> **Epistemic Disclosure (Rule SPJ-42.0 — Ministry of Silly Protocols)**: This article is certified *Tongue-in-Cheek*. The `<800 token` invariant in `AGENTS.md`, the 3-class cognitive taxonomy, and the Demotion Highway are live architectural standards enforced across the Credence ecosystem.

---

In the early days of generative AI, prompt engineering followed a simple, brute-force philosophy:

> *"If the AI makes a mistake, just add 500 more words of instructions to the system prompt explaining why it shouldn't do that."*

Within six months, engineering repositories across the world ended up with 30-page `SYSTEM_PROMPT.md` files containing 40,000 tokens of dense, contradictory rules: CSS formatting guides, database migration tips, git conventions, API specs, and obscure edge-case warnings.

The result was predictable: **The Silicon Hangover (also known as Cognitive Oatmeal)**.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         PROMPT GLUTTONY VS STRATIFIED KNOWLEDGE ARCHITECTURE                     │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────┐   ┌──────────────────────────────────────────┐      │
│ │ ❌ PROMPT GLUTTONY (50k Flat Tokens)     │   │ 🛡️ 4-TIER PROGRESSIVE KNOWLEDGE (<800T)  │      │
│ ├──────────────────────────────────────────┤   ├──────────────────────────────────────────┤      │
│ │ • 35+ unordered flat rules in system prompt│ • Tier 0: Universal Invariants (AGENTS.md) │      │
│ │ • Attention dilution on critical security│──▶│ • Tier 1: Progressive Skills (.agents/)  │      │
│ │ • Cognitive oatmeal: CSS == SSRF safety  │   │ • Tier 2: Shift-Left Automated Pytest    │      │
│ │ • 💥 Cost explosion & token friction     │   │ • Tier 3: Canonical Master Blueprints    │      │
│ └──────────────────────────────────────────┘   └──────────────────────────────────────────┘      │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 💡 Context Invariant: Keep AGENTS.md <800 tokens. Offload trivia into progressive skills & tests │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🥣 The Pathology of Cognitive Oatmeal

When an LLM's context window is flooded with flat, un-stratified instructions:
1. **Attention Dilution**: Transformer self-attention is a finite mathematical resource. When an agent must attend to 40,000 tokens of instructions, the attention weights assigned to critical security rules (e.g. *SSRF loopback defense*) decay toward zero.
2. **False Equivalence**: The agent gives equal cognitive weight to trivial aesthetic styling (*"Always put a blank line before lists"*) and mission-critical cryptographic invariants (*"Never alter signed RFC 8785 JSON bytes"*).
3. **Latency & Cost Explosion**: Re-evaluating 40,000 tokens on every conversational turn inflates inference costs by 1,000% and slows execution down to a crawl.

---

## 🏛️ The 3-Class Cognitive Taxonomy (Class $\alpha$, $\beta$, $\gamma$)

In `AGENTS.md`, we organize Tier-0 knowledge into a strict, prioritized cognitive hierarchy that fits inside **< 800 tokens**:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         3-CLASS PRIORITIZED COGNITIVE TAXONOMY                                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ 🔴 CLASS α (Alpha): Sovereign Safety, Custody & Human Authority (P0 Non-Negotiables)       │   │
│ │ • Human Mk1 Review Gate • Verbatim Grounding ($G=1.00$) • RFC 8785 Ed25519 • SSRF Defense  │   │
│ ├────────────────────────────────────────────────────────────────────────────────────────────┤   │
│ │ 🔵 CLASS β (Beta): Execution Topology & Release Architecture (P1 Boundaries)               │   │
│ │ • 4-Phase Release Cycle • Cart-Before-Horse Order • Push-and-Delegate • Hermetic Tests (<35s│   │
│ ├────────────────────────────────────────────────────────────────────────────────────────────┤   │
│ │ 🟢 CLASS γ (Gamma): Interface Symmetry & Governance (P2 Ergonomics)                        │   │
│ │ • Universal 4-Way Parity • Epistemic Lensing • Living Canon Naming • Multi-Model Sovereignty│   │
│ └────────────────────────────────────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 🛡️ Strict Priority Hierarchy: Class α overrides Class β; Class β overrides Class γ               │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛣️ The Demotion Highway: Forgetting What Tests Can Prove

The secret to keeping `AGENTS.md` permanently bounded under 800 tokens—even as the codebase grows across ten minor releases—is the **Demotion Highway**:

$$\text{KnowledgePlacement} = \begin{cases} \text{Tier 2 (Test Gate)}, & \text{if assertion is deterministically verifiable in } < 0.3\text{s} \\ \text{Tier 1 (Progressive Skill)}, & \text{if rule is subsystem-scoped (e.g., Cloud Run / Mesh)} \\ \text{Tier 0 (AGENTS.md)}, & \text{only if rule is a universal, multi-file non-negotiable} \end{cases}$$

When an invariant can be asserted with 100% mechanical certainty (e.g. valid YAML frontmatter, 7-manifest version parity, zero npm dependencies), we **demote** it out of prompt memory and graduate it into `tests/test_docs_integrity.py`.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         THE INVARIANT LIFECYCLE & DEMOTION HIGHWAY                               │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ `PROPOSED` ──▶ `ACTIVE` ─────────────▶ `UNDER_REVIEW` ──┬──▶ `DEMOTED` (Shift-left pytest gate)  │
│ (/learn)       (Minted to AGENTS.md)   (Milestone audit)│                                        │
│                                                         └──▶ `RETIRED` (Obsolete constraint)     │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 💡 Demotion Highway: If a rule can be verified deterministically in <0.3s, move it to Pytest    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📈 The Result: Maximum Focus & Zero Hangover

By keeping universal prompt memory under 800 tokens and offloading trivia to automated test assertions:
* The agent’s attention remains 100% focused on active problem solving.
* Security and cryptographic invariants are never forgotten or diluted.
* Inference turn latency remains blazing fast (< 2 seconds).

Treat your AI's context window like human working memory: keep it clean, keep it focused, and never feed it cognitive oatmeal.
