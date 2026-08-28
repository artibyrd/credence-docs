---
title: 'Technical Blueprint: Dual-Environment Project and Domain Isolation'
description: Hard project boundaries, IAM role segregation, Cloudflare preview branches, and zero credential sharing.
since_version: v1.14.0
verified_version: v2.18.0
last_verified: 2026-08-28
sidebar:
  order: 9
---

# Technical Blueprint: Dual-Environment Project and Domain Isolation

This blueprint specifies the architectural boundaries, Workload Identity Federation (WIF) configurations, and Cloudflare Worker routing that enforce total isolation between **Development** and **Production**.

---

## 1. Dual-Project Isolation Model

Credence enforces physical cloud project separation to contain blast radius and prevent cross-environment state pollution:

DEV ENVIRONMENT (`credence-dev-495173`)
- Compute: Cloud Run Dev Service
- Secrets: Secret Manager (Dev API Keys)
- Edge: dev.credence.run (Cloudflare Pages Preview)
- State: Ephemeral SQLite / Scratch CAS
- IAM: Least-Privilege GitHub Actions Dev WIF Pool
(No Cross-Project IAM Grants)
(Zero Shared Encryption Keys)
PROD ENVIRONMENT (`credence-prod-505902`)
- Compute: Cloud Run Prod Service
- Secrets: Secret Manager (Production API Keys)
- Edge: credence.run (Cloudflare Pages Main CDN)
- State: Persistent WAL / Cloudflare R2 CAS Storage
- IAM: Least-Privilege GitHub Actions Prod WIF Pool

---

## 2. Zero-Escape Security Invariants

1. **Independent Key Custody**: Dev nodes mint separate Ed25519 keypairs marked with `stage=dev`. Production consensus nodes reject dev signatures automatically.
2. **Cloudflare Worker Route Isolation**: Production worker configuration (`wrangler.toml`) binds apex domains (`credence.run/*`), while preview subdomains (`dev.credence.run/*`) reside strictly within the `[env.dev]` block.
3. **Keyless CI/CD Deployment**: GitHub Actions authenticates via OpenID Connect (OIDC) against Google Cloud Workload Identity Federation with zero long-lived JSON service account keys.

---

## 3. Deployment Runbook Commands

```bash
# Deploy working branch to Dev Cloud Run environment
$ just deploy-dev

# Probe live Dev endpoints
$ credence stats --endpoint https://dev.credence.run

# Promote validated build to Production (Requires Code Owner review)
$ just release v2.16.2 "Documentation integrity and minimum length milestone"
```

---

## 4. Related Guides & Blueprints

* ☁️ [Google Cloud Run Deployment Guide](../deployment-cloudrun.md)
* 🏛️ [Single-Project vs Dual-Project GCP Topologies](../operations/single-vs-dual-project-gcp.md)
* 📘 [The Invariant Bible](../invariants.md) — Dual-Environment Least-Privilege CI/CD

---
## Hard Boundary Isolation Topology & WIF IAM Governance

To ensure zero risk of development experiments escaping into production or staging environments, Credence enforces physical multi-tenant isolation across compute, storage, and identity planes:

| Infrastructure Plane | Dev Preview (`credence-dev-495173`) | Production (`credence-prod-505902`) | Isolation Guarantee |
| :--- | :--- | :--- | :--- |
| **Cloud Run Compute** | `credence-server-dev` | `credence-server-prod` | Distinct GCP Project boundaries |
| **Database Storage** | Dev Cloud SQL / Ephemeral SQLite | Dedicated Production Cloud SQL (WAL) | Zero cross-project database peering |
| **Secret Management** | `dev-gemini-api-key` | `prod-gemini-api-key` | Separate IAM service accounts |
| **Edge Routing** | `dev.credence.run` (Wrangler Preview)| `credence.run` (Wrangler Production) | Separate Cloudflare worker scripts |
| **Workload Identity** | `github-dev-pool` | `github-prod-pool` | Least-privilege WIF tokens |

```bash
# Verify environment isolation from local CLI
$ credence stats --json
```

All CI/CD deployment pipelines authenticate keylessly via Google Cloud Workload Identity Federation (WIF). Dev previews deploy strictly to branch-isolated endpoints, guaranteeing that production state remains pristine and tamper-proof.

---
## Keyless Workload Identity Federation Across Environments

Separate Workload Identity Federation pools guarantee that GitHub Actions deployment runners cannot cross environment boundaries between Dev and Prod.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Dual Environment Project And Domain Isolation** operates according to strict operational parameters and deterministic boundaries:

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

To ensure continuous compliance with system invariants, **Dual Environment Project And Domain Isolation** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "dual_environment_project_and_domain_isolation" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
