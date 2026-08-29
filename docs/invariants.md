---
title: 'The Invariant Bible: Living Canon of System-Wide Invariants & Protocols'
description: Canonical reference for all mathematical rules, runtime safety guardrails,
  cryptographic protocols, and presentation invariants governing Credence.
since_version: v1.0.0
verified_version: v2.18.3
last_verified: 2026-08-29
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
read_time: 15 min
---

# The Invariant Bible: Living Canon of System-Wide Invariants & Protocols

Mandatory invariants, mathematical formulas, runtime guardrails, and agentic engineering standards governing human contributors, AI pair programmers, and autonomous agents across the Credence network.

| Pillar Domain | Scope & Focus | Primary Verification Gate | Core Engineering Guarantees |
| :--- | :--- | :--- | :--- |
| **1. Core Engineering & Runtime Safety** | Workspaces, async DB, token budgets, SSRF | `just test` (Hermetic in-memory SQLite) | Python 3.12 async, SSRF defense, 4k Pareto token budget |
| **2. Epistemic Ingestion & Scoring** | Information theory, Grounding, Satire | `pytest tests/test_scoring.py` | Topic entropy astroturfing defense, $G=1.0$ grounding, satire cloaking overrides |
| **3. Cryptographic Mesh & Authority** | P2P gossip, Ed25519 envelopes, Consensus | `pytest tests/test_mesh.py` | RFC 8785 Ed25519 envelopes, 5-factor quality $Q_i$, Galileo Rule protection |
| **4. Universal Presentation & Zero-Build** | Zero-npm, 4-way parity, accessible layouts | `pytest tests/test_docs_rendering.py` | Zero npm / zero build, synchronous 4-way parity, framed accessible UX |

> [!IMPORTANT]
> **Continuous Verification Invariant**: Every code change must pass automated static verification (`pytest tests/test_docs_integrity.py`), Playwright live rendering suites (`tests/test_docs_rendering.py`), and version parity checks before presenting for human review (**"Mk1 Eyeball"**). Invariants are a living, expanding canon of verifiable constraints.

<div class="invariant-scope-filter-bar">
  <div class="scope-filter-label">Filter Living Canon by Scope:</div>
  <div class="scope-filter-buttons">
    <button type="button" class="scope-btn active" data-scope-filter="all">All Invariants (57)</button>
    <button type="button" class="scope-btn" data-scope-filter="universal">🌐 Universal Agentic Standards (37)</button>
    <button type="button" class="scope-btn" data-scope-filter="domain">🔬 Credence Epistemic Domain (20)</button>
  </div>
  <button type="button" class="export-starter-btn" id="btn-export-agentic-pack">📦 Export Universal Agentic Starter Pack</button>
</div>


---

## Pillar 1: Core Engineering & Runtime Safety

![Figure 1.1: Universal living invariant canon and cognitive hierarchy architecture](assets/illustrations/invariants.svg)

<div class="invariant-card" id="inv-workspace-isolation" data-scope="universal" data-class="beta">
<a id="invariant-1"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-workspace-isolation">The Invariant Bible: Project & Workspace Isolation</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">The project executes completely hermetically within its workspace without depending on external host environment state.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents subtle cross-contamination between projects, ghost dependencies, and unreproducible local setups.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-workspace-isolation</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> execute all tools, databases, configs, and tests within the workspace boundary.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to depend on external host environment state, global npm packages, or parent directories.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>Workspace root, Subprocess execution</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-async-sqlmodel" data-scope="universal" data-class="beta">
<a id="invariant-2"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-async-sqlmodel">The Invariant Bible: Python & SQLModel Async Architecture</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Database operations are 100% asynchronous with non-blocking sessions.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Synchronous database queries in async event loops freeze FastMCP servers and API request throughput.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-async-sqlmodel</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use Python >=3.12,<3.13.</li>
        <li><span class='deontic-must'>MUST</span> use <code>sqlmodel.ext.asyncio.session.AsyncSession</code> and <code>async_sessionmaker</code>.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to import <code>from __future__ import annotations</code> in <code>models.py</code> (prevents SQLModel runtime type stripping).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/models.py, credence/database.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_database.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-version-governance" data-scope="universal" data-class="gamma">
<a id="invariant-3"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-version-governance">The Invariant Bible: Continuous Changelog & Semantic Version Governance</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Every notable feature, blueprint, or fix updates the changelog and maintains synchronous version parity across all manifests.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents version drift, stale documentation badges, and broken client dependencies.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-version-governance</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> update <code>docs/changelog.md</code> on every architectural release or significant fix.</li>
        <li><span class='deontic-must'>MUST</span> synchronize version string across all ecosystem manifests simultaneously.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>pyproject.toml, credence/__init__.py, credence-docs/docs/changelog.md</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_ecosystem_version_parity</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-hermetic-unit-tests" data-scope="universal" data-class="beta">
<a id="invariant-4"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-hermetic-unit-tests">The Invariant Bible: Hermetic Unit Test Isolation & Zero-Browser CI</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Unit test suites run 100% in-memory with zero network calls, zero daemons, and sub-35s execution.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Flaky network tests or slow browser daemons in unit test loops destroy developer iteration speed and CI reliability.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-hermetic-unit-tests</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> run <code>@pytest.mark.unit</code> tests using in-memory SQLite (<code>sqlite+aiosqlite:///:memory:</code>) and mock fixtures.</li>
        <li><span class='deontic-must'>MUST</span> execute the entire unit suite in <35 seconds with zero external network I/O.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to spawn live browser runtimes inside standard unit test gates.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>tests/unit/, tests/conftest.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_hermetic_unit_test_markers_invariant</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-scoped-verification" data-scope="universal" data-class="beta">
<a id="invariant-5"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-scoped-verification">The Invariant Bible: Scoped Verification for Docs-Only Changes</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Documentation and static asset edits use lightweight static inspection without wasting time running full backend regressions.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Saves compute, token budget, and iteration cycle time on non-code changes.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-scoped-verification</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-when'>WHEN</span> modifying only Markdown (<code>docs/</code>, <code>blog/</code>) or static assets, SKIP full Python backend test suite.</li>
        <li><span class='deontic-must'>MUST</span> verify docs changes via <code>test_docs_integrity.py</code> or local web preview (<code>just serve-web</code>).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence-docs/docs/, credence-docs/blog/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-mk1-eyeball" data-scope="universal" data-class="alpha">
<a id="invariant-6"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-mk1-eyeball">The Invariant Bible: Human Review Gate ("Mk1 Eyeball")</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All code commits, PR merges, and production deploys require explicit human review and sign-off.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Maintains human sovereignty, prevents autonomous hallucinations from slipping into production, and ensures accountability.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-mk1-eyeball</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to execute <code>git commit</code>, tag, or deploy autonomously without explicit human sign-off.</li>
        <li><span class='deontic-must'>MUST</span> present diff summaries and live verification links before requesting approval.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>git commit, git push, release workflows</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-clean-scratch-scripts" data-scope="universal" data-class="alpha">
<a id="invariant-46"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-clean-scratch-scripts">The Invariant Bible: Clean Brain Scratch Script Approvals</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Complex multi-step or multi-repo agent commands are written to standalone script files rather than executed as unreadable inline bash blobs.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Inline bash loops (<code>for r in ...</code>) are unreadable during human approval dialogs, hide errors, and destroy auditability.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-clean-scratch-scripts</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to execute multi-command inline bash blobs or shell loops in <code>BypassSandbox: true</code> tool calls.</li>
        <li><span class='deontic-must'>MUST</span> write standalone Python/Bash scripts to <code>&lt;appDataDir&gt;/brain/&lt;conversation-id&gt;/scratch/&lt;name&gt;.py</code> or call pre-approved <code>just</code> recipes.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>run_command, brain scratch directory</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-untrusted-ingestion" data-scope="universal" data-class="alpha">
<a id="invariant-8"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-untrusted-ingestion">The Invariant Bible: Untrusted Ingestion Boundary & Network Defense</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">External network ingestion rejects internal metadata and private IPs, defends against XML entity expansion, and wraps LLM inputs in strict safety boundaries.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents SSRF attacks on cloud provider metadata endpoints (169.254.169.254), Billion Laughs DoS, and indirect prompt injection.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-untrusted-ingestion</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> block cloud metadata IPs (<code>169.254.169.254</code>, <code>metadata.google.internal</code>), loopback, and RFC 1918 subnets unless <code>allow_local=True</code>.</li>
        <li><span class='deontic-must'>MUST</span> reject <code>&lt;!DOCTYPE&gt;</code> and <code>&lt;!ENTITY&gt;</code> XML declarations.</li>
        <li><span class='deontic-must'>MUST</span> enclose untrusted external text in <code>&lt;untrusted_source_text&gt;</code> containers before passing to LLMs.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/ingestion.py, credence/security/ssrf.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_ssrf_protection.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-xml-safety" data-scope="universal" data-class="beta">
