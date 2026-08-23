---
title: 'Cookbook: Browser Extension MV3 Zero-Hop Edge Verification'
description: Recipe for integrating Chrome Extension Manifest V3 with Cloudflare Anycast Edge for sub-20ms instant trust badges.
since_version: v1.17.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Cookbook: Browser Extension MV3 Zero-Hop Edge Verification

This cookbook demonstrates how Chrome Extension Manifest V3 queries cached epistemic attestations directly from Cloudflare's Anycast Edge in $<20\text{ms}$ with zero origin compute overhead.

---

## 1. The Zero-Hop Query Flow

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         MV3 EXTENSION ZERO-HOP EDGE VERIFICATION FLOW                            │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Chrome Browser (MV3)            Cloudflare Anycast Edge (300+ PoPs)     Cloud Run Compute Plane  │
│        │                                        │                                   │            │
│        │──── GET /api/reports/{sha256} ────────▶│                                   │            │
│        │                                        │                                   │            │
│        │◀─── 200 OK (Signed Ed25519 <20ms) ─────│ [Cache Hit: 95%+ of queries]     │            │
│        │                                        │                                   │            │
│        │   [Cache Miss: Novel Scrape 5%]        │──── Forward Scrape Request ──────▶│            │
│        │                                        │◀─── 200 OK (Immutable Cache-Ctl)─│            │
│        │◀─── 200 OK (Audited Attestation) ──────│                                   │            │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ⚡ Sub-20ms instant client rendering with zero compute token spend on 95%+ of audited URLs        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Client-Side Implementation

```javascript
// content-script.js
async function checkCurrentPageTrust(pageSha256) {
  const edgeEndpoint = `https://credence.report/api/reports/${pageSha256}`;
  const response = await fetch(edgeEndpoint, {
    headers: { "Accept": "application/json" },
    cache: "force-cache"
  });

  if (response.ok) {
    const report = await response.json();
    renderTrustPill(report.suspicion_score, report.classification);
  }
}
```
