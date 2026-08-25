---
title: '06. The Demotion Highway & Invariant Lifecycle Governance'
description: How Credence re-evaluates system invariants, enforces Class Alpha/Beta/Gamma cognitive ranking, and graduates mechanical rules to automated test gates.
since_version: v2.3.0
verified_version: v2.16.8
last_verified: 2026-08-25
tags:
- invariants
- governance
- demotion-highway
- antigravity
- subagents
- cognitive-hierarchy
interfaces:
- CLI
- Python SDK
- FastMCP
difficulty: Advanced
read_time: 8 min
---

# 06. The Demotion Highway & Invariant Lifecycle Governance

As autonomous agent ecosystems mature, system invariants must scale without succumbing to **Attention Dilution**, prompt bloat, or cognitive oatmeal. Credence solves this with a **Prioritized Cognitive Hierarchy**, an **Invariant Lifecycle State Machine**, and the automated **Demotion Highway**.

---

## 1. The Constant-Ceiling Theorem for Agent Prompts

When every bug fix or post-mortem appends a new rule to a flat `AGENTS.md`, prompt adherence degrades non-linearly. Critical security boundaries compete for attention with formatting preferences.

To prevent this, Credence establishes the **Constant-Ceiling Theorem**:
- **Tier 0 Hard Budget**: Total Tier 0 rules in `AGENTS.md` must **never exceed 10–12 core axioms** and must remain strictly **$<800$ tokens**.
- **Mechanics over Memory**: *If a machine can assert a rule deterministically in $<0.3\text{s}$, never waste LLM attention tokens prompting for it.*

---

## 2. The 3-Class Prioritized Cognitive Taxonomy

Invariants in `AGENTS.md` are strictly organized into three ranked cognitive classes based on failure severity:

| Class | Domain & Scope | Consequence of Violation | Key Guardrails |
| :--- | :--- | :--- | :--- |
| **Class α (Alpha)** | **Sovereign Safety & Human Authority (P0)** | Fatal security breach, data tampering, unauthorized execution | • Mk1 Eyeball Human Review<br>• Epistemic Verbatim Grounding ($G=1.00$)<br>• RFC 8785 Canonical JSON & Ed25519 Custody<br>• Untrusted Ingestion Boundary & Network Defense<br>• Clean Scratch Script Approvals |
| **Class β (Beta)** | **Execution Topology & Release Architecture (P1)** | Broken CI/CD, race conditions, deployment divergence | • 4-Phase Release & Learning Lifecycle<br>• Cart-Before-the-Horse Order-of-Operations<br>• Push-and-Delegate CI/CD Verification Gate<br>• 3-Plane Decoupling (Edge, Compute, Infra)<br>• Hermetic In-Memory Unit Isolation ($<35\text{s}$) |
| **Class γ (Gamma)** | **Interface Symmetry & Epistemic Parity (P2)** | UX divergence, documentation bloat, cognitive friction | • Universal 4-Way Feature Parity (CLI, MCP, TUI, Web)<br>• Epistemic Lensing 3-Tier Cognitive Pyramid<br>• Session Documentation Anti-Proliferation<br>• Dynamic Living Canon Naming ("The Invariant Bible")<br>• Multi-Model Sovereignty & Offline Circuit Breakers |

---

## 3. Invariant Mutability & The 6-State Lifecycle

Invariants are not divine dogmas; they represent the **strongest empirical truth validated at project epoch $t$**. Over time, new tooling, compiler capabilities, or test suites may revise, consolidate, or demote an invariant.

### The 6 Lifecycle States:
1. **`Proposed`**: Synthesized during `/learn` retrospectives or post-mortems and documented in `learning_proposal.md`.
2. **`Active`**: Formally adopted and minted into `AGENTS.md` and `docs/invariants.md`.
3. **`Under Review`**: Evaluated during minor version boundaries (`v2.X.0`) or constitutional review milestones.
4. **`Amended`**: Refined or merged with related invariants to adapt to architectural advancements.
5. **`Demoted` (The Demotion Highway)**: Graduated out of prompt context into automated deterministic test gates (Tier 2) or progressive skills (Tier 1).
6. **`Retired`**: Archived with rationale in `docs/invariants.md` when the underlying constraint is obsoleted.

---

## 4. The Demotion Highway & Scanner in Action

The **Demotion Highway** is operationalized through the automated scanner script:

```bash
# Run the Invariant Demotion Highway Scanner
just audit-demotions
```

The scanner (`scripts/audit_demotions.py`):
1. Parses all Tier 0 invariants across Class $\alpha$, $\beta$, and $\gamma$.
2. Matches each invariant against assertions in `tests/governance/test_docs_integrity.py` and `test_architecture_governance.py`.
3. Flags rules that have achieved 100% deterministic test coverage.
4. Calculates quantified per-turn token savings if demoted.

