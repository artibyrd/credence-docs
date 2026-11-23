---
title: '08. Antigravity Customizations & Repo-Specific Skill Overlays'
description: Adopt the standalone artibyrd/antigravity-customizations plugin suite à la carte and tailor generalized agent workflows to any repository using self-contained .agents/overrides/ skill overlays with zero vendor lock-in.
since_version: v2.22.1
verified_version: v2.22.1
last_verified: 2026-11-23
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

Credence is engineered under a clear portability doctrine: **Optimized for Antigravity, compatible with other harnesses.** Contributors working in **Google Antigravity** enjoy first-class plugin discovery, native lifecycle guardrails, and an optional standalone companion workflow suite ([`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations)). Contributors working in **Claude Code, Cursor, Codex, or OpenHands** receive the exact same Credence invariants, domain skills, and automated verification gates with zero vendor lock-in.

> [!TIP]
> **Want to reuse the generalized workflow suite on your own repositories?** [`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations) is a completely standalone, MIT-licensed, repo-agnostic Antigravity plugin collection (**20 plugins: 18 skills + 2 native hooks**) that works out of the box on any codebase—no Credence dependencies required.

---

## 1. Core Positioning: Optimized for Antigravity, Compatible with Other Harnesses

Many teams fall into one of two traps when scaling AI-assisted engineering: either they hardcode proprietary IDE configs into the repository (locking out contributors on other tools), or they strip away all harness-native capabilities to chase a lowest-common-denominator prompt file.

Credence avoids both traps by enforcing **Four Platform Agnosticism & Zero-Lock-In Guardrails** across `credence`, `credence-docs`, and `credence-agent`:

| Guardrail | Architectural Contract | How It Preserves Zero Lock-In |
| :--- | :--- | :--- |
| **1. Zero Hard Harness Dependency** | Every core Credence invariant is enforced by harness-agnostic Tier 2 code (`just check`, `pytest`, `ruff`, `mypy`, `terraform validate`, git `commit-msg` hook) and open-standard `AGENTS.md`. | `antigravity-customizations` is strictly an *optional companion suite*; `just check` and `just agent-check` pass 100% on machines where neither Antigravity nor `agy` is installed (`agy plugin validate --strict` runs only when `agy` is detected on `PATH`). |
| **2. Self-Contained Overlays** | Every `.agents/overrides/<skill-name>.md` file is written as complete, declarative Credence policy in pure Markdown under `.agents/` (never `.gemini/`). | In Antigravity with `antigravity-customizations`, generalized skills load the overlay automatically. In Claude Code, Cursor, Codex, or OpenHands—or Antigravity without the companion suite—`AGENTS.md` points directly to `.agents/overrides/` as on-demand Credence subsystem rulebooks. |
| **3. Harness-Neutral Invariants** | `AGENTS.md` and [The Invariant Bible](/docs/invariants) never mandate Antigravity-only filesystem paths or proprietary slash commands as hard requirements. | Under [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts), temporary scripts live in *any* off-repo scratch directory (such as Antigravity's session scratch folder or `/tmp/`), never inside tracked repository directories. |
| **4. Open Agent Skills Standard** | Credence's 6 retained domain skills in `credence-agent/skills/` use pure Markdown with strictly `name` and `description` YAML frontmatter. | Conforms to the open Agent Skills specification across Antigravity, Claude Code, Cursor, and Codex; `credence-agent/plugin.json` is merely a thin optional metadata wrapper for native Antigravity plugin discovery. |

### Dual-Harness Resolution Experience

| Capability | Google Antigravity (Native Optimized) | Claude Code / Cursor / Codex / OpenHands |
| :--- | :--- | :--- |
| **Root Invariants (`<800` tokens)** | Loaded from `AGENTS.md` | Loaded from `AGENTS.md` |
| **Credence Domain Skills (6)** | Auto-discovered via `credence-agent/plugin.json` (`skills/`) | Loaded directly from open-standard `credence-agent/skills/*/SKILL.md` |
| **Project Rulebooks & Deltas (6)** | Layered automatically over `antigravity-customizations` | Read on demand from `.agents/overrides/<skill>.md` |
| **Lifecycle Guardrail Hooks** | Native `PreToolUse` (`git-guardrails`) + `PostToolUse`/`Stop` (`workspace-hygiene-hooks`) | Harness-agnostic git `commit-msg` hook + `just check` |
| **Deterministic Verification** | `just check` + optional `agy plugin validate --strict` | `just check` (100% pass without `agy` installed) |

---

## 2. Meet `artibyrd/antigravity-customizations`: 20 Standalone À La Carte Plugins

Rather than coupling general-purpose software engineering workflows (TDD, 3-axis code review, bug diagnosis, PR briefs, release hygiene) to Credence's epistemic auditing repository, those generalized workflows live in [`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations)—a modular, version-controlled library of **20 standalone Google Antigravity plugins** designed for **any** repository.

Every folder under `plugins/` is scoped to one coherent workflow so teams can adopt a 4-plugin starter pack or load all 20 plugins à la carte:

| Plugin Category | Count | Included Plugins |
| :--- | :---: | :--- |
| **Core Lifecycle Skills** | 8 | `domain-modeling` (`GLOSSARY.md` & ADRs), `artifact-governance` (append-only ledgers & off-repo scratch), `plan-model-advisor` (pre-coding model/effort & `/teamwork` brief), `tdd` (two-phase vertical-slice TDD), `code-review` (3-axis parallel diff review), `pr-brief` (visual-first PR bodies & Mk1 checklists), `release-lifecycle` (4-phase release & `/learn`), `knowledge-governance` (`<800`-token `AGENTS.md` & Demotion Highway) |
| **Always-On Guardrail Hooks** | 2 | `git-guardrails` (`PreToolUse` hard-blocking destructive git commands & prompting on push), `workspace-hygiene-hooks` (`PostToolUse` auto-format via `ruff`/`prettier`/`gofmt`/`rustfmt` + `Stop` stray-root-file check) |
| **Situational Diagnostics, Design & Ops Skills** | 10 | `diagnosing-bugs`, `architecture-review` (Deep Modules & hotspot audits), `reality-check-audit` (cross-model adversarial audit), `fresh-reader` (zero-context doc cascade), `writing-for-agents`, `session-handoff`, `bootstrap-approvals` (safe one-pass prefix priming), `repo-bootstrap`, `prototype`, `wizard` |

### Quick Start: Install À La Carte on Any Machine

:::tabs
=== Live Sync via plugins.json (Recommended)
```bash
# 1. Clone the standalone plugin suite once per machine
git clone https://github.com/artibyrd/antigravity-customizations.git ~/Projects/antigravity-customizations
```

Add an absolute path entry to `~/.gemini/config/plugins.json` (use `include_only` to start with a lean 4-plugin Starter Pack, or omit `include_only` to load all 20 plugins):

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
> **Personal preferences stay out of git:** Machine-specific model tier preferences (such as `quality-first`, `balanced`, or `quota-saver` for `plan-model-advisor`) belong in your personal `~/.gemini/GEMINI.md`, never inside a shared repository's `AGENTS.md`.

---

## 3. The Repo-Specific Skill Overlay Pattern (`.agents/overrides/`)

Once a team adopts generalized skills across multiple projects, a classic tension emerges: **how do you enforce repository-specific rules** (like Credence's `compute_*` naming ontology, 7-manifest version synchronization, or strict PR title scopes) **without forking the upstream skill?**

### Why Overlays Beat Shadowing and Wrappers

| Pattern | Mechanism | Verdict |
| :--- | :--- | :--- |
| **Skill Shadowing** | Copy a same-named `SKILL.md` into `.agents/skills/<name>/` to override the global plugin | **Rejected.** Forks upstream logic, blocks improvements from `antigravity-customizations`, and recreates multi-repo drift. |
| **Wrapper Skills** | Create `credence-release`, `credence-architecture`, etc. delegating to general skills | **Rejected.** Doubles always-loaded skill catalog tokens, introduces trigger ambiguity, and creates hard cross-plugin coupling. |
| **Progressive Skill Overlays** | Keep one generalized skill upstream; store thin repo-specific deltas in `.agents/overrides/<skill-name>.md` | **Adopted.** Zero shadowing, zero always-on token cost, 100% platform-agnostic pure Markdown, and actionable standalone. |

### The 3-Section Delta Contract

Any repository tailoring a generalized skill creates `.agents/overrides/<skill-name>.md`—plain Markdown that is **never** named `SKILL.md`, so Antigravity does not index it as a competing skill and it consumes **0 always-on tokens** until needed:

```markdown
# <Skill Name> — <Repo> Project Overlay

## Overrides
- Tighten, relax, or replace specific defaults or thresholds from the base skill.

## Extensions
- Add repo-specific invariants, commands, scripts, or extra verification gates.

## Disabled / Not Applicable
- List optional base-skill steps or artifacts intentionally skipped in this repo.
```

### Two-Layer Discovery Guarantee (Belt + Suspenders)

1. **Upstream Generalized Skills (`antigravity-customizations`):** Customizable core skills (`architecture-review`, `artifact-governance`, `bootstrap-approvals`, `code-review`, `domain-modeling`, `knowledge-governance`, `pr-brief`, `release-lifecycle`, and `tdd`) begin with a single 1-line preflight rule checking `.agents/overrides/<skill-name>.md` and proceeding cleanly when no overlay exists.
2. **Repository `AGENTS.md` (~15 tokens):** A single pointer line instructs *any* agent harness to consult `.agents/overrides/<skill>.md` for project-specific overrides and subsystem guides—guaranteeing discovery even when `antigravity-customizations` is not installed.

---

## 4. Credence Ecosystem Topology: 6 Domain Skills + 6 Self-Contained Overlays

To eliminate 4-way skill drift across repositories and conform to native Antigravity plugin discovery, Credence consolidated its agent instructions into a single canonical source of truth inside `credence-agent`:

### Retained Credence Domain Skills (`credence-agent/skills/`)

Only workflows strictly unique to Credence's epistemic network remain as domain skills:

| Domain Skill | Path | Domain Ownership |
| :--- | :--- | :--- |
| **`invariant-audit`** | `credence-agent/skills/invariant-audit/SKILL.md` | 7-manifest parity, Ed25519 `attestations.json`, Living Canon naming, Tier 2 gates, Autonomous RFC Standards Governance |
| **`epistemic-benchmark`** | `credence-agent/skills/epistemic-benchmark/SKILL.md` | Golden 12 cross-profile evaluation, Gemini 4 / 3.8 `thinkingLevel` calibration, model catalog freshness |
| **`forensic-audit`** | `credence-agent/skills/forensic-audit/SKILL.md` | Cluster swarms (3–6 rules/pass), optional parallel `run_workflow` orchestration, $G=1.00$ DOM grounding, sourcing ratios |
| **`cloudrun-ops`** | `credence-agent/skills/cloudrun-ops/SKILL.md` | GCP Cloud Run compute plane, Workload Identity Federation (WIF), scale-to-zero rollbacks |
| **`mesh-cluster`** | `credence-agent/skills/mesh-cluster/SKILL.md` | 13-node Watts-Strogatz P2P mesh testing, $Q_i$ scoring, Byzantine $3f+1$ cartel isolation |
| **`white-label-ops`** | `credence-agent/skills/white-label-ops/SKILL.md` | Sovereign federation scaffolding (`credence init-org`) and multi-cloud Terraform templates |

### Self-Contained Credence Project Overlays (`credence-agent/overrides/`)

Duplicative generalized skills (`bootstrap-approvals`, `knowledge-governance`, and `architecture-governance`) were retired and replaced with 6 self-contained overlays:

| Overlay File | Tailored Base Skill | Credence-Specific Policy Preserved |
| :--- | :--- | :--- |
| **`architecture-review.md`** | `architecture-review` | `compute_*` naming ontology, subpackage map, Epistemic Lensing, `<credence-badge>` anti-spoofing, Cyan Shield SVG dark tokens, clean URL `HTMLRewriter`, `.ws-scroll-pane` / `:has()`, Deep Modules + `~500 LOC` soft trigger + 1,000-LOC rail |
| **`knowledge-governance.md`** | `knowledge-governance` | 5-level documentation disclosure hierarchy, `since_version`/`verified_version`/`last_verified` frontmatter provenance, `just audit-demotions`, `just challenge-invariant`, demotion test gate |
| **`release-lifecycle.md`** | `release-lifecycle` | 7-manifest `just sync-version`, Ed25519 attestations, `credence-docs/docs/changelog.md` & `docs/roadmap.md`, `deploy-dev.yml` Cloud Run probe, topological `credence-docs → credence-agent → credence` merge order |
| **`pr-brief.md`** | `pr-brief` | Conventional PR title format `[vX.Y.Z] <type>(<scope>): <summary>` and Credence's 6 strict subsystem scopes |
| **`bootstrap-approvals.md`** | `bootstrap-approvals` | Safe read-only `core` vs. `hosted` `Justfile` recipe groupings with zero mutating "Spicy Prefixes" |
| **`domain-modeling.md`** | `domain-modeling` | Direct pointer to Credence's canonical [`terminology-and-ontology-lexicon.md`](/docs/blueprints/terminology-and-ontology-lexicon) alongside lazy `docs/adr/` adoption |

*(Because Credence adopts harness-neutral off-repo scratch scripts under [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts), `artifact-governance` requires no Credence overlay.)*

### Multi-Repo Layout & `.gemini/` Hygiene

* **Umbrella workspace (`credence-ecosystem/`):** Exposes `.agents/overrides -> ../credence-agent/overrides` (symlink) and `.agents/skills.json` pointing to `credence-agent/skills`.
* **Standalone `credence/` clone parity:** Carries a lightweight synced `credence/.agents/overrides/` subset maintained via `just sync-overlays` and verified by a deterministic Tier 2 SHA-256 parity test so standalone `artibyrd/credence` clones work identically without drift.
* **Vendor IDE dotfolder hygiene:** Antigravity `v2.17.0+` moved per-project settings to `<project>/.gemini/config.json`. All three Credence repositories explicitly ignore `.gemini/`, `.vscode/`, `.cursor/`, and `.idea/` in `.gitignore` and enforce a Tier 2 governance gate preventing vendor IDE dotfolders or machine-local home paths from ever entering git history.

---

## 5. Key Workflow Upgrades Adopted from Generalized Patterns

Consolidating overlapping skills also upgraded four core engineering patterns across Credence:

1. **Deep Modules + 1,000-LOC Anti-God-File Rail:** Instead of forcing rigid 500-LOC splits that splinter cohesive logic into shallow wrapper files, Credence adopts Ousterhout Deep Modules with `~500 LOC` as a soft *internal* decomposition trigger inside `architecture-review`, backed by a hard 1,000-LOC anti-god-file safety rail in Tier 2 tests.
2. **Harness-Neutral Off-Repo Scratch Scripts ([`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts)):** Inline shell blobs (`python -c`, `bash -c`) and tracked repo scratch directories remain prohibited, while ad-hoc scripts live cleanly outside git in the harness's session scratch directory (such as Antigravity's `brain/<conversation-id>/scratch/`) or `/tmp/`.
3. **Vertical-Slice TDD Compatibility ([`inv-cart-before-horse`](/docs/invariants#inv-cart-before-horse)):** Shared contracts, schemas, and public test seams are agreed upfront before parallel downstream work; implementation proceeds in thin vertical behavioral slices (red seam test → minimal model + API/UI slice → green) before authoring walkthroughs or case studies.
4. **Dynamic Approval Priming & Native Lifecycle Hooks:** Obsolete subprocess wrapper scripts (`scripts/bootstrap_approvals.py`) are retired in favor of discrete top-level read passes governed by the No-Spicy-Prefixes boundary law, paired with complementary `git-guardrails` and `workspace-hygiene-hooks` plugins alongside Credence's git `commit-msg` hook.

---

## 6. Verification & Diagnostic Gates

Verify skill schemas, overlay parity, `.gemini/` hygiene, and documentation integrity locally in parallel:

```bash
# Run the full parallel pre-commit QA gauntlet (works with or without agy installed)
just check

# Run targeted skill & overlay schema verification
just agent-check
```

| Verification Layer | Target Invariant | Enforcement Mechanism | Scope |
| :--- | :--- | :--- | :--- |
| **Context Economy** | [`inv-progressive-disclosure`](/docs/invariants#inv-progressive-disclosure) | `<800` token ceiling on `AGENTS.md` + 0-token `.agents/overrides/` | All harnesses |
| **Human Authority** | [`inv-mk1-eyeball`](/docs/invariants#inv-mk1-eyeball) | Gated `Justfile` mutators + optional `git-guardrails` hook | All harnesses |
| **Clean Scratch Ritual** | [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts) | Off-repo scratch scripts; zero inline shell blobs or tracked scratch dirs | All harnesses |
| **Vertical-Slice Order** | [`inv-cart-before-horse`](/docs/invariants#inv-cart-before-horse) | Shared contracts & public test seams precede downstream work & case studies | All harnesses |
| **Release & Learning** | [`inv-4phase-release-learning`](/docs/invariants#inv-4phase-release-learning) | Local QA → Dev PR Triad → Mk1 Review → Merge/Prod → `/learn` → Patch | All harnesses |

---

## 7. Related Guides & Blueprints

* 🤖 **[01. Antigravity Pair-Programming Paradigm](/docs/agentic/01-antigravity-pair-programming-paradigm)** — Planning mode, reactive background tasks, and Mk1 Eyeball workflows.
* 📦 **[07. Bootstrapping Agentic Workflows with Universal Invariants](/docs/agentic/07-bootstrapping-agentic-workflows-with-invariants)** — Extracting Credence's portable universal invariants for brand-new repositories.
* 🧠 **[Invariant Scalability & 4-Tier Knowledge Governance](/docs/blueprints/invariant-scalability-and-knowledge-governance)** — Deep architectural specification of the 4-tier taxonomy and overlay model.
* 🛡️ **[Human/Agent Workflow Safety & Justfile Modularization](/docs/blueprints/human-agent-safety-and-justfile-modularization)** — Discrete safe vs. gated recipes, dynamic approval priming, and native hooks.
* 🏛️ **[The Invariant Bible](/docs/invariants)** — Living canon of universal agentic and domain invariants.
