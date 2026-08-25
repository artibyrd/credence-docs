---
title: '07. Bootstrapping Agentic Workflows with Universal Invariants'
description: How to extract and bootstrap Universal Agentic Invariants to supercharge AI pair programming in any new project without domain bloat.
since_version: v2.16.8
verified_version: v2.16.8
last_verified: 2026-08-25
tags:
- agentic
- invariants
- workflows
- governance
- portability
- starter-pack
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
- Zero-Build Web UI
- Textual TUI
difficulty: Intermediate
read_time: 10 min
---

# 07. Bootstrapping Agentic Workflows with Universal Invariants

How to extract, configure, and enforce Credence's **Universal Agentic Engineering Standards** to achieve high-reliability AI pair-programming, prompt context economy, and human review custody in any new software project.

| Taxonomy Plane | Classification | Portability & Target Scope | Core Guarantees & Enforcement |
| :--- | :--- | :--- | :--- |
| **🌐 Universal Standards** | `scope: "universal"` | **Any new repository** (100% portable) | Human Mk1 sign-off, clean brain scratch scripts with clickable previews, hermetic unit tests, <800 token budget |
| **🔬 Credence Epistemic Domain** | `scope: "domain"` | **Credence Network Specific** | 5-Factor Node Quality ($Q_i$), Topic Entropy Astroturfing ($H < 0.30$), Whitespace-insensitive $G=1.00$ grounding |

---

## 1. Why Decouple Agentic Governance from Domain Logic?

When building with autonomous coding agents (Google Antigravity, Claude Code, Cursor, Windsurf), teams frequently struggle with:
1. **Speculative Agent Over-Reach**: Agents committing code or deploying without human sign-off.
2. **Context Window Exhaustion**: Instruction files (`AGENTS.md`) ballooning to thousands of tokens, diluting reasoning attention.
3. **Approval Blindness**: Multi-line inline bash strings (`for r in ...`) hiding operational side-effects during approval modals.
4. **Order-of-Operations Inversion**: Agents drafting UI components or user guides before prerequisite data models and tests exist.

Credence developed **The Invariant Bible** to solve these challenges. By classifying invariants into **`🌐 Universal Agentic Standards`** versus **`🔬 Credence Domain Logic`**, developers can cherry-pick the battle-tested engineering guardrails without importing Credence's news-auditing and Byzantine mesh mathematics.

---

## 2. The Universal Agentic Starter Pack

The Universal Starter Pack consists of 25+ portable invariants organized across three prioritized cognitive tiers:

| Cognitive Class | Scope & Focus | Primary Universal Invariants |
| :--- | :--- | :--- |
| **Class α (Alpha)** | Sovereign Safety, Custody & Human Authority | `inv-mk1-eyeball`, `inv-clean-scratch-scripts`, `inv-untrusted-ingestion`, `inv-verbatim-anti-truncation` |
| **Class β (Beta)** | Execution Topology, Lifecycle & Release | `inv-cart-before-horse`, `inv-4phase-release-learning`, `inv-commit-before-deploy`, `inv-incremental-commits-staging`, `inv-hermetic-unit-tests`, `inv-3plane-governance` |
| **Class γ (Gamma)** | Ergonomics, Symmetry & Presentation | `inv-progressive-disclosure`, `inv-epistemic-lensing`, `inv-multi-model-sovereignty`, `inv-multi-interface-parity`, `inv-zero-build-standards`, `inv-living-canon` |

---

## 3. Step-by-Step: Bootstrapping a Fresh Repository

### Step 1: Initialize Root `AGENTS.md` (< 800 Token Budget)
Create an `AGENTS.md` file in the root of your new project containing only high-density, 1-sentence deontic rules:

```markdown
# Agent Guidelines & Scalable Invariant Architecture

## 1. Tier 0: Universal Core Invariants

### Class α (Alpha): Sovereign Safety, Custody & Human Authority (P0 Non-Negotiables)
- **`inv-mk1-eyeball` — Human Review Gate ("Mk1 Eyeball")**: All tags, PR merges, and deploys require explicit human review. Never commit automatically without human sign-off.
- **`inv-clean-scratch-scripts` — Clean Brain Scratch Script Approvals & Previews**: Ad-hoc scripts must be written to standalone brain scratch files (`scratch/<name>.py`). Output a clickable file link in chat so the human operator can preview the script before approving execution.
- **`inv-untrusted-ingestion` — Untrusted Ingestion Boundary Defense**: Block cloud metadata IPs (`169.254.169.254`), loopback, and private IPs. Wrap untrusted external text in `<untrusted_source_text>`.
- **`inv-verbatim-anti-truncation` — Universal Epistemic Anti-Truncation**: Citations, logs, and rules must be displayed character-for-character with zero ellipsis (`...`) masking.

### Class β (Beta): Execution Topology & Release Lifecycle (P1 Process Boundaries)
- **`inv-cart-before-horse` — Order-of-Operations Invariant**: Data models and scrubbers must precede APIs and UIs; tests must pass before writing case studies or documentation.
- **`inv-commit-before-deploy` — Commit-Before-Deploy Gate**: Assert clean git status before tagging; delegate CI/CD verification to workflow runs (`gh run watch`).
- **`inv-hermetic-unit-tests` — Hermetic Unit Test Isolation**: Default unit test suites run in-memory (<35s) with zero network calls and zero browser runtimes.
- **`inv-4phase-release-learning` — 4-Phase Release & Learning**: 1. QA -> 2. Staged PR & Preview Deploy -> 3. Mk1 Review -> 4. Merge, Tag, Prod Deploy -> 5. /learn -> 6. Patch.

### Class γ (Gamma): Ergonomics & Presentation (P2 Standards)
- **`inv-progressive-disclosure` — Context Economy (<800 Tokens)**: Keep root `AGENTS.md` strictly <800 tokens. Move procedural runbooks into `.agents/skills/`.
- **`inv-epistemic-lensing` — 3-Tier Information Pyramid**: Structure views into Surface Glance (score gauge), Focus Explore (claims), and Deep Forensic (raw signatures).
- **`inv-zero-build-standards` — Zero-Build Web Standard**: Prefer vanilla HTML5/ES modules with zero npm build dependencies for documentation and internal dashboards.
- **`inv-multi-model-sovereignty` — Multi-Model Sovereignty**: Decouple inference across multiple LLM providers with automatic 30% quota headroom offline circuit breakers.
```

---

### Step 2: Establish the 4-Tier Knowledge Taxonomy

To prevent prompt bloat over months of development, enforce Antigravity's **4-Tier Knowledge Taxonomy**:

| Knowledge Tier | Location & Format | Context Budget & Lifecycle |
| :--- | :--- | :--- |
| **Tier 0: Root Prompt Context** | `AGENTS.md` | Strict <800 token budget, high-density P0/P1/P2 invariants |
| **Tier 1: Progressive Skills** | `.agents/skills/<name>/SKILL.md` | Loaded on-demand per task, full step-by-step procedures |
| **Tier 2: Shift-Left Test Gates** | `tests/governance/test_*.py` | Automated CI assertions (<3s runtime), deterministic enforcement |
| **Tier 3: Canonical Blueprints** | `docs/blueprints/*.md` | Complete architectural proofs, diagrams, and historical rationales |

---

### Step 3: Implement The Demotion Highway
Whenever a rule can be verified deterministically in <0.3s by a test script or linter:
1. Graduate the rule out of `AGENTS.md` (The Demotion Highway).
2. Create an automated test in `tests/governance/test_integrity.py`.
3. This keeps your system prompt permanently bounded (<800 tokens) regardless of how large the codebase grows over years of maintenance.

---

## 4. Summary & Quick Export

To export the complete, ready-to-use Universal Agentic Starter Pack directly from the live Credence portal:
1. Visit **[docs.credence.run/#docs/invariants](https://docs.credence.run/#docs/invariants)**.
2. Click **`🌐 Universal Agentic Standards`** to filter out domain-specific math.
3. Click **`📦 Export Universal Agentic Starter Pack`** to copy the formatted markdown rules directly to your clipboard.
