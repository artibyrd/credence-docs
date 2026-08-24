---
title: 'Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch'
description: Technical architecture of Cloudflare Anycast edge routing, multi-domain dispatching, and cache tiering across production and dev subdomains.
since_version: v1.18.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 1
---

# Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch

This blueprint details the edge routing algorithms, cache tiering, and dynamic OpenGraph rewriting implemented in `web/_worker.js` across Cloudflare's global Anycast edge network.

---

## 1. Request Resolution Pipeline

The Credence edge router (`web/_worker.js`) intercepts all incoming HTTP requests at the CDN edge and routes them to static assets, documentation markdowns, or backend Cloud Run compute services with zero client-side bundling or build steps:

```
 Incoming HTTP Request (e.g., https://docs.credence.run/docs/protocols/mesh-protocol)
                         |
                         ▼
| 1. Hostname Inspection & Environment Routing           |
|    • Resolves apex (credence.run) vs. subdomains       |
|    • Checks dev preview prefix (dev.*)                 |
                         |
                         ▼
| 2. Subdirectory Path Mapping                           |
|    • docs.credence.run -> /credence-docs/index.html    |
|    • blog.credence.run -> /credence-docs/index.html    |
|    • credence.report   -> /web/credence.report/        |
|    • credence.nexus    -> /web/credence.nexus/         |
|    • credence.foundation -> /web/credence.foundation/  |
                         |
                         ▼
| 3. Tiered Cache Header Injection                       |
|    • SVGs/Static: s-maxage=2592000, immutable          |
|    • Dynamic Docs: max-age=0, must-revalidate          |
                         |
                         ▼
| 4. Dynamic HTMLRewriter OpenGraph Metadata Injection   |
|    • Rewrites og:title, og:image, og:url per article   |
```

### 1.1 Multi-Domain Subdirectory Dispatch Matrix

| Inbound Domain / Route | Target Web Subdirectory | Primary Artifact / App Entry |
| :--- | :--- | :--- |
| `credence.run/*` | `web/credence.run/` | Single-command installer & landing portal |
| `docs.credence.run/*` | `credence-docs/` | Zero-build ES module docs router (`index.html`) |
| `blog.credence.run/*` | `credence-docs/` | Sovereign editorial essays (`app.js?plane=blog`) |
| `credence.report/*` | `web/credence.report/` | Public report search & interactive viewer |
| `credence.nexus/*` | `web/credence.nexus/` | P2P seed directory, network health & telemetry |
| `credence.foundation/*` | `web/credence.foundation/` | Root key custody, governance registries & RFCs |
| `admin.credence.run/*` | `web/admin.credence.run/` | Authenticated operator command cockpit |

---

## 2. Zero-Build Web Assets Invariant

All HTML, CSS, and ES Modules are served directly from Cloudflare Pages and KV storage without any build step, bundler (Webpack, Vite, Rollup), or npm dependencies:
- **Native ES Modules**: Scripts use standard W3C `import` and `export` statements with relative URI resolution.
- **W3C WebCrypto Engine**: In-browser attestation verification uses native `crypto.subtle` (Ed25519) with zero external cryptographic libraries.
- **Zero-Dependency Vector Badges**: SVG badges and charts render natively without third-party charting libraries.

---

## 3. Tiered Cache Header Architecture

To maximize edge performance while ensuring documentation changes propagate instantly:

```javascript
// Static vector assets and immutable fonts (1 month edge cache)
if (url.pathname.startsWith('/assets/illustrations/') || url.pathname.endsWith('.svg')) {
  response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=2592000, immutable');
  response.headers.set('CDN-Cache-Control', 'public, s-maxage=2592000');
} 
// Dynamic markdown documentation and API endpoints (Zero-cache revalidation)
else if (url.pathname.endsWith('.md') || url.pathname.startsWith('/api/')) {
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
}
```

---

## 4. Dynamic HTMLRewriter OpenGraph Metadata Injection

When a link to `docs.credence.run` or `blog.credence.run` is shared on messaging platforms (Discord, Slack, Twitter/X), the edge worker reads the target article's YAML frontmatter and rewrites standard OpenGraph tags on the fly:

```javascript
const rewriter = new HTMLRewriter()
  .on('meta[property="og:title"]', {
    element(e) { e.setAttribute('content', articleTitle); }
  })
  .on('meta[property="og:description"]', {
    element(e) { e.setAttribute('content', articleDescription); }
  })
  .on('meta[property="og:image"]', {
    element(e) { e.setAttribute('content', `${originUrl}/assets/og-card.png`); }
  });
```

---

## 5. Verification & Testing

```bash
# Validate Cloudflare Wrangler route definitions
$ pytest tests/governance/test_edge_cache_headers.py

# Verify edge worker asset routing and 4-way parity
$ pytest tests/governance/test_docs_integrity.py -k test_edge_wrangler_routes_and_web_folders_parity
```

---

## 6. Related Blueprints & Protocols

* 📘 [The Invariant Bible](../invariants.md) — Zero-Build Static Assets & Edge Canonicalization
* 🏛️ [The 3-Plane Architecture Essay](../../blog/the-three-plane-architecture.md)
* 🛠️ [Cloud Run Deployment Runbook](../deployment-cloudrun.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Zero Build Edge Routing And Subdomain Dispatch** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Zero Build Edge Routing And Subdomain Dispatch** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blueprints"

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