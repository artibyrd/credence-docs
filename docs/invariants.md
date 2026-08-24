---
title: 'The Invariant Bible: Living Canon of System-Wide Invariants & Protocols'
description: Canonical reference for all mathematical rules, runtime safety guardrails,
  cryptographic protocols, and presentation invariants governing Credence.
since_version: v1.0.0
verified_version: v2.16.3
last_verified: 2026-08-24
tags:
- invariants
- architecture
- mathematics
- security
- protocols
- zero-build
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
- Zero-Build Web UI
- Textual TUI
difficulty: Specification
read_time: 14 min
---

# The Invariant Bible: Living Canon of System-Wide Invariants & Protocols

Mandatory invariants, mathematical formulas, and runtime guardrails governing human contributors, AI pair programmers, and autonomous agents across the Credence network.

| Pillar Domain | Scope & Focus | Primary Verification Gate | Core Engineering Guarantees |
| :--- | :--- | :--- | :--- |
| **1. Core Engineering & Runtime Safety** | Workspaces, async DB, token budgets, SSRF | `just test` (Hermetic in-memory SQLite) | Python 3.12 async, SSRF defense, 4k Pareto token budget |
| **2. Epistemic Ingestion & Scoring** | Information theory, Grounding, Satire | `pytest tests/test_scoring.py` | Topic entropy astroturfing defense, $G=1.0$ grounding, satire cloaking overrides |
| **3. Cryptographic Mesh & Authority** | P2P gossip, Ed25519 envelopes, Consensus | `pytest tests/test_mesh.py` | RFC 8785 Ed25519 envelopes, 5-factor quality $Q_i$, Galileo Rule protection |
| **4. Universal Presentation & Zero-Build** | Zero-npm, 4-way parity, accessible layouts | `pytest tests/test_docs_rendering.py` | Zero npm / zero build, synchronous 4-way parity, framed accessible UX |

> [!IMPORTANT]
> **Continuous Verification Invariant**: Every code change must pass automated static verification (`pytest tests/test_docs_integrity.py`), Playwright live rendering suites (`tests/test_docs_rendering.py`), and version parity checks before presenting for human review (**"Mk1 Eyeball"**). Invariants are a living, expanding canon of verifiable constraints.

---

## Pillar 1: Core Engineering & Runtime Safety

![Figure 1.1: Universal living invariant canon and cognitive hierarchy architecture](assets/illustrations/invariants.svg)<div class="invariant-card" id="inv-workspace-isolation">
<a id="invariant-1"></a>
<h3><a href="#docs/invariants#inv-workspace-isolation">The Invariant Bible: Project & Workspace Isolation</a></h3>
<p>Credence is completely decoupled from any external or sibling repositories. All tools, databases, configurations, and test runners must execute hermetically within the workspace boundary without depending on external host environment states.</p>
</div>

<div class="invariant-card" id="inv-async-sqlmodel">
<a id="invariant-2"></a>
<h3><a href="#docs/invariants#inv-async-sqlmodel">The Invariant Bible: Python & SQLModel Async Architecture</a></h3>
<p>The codebase requires Python <code>>=3.12,<3.13</code>. All database operations strictly use <code>sqlmodel.ext.asyncio.session.AsyncSession</code> and <code>async_sessionmaker</code>. To prevent SQLModel type metadata stripping, never import <code>from __future__ import annotations</code> in <code>models.py</code>.</p>
</div>

<div class="invariant-card" id="inv-version-governance">
<a id="invariant-3"></a>
<h3><a href="#docs/invariants#inv-version-governance">The Invariant Bible: Continuous Changelog & Semantic Version Governance</a></h3>
<p>Diligently maintain <code>docs/changelog.md</code> and manage Semantic Version bumps across the ecosystem whenever notable features, architectural blueprints, or bug fixes are completed. All 7 ecosystem manifests (<code>pyproject.toml</code>, <code>__init__.py</code>, <code>index.html</code>, <code>app.js</code>, <code>plugin.json</code>, and <code>credence.run</code>) must maintain 100% version parity.</p>
</div>

<div class="invariant-card" id="inv-hermetic-testing">
<a id="invariant-4"></a>
<h3><a href="#docs/invariants#inv-hermetic-testing">The Invariant Bible: Hermetic Testing & Docs Integrity</a></h3>
<p>The default unit test suite (<code>tests/</code>) must be 100% network-free using <code>sqlite+aiosqlite:///:memory:</code>, offline HTML DOM fixtures, and automated validation of documentation frontmatter, widget DOM contracts, and tutorial YAML blocks (<code>test_docs_integrity.py</code>).</p>
</div>

