---
title: 'Operational Guide: Single-Project vs Dual-Project GCP Topologies'
description: Architectural comparison, blast radius analysis, billing segregation, and provisioning runbooks for GCP deployments.
since_version: v1.12.0
verified_version: v2.16.8
last_verified: 2026-08-25
sidebar:
  order: 5
---

# Operational Guide: Single-Project vs Dual-Project GCP Topologies

This guide provides an in-depth architectural comparison and step-by-step provisioning runbooks for deploying Credence on Google Cloud Platform across **Dual-Project Isolation** (recommended for production) and **Single-Project Namespacing** (for homelabs and budget-constrained startups).

---

## 1. Architectural Comparison: Topology A vs. Topology B

TOPOLOGY A: DUAL-PROJECT (HARD ISOLATION)
![Figure 1.1: Single GCP project name-prefixing vs dual GCP project hard IAM boundary isolation](assets/illustrations/single-vs-dual-project-gcp.svg)

| Architecture Model | GCP Projects | Cloud Run Services | Secret Manager | IAM & Blast Radius | Recommended Use Case |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **Single-Project Unified** | `1` | `credence-server-dev`<br>`credence-server-prod` | `gemini-api-key-dev`<br>`gemini-api-key-prod` | Shared project IAM boundary | Solo developers & homelabs |
| **Dual-Project Isolated** | `2` | `credence-dev-495173`<br>`credence-prod-505902` | Isolated Key Vaults per Project | Keyless WIF; Zero IAM bleed | Production sovereign orgs |

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

---
## Single vs. Dual GCP Project Topology Comparison

Hard dual-project isolation provides maximum security by separating development experiments from production databases.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Single Vs Dual Project Gcp** in production, operators should adhere to the following maintenance procedures:

| Operational Phase | Frequency | Standard Command / Tool | Verification Target |
| :--- | :--- | :--- | :--- |
| **Pre-Flight Health Check** | Prior to deploy | `just preflight` | Toolchain, Python 3.12, Docker status |
| **Diagnostic Scan** | Hourly (Automated) | `credence stats --json` | Latency, memory usage, token headroom |
| **State Pruning** | Weekly | `credence db prune --retention-days 30` | SQLite WAL cleanup & disk optimization |
| **Failover Drill** | Monthly | `credence db backup --verify-replica` | Cross-region replica readiness verification |

```bash
# Verify operational readiness
$ credence stats --detailed
```
