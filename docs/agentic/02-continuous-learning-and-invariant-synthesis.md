---
title: 'Continuous Learning with /learn: Codifying Edge Cases into Machine Invariants'
description: How post-mortems and edge-case discoveries during Credence development
  are codified via /learn into permanent, machine-verifiable rules in AGENTS.md.
since_version: v1.0.0
verified_version: v1.21.7
last_verified: '2026-08-20'
tags:
- antigravity
- learn
- invariants
- agents-md
- continuous-learning
interfaces:
- CLI
- Python SDK
invariants:
- 3
- 18
- 34
- 35
- 36
difficulty: Intermediate
read_time: 6 min
---

# Continuous Learning with /learn: Codifying Edge Cases into Machine Invariants

Discover how Credence uses the `/learn` slash command to transform transient corrections and post-mortem findings into permanent, machine-verifiable invariants in `AGENTS.md`.

```mermaid
flowchart LR
    Phase1["1. Mk1 Eyeball Review<br/><i>(Code, Local QA, Target Version)</i>"] --> Phase2["2. Feature Release<br/><i>(Commit, Tag, Deploy vX.Y.0)</i>"]
    Phase2 --> Phase3["3. /learn Retrospective<br/><i>(Capture Feedback & Invariants)</i>"]
    Phase3 --> Phase4["4. Learning Patch Release<br/><i>(Apply Invariants, Tag vX.Y.1)</i>"]
```

> [!NOTE]
> **[Invariant 18: Context Governance & Progressive Disclosure](../invariants.md#invariant-18)**: Keep `AGENTS.md` lean (<800 tokens) in thematic categories. Place multi-step runbooks in `.agents/skills/` and complete specifications in `docs/`.

---

## 1. The 4-Phase Delivery & Machine Learning Lifecycle

When delivering features and capturing edge cases during pair-programming, Credence follows a disciplined 4-phase progression:

1. **Phase 1: Code, Local QA & Mk1 Eyeball Review**: Implement capabilities, verify via `just check` (<0.3s integrity tests and in-memory unit tests), and present the working-tree diff and explicit target version for human inspection ("Mk1 Eyeball").
2. **Phase 2: Feature Version Release**: Commit with a clean working tree (`git diff --quiet`), synchronize manifests, tag, push to origin, and verify live cloud deployments (e.g. `v1.23.0`).
3. **Phase 3: `/learn` Retrospective**: Analyze session discoveries, user feedback, and security constraints to draft `learning_proposal.md`.
4. **Phase 4: Apply Lessons as Patch Release**: Apply the codified rules to `AGENTS.md` and `.agents/skills/`, add shift-left contract tests in `tests/`, bump to the next patch version (e.g. `v1.23.1`), and execute the learning patch release.

---

## 2. Real-World Case Studies from Credence Development

| Incident / Edge Case | Immediate Fix | Codified Invariant Added via `/learn` | Automated Guardrail |
| :--- | :--- | :--- | :--- |
| **Mermaid Syntax Crashes** | Quoted node strings | **[Invariant 34: Universal Mermaid Syntax Guardrail](../invariants.md#invariant-34)** | `test_mermaid_diagram_syntax_integrity` |
| **Wall-of-Text Fatigue** | Added flowcharts & tables | **[Invariant 35: Visual Density Invariant ($\ge 2.0$/500w)](../invariants.md#invariant-35)** | `scratch/audit_visual_density.py` |
| **Multi-Repo Version Drift** | Updated `credence.run` | **[Invariant 3: Version Parity Governance](../invariants.md#invariant-3)** | `test_ecosystem_version_parity` |
| **Unlinked Invariant Mentions** | Cross-linked markdown | **[Invariant 30: Invariant Linking Guardrail](../invariants.md#invariant-30)** | `test_all_invariant_references_are_linked` |

---

## 3. The Structure of a High-Signal Agent Rule

Effective rules in `AGENTS.md` must be **actionable, unambiguous, and mathematically testable**:

:::tabs
=== ❌ Vague Rule (Ignored by LLMs)
```markdown
Make sure diagrams look nice and documentation is easy to read.
```

=== ✅ High-Signal Credence Invariant
```markdown
- **Visual Density & Anti-Wall-of-Text Invariant**: All documentation guides, tutorials, and editorial blog posts must maintain a visual density of >= 2.0 visual elements per 500 words (using Mermaid architecture diagrams, comparison matrices, and styled alert callout boxes) to eliminate unformatted prose fatigue.
```
:::

> [!TIP]
> Never let an agent repeat a mistake twice. Whenever a correction is made, trigger `/learn` to cement the behavior permanently.
