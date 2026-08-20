---
title: 'Operational Guide: Single-Project vs Dual-Project GCP Topologies'
description: Architectural comparison and configuration guide for running Credence in a single partitioned GCP project vs hard dual-project isolation.
since_version: v1.18.0
verified_version: v1.18.0
last_verified: '2026-08-19'
---

# Operational Guide: Single-Project vs Dual-Project GCP Topologies

Credence Terraform configuration natively supports both **Single-Project Service Partitioning** and **Dual-Project Hard Isolation** with zero code changes.

---

## 1. Topologies Compared

### Topology A: Dual-Project Hard Isolation (Enterprise Standard)
- **Dev Project (`project_id = "credence-dev-XXXXX"`)**: Fully isolated billing account alert ceiling ($5.00/mo), scoped IAM service account, independent secrets.
- **Prod Project (`project_id = "credence-prod-505902"`)**: Production billing cap ($15.00/mo), hardened production IAM roles and databases.
- **Best For**: Multi-team organizations requiring cryptographic separation and strict IAM compliance.

### Topology B: Single-Project Service Partitioning (Lean Standard)
- **Single Project (`project_id = "credence-prod-505902"`)**: Hosts both `credence-dev` and `credence-server`.
- **Resource Namespacing**: Service accounts (`credence-dev-sa` vs `credence-cloud-run-sa`) and Secret Manager keys (`credence-gemini-api-key-dev` vs `credence-gemini-api-key`).
- **Best For**: Solo operators and lean teams wanting one unified GCP bill and minimal operational overhead.

---

## 2. Configuration Switching

Switching between topologies requires only setting the `project_id` in your Terraform variable files:

```hcl
# terraform.dev.tfvars (Dual-Project Mode)
project_id   = "credence-dev-XXXXX"
service_name = "credence-dev"

# terraform.dev.tfvars (Single-Project Mode)
project_id   = "credence-prod-505902"
service_name = "credence-dev"
```
