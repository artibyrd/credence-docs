---
title: Decentralized Architecture
description: Multi-tier architecture specification spanning ingestion, multi-agent
  evaluation, token governance, and P2P mesh.
since_version: v1.0.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Decentralized Architecture

**Credence** is an autonomous epistemic evaluation engine, FastMCP 2.0 server, and decentralized trust network designed to analyze digital media against formal journalistic ethics, logical fallacies, and deceptive UI patterns.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                CREDENCE DECENTRALIZED ARCHITECTURE                               │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. INGESTION & DUAL-CAPTURE LAYER                                                                │
│ ┌────────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────────┐   │
│ │ Target Webpage URL     │ ───▶ │ Normalized Prose Text   │ ───▶ │ 64-Bit SimHash Fingerprint│   │
│ │ • Trafilatura Extractor│      │ (Whitespace Normalized) │      │ (Hamming Distance d_H<=3) │   │
│ │ • Playwright DOM & PNG │      └─────────────────────────┘      └─────────────┬─────────────┘   │
│ └────────────────────────┘                                                     │                 │
├────────────────────────────────────────────────────────────────────────────────┼─────────────────┤
│ 2. GOVERNANCE & HEADROOM CIRCUIT BREAKER                                       ▼                 │
│ ┌────────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────────┐   │
│ │ SQLite WAL Cache Check │─Hit─▶│ 0-Token Instant Replay  │      │ Token Budget Governor     │   │
│ │ (SimHash Deduplication)│      │ (Canonical RFC Receipt) │      │ • >=30% Quota Headroom    │   │
│ └──────────┬─────────────┘      └─────────────────────────┘      │ • Circuit Tripped: Offline│   │
│            │ Miss                                                └─────────────┬─────────────┘   │
├────────────┴───────────────────────────────────────────────────────────────────┼─────────────────┤
│ 3. CONCURRENT SPECIALIST AUDIT & GROUNDING GATE                                ▼                 │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Poe's Law & Satire Triage Filter (Neutralize Satire 0.00 vs SPJ-1.6 Allegation Override)   │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                ▼                                                 │
│ ┌────────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────────┐   │
│ │ SPJ Ethics Specialist  │      │ IEP Fallacy Specialist  │      │ Deceptive Pattern Auditor │   │
│ │ • Anonymous sources    │      │ • Ad Hominem, Strawman  │      │ • Fake countdown urgency  │   │
│ └──────────┬─────────────┘      └────────────┬────────────┘      └─────────────┬─────────────┘   │
│            └─────────────────────────────────┼─────────────────────────────────┘                 │
│                                              ▼                                                   │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Grounded Quote Validator (Character-Match G=1.00) ──Pass (G>=0.75)──▶ Epistemic Scoring    │   │
│ │                                                  └──Fail (G<0.75)───▶ Escalation (Thinking)│   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
├────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ 4. CRYPTOGRAPHIC ATTESTATION & 4-WAY EGRESS    ▼                                                 │
│ ┌────────────────────────┐      ┌────────────────────────────────────────────────────────────┐   │
│ │ RFC 8785 Ed25519 Sign  │ ───▶ │ 4 Universal Presentation Interfaces:                       │   │
│ │ Canonical JSON Receipt │      │ • CLI (`credence audit`)       • FastMCP 2.0 (Agent Tools) │   │
│ │ SQLite WAL Persistence │      │ • Textual TUI (`credence tui`) • Zero-Build Web UI (`web/`)│   │
│ └────────────────────────┘      └────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Architectural Component Matrix

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
