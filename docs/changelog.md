---
title: "Release Changelog"
description: "Version history, release notes, and milestone accomplishments across the Credence network."
---

# Release Changelog

All notable changes to the **Credence** network and documentation are documented here following [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-08-18

### Added
- **Zero-Trust Dynamic Feed Discovery**: Zero-dependency HTML `<link rel="alternate">` parser and well-known endpoint prober (`discover_feed_endpoints`) for autonomous RSS 2.0, Atom 1.0, and JSON Feed discovery without brittle static whitelists.
- **Pre-Flight Forensic Audit & Shannon Topic Entropy ($H_{\text{topic}}$)**: Pre-ingestion forensic auditor calculating Shannon entropy penalized by top-token concentration ratio ($C_{\text{top3}}$) to mathematically detect commercial takeovers, sponsored native ads, and astroturfing pivots (The "Pizza Hut Problem").
- **Dynamic Feed Quality Scoring ($F_j$) & Autonomous Eviction**: 4-factor composite feed health index ($F_j = 0.35(1 - \bar{S}/100) + 0.25G + 0.20H + 0.20T$) with automated probation ($<0.70$) and mesh-wide eviction quarantine ($<0.40$).
- **Real-Time Feed Sifter Daemon**: Background async sifter daemon with jitter scheduling, conditional HTTP 304 caching, and Rendezvous Hashing (HRW) P2P mesh work-sharing yielding 92.3% compute savings at $0.00 token cost.
- **Morning Epistemic Digest Briefing Engine**: Automated daily briefings aggregating the past 24 hours of evaluated coverage into Clean Journalism, Rhetorical Fallacies, Deceptive Flags, Satire Alerts, and Compute Savings metrics.
- **Universal 4-Interface Synchronous Parity**:
  - **CLI**: Added `feed discover`, `feed inspect`, `feed health`, `feed bootstrap-presets`, `sifter`, and `digest`.
  - **FastMCP 2.0**: Added `credence_discover_feeds`, `credence_inspect_feed_health`, `credence_generate_digest` tools and `credence://digest/morning` resource.
  - **Textual TUI**: Added Morning Digest tab (`tab_digest`) and live dynamic quality ranking table columns.
  - **Zero-Build Web UI**: Added Section 8 interactive Feed Quality & Astroturfing Simulator in `docs/playground.md`.
- **Tutorial 09 & Sovereign Blog Essay**: Published [Tutorial 09: Zero-Trust Feed Sifter & Morning Digest](docs/tutorials/09-zero-trust-feed-sifter-digest.md) and [The Pizza Hut Problem & Topic Entropy](blog/the-pizza-hut-problem.md).
- **Cloudflare Multi-Domain Edge Hardening & Performance**:
  - Provisioned **HTTP/3 (QUIC)**, **Early Hints (103)**, and **0-RTT connection resumption** across all 4 production zones (`credence.run`, `credence.nexus`, `credence.foundation`, `credence.report`).
  - Strict SSL/TLS enforcement, automatic HTTPS rewrites, and zero-latency P2P SRV routing via Terraform IaC ([`terraform/cloudflare.tf`](terraform/cloudflare.tf)).
  - AI Crawler policy governance with unhindered coding assistant access (Claude Desktop, Cursor, Antigravity) and zero-build edge routing.
- **Architectural Boundary Blueprint & Municipal Governance Catalog**:
  - Published [Managing Customizations vs. Core Upstream](docs/operations/customizations-and-upstream-sovereignty.md) establishing strict 4-tier boundaries between Upstream Core, Gitignored Database State, Local Overlays, and Sovereign Deployments.
  - Added universal [Local News & Municipal Governance](credence/subjects/catalogs/municipal_governance.yaml) semantic subject catalog (`journalism.news.municipal_governance`) with conflict-of-interest detection rubrics.

---

## [1.0.1] - 2026-08-17

### Added
- **Multi-Cloud Production Deployment**: Provisioned and live-verified GCP Cloud Run v2 (`credence-server`) and Cloudflare multi-domain edge routing.
- **FastMCP 2.0 Live SSE Endpoint**: Real-time Server-Sent Events streaming on `https://mcp.credence.run/sse` with session assignment and CORS preflight handling.
- **Zero-Build Multi-Domain Edge Router**: Cloudflare Worker (`_worker.js`) routing across `credence.run`, `credence.nexus`, `credence.foundation`, and `credence.report` with 0 npm dependencies.
- **Air-Gapped Genesis Root Key Ceremony**: Generated network root Ed25519 keypair and published canonical RFC 8785 signed `peers.json` and pinned `root.pub`.
- **Streamlined Operator Justfile Recipes**: Added `just gcp-build`, `just tf-plan`, `just tf-apply`, and `just seed-sync` for one-command deployment.
- **Hermetic Documentation Integrity Test Suite**: Added `tests/test_docs_integrity.py` validating 47 docs, 7 interactive widgets, and zero-npm compliance in <0.1s.
- **Platform Portability Specifications**: 5 comprehensive specifications for multi-model adapters (Claude 3.7 Sonnet, GPT-4o, DeepSeek-R1, local Ollama) and multi-cloud deployment (AWS, Azure, Hetzner, K8s).
- **Interactive Model Cost Comparator**: Section 7 in `docs/playground.md` for real-time model cost, latency, and sovereignty trade-off analysis.

### Changed
- **Hostname-Aware Dynamic Routing**: Decoupled `docs.credence.run` (technical documentation portal) and `blog.credence.run` (sovereign editorial publication) within a unified zero-build engine.
- **Token Safety Governor**: Updated model tiering to pin `gemini-3.7-flash` as primary reasoning engine across `BALANCED` and `ULTRA` profiles with thinking token budgets ($1,024 \dots 16,384$).

### Fixed
- **Transport Security Host Header Validation**: Configured `TransportSecuritySettings` on FastMCP SSE app to allow public domain proxies and Cloudflare CDN headers without `Invalid Host` rejections.
- **Asset Boundary Protection**: Configured `.assetsignore` and `binding = "ASSETS"` in `web/wrangler.toml` to prevent Cloudflare Worker build errors.

---

## [1.0.0] - 2026-08-17

### Added
- **Core Ingestion & Dual Capture**: Playwright Chromium headless engine and Trafilatura content extraction with memory-safe concurrency gates and SSRF defense.
- **Epistemic Scoring & Saturation Math**: 4-specialist evaluation pipeline (Truth, Harm, Fallacies, Deceptive Patterns) with exponential saturation scoring.
- **Verbatim Grounding Validator**: Whitespace-insensitive character-offset citation verification ($G=1.0$) with 50% slash penalty on hallucinated quotes.
- **P2P Mesh Network Engine**: 13-node Watts-Strogatz small-world gossip diffusion, Bayesian consensus aggregator, and Byzantine fault tolerance ($3f+1$).
- **The Galileo Rule**: Asymmetric evidence weighting preventing Sybil cartels from overriding verified domain authorities.
- **Zero-Build Web UI & Textual TUI**: Vanilla HTML5/ES modules web suite and interactive terminal workstation (`credence tui`).
- **Golden 12 Benchmark Suite**: Multi-profile cross-entropy and accuracy evaluation suite (`just benchmark`).
