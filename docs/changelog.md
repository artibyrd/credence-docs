---
title: "Release Changelog"
description: "Version history, release notes, and milestone accomplishments across the Credence network."
---

# Release Changelog

All notable changes to the **Credence** network and documentation are documented here following [Semantic Versioning](https://semver.org/).

## [1.5.0] - 2026-08-18

### Added
- **Human-Centered Epistemic Report Viewer across 4 Interfaces**:
  - **Zero-Build Web UI (`credence.report/viewer.html`)**:
    - Built interactive in-context reading mode rendering snapshot article prose with color-coded highlight markers (`.hl-ethics`, `.hl-fallacy`, `.hl-deceptive`) and tooltip citations.
    - Added Executive Epistemic Briefing card with plain-English human takeaways and 3-signal indicators (Ethics, Logic, Deceptive Design).
    - Added 5 interactive tabs: Overview & Metrics, In-Context Reading Mode, Itemized Findings (with real-time search & domain filter chips), Cryptographic Proof (W3C WebCrypto Ed25519 validation), and Share & Export (1-click Markdown copier, JSON download, SVG trust badge).
    - Preserved 100% Zero-Build standard (vanilla HTML5, CSS Custom Properties, native ES Modules, zero npm dependencies).
  - **Textual TUI Workstation (`credence/tui/app.py`)**:
    - Built Dual-Pane Inspector Split: left pane for filterable specialist findings table and right pane for in-context cited excerpts, severity badges, and reasoning.
    - Added Executive Summary panel at the top of the inspector with human takeaways.
    - Added live search filter input updating findings dynamically on keystrokes.
    - Added keyboard shortcuts: `o` (open in web browser), `e` (export Markdown report to disk), and `f` (focus filter input).
  - **Rich Terminal CLI (`credence/cli/main.py`)**:
    - Prepend Executive Epistemic Briefing panel and visual Epistemic Trust Dimensions breakdown meters (`[████████████████████] Clean`).
    - Added `--open` browser flag to `credence audit` and `credence lookup` subcommands.
    - Added `credence report view <identifier> [--format {terminal,markdown,json}] [--open]` subcommand.
  - **FastMCP 2.0 Server (`credence/server/app.py`)**:
    - Added `format: str = "json"` (`json`, `markdown`, `human`) parameter to `credence_get_audit`.
    - Registered `credence://reports/{identifier}/human` resource returning conversational Markdown briefings.
    - Registered `explain_audit_report_prompt` prompt template instructing AI agents how to explain audit reports in plain English.
  - **FastMCP Text Evaluation Persistence**:
    - Persisted `SnapshotRecord`, `AuditRecord`, and `ViolationRecord` to SQLite with `text://inline` pseudo-URLs for all text evaluations to ensure cache lookup parity with live URL audits.
  - **Universal Invariant Codification**:
    - Codified *FastMCP Text Evaluation Persistence Invariant* and *Human-First In-Context Report Presentation Invariant* in `AGENTS.md`.

---

## [1.4.0] - 2026-08-18

### Added
- **Reusable Live Rotating & Mutating E2E Test Suite (`just test-live`)**:
  - Implemented `tests/e2e/live_corpus.py` Stratified Master Corpus with deterministic daily seed rotation (`YYYY-MM-DD` / `CREDENCE_LIVE_SEED`) across 5 epistemic categories (Reference, Satire, Wire News, Tech Media, Syndicated RSS).
  - Implemented `tests/e2e/test_live_rotating_suite.py` gauntlet testing CLI live audits, RSS feed quality ($F_j$), real-time dynamic article extraction, FastMCP 2.0 remote SSE tool invocation, and 13-node Watts-Strogatz P2P mesh BitTorrent work-sharing (92.3% compute savings) with Byzantine ungrounded smear slashing.
- **6-Tier Testing Strategy & Verification Architecture Documentation**:
  - Published comprehensive testing guide (`docs/protocols/testing-strategy.md` and `docs/testing-strategy.md`) detailing the 6 verification tiers, isolation guarantees, and operational test recipes.
- **Hands-On Tutorial 10: Running the Reusable Live Rotating E2E & Byzantine Mesh Gauntlet**:
  - Created step-by-step developer tutorial (`docs/tutorials/10-reusable-live-e2e-and-mesh-gauntlet.md`) for operating live seed mutation, dynamic feed sifting, and P2P mesh chaos testing.
- **Editorial Blog Essay: The 6-Tier Verification Pyramid**:
  - Published high-assurance testing essay (`blog/the-six-tier-pyramid-of-decentralized-truth.md`) exploring why static benchmarks fail in AI verification, how deterministic hashing prevents overfitting, and how zero-npm Playwright guarantees multi-decade stability.
- **Anti-Tampering & FastMCP SSE Resilience**:
  - Added anti-tampering assertions ensuring modifying signed audit fields causes Ed25519 verification rejection.
  - Added error-handling verification for invalid tool calls over remote FastMCP 2.0 SSE session streams.

- **Sovereign In-Repo Roadmap & Known Issues Backlog**:
  - Authored `docs/roadmap.md` and published to docs portal (`docs/roadmap.md`), establishing a local, in-tree Markdown source of truth for observed edge cases, live mitigations, and thematic future backlog items for autonomous AI agents.
- **Crawler Resilience & Syndicated Date Parsing**:
  - Added multi-format epoch timestamp fallback (seconds & milliseconds) to `credence/feeds/parser.py` date extraction.
  - Hardened Playwright browser context in `credence/ingestion/snapshot.py` with standard locale and transient network retry fallback.

### Fixed
- **Engine Resilience & Bug Fixes**:
  - Persisted `evaluation_method` in `AuditRecord` SQLModel and added SQLite automatic schema migration in `init_db()`.
  - Refined XML entity expansion regex in `safe_parse_xml` to strictly match `<!DOCTYPE` and `<!ENTITY>` declarations without false-flagging text containing "system".
  - Added `NullPool` and active event loop binding to async SQLite engine to eliminate event loop closure leaks across sequential tests.
  - Converted Playwright live rendering test suite to native `async_playwright` with zero event loop thread pollution.
  - Improved satire detection regexes in `credence/ingestion/extractor.py` to be attribute-order agnostic for modern hydration DOMs.

---

## [1.3.0] - 2026-08-18

### Added
- **36 Invariants Reference Catalog & Deep Linking**:
  - Expanded `docs/invariants.md` to 36 machine-verifiable invariants across 4 pillars with individual DOM IDs (`#invariant-1` to `#invariant-36`) and pillar architecture flowcharts.
  - Implemented sub-anchor routing in `app.js` with smooth auto-scrolling and glowing cyan highlighting.
  - Systematically linked all invariant mentions across all 74 catalog documents.
  - Added automated static integrity tests (`test_all_invariant_link_anchors_exist`) and Playwright browser tests (`test_invariant_deep_linking_and_scrolling`).
- **Rich Frontmatter Metadata & Zero-Build Faceted Search Engine**:
  - Standardized frontmatter metadata schema (`tags`, `interfaces`, `invariants`, `difficulty`, `read_time`).
  - Added interactive top-of-article metadata badge rows for rapid jumping to related interfaces and invariants.
  - Added keyboard search shortcuts (`/` or `Ctrl+K` to focus, `Esc` to clear) and interactive sidebar filter pills (**All**, **Invariants**, **Agentic**, **FastMCP**, **Tutorials**).
- **Dedicated "Agentic Engineering & Antigravity Workflows" Documentation Category**:
  - **[01. Antigravity Pair-Programming](docs/agentic/01-antigravity-pair-programming-paradigm.md)**: Research phase, Planning Mode, background task orchestration, reactive messaging, and "Mk1 Eyeball" human gating.
  - **[02. /learn & Invariant Synthesis](docs/agentic/02-continuous-learning-and-invariant-synthesis.md)**: Codifying post-mortems and edge-case discoveries into machine-verifiable rules in `AGENTS.md` and automated tests.
  - **[03. Hermetic Testing & Zero-npm](docs/agentic/03-hermetic-testing-and-zero-npm-guardrails.md)**: In-memory SQLite fixtures, Playwright DOM/SVG geometry contracts, and Zero-npm longevity.
  - **[04. Multi-Model Pareto & Token Governor](docs/agentic/04-multi-model-pareto-and-token-governance.md)**: Gemini 3.7 Flash 4k thinking token sweet spot ($0.075/1M), 30% offline circuit breakers, and prompt boundary defense.
  - **[05. FastMCP & 4-Way Parity](docs/agentic/05-fastmcp-dual-transport-and-four-way-parity.md)**: Dual stdio/SSE FastMCP 2.0 transports, reverse proxy security, and 4-way synchronous interface parity.
  - **[Blog Essay: Architecting Sovereign AI with Google Antigravity](blog/architecting-sovereign-ai-with-google-antigravity.md)**: High-assurance agentic engineering narrative.
- **Formalized Milestone Completion & Multi-Repo Git Push Lifecycle**:
  - Codified the 5-step milestone completion protocol: Present Walkthrough $\to$ Request "Mk1 Eyeball" Approval $\to$ Changelog & Version Sync $\to$ Multi-Repo Push (`just push-all`) $\to$ `/learn` Retrospective.

---

## [1.2.0] - 2026-08-18

### Added
- **GCP-Style Tabbed Interface Switching (`:::tabs` / `=== Tab Name`)**:
  - Implemented zero-build, accessible, dark glassmorphism tabbed container components in `app.js` and `styles.css` matching Google Cloud Platform documentation ergonomics.
  - Added semantic WAI-ARIA tab contracts (`role="tablist"`, `role="tab"`, `role="tabpanel"`) and animated active cyan indicator styling.
  - Retained clipboard copy button integration inside individual tabbed code blocks.
- **Global Cross-Document Preference Persistence (`localStorage`)**:
  - Automatically persists user-selected interface modality (**CLI**, **FastMCP 2.0**, **Python SDK**, **Zero-Build Web UI**, or **Textual TUI**) to `localStorage`.
  - As users navigate across documentation and walkthrough pages, matching tab groups automatically switch to the preferred interface with smart fuzzy matching.
- **4 New Comprehensive Feature Walkthrough Articles**:
  - **[Feature Walkthrough 01: Webpage & Prose Epistemic Auditing](docs/walkthroughs/01-auditing-webpages-and-text.md)**: Multi-interface guide for auditing URLs and raw text against SPJ, IEP fallacies, and deceptive UI patterns.
  - **[Feature Walkthrough 02: Zero-Trust Feed Autodiscovery & Sifting](docs/walkthroughs/02-zero-trust-feed-sifting.md)**: End-to-end guide for dynamic feed discovery, pre-flight topic entropy audits, and background sifter daemons.
  - **[Feature Walkthrough 03: P2P Mesh Gossip & Bayesian Consensus](docs/walkthroughs/03-p2p-mesh-consensus.md)**: Complete guide to node identity generation, Watts-Strogatz peering, and Galileo Rule weighted medians.
  - **[Feature Walkthrough 04: Daily Morning Epistemic Briefings](docs/walkthroughs/04-morning-digest-briefings.md)**: Compiling 24-hour executive intelligence briefings, Markdown newsletters, and FastMCP dynamic streams.
- **Documentation-Wide Visual Density & Anti-Wall-of-Text Overhaul**:
  - Added 22 new Mermaid architecture and sequence flowcharts, 18 comparison tables, and 25 styled callouts across 28 articles.
  - 100% of all 68 documentation and blog articles now satisfy the $\ge 2.0$ visuals per 500 words invariant.
- **Automated Tab Persistence & Navigation Regression Tests**:
  - Added `test_tabbed_interface_switching_and_persistence` in `tests/test_docs_rendering.py` validating tab switching, active panel swaps, `localStorage` saves, and multi-page persistence.

---

## [1.1.1] - 2026-08-18

### Added
- **Zero-Build Mermaid.js Engine Integration**: Vendored standalone zero-build Mermaid v10.9.1 engine (`assets/mermaid.min.js`) into `credence-docs/` and `credence/web/assets/`, enabling native SVG rendering for all 24+ architecture, protocol sequence, and mesh topology diagrams.
- **Dark Aesthetic Diagram Theme**: Configured dark palette (`#0d121f` container, `#38bdf8` cyan glow borders, `#f8fafc` typography) matching the Credence design system.
- **Copy to Clipboard Buttons**: Added animated one-click copy buttons and uppercase language tags (`BASH`, `PYTHON`, `YAML`, `JSON`, `TEXT`) across all fenced code blocks.
- **GitHub Alert Callouts Styling**: Added distinctive dark glassmorphism containers and icons for `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, and `> [!CAUTION]`.
- **Automated Live Rendering Test Suite**: Created `tests/test_docs_rendering.py` with Playwright + headless Chromium verifying zero unrendered Mermaid diagrams, zero raw HTML tag leaks, full interactivity across all 8 playground widgets, and 0 console errors across all documentation pages.
- **Extended Static Integrity Suite**: Updated `tests/test_docs_integrity.py` with static Mermaid syntax validation and complete DOM element coverage for all 8 playground widgets.

### Fixed
- **Markdown Block Parsing Precedence**: Overhauled `parseMarkdown` in `app.js` to prioritize code block fences before HTML tag inspection, eliminating raw HTML tag leaks (`&lt;/div&gt;`, `&lt;textarea&gt;`) inside code samples and interactive widgets.
- **LaTeX Math & Currency Formatting**: Corrected regex evaluation ordering in `formatMath` to prevent operator prefix collisions (`\left` transforming to `≤ft`) and unescaped currency strings (`\$18,291.00`).
- **Interactive Playground Layouts**: Enhanced `.interactive-widget` container styling in `styles.css` with responsive flexbox layouts and real-time state feedback across all 8 simulator widgets.
- **Content Security Policy Alignment**: Updated `index.html` CSP `connect-src` to permit Cloudflare Web Analytics beacons (`cloudflareinsights.com`).

---

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