<a id="invariant-10"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-xml-safety">The Invariant Bible: XML ElementTree Traversal Safety</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">XML tree parsers check element existence explicitly (<code>elem is not None</code>) rather than using boolean truthiness.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> In Python ElementTree, elements without children evaluate as falsy in boolean expressions, silently dropping valid text leaves.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-xml-safety</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to use boolean <code>or</code> expressions on ElementTree elements (e.g. <code>find(a) or find(b)</code>).</li>
        <li><span class='deontic-must'>MUST</span> use explicit <code>elem is not None</code> checks or <code>_find_first_elem()</code> helper.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/sifter.py, credence/pipeline/rss.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_xml_parsing.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-ground-truth-config" data-scope="universal" data-class="beta">
<a id="invariant-11"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-ground-truth-config">The Invariant Bible: Model Default Truth & Verification Guardrail</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Application defaults and pricing tiers are defined in a single ground-truth configuration module rather than hallucinated or hardcoded in multiple places.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents contradictory model version defaults, obsolete pricing assumptions, and configuration fragmentation.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-ground-truth-config</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> treat <code>credence/config.py</code> as canonical ground truth for all engine defaults.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to hardcode model parameters or pricing constants in downstream components.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/config.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_config.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-fastmcp-transport-security" data-scope="universal" data-class="beta">
<a id="invariant-12"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-fastmcp-transport-security">The Invariant Bible: FastMCP 2.0 Reverse Proxy Transport Security</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">FastMCP SSE servers configure permissive host headers when running behind edge reverse proxies to prevent invalid host rejections.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Cloudflare and custom domain proxies rewrite incoming host headers; strict default DNS rebinding protection blocks legitimate proxied clients.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-fastmcp-transport-security</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> configure <code>TransportSecuritySettings(enable_dns_rebinding_protection=False, allowed_hosts=['*'], allowed_origins=['*'])</code> on FastMCP SSE servers.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/server.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_fastmcp.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-fastmcp-datetime-serialization" data-scope="universal" data-class="gamma">
<a id="invariant-16"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-fastmcp-datetime-serialization">The Invariant Bible: FastMCP Nested Datetime Serialization</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All data payloads exposed via FastMCP tools serialize datetime objects to ISO-8601 strings prior to JSON encoding.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Native Python <code>datetime</code> instances fail default <code>json.dumps()</code> serialization with <code>TypeError: Object of type datetime is not JSON serializable</code>.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-fastmcp-datetime-serialization</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> serialize all nested <code>datetime</code> instances to ISO-8601 strings (<code>.isoformat()</code>) within <code>.to_dict()</code> prior to FastMCP transmission.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/server.py, credence/models.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_fastmcp.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-content-decoupling" data-scope="universal" data-class="beta">
<a id="invariant-17"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-content-decoupling">The Invariant Bible: Content Decoupling & Hermetic CI</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Application code, marketing content, and documentation are cleanly separated so CI runs hermetically without cloud secrets.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Coupling documentation rendering or marketing assets into core build steps inflates test times and creates circular dependencies.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-content-decoupling</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> maintain technical documentation in <code>docs/</code> in pure Markdown.</li>
        <li><span class='deontic-must'>MUST</span> ensure core CI workflows run 100% hermetically without cloud secrets.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>.github/workflows/ci.yml</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-progressive-disclosure" data-scope="universal" data-class="gamma">
<a id="invariant-18"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-progressive-disclosure">The Invariant Bible: Context Governance & Progressive Disclosure</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Agent root context (AGENTS.md) is kept under 800 tokens by progressively routing deep runbooks into skills and tests.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Preventing prompt bloat preserves LLM reasoning attention and saves massive token overhead on every turn.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Tokens</code></td><td><strong>Prompt Token Budget</strong></td><td><code>1.0</code></td><td>Total token footprint of root system prompt.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Tokens}(\text{AGENTS.md}) < 800$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-progressive-disclosure</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> keep <code>AGENTS.md</code> strictly < 800 tokens total.</li>
        <li><span class='deontic-must'>MUST</span> route subsystem runbooks to <code>.agents/skills/</code> and deterministic rules to <code>tests/</code> (The Demotion Highway).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>AGENTS.md</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_agents_md_categorization_and_budget</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-cart-before-horse" data-scope="universal" data-class="beta">
<a id="invariant-43"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-cart-before-horse">The Invariant Bible: The Cart-Before-the-Horse Order-of-Operations Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Prerequisite data models and scrubbers must precede APIs and UIs; tests must pass before writing case studies.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Building user interfaces or writing walkthroughs before underlying data models and tests are verified creates wasted rework and speculative code.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-cart-before-horse</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> build prerequisite data models and scrubbers before downstream APIs and UIs.</li>
        <li><span class='deontic-must'>MUST</span> execute and pass empirical tests before drafting corresponding walkthroughs or case studies.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>Implementation plans, Task breakdowns</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-commit-before-deploy" data-scope="universal" data-class="beta">
<a id="invariant-47"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-commit-before-deploy">The Invariant Bible: Commit-Before-Deploy & Push-and-Delegate CI/CD Gate</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Git trees must be clean and committed before tagging releases; verification relies on CI pipeline checks rather than local ad-hoc deploys.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents deploying uncommitted local artifacts, untracked changes, or bypassing automated CI/CD security gates.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-commit-before-deploy</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> assert <code>git status --porcelain</code> is 100% clean before tagging releases.</li>
        <li><span class='deontic-must'>MUST</span> delegate deployments to CI/CD workflows (<code>gh run watch</code>) rather than executing local production deploys.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>release commands, deploy scripts</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-incremental-commits-staging" data-scope="universal" data-class="beta">
<a id="invariant-48"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-incremental-commits-staging">The Invariant Bible: Incremental Commits & Staging Topology</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Feature branches deploy to isolated dev preview environments; main branch merges require codeowner review before prod deployment.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Guarantees live dev previews can be tested by humans before changes touch the production branch.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-incremental-commits-staging</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> deploy feature branches (<code>feat/...</code>) to isolated Dev staging.</li>
        <li><span class='deontic-must'>MUST</span> require Code Owner review before <code>main</code> branch merges.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>.github/workflows/deploy-dev.yml, .github/workflows/deploy-prod.yml</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-4phase-release-learning" data-scope="universal" data-class="beta">
<a id="invariant-49"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-4phase-release-learning">The Invariant Bible: 4-Phase Release & Lean Learning Lifecycle</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Release sequence strictly follows: 1. Local QA -> 2. Staged PR & Dev Deploy -> 3. Mk1 Review -> 4. Merge, Tag, Prod Deploy -> 5. /learn -> 6. Patch.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Enforces a disciplined lifecycle that captures learnings into tests and documentation on every release cycle.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-4phase-release-learning</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> execute 4-phase release lifecycle in order: Local QA -> Staged PR -> Mk1 Review -> Prod Deploy -> /learn -> Patch.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>Justfile release recipe</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_learning_lifecycle_and_invariant_governance_contracts</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-3plane-governance" data-scope="universal" data-class="beta">
<a id="invariant-50"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-3plane-governance">The Invariant Bible: 3-Plane Deployment Governance</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">System is decoupled into three independent planes: Edge Plane (static assets), Compute Plane (backend server), and Infrastructure Plane (Terraform).</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Allows edge static assets to deploy independently without redeploying backend containers or rebuilding infrastructure.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-3plane-governance</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> decouple Edge Plane, Compute Plane, and Infrastructure Plane configurations.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>terraform/, credence/server.py, web/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-dual-env-least-privilege-cicd" data-scope="universal" data-class="beta">
<a id="invariant-51"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-dual-env-least-privilege-cicd">The Invariant Bible: Dual-Environment Least-Privilege CI/CD & Dev Preview Isolation</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">CI/CD uses keyless Workload Identity Federation (WIF) and preview branch isolation with zero escape to production.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Eliminates long-lived cloud service account keys in GitHub repository secrets.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-dual-env-least-privilege-cicd</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use keyless Workload Identity Federation (WIF) with least-privilege IAM roles.</li>
        <li><span class='deontic-must'>MUST</span> isolate dev preview deployments with zero write access to production databases.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>.github/workflows/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-multi-model-sovereignty" data-scope="universal" data-class="gamma">