<div class="invariant-card" id="inv-scoped-verification">
<a id="invariant-5"></a>
<h3><a href="#docs/invariants#inv-scoped-verification">The Invariant Bible: Scoped Verification for Docs-Only Changes</a></h3>
<p>When modifying purely Markdown documentation, tutorials, blog essays, or static zero-build assets (<code>docs/</code>, <code>blog/</code>, <code>credence-docs</code>), bypass the full Python regression test suite (<code>just test</code>). Verify using local static inspection or web preview (<code>just serve-web</code>). Reserve full test runs for changes to Python source code (<code>credence/</code>), test suites (<code>tests/</code>), or data models.</p>
</div>

<div class="invariant-card" id="inv-mk1-eyeball">
<a id="invariant-6"></a>
<h3><a href="#docs/invariants#inv-mk1-eyeball">The Invariant Bible: Human Review Before Commits ("Mk1 Eyeball")</a></h3>
<p>Never execute <code>git commit</code> automatically. Always present changes and live verification results for human approval first.</p>
</div>

<div class="invariant-card" id="inv-multi-model-sovereignty">
<a id="invariant-7"></a>
<h3><a href="#docs/invariants#inv-multi-model-sovereignty">The Invariant Bible: Multi-Model Sovereignty & Token Budget</a></h3>
<p>While Google Gemini 3.7 Flash is the default reference engine for cost efficiency ($0.075/1M) and 16k thinking token density, the pipeline strictly abstracts inference via decoupled adapters supporting Anthropic (Claude 3.7 Sonnet), OpenAI (GPT-4o), DeepSeek (R1), and 100% offline local models (Ollama/vLLM with Llama 3.3 70B) with automatic offline circuit breakers (<code>QUOTA_PRESERVED</code>) at 30% headroom.</p>
</div>

<div class="invariant-card" id="inv-ssrf-defense">
<a id="invariant-8"></a>
<h3><a href="#docs/invariants#inv-ssrf-defense">The Invariant Bible: Network Ingestion SSRF Guard</a></h3>
<p>Reject cloud metadata (<code>169.254.169.254</code>, <code>metadata.google.internal</code>), loopback (<code>127.0.0.1</code>, <code>localhost</code>), and RFC 1918 private subnets unless running hermetic local fixtures (<code>allow_local=True</code>).</p>
</div>

<div class="invariant-card" id="inv-ingestion-defense">
<a id="invariant-9"></a>
<h3><a href="#docs/invariants#inv-ingestion-defense">The Invariant Bible: Red Team Ingestion & Protocol Defense</a></h3>
<p>XML parsers must reject <code>&lt;!DOCTYPE&gt;</code> / <code>&lt;!ENTITY&gt;</code> declarations (Billion Laughs protection). External LLM inputs must be enclosed in <code>&lt;untrusted_source_text&gt;</code> containers with prompt injection guard directives. FastMCP and P2P relay endpoints must enforce token-bucket rate limiters.</p>
</div>

<div class="invariant-card" id="inv-xml-safety">
<a id="invariant-10"></a>
<h3><a href="#docs/invariants#inv-xml-safety">The Invariant Bible: XML ElementTree Traversal Safety</a></h3>
<p>Never use boolean <code>or</code> expressions on ElementTree elements (e.g. <code>find(a) or find(b)</code>); always check <code>elem is not None</code> or use <code>_find_first_elem()</code> to prevent dropping leaf text elements.</p>
</div>

<div class="invariant-card" id="inv-ground-truth-config">
<a id="invariant-11"></a>
<h3><a href="#docs/invariants#inv-ground-truth-config">The Invariant Bible: Model Default Truth & Verification Guardrail</a></h3>
<p>Never assume or hallucinate model version defaults or pricing tiers. Always treat <code>credence/config.py</code> as canonical ground truth (<code>gemini-3.7-flash</code> default reference engine).</p>
</div>

<div class="invariant-card" id="inv-fastmcp-transport-security">
<a id="invariant-12"></a>
<h3><a href="#docs/invariants#inv-fastmcp-transport-security">The Invariant Bible: FastMCP 2.0 Reverse Proxy Transport Security</a></h3>
<p>FastMCP servers running over SSE must configure <code>TransportSecuritySettings(enable_dns_rebinding_protection=False, allowed_hosts=["*"], allowed_origins=["*"])</code> to allow seamless proxying via Cloudflare and custom domain host headers without <code>Invalid Host</code> rejections.</p>
</div>

