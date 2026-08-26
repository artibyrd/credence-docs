---
title: 'Cookbook: Local Dev to Cloud Run Workflow'
description: Seamless workflow from local code edits to Dev Cloud Run preview and production release.
since_version: v1.14.0
verified_version: v2.17.2
last_verified: 2026-08-25
sidebar:
  order: 7
---

# Cookbook: Local Dev to Cloud Run Workflow

This cookbook provides the definitive end-to-end workflow for writing code locally, testing against development cloud endpoints, and deploying to production.

---

## 1. The 4-Stage Developer Flow

| Development Lifecycle Stage | Command / Trigger | Environment / URL | Verification & Approval Gate |
| :--- | :--- | :--- | :--- |
| **1. Local Verification** | `just check` | Local workstation / in-memory | Sub-3s lint, typecheck, and unit test pass |
| **2. Dev Preview Deploy** | `just deploy-dev` | Google Cloud Run Dev (`credence-dev-495173`) | Container build & Cloudflare edge sync |
| **3. Mk1 Eyeball Review** | Manual human audit | `https://dev.credence.run` | Human inspection of live interactive UI |
| **4. Production Release** | `just release vX.Y.Z` | Production Cloud Run & Edge CDN | Clean git tree, version tag, and prod deploy |

---

## 2. Step-by-Step Execution Commands

```bash
# Step 1: Run pre-commit QA gate locally
$ just check

# Step 2: Deploy working branch to Dev Cloud Run
$ just deploy-dev

# Step 3: Probe live Dev preview health
$ credence stats --endpoint https://dev.credence.run

# Step 4: Open pull request and await review
$ just pr-create "Add medical taxonomy rules"

# Step 5: Merge PR and execute atomic production release
$ just pr-merge
$ just release v2.16.2 "Documentation and integrity update"
```

---

## 3. Related Operational Guides

* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 📘 [The Invariant Bible](../invariants.md) — 4-Phase Release Lifecycle

---
## Fast Developer Workflow from Local Poetry to Cloud Run

The 4-stage development workflow enables rapid iteration from local unit tests to Cloud Run dev preview and production deployment.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Local Dev To Cloud Run Workflow** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "local_dev_to_cloud_run_workflow" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
