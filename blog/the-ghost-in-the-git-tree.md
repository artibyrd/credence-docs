---
title: 'The Ghost in the Git Tree: Finding and Banishing Stale Artifacts in Agentic Workflows'
description: How autonomous agents can leave invisible technical debt in repositories, and how shift-left governance keeps trees immaculate.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 31
---

# The Ghost in the Git Tree: Finding and Banishing Stale Artifacts in Agentic Workflows

When autonomous AI coding agents work in a software repository, they move with incredible speed: drafting scratch scripts, generating test fixtures, creating temporary logs, and refactoring modules across dozens of files.

However, this rapid velocity introduces a subtle and insidious form of technical debt: **The Ghost in the Git Tree**.

An agent might write a temporary Python script to test a database migration, leave it in the repository root, and forget to delete it. It might add a legacy flag to a CLI parser, update documentation with an uncommitted assumption, or leave behind an un-tracked mock JSON file. Over time, these orphaned artifacts accumulate, confusing human contributors and degrading the agent's own future context awareness.

To keep our git tree immaculate, Credence codified **The Commit-Before-Deploy & Clean Workspace Invariant (`inv-commit-before-deploy`)**.

---

## The Anatomy of Repository Ghosts

```
 Working Repository Root
 +-- credence/                  # Canonical source code
 +-- tests/                     # Automated test suites
 +-- 👻 test_temp_debug.py      # Orphaned scratch script (GHOST)
 +-- 👻 mock_data_v1.json       # Stale mock fixture (GHOST)
 +-- 👻 .env.backup             # Un-tracked secret leak risk (GHOST)
 +-- Justfile                   # Clean automation recipes
```

These ghost files pollute `git status`, break automated build contexts in Docker, and increase container image payload sizes.

---

## Banishing Ghosts with Shift-Left Governance

Credence implements a multi-layered automated defense against repository pollution:

1. **Session Brain Scratch Isolation (`inv-clean-scratch-scripts`)**:
   Agents are prohibited from creating ad-hoc scripts in the repository root. All temporary data files and exploratory scripts must be written to the session brain scratch directory (`<appDataDir>/brain/<conversation-id>/scratch/`), preserving repository cleanliness while retaining full audit history.
2. **Pre-Commit Clean Tree Verification Gate**:
   The `just check` pre-commit gate asserts that no un-tracked files exist in monitored code directories and that all temporary artifacts have been purged.
3. **Automated Release Tree Verification**:
   The `just release` sequence verifies `git status --porcelain`. If any uncommitted changes or ghost files exist, the release halts immediately before generating release tags.

---

## Clean Codebases Build Confident Agents

An immaculate repository is not merely an aesthetic preference—it is the foundation of high-velocity agentic pair programming. When the git tree contains only deliberate, verified, and canonical code, both human engineers and AI assistants can navigate the codebase with total clarity and confidence.

## Architectural Invariants & Verification Mechanics

The implementation of **The Ghost In The Git Tree** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **The Ghost In The Git Tree** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blog"

# Inspect real-time execution metrics and Bayesian concordance
$ credence stats --detailed --window 24h

# Export canonical verification receipts for external compliance
$ credence verify --json --audit-trail
```

### Quantitative Operational Benchmarks

| Metric / Dimension | Target Performance | Worst-Case Tolerance | Subsystem Status |
| :--- | :---: | :---: | :--- |
| **Verification Latency** | $< 15\text{ ms}$ (Local Cache) | $< 250\text{ ms}$ (P95 Mesh Gossip) | ✅ Optimal |
| **Grounding Precision ($G$)** | $1.00$ (Verbatim DOM Match) | $0.90$ (Probation Window) | ✅ Certified |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle) | ✅ Protected |
| **Memory Consumption** | $< 150\text{ MB RAM}$ | $< 256\text{ MB RAM}$ | ✅ Lean |

### RFC Standards & Related Documentation

* 📘 [The Invariant Bible](../docs/invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../docs/feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../docs/changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../docs/playground.md)