<div class="invariant-card" id="inv-cloudflare-assets">
<a id="invariant-13"></a>
<h3><a href="#docs/invariants#inv-cloudflare-assets">The Invariant Bible: Cloudflare Workers Zero-Build Static Assets Invariant</a></h3>
<p>All Cloudflare Worker deployments utilizing custom <code>_worker.js</code> routing with static assets must define <code>binding = "ASSETS"</code> in <code>wrangler.toml</code> and maintain a <code>.assetsignore</code> file excluding <code>_worker.js</code> and <code>wrangler.toml</code> to prevent asset leakage and build failures.</p>
</div>

<div class="invariant-card" id="inv-edge-origin-header">
<a id="invariant-14"></a>
<h3><a href="#docs/invariants#inv-edge-origin-header">The Invariant Bible: Edge Routing Origin Header Translation</a></h3>
<p>Cloudflare Worker edge routers must rewrite <code>Host</code> headers to native Cloud Run target URLs (<code>&lt;service&gt;.run.app</code>) to bypass Google Search Console domain verification requirements while preserving live Server-Sent Events (SSE) streaming and global CORS headers.</p>
</div>

<div class="invariant-card" id="inv-4k-thinking-budget">
<a id="invariant-15"></a>
<h3><a href="#docs/invariants#inv-4k-thinking-budget">The Invariant Bible: Empirical Thinking Budget Sweet Spot (4k Invariant)</a></h3>
<p>In accordance with Golden 12 cross-model benchmarks, <code>gemini-3.7-flash</code> with a 4,096 thinking token budget represents the optimal Pareto frontier ($0.34–$0.68/1k audits, 2.4s–5.1s latency) achieving 100% verbatim grounding and Poe's Law satire neutralization without the 30x cost overhead and over-analysis penalties of flagship Pro models.</p>
</div>

<div class="invariant-card" id="inv-fastmcp-datetime-serialization">
<a id="invariant-16"></a>
<h3><a href="#docs/invariants#inv-fastmcp-datetime-serialization">The Invariant Bible: FastMCP Nested Datetime Serialization</a></h3>
<p>All data models and digest payloads exposed via FastMCP tools or resources must serialize nested <code>datetime</code> instances to ISO-8601 strings (<code>.isoformat()</code>) within <code>.to_dict()</code> prior to JSON encoding.</p>
</div>

<div class="invariant-card" id="inv-content-decoupling">
<a id="invariant-17"></a>
<h3><a href="#docs/invariants#inv-content-decoupling">The Invariant Bible: Content Decoupling & Hermetic CI</a></h3>
<p>Keep application repos lean by separating marketing HTML from core code. Maintain technical tutorials in <code>docs/tutorials/</code> in clean Markdown. CI workflows (<code>ci.yml</code>) must run 100% hermetically without cloud secrets.</p>

<div class="invariant-card" id="inv-progressive-disclosure">
<a id="invariant-18"></a>
<h3><a href="#docs/invariants#inv-progressive-disclosure">The Invariant Bible: Context Governance & Progressive Disclosure</a></h3>
<p>Keep <code>AGENTS.md</code> lean (<1,000 tokens) in thematic categories. Place multi-step runbooks in <code>.agents/skills/</code> and complete specifications in <code>docs/</code>.</p>
</div>

---

## Pillar 2: Epistemic Ingestion & Scoring Engine

<div class="invariant-card" id="inv-topic-entropy-defense">
<a id="invariant-19"></a>
<h3><a href="#docs/invariants#inv-topic-entropy-defense">The Invariant Bible: Topic Entropy Astroturfing Defense (The Pizza Hut Problem)</a></h3>
<p>Topic diversity calculators must incorporate Top-Token Concentration penalties ($C_{\text{top3}}$) alongside Shannon entropy ($H$) to ensure single-topic promotional pivots trigger autonomous quarantine ($H < 0.30$).</p>
$$H_{\text{penalized}} = H \times (1.0 - C_{\text{top3}})$$
</div>

<div class="invariant-card" id="inv-poes-law-satire">
<a id="invariant-20"></a>
<h3><a href="#docs/invariants#inv-poes-law-satire">The Invariant Bible: Poe's Law & Satire Safeguards</a></h3>
<p>Treat structural Schema.org and masthead badges as candidate cues. Neutralize legitimate satire ($0.00$), but invoke <code>SPJ-1.6</code> cloaking overrides (disabling satire protection) on factual defamatory/health allegations.</p>
</div>

<div class="invariant-card" id="inv-fixed-taxonomies">
<a id="invariant-21"></a>
<h3><a href="#docs/invariants#inv-fixed-taxonomies">The Invariant Bible: Namespaced Fixed Taxonomies</a></h3>
<p>Never hardcode rule names in scoring math; use namespaced URIs (<code>domain:cluster/rule_id@version</code>) pinned by catalog SHA-256 hashes.</p>
</div>

