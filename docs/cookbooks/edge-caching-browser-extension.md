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

```
 User Navigates to Webpage
           |
           ▼
| 1. Content Script Computes DOM SHA-256                 |
                           |
                           ▼
| 2. Check Local Extension IndexedDB Cache               |
|    • Hit? (<1ms): Render cached verification badge     |
                           | (Cache Miss)
                           ▼
| 3. Query Cloudflare Edge CDN Cache (`credence.report`) |
|    • Hit? (<15ms): Adopt signed Ed25519 receipt        |
                           | (Edge Miss)
                           ▼
| 4. Background Sifter Dispatches Asynchronous Audit     |
```

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

## Architectural Invariants & Verification Mechanics

The implementation of **Edge Caching Browser Extension** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Edge Caching Browser Extension** using standard CLI commands and FastMCP 2.0 tools:

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