<a id="invariant-7"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-multi-model-sovereignty">The Invariant Bible: Multi-Model Sovereignty & Token Circuit Breakers</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">LLM inference is abstracted across multiple decoupled providers with automatic offline circuit breakers when quota headroom drops.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents vendor lock-in and protects application uptime if an upstream AI provider experiences an outage or rate-limit exhaustion.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Headroom</code></td><td><strong>Rolling Token Headroom</strong></td><td><code>1.0</code></td><td>Reserved daily token budget before offline fallback trips.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Headroom} \ge 30\%$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-multi-model-sovereignty</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> abstract inference across decoupled provider adapters (Gemini, Claude, GPT-4o, DeepSeek, Ollama).</li>
        <li><span class='deontic-must'>MUST</span> trip <code>QUOTA_PRESERVED</code> offline circuit breaker when token headroom drops below 30%.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/adapters/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_adapters.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-verbatim-anti-truncation" data-scope="universal" data-class="alpha">
<a id="invariant-52"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-verbatim-anti-truncation">The Invariant Bible: Universal Verbatim Anti-Truncation UI</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Evidence quotes, system rules, and forensic tracebacks must be displayed character-for-character with zero ellipsis masking or artificial truncation.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Ellipsis truncation (<code>...</code>) hides critical forensic details from human operators and destroys auditability.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-verbatim-anti-truncation</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to mask evidence quotes, system rules, or forensic tracebacks with ellipsis (<code>...</code>).</li>
        <li><span class='deontic-must'>MUST</span> present verbatim text character-for-character in UI inspectors and evidence cards.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>web/assets/, credence-docs/app.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-documentation-expansion" data-scope="universal" data-class="gamma">
<a id="invariant-53"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-documentation-expansion">The Invariant Bible: Session-Driven Documentation Expansion</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">New technical knowledge deepens existing canonical documentation and blueprints rather than scattering shallow standalone files.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents documentation sprawl, orphan markdown files, and fragmented search indexing.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-documentation-expansion</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> deepen canonical docs and blueprints over creating shallow standalone files.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>docs/, blog/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-artifact-curation" data-scope="universal" data-class="gamma">
<a id="invariant-60"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-artifact-curation">The Invariant Bible: Artifact Archival & Anti-Wipe Protocol ("That Belongs in a Museum!")</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Artifacts and implementation plans are permanent historical records that must never be overwritten or erased wholesale across session phases.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Preserves archaeological reasoning, past test verification matrices, and prevents losing context like wiped BBC tapes.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-artifact-curation</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> append chronological milestone phases rather than overwriting past artifacts.</li>
        <li><span class='deontic-must'>MUST</span> preserve complete test tables, proof matrices, and operator sign-offs.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>artifacts, walkthroughs, plans</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-living-canon" data-scope="universal" data-class="gamma">
<a id="invariant-54"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-living-canon">The Invariant Bible: Dynamic Invariant Canon ("The Invariant Bible")</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Invariants use semantic alphanumeric slugs (<code>inv-...</code>) and are referenced as The Invariant Bible without hardcoded numerical counters.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Hardcoded numbers ('Rule 47', 'Invariant 32') break across the entire codebase every time an invariant is added or retired.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-living-canon</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to use hardcoded invariant numbers ('Rule 47') in documentation prose.</li>
        <li><span class='deontic-must'>MUST</span> reference system invariants as **The Invariant Bible** or **The Living Canon of System Invariants** using semantic slugs (<code>inv-...</code>).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>docs/, AGENTS.md</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_living_canon_dynamic_naming_invariant</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-production-telemetry-boundary" data-scope="universal" data-class="gamma">
<a id="invariant-55"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-production-telemetry-boundary">The Invariant Bible: Production Telemetry vs. Simulation Boundary</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Production dashboards display authentic system runtime reality with zero mock data, genuine WebCrypto cryptographic validation, and standalone zero floors; simulators are restricted exclusively to playground routes.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Displaying fake, synthesized, or simulated metrics in operator workstations undermines operational trust during live incidents and masks critical runtime failures.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-production-telemetry-boundary</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> report authentic node reality in production operator dashboards ($N \ge 1$, $f = \lfloor (N-1)/3 \rfloor$) with zero mock metrics or synthetic data generators.</li>
        <li><span class='deontic-must'>MUST</span> execute authentic in-browser WebCrypto (<code>SubtleCrypto.digest</code> and <code>verifyEd25519Signature</code>) over RFC 8785 canonical bytes with zero <code>setTimeout</code> fake spinners.</li>
        <li><span class='deontic-must'>MUST</span> emit authentic error toasts/banners on network failures in <code>catch</code> blocks with zero masked "saved locally" success indicators.</li>
        <li><span class='deontic-must'>MUST</span> isolate interactive simulations exclusively to docs playground routes (<code>#docs/playground</code>).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>web/assets/credence-workstation.js, web/credence.*, tests/governance/test_production_telemetry_boundary.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_production_telemetry_boundary.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-clean-slug-routing" data-scope="universal" data-class="gamma">
<a id="invariant-56"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-clean-slug-routing">The Invariant Bible: Zero-Hash Clean URL Routing & Canonical Slugs</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Document slugs reside in clean URL paths; hash symbols (<code>#</code>) are reserved strictly for in-page DOM anchors.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Legacy hash routing breaks standard browser history, OpenGraph social link previews, and search engine crawling.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-clean-slug-routing</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use pathname-based routing for primary document routes.</li>
        <li><span class='deontic-must'>MUST</span> reserve <code>#</code> hash symbols strictly for in-page anchor targets.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>_redirects, credence-docs/app.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-article-h1-header" data-scope="universal" data-class="gamma">
<a id="invariant-57"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-article-h1-header">The Invariant Bible: Anti-Headless Article Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Every markdown document begins with a leading <code># &lt;Title&gt;</code> matching its YAML frontmatter title.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents headless article previews and broken document outlines across zero-build markdown renderers.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-article-h1-header</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> begin every markdown file with a leading <code># &lt;Title&gt;</code> matching its YAML frontmatter title.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>docs/, blog/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_all_articles_and_docs_have_leading_h1_title_headers</code></div>
    </div>
  </div>
</details>
</div>


---

## Pillar 2: Epistemic Ingestion & Scoring Engine

<div class="invariant-card" id="inv-topic-entropy-defense" data-scope="domain" data-class="gamma">
<a id="invariant-19"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-topic-entropy-defense">The Invariant Bible: Topic Entropy Astroturfing Defense (The Pizza Hut Problem)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">News feeds that abruptly pivot to promotional spam are quarantined when vocabulary diversity drops below the entropy threshold.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Astroturfed feeds frequently repurpose high-reputation accounts by spamming repetitive promotional keywords.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>H</code></td><td><strong>Shannon Entropy</strong></td><td><code>1.0</code></td><td>Baseline unigram vocabulary entropy across recent posts.</td></tr>
        <tr><td><code>C_{\text{top3}}</code></td><td><strong>Top-3 Concentration</strong></td><td><code>1.0</code></td><td>Frequency share of the top 3 most repeated tokens.</td></tr>
        <tr><td><code>H_{\text{penalized}}</code></td><td><strong>Adjusted Entropy</strong></td><td><code>1.0</code></td><td>Penalized diversity score. Values < 0.30 trigger quarantine.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$H_{\text{penalized}} = H \times (1.0 - C_{\text{top3}})$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-topic-entropy-defense</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> calculate topic diversity incorporating Top-Token Concentration penalty ($C_{\text{top3}}$).</li>
        <li><span class='deontic-must'>MUST</span> trigger autonomous feed quarantine when $H_{\text{penalized}} < 0.30$.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/sifter.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_sifter.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-poes-law-satire" data-scope="domain" data-class="gamma">
<a id="invariant-20"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-poes-law-satire">The Invariant Bible: Poe's Law & Satire Safeguards</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Legitimate satire is recognized and neutralized to 0.00 suspicion, but defamatory allegations or health hoaxes disguised as parody lose satire protection.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Protects satirical publications (The Onion) from false fraud penalties while preventing malicious actors from cloaking defamation under satire labels.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-poes-law-satire</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> treat Schema.org markup and masthead badges as candidate satire cues.</li>
        <li><span class='deontic-must'>MUST</span> neutralize validated parody to suspicion score 0.00.</li>
        <li><span class='deontic-must'>MUST</span> invoke <code>SPJ-1.6</code> override on factual health/defamation allegations, revoking satire immunity.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/scoring.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_scoring.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-fixed-taxonomies" data-scope="domain" data-class="beta">
<a id="invariant-21"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-fixed-taxonomies">The Invariant Bible: Namespaced Fixed Taxonomies</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All audit violation rules are referenced by cryptographically pinned namespaced URIs rather than ad-hoc string literals.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents taxonomy rule collisions, version drift, and unverified scoring criteria.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>URI</code></td><td><strong>Namespaced Rule URI</strong></td><td><code>1.0</code></td><td>Canonical rule identifier pinned by catalog SHA-256 hash.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{URI} = \text{domain}:\text{cluster}/\text{rule\_id}@\text{version}$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-fixed-taxonomies</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to hardcode rule names in scoring math.</li>
        <li><span class='deontic-must'>MUST</span> use namespaced URIs (<code>domain:cluster/rule_id@version</code>) pinned by catalog SHA-256 hashes.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/taxonomy.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_taxonomy.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-verbatim-grounding" data-scope="domain" data-class="alpha">
<a id="invariant-22"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-verbatim-grounding">The Invariant Bible: Whitespace-Insensitive Grounding ($G=1.00$)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Every cited quote must match the original webpage DOM character-for-character (after whitespace normalization), or the finding is penalized 50%.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Completely eliminates LLM quote hallucinations and ensures forensic citations are 100% genuine.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>G</code></td><td><strong>Grounding Precision</strong></td><td><code>1.0</code></td><td>Fraction of extracted claims matching source DOM text exactly.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$G = \frac{|\text{Grounded Citations}|}{|\text{Total Citations}|} = 1.00$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-verbatim-grounding</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> collapse whitespace sequences (<code>\s+</code> -> <code> </code>) in both citations and source DOM before substring matching.</li>
        <li><span class='deontic-must'>MUST</span> enforce $G=1.00$; hallucinated quotes incur an autonomous 50% score slash.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/scoring.py, credence/pipeline/extraction.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_grounding.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-heuristic-disclosure" data-scope="domain" data-class="beta">
<a id="invariant-23"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-heuristic-disclosure">The Invariant Bible: Transparent Heuristic Disclosure</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">When the offline governor triggers fallback heuristics, the audit explicitly declares its offline method and caps confidence at 50%.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents heuristic offline assessments from masquerading as full LLM forensic evaluations.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Confidence</code></td><td><strong>Heuristic Confidence Ceiling</strong></td><td><code>1.0</code></td><td>Maximum allowable confidence for offline heuristic audits.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Confidence} \le 0.50$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-heuristic-disclosure</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-when'>WHEN</span> offline governor activates, <span class='deontic-must'>MUST</span> explicitly set <code>evaluation_method: 'offline_structural_heuristic'</code>.</li>
        <li><span class='deontic-must'>MUST</span> cap confidence score at <= 0.50.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/governor.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_governor.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-4k-thinking-budget" data-scope="domain" data-class="gamma">
