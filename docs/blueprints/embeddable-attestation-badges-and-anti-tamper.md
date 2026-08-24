---
title: 'Architectural Blueprint: Embeddable Badges, WebCrypto Hashing & Anti-Tamper'
description: Client-side DOM canonicalization, inline WebCrypto Ed25519 verification, and defenses against scrubber cloaking.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 7
---

# Architectural Blueprint: Embeddable Badges, WebCrypto Hashing & Anti-Tamper

This blueprint details the client-side cryptographic attestation and anti-tamper architecture implemented in the zero-dependency Web Component `<credence-badge>` (`assets/credence-widget.js`).

---

## 1. Zero-Dependency Web Component Lifecycle

The `<credence-badge>` is a lightweight, zero-npm Custom Element that executes in any modern browser using the W3C WebCrypto API:

Webpage DOM Loaded
▼
1. Canonical DOM Scrubber Execution
• Strips dynamic widgets, badge tags, and ignore DOM
▼
2. Client-Side SHA-256 Text Hashing
• Computes hash over normalized UTF-8 text
▼
3. In-Browser WebCrypto Ed25519 Signature Verification
• Verifies signature against embedded node pubkey
▼
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

## Architectural Invariants & Verification Mechanics

The implementation of **Embeddable Attestation Badges And Anti Tamper** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Embeddable Attestation Badges And Anti Tamper** using standard CLI commands and FastMCP 2.0 tools:

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