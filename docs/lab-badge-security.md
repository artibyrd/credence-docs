---
title: 'Playground 14: Adversarial Badge Security Lab (Break the Badge)'
description: Interactive zero-build sandbox testing the anti-tamper defenses of <credence-badge> against Bait-and-Switch, signature forgery, and domain spoofing.
category: Interactive Playgrounds
since_version: v2.1.0
verified_version: v2.16.1
last_verified: 2026-08-24
---

# Playground 14: Adversarial Badge Security Lab (Break the Badge) 🛡️

The `<credence-badge>` Web Component is engineered to operate in hostile third-party DOM environments. Unlike legacy trust badges that rely on unverifiable image tags, Credence badges execute client-side cryptographic verification directly inside the reader's browser using W3C WebCrypto APIs.

:::tabs
=== ⚔️ Red-Team Threat Vectors
| Attack Vector | Attacker Objective | Defensive Invariant |
| :--- | :--- | :--- |
| **1. Bait-and-Switch** | Modify article text after receiving pristine audit receipt | In-browser `crypto.subtle.digest("SHA-256")` text hash gate |
| **2. Signature Forgery** | Modify receipt score without private key | RFC 8785 canonical JSON bytes & Ed25519 curve verification |
| **3. Cross-Domain Replay** | Steal a pristine receipt from another domain (e.g., `nature.com`) | Fail-closed `window.location.origin` origin binding check |
| **4. Scrubber Camouflage** | Hide defamatory text inside `[data-credence-ignore]` | SEC-1.1: 150-character limit with autonomous 50-pt score slash |
:::

---

## 1. Live Interactive Red-Team Sandbox

Test your red-teaming skills against the live `<credence-badge>` component below. Click any attack trigger to simulate an exploit and inspect how the component's internal security gates defend against tampering in real time:

<div id="badge-security-lab-container" class="playground-container" data-credence-ignore="true">
  <!-- Interactive simulator mounted by app.js -->
</div>

---

## 2. Defensive Cryptographic Architecture

When `<credence-badge>` initializes in a web page, it executes an autonomous 4-stage integrity pipeline before rendering its verification pill:

| Stage | Security Check | Cryptographic Primitive | Failure Outcome |
| :--- | :--- | :--- | :--- |
| **1. Origin Binding** | `receipt.origin_url` host matches `window.location.origin` | DOM Origin Inspection | `DOMAIN MISMATCH` (Fails closed) |
| **2. Scrubber Guard** | All `[data-credence-ignore]` elements $\le 150$ characters | SEC-1.1 DOM Scrubber Guard | Autonomous 50-pt penalty + Cloaking Flag |
| **3. WebCrypto Hash** | Normalized visible DOM text matches `content_sha256` | W3C `crypto.subtle.digest("SHA-256")` | `MODIFIED (Score Invalidated)` |
| **4. Ed25519 Verification** | Signature verifies over canonical RFC 8785 JSON bytes | Ed25519 Curve Verification | `FORGED ATTESTATION` |

---

## 3. Detailed Attack Vector Teardowns

### Attack 1: Bait-and-Switch (Post-Audit Mutation)
A malicious publisher submits an authentic, well-sourced scientific report to the Credence network and obtains a signed receipt with score `98.5`. After receiving the signed attestation, the publisher edits the DOM to insert unverified claims.
- **Defense**: The `<credence-badge>` extracts the visible document text, normalizes whitespace, and recomputes the SHA-256 hash using `window.crypto.subtle`. If the hash differs from the signed receipt's `content_sha256`, the badge immediately transitions to `MODIFIED (Score Invalidated)`.

### Attack 2: Signature Forgery
An attacker intercepts an attestation envelope and changes `suspicion_score` from `65.0` to `0.0`.
- **Defense**: The badge parses the envelope into RFC 8785 canonical bytes and verifies the Ed25519 signature against the node's public key. Because Ed25519 signatures are mathematically unforgeable without the private key, verification fails and the badge renders `FORGED ATTESTATION`.

### Attack 3: Cross-Domain Replay
An untrusted blog embeds an authentic attestation receipt issued to `nature.com`.
- **Defense**: The badge compares `receipt.origin_url` with the ambient `window.location.origin`. Because the origins do not match, the badge fails closed with a `DOMAIN MISMATCH` indicator.

### Attack 4: Scrubber Camouflage
An author wraps defamatory paragraphs inside `[data-credence-ignore]` elements to evade pipeline scoring.
- **Defense**: The client-side scrubber enforces the SEC-1.1 guardrail: any non-badge element with `data-credence-ignore` exceeding 150 characters is rejected, causing an autonomous 50-point score penalty and cloaking alert.

---

## 4. Architectural & System Invariants

This lab enforces key principles from **The Invariant Bible**:
- **`inv-canonical-json-ed25519`**: RFC 8785 canonical JSON bytes ensure cross-platform signature determinism between Python CLI and in-browser WebCrypto.
- **`inv-mk1-eyeball` & `inv-web-component-isolation`**: Zero-clone, leak-free Web Component isolation ensuring tamper alerts cannot be hidden by host scripts.
- **`inv-untrusted-ingestion`**: Defensive isolation of all untrusted third-party DOM text.\n