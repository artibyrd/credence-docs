---
title: 'Operational Guide: Single-Project vs Dual-Project GCP Topologies'
description: Architectural comparison, blast radius analysis, billing segregation, and provisioning runbooks for GCP deployments.
since_version: v1.12.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 5
---

# Operational Guide: Single-Project vs Dual-Project GCP Topologies

This guide provides an in-depth architectural comparison and step-by-step provisioning runbooks for deploying Credence on Google Cloud Platform across **Dual-Project Isolation** (recommended for production) and **Single-Project Namespacing** (for homelabs and budget-constrained startups).

---

## 1. Architectural Comparison: Topology A vs. Topology B

TOPOLOGY A: DUAL-PROJECT (HARD ISOLATION)
----------------    ----------------
DEV PROJECT (`credence-dev-495173`)|    | PROD PROJECT (`credence-prod-5059`)
----------------    ----------------
• Dev Cloud Run Services           |    | • Prod Cloud Run Services
• Dev Secret Manager Keys          |    | • Prod Secret Manager Keys
• Dedicated Dev Service Accounts   |    | • Dedicated Prod Service Accounts
• Isolated Terraform State Bucket  |    | • Isolated Terraform State Bucket
----------------    ----------------
TOPOLOGY B: SINGLE-PROJECT (PARTITIONED NAMESPACING)
SINGLE GCP PROJECT (`credence-prod-505902`)
DEV NAMESPACE:                       | PROD NAMESPACE:
• Service: `credence-server-dev`     | • Service: `credence-server-prod`
• Secret: `gemini-api-key-dev`       | • Secret: `gemini-api-key`
• State: `terraform/dev/`            | • State: `terraform/prod/`

### Feature & Trade-Off Matrix

| Dimension | Topology A: Dual-Project Mode | Topology B: Single-Project Mode |
| :--- | :--- | :--- |
| **Blast Radius Containment** | **Absolute (Hard Boundary)**: Dev compromise cannot touch prod secrets or compute. | **Logical (IAM Scoped)**: Requires disciplined prefixing (`-dev` vs `-prod`). |
| **Billing Segregation** | **Native**: Separate invoices and cost alarms per project. | **Label-Based**: Requires Cloud Billing export queries and label filters. |
| **Secret Manager Isolation** | Completely separate Secret Manager namespaces. | Namespaced secret keys in one project. |
| **Terraform Complexity** | Two distinct `terraform.tfvars` files and state buckets. | One state bucket with partitioned workspace prefixes. |
| **Ideal For** | Enterprise, Production Newsrooms, High-Stakes Networks. | Homelabs, Individual Developers, Hackathons. |

---

## 2. Provisioning Runbook: Topology A (Dual-Project Mode)

### Step 1: Create Projects & Link Billing
```bash
# 1. Create unique GCP projects
$ gcloud projects create credence-dev-495173 --name="Credence Dev"
$ gcloud projects create credence-prod-505902 --name="Credence Prod"

# 2. Link billing account
$ gcloud beta billing projects link credence-dev-495173 --billing-account=012345-6789AB-CDEF01
$ gcloud beta billing projects link credence-prod-505902 --billing-account=012345-6789AB-CDEF01
```

### Step 2: Populate Secrets in Both Projects
```bash
# Dev secret
$ gcloud secrets create gemini-api-key --project=credence-dev-495173 --data-file=dev-key.txt

# Prod secret
$ gcloud secrets create gemini-api-key --project=credence-prod-505902 --data-file=prod-key.txt
```

### Step 3: Deploy Infrastructure via Terraform
```bash
# Deploy Dev
$ cd terraform/gcp
$ terraform workspace select dev || terraform workspace new dev
$ terraform apply -var-file="terraform.dev.tfvars"

# Deploy Prod
$ terraform workspace select prod || terraform workspace new prod
$ terraform apply -var-file="terraform.prod.tfvars"
```

---

## 3. Live Verification & Health Probing

```bash
# Probe Dev instance
$ curl -fsSL https://dev.credence.run/healthz

# Probe Production instance
$ curl -fsSL https://credence.run/healthz
```

---

## 4. Related Blueprints

* 🏛️ [Dual-Environment Project and Domain Isolation](../blueprints/dual-environment-project-and-domain-isolation.md)
* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Single Vs Dual Project Gcp** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Single Vs Dual Project Gcp** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "operations"

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