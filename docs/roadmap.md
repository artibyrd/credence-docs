---
title: Ecosystem Roadmap & Architecture Horizons
description: Sovereign in-tree decision matrix, operational edge cases, and future architecture horizons across the Credence ecosystem.
since_version: v1.0.0
verified_version: v2.17.3
last_verified: 2026-08-26
tags:
  - roadmap
  - backlog
  - known-issues
  - architecture
  - edge-cases
interfaces:
  - CLI
  - FastMCP 2.0
  - Textual TUI
  - Zero-Build Web UI
invariants:
  - inv-workspace-isolation
  - inv-hermetic-unit-tests
  - inv-4way-parity-symmetric-web
  - inv-living-canon
  - inv-mk1-eyeball
difficulty: Intermediate
read_time: 9 min
---

# Ecosystem Roadmap & Architecture Horizons 🧭

This document serves as the **sovereign, forward-looking architectural compass** for future development horizons, empirical research frontiers, and operational trade-offs across the Credence ecosystem.

For the authoritative historical ledger of all shipped capabilities and version diffs, consult the [Release Changelog](changelog.md). For current architectural blueprints and protocols, consult the [Topic Index](topic-index.md).

---

## 1. Empirical Drivers & Real-World Telemetry

Our live multi-plane deployments, Golden 12 cross-profile benchmarks, and bicameral experiments revealed four key discoveries that motivate our upcoming horizons:

1. **The 83.3% FinOps Cascading Law**:
   - *Discovery*: Approximately 70% of ingress news articles are structurally benign ($S < 25.0$). Routing 100% of feeds to deep 4k thinking is economically inefficient ($135.00/100\text{k}$).
   - *Target Resolution*: Build an automated, low-latency edge gateway that dynamically routes benign content to fast local heuristics ($0.00) and escalates only ambiguous or deceptive claims to Gemini 3.7 Flash 4k thinking ($22.50/100\text{k}$).

2. **Lexical Entropy Collapse in Coordinated Astroturfing**:
   - *Discovery*: Programmatic syndication networks and PR slop farms exhibit extreme topical collapse ($H < 0.30$ and $C_{\text{top3}} > 0.45$).
   - *Target Resolution*: Deploy an autonomous rolling entropy daemon (ASTRO-GUARD) across all subscribed RSS roots.

3. **Cross-Organization Zero-Secret Verification**:
   - *Discovery*: RFC 8785 canonical JSON bytes signed with Ed25519 private keys can be authenticated by any external node with zero shared secrets.
   - *Target Resolution*: Standardize sovereign node keys into W3C `did:key` and `did:web` decentralization specifications.

4. **Batch Proxy Edge Execution Limits**:
   - *Discovery*: Uncached multi-article 4k thinking audits take ~3.8s each. A batch request of 10+ URLs over a synchronous JSON-RPC proxy approaches Cloudflare Worker 30s CPU/wall-clock execution limits.
   - *Target Resolution*: Implement asynchronous FastMCP 2.0 batch job tokens with Server-Sent Events (SSE) streaming progress.

---

## 2. Comprehensive Horizon Decision Matrix

To enable operators and agents to balance rapid delivery against high-impact structural advancements, all candidate initiatives are evaluated below across **Difficulty (Effort)**, **Impact / Value**, and target subsystem:

