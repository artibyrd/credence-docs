---
title: Human/Agent Workflow Safety & Justfile Modularization
description: Architectural blueprint for safe autonomous agent pairing, discrete Justfile recipe topologies, parallel QA gates, and brain scratch script execution.
since_version: v2.13.0
verified_version: v2.23.0
last_verified: 2026-11-23
---

# Human/Agent Workflow Safety & Justfile Modularization

## 1. The Human/Agent Workflow Safety Paradox

Autonomous AI coding agents operate at extreme velocity, executing hundreds of file reads, refactors, and test runs in minutes. However, pairing an autonomous agent with a human developer introduces an operational paradox:

1. **Velocity Demand**: Routine, non-destructive tasks (linting, hermetic unit tests, git status inspection, documentation integrity checks) should execute seamlessly without prompting the developer for permission on every invocation.
2. **Sovereign Custody Demand ([`inv-mk1-eyeball`](/docs/invariants#inv-mk1-eyeball))**: Mutating actions with real-world consequences (git commits, branch creations, pull request merges, version tags, and cloud deployments) **must never execute without explicit human authorization**.

### Operational Safety Domains

| Safety Domain | Approval Status | Typical Workflows | Invariant Guardrail |
| :--- | :--- | :--- | :--- |
| **Autonomous Zone** | Pre-Approved / Always Allow | `just lint`, `just format`, `just test-unit`, `just test-docs`, `just status`, `just git-diff`, `just cloud-status`, `just cloud-probe`, off-repo scratch scripts | 100% Read-Only, Hermetic, Zero Destructive Drift |
| **Human Review Gate** | Gated / Manual Mk1 Sign-Off | `just branch <name>`, `just commit <msg>`, `just pr-create <title>`, `just pr-merge`, `just cloud-deploy-prod`, `just cloud-rollback`, `just release <ver> <msg>` | [`inv-mk1-eyeball`](/docs/invariants#inv-mk1-eyeball), Commit-Before-Deploy, Sovereign Human Authority |

---

## 2. The Parameterization Anti-Pattern & Discrete Recipe Decoupling

In earlier iterations of developer tooling, commands were often overloaded into single parameterized recipes, for example:

```bash
# Obsolete Parameterized Pattern (Vulnerable to Permission Bleed)
just git-sync action="status"   # Safe (Read-only)
just git-sync action="commit"   # High-Stakes (Mutation)
```

Because command approval engines in agentic IDEs match command line prefixes (e.g. approving `just git-sync` auto-authorizes future `just git-sync ...`), granting approval for status inspection inadvertently authorized the agent to execute ungated commits and pushes.

Credence resolves this via **Discrete Recipe Decoupling**:

### Discrete Recipe Matrix

* **`[vcs: safe]` (Read-Only Inspection)**: `just status`, `just git-diff`, `just git-log`, `just git-branches`, `just pr-status`, `just pr-view`, `just pr-checks`.
* **`[vcs: gated]` (High-Stakes Mutation)**: `just branch <name>`, `just commit <msg>`, `just pr-create <title>`, `just pr-merge`, `just git-tag`, `just git-push`.
* **`[hosted: safe]` (Read-Only Telemetry)**: `just cloud-status`, `just cloud-logs`, `just cloud-probe`, `just edge-status`, `just ci-status`, `just tf-validate`, `just tf-plan`, `just doctor`.
* **`[hosted: gated]` (Cloud Mutation & Deployment)**: `just cloud-deploy-dev`, `just cloud-deploy-prod`, `just cloud-rollback`, `just edge-deploy`, `just tf-apply`.

---

## 3. Sub-300 LOC Modular Justfile Architecture

Pairing **Ousterhout Deep Modules** (`~500 LOC` soft internal decomposition trigger, 1,000-LOC anti-god-file rail) with clean separation between open-source contributor workflows and maintainer-specific cloud deployment pipelines, the Justfile suite is partitioned into 6 focused modules:

| Modular Justfile Module | Purpose & Contained Recipes | Max Permitted Lines |
| :--- | :--- | :---: |
| `Justfile` | Root entrypoint with modern settings & imports | `< 30 LOC` |
| `just/preflight.just` | Toolchain CLI verification & environment checks | `< 120 LOC` |
| `just/quality.just` | Parallel check, static analysis, unit suites | `< 110 LOC` |
| `just/engine.just` | Local servers, web preview, seeds, mesh cluster | `< 220 LOC` |
| `just/vcs.just` | Safe git inspection & gated PR triad lifecycle | `< 140 LOC` |
| `just/cloud.just` | Cloud Run compute, Cloudflare Edge, Terraform | `< 240 LOC` |
| `just/release.just` | 7-Manifest version sync & atomic releases | `< 60 LOC` |

Forks and open-source contributors can clone the repository, run `just check`, `just dev`, `just preview`, and `just test-unit` locally without requiring GCP or Cloudflare credentials.

---

## 4. Parallel QA Execution Engine (`[parallel]`)

Pre-commit validation latency is a primary source of cognitive friction. Utilizing Just 1.58.0's native `[parallel]` recipe attribute, the `just check` gauntlet executes static analysis, type checking, hermetic unit tests, documentation integrity tests, Terraform validation, and Antigravity workspace health checks **concurrently across all available CPU cores**:

```just
[group('core: quality')]
[parallel]
check: lint test-unit test-docs tf-validate agent-check
    @echo -e "\033[1;32m🎉 Complete Multi-Plane QA Verification Passed Cleanly in Parallel!\033[0m"
    @echo -e "\033[1;36m💡 NEXT STEP: If on a feature branch, run 'just sync-version <vX.Y.Z>' and 'just pr-create <title>'.\033[0m"
```

* **Sequential Execution**: ~8–12 seconds.
* **Parallel Execution (`[parallel]`)**: **<3.0 seconds**.

---

## 5. Harness-Neutral Off-Repo Scratch Invariant ([`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts))

When an agent needs to execute an ad-hoc Python or bash script, sending multi-line inline blobs (`python -c "..."`, `bash -c "..."`) or writing throwaway files into the tracked repository root creates severe usability and hygiene failures:
1. **Unreadable Modal UI**: Long escaped strings flood IDE approval dialogs, making forensic human review impossible.
2. **Approval Cache Invalidation**: Any single-character edit changes the command string, re-prompting the user for approval on every iteration.
3. **Git Working-Tree Pollution**: Manual repo-root `/scratch/` directories risk accidental commits and lock workflows into a single harness convention.

Under [`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts), all temporary scripts MUST be written outside the git working tree—either in your agent harness's off-repo session scratch directory (e.g., Antigravity's `<appDataDir>/brain/<conversation-id>/scratch/<name>.py`) or `/tmp/<name>.py`—never inside tracked repository directories:

```bash
# Canonical Harness-Neutral Pattern (outside git working tree)
python3 /tmp/<name>.py
# Or inside an Antigravity session scratch folder:
python3 <appDataDir>/brain/<conversation-id>/scratch/<name>.py
```

* **Zero Repo Pollution**: Keeps the git working tree 100% clean across Antigravity, Claude Code, Cursor, and Codex.
* **Single-Approval Iteration**: The human developer previews and approves the standalone script path cleanly without unreadable inline blobs.

---

## 6. Dynamic Command Approval Priming (`bootstrap-approvals`) & Native Lifecycle Hooks

When setting up a fresh development workspace or resetting IDE command approval caches, wrapper scripts (such as the retired `scripts/bootstrap_approvals.py`) fail because IDE approval caches only inspect top-level tool calls and ignore subprocess invocations hidden inside helper scripts (**Subprocess Isolation**).

Credence replaces static wrapper scripts with a complementary, zero-lock-in combination of dynamic approval priming and native lifecycle hooks (see **[08. Antigravity Customizations & Skill Overlays](../agentic/08-antigravity-customizations-and-skill-overlays.md)**):

### 1. Dynamic `bootstrap-approvals` Skill + Credence Scope Overlay
* **Dynamic Workspace Discovery:** The optional `bootstrap-approvals` plugin from [`artibyrd/antigravity-customizations`](https://github.com/artibyrd/antigravity-customizations) discovers safe, read-only commands dynamically and presents a **Mandatory Confirmation Table** before executing discrete top-level shell passes one by one so the operator can click **"Always Allow"** once per safe prefix.
* **Credence Scope Overlay (`.agents/overrides/bootstrap-approvals.md`):** Documents Credence's safe read-only `core` (fork-safe local QA, `just check`, `just lint`, `just test-unit`, `just test-docs`, `just status`, `just git-diff`) versus `hosted` (maintainer read-only telemetry: `just cloud-status`, `just edge-status`, `just tf-validate`, `just doctor`, `just cloud-probe`) `Justfile` recipe groupings—strictly enforcing zero mutating **"Spicy Prefixes"** (never priming `git checkout`, `git branch`, `gh pr`, `poetry version`, `poetry run`, or bare `curl`).

### 2. Complementary Native Antigravity Hooks + Git `commit-msg` Hook
Credence pairs optional native Antigravity lifecycle hook plugins with its harness-agnostic git hook so safety works across every environment:

| Guardrail Layer | Hook Lifecycle / Mechanism | Enforcement Behavior | Harness Scope |
| :--- | :--- | :--- | :--- |
| **`git-guardrails`** | Antigravity `PreToolUse` | Hard-blocks (`deny`) destructive git ops (`push --force`, `reset --hard`, `clean -f`, `branch -D`, `checkout .`, `restore .`) and forces interactive confirmation (`force_ask`) on standard `git push`. | Optional Antigravity plugin |
| **`workspace-hygiene-hooks`** | Antigravity `PostToolUse` & `Stop` | Auto-formats edited workspace files via `ruff`/`prettier`/`gofmt`/`rustfmt` after writes and checks for stray root files before finishing a turn. | Optional Antigravity plugin |
| **`credence-agent/scripts/install_hooks.py`** | Standard Git `commit-msg` hook | Enforces Credence's conventional commit format and 6 subsystem scopes (`governance`, `forensics`, `mesh`, `crypto`, `ui`, `ops`). | Universal (all harnesses & terminals) |

---

## 7. Authentication Freshness Verification (`auth-check`)

Traditional `preflight` checks only verify binary existence in `$PATH` and read static configuration files without actively testing whether OAuth tokens, browser sessions, or API keys are warm and unexpired.

Credence introduces the parameterized `auth-check target="all"` gate in `just/preflight.just`:

```bash
# Verify all ecosystem authentication sessions
just auth-check all

# Targeted authentication checks
just auth-check gh         # GitHub CLI OAuth session
just auth-check gcloud     # Google Cloud token freshness (gcloud auth print-access-token)
just auth-check wrangler   # Cloudflare Edge token/session (npx wrangler whoami)
just auth-check docker     # Docker daemon connectivity
just auth-check env        # LLM API keys (GEMINI_API_KEY, etc.)
```

### Dependency Injection Across Justfiles
Downstream mutating recipes declare their exact authentication prerequisites as recipe parameters:
* `pr-create` / `pr-merge` / `branch-protect`: `(preflight "gh") (auth-check "gh")`
* `cloud-deploy-dev` / `cloud-deploy-prod` / `cloud-rollback`: `(preflight "gcloud") (auth-check "gcloud")`
* `edge-deploy`: `(preflight "wrangler") (auth-check "wrangler")`
* `release`: `(auth-check "gh")`

---

## 8. The Prefix-Safe Command Boundary Law ("No Spicy Prefixes")

The Antigravity IDE approval gate evaluates agent commands by **`binary subcommand` prefix matching**. When a user selects *"Always Allow"* for `blaze build`, the engine auto-approves all subsequent invocations matching the `blaze build` prefix.

### The Spicy Prefix Hazard
If a broad prefix like `gcloud config` or `rm` is approved, the prefix match inadvertently authorizes destructive or state-mutating subcommands (such as `gcloud config set project <prod>` or `rm -rf <path>`).

### Architectural Safeguard
1. **Zero Raw Cloud Mutators**: Raw cloud management commands are strictly barred from auto-approvable catalogs.
2. **Encapsulation in Read-Only Recipes**: Cloud telemetry and auth inspections must be encapsulated inside structured, read-only Justfile recipes (e.g. `just auth-check gcloud` or `just cloud-status`) that cannot be hijacked to run arbitrary cloud mutations.
3. **Hermetic Command Shapes**: All cataloged shapes outside `just` must be pure read operations (`git status -s`, `git diff --stat`, `grep -i ...`)—never broad or mutating prefixes such as `git checkout`, `git branch`, `gh pr`, `poetry version`, `poetry run`, or bare `curl`.

---

## 9. Continuous Bootstrap Trajectory Harvest in the Learning Lifecycle

The approval scope overlay evolves alongside developer patterns during the **4-Phase Release & Lean Learning Lifecycle** (`/learn`):

| Bootstrap Approval Phase | System Action | Safety Verification Rule |
| :--- | :--- | :--- |
| **1. Session Trajectory Audit** | Scans session tool-call history | Identifies recurring read-only operator approval shapes |
| **2. Prefix-Safe Filtering** | Validates binary subcommand prefix | Enforces strict No-Spicy-Prefixes read-only boundary |
| **3. Overlay Synchronization** | Updates `.agents/overrides/bootstrap-approvals.md` | Keeps `core` vs. `hosted` `Justfile` groupings accurate without wrapper scripts |

During each `/learn` retrospective, the agent audits recurring safe read-only `Justfile` recipes and updates `.agents/overrides/bootstrap-approvals.md` rather than duplicating upstream skill logic.

---

## 10. Multi-Plane Live Deployment & Telemetry Topology

Credence strictly isolates preview staging from production baselines across all three planes:

| Plane / Layer | Dev Preview Surface | Production Baseline Surface | Governance Contract |
| :--- | :--- | :--- | :--- |
| **Compute Plane** | Cloud Run Dev (`credence-dev-495173`) | Cloud Run Prod (`credence-prod-505902`) | Least-privilege WIF service account isolation |
| **Edge Plane** | `https://dev.credence.run` | `https://credence.run` | Cloudflare Worker dynamic origin routing |
| **Documentation** | `https://dev.credence-docs.pages.dev` | `https://docs.credence.run` | Cloudflare Pages branch deployments (`--branch=dev` vs `main`) |
