---
title: 'Technical Blueprint: Universal 4-Way Parity and Environment Governance'
description: Architectural blueprint specifying how CLI, FastMCP 2.0, Textual TUI, and Web UI maintain simultaneous feature parity across Dev and Prod.
since_version: v1.18.0
verified_version: v2.16.0
last_verified: 2026-08-24
---

# Technical Blueprint: Universal 4-Way Parity and Environment Governance

Credence strictly maintains simultaneous **Universal 4-Way Feature Parity** across all official user interfaces regardless of whether running in Dev (`credence-dev-495173`) or Production (`credence-prod-505902`), governed by **`inv-4way-parity-symmetric-web`** and **`inv-3plane-governance`**.

---

## 1. Interface Parity Matrix & Topology

---

## 2. Core Architectural Contracts

### A. Badge Studio 3-Modality Symmetry
Every interface must expose generation and inspection for all 3 badge modalities:
1. **Node Epistemic Merit Badges**: Vector SVG shields representing 7 canonical awards (`sprout_node`, `century_anchor`, `quorum_sentinel`, `sybil_shield`, etc.).
2. **Publisher Trust Badges**: Pill/shield badges displaying domain reputation, trust bands (`CLEAN`, `SUSPICIOUS`, `HOAX`), and Bayesian DCI ratings.
3. **Article Attestation Badges**: Cryptographic seals asserting verbatim grounding integrity ($G=1.00$) with dynamic anti-tamper states (`VERIFIED`, `FLAGGED`, `MODIFIED_POST_AUDIT`).

### B. Fail-Closed Zero-Mock Telemetry Boundary (`inv-production-telemetry-boundary`)
Operator dashboards in TUI, CLI, and Web components must never render synthetic fallback datasets when unseeded. Instead, they must report true node reality ($N \ge 1$, $f = \lfloor (N-1)/3 \rfloor$, `STANDALONE` when unpeered) with explicit empty state cards.

### C. 3-Tier Epistemic Lensing Symmetry (`inv-epistemic-lensing`)
All surfaces provide access to the 3-tier Information Pyramid:
- **Surface Lens (1)**: Glance — high-level trust score gauge and takeaway.
- **Focus Lens (2)**: Evidence — itemized grounded violations and sparklines.
- **Deep Forensic Lens (3)**: Cryptographic envelope, Ed25519 signature, and canonical SHA-256 hash.

---

## 3. Dual-Environment Least-Privilege CI/CD

Deployment across Edge and Compute planes follows strict branch isolation:
* **Feature Branches (`feat/...`, `fix/...`)**: Deploy to Dev (`credence-dev-495173`) and Cloudflare preview (`--branch=dev`).
* **Main Branch (`main`)**: Deploys to Production (`credence-prod-505902`) and Cloudflare Edge (`--branch=main`) only upon explicit Mk1 human review.
* **Hermetic Shift-Left Tests**: All PRs must pass `just check` (<20s), verifying 100% 4-way parity, 500 LOC ceilings, and documentation synchronization before merge.
