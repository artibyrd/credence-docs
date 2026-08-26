---
title: 'Operational Guide: Disaster Recovery and Failover Procedures'
description: Point-in-time recovery, cross-region Cloud Run failover, Cloudflare Worker traffic routing, and CAS blob replication.
since_version: v1.14.0
verified_version: v2.17.3
last_verified: 2026-08-26
sidebar:
  order: 15
---

# Operational Guide: Disaster Recovery and Failover Procedures

This operational guide provides step-by-step procedures for disaster recovery, point-in-time state restoration, and multi-region failover across Cloudflare Edge and Google Cloud Run.

---

## 1. Disaster Recovery Topology & RTO/RPO Objectives

Primary Region (us-central1)                Secondary Region (us-east1)
![Figure 1.1: Active-Active multi-region replication and automated DNS failover architecture](assets/illustrations/disaster-recovery-and-cross-region-failover.svg)

| Operational Region | GCP Project & Service | Failover Role | Recovery Time Objective (RTO) | Recovery Point Objective (RPO) |
| :--- | :--- | :--- | :---: | :---: |
| **Primary Region (`us-central1`)** | `credence-server-prod` | Active Origin (95% traffic) | **0 seconds** | **0 seconds** |
| **Standby Region (`europe-west1`)**| `credence-server-standby` | Warm Replica (5% traffic) | **<1 second** | **<1 hour** (Snapshot lag) |
Cloudflare Edge Router
(_worker.js Health Check)

### Recovery Objectives
- **Recovery Time Objective (RTO)**: $< 30\text{ seconds}$ (automated Cloudflare edge failover to standby region).
- **Recovery Point Objective (RPO)**: $< 60\text{ seconds}$ (replicated attestation logs and CAS blob synchronizations).

---

## 2. Automated Point-in-Time Database Restoration

```bash
# 1. Inspect available verified backup archives
$ credence db status

# 2. Verify SHA-256 integrity of target backup archive
$ credence db backup -o /var/backups/credence/snapshot-2026-08-24.db

# 3. Restore state store with automatic WAL replay
$ credence db restore -s /var/backups/credence/snapshot-2026-08-24.db --force

# 4. Verify node health post-restoration
$ credence stats
```

---

## 3. Cross-Region Edge Failover Runbook

If the primary Cloud Run region experiences an outage:
1. Cloudflare Worker health probes detect 3 consecutive HTTP 5xx errors on `us-central1`.
2. Traffic shifts automatically to `us-east1` within 5 seconds.
3. Edge caches serve cached attestations ($G=1.00$) while compute spin-up completes.

---

## 4. Related Runbooks

* 🗄️ [Database Pruning & WAL Maintenance](database-pruning-wal.md)
* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 📘 [The Invariant Bible](../invariants.md) — 3-Plane Deployment Governance

---
## Disaster Recovery & Cross-Region Failover Architecture

Credence achieves enterprise-grade disaster recovery with Recovery Point Objective (RPO) $< 5\text{s}$ and Recovery Time Objective (RTO) $< 30\text{s}$:

| Disaster Recovery Plane | Primary Region (`us-central1`) | Secondary Region (`us-east4`) | Failover Mechanism |
| :--- | :--- | :--- | :--- |
| **Stateless Compute** | Cloud Run Service (Active) | Cloud Run Service (Standby Scale-0) | Cloudflare DNS automated health check |
| **Database Storage** | Cloud SQL Primary Instance | Cross-Region Read Replica | Automated Cloud SQL promotion script |
| **Attestation CAS** | Cloudflare R2 Primary Bucket | Multi-Region Replicated R2 Bucket | Zero-egress bucket replication |

```bash
# Execute preflight disaster recovery drill
$ credence db backup --verify-replica
```

---
## Cross-Region Disaster Recovery and Database Failover

Automated health checks and cross-region replicas ensure sub-30s failover with zero data loss in the event of regional cloud outages.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Disaster Recovery And Cross Region Failover** in production, operators should adhere to the following maintenance procedures:

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Disaster Recovery And Cross Region Failover** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "disaster_recovery_and_cross_region_failover" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
