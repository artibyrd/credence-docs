---
title: 'Operational Guide: Cloudflare R2 Content-Addressable Storage'
description: Zero-egress S3-compatible blob storage configuration, CAS object lifecycle, and multi-region replication.
since_version: v1.14.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 18
---

# Operational Guide: Cloudflare R2 Content-Addressable Storage

This operational runbook provides step-by-step instructions for provisioning, configuring, and maintaining **Cloudflare R2 Object Storage** as the Content-Addressable Storage (CAS) backend for Credence audit snapshots and attestation receipts.

---

## 1. Why Cloudflare R2 for Epistemic CAS?

In high-throughput epistemic evaluation networks, public verification requests generate significant read traffic. Traditional cloud storage providers (such as AWS S3 or Google Cloud Storage) charge steep **data egress fees** ($0.08 – $0.12 per GB) whenever clients or browser extensions download cached audit receipts.

Cloudflare R2 provides an S3-compatible API with **$0.00 data egress fees**, making it the ideal storage plane for planetary decentralized trust.

R2 STORAGE ARCHITECTURE
| Storage Tier | Target Path | Egress Fee | Retention Policy | API Protocol |
| :--- | :--- | :---: | :--- | :--- |
| **Cloudflare R2 Bucket** | `credence-prod-cas` | **$0.00** | 90-Day Half-Life | S3 Compatible |
| **Local Disk Fallback** | `data/cas/sha256/` | **$0.00** | Persistent Ledger | POSIX File I/O |

---

## 2. Step-by-Step Provisioning Runbook

### Step 1: Create R2 Bucket in Cloudflare Dashboard
1. Navigate to **Cloudflare Dashboard** $\rightarrow$ **R2 Object Storage**.
2. Click **Create Bucket** and name it `credence-prod-cas`.
3. Choose location hint **Automatic** (Anycast global replication).

### Step 2: Generate S3-Compatible API Credentials
1. Click **Manage R2 API Tokens** $\rightarrow$ **Create API Token**.
2. Set permissions to **Object Read & Write**.
3. Copy the **Access Key ID**, **Secret Access Key**, and **Endpoint URL**.

### Step 3: Configure Environment Variables (`.env`)
```ini
STORAGE_BACKEND=s3
S3_ENDPOINT_URL=https://<account_id>.r2.cloudflarestorage.com
S3_ACCESS_KEY_ID=your_r2_access_key_id
S3_SECRET_ACCESS_KEY=your_r2_secret_access_key
S3_BUCKET_NAME=credence-prod-cas
S3_REGION_NAME=auto
```

---

## 3. Verifying CAS Storage Integration

Test read and write operations using the Credence storage probe:

```bash
# Run automated CAS read/write probe
$ credence storage test-cas

# Check active bucket object count and storage usage
$ credence storage stats
```

---

## 4. Related Guides & Blueprints

* 🏛️ [Sovereign Data Gravity & CAS Portability Blueprint](../blueprints/sovereign-data-gravity-and-cas-portability.md)
* 🗄️ [Database Pruning & WAL Maintenance](database-pruning-wal.md)

---
## Cloudflare R2 Zero-Egress Storage Architecture

Forensic snapshots and raw DOM archives are persisted in S3-compatible Cloudflare R2 object storage to eliminate cloud egress bandwidth charges:

| Configuration Variable | Recommended Setting | Production Purpose |
| :--- | :--- | :--- |
| `R2_BUCKET_NAME` | `credence-prod-cas` | Primary content-addressed storage bucket |
| `R2_ENDPOINT_URL` | `https://<account-id>.r2.cloudflarestorage.com` | S3-compatible API endpoint |
| `CAS_RETENTION_DAYS` | `90` | Automatic lifecycle pruning policy |
| `CAS_EGRESS_FEE` | `$0.00 / GB` | 100% free egress bandwidth for public audits |

```bash
# Test R2 connection and CAS bucket synchronization
$ credence db verify --storage r2
```

---
## S3-Compatible Cloudflare R2 Storage Configuration

Using Cloudflare R2 eliminates egress bandwidth fees while providing global high-availability storage for forensic snapshots.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Blob Storage R2** in production, operators should adhere to the following maintenance procedures:

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