<div class="invariant-card" id="inv-verbatim-grounding">
<a id="invariant-22"></a>
<h3><a href="#docs/invariants#inv-verbatim-grounding">The Invariant Bible: Whitespace-Insensitive Grounding</a></h3>
<p>Quote validators must collapse whitespace sequences (<code>\s+</code> &rarr; <code> </code>) in both citations and source DOM text before substring matching ($G=1.0$).</p>
</div>

<div class="invariant-card" id="inv-heuristic-disclosure">
<a id="invariant-23"></a>
<h3><a href="#docs/invariants#inv-heuristic-disclosure">The Invariant Bible: Transparent Heuristic Disclosure</a></h3>
<p>When the offline governor activates, explicitly populate <code>evaluation_method: "offline_structural_heuristic"</code> with confidence capped at $\le 0.50$.</p>
</div>

---

## Pillar 3: Cryptographic Mesh & Empirical Authority

<div class="invariant-card" id="inv-canonical-json-ed25519">
<a id="invariant-24"></a>
<h3><a href="#docs/invariants#inv-canonical-json-ed25519">The Invariant Bible: RFC 8785 Canonical JSON & Ed25519 Custody</a></h3>
<p>Signatures must use RFC 8785 canonical bytes with UTC timestamps. Intermediate relay nodes must never re-sign valid envelopes.</p>
</div>

<div class="invariant-card" id="inv-5factor-node-quality">
<a id="invariant-25"></a>
<h3><a href="#docs/invariants#inv-5factor-node-quality">The Invariant Bible: 5-Factor Node Quality ($Q_i$)</a></h3>
<p>Reputation evaluates 5 composite factors: $Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$. Bootstrap seeds (<code>peers.json</code>) require root Ed25519 signature verification.</p>
</div>

<div class="invariant-card" id="inv-empirical-expertise">
<a id="invariant-26"></a>
<h3><a href="#docs/invariants#inv-empirical-expertise">The Invariant Bible: Empirical Expertise ($E_i$) & Anti-Diploma Invariant</a></h3>
<p>Authority is earned via performance ($E_i = 0.40 C + 0.35 G + 0.15 V + 0.10 L$) and combined with node quality ($W_i = 0.20 Q_i + 0.80 E_i$). Requires domain entropy across $\ge 5$ distinct FQDNs. Hallucinated findings incur a 50% score slash.</p>
</div>

<div class="invariant-card" id="inv-galileo-rule">
<a id="invariant-27"></a>
<h3><a href="#docs/invariants#inv-galileo-rule">The Invariant Bible: The Galileo Rule (Asymmetric Grounded Evidence)</a></h3>
<p>Absence of evidence is not evidence of absence. Verified domain authorities submitting 100% grounded citations cannot be outlier-dismissed (<code>is_outlier = False</code>) by swarms reporting zero violations. Consensus uses Domain Authority Weighted Medians.</p>
</div>

<div class="invariant-card" id="inv-bittorrent-worksharing">
<a id="invariant-28"></a>
<h3><a href="#docs/invariants#inv-bittorrent-worksharing">The Invariant Bible: BitTorrent Work-Sharing & Generous Defaults</a></h3>
<p>Nodes seed attestations freely and divide syndicated feeds across peers to achieve 92.3% compute savings at $0.00 token cost.</p>
</div>

<div class="invariant-card" id="inv-byzantine-cartel-resistance">
<a id="invariant-29"></a>
<h3><a href="#docs/invariants#inv-byzantine-cartel-resistance">The Invariant Bible: Byzantine Cartel Resistance ($3f+1$)</a></h3>
<p>The mesh requires $\ge 3f + 1$ nodes to tolerate up to $f$ adversarial Sybil cartel nodes without state compromise, reinforced by mandatory domain entropy requirements.</p>
</div>

---

## Pillar 4: Universal Presentation Layer & Zero-Build Web

