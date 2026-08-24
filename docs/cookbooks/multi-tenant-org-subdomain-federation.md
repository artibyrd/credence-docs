---
title: 'Cookbook: Multi-Tenant Org Subdomain Federation'
description: Dynamic wildcard subdomain routing, tenant isolation, and custom branding for white-labeled organizations.
since_version: v1.11.0
verified_version: v2.16.3
last_verified: 2026-08-24
sidebar:
  order: 6
---

# Cookbook: Multi-Tenant Org Subdomain Federation

This cookbook demonstrates how to configure wildcard subdomain dispatching (`*.trust.example.com`) across Cloudflare Workers and Cloud Run to host multiple white-labeled newsroom tenants on a single shared compute plane.

---

## 1. Multi-Tenant Architecture Overview

| Request Routing Layer | Component Technology | Action Executed | Tenant Security Boundary |
| :--- | :--- | :--- | :--- |
| **1. Inbound Ingress** | Browser / API Client | Navigates to `https://acme.trust.credence.run` | DNS wildcard routing |
| **2. Edge Worker Dispatch** | Cloudflare Workers (`_worker.js`) | Extracts slug `acme` & loads tenant KV config | Zero-build edge routing |
| **3. Epistemic Compute** | Cloud Run (`credence-server-prod`) | Evaluates assertions under `acme` taxonomy namespace | Epistemic tenant isolation |
| **4. Attestation Custody** | RFC 8785 Canonical JSON | Signs receipts with `acme` Ed25519 tenant key | Sovereign cryptographic custody |

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

---
## Multi-Tenant Subdomain Routing with Cloudflare Workers

Wildcard DNS and Cloudflare edge workers route custom organization subdomains to isolated tenant configurations.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Multi Tenant Org Subdomain Federation** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "multi_tenant_org_subdomain_federation" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
