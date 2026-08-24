---
title: 'Technical Blueprint: Universal 4-Way Parity and Environment Governance'
description: Feature symmetry across CLI, FastMCP 2.0, Textual TUI, and Zero-Build Web UI, and strict Dev/Prod least-privilege governance.
since_version: v1.12.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 5
---

# Technical Blueprint: Universal 4-Way Parity and Environment Governance

This blueprint defines the architectural contracts ensuring **Universal 4-Way Feature Parity** across all human and machine interfaces, alongside strict dual-environment isolation between Development and Production.

---

## 1. Interface Capability Matrix & 4-Way Parity

Every core capability in the Credence ecosystem is implemented symmetrically across four decoupled presentation planes:

| Capability / Feature | Terminal CLI (`credence`) | FastMCP 2.0 (Claude/Cursor) | Textual TUI (`credence tui`) | Zero-Build Web (`web/`) |
| :--- | :---: | :---: | :---: | :---: |
| **Live URL Epistemic Audit** | `credence audit <url>` | `credence_check_url` | Pane 1 (Live Inspector) | `credence.report/viewer.html` |
| **Raw Text Audit** | `credence audit --text "..."` | `credence_check_text` | Pane 1 (Text Modal) | `docs.credence.run/#playground` |
| **Attestation Receipt Verification** | `credence verify <file>` | `credence_verify_attestation` | Pane 7 (Identity & Crypto) | In-Browser WebCrypto Verifier |
| **Domain Dossier & DCI Lookup** | `credence domain intel <fqdn>` | `credence_get_domain_dossier` | Pane 5 (Domain Dossiers) | `credence.report` Search |
| **Token Safety Governor Telemetry** | `credence governor status` | `credence_get_quota_status` | Pane 6 (Headroom Governor) | `credence.nexus/dashboard.html` |
| **P2P Mesh Topology & Peers** | `credence mesh status` | `credence_query_mesh` | Pane 2 (Mesh Telemetry) | `credence.nexus/mesh.html` |
| **Syndicated Feed Sifting** | `credence sifter run` | `credence_sift_feed` | Pane 4 (Syndicated Feeds) | Morning Briefing Viewer |
| **RFC Standards Governance** | `credence rfc list` | `credence_list_rfcs` | Pane 3 (Taxonomy Tree) | `credence.foundation` Governance |

---

## 2. Core Architectural Contracts

To maintain absolute symmetry without code duplication:
1. **Shared Subsystem Layer**: All interfaces invoke the underlying pipeline controllers (`credence.pipeline.auditor`, `credence.identity`, `credence.mesh.consensus`).
2. **Deterministic Serialization**: Datetime objects are serialized to ISO 8601 / RFC 3339 strings across all JSON endpoints and SQLite entities.
3. **Common Color & Typography Tokens**: Badges use identical HEX colors (`#10b981` PRISTINE, `#f59e0b` NOTABLE_FLAGS, `#ef4444` SUSPICIOUS, `#7c3aed` UNRELIABLE) across Textual TUI CSS, SVG templates, and Web stylesheets.

---

## 3. Dual-Environment Least-Privilege CI/CD

Credence maintains strict physical separation between Development and Production:

Developer Workspace / PR Triad
▼
Dev Environment (`credence-dev-495173`)
• Edge: dev.credence.run (Cloudflare Pages branch)
• Compute: Google Cloud Run Dev Instance
• Keyless WIF: GitHub Actions OIDC (Least Privilege)
(Mk1 Eyeball Human Sign-Off)
▼
Production Environment (`credence-prod-505902`)
• Edge: credence.run (Cloudflare Pages main)
• Compute: Google Cloud Run Prod Instance
• Sovereign Root Key Custody: credence.foundation

- **Zero Cross-Contamination**: Development builds use separate Ed25519 test keys and distinct Secret Manager namespaces.
- **Keyless Workload Identity Federation (WIF)**: CI/CD pipelines authenticate using temporary Google Cloud OIDC tokens with zero long-lived service account keys stored in GitHub repository secrets.

---

## 4. Automated Verification Tests

```bash
# Verify 4-way feature parity and interface isolation
$ pytest tests/integration/test_interfaces_isolation.py

# Verify dual-environment state isolation and route separation
$ pytest tests/integration/test_dev_to_prod_state_isolation.py
```

---

## 5. Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — 4-Way Universal Feature Parity
* 🏛️ [Single-Project vs Dual-Project GCP Topology Guide](../operations/single-vs-dual-project-gcp.md)
* ☁️ [Google Cloud Run Deployment Guide](../deployment-cloudrun.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Universal 4 Way Parity And Environment Governance** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Universal 4 Way Parity And Environment Governance** using standard CLI commands and FastMCP 2.0 tools:

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