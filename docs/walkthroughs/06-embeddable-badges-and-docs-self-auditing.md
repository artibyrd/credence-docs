---
title: 'Feature Walkthrough: Embeddable Badges & Documentation Self-Auditing'
description: Step-by-step developer guide for embedding <credence-badge>, configuring
  anti-tamper WebCrypto gates, and running differential CI/CD audits.
category: Feature Walkthroughs
verified_version: v2.15.0
last_verified: 2026-08-23
since_version: v2.1.0
---

# Feature Walkthrough: Embeddable Badges & Documentation Self-Auditing

In this walkthrough, you will learn how Credence **practices what it preaches** by self-auditing its own documentation portal, and how external publishers can embed the zero-dependency `<credence-badge>` Web Component onto any webpage.

---

## 1. The Embeddable Badge Form Factor

The `<credence-badge>` is a zero-build, zero-npm custom element that renders a compact verification pill on your website:

```html
<!-- Include the lightweight script once per page -->
<script type="module" src="https://credence.run/assets/credence-widget.js"></script>

<!-- Place the badge anywhere in your header or masthead -->
<credence-badge url="https://example.com/climate-study" receipt="ey..."></credence-badge>
```

### Visual Appearance:
- **Default Glance (Pill)**: `[ 🛡️ 98.5 Clean · Verified v2.6.4 🔍 ]`
- **Interactive Lensing Popover**: Clicking or hovering opens the 3-Tier Lensing popover with Surface verdict, Focus score trajectory sparklines, and Deep Spectrum Ed25519 public key fingerprints.

### Choosing Between Web Component & Vector SVG

| Deployment Target | Recommended Format | Key Reason |
| :--- | :--- | :--- |
| **Active HTML Websites & Blogs** | `<credence-badge>` Web Component | Enables live client-side WebCrypto SHA-256 DOM hashing and 3-tier interactive lensing popovers. |
| **GitHub READMEs & Git Forges** | Dynamic Vector SVG (`.svg`) | Standard markdown renderers block custom JavaScript execution; vector SVGs provide crisp badges linking back to verification receipts. |
| **Newsroom Mastheads** | Either (SVG or Web Component) | Use vector SVGs for server-rendered static templates, or `<credence-badge type="publisher">` for live client-side interactivity. |

---

## 2. In-Browser Anti-Tamper WebCrypto Gate

Every `<credence-badge>` computes the SHA-256 hash of the host webpage's rendered text directly in the reader's browser using `crypto.subtle.digest("SHA-256", ...)`:

```
Rendered DOM Text ──► Unicode NFKC Normalize ──► crypto.subtle.digest() ──► Match Signed receipt.content_sha256?
                                                                                    │
                                                                   ┌────────────────┴────────────────┐
                                                                   ▼                                 ▼
                                                        [ 🛡️ 98.5 Clean · Verified ]      [ ⚠️ Content Modified ]
```

If an author stealth-edits their article after being audited, the client-side hash check immediately fails and morphs the badge into an orange warning pill: **"⚠️ Content Modified Since Verification"**.

---

## 3. Running `credence audit-docs` Locally & in CI/CD

To audit your documentation or blog articles for epistemic integrity, run:

```bash
# Check mode (fails with exit code 1 if issues or hardcoded invariant counts exist)
credence audit-docs --check

# Update mode (updates verified_version and generates assets/attestations.json)
credence audit-docs --update
```

---

## 4. Differential CI/CD Integration

In GitHub Actions, only audit documentation files that were modified in the active commit:

```bash
# Detect changed markdown files
CHANGED_FILES=$(git diff --name-only ${{ github.event.before }} ${{ github.sha }} -- 'docs/*.md' 'blog/*.md')

if [ -n "$CHANGED_FILES" ]; then
  poetry run credence audit-docs --files $CHANGED_FILES --update
fi
```\n