<a id="invariant-15"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-4k-thinking-budget">The Invariant Bible: Empirical Thinking Budget Sweet Spot (4k Invariant)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Gemini 3.7 Flash with a 4,096 thinking token budget represents the optimal cost/speed Pareto frontier for epistemic auditing.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Achieves 100% verbatim grounding precision without paying 30x cost overheads or suffering over-analysis latency penalties.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Tokens</code></td><td><strong>Thinking Budget</strong></td><td><code>1.0</code></td><td>Optimal Pareto reasoning budget in tokens.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Thinking Tokens} = 4096$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-4k-thinking-budget</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use 4,096 thinking tokens as default reasoning budget for Gemini 3.7 Flash audit profile.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/config.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_config.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-audit-entity-persistence" data-scope="domain" data-class="gamma">
<a id="invariant-58"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-audit-entity-persistence">The Invariant Bible: Audit Entity & Violation Persistence</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All standalone text and URL audits persist Snapshot, Audit, and Violation relational records in SQLite.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Ensures historical audit trail continuity and allows time-series trajectory tracking.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-audit-entity-persistence</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> persist <code>Snapshot</code>, <code>Audit</code>, and <code>Violation</code> entities to database on every evaluation.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/evaluator.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_evaluator.py</code></div>
    </div>
  </div>
</details>
</div>


---

## Pillar 3: Cryptographic Mesh & Empirical Authority

<div class="invariant-card" id="inv-canonical-json-ed25519" data-scope="domain" data-class="alpha">
<a id="invariant-24"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-canonical-json-ed25519">The Invariant Bible: RFC 8785 Canonical JSON & Ed25519 Custody</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Attestation envelopes use deterministic RFC 8785 canonical bytes with UTC timestamps; signatures are signed with Ed25519 keys.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Guarantees cryptographic non-repudiation and prevents signature invalidation caused by key-reordering whitespace differences.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Payload</code></td><td><strong>Canonical JSON Envelope</strong></td><td><code>1.0</code></td><td>Deterministic byte sequence without formatting whitespace.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Sig} = \text{Ed25519}_{\text{priv}}(\text{RFC8785}(\text{Payload}))$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-canonical-json-ed25519</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> serialize attestation payloads using RFC 8785 canonical JSON bytes with UTC timestamps.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> for intermediate relay nodes to re-sign valid envelopes.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/crypto.py, credence/mesh/attestation.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_crypto.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-5factor-node-quality" data-scope="domain" data-class="beta">
<a id="invariant-25"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-5factor-node-quality">The Invariant Bible: 5-Factor Node Quality ($Q_i$)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">A node's reputation is weighted toward consensus and evidence grounding rather than pure server longevity.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents long-lived idle or malicious nodes from accumulating overwhelming network influence without contributing verified truthful audits.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>U_i</code></td><td><strong>Uptime & Availability</strong></td><td><code>0.25</code></td><td>Historical uptime ratio over rolling 30-day window.</td></tr>
        <tr><td><code>C_i</code></td><td><strong>Consensus Agreement</strong></td><td><code>0.3</code></td><td>Alignment with Byzantine-resilient swarm truth medians.</td></tr>
        <tr><td><code>G_i</code></td><td><strong>Grounding Accuracy</strong></td><td><code>0.25</code></td><td>Ratio of audited claims matching verbatim source DOM text.</td></tr>
        <tr><td><code>T_i</code></td><td><strong>Audit Throughput</strong></td><td><code>0.1</code></td><td>Sustained evaluation volume without rate-limit drops.</td></tr>
        <tr><td><code>K_i</code></td><td><strong>Key Custody Age</strong></td><td><code>0.1</code></td><td>Cryptographic continuity of Ed25519 root key.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-5factor-node-quality</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> compute node quality strictly as $Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$.</li>
        <li><span class='deontic-must'>MUST</span> assert all factors normalized in $[0.0, 1.0]$ and sum of weights equals 1.00.</li>
        <li><span class='deontic-must'>MUST</span> verify root Ed25519 signature before accepting seed peers.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/mesh/reputation.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_mesh.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-empirical-expertise" data-scope="domain" data-class="beta">
<a id="invariant-26"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-empirical-expertise">The Invariant Bible: Empirical Expertise ($E_i$) & Anti-Diploma Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Domain authority is earned through verified audit accuracy across diverse sources, not granted by credentials or stake.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents rich or credentialed nodes from buying domain authority without demonstrating empirical accuracy.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>C</code></td><td><strong>Consensus Precision</strong></td><td><code>0.4</code></td><td>Agreement with verified peer consensus.</td></tr>
        <tr><td><code>G</code></td><td><strong>Grounding Precision</strong></td><td><code>0.35</code></td><td>Character-exact DOM quote accuracy.</td></tr>
        <tr><td><code>V</code></td><td><strong>Audit Volume</strong></td><td><code>0.15</code></td><td>Total completed audits in namespace.</td></tr>
        <tr><td><code>L</code></td><td><strong>Domain Longevity</strong></td><td><code>0.1</code></td><td>Track record age in domain.</td></tr>
        <tr><td><code>W_i</code></td><td><strong>Composite Weight</strong></td><td><code>1.0</code></td><td>Weighted combination of quality ($Q_i$) and expertise ($E_i$).</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$E_i = 0.40 C + 0.35 G + 0.15 V + 0.10 L, \quad W_i = 0.20 Q_i + 0.80 E_i$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-empirical-expertise</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> calculate expertise as $E_i = 0.40 C + 0.35 G + 0.15 V + 0.10 L$.</li>
        <li><span class='deontic-must'>MUST</span> combine weight as $W_i = 0.20 Q_i + 0.80 E_i$ with domain entropy across >= 5 distinct FQDNs.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/mesh/expertise.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_mesh.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-galileo-rule" data-scope="domain" data-class="beta">
