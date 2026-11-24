---
title: 'Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball'
description: How human-agent pair programming with Google Antigravity accelerates
  complex software engineering through planning mode, asynchronous background tasks,
  and human gating.
since_version: v1.0.0
verified_version: v2.23.0
last_verified: 2026-11-23
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
- inv-progressive-disclosure
difficulty: Intermediate
read_time: 7 min
---

# Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball

Explore the operational methodology developed during the creation of Credence using **Google Antigravity (AGY)**—combining rigorous planning mode, non-blocking asynchronous task orchestration, and human-in-the-loop review ("Mk1 Eyeball"). Credence is **optimized for Antigravity and compatible with other harnesses** (Claude Code, Cursor, Codex, and OpenHands).

> [!TIP]
> **Reusable Plugins & Repo Overlays:** Looking for the standalone 20-plugin Antigravity workflow suite (`artibyrd/antigravity-customizations`) or Credence's harness-agnostic `.agents/overrides/` skill overlay pattern? See **[08. Antigravity Customizations & Skill Overlays](08-antigravity-customizations-and-skill-overlays.md)**.

> [!IMPORTANT]
> **[The Invariant Bible: Human Review Before Commits ("Mk1 Eyeball")](../invariants.md#invariant-6)**: Agents must never execute `git commit` or apply infrastructure changes autonomously without presenting live verification results for human approval first.

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
pytest tests/governance/test_docs_rendering.py -v
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

### Asynchronous Task Reactive Notification Flow

| Step | Initiator | Recipient | Action / Event Payload | Operational Mode |
| :---: | :--- | :--- | :--- | :--- |
| **1** | Antigravity Agent | Background Worker | `launch_command(pytest...)` | Non-blocking dispatch |
| **2** | Background Worker | Antigravity Agent | Returns Task ID (`task-610`) | Immediate return |
| **3** | Antigravity Agent | Developer IDE | Update UI status | Non-blocking turn completion |
| **4** | Background Worker | *(Worker Process)* | Executes test suite in background | ~18s in-memory execution |
| **5** | Background Worker | Antigravity Agent | High-Priority Wakeup (`11 passed in 18.88s`) | Reactive wakeup (zero polling) |
| **6** | Antigravity Agent | Developer IDE | Present Walkthrough Artifact & Results | Final turn presentation |

---

## 3. Declarative Subagent Delegation & Role Specialization

For multi-agent workflows, Credence declares specialized subagents configured with targeted system prompts and scoped permission sets (`credence-agent/templates/subagents/`):

| Subagent Role | Mode | Focus & Key Directives |
| :--- | :--- | :--- |
| **`epistemic-auditor`** | `inherit` (Read-only) | Validates $G=1.00$ verbatim grounding, Ed25519 canonical JSON signatures, and SPJ scoring. |
| **`refactor-sentinel`** | `branch` (Worktree) | Enforces Ousterhout Deep Modules (`~500 LOC` soft trigger, 1,000-LOC anti-god-file rail) and `compute_*` naming standards. |
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

| Stage 1: Feature Branch | Stage 2: Pull Request & Dev Deploy | Stage 3: Main Merge & Prod Release |
| :--- | :--- | :--- |
| Create isolated branch (`just branch feat/...`) | Open staged PR (`just pr-create`) | Mk1 Human PR Approval Gate ([`inv-mk1-eyeball`](/docs/invariants#inv-mk1-eyeball)) |
| Atomic milestone commits (`just commit`) | GitHub Actions CI validation | Merge to `main` (`just pr-merge`) |
| Fast local QA (`just check`, `<20s`) | Auto-deploy to Cloud Run DEV (`credence-dev-495173`) | Auto-deploy Cloud Run PROD (`credence-prod-505902`) |
| Zero-mock verified state | Live preview verification | Auto-deploy Cloudflare Edge & Pages |

### Core Release Rules:
1. **Commit-as-You-Go**: Changes are committed as discrete, tested units (`just commit "<message>"`) throughout the session after each test gate passes, rather than batched into one massive release commit.
2. **Feature Branch Isolation**: Active development occurs on dedicated feature branches (`just branch <name>`) across all ecosystem repositories.
3. **Automated Dev Cloud Staging**: Opening a Pull Request or pushing new commits automatically triggers `deploy-dev.yml` to deploy live previews to `credence-dev-495173`.
4. **Automated Production Release on Merge**: Merging the PR into `main` automatically triggers `deploy-backend.yml` and `deploy-edge.yml` to deploy to `credence-prod-505902` and Cloudflare Pages.

## 6. Dynamic Approval Priming, Hooks & Off-Repo Scratch Scripts

To maximize autonomous pair-programming velocity while safeguarding sovereign user authorization:

1. **Dynamic Approval Priming (`bootstrap-approvals` + `.agents/overrides/bootstrap-approvals.md`)**:
   - Instead of static wrapper scripts (which break IDE command-prefix caching), the optional [`bootstrap-approvals`](08-antigravity-customizations-and-skill-overlays.md) plugin dynamically discovers safe read-only commands, consults `.agents/overrides/bootstrap-approvals.md` for Credence's `core` vs. `hosted` `Justfile` groupings, and runs discrete top-level read passes under the strict **No-Spicy-Prefixes** boundary law.
   - Optional native Antigravity hook plugins (`git-guardrails` and `workspace-hygiene-hooks`) complement Credence's harness-agnostic git `commit-msg` hook (`credence-agent/scripts/install_hooks.py`) by hard-blocking destructive git operations and auto-formatting edited files.
2. **Harness-Neutral Off-Repo Scratch Scripts ([`inv-clean-scratch-scripts`](/docs/invariants#inv-clean-scratch-scripts))**: Ad-hoc exploratory scripts are never executed as inline shell blobs (`python -c`, `bash -c`) and never placed inside tracked repository directories. Write standalone files outside the git working tree—in your agent harness's session scratch directory (e.g., Antigravity's `<appDataDir>/brain/<conversation-id>/scratch/<name>.py`) or `/tmp/<name>.py`—so operators can review and approve once cleanly.

> [!TIP]
> Use read-only `epistemic-auditor` subagents when auditing large codebases to prevent polluting the main agent's working context memory, and read **[08. Antigravity Customizations & Skill Overlays](08-antigravity-customizations-and-skill-overlays.md)** to configure optional companion plugins and `.agents/overrides/` overlays.
