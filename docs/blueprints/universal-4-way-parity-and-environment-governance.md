---
title: 'Technical Blueprint: Universal 4-Way Parity and Environment Governance'
description: Feature symmetry across CLI, FastMCP 2.0, Textual TUI, and Zero-Build Web UI, and strict Dev/Prod least-privilege governance.
since_version: v1.12.0
verified_version: v2.17.0
last_verified: 2026-08-25
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
Dev Environment (`credence-dev-495173`)
- Edge: dev.credence.run (Cloudflare Pages branch)
- Compute: Google Cloud Run Dev Instance
- Keyless WIF: GitHub Actions OIDC (Least Privilege)
(Mk1 Eyeball Human Sign-Off)
Production Environment (`credence-prod-505902`)
- Edge: credence.run (Cloudflare Pages main)
- Compute: Google Cloud Run Prod Instance
- Sovereign Root Key Custody: credence.foundation

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

---
## Parity Testing Across CLI, MCP, TUI, and Web

Automated unit tests ensure that all four presentation surfaces invoke the identical core evaluation pipeline and return matching verdicts.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Universal 4 Way Parity And Environment Governance** operates according to strict operational parameters and deterministic boundaries:

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Universal 4 Way Parity And Environment Governance** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "universal_4_way_parity_and_environment_governance" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