<a id="invariant-27"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-galileo-rule">The Invariant Bible: The Galileo Rule (Asymmetric Grounded Evidence)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">A lone verified authority submitting 100% grounded proof cannot be outvoted or dismissed as an outlier by a swarm submitting zero evidence.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Absence of evidence is not evidence of absence; protects lone whistleblowers from Sybil majorities.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>G_A</code></td><td><strong>Authority Grounding</strong></td><td><code>1.0</code></td><td>100% verbatim evidence grounding precision.</td></tr>
        <tr><td><code>E_A</code></td><td><strong>Authority Expertise</strong></td><td><code>1.0</code></td><td>Domain expertise surpassing authoritative threshold.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{is\_outlier}(A) = \text{False} \quad \text{if } G_A = 1.00 \land E_A \ge \theta_{\text{auth}}$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-galileo-rule</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to mark verified authorities with $G=1.00$ as outliers (<code>is_outlier = False</code>).</li>
        <li><span class='deontic-must'>MUST</span> resolve consensus using Domain Authority Weighted Medians.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/mesh/consensus.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_consensus.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-bittorrent-worksharing" data-scope="domain" data-class="beta">
<a id="invariant-28"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-bittorrent-worksharing">The Invariant Bible: BitTorrent Work-Sharing & Generous Defaults</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Nodes seed attestations freely and divide RSS/Atom feeds across peers using Rendezvous Hashing for 92.3% compute savings.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Eliminates duplicate LLM audit compute across decentralized peers.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>N</code></td><td><strong>Active Mesh Peers</strong></td><td><code>1.0</code></td><td>Number of participating gossip nodes.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Savings} = 1 - \frac{1}{N} = 92.3\% \quad (N=13)$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-bittorrent-worksharing</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use Highest Random Weight (HRW) rendezvous hashing for feed partition assignments.</li>
        <li><span class='deontic-must'>MUST</span> gossip signed Ed25519 attestations to all peers with zero token cost.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/mesh/gossip.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_mesh.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-byzantine-cartel-resistance" data-scope="domain" data-class="beta">
<a id="invariant-29"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-byzantine-cartel-resistance">The Invariant Bible: Byzantine Cartel Resistance ($3f+1$)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">The mesh requires at least $3f + 1$ nodes to tolerate up to $f$ adversarial Sybil cartel nodes without state compromise.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents coordinated Sybil attacks from corrupting consensus or gaming reputation scores.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>N</code></td><td><strong>Total Mesh Nodes</strong></td><td><code>1.0</code></td><td>Total active node count in cluster.</td></tr>
        <tr><td><code>f</code></td><td><strong>Fault Tolerance</strong></td><td><code>1.0</code></td><td>Maximum tolerated Byzantine adversarial nodes.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$N \ge 3f + 1, \quad f = \left\lfloor \frac{N-1}{3} \right\rfloor$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-byzantine-cartel-resistance</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> require $N \ge 3f + 1$ nodes for BFT consensus quorum.</li>
        <li><span class='deontic-must'>MUST</span> enforce domain entropy across distinct FQDNs to prevent single-entity Sybil cartels.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/mesh/cluster.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_mesh.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-boredom-root-expansion" data-scope="domain" data-class="beta">
<a id="invariant-39"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-boredom-root-expansion">The Invariant Bible: Opportunistic Boredom Ingestion & Root Expansion</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Idle nodes with surplus token headroom automatically discover and subscribe to new RSS feeds cited by clean articles.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Autonomously expands the network's factual coverage graph without human intervention.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Headroom</code></td><td><strong>Token Headroom</strong></td><td><code>1.0</code></td><td>Idle compute capacity reserve.</td></tr>
        <tr><td><code>Score</code></td><td><strong>Suspicion Ceiling</strong></td><td><code>1.0</code></td><td>Cleanliness threshold for cited source extraction.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Headroom} \ge 30\%, \quad \text{Score} \le 25.0, \quad G = 1.00$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-boredom-root-expansion</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-when'>WHEN</span> idle with token headroom >= 30%, <span class='deontic-must'>MUST</span> digest queued outbound cited domains.</li>
        <li><span class='deontic-must'>MUST</span> auto-subscribe to candidate feeds and gossip signed attestations across mesh.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/boredom.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_boredom.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-soft-blacklist-buzzfeed" data-scope="domain" data-class="beta">
<a id="invariant-40"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-soft-blacklist-buzzfeed">The Invariant Bible: Soft Blacklisting & BuzzFeed News Doctrine</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Deceptive sources are placed on exponential polling probation rather than hard-deleted, retaining a verifiable path to redemption via low-frequency probes.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Organizations evolve (e.g. BuzzFeed News winning a Pulitzer Prize); soft blacklists allow reform while protecting the network from active spam.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>T_{\text{poll}}</code></td><td><strong>Probationary Polling Interval</strong></td><td><code>1.0</code></td><td>Exponentially backed-off polling interval.</td></tr>
        <tr><td><code>k</code></td><td><strong>Clean Audits for Redemption</strong></td><td><code>1.0</code></td><td>Requires k=5 consecutive clean audits spanning >= 2 namespaces.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$T_{\text{poll}} = T_{\text{base}} \times 2^{\min(\text{deceptions}, 6)}$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-soft-blacklist-buzzfeed</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to hard-delete deceptive sources; transition to <code>QUARANTINED_PROBATION</code>.</li>
        <li><span class='deontic-must'>MUST</span> graduate domain upon $k=5$ consecutive clean audits ($G=1.00, \text{Suspicion} \le 15.0$) across >= 2 namespaces.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/pipeline/sifter.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/unit/test_sifter.py</code></div>
    </div>
  </div>
</details>
</div>


---

## Pillar 4: Universal Presentation Layer & Zero-Build Web

<div class="invariant-card" id="inv-multi-interface-parity" data-scope="universal" data-class="gamma">
<a id="invariant-30"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-multi-interface-parity">The Invariant Bible: Universal Multi-Interface Feature Parity</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All core system features are synchronously available across CLI, FastMCP 2.0, Textual TUI, and Zero-Build Web UI.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents interface second-class citizenship; developers can use their preferred interface with identical capabilities.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-multi-interface-parity</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> maintain synchronous feature parity across CLI (<code>credence</code>), FastMCP 2.0 (<code>credence_</code> tools), TUI (<code>credence tui</code>), and Web UI (<code>web/</code>).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/cli.py, credence/server.py, credence/tui/, web/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_sitemap_integrity_and_route_coverage</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-zero-build-standards" data-scope="universal" data-class="gamma">
<a id="invariant-31"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-zero-build-standards">The Invariant Bible: Universal Zero-Build Standards (Zero-npm Invariant)</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All web applications, documentation portals, and blogs use vanilla HTML5, CSS Custom Properties, and native ES Modules with zero npm dependencies and zero build step.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Eliminates npm dependency vulnerabilities, supply chain attacks, complex webpack/vite configs, and broken build toolchains.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-zero-build-standards</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to introduce <code>package.json</code>, <code>node_modules</code>, or JavaScript bundlers (Vite, Webpack, Astro).</li>
        <li><span class='deontic-must'>MUST</span> use vanilla HTML5, native ES Modules, and CSS Custom Properties.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>web/, credence-docs/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_zero_npm_invariant</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-zero-build-math" data-scope="universal" data-class="gamma">
<a id="invariant-32"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-zero-build-math">The Invariant Bible: Zero-Build Math & Currency Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Zero-build markdown parsers render mathematical expressions with native Unicode and styled containers while protecting currency strings ($0.00) from escaping artifacts.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Dollar signs in financial documentation or pricing tiers ($0.075/1M) must not accidentally trigger math parser formatting.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-zero-build-math</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> render math using styled containers (<code>.math-block</code>, <code>.math-inline</code>).</li>
        <li><span class='deontic-must'>MUST</span> preserve raw currency strings (<code>$0.00</code>, <code>$15.00</code>) without escaping artifacts.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence-docs/app.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_playground_and_docs_math_rendering_integrity</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-cloudflare-assets" data-scope="domain" data-class="beta">
<a id="invariant-13"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-cloudflare-assets">The Invariant Bible: Cloudflare Workers Zero-Build Static Assets</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Cloudflare Worker edge deployments define ASSETS bindings and exclude router scripts via .assetsignore to prevent asset leakage.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents internal edge worker source code from being served as public static assets.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-cloudflare-assets</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> define <code>binding = 'ASSETS'</code> in <code>wrangler.toml</code>.</li>
        <li><span class='deontic-must'>MUST</span> maintain <code>.assetsignore</code> excluding <code>_worker.js</code> and <code>wrangler.toml</code>.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>wrangler.toml, .assetsignore</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-edge-origin-header" data-scope="domain" data-class="beta">
