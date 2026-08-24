---
title: 'Cookbook: Multi-Tenant Org Subdomain Federation'
description: Dynamic wildcard subdomain routing, tenant isolation, and custom branding for white-labeled organizations.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 6
---

# Cookbook: Multi-Tenant Org Subdomain Federation

This cookbook demonstrates how to configure wildcard subdomain dispatching (`*.trust.example.com`) across Cloudflare Workers and Cloud Run to host multiple white-labeled newsroom tenants on a single shared compute plane.

---

## 1. Multi-Tenant Architecture Overview

```
 Inbound Request (e.g., https://acme.trust.credence.run)
                         |
                         ▼
| Cloudflare Edge Worker (`_worker.js`)                  |
|  • Extracts tenant slug: "acme"                        |
|  • Loads tenant config from KV store                   |
                         |
                         ▼
| Stateless Compute Plane (`credence-server-prod`)       |
|  • Evaluates claims under `acme` taxonomy namespace    |
|  • Signs receipts with `acme` Ed25519 tenant key       |
```

---

## 2. Configuring Cloudflare Wildcard DNS

Add a wildcard DNS CNAME record in your domain registrar:
```ini
*.trust.credence.run.   IN CNAME   credence.pages.dev.
```

---

## 3. Dynamic Tenant Dispatch in `_worker.js`

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostParts = url.hostname.split('.');
    
    // Extract tenant prefix if present
    const tenantSlug = hostParts.length >= 4 ? hostParts[0] : 'default';
    
    // Inject tenant header into upstream compute request
    const modifiedRequest = new Request(request, {
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        'X-Credence-Tenant': tenantSlug,
      })
    });
    
    return await fetch(env.COMPUTE_UPSTREAM_URL, modifiedRequest);
  }
};
```

---

## 4. Related Protocols & Blueprints

* 🏛️ [White-Label Sovereign Federation Protocol](../protocols/white-label.md)
* 🌐 [Zero-Build Edge Routing Blueprint](../blueprints/zero-build-edge-routing-and-subdomain-dispatch.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Multi Tenant Org Subdomain Federation** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Multi Tenant Org Subdomain Federation** using standard CLI commands and FastMCP 2.0 tools:

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