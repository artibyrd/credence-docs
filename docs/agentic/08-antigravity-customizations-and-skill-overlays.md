---
title: '08. Antigravity Customizations & Repo-Specific Skill Overlays'
description: Adopt the standalone artibyrd/antigravity-customizations plugin suite à la carte and tailor generalized agent workflows to any repository using self-contained .agents/overrides/ skill overlays with zero vendor lock-in.
since_version: v2.23.0
verified_version: v2.24.1
last_verified: 2026-11-26
tags:
- agentic
- antigravity
- plugins
- skills
- overlays
- portability
- governance
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
invariants:
- inv-progressive-disclosure
- inv-mk1-eyeball
- inv-clean-scratch-scripts
- inv-cart-before-horse
- inv-4phase-release-learning
difficulty: Intermediate
read_time: 10 min
---

# 08. Antigravity Customizations & Repo-Specific Skill Overlays

![Figure 1.1: Three-layer skill resolution stack combining optional antigravity-customizations plugins, self-contained repository overlays in .agents/overrides/, and harness-agnostic domain skills with Tier 2 enforcement gates](assets/illustrations/antigravity-customizations-overlay-architecture.svg)

Credence follows a clear portability doctrine: **Optimized for Antigravity, compatible with other harnesses.** Contributors working in **Google Antigravity** get first-class plugin discovery, native lifecycle guardrails, and an optional companion workflow suite ([`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations)). Contributors using **Claude Code, Cursor, Codex, or OpenHands** receive the exact same Credence invariants, domain skills, and automated verification gates—with zero vendor lock-in.

> [!TIP]
> **Looking to reuse these workflows on your own projects?** [`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations) is a standalone, MIT-licensed, repository-agnostic plugin collection (**20 plugins: 18 skills and 2 native hooks**) that works out of the box on any codebase with no Credence dependencies.

---

## 1. Core Positioning: Optimized for Antigravity, Compatible with Other Harnesses

Teams scaling AI-assisted engineering often fall into one of two traps: either they bake proprietary IDE configuration into the repository (locking out contributors on other tools), or they strip away harness-native capabilities to chase a lowest-common-denominator prompt file.

Credence avoids both traps with **Four Zero-Lock-In Guardrails** enforced across the core engine, documentation, and agent plugin repositories:

1. **Zero Hard Harness Dependency:** Every core Credence invariant is enforced by harness-agnostic verification—our parallel `just check` suite (pytest, Ruff, Mypy, Terraform validation, and standard Git commit-message hooks) alongside the open `AGENTS.md` contract. The `antigravity-customizations` suite is strictly optional, and local QA passes 100% on machines where Antigravity is not installed (strict plugin schema validation runs automatically only when the `agy` CLI is present).
2. **Self-Contained Overlays:** Every project overlay in `.agents/overrides/` is written as complete, declarative Markdown policy—never placed inside vendor-specific IDE folders. In Antigravity, generalized skills layer the overlay automatically; in Claude Code, Cursor, Codex, or OpenHands, `AGENTS.md` points straight to the same Markdown files as on-demand subsystem rulebooks.
3. **Harness-Neutral Invariants:** Neither `AGENTS.md` nor [The Invariant Bible](/docs/invariants) mandates Antigravity-only filesystem paths or proprietary slash commands. Under [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts), ad-hoc scripts live in *any* off-repo scratch directory—such as Antigravity's session scratch folder or `/tmp/`—keeping tracked repositories clean on every tool.
4. **Open Agent Skills Standard:** Credence's six domain skills use pure Markdown with minimal standard frontmatter (`name` and `description`), conforming to the open Agent Skills specification across harnesses. The `plugin.json` manifest is only a thin optional wrapper enabling native Antigravity plugin discovery.

### How the Experience Compares Across Harnesses

| Capability | Google Antigravity (Native Optimized) | Claude Code / Cursor / Codex / OpenHands |
| :--- | :--- | :--- |
| **Root Invariants** | Compact `<800`-token `AGENTS.md` | Same compact `AGENTS.md` |
| **Credence Domain Skills (6)** | Auto-discovered via `credence-agent/plugin.json` | Loaded directly from open-standard Markdown skills |
| **Project Overlays (6)** | Layered automatically over generalized skills | Read on demand from `.agents/overrides/` |
| **Lifecycle Guardrails** | Native pre/post tool hooks plus Git hooks | Standard Git commit hooks plus `just check` |
| **Deterministic Verification** | `just check` plus optional strict plugin check | `just check` (100% pass without `agy` installed) |

---

## 2. Meet `artibyrd/antigravity-customizations`: 20 Standalone À La Carte Plugins

General-purpose engineering workflows—like vertical-slice TDD, multi-axis code review, structured bug diagnosis, and visual PR briefs—do not belong coupled to Credence's epistemic auditing engine. Instead, they live in [`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations), a modular library of **20 standalone Antigravity plugins** built for **any** repository.

Each plugin lives in its own folder under `plugins/` and owns one coherent workflow, so you can adopt a lean 4-plugin starter pack or load the full catalog à la carte.

### Core Development Lifecycle (8 Skills)

| Plugin | What It Does |
| :--- | :--- |
| `domain-modeling` | Sharpens ubiquitous language, maintains a lightweight domain glossary, and records architectural decision records. |
| `artifact-governance` | Enforces append-only implementation plans and walkthroughs while keeping temporary scratch scripts off-repo. |
| `plan-model-advisor` | Recommends optimal model tiers, reasoning effort, and multi-agent swarm layouts before implementation starts. |
| `tdd` | Drives two-phase vertical-slice test-driven development against pre-agreed public seams and offline boundaries. |
| `code-review` | Runs a three-axis parallel diff review covering engineering standards, spec fidelity, and security boundaries. |
| `pr-brief` | Drafts visual-first pull request summaries with before/after evidence, blast radius, and human review checklists. |
| `release-lifecycle` | Guides the four-phase release flow from local QA and dev verification through release tags and `/learn` retrospectives. |
| `knowledge-governance` | Keeps `AGENTS.md` under its 800-token ceiling using the Demotion Highway and structured admission gates. |

### Always-On Guardrail Hooks (2 Hooks)

| Plugin | What It Does |
| :--- | :--- |
| `git-guardrails` | Intercepts destructive Git commands before execution and prompts for confirmation prior to pushes. |
| `workspace-hygiene-hooks` | Auto-formats edited files with the repo's native formatter (Ruff, Prettier, gofmt, or rustfmt) and flags stray root files on turn end. |

### Diagnostics, Design & Repository Operations (10 Skills)

| Plugin | What It Does |
| :--- | :--- |
| `diagnosing-bugs` | Runs a six-phase root-cause loop: minimal reproduction, ranked falsifiable hypotheses, targeted logging, and seam regression tests. |
| `architecture-review` | Audits codebases for Ousterhout Deep Modules, interface trade-offs, and oversized files needing internal decomposition. |
| `reality-check-audit` | Performs an adversarial cross-model assessment hunting mocked telemetry, doc-to-code drift, and governance bloat. |
| `fresh-reader` | Audits documentation across four reader personas—from newcomer to domain expert—to eliminate curse-of-knowledge gaps. |
| `writing-for-agents` | Provides style and structure principles for concise, high-signal agent instructions, skills, and plugin specs. |
| `session-handoff` | Compacts a long conversation into a crisp, zero-fluff handoff brief for fresh sessions or cross-model continuations. |
| `bootstrap-approvals` | Dynamically discovers safe read-only workspace commands for one-pass approval priming with zero mutating prefixes. |
| `repo-bootstrap` | Interactively scaffolds a lean `AGENTS.md`, modular `Justfile`, and governance starter layout for new repositories. |
| `prototype` | Builds throwaway interactive HTML demos to test state models or compare UI variations before committing to production code. |
| `wizard` | Generates step-by-step interactive bash wizards for manual tasks only a human can perform, such as provisioning secrets. |

### Quick Start: Install À La Carte on Any Machine

:::tabs
=== Live Sync via plugins.json (Recommended)
```bash
# 1. Clone the standalone plugin suite once per machine
git clone https://github.com/artibyrd/antigravity-customizations.git ~/Projects/antigravity-customizations
```

Add an absolute path entry to `~/.gemini/config/plugins.json`. Use `include_only` to start with a lean 4-plugin Starter Pack, or omit `include_only` to load all 20 plugins:

```json
{
  "entries": [
    {
      "path": "/home/<you>/Projects/antigravity-customizations/plugins",
      "include_only": [
        "plan-model-advisor",
        "tdd",
        "code-review",
        "git-guardrails"
      ]
    }
  ]
}
```

=== Single Plugin via agy CLI
```bash
# Copy a single standalone plugin without editing plugins.json
cd ~/Projects/antigravity-customizations
agy plugin install ./plugins/plan-model-advisor
```
:::

> [!NOTE]
> **Personal preferences stay out of Git:** Machine-specific model tier preferences (such as quality-first, balanced, or quota-saver routing for `plan-model-advisor`) belong in your personal `~/.gemini/GEMINI.md`, never inside a shared repository's `AGENTS.md`.

---

## 3. The Repo-Specific Skill Overlay Pattern (`.agents/overrides/`)

Once a team adopts generalized skills across multiple projects, a classic tension emerges: **how do you enforce repository-specific rules**—like Credence's naming ontology, 7-manifest version parity, or strict PR title scopes—**without forking the upstream skill?**

### Why Overlays Beat Shadowing and Wrappers

| Pattern | Mechanism | Verdict |
| :--- | :--- | :--- |
| **Skill Shadowing** | Copy a same-named `SKILL.md` into the repo to override the global plugin. | **Rejected.** Forks upstream logic, blocks future improvements, and reintroduces cross-repo drift. |
| **Wrapper Skills** | Create project-prefixed wrapper skills that delegate to general ones. | **Rejected.** Doubles always-loaded catalog tokens, creates trigger ambiguity, and couples plugins tightly. |
| **Progressive Skill Overlays** | Keep one generalized skill upstream; place thin repo-specific deltas in `.agents/overrides/<skill-name>.md`. | **Adopted.** Zero shadowing, zero always-on token cost, pure Markdown, and actionable standalone on any harness. |

### The 3-Section Delta Contract

Any repository customizing a generalized skill adds a plain Markdown file at `.agents/overrides/<skill-name>.md`. Because it is **never** named `SKILL.md`, Antigravity will not index it as a competing skill, and it consumes **zero always-on tokens** until loaded:

```markdown
# <Skill Name> — <Repo> Project Overlay

## Overrides
- Tighten, relax, or replace specific defaults or thresholds from the base skill.

## Extensions
- Add repo-specific invariants, commands, scripts, or extra verification gates.

## Disabled / Not Applicable
- List optional base-skill steps or artifacts intentionally skipped in this repo.
```

### Two-Layer Discovery Guarantee (Belt and Suspenders)

1. **Upstream Preflight Check:** Nine core skills in `antigravity-customizations`—covering architecture, TDD, code review, PR briefs, releases, domain modeling, artifacts, knowledge governance, and command approvals—open with a 1-line preflight checking for `.agents/overrides/<skill-name>.md` and proceeding normally when none exists.
2. **Repository `AGENTS.md` Pointer (~15 tokens):** A single pointer line tells *any* agent harness to consult `.agents/overrides/` for project-specific overrides and subsystem rulebooks—guaranteeing discovery even when `antigravity-customizations` is not installed.

---

## 4. Credence Ecosystem Topology: 6 Domain Skills + 6 Self-Contained Overlays

To eliminate four-way skill drift across repositories and align with native Antigravity plugin discovery, Credence consolidated its agent instructions into a single canonical source of truth inside `credence-agent`.

### Retained Credence Domain Skills

Only workflows unique to Credence's epistemic network remain as domain skills under `credence-agent/skills/<skill-name>/SKILL.md`:

| Domain Skill | Domain Ownership |
| :--- | :--- |
| `invariant-audit` | Enforces 7-manifest version parity, Ed25519 doc attestations, Living Canon naming, Tier 2 gates, and autonomous RFC governance. |
| `epistemic-benchmark` | Runs the Golden 12 cross-profile evaluation suite, calibrates Gemini 4 and 3.8 thinking levels, and audits model catalog freshness. |
| `forensic-audit` | Drives multi-pass cluster swarms (with optional parallel workflow orchestration), verbatim DOM grounding ($G=1.00$), and sourcing ratios. |
| `cloudrun-ops` | Manages the Google Cloud Run compute plane, Workload Identity Federation authentication, and scale-to-zero rollbacks. |
| `mesh-cluster` | Operates local 13-node Watts-Strogatz P2P mesh simulations, node quality scoring ($Q_i$), and Byzantine cartel isolation. |
| `white-label-ops` | Scaffolds sovereign federation organizations via `credence init-org` and validates multi-cloud Terraform templates. |

### Self-Contained Credence Project Overlays

Three duplicative generalized skills were retired and replaced with six self-contained overlays under `credence-agent/overrides/` (each named after the base skill it tailors):

| Overlay File | Credence-Specific Policy Preserved |
| :--- | :--- |
| `architecture-review.md` | Pure calculation naming ontology, subpackage layout, Epistemic Lensing UX, embeddable badge anti-spoofing, dark-theme SVG design tokens, edge URL rewriting, and the Deep Modules 500-LOC soft trigger with a 1,000-LOC safety rail. |
| `knowledge-governance.md` | Five-level documentation disclosure hierarchy, frontmatter version provenance fields, demotion audits, invariant challenge workflows, and Tier 2 demotion test gates. |
| `release-lifecycle.md` | Seven-manifest version sync, Ed25519 attestation signing, changelog and roadmap symmetry, live Dev Cloud Run probes, and strict topological multi-repo merge ordering. |
| `pr-brief.md` | Release-tagged conventional PR titles (`[vX.Y.Z] <type>(<scope>): <summary>`) and Credence's six strict subsystem scopes. |
| `bootstrap-approvals.md` | Safe read-only core versus hosted `Justfile` recipe groupings with zero mutating prefixes. |
| `domain-modeling.md` | Direct pointer to Credence's canonical [Terminology & Ontology Lexicon](/docs/blueprints/terminology-and-ontology-lexicon) alongside lazy adoption of architectural decision records. |

*(Because Credence adopts harness-neutral off-repo scratch scripts under [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts), the `artifact-governance` skill works out of the box with no Credence overlay.)*

### Multi-Repo Layout & Vendor IDE Hygiene

* **Umbrella workspace (`credence-ecosystem/`):** Exposes `.agents/overrides` as a symlink to `credence-agent/overrides` and points `.agents/skills.json` directly at `credence-agent/skills`.
* **Standalone `credence/` clone parity:** Carries a lightweight synced `credence/.agents/overrides/` subset updated via `just sync-overlays` and verified by a deterministic Tier 2 SHA-256 parity test—ensuring standalone clones behave identically without drift.
* **Vendor IDE dotfolder hygiene:** Starting with Antigravity v2.17.0, per-project settings moved to `<project>/.gemini/config.json`. All three Credence repositories explicitly ignore Antigravity's `.gemini/` directory alongside other editor folders (such as VS Code, Cursor, and JetBrains) in `.gitignore`, backed by a Tier 2 gate blocking IDE config directories and machine-local home paths from ever entering Git history.

---

## 5. Key Workflow Upgrades Adopted from Generalized Patterns

Consolidating overlapping skills also upgraded four foundational engineering practices across Credence:

1. **Deep Modules & 1,000-LOC Anti-God-File Rail:** Instead of forcing rigid 500-LOC splits that fracture cohesive logic into shallow wrapper files, Credence adopts Ousterhout Deep Modules—keeping ~500 LOC as a soft *internal* decomposition trigger during architecture reviews, backed by a hard 1,000-LOC safety rail in Tier 2 tests.
2. **Harness-Neutral Off-Repo Scratch Scripts ([`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts)):** Inline shell one-liners (such as `python -c` or `bash -c`) and tracked scratch folders inside repos remain forbidden, while ad-hoc scripts live cleanly outside Git in the harness's session scratch directory or `/tmp/`.
3. **Vertical-Slice TDD Compatibility ([`inv-cart-before-horse`](/docs/invariants#inv-cart-before-horse)):** Shared contracts, schemas, and public test seams are agreed upfront before parallel work begins; implementation proceeds in thin vertical behavioral slices—failing seam test, minimal slice, green—before writing walkthroughs or case studies.
4. **Dynamic Approval Priming & Native Lifecycle Hooks:** Obsolete subprocess wrapper scripts are retired in favor of discrete top-level read passes governed by the No-Spicy-Prefixes boundary law, paired with optional `git-guardrails` and `workspace-hygiene-hooks` plugins alongside Credence's standard Git commit-message hook.

---

## 6. Verification & Diagnostic Gates

Verify skill schemas, overlay parity, vendor IDE hygiene, and documentation integrity locally in parallel:

```bash
# Run the full parallel pre-commit QA gauntlet (works with or without agy installed)
just check

# Run targeted skill and overlay schema verification
just agent-check
```

| Verification Layer | Target Invariant | Enforcement Mechanism | Scope |
| :--- | :--- | :--- | :--- |
| **Context Economy** | [`inv-progressive-disclosure`](/docs/invariants#inv-progressive-disclosure) | Under-800-token `AGENTS.md` ceiling and zero-token overlays | All harnesses |
| **Human Authority** | [`inv-mk1-eyeball`](/docs/invariants#inv-mk1-eyeball) | Gated `Justfile` mutators and optional Git guardrail hooks | All harnesses |
| **Clean Scratch Ritual** | [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts) | Off-repo scratch scripts with zero inline blobs or tracked scratch folders | All harnesses |
| **Vertical-Slice Order** | [`inv-cart-before-horse`](/docs/invariants#inv-cart-before-horse) | Shared contracts and public test seams precede downstream work and studies | All harnesses |
| **Release & Learning** | [`inv-4phase-release-learning`](/docs/invariants#inv-4phase-release-learning) | Local QA → Dev PR Triad → Mk1 Review → Merge/Prod → `/learn` → Patch | All harnesses |

---

## 7. Related Guides & Blueprints

* 🤖 **[01. Antigravity Pair-Programming Paradigm](/docs/agentic/01-antigravity-pair-programming-paradigm)** — Planning mode, reactive background tasks, and Mk1 Eyeball workflows.
* 📦 **[07. Bootstrapping Agentic Workflows with Universal Invariants](/docs/agentic/07-bootstrapping-agentic-workflows-with-invariants)** — Extracting Credence's portable universal invariants for brand-new repositories.
* 🧠 **[Invariant Scalability & 4-Tier Knowledge Governance](/docs/blueprints/invariant-scalability-and-knowledge-governance)** — Deep architectural specification of the 4-tier taxonomy and overlay model.
* 🛡️ **[Human/Agent Workflow Safety & Justfile Modularization](/docs/blueprints/human-agent-safety-and-justfile-modularization)** — Discrete safe vs. gated recipes, dynamic approval priming, and native hooks.
* 🏛️ **[The Invariant Bible](/docs/invariants)** — Living canon of universal agentic and domain invariants.