<a id="invariant-14"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-edge-origin-header">The Invariant Bible: Edge Routing Origin Header Translation</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Edge routers rewrite incoming Host headers to native backend container URLs to bypass domain verification while preserving SSE streaming.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Allows custom edge domains to communicate with Google Cloud Run backends without requiring GCP custom domain mapping.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-edge-origin-header</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> rewrite <code>Host</code> header to <code>&lt;service&gt;.run.app</code> in edge router before proxying.</li>
        <li><span class='deontic-must'>MUST</span> preserve live Server-Sent Events (SSE) streaming and global CORS headers.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>_worker.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-edge-canonicalization" data-scope="domain" data-class="beta">
<a id="invariant-33"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-edge-canonicalization">The Invariant Bible: Edge Subdirectory Canonicalization</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Multi-domain edge routers intercept internal ASSETS redirects and issue 301 canonical redirects to prevent internal folder paths from leaking into browser address bars.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents ugly <code>/credence.run/</code> folder prefixes from appearing in public browser URLs.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-edge-canonicalization</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> enforce 301 canonical redirects on internal folder paths at the edge.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>_worker.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-mermaid-syntax-safety" data-scope="universal" data-class="beta">
<a id="invariant-34"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-mermaid-syntax-safety">The Invariant Bible: Universal Technical Schematic & Visual Syntax Guardrail</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Technical diagrams use enclosed UTF-8 box schematics within 150-character line width limits without client-side rendering bundle dependencies.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Eliminates heavy Mermaid JS browser libraries while ensuring crystal-clear architectural wire diagrams on all screen sizes.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Width</code></td><td><strong>Schematic Line Width</strong></td><td><code>1.0</code></td><td>Maximum line character count for UTF-8 box art.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Width} \le 150 \text{ characters}$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-mermaid-syntax-safety</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> use enclosed UTF-8 box schematics with strict <= 150 characters line width.</li>
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to depend on client-side rendering bundles for technical diagrams.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>docs/, blog/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_zero_legacy_mermaid_diagrams_invariant</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-visual-density" data-scope="universal" data-class="gamma">
<a id="invariant-35"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-visual-density">The Invariant Bible: Visual Density & Anti-Wall-of-Text Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Technical documentation and blog articles maintain a visual density of at least 2.0 visual elements per 500 words.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Breaks up unformatted walls of text with structured callouts, comparison matrices, and wire schematics for improved readability.</div>
  <div class="variable-anatomy-container">
    <table class="variable-anatomy-table">
      <thead><tr><th>Symbol</th><th>Component Factor</th><th>Weight</th><th>Epistemic Role</th></tr></thead>
      <tbody>
        <tr><td><code>Density</code></td><td><strong>Visual Density Ratio</strong></td><td><code>1.0</code></td><td>Visual elements (tables, schematics, alert callouts) per 500 words.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="invariant-formula-display">$$\text{Density} = \frac{\text{Visual Elements}}{\text{Word Count} / 500} \ge 2.0$$</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-visual-density</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> maintain visual density >= 2.0 visual elements per 500 words in guides and tutorials.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>docs/, blog/</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-playwright-rendering-tests" data-scope="universal" data-class="beta">
<a id="invariant-36"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-beta">Class β</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-playwright-rendering-tests">The Invariant Bible: Automated Live Rendering Regression Verification</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">UI and docs updates are verified via Playwright live rendering suites ensuring non-zero SVG dimensions and zero unrendered HTML tags.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Catches broken CSS, clipped diagrams, and raw markdown parsing tag leaks before release.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-playwright-rendering-tests</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> verify UI and docs via Playwright live rendering suites (<code>tests/test_docs_rendering.py</code>).</li>
        <li><span class='deontic-must'>MUST</span> assert non-zero SVG dimensions and zero raw HTML tag leaks in rendered prose.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>tests/test_docs_rendering.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-inline-html-math-integrity" data-scope="universal" data-class="gamma">
<a id="invariant-37"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-inline-html-math-integrity">The Invariant Bible: Zero-Build Inline HTML & Nested Math Integrity</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Zero-build markdown parsers mask safe author-supplied inline HTML tags before escaping and use balanced-brace recursive parsing for nested LaTeX math.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents unparsed LaTeX backslashes or corrupted HTML entity escaping across web surfaces.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-inline-html-math-integrity</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> mask safe author-supplied inline HTML tags (<code>&lt;a&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;span&gt;</code>) before entity escaping.</li>
        <li><span class='deontic-must'>MUST</span> use balanced-brace recursive parsing for nested LaTeX mathematical structures.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence-docs/app.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_javascript_markdown_parser_runtime_integrity</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-anti-scrollbox" data-scope="universal" data-class="gamma">
<a id="invariant-38"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-anti-scrollbox">The Invariant Bible: Anti-Scrollbox & Natural Flow Presentation</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Reading surfaces avoid nested vertical scrollbars; content flows naturally, and dense payloads are encapsulated in native details accordions.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Nested scrollboxes within scrollable pages create horrific 'scroll traps' for mouse wheel and mobile touch users.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-anti-scrollbox</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to constrain article reading panes with nested vertical scrollbars.</li>
        <li><span class='deontic-must'>MUST</span> expand article previews naturally (<code>height: auto; overflow: visible;</code>) and use native <code>&lt;details&gt;</code> accordions for dense payloads.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence-docs/styles.css, web/assets/credence-ui.css</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-symmetric-navigation-zero-cache" data-scope="domain" data-class="gamma">
<a id="invariant-41"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-symmetric-navigation-zero-cache">The Invariant Bible: Symmetric 4-Pillar Navigation & Zero-Cache Edge</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Global header navigation maintains 5 invariant links across all pages, footers use 4 balanced pillars, and edge routes apply tiered cache headers.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Ensures visual stability and instant navigation consistency across all 18 public apex and subdomains.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-symmetric-navigation-zero-cache</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> maintain 5 invariant header links (<code>Home</code>, <code>Docs</code>, <code>Reports</code>, <code>Nexus</code>, <code>Foundation</code>).</li>
        <li><span class='deontic-must'>MUST</span> maintain 4 balanced footer pillars (4 links each).</li>
        <li><span class='deontic-must'>MUST</span> set <code>must-revalidate</code> tiered zero-cache headers in edge routing.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence-docs/app.js, wrangler.toml</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-epistemic-lensing" data-scope="universal" data-class="gamma">
<a id="invariant-42"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-epistemic-lensing">The Invariant Bible: The Epistemic Lensing & Information Pyramid Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">User views structure content into a 3-tier cognitive hierarchy: Surface Lens (Glance), Focus Lens (Explore), and Deep Spectrum Lens (Forensic).</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Prevents cognitive overload by allowing operators to absorb high-level conclusions at a glance while preserving complete forensic drill-down depth.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-epistemic-lensing</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> structure user-facing views into 3-tier hierarchy: Surface Lens (Glance), Focus Lens (Explore), and Deep Spectrum Lens (Forensic).</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>web/assets/, credence-docs/app.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-web-component-isolation" data-scope="universal" data-class="gamma">
<a id="invariant-44"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-web-component-isolation">The Invariant Bible: Web Component Isolation & Zero-Clone Safety</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Custom web components never invoke cloneNode(true) on trees containing custom element instances and use synchronous attribute observers.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Calling deep cloneNode on custom elements triggers recursive constructor re-entry and crashes with Maximum Call Stack Exceeded.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-web-component-isolation</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to invoke <code>cloneNode(true)</code> on host DOM trees containing custom element instances.</li>
        <li><span class='deontic-must'>MUST</span> implement <code>attributeChangedCallback</code> as purely synchronous state transitions without asynchronous event loops.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>web/assets/credence-badge.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py::test_web_component_zero_clone_and_defensive_events</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-dense-workstation-viewport" data-scope="domain" data-class="gamma">
<a id="invariant-45"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-gamma">Class γ</span>
    <span class="invariant-badge badge-scope-domain">🔬 Credence Domain</span>
  </div>
  <h3><a href="#docs/invariants#inv-dense-workstation-viewport">The Invariant Bible: Dense Workstation Viewport & Zero-Masking Invariant</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">Workstation card grids are bounded within scroll panes with sticky headers to prevent massive vertical page sprawl.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Allows dense data inspection without losing header context or expanding dashboard pages indefinitely.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-dense-workstation-viewport</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-must'>MUST</span> bound workstation card grids within <code>.ws-scroll-pane</code> with 580px max vertical limit and sticky headers.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/web/assets/credence-workstation.js</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_docs_integrity.py</code></div>
    </div>
  </div>
