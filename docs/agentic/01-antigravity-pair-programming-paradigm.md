---
title: 'Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball'
description: How human-agent pair programming with Google Antigravity accelerates
  complex software engineering through planning mode, asynchronous background tasks,
  and human gating.
since_version: v1.0.0
verified_version: v2.16.0
last_verified: 2026-08-24
tags:
- antigravity
- pair-programming
- agentic-workflow
- planning-mode
- subagents
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
invariants:
- inv-workspace-isolation
- inv-hermetic-testing
- inv-mk1-eyeball
- inv-progressive-disclosuredifficulty: Intermediate
read_time: 7 min
---

# Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball

Explore the operational methodology developed during the creation of Credence using **Google Antigravity (AGY)**—combining rigorous planning mode, non-blocking asynchronous task orchestration, and human-in-the-loop review ("Mk1 Eyeball").

> [!IMPORTANT]
> **[Invariant 6: Human Review Before Commits ("Mk1 Eyeball")](../invariants.md#invariant-6)**: Agents must never execute `git commit` or apply infrastructure changes autonomously without presenting live verification results for human approval first.

---

## 1. The Planning Mode Design Pattern

Complex features and architectural refactors should never be written blindly. When a task involves architectural updates or multi-step changes:

1. **Research First**: Explore codebase dependencies without modifying code files.
2. **Author Implementation Plan Artifact**: Create `implementation_plan.md` with:
   - User Review Required items highlighted with GitHub alerts.
   - Exact file-by-file changes (`[MODIFY]`, `[NEW]`, `[DELETE]`).
   - Automated and manual verification plans.
   - Set `RequestFeedback: true` to prompt human review in the IDE.
3. **Wait for Approval**: Execution is blocked until the operator clicks **Proceed**.

---

## 2. Non-Blocking Task Execution & Reactive Messaging

Traditional agent loops frequently fail due to poll-loop timeouts or freezing terminal windows while long tests run. Antigravity introduces asynchronous task backgrounding:

:::tabs
=== Background Command Launch
```bash
# Long-running Playwright browser suite launched asynchronously
pytest tests/test_docs_rendering.py -v
# Returns task ID: task-610 immediately without blocking agent context
```

=== Reactive Notification
```json
{
  "sender": "task-610",
  "priority": "MESSAGE_PRIORITY_HIGH",
  "content": "Task completed: 11 passed in 18.88s"
}
```
:::

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         ASYNCHRONOUS TASK REACTIVE NOTIFICATION FLOW                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Antigravity Agent                  Background Worker                    Developer IDE            │
│        │                                  │                                   │                  │
│        │── launch_command(pytest...) ────▶│                                   │                  │
│        │◀── Returns Task ID (task-610) ───│                                   │                  │
│        │                                  │                                   │                  │
│        │── Update UI status (asynchronous non-blocking turn) ────────────────▶│                  │
│        │                                  │                                   │                  │
│        │                                  │ [Executes in background (18s)]    │                  │
│        │◀── High-Priority Wakeup (11 passed in 18.88s) ───────────────────────│                  │
│        │                                  │                                   │                  │
│        │── Present Walkthrough Artifact & Execution Results ─────────────────▶│                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Declarative Subagent Delegation & Role Specialization

For multi-agent workflows, Credence declares specialized subagents configured with targeted system prompts and scoped permission sets (`credence-agent/templates/subagents/`):

| Subagent Role | Mode | Focus & Key Directives |
| :--- | :--- | :--- |
| **`epistemic-auditor`** | `inherit` (Read-only) | Validates $G=1.00$ verbatim grounding, Ed25519 canonical JSON signatures, and SPJ scoring. |
| **`refactor-sentinel`** | `branch` (Worktree) | Enforces the 500 LOC Ceiling Law, function splitting, and `compute_*` naming standards. |
| **`docs-sync-agent`** | `inherit` (Read/Write) | Synchronizes `DOCS_REGISTRY` (`app.js`), `sitemap.md`, and changelogs. |

---

## 4. Turnkey Developer Preflight Loop

To ensure instantaneous developer feedback, all agentic rules and skill schemas are verified with a sub-second check:

```bash
just agent-check
```

---

## 5. Incremental Atomic Commits & Branch-PR Staging Lifecycle

To prevent high-risk monolithic commits and ensure verifiable step-by-step progress, Credence pair programming follows an **Incremental Commit & Branch-PR Staging Architecture**:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         INCREMENTAL ATOMIC COMMITS & BRANCH-PR STAGING TOPOLOGY                  │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────┬───────────────────────────────┬────────────────────────────────┐   │
│ │ 1. FEATURE BRANCH         │ 2. PULL REQUEST & DEV DEPLOY  │ 3. MAIN MERGE & PROD RELEASE   │   │
│ ├───────────────────────────┼───────────────────────────────┼────────────────────────────────┤   │
│ │ • `just branch feat/...`  │ • `just pr create`            │ • Mk1 Human PR Approval Gate   │   │
│ │ • Atomic Milestone Commits│ • GitHub Actions CI Validation│ • `just pr merge` to `main`    │   │
│ │ • Fast local QA (<20s)    │ • Auto-Deploy to Cloud Run DEV│ • Auto-Deploy Cloud Run PROD   │   │
│ │ • Zero-mock verified state│   (`credence-dev-495173`)     │ • Auto-Deploy Cloudflare Edge  │   │
│ └───────────────────────────┴───────────────────────────────┴────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Core Release Rules:
1. **Commit-as-You-Go**: Changes are committed as discrete, tested units (`just commit "<message>"`) throughout the session after each test gate passes, rather than batched into one massive release commit.
2. **Feature Branch Isolation**: Active development occurs on dedicated feature branches (`just branch <name>`) across all ecosystem repositories.
3. **Automated Dev Cloud Staging**: Opening a Pull Request or pushing new commits automatically triggers `deploy-dev.yml` to deploy live previews to `credence-dev-495173`.
4. **Automated Production Release on Merge**: Merging the PR into `main` automatically triggers `deploy-backend.yml` and `deploy-edge.yml` to deploy to `credence-prod-505902` and Cloudflare Pages.

## 6. Command Approval Bootstrapping & Clean Brain Scratch Invariant

To maximize autonomous pair-programming velocity while safeguarding sovereign user authorization:

1. **Workspace Approval Bootstrapping (`just bootstrap-approvals` & `just bootstrap-approvals-hosted`)**:
   - **Open-Source Core (`just bootstrap-approvals`)**: Runs harmless passes across all standard local developer commands (preflight, parallel check, hermetic unit tests, git/PR inspection) so contributors and forks can authorize autonomous workflows with "Always Allow".
   - **Maintainer Hosted (`just bootstrap-approvals-hosted`)**: Runs harmless passes across Google Cloud Run status/probes, Cloudflare Edge routing, Terraform validation, and direct URL health checks for production maintainers.
2. **Zero-Blob Brain Scratch Scripts (`inv-clean-scratch-scripts`)**: Any custom or exploratory scripts requiring user approval (`BypassSandbox: true`) are written to standalone files in the session artifact brain directory (`<appDataDir>/brain/<conversation-id>/scratch/<name>.py`). Executing the standalone file allows the operator to grant approval once and enables the agent to iterate on script improvements without triggering subsequent approval modals.

> [!TIP]
> Use read-only `epistemic-auditor` subagents when auditing large codebases to prevent polluting the main agent's working context memory.

