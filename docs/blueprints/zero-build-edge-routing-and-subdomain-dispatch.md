---
title: 'Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch'
description: Technical architecture of Cloudflare Anycast edge routing, multi-domain dispatching, and cache tiering across production and dev subdomains.
since_version: v1.18.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 1
---

# Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch

This blueprint details the edge routing algorithms, cache tiering, and dynamic OpenGraph rewriting implemented in `web/_worker.js` across Cloudflare's global Anycast edge network.

---

## 1. Request Resolution Pipeline

The Credence edge router (`web/_worker.js`) intercepts all incoming HTTP requests at the CDN edge and routes them to static assets, documentation markdowns, or backend Cloud Run compute services with zero client-side bundling or build steps:

Incoming HTTP Request (e.g., https://docs.credence.run/docs/protocols/mesh-protocol)
1. Hostname Inspection & Environment Routing
- Resolves apex (credence.run) vs. subdomains
- Checks dev preview prefix (dev.*)
2. Subdirectory Path Mapping
- docs.credence.run -> /credence-docs/index.html
- blog.credence.run -> /credence-docs/index.html
- credence.report   -> /web/credence.report/
- credence.nexus    -> /web/credence.nexus/
- credence.foundation -> /web/credence.foundation/
3. Tiered Cache Header Injection
- SVGs/Static: s-maxage=2592000, immutable
- Dynamic Docs: max-age=0, must-revalidate
4. Dynamic HTMLRewriter OpenGraph Metadata Injection
- Rewrites og:title, og:image, og:url per article

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

---
## Zero-Build Edge Routing & Subdomain Dispatch Architecture

The Cloudflare Workers edge router (`_worker.js`) dispatches requests across apex, documentation, report, and organization subdomains without build steps:

| Inbound Domain | Edge Dispatch Destination | Content-Type & Caching Policy |
| :--- | :--- | :--- |
| `credence.run` | `web/index.html` | `text/html; max-age=300` |
| `docs.credence.run` | `credence-docs/index.html` | `text/html; max-age=3600` |
| `credence.report` | Dynamic attestation viewer | `application/json; max-age=86400` |
| `*.trust.credence.run` | Multi-tenant organization portal | `text/html; max-age=60` |

```javascript
// Edge router subdomain extraction in pure ES Module
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    if (hostname.startsWith("docs.")) {
      return env.ASSETS.fetch(new Request(`${url.origin}/credence-docs/index.html`));
    }
    return env.ASSETS.fetch(request);
  }
};
```