</details>
</div>

<div class="invariant-card" id="inv-sovereign-config-decoupling" data-scope="universal" data-class="alpha">
<a id="invariant-59"></a>
<div class="invariant-header">
  <div class="invariant-badges">
    <span class="invariant-badge badge-class-alpha">Class α</span>
    <span class="invariant-badge badge-scope-universal">🌐 Universal Agentic</span>
  </div>
  <h3><a href="#docs/invariants#inv-sovereign-config-decoupling">The Invariant Bible: Sovereign Multi-Tenant Decoupling & Zero Hardcoded Tenant Config</a></h3>
</div>
<div class="invariant-human-pane">
  <p class="invariant-headline">All tenant-specific domains, proprietary RSS feeds, organization identities, telemetry keys, and regional configurations reside strictly in environment variables, manifests, or runtime admin APIs.</p>
  <div class="invariant-rationale"><strong>Why It Matters:</strong> Hardcoding proprietary or tenant-specific targets into core engine models, migrations, or scrapers pollutes sovereign deployments, breaks multi-tenant neutrality, and forces unwanted surveillance targets onto independent nodes.</div>
</div>
<details class="agent-translation">
  <summary class="agent-summary"><span class="agent-icon">🤖</span> <strong>Agent Deontic Specification</strong> <span class="agent-slug-pill"><code>inv-sovereign-config-decoupling</code></span></summary>
  <div class="agent-spec-hud">
    <div class="agent-spec-section">
      <span class="agent-spec-label">Deontic Execution Rules:</span>
      <ul class="agent-rules-list">
        <li><span class='deontic-forbidden'>FORBIDDEN</span> to hardcode organization-specific, regional, or proprietary tenant domains into database migrations, core models, or generic scrapers.</li>
        <li><span class='deontic-must'>MUST</span> load node-level surveillance targets from <code>CREDENCE_SENTINEL_FEEDS</code> environment variables, manifests, or authenticated runtime admin APIs.</li>
        <li><span class='deontic-must'>MUST</span> ensure generic nodes boot cleanly with zero pre-assigned third-party surveillance targets.</li>
      </ul>
    </div>
    <div class="agent-spec-meta">
      <div class="agent-meta-item"><strong>Trigger Scopes:</strong> <code>credence/db.py, credence/feeds/, credence/server/lifespan.py</code></div>
      <div class="agent-meta-item"><strong>Verification Gate:</strong> <code>tests/governance/test_architecture_governance.py::test_zero_hardcoded_tenant_domains_in_core_engine</code></div>
    </div>
  </div>
</details>
</div>


## Invariant Reference Index Matrix

