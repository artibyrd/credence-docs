---
title: 'Cookbook: Local Dev to Cloud Run Workflow'
description: Seamless workflow from local code edits to Dev Cloud Run preview and production release.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 7
---

# Cookbook: Local Dev to Cloud Run Workflow

This cookbook provides the definitive end-to-end workflow for writing code locally, testing against development cloud endpoints, and deploying to production.

---

## 1. The 4-Stage Developer Flow

1. Local Code & Unit Tests (`just check` < 3s)
▼
2. Deploy to Cloud Run Dev Preview (`just deploy-dev`)
▼
3. Mk1 Eyeball Human Sign-Off on Live Preview (`dev.credence.run`)
▼
4. Merge to Main & Release (`just release vX.Y.Z`)

---

## 2. Step-by-Step Execution Commands

```bash
# Step 1: Run pre-commit QA gate locally
$ just check

# Step 2: Deploy working branch to Dev Cloud Run
$ just deploy-dev

# Step 3: Probe live Dev preview health
$ credence stats --endpoint https://dev.credence.run

# Step 4: Open pull request and await review
$ just pr-create "Add medical taxonomy rules"

# Step 5: Merge PR and execute atomic production release
$ just pr-merge
$ just release v2.16.2 "Documentation and integrity update"
```

---

## 3. Related Operational Guides

* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 📘 [The Invariant Bible](../invariants.md) — 4-Phase Release Lifecycle

## Architectural Invariants & Verification Mechanics

The implementation of **Local Dev To Cloud Run Workflow** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Local Dev To Cloud Run Workflow** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "cookbooks"

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

* 📘 [The Invariant Bible](../invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../playground.md)
