---
title: 'Tutorial 04: Scaffolding a Sovereign Organization in 60 Seconds'
description: Scaffold independent sovereign federation organizations (credence init-org), configure root keys, and deploy multi-cloud Terraform.
since_version: v1.11.0
verified_version: v2.16.6
last_verified: 2026-08-24
sidebar:
  order: 4
---

# Tutorial 04: Scaffolding a Sovereign Organization in 60 Seconds

In this tutorial, you will scaffold an autonomous, white-labeled Credence organization with independent Ed25519 root keys, custom domain taxonomies, and production Terraform infrastructure.

---

## 1. Scaffolding Your Organization

Run `credence init-org` from your terminal:

```bash
# Initialize organization repository
$ credence init-org \
    --name "Cascade Investigative Bureau" \
    --slug "cascade" \
    --domain "cascade.org" \
    --output ./cascade-sovereign-mesh
```

### Generated Repository Structure

* 📁 **`config/`**: Organization settings (`org.yaml`) and custom domain taxonomy rules
* 📁 **`keys/`**: Sovereign Ed25519 root authority public key (`root.pub`) and peer lists
* 📁 **`terraform/`**: Multi-cloud deployment modules for GCP Cloud Run and Cloudflare
* 📁 **`web/`**: Zero-build vanilla Web UI with custom branding and domain routing

---

## 2. Minting Sovereign Root Keys

```bash
cd cascade-sovereign-mesh

# Mint sovereign root Ed25519 keypair
$ credence identity mint-root --output-dir keys/

# Verify permissions are secure (0600)
$ ls -la keys/root.key
```

---

## 3. Deploying Multi-Cloud Infrastructure

```bash
# 1. Provision GCP Cloud Run Compute Plane
$ cd terraform/gcp
$ terraform init
$ terraform apply -var="org_domain=cascade.org"

# 2. Deploy Cloudflare Edge CDN & Documentation Portal
$ cd ../cloudflare
$ terraform init
$ terraform apply -var="org_domain=cascade.org"
```

---

## 4. Next Steps

* 🕸️ [Tutorial 05: 3-Node Mesh Quickstart](05-mesh-quickstart.md)
* 🏛️ [White-Label Sovereign Federation Protocol](../protocols/white-label.md)

---
## Scaffolding Sovereign Federation Organizations

To initialize a white-label sovereign organization with custom domain taxonomy and Ed25519 root keys:

```bash
# Scaffold new sovereign organization
$ credence init-org --name "Cascade Trust" --domain "cascade.nexus"
```

| Scaffolding Directory | File Path | Purpose |
| :--- | :--- | :--- |
| `config/` | `config/org.yaml` | Organization settings and taxonomy overrides |
| `keys/` | `keys/root.pub` | Public Ed25519 root authority trust anchor |
| `terraform/` | `terraform/main.tf` | Multi-cloud Cloud Run & Cloudflare edge IaC |
| `web/` | `web/index.html` | Custom-branded zero-build Web UI |

---
## Deploying Sovereign Organizations with Terraform

Guide to scaffolding custom organizations and provisioning multi-cloud infrastructure with Terraform.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **04 Sovereign Org Scaffolding**:

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

To ensure continuous compliance with system invariants, **04 Sovereign Org Scaffolding** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "04_sovereign_org_scaffolding" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