<div class="invariant-card" id="inv-4way-feature-parity">
<a id="invariant-30"></a>
<h3><a href="#docs/invariants#inv-4way-feature-parity">The Invariant Bible: Universal Feature Parity</a></h3>
<p>Maintain synchronous feature parity across all 4 interfaces: <b>CLI</b> (<code>credence</code>), <b>FastMCP 2.0</b> (<code>credence_</code> tools & <code>credence://</code> resources), <b>Textual TUI</b> (<code>credence tui</code>), and <b>Zero-Build Web UI</b> (<code>web/</code>).</p>
</div>

<div class="invariant-card" id="inv-zero-build-standards">
<a id="invariant-31"></a>
<h3><a href="#docs/invariants#inv-zero-build-standards">The Invariant Bible: Universal Zero-Build Standards (Zero-npm Invariant)</a></h3>
<p>All public web surfaces, documentation portals (<code>credence-docs</code>), and sovereign blogs strictly use vanilla HTML5, CSS Custom Properties (<code>credence-ui.css</code>), and native ES Modules with <b>zero npm dependencies, zero package.json, and zero build toolchains</b>. Never introduce Node.js frameworks (Astro, Next.js, Vite) for any web property.</p>
</div>

<div class="invariant-card" id="inv-zero-build-math">
<a id="invariant-32"></a>
<h3><a href="#docs/invariants#inv-zero-build-math">The Invariant Bible: Zero-Build Math & Currency Invariant</a></h3>
<p>All zero-build Markdown parsers must render mathematical expressions using native Unicode entities and styled containers (<code>.math-block</code>, <code>.math-inline</code>) while preserving currency strings (<code>$0.00</code>, <code>$15.00</code>) without escaping artifacts.</p>
</div>

<div class="invariant-card" id="inv-edge-canonicalization">
<a id="invariant-33"></a>
<h3><a href="#docs/invariants#inv-edge-canonicalization">The Invariant Bible: Edge Subdirectory Canonicalization</a></h3>
<p>Multi-domain edge routers (<code>_worker.js</code>) must intercept internal <code>env.ASSETS</code> folder redirects and enforce 301 canonical redirects to prevent folder names (e.g. <code>/credence.run/</code>) from appearing in public browser address bars.</p>
</div>

<div class="invariant-card" id="inv-mermaid-syntax-safety">
<a id="invariant-34"></a>
<h3><a href="#docs/invariants#inv-mermaid-syntax-safety">The Invariant Bible: Universal Technical Schematic & Visual Syntax Guardrail</a></h3>
<p>All technical diagrams across markdown documentation and planning artifacts must strictly use enclosed UTF-8 box schematics, wire sequence layouts, or structured state matrices (<code>+-+|+++++++-|</code>) with strict $\le 150$ characters line width constraints and zero external client-side rendering bundle dependencies to guarantee high-density visual clarity across all devices.</p>
</div>

<div class="invariant-card" id="inv-visual-density">
<a id="invariant-35"></a>
<h3><a href="#docs/invariants#inv-visual-density">The Invariant Bible: Visual Density & Anti-Wall-of-Text Invariant</a></h3>
<p>All documentation guides, tutorials, and editorial blog posts must maintain a visual density of $\ge 2.0$ visual elements per 500 words (using enclosed UTF-8 technical schematics, comparison matrices, and styled alert callout boxes) to eliminate unformatted prose fatigue.</p>
</div>

<div class="invariant-card" id="inv-playwright-rendering-tests">
<a id="invariant-36"></a>
<h3><a href="#docs/invariants#inv-playwright-rendering-tests">The Invariant Bible: Automated Live Rendering Regression Verification</a></h3>
<p>All UI and documentation rendering updates must be verified via automated Playwright live rendering test suites (<code>tests/test_docs_rendering.py</code>) ensuring non-zero SVG diagram dimensions, zero raw HTML tag leaks in rendered prose, and interactive widget state contracts.</p>
</div>

<div class="invariant-card" id="inv-inline-html-math-integrity">
<a id="invariant-37"></a>
<h3><a href="#docs/invariants#inv-inline-html-math-integrity">The Invariant Bible: Zero-Build Inline HTML Tag & Nested Math Integrity</a></h3>
<p>Zero-build Markdown parsers must mask and preserve safe author-supplied inline HTML tags (<code>&lt;a&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;span&gt;</code>) before entity escaping and use balanced-brace recursive parsing for nested LaTeX mathematical structures (e.g. <code>\frac{...}{...}</code>) to guarantee zero raw tag string leaks or unparsed backslashes across all surfaces.</p>
</div>

<div class="invariant-card" id="inv-anti-scrollbox">
<a id="invariant-38"></a>
<h3><a href="#docs/invariants#inv-anti-scrollbox">The Invariant Bible: Anti-Scrollbox & Natural Flow Presentation</a></h3>
<p>Document reading surfaces and forensic inspectors must never constrain content with fixed nested vertical scrollbars; article previews must expand naturally (<code>height: auto; overflow: visible;</code>) and dense technical payloads must be encapsulated in native <code>&lt;details&gt;</code> accordions with auto-height <code>&lt;pre&gt;</code> blocks.</p>
</div>

<div class="invariant-card" id="inv-boredom-root-expansion">
<a id="invariant-39"></a>
<h3><a href="#docs/invariants#inv-boredom-root-expansion">The Invariant Bible: Opportunistic Boredom Ingestion & Epistemic Root Expansion</a></h3>
<p>When nodes detect idle compute with rolling daily token headroom $\ge 30\%$ and clear circuit breakers, they must autonomously execute prioritized FIFO queue digestion, extract cited outbound domains from verified clean articles ($G=1.00, \text{Score} \le 25.0$), probe and auto-subscribe to candidate RSS/Atom feeds, and gossip signed Ed25519 attestations across the P2P mesh to enable zero-token peer adoption.</p>
</div>

<div class="invariant-card" id="inv-soft-blacklist-buzzfeed">
<a id="invariant-40"></a>
<h3><a href="#docs/invariants#inv-soft-blacklist-buzzfeed">The Invariant Bible: Soft Blacklisting & The BuzzFeed News Doctrine (Asymmetric Redemption)</a></h3>
<p>Consistently deceptive sources ($\ge 3$ consecutive deceptions or trust score $\le 20.0$) MUST NOT be hard-deleted, but transitioned to <code>QUARANTINED_PROBATION</code> with exponential polling backoff ($T_{\text{poll}} \times 2^{\min(\text{deceptions}, 6)}$). Under the <strong>BuzzFeed News Doctrine</strong>, quarantined domains retain a verifiable path to redemption through low-frequency Lazarus sampling probes; completing $k=5$ consecutive clean audits ($G=1.00, \text{Suspicion} \le 15.0$) spanning $\ge 2$ distinct subject namespaces graduates the domain to probationary recovery, while any high-severity violation (Severity $\ge 3$) immediately triggers full quarantine relapse.</p>
</div>

<div class="invariant-card" id="inv-symmetric-navigation-zero-cache">
<a id="invariant-41"></a>
<h3><a href="#docs/invariants#inv-symmetric-navigation-zero-cache">The Invariant Bible: Symmetric 4-Pillar Navigation & Zero-Cache Multi-Domain Edge Routing Invariant</a></h3>
<p>Global header navigation is strictly 5 invariant links (<code>Home</code>, <code>Docs</code>, <code>Reports</code>, <code>Nexus</code>, <code>Foundation</code>) across all pages. Footer architecture strictly uses 4 balanced pillars (4 links each); docs reading panes use centered 2x2 card modules (<code>max-width: 760px; margin: 0 auto;</code>) with centered copyright and zero redundant secondary bottom links (<code>.footer-bottom-links</code>). All 18 apex and subdomain routes must be explicitly bound in <code>wrangler.toml</code> with zero-cache headers (<code>Cache-Control: public, max-age=0, must-revalidate</code> for static assets, <code>no-cache, no-store, must-revalidate</code> for docs/blog).</p>
</div>

<div class="invariant-card" id="inv-information-pyramid-lensing">
<a id="invariant-42"></a>
<h3><a href="#docs/invariants#inv-information-pyramid-lensing">The Invariant Bible: The Epistemic Lensing & Information Pyramid Invariant</a></h3>
<p>All user-facing views, CLI summaries, TUI workstations, and web surfaces strictly structure content into a 3-tier cognitive hierarchy: Surface Lens (Glance — above fold: score gauge, 1-line verdict, 0 math), Focus Lens (Explore — mid-page: claims, grounded quotes, trajectory sparklines), and Deep Spectrum Lens (Forensic — base: Ed25519 signatures, RFC 8785 canonical bytes, live WebCrypto DOM hash match).</p>
</div>

<div class="invariant-card" id="inv-order-of-operations">
<a id="invariant-43"></a>
<h3><a href="#docs/invariants#inv-order-of-operations">The Invariant Bible: The Cart-Before-the-Horse Order-of-Operations Invariant</a></h3>
<p>Every implementation plan, task breakdown, and execution sequence must undergo a strict dependency analysis and topological order verification before being presented for human review ("Mk1 Eyeball"). Prerequisite ingestion scrubbers, data models, and cryptographic primitives must strictly precede downstream APIs, UI components, CLI commands, and test suites. Furthermore, empirical tests, red team exercises, and benchmark gauntlets must strictly be executed and verified before drafting corresponding case studies, lab documentation, or walkthroughs.</p>
</div>

<div class="invariant-card" id="inv-web-component-zero-clone">
<a id="invariant-44"></a>
<h3><a href="#docs/invariants#inv-web-component-zero-clone">The Invariant Bible: Web Component Isolation & Zero-Clone Safety</a></h3>
<p>Custom elements and embeddable Web Components (<code>HTMLElement</code> subclasses) must never invoke <code>cloneNode(true)</code> on host DOM trees containing custom element instances to prevent recursive constructor cascades (<code>Maximum call stack size exceeded</code>). Attribute observers (<code>attributeChangedCallback</code>) must be purely synchronous state transitions with zero asynchronous execution loops. All clientside parsers must guard against null/empty frontmatters and nested container directives.</p>
</div>

<div class="invariant-card" id="inv-dense-workstation-viewport">
<a id="invariant-45"></a>
<h3><a href="#docs/invariants#inv-dense-workstation-viewport">The Invariant Bible: The Dense Workstation Viewport & Zero-Masking Invariant</a></h3>
<p>High-density workstation card grids must be enclosed within a <code>.ws-scroll-pane</code> container with a maximum vertical bound (<code>max-height: 580px; overflow-y: auto;</code>) to prevent massive vertical sprawl. Dense data tables must enforce sticky headers during deep scrolling. In multi-domain edge deployments, edge asset lookups via <code>env.ASSETS.fetch()</code> must target explicit <code>.html</code> files using the incoming origin to prevent root fallback masking and 307 redirect cascades.</p>
</div>

## Invariant Reference Index Matrix

| Invariant Slug | Legacy ID | Pillar | Key Property | Formula / Enforcement |
| :--- | :--- | :--- | :--- | :--- |
| **[`inv-workspace-isolation`](#inv-workspace-isolation)** | Inv 1 | Safety | Workspace Isolation | Decoupled execution |
| **[`inv-async-sqlmodel`](#inv-async-sqlmodel)** | Inv 2 | Safety | Python & SQLModel Async | Python 3.12 async sessions |
| **[`inv-version-governance`](#inv-version-governance)** | Inv 3 | Governance | Version Parity | Universal manifest sync |
| **[`inv-hermetic-testing`](#inv-hermetic-testing)** | Inv 4 | Safety | Hermetic Testing | In-memory SQLite & offline fixtures |
| **[`inv-scoped-verification`](#inv-scoped-verification)** | Inv 5 | Safety | Scoped Verification | Scoped inspection for docs-only edits |
| **[`inv-mk1-eyeball`](#inv-mk1-eyeball)** | Inv 6 | Class α | Human Approval | Mk1 Eyeball before commits |
| **[`inv-multi-model-sovereignty`](#inv-multi-model-sovereignty)** | Inv 7 | Class γ | Multi-Model Sovereignty | 30% quota circuit breakers |
| **[`inv-ssrf-defense`](#inv-ssrf-defense)** | Inv 8 | Class α | Ingestion SSRF Guard | Cloud metadata & RFC 1918 rejection |
| **[`inv-ingestion-defense`](#inv-ingestion-defense)** | Inv 9 | Class α | Ingestion Protocol Defense | Billion Laughs & sandbox tags |
| **[`inv-xml-safety`](#inv-xml-safety)** | Inv 10 | Safety | XML Traversal Safety | elem is not None checks |
| **[`inv-ground-truth-config`](#inv-ground-truth-config)** | Inv 11 | Safety | Ground Truth Config | credence/config.py as ground truth |
| **[`inv-fastmcp-transport-security`](#inv-fastmcp-transport-security)** | Inv 12 | Safety | FastMCP Reverse Proxy | TransportSecuritySettings config |
| **[`inv-cloudflare-assets`](#inv-cloudflare-assets)** | Inv 13 | Presentation | Zero-Build Static Assets | binding = ASSETS in wrangler.toml |
| **[`inv-edge-origin-header`](#inv-edge-origin-header)** | Inv 14 | Presentation | Origin Header Translation | Host header rewrite to run.app |
| **[`inv-4k-thinking-budget`](#inv-4k-thinking-budget)** | Inv 15 | Safety | 4k Thinking Sweet Spot | Gemini 3.7 Flash Pareto optimal |
| **[`inv-fastmcp-datetime-serialization`](#inv-fastmcp-datetime-serialization)** | Inv 16 | Safety | Datetime Serialization | .isoformat() strings in .to_dict() |
| **[`inv-content-decoupling`](#inv-content-decoupling)** | Inv 17 | Safety | Content Decoupling | Clean markdown & offline CI |
| **[`inv-progressive-disclosure`](#inv-progressive-disclosure)** | Inv 18 | Governance | Progressive Disclosure | AGENTS.md < 800 token budget |
| **[`inv-topic-entropy-defense`](#inv-topic-entropy-defense)** | Inv 19 | Class γ | Pizza Hut Astroturfing | $H_{\text{penalized}} = H \times (1 - C_{\text{top3}})$ |
| **[`inv-poes-law-satire`](#inv-poes-law-satire)** | Inv 20 | Class γ | Poe's Law & Satire | Structural cues & SPJ-1.6 override |
| **[`inv-fixed-taxonomies`](#inv-fixed-taxonomies)** | Inv 21 | Ingestion | Namespaced Taxonomies | domain:cluster/rule_id@version |
| **[`inv-verbatim-grounding`](#inv-verbatim-grounding)** | Inv 22 | Class α | Verbatim Grounding | $G=1.00$ whitespace-collapsed |
| **[`inv-heuristic-disclosure`](#inv-heuristic-disclosure)** | Inv 23 | Ingestion | Heuristic Disclosure | evaluation_method explicit tagging |
| **[`inv-canonical-json-ed25519`](#inv-canonical-json-ed25519)** | Inv 24 | Class α | Canonical Signatures | RFC 8785 Ed25519 custody |
| **[`inv-5factor-node-quality`](#inv-5factor-node-quality)** | Inv 25 | Mesh | 5-Factor Node Quality | $Q_i = 0.25U + 0.30C + 0.25G + 0.10T + 0.10K$ |
| **[`inv-empirical-expertise`](#inv-empirical-expertise)** | Inv 26 | Mesh | Anti-Diploma Authority | $E_i = 0.40C + 0.35G + 0.15V + 0.10L$ |
| **[`inv-galileo-rule`](#inv-galileo-rule)** | Inv 27 | Mesh | The Galileo Rule | Asymmetric grounded evidence preservation |
| **[`inv-bittorrent-worksharing`](#inv-bittorrent-worksharing)** | Inv 28 | Mesh | BitTorrent Work-Sharing | HRW hashing & 92.3% token savings |
| **[`inv-byzantine-cartel-resistance`](#inv-byzantine-cartel-resistance)** | Inv 29 | Mesh | Byzantine Cartel Defense | $\ge 3f + 1$ nodes & domain entropy |
| **[`inv-4way-feature-parity`](#inv-4way-feature-parity)** | Inv 30 | Class γ | 4-Way Parity | Synchronous CLI, FastMCP, TUI, Web |
| **[`inv-zero-build-standards`](#inv-zero-build-standards)** | Inv 31 | Class γ | Zero-npm / Zero-Build | Vanilla ES Modules & 0 node_modules |
| **[`inv-zero-build-math`](#inv-zero-build-math)** | Inv 32 | Presentation | Zero-Build Math | Native Unicode & currency preservation |
| **[`inv-edge-canonicalization`](#inv-edge-canonicalization)** | Inv 33 | Presentation | Edge Subdirectory Canonical | 301 redirects preventing folder leaks |
| **[`inv-mermaid-syntax-safety`](#inv-mermaid-syntax-safety)** | Inv 34 | Presentation | Technical Schematic Guardrail | Enclosed UTF-8 box schematics & line limits |
| **[`inv-visual-density`](#inv-visual-density)** | Inv 35 | Presentation | Visual Density | $\ge 2.0$ visuals per 500 words |
| **[`inv-playwright-rendering-tests`](#inv-playwright-rendering-tests)** | Inv 36 | Presentation | Live Playwright Tests | SVG geometry & 0 HTML leaks |
| **[`inv-inline-html-math-integrity`](#inv-inline-html-math-integrity)** | Inv 37 | Presentation | Inline HTML & Math | Balanced-brace LaTeX & safe tag masking |
| **[`inv-anti-scrollbox`](#inv-anti-scrollbox)** | Inv 38 | Presentation | Anti-Scrollbox Flow | Natural auto-height & details accordion |
| **[`inv-boredom-root-expansion`](#inv-boredom-root-expansion)** | Inv 39 | Mesh | Boredom & Root Expansion | Autonomous opportunistic digestion |
| **[`inv-soft-blacklist-buzzfeed`](#inv-soft-blacklist-buzzfeed)** | Inv 40 | Mesh | Soft Blacklist & BuzzFeed | Exponential backoff & asymmetric redemption |
| **[`inv-symmetric-navigation-zero-cache`](#inv-symmetric-navigation-zero-cache)** | Inv 41 | Class γ | Symmetric Navigation | 5 header links, 4 footers, zero-cache |
| **[`inv-information-pyramid-lensing`](#inv-information-pyramid-lensing)** | Inv 42 | Class γ | Information Pyramid | 3-Tier Cognitive Hierarchy (Surface/Focus/Deep) |
| **[`inv-order-of-operations`](#inv-order-of-operations)** | Inv 43 | Class β | Order-of-Operations | Topological dependency ordering before review |
| **[`inv-web-component-zero-clone`](#inv-web-component-zero-clone)** | Inv 44 | Class γ | Web Component Zero-Clone | Zero recursive cascades & synchronous attrs |
| **[`inv-dense-workstation-viewport`](#inv-dense-workstation-viewport)** | Inv 45 | Presentation | Dense Viewport Bounds | Bounded .ws-scroll-pane & direct asset fetch |
