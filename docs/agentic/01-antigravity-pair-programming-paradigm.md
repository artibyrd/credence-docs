---
title: 'Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball'
description: How human-agent pair programming with Google Antigravity accelerates
  complex software engineering through planning mode, asynchronous background tasks,
  and human gating.
since_version: v1.0.0
verified_version: v2.3.0
last_verified: 2026-08-21
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
- 1
- 4
- 6
- 18
difficulty: Intermediate
read_time: 7 min
---

# Antigravity Pair-Programming: Planning Mode, Background Tasks, & Mk1 Eyeball

Explore the operational methodology developed during the creation of Credence using **Google Antigravity (AGY)**—combining rigorous planning mode, non-blocking asynchronous task orchestration, and human-in-the-loop review ("Mk1 Eyeball").

```mermaid
flowchart TD
    User["Human Operator Request"] --> Research["1. Research Phase<br/>(Read-only tools & static analysis)"]
    Research --> Plan["2. Planning Mode<br/>(implementation_plan.md artifact)"]
    Plan --> Gate["3. 'Mk1 Eyeball' Human Review Gate<br/>(Explicit approval required)"]
    Gate -->|Approved| Exec["4. Autonomous Parallel Execution<br/>(Subagents & background tasks)"]
    Exec --> Verify["5. Hermetic Verification<br/>(Playwright, pytest, static audits)"]
    Verify --> Walkthrough["6. Walkthrough Artifact<br/>(walkthrough.md + visual screenshots)"]
```

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

```mermaid
sequenceDiagram
    participant Agent as Antigravity Agent
    participant Task as Background Worker
    participant IDE as Developer IDE
    
    Agent->>Task: launch_command(pytest test_docs_rendering.py)
    Task-->>Agent: Returns Task ID (task-610)
    Agent-->>IDE: Update status (waiting asynchronously)
    Task->>Task: Executes Playwright Chromium tests (18s)
    Task-->>Agent: Reactive Wakeup Message (11 passed)
    Agent->>IDE: Present Walkthrough & Screenshots
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

```mermaid
flowchart LR
    subgraph FeatureWork ["1. Feature Branch"]
        B["just branch feat/..."] --> C1["Milestone 1 Commit"]
        C1 --> C2["Milestone 2 Commit"]
    end

    subgraph StagingPR ["2. Pull Request & Dev Cloud"]
        C2 --> PR["just pr create<br/>(PR opened / pushed)"]
        PR --> Dev["Auto-Deploy to Cloud Run DEV<br/>(credence-dev-495173)"]
    end

    subgraph Production ["3. PR Merge & Prod Cloud"]
        PR --> Merge["just pr merge<br/>(Merge to main)"]
        Merge --> Prod["Auto-Deploy to Cloud Run PROD<br/>(credence-prod-505902)"]
        Merge --> Edge["Auto-Deploy Cloudflare Edge Router<br/>(credence.run)"]
    end
```

### Core Release Rules:
1. **Commit-as-You-Go**: Changes are committed as discrete, tested units (`just commit "<message>"`) throughout the session after each test gate passes, rather than batched into one massive release commit.
2. **Feature Branch Isolation**: Active development occurs on dedicated feature branches (`just branch <name>`) across all ecosystem repositories.
3. **Automated Dev Cloud Staging**: Opening a Pull Request or pushing new commits automatically triggers `deploy-dev.yml` to deploy live previews to `credence-dev-495173`.
4. **Automated Production Release on Merge**: Merging the PR into `main` automatically triggers `deploy-backend.yml` and `deploy-edge.yml` to deploy to `credence-prod-505902` and Cloudflare Pages.

> [!TIP]
> Use read-only `epistemic-auditor` subagents when auditing large codebases to prevent polluting the main agent's working context memory.


