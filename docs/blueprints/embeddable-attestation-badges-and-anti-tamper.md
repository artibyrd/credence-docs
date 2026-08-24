---
title: 'Architectural Blueprint: Embeddable Badges, WebCrypto Hashing & Anti-Tamper
  Isolation'
description: Formal specification of the <credence-badge> Web Component, in-browser
  WebCrypto DOM hash validation, and DOM extraction scrubbing.
category: Architectural Blueprints
verified_version: v2.14.0
last_verified: 2026-08-23
since_version: v2.1.0
---

# Architectural Blueprint: Embeddable Badges & Anti-Tamper Isolation

This blueprint specifies the cryptographic envelopes, DOM extraction scrubbing rules, and in-browser WebCrypto attestation validation mechanics governing `<credence-badge>`.

---

## 1. DOM Extraction Scrubber & Rescore Immunity Invariant

To ensure that embedding or modifying a `<credence-badge>` never alters a page's canonical `content_sha256` or SimHash, `credence/ingestion/extractor.py` strips all badge-related elements before hashing:

```python
# Stripped before computing SHA-256:
# 1. <credence-badge ...>...</credence-badge>
# 2. [data-credence-ignore="true"]
# 3. [data-credence-widget="true"]
# 4. .credence-badge, .credence-badge-container
```

### SEC-1.1 Camouflage Guard:
If a non-badge element marked `data-credence-ignore="true"` contains more than 150 characters of visible text, the parser flags **Intentional DOM Camouflage** and applies an autonomous 50-point suspicion penalty.

---

## 2. In-Browser Live DOM Hashing Protocol

When `<credence-badge>` mounts on a client page, it executes:
1. Clones `document.body` and removes all `[data-credence-ignore]` elements.
2. Applies Unicode NFKC normalization and whitespace collapsing.
3. Computes `crypto.subtle.digest("SHA-256", textBytes)`.
4. Compares the resulting digest against `receipt.content_sha256`.
5. If mismatch detected: transitions badge state to **MODIFIED**.

---

## 3. Unified Vector Badge Parity

For static markdown pages, GitHub READMEs, and newsroom mastheads where client-side JavaScript execution is blocked, the server-side vector SVG engine provides high-DPI badges with matching Cyber Dark styling.

*See the comprehensive architectural specification: [Unified Epistemic Merit & Attestation Badge System](unified-merit-and-attestation-badge-system.md).*