| Invariant Slug | Legacy ID | Scope | Class | Title | Key Formula / Enforcement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[`inv-workspace-isolation`](#inv-workspace-isolation)** | Inv 1 | 🌐 Universal | Class β | Project & Workspace Isolation | The project executes completely hermetically ... |
| **[`inv-sovereign-config-decoupling`](#inv-sovereign-config-decoupling)** | Inv 59 | 🌐 Universal | Class α | Sovereign Multi-Tenant Decoupling & Zero Hardcoded Tenant Config | Tenant-specific domains and configs reside strictly in env vars (`CREDENCE_SENTINEL_FEEDS`) with zero hardcoded core favoritism. |
| **[`inv-async-sqlmodel`](#inv-async-sqlmodel)** | Inv 2 | 🌐 Universal | Class β | Python & SQLModel Async Architecture | Database operations are 100% asynchronous wit... |
| **[`inv-version-governance`](#inv-version-governance)** | Inv 3 | 🌐 Universal | Class γ | Continuous Changelog & Semantic Version Governance | Every notable feature, blueprint, or fix upda... |
| **[`inv-hermetic-unit-tests`](#inv-hermetic-unit-tests)** | Inv 4 | 🌐 Universal | Class β | Hermetic Unit Test Isolation & Zero-Browser CI | Unit test suites run 100% in-memory with zero... |
| **[`inv-scoped-verification`](#inv-scoped-verification)** | Inv 5 | 🌐 Universal | Class β | Scoped Verification for Docs-Only Changes | Documentation and static asset edits use ligh... |
| **[`inv-mk1-eyeball`](#inv-mk1-eyeball)** | Inv 6 | 🌐 Universal | Class α | Human Review Gate ("Mk1 Eyeball") | All code commits, PR merges, and production d... |
| **[`inv-clean-scratch-scripts`](#inv-clean-scratch-scripts)** | Inv 46 | 🌐 Universal | Class α | Clean Brain Scratch Script Approvals | Complex multi-step or multi-repo agent comman... |
| **[`inv-untrusted-ingestion`](#inv-untrusted-ingestion)** | Inv 8 | 🌐 Universal | Class α | Untrusted Ingestion Boundary & Network Defense | External network ingestion rejects internal m... |
| **[`inv-xml-safety`](#inv-xml-safety)** | Inv 10 | 🌐 Universal | Class β | XML ElementTree Traversal Safety | XML tree parsers check element existence expl... |
| **[`inv-ground-truth-config`](#inv-ground-truth-config)** | Inv 11 | 🌐 Universal | Class β | Model Default Truth & Verification Guardrail | Application defaults and pricing tiers are de... |
| **[`inv-fastmcp-transport-security`](#inv-fastmcp-transport-security)** | Inv 12 | 🌐 Universal | Class β | FastMCP 2.0 Reverse Proxy Transport Security | FastMCP SSE servers configure permissive host... |
| **[`inv-fastmcp-datetime-serialization`](#inv-fastmcp-datetime-serialization)** | Inv 16 | 🌐 Universal | Class γ | FastMCP Nested Datetime Serialization | All data payloads exposed via FastMCP tools s... |
| **[`inv-content-decoupling`](#inv-content-decoupling)** | Inv 17 | 🌐 Universal | Class β | Content Decoupling & Hermetic CI | Application code, marketing content, and docu... |
| **[`inv-progressive-disclosure`](#inv-progressive-disclosure)** | Inv 18 | 🌐 Universal | Class γ | Context Governance & Progressive Disclosure | $\text{Tokens}(\text{AGENTS.md}) < 800$ |
| **[`inv-cart-before-horse`](#inv-cart-before-horse)** | Inv 43 | 🌐 Universal | Class β | The Cart-Before-the-Horse Order-of-Operations Invariant | Prerequisite data models and scrubbers must p... |
| **[`inv-commit-before-deploy`](#inv-commit-before-deploy)** | Inv 47 | 🌐 Universal | Class β | Commit-Before-Deploy & Push-and-Delegate CI/CD Gate | Git trees must be clean and committed before ... |
| **[`inv-incremental-commits-staging`](#inv-incremental-commits-staging)** | Inv 48 | 🌐 Universal | Class β | Incremental Commits & Staging Topology | Feature branches deploy to isolated dev previ... |
| **[`inv-4phase-release-learning`](#inv-4phase-release-learning)** | Inv 49 | 🌐 Universal | Class β | 4-Phase Release & Lean Learning Lifecycle | Release sequence strictly follows: 1. Local Q... |
| **[`inv-3plane-governance`](#inv-3plane-governance)** | Inv 50 | 🌐 Universal | Class β | 3-Plane Deployment Governance | System is decoupled into three independent pl... |
| **[`inv-dual-env-least-privilege-cicd`](#inv-dual-env-least-privilege-cicd)** | Inv 51 | 🌐 Universal | Class β | Dual-Environment Least-Privilege CI/CD & Dev Preview Isolation | CI/CD uses keyless Workload Identity Federati... |
| **[`inv-multi-model-sovereignty`](#inv-multi-model-sovereignty)** | Inv 7 | 🌐 Universal | Class γ | Multi-Model Sovereignty & Token Circuit Breakers | $\text{Headroom} \ge 30\%$ |
| **[`inv-verbatim-anti-truncation`](#inv-verbatim-anti-truncation)** | Inv 52 | 🌐 Universal | Class α | Universal Verbatim Anti-Truncation UI | Evidence quotes, system rules, and forensic t... |
| **[`inv-documentation-expansion`](#inv-documentation-expansion)** | Inv 53 | 🌐 Universal | Class γ | Session-Driven Documentation Expansion | New technical knowledge deepens existing cano... |
| **[`inv-artifact-curation`](#inv-artifact-curation)** | Inv 60 | 🌐 Universal | Class γ | Artifact Archival & Anti-Wipe Protocol ("That Belongs in a Museum!") | Artifacts and implementation plans are permanent h... |
| **[`inv-living-canon`](#inv-living-canon)** | Inv 54 | 🌐 Universal | Class γ | Dynamic Invariant Canon ("The Invariant Bible") | Invariants use semantic alphanumeric slugs (`... |
| **[`inv-production-telemetry-boundary`](#inv-production-telemetry-boundary)** | Inv 55 | 🌐 Universal | Class γ | Production Telemetry vs. Simulation Boundary | Production dashboards display authentic syste... |
| **[`inv-clean-slug-routing`](#inv-clean-slug-routing)** | Inv 56 | 🌐 Universal | Class γ | Zero-Hash Clean URL Routing & Canonical Slugs | Document slugs reside in clean URL paths; has... |
| **[`inv-article-h1-header`](#inv-article-h1-header)** | Inv 57 | 🌐 Universal | Class γ | Anti-Headless Article Invariant | Every markdown document begins with a leading... |
| **[`inv-topic-entropy-defense`](#inv-topic-entropy-defense)** | Inv 19 | 🔬 Domain | Class γ | Topic Entropy Astroturfing Defense (The Pizza Hut Problem) | $H_{\text{penalized}} = H \times (1.0 - C_{\text{top3}})$ |
| **[`inv-poes-law-satire`](#inv-poes-law-satire)** | Inv 20 | 🔬 Domain | Class γ | Poe's Law & Satire Safeguards | Legitimate satire is recognized and neutraliz... |
| **[`inv-fixed-taxonomies`](#inv-fixed-taxonomies)** | Inv 21 | 🔬 Domain | Class β | Namespaced Fixed Taxonomies | $\text{URI} = \text{domain}:\text{cluster}/\text{rule\_id}@\text{version}$ |
| **[`inv-verbatim-grounding`](#inv-verbatim-grounding)** | Inv 22 | 🔬 Domain | Class α | Whitespace-Insensitive Grounding ($G=1.00$) | $G = \frac{|\text{Grounded Citations}|}{|\text{Total Citations}|} = 1.00$ |
| **[`inv-heuristic-disclosure`](#inv-heuristic-disclosure)** | Inv 23 | 🔬 Domain | Class β | Transparent Heuristic Disclosure | $\text{Confidence} \le 0.50$ |
| **[`inv-4k-thinking-budget`](#inv-4k-thinking-budget)** | Inv 15 | 🔬 Domain | Class γ | Empirical Thinking Budget Sweet Spot (4k Invariant) | $\text{Thinking Tokens} = 4096$ |
| **[`inv-audit-entity-persistence`](#inv-audit-entity-persistence)** | Inv 58 | 🔬 Domain | Class γ | Audit Entity & Violation Persistence | All standalone text and URL audits persist Sn... |
| **[`inv-canonical-json-ed25519`](#inv-canonical-json-ed25519)** | Inv 24 | 🔬 Domain | Class α | RFC 8785 Canonical JSON & Ed25519 Custody | $\text{Sig} = \text{Ed25519}_{\text{priv}}(\text{RFC8785}(\text{Payload}))$ |
| **[`inv-5factor-node-quality`](#inv-5factor-node-quality)** | Inv 25 | 🔬 Domain | Class β | 5-Factor Node Quality ($Q_i$) | $Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$ |
| **[`inv-empirical-expertise`](#inv-empirical-expertise)** | Inv 26 | 🔬 Domain | Class β | Empirical Expertise ($E_i$) & Anti-Diploma Invariant | $E_i = 0.40 C + 0.35 G + 0.15 V + 0.10 L, \quad W_i = 0.20 Q_i + 0.80 E_i$ |
| **[`inv-galileo-rule`](#inv-galileo-rule)** | Inv 27 | 🔬 Domain | Class β | The Galileo Rule (Asymmetric Grounded Evidence) | $\text{is\_outlier}(A) = \text{False} \quad \text{if } G_A = 1.00 \land E_A \ge \theta_{\text{auth}}$ |
| **[`inv-bittorrent-worksharing`](#inv-bittorrent-worksharing)** | Inv 28 | 🔬 Domain | Class β | BitTorrent Work-Sharing & Generous Defaults | $\text{Savings} = 1 - \frac{1}{N} = 92.3\% \quad (N=13)$ |
| **[`inv-byzantine-cartel-resistance`](#inv-byzantine-cartel-resistance)** | Inv 29 | 🔬 Domain | Class β | Byzantine Cartel Resistance ($3f+1$) | $N \ge 3f + 1, \quad f = \left\lfloor \frac{N-1}{3} \right\rfloor$ |
| **[`inv-boredom-root-expansion`](#inv-boredom-root-expansion)** | Inv 39 | 🔬 Domain | Class β | Opportunistic Boredom Ingestion & Root Expansion | $\text{Headroom} \ge 30\%, \quad \text{Score} \le 25.0, \quad G = 1.00$ |
| **[`inv-soft-blacklist-buzzfeed`](#inv-soft-blacklist-buzzfeed)** | Inv 40 | 🔬 Domain | Class β | Soft Blacklisting & BuzzFeed News Doctrine | $T_{\text{poll}} = T_{\text{base}} \times 2^{\min(\text{deceptions}, 6)}$ |
| **[`inv-multi-interface-parity`](#inv-multi-interface-parity)** | Inv 30 | 🌐 Universal | Class γ | Universal Multi-Interface Feature Parity | All core system features are synchronously av... |
| **[`inv-zero-build-standards`](#inv-zero-build-standards)** | Inv 31 | 🌐 Universal | Class γ | Universal Zero-Build Standards (Zero-npm Invariant) | All web applications, documentation portals, ... |
| **[`inv-zero-build-math`](#inv-zero-build-math)** | Inv 32 | 🌐 Universal | Class γ | Zero-Build Math & Currency Invariant | Zero-build markdown parsers render mathematic... |
| **[`inv-cloudflare-assets`](#inv-cloudflare-assets)** | Inv 13 | 🔬 Domain | Class β | Cloudflare Workers Zero-Build Static Assets | Cloudflare Worker edge deployments define ASS... |
| **[`inv-edge-origin-header`](#inv-edge-origin-header)** | Inv 14 | 🔬 Domain | Class β | Edge Routing Origin Header Translation | Edge routers rewrite incoming Host headers to... |
| **[`inv-edge-canonicalization`](#inv-edge-canonicalization)** | Inv 33 | 🔬 Domain | Class β | Edge Subdirectory Canonicalization | Multi-domain edge routers intercept internal ... |
| **[`inv-mermaid-syntax-safety`](#inv-mermaid-syntax-safety)** | Inv 34 | 🌐 Universal | Class β | Universal Technical Schematic & Visual Syntax Guardrail | $\text{Width} \le 150 \text{ characters}$ |
| **[`inv-visual-density`](#inv-visual-density)** | Inv 35 | 🌐 Universal | Class γ | Visual Density & Anti-Wall-of-Text Invariant | $\text{Density} = \frac{\text{Visual Elements}}{\text{Word Count} / 500} \ge 2.0$ |
| **[`inv-playwright-rendering-tests`](#inv-playwright-rendering-tests)** | Inv 36 | 🌐 Universal | Class β | Automated Live Rendering Regression Verification | UI and docs updates are verified via Playwrig... |
| **[`inv-inline-html-math-integrity`](#inv-inline-html-math-integrity)** | Inv 37 | 🌐 Universal | Class γ | Zero-Build Inline HTML & Nested Math Integrity | Zero-build markdown parsers mask safe author-... |
| **[`inv-anti-scrollbox`](#inv-anti-scrollbox)** | Inv 38 | 🌐 Universal | Class γ | Anti-Scrollbox & Natural Flow Presentation | Reading surfaces avoid nested vertical scroll... |
| **[`inv-symmetric-navigation-zero-cache`](#inv-symmetric-navigation-zero-cache)** | Inv 41 | 🔬 Domain | Class γ | Symmetric 4-Pillar Navigation & Zero-Cache Edge | Global header navigation maintains 5 invarian... |
| **[`inv-epistemic-lensing`](#inv-epistemic-lensing)** | Inv 42 | 🌐 Universal | Class γ | The Epistemic Lensing & Information Pyramid Invariant | User views structure content into a 3-tier co... |
| **[`inv-web-component-isolation`](#inv-web-component-isolation)** | Inv 44 | 🌐 Universal | Class γ | Web Component Isolation & Zero-Clone Safety | Custom web components never invoke cloneNode(... |
| **[`inv-dense-workstation-viewport`](#inv-dense-workstation-viewport)** | Inv 45 | 🔬 Domain | Class γ | Dense Workstation Viewport & Zero-Masking Invariant | Workstation card grids are bounded within scr... |

