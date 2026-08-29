---
title: 'Architectural Blueprint: Embeddable Badges, WebCrypto Hashing & Anti-Tamper'
description: Client-side DOM canonicalization, inline WebCrypto Ed25519 verification, and defenses against scrubber cloaking.
since_version: v1.11.0
verified_version: v2.18.2
last_verified: 2026-08-29
sidebar:
  order: 7
---

# Architectural Blueprint: Embeddable Badges, WebCrypto Hashing & Anti-Tamper

This blueprint details the client-side cryptographic attestation and anti-tamper architecture implemented in the zero-dependency Web Component `<credence-badge>` (`assets/credence-widget.js`).

---

## 1. Zero-Dependency Web Component Lifecycle

The `<credence-badge>` is a lightweight, zero-npm Custom Element that executes in any modern browser using the W3C WebCrypto API:

Webpage DOM Loaded
1. Canonical DOM Scrubber Execution
- Strips dynamic widgets, badge tags, and ignore DOM
2. Client-Side SHA-256 Text Hashing
- Computes hash over normalized UTF-8 text
3. In-Browser WebCrypto Ed25519 Signature Verification
- Verifies signature against embedded node pubkey
4. Renders Vector Shield & Epistemic Trust Gauge

---

## 2. Canonical DOM Scrubber Rules

To ensure that the content SHA-256 calculated by the browser matches the hash audited by the Credence node, the client scrubber strips dynamic and ephemeral DOM elements before computing the SHA-256 hash:

1. `<credence-badge>` and `.credence-badge-container` elements.
2. Elements marked with `[data-credence-ignore="true"]` (ads, dynamic comment sections, real-time stock tickers).
3. Elements marked with `[data-credence-widget="true"]` (social sharing buttons, modal wrappers).
4. `<script>`, `<style>`, `<noscript>`, and `<iframe>` tags.

---

## 3. Four Core Anti-Tamper Attack Defenses

### 3.1 Bait-and-Switch (Post-Audit Mutation)
- **Attack**: A publisher audits an accurate article, receives a `PRISTINE` attestation, and then silently alters the article body to insert malicious disinformation.
- **Defense**: When the `<credence-badge>` loads in a reader's browser, it re-computes the DOM SHA-256. If the hash differs from the signed receipt, the badge instantly transitions to `TAMPERED` state (flashing red with a forensic mismatch warning).

### 3.2 Signature Forgery
- **Attack**: An attacker crafts a fake receipt claiming a `PRISTINE` score with an invalid Ed25519 signature.
- **Defense**: Native `crypto.subtle.verify()` checks the mathematical signature over RFC 8785 canonical bytes. If forged, verification fails immediately.

### 3.3 Scrubber Cloaking
- **Attack**: An attacker hides false claims inside `[data-credence-ignore="true"]` attributes.
- **Defense**: The crawler audits and flags pages where ignored elements constitute $>30\%$ of total body prose.

---

## 4. Integration Recipes & Embed Code

<!-- Include Zero-Build Web Component -->
<script type="module" src="https://credence.run/assets/credence-widget.js"></script>
<!-- Embed Live Article Attestation Badge -->
<credence-badge
src="https://credence.report/api/v1/receipt/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
theme="dark"
layout="pill">
</credence-badge>

---

## 5. Related Protocols & Labs

* 🎮 [Adversarial Badge Security Lab (Break the Badge)](../lab-badge-security.md)
* 📘 [The Invariant Bible](../invariants.md) — Web Component Isolation & Zero-Clone Invariant

---
## Web Component Lifecycle & Cryptographic Anti-Tamper Verification

The `<credence-badge>` Custom Element provides a zero-npm, embeddable trust indicator for publishers and readers. To prevent publisher tampering or man-in-the-middle spoofing, the widget validates its attestation entirely client-side using the native W3C WebCrypto API:

| Badge State | Visual Styling | Verification Criteria | User Action on Click |
| :--- | :--- | :--- | :--- |
| **PRISTINE** | Emerald Green Pill (`#10b981`) | Suspicion $<20.0$, Grounding $G=1.00$, Ed25519 Verified | Opens modal with verified DOM quotes |
| **NOTABLE_FLAGS** | Amber Warning Pill (`#f59e0b`) | Suspicion $20.0–60.0$, Minor rule violations | Displays specific journalistic issues |
| **UNRELIABLE** | Crimson Alert Pill (`#ef4444`) | Suspicion $>60.0$, Major ungrounded claims | Warns reader of deceptive assertions |
| **TAMPERED** | High-Contrast Purple (`#a855f7`)| DOM SHA-256 does not match signed envelope | Shows cryptographic tamper receipt |

```html
<!-- Canonical Embed Snippet for Web Publishers -->
<script type="module" src="https://credence.run/assets/credence-widget.js"></script>
<credence-badge 
  src="https://credence.report/api/v1/attestations/sha256:4f8a9b..." 
  data-theme="dark"
  data-lens="focus">
</credence-badge>
```

---
## Web Component Custom Element Definition

The `<credence-badge>` element leverages Shadow DOM encapsulation and native WebCrypto to prevent CSS leakage and host DOM tampering.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Embeddable Attestation Badges And Anti Tamper** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
