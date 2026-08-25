---
title: 'Walkthrough 06: Embeddable Badges & Documentation Self-Auditing'
description: Embed live trust badges, verify WebCrypto client hashing, and run the self-auditing docs integrity engine.
since_version: v1.11.0
verified_version: v2.16.8
last_verified: 2026-08-25
sidebar:
  order: 6
---

# Walkthrough 06: Embeddable Badges & Documentation Self-Auditing

In this walkthrough, you will learn how to embed the zero-dependency `<credence-badge>` Web Component and run the self-auditing documentation integrity engine (`credence audit-docs`).

---

## 1. Embedding the `<credence-badge>` Web Component

Add the zero-build script to your HTML `<head>`:

<!-- Load zero-build Web Component -->
<script type="module" src="https://credence.run/assets/credence-widget.js"></script>

Place the badge on your article or documentation page:

```html
<credence-badge 
  src="https://credence.report/api/v1/receipt/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  theme="dark"
  layout="pill">
</credence-badge>
```

When loaded in the browser, the component:
1. Normalizes the page text using the DOM Scrubber.
2. Computes the SHA-256 hash using native `crypto.subtle.digest()`.
3. Verifies the Ed25519 signature over canonical RFC 8785 JSON bytes.
4. Renders the interactive verification shield.

---

## 2. Running `credence audit-docs` Locally & in CI/CD

Credence practices **dogfooding**: every documentation file in `credence-docs/` is self-audited for frontmatter integrity, word length standards, and cryptographic attestations.

```bash
# Check mode: verifies all 196 docs match pyproject version and minimum lengths
$ credence audit-docs --check

# Update mode: re-scores all markdowns, generates SimHash-64, and signs attestations
$ credence audit-docs --update
```

---

## 3. Related Blueprints

* 🛡️ [Embeddable Attestation Badges Blueprint](../blueprints/embeddable-attestation-badges-and-anti-tamper.md)
* 📘 [The Invariant Bible](../invariants.md) — Living Canon & Attestation Parity

---
## Embedding Badges & Self-Auditing Documentation

To embed the `<credence-badge>` on any webpage or documentation article:

```html
<script type="module" src="https://credence.run/assets/credence-widget.js"></script>
<credence-badge src="https://credence.report/api/v1/attestations/sha256:4f8a..."></credence-badge>
```

| Badge Feature | Implementation Detail | Guarantee |
| :--- | :--- | :--- |
| **Zero Dependencies** | Pure native Web Component | 0 npm packages, 24KB download |
| **WebCrypto Verification** | Validates Ed25519 signature in browser | 100% client-side anti-tamper |
| **Theme Support** | Light / Dark automatic CSS variables | Seamless UI integration |

---
## Embedding Badges and Self-Auditing Documentation

Guide to embedding `<credence-badge>` widgets and running automated documentation self-audits in CI/CD.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **06 Embeddable Badges And Docs Self Auditing**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **06 Embeddable Badges And Docs Self Auditing** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "06_embeddable_badges_and_docs_self_auditing" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