```text
========================================================================
 🏛️  CREDENCE LIVING INVARIANT & DEMOTION HIGHWAY AUDIT
========================================================================
  Target File       : credence-ecosystem/AGENTS.md
  Total Invariants  : 21 across 3 Cognitive Classes
  Tier 0 Word Count : 1118 words (~1486 tokens)
------------------------------------------------------------------------
 🚀 DEMOTION HIGHWAY CANDIDATE SCANNER
------------------------------------------------------------------------
  Found 1 rule(s) already 100% verified by deterministic test gates:

  🎯 [Class γ (Gamma)] Continuous Roadmap, Changelog & 7-Manifest Semantic Governance
     Asserted By : test_ecosystem_version_parity
     Reason      : Asserts version synchronization across all 7 manifests
     Savings     : ~62 tokens/turn
========================================================================
```

---

## 5. The Invariant Challenger Protocol (`just challenge-invariant`)

Invariants are not immutable dogma. During Phase 4 (`/learn`) retrospectives and milestone release boundaries, the team runs the **Invariant Challenger** to evaluate whether an existing rule remains necessary, requires amendment, has been demoted, or has been superseded.

| Invariant Lifecycle Stage | Governance Action | Decision Threshold | Artifact Location |
| :--- | :--- | :--- | :--- |
| **1. Universal Core (Tier 0)** | Strict Class Alpha/Beta/Gamma guardrails | Non-negotiable sovereign safety | `AGENTS.md` (<800 tokens) |
| **2. Progressive Skill (Tier 1)** | Domain-specific operational runbooks | On-demand task execution | `.agents/skills/` |
| **3. Automated Test Gate (Tier 2)**| Deterministic code assertions | 100% automated CI pass | `tests/governance/` |
----------------
| Challenger Evaluation Matrix:                                                              |
---------------------------------------------------------------
| Scrutiny Condition           | Decision Verdict              | Concrete Architecture Action|
---------------------------------------------------------------
| Still Essential & Empirical  | Re-affirm Active Status       | Retain in Class α/β/γ       |
| Threshold / Syntax Evolved   | Amend Invariant Scope         | Update proof / mathematical |
| 100% Deterministic Test Gate | Demote to Tier 2 (Demotion)   | Move to pytest & save tokens|
| Obsolete / Redundant         | Retire / Nullify Invariant    | Archive with historic reason|
---------------------------------------------------------------

### The 4 Scrutiny Criteria:
1. **Sovereign Safety (Class $\alpha$)**: Does this rule prevent epistemic hallucinations ($G < 1.00$), unauthorized git commits, or SSRF? $\to$ **Class $\alpha$ rules are never demoted.**
2. **Deterministic Test Saturation**: Is the rule 100% verified by a unit or governance test gate? $\to$ **Demote to Tier 2 Test Gate.**
3. **Context Economy**: Does the rule justify its prompt token load (~50–100 tokens per turn)?
4. **Architectural Supersession**: Has a newer, more robust primitive superseded this invariant?

```bash
# Challenge a specific invariant by semantic slug
just challenge-invariant inv-version-governance
just challenge-invariant inv-verbatim-grounding
```

---

## 6. Automated Skill Schema & Token Economy Linter

To ensure Tier 1 progressive disclosure skills do not inadvertently bloat the discovery prompt, custom Antigravity skills are audited with `lint_skills.py`:

```bash
# Run skill schema and token economy linter
just audit-skills
```

### Enforced Skill Standards:
- **YAML Frontmatter**: Requires valid `name` and `description`.
- **Description Economy**: Description must not exceed **280 characters** and **40 words**.
- **Code Fence Hygiene**: All code blocks must start at column 0 and declare syntax language identifiers.

---

## 6. Declarative Subagent Delegation Architecture

For multi-agent workflows, Credence declares reusable subagent configuration profiles in `credence-agent/templates/subagents/`:

| Subagent Name | Workspace Mode | Primary Role & Guardrails |
| :--- | :--- | :--- |
| **`epistemic-auditor`** | `inherit` (Read-Only) | Validates $G=1.00$ verbatim citations, Ed25519 signatures, and ethical scoring without write permissions. |
| **`refactor-sentinel`** | `branch` (Isolated) | Enforces 500 LOC Ceiling Law and `compute_*` function naming in isolated Git worktrees. |
| **`docs-sync-agent`** | `inherit` (Read/Write) | Synchronizes `DOCS_REGISTRY` (`app.js`), `sitemap.md`, and changelogs. |

---

## 7. Turnkey Developer Diagnostics

Run the unified agent diagnostic preflight in $<0.3\text{s}$:

```bash
just agent-check
```

This single command executes skill linting, demotion candidate scanning, token budget verification, and manifest parity checks in one pass.
