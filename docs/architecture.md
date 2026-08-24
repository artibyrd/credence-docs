---
title: Decentralized Architecture
description: Multi-tier architecture specification spanning ingestion, multi-agent
  evaluation, token governance, and P2P mesh.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# Decentralized Architecture

**Credence** is an autonomous epistemic evaluation engine, FastMCP 2.0 server, and decentralized trust network designed to analyze digital media against formal journalistic ethics, logical fallacies, and deceptive UI patterns.

![Figure 1.1: Comprehensive Credence 3-plane ecosystem architecture and service topologies](assets/illustrations/architecture.svg)### Architectural Component Matrix

| Layer | Primary Responsibilities | Core Technologies | Key Invariants |
| :--- | :--- | :--- | :--- |
| **Ingestion** | Dual DOM/prose extraction, SimHash-64 deduplication | Trafilatura, Playwright, SQLite WAL | SSRF guard, semaphore concurrency |
| **Governance** | Token budget metering, offline heuristics | TokenBudgetGovernor, Rule Catalogs | Circuit breaker at 30% headroom |
| **Evaluation** | 4-specialist audit, verbatim substring grounding | Gemini 3.7 Flash, Namespaced Taxonomies | $G=1.00$ exact quote matching |
| **Cryptographic Mesh** | Ed25519 signing, epidemic gossip, consensus | RFC 8785 Canonical JSON, Ed25519 | $3f+1$ Sybil resistance, Galileo Rule |
| **Presentation** | CLI, Textual TUI, FastMCP 2.0, Zero-Build Web | Rich, Textual, FastMCP, WebCrypto | 4-interface synchronous feature parity |

> [!TIP]
> **Decoupled Architecture**: In accordance with the Pure Logic Decoupling Invariant, all business logic and scoring mathematics execute completely independent of UI rendering layers.

---

## 1. Dual-Capture Ingestion Engine

Credence captures both structural content and visual presentation:
- **Clean Prose Extraction**: Uses Trafilatura to extract primary article text, title, author bylines, and schema.org metadata while stripping tracking scripts and ad boilerplate.
- **Visual & DOM Snapshotting**: Runs headless Chromium via Playwright to generate full-page visual screenshots (`.png`) and rendered DOM dumps (`.html`).
- **Memory Protection Gate**: All Playwright browser instances are strictly serialized through an `asyncio.Semaphore(1)` gate (`MAX_CONCURRENT_SNAPSHOTS`), preventing OOM crashes.
- **Deterministic Content Hashes**:
  - Unicode NFKC normalization and whitespace collapsing.
  - Cryptographic `SHA-256` content hash.
  - 64-bit `SimHash` with Hamming distance comparison to identify mirror sites and near-duplicate publications.

---

## 2. Multi-Agent Evaluation Pipeline

The evaluation pipeline dispatches 4 specialist agents:
1. **SPJ Ethics Auditor**: Truth and verification, minimizing harm, editorial independence, and transparency.
2. **IEP Fallacy Auditor**: Informal and formal fallacies grouped into 6 cognitive families.
3. **Deceptive Patterns Auditor**: Visual dark patterns, fake countdown timers, and confirmshaming.
4. **Provenance & Satire Classifier**: Masthead badges, schema markup, and `SPJ-1.6` cloaking checks.

---

## 3. Cryptographic Mesh & Bayesian Consensus

Nodes sign audit reports using **Ed25519** over **RFC 8785 Canonical JSON**. Signed envelopes are gossiped across the 13-node Watts-Strogatz mesh, and consensus is aggregated using Domain Authority Weighted Medians with the Galileo Rule protection.

## Architectural Invariants & Verification Mechanics

The implementation of **Architecture** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Architecture** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "docs"

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

* 📘 [The Invariant Bible](invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](playground.md)
