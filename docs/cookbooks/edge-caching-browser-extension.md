---
title: 'Cookbook: Browser Extension MV3 Zero-Hop Edge Verification'
description: Building a Manifest V3 browser extension with IndexedDB local caching, sub-10ms edge verification, and WebCrypto.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 5
---

# Cookbook: Browser Extension MV3 Zero-Hop Edge Verification

This cookbook demonstrates how to build a high-speed **Manifest V3 Chrome/Edge Browser Extension** that evaluates live web pages with **zero-hop local IndexedDB caching** and sub-10ms Anycast verification.

---

## 1. The Zero-Hop Query Flow

| Query Flow Stage | Subsystem / Storage Layer | Cache Lookup Condition | Epistemic Outcome & Latency |
| :--- | :--- | :--- | :--- |
| **1. Page Navigation** | Browser Extension Content Script | Computes document body SHA-256 DOM hash | Immediate in-browser trigger |
| **2. Local IndexedDB** | Extension IndexedDB Storage | Checks local client-side digest cache | **Cache Hit (<1ms)**: Render badge instantly |
| **3. Edge CDN Cache** | Cloudflare Global CDN (`credence.report`)| Queries edge KV / Cache API | **Cache Hit (<15ms)**: Adopt signed Ed25519 receipt |
| **4. Origin Background Sifter**| Cloud Run Compute Engine | Dispatches asynchronous audit job | Mint fresh attestation without blocking UI |

---

## 2. Manifest V3 Configuration (`manifest.json`)

```json
{
  "manifest_version": 3,
  "name": "Credence Epistemic Trust Lens",
  "version": "2.16.2",
  "description": "Verifiable journalistic ethics, citation grounding, and trust scoring directly in your browser.",
  "permissions": ["activeTab", "storage"],
  "host_permissions": ["https://credence.report/*", "https://docs.credence.run/*"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icons/shield-48.png"
  },
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*"],
      "js": ["content.js"]
    }
  ]
}
```

---

## 3. In-Browser Verification (`content.js`)

```javascript
// Compute DOM hash and query verification
async function verifyActivePage() {
  const text = document.body.innerText;
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(text));
  const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

  // Check local cache
  const cached = await chrome.storage.local.get(hashHex);
  if (cached[hashHex]) {
    renderBadge(cached[hashHex]);
    return;
  }

  // Query Cloudflare Edge
  const res = await fetch(`https://credence.report/api/v1/receipt/${hashHex}`);
  if (res.ok) {
    const receipt = await res.json();
    await chrome.storage.local.set({ [hashHex]: receipt });
    renderBadge(receipt);
  }
}
```

---

## 4. Related Guides

* 🔌 [Building a Zero-Build Browser Extension Guide](../integrations/browser-extension-mv3.md)
* 📘 [The Invariant Bible](../invariants.md) — Universal 4-Way Feature Parity

---
## Edge Caching and Browser Extension Integration

The browser extension checks local IndexedDB and Cloudflare CDN caches to render credibility badges in under 15 milliseconds.

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

To ensure continuous compliance with system invariants, **Edge Caching Browser Extension** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "edge_caching_browser_extension" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