| Item # | Horizon | Initiative | Difficulty (Effort) | Impact / Value | Primary Subsystem | Key Strategic Trade-Off & Capability |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | **H2** | **"DRADIS-is-Blind" Visual Verification Mode** (`credence audit --visual-confirm` & `credence tui --eyeball`) | Low (1–2 days) | Critical (P0 Safety) | CLI, Textual TUI, Forensics | High-impact rapid win. Renders side-by-side claim vs DOM context diffs for human review before attestation signing (`inv-mk1-eyeball`). Zero external dependencies. |
| **#2** | **H3** | **FastMCP 2.0 Adversarial Socratic Interrogation Tool** (`credence_grill_plan`) | Low (1–2 days) | High (Agentic Synergy) | FastMCP Server, Governance | High agentic leverage. Exposes automated invariant cross-examination tool for IDE agents (`/grill-me`). Reuses existing FastMCP & Living Canon parser. |
| **#3** | **H2** | **W3C Decentralized Identifier (`did:key` & `did:web`) Support** | Low (1–2 days) | Medium-High (Interoperability) | Cryptography, Identity | Pure mathematical mapping of Ed25519 public keys to `did:key:z6M...` and `did:web` JSON documents. 100% hermetic. |
| **#4** | **H1** | **CLI Authenticated Scraping** (`--session-cookie`, `--browser-profile`) | Low (1–2 days) | High (Solves Gated Feeds) | Ingestion, CLI | Enables auditing behind paywalls and bot-walls while strictly preserving SSRF ingestion boundaries. |
| **#5** | **H3** | **Live Philanthropy & Boredom Odometer Widget** | Low (1 day) | Medium (UX Telemetry) | Web UI, TUI, REST | Real-time telemetry counter for work-sharing compute savings and $0.00 token adoptions. |
| **#6** | **H1** | **ASTRO-GUARD Dynamic Astroturf Defense Daemon** | Medium (3–4 days) | High (Core Defense) | Feeds, Analytics, Background Daemons | Background daemon tracking 24h rolling Shannon entropy ($H < 0.30$) and Top-3 token concentration across RSS feeds to detect PR slop farms. |
| **#7** | **H2** | **Fediverse & AT Protocol Attestation Bridge** | Medium (3–4 days) | Medium (Distribution) | Social Adapters, Ingestion | Native broadcast of signed attestation cards to Bluesky (`app.bsky.feed.post`) and Mastodon / ActivityPub. |
| **#8** | **H3** | **Asynchronous FastMCP 2.0 Batch Streaming** (`credence://jobs/...`) | Medium (4–5 days) | High (Edge Scalability) | FastMCP, SSE, Job Queue | Asynchronous job tokens + SSE progress streaming for 10+ URL batch audits to eliminate Cloudflare Worker 30s timeouts. |
| **#9** | **H1** | **Autonomous Cascaded Gateway** (`credence gateway`) | High (1–2 weeks) | Critical (83.3% FinOps Savings) | Reverse Proxy, MCP Middleware, Ingestion | Transparent HTTP/MCP reverse-proxy dynamically routing benign content to $0.00 heuristics and escalating ambiguous claims to 4k thinking. |
| **#10** | **H2** | **WebAssembly (Wasm) Client-Side Evaluator** | High (1–2 weeks) | Medium-High (Edge Performance) | Rust/Wasm, Web Extension | Compiles SimHash-64 bit diffs, DOM whitespace collapse, and regex heuristics into a zero-build Wasm bundle for browser extensions. |
| **#11** | **H3** | **Clustered PostgreSQL & Valkey Storage Backend** | High (2 weeks) | Low (Current SQLite CAS is performant) | Storage, Infra | Enterprise database clustering. Low priority since SQLite WAL + GCS satisfies serverless & standalone nodes cleanly. |

---

## 3. Strategic Execution Pathways

Based on the Decision Matrix, three strategic pathways guide upcoming development cycles:

### Pathway A: Low-Hanging Fruit First (Rapid High-Yield Wins — ~3–4 Days Total)
1. **Visual Verification Mode**: Implement `--visual-confirm` in CLI and `--eyeball` in Textual TUI for character-exact DOM claim confirmation.
2. **FastMCP Socratic Interrogation**: Expose `credence_grill_plan` for automated plan review against The Invariant Bible.
3. **W3C DID Support**: Implement `did:key` and `did:web` resolvers for sovereign node keys.
4. **CLI Authenticated Scraping**: Implement `--session-cookie` and `--browser-profile` passthrough in extractor.

### Pathway B: High-Impact Structural First (Architectural Leap — ~1–2 Weeks)
1. **Autonomous Cascaded Gateway (`credence gateway`)**: Build the edge triage reverse-proxy capturing 83.3% token savings.
2. **ASTRO-GUARD Daemon**: Build continuous 24h rolling entropy monitor across all syndicated roots.
3. **Asynchronous FastMCP Batch Streaming**: Implement `credence://jobs/...` SSE streaming queue.

### Pathway C: Balanced Hybrid (Recommended)
* **Sprint 1 (Immediate 2 Days)**: #1 Visual Verification Mode + #2 FastMCP `credence_grill_plan`.
* **Sprint 2 (Follow-on 3–4 Days)**: #6 ASTRO-GUARD Astroturf Defense Daemon or #4 Authenticated Paywall Scraping.

---

## 4. Detailed Architecture Horizons

### Horizon 1: Autonomous Traffic Shaping & Edge Intelligence

* **Autonomous Cascaded Gateway (`credence gateway`)**:
  * Transparent HTTP reverse proxy and MCP middleware that dynamically executes fast heuristic triage, evaluates Shannon entropy, and only escalates ambiguous claims to 4k thinking.
* **ASTRO-GUARD Dynamic Astroturf Defense Daemon**:
  * Background monitor tracking 24-hour topical entropy ($H < 0.30$) and Top-3 token concentration ($C_{\text{top3}} > 0.35$) across all subscribed feed roots to detect coordinated advertorial takeovers (*The Pizza Hut Problem*).
* **CLI Authenticated Scraping**:
  * Optional `--session-cookie`, `--browser-profile`, or custom headers for auditing content behind subscriber paywalls.

### Horizon 2: Protocol & Interactive Tooling

* **"DRADIS-is-Blind" Visual Verification Mode (`credence audit --visual-confirm` & `credence tui --eyeball`)**:
  * Dedicated visual verification mode in the CLI and Textual TUI displaying high-contrast side-by-side claim vs source DOM diffs for human-in-the-loop review (*The Mk1 Eyeball Invariant*).
* **W3C Decentralized Identifier (`did:key` & `did:web`) Support**:
  * Map Ed25519 node identities to standard `did:key:z6M...` and `did:web:domain.org` formats for interoperability with external DID registries.
* **Fediverse & AT Protocol Attestation Bridge**:
  * Native broadcast of signed verification cards to Bluesky (AT Protocol `app.bsky.feed.post`) and Mastodon / ActivityPub networks.
* **WebAssembly (Wasm) Client-Side Evaluator**:
  * Zero-build Wasm bundle compiling SimHash-64 bit-diffs, DOM whitespace collapse, and regex heuristics for instant in-browser execution in extensions and edge workers.

### Horizon 3: Agentic Scale & Socratic Protocol

* **Adversarial Socratic Interrogation Tool (`credence_grill_plan` in FastMCP 2.0)**:
  * Native FastMCP tool allowing external IDEs, agents, and CI pipelines to submit architectural proposals for automated cross-examination against Credence's Living Canon of System Invariants (*When the Human Types /grill-me*).
* **Live Boredom & Compute Philanthropy Odometer**:
  * Real-time telemetry widgets in the Web UI and Textual TUI tracking background queue digestion bursts, citation soil discoveries, and BitTorrent effort avoidance ($0.00 token adoptions).
* **Asynchronous FastMCP 2.0 Batch Streaming (`credence://jobs/...`)**:
  * `credence_batch_audit_start` tool returning a unique `job_id`, streaming progressive progress and partial findings over SSE to avoid edge timeouts.
* **Clustered PostgreSQL & Valkey Cache Invalidation**:
  * Automated schema migration and multi-worker cache invalidation for large-scale enterprise deployments.

---

## 5. Known Operational Edge Cases & Target Resolutions

| Edge Case | Observed Behavior | Current Tactical Mitigation | Target Horizon Resolution |
| :--- | :--- | :--- | :--- |
| **Bot-Wall Interstitials** | Cloudflare Turnstile / Akamai serves challenge interstitials to headless scrapers. | Test gauntlet detects challenge DOM strings and skips semantic assertions. | **Horizon 1**: Authenticated session cookie & browser profile passthrough. |
| **Edge Batch Proxy Timeouts** | Synchronous 10+ URL batch audits approach Cloudflare Worker 30s execution ceiling. | FastMCP server enforces single-URL requests with sub-5s latency. | **Horizon 3**: Asynchronous FastMCP batch queue (`credence://jobs/{id}`). |
| **Non-Standard RSS Dates** | Niche feeds publish unconventional timestamps (epoch integers, missing timezone offsets). | 4-tier flexible date parser in `credence/feeds/parser.py`. | **Complete**: Verified across all syndicated feeds. |

---

## 6. Guiding Invariants for Roadmap Contributions

All future roadmap implementations must strictly preserve:
1. **[The Invariant Bible: Zero-npm Standard](invariants.md#invariant-31)**: Never introduce Node.js or npm dependencies into public web portals.
2. **[The Invariant Bible: Hermetic Testing](invariants.md#invariant-4)**: Default test suites (`@pytest.mark.unit`) must execute purely in-memory in <35s.
3. **[The Invariant Bible: Universal Feature Parity](invariants.md#invariant-26)**: New features must be exposed symmetrically across CLI, FastMCP 2.0, Textual TUI, and Web UI.
