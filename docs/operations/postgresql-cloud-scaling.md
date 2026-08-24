---
title: 'Operational Guide: PostgreSQL Cloud Scaling & Connection Pooling'
description: SQLAlchemy 2.0 asyncpg connection pooling, PgBouncer setup, read replica routing, and planetary scaling.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 17
---

# Operational Guide: PostgreSQL Cloud Scaling & Connection Pooling

This operational guide details configuration parameters, connection pool tuning, and read-replica routing for scaling Credence to millions of daily evaluations using **PostgreSQL 16** and **SQLAlchemy 2.0 Async (`asyncpg`)**.

---

## 1. Connection Pool Sizing Architecture

| Scaling Architecture Layer | Component | Concurrency & Connection Parameters | Resource Allocation |
| :--- | :--- | :--- | :--- |
| **1. Client Traffic Ingress** | FastMCP 2.0 & Web UI | 100+ concurrent worker requests | Ephemeral client connections |
| **2. Transaction Pooler** | PgBouncer (Transaction Mode) | `max_client_conn = 1000`, `default_pool_size = 25` | Sub-millisecond queue reuse |
| **3. Cloud SQL Database** | Managed PostgreSQL 16 | `max_connections = 100`, `shared_buffers = 4GB` | Dedicated SSD storage & WAL |

---

## 2. SQLAlchemy 2.0 Async Pool Configuration (`.env`)

```ini
# PostgreSQL asyncpg connection string
DATABASE_URL=postgresql+asyncpg://credence:secret_pass@127.0.0.1:5432/credence_prod

# Connection pool limits tuned for Scale-to-Zero Cloud Run
DB_POOL_SIZE=10
DB_MAX_OVERFLOW=20
DB_POOL_TIMEOUT=30
DB_POOL_RECYCLE=1800
```

---

## 3. High-Performance Indexing Strategy

Credence includes pre-tuned B-Tree and GIN indexes for fast lookup:
1. `idx_attestations_content_sha256`: Unique B-Tree index for instant $O(1)$ attestation lookups.
2. `idx_domain_evaluations_fqdn_timestamp`: Composite index for fast DCI rolling window queries.
3. `idx_violations_rule_code`: Index for taxonomy analytics and frequency leaderboards.

---

## 4. Related Operational Guides

* 🗄️ [Database Pruning & WAL Maintenance](database-pruning-wal.md)
* 🚀 [Zero-Downtime Database Migrations](zero-downtime-database-migrations.md)

---
## PostgreSQL 16 Scaling and PgBouncer Connection Pooling

PgBouncer transaction pooling enables hundreds of concurrent FastMCP clients to query PostgreSQL without connection starvation.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Postgresql Cloud Scaling** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Postgresql Cloud Scaling** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "postgresql_cloud_scaling" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.

### Managed PostgreSQL 16 Backup & Replication Runbook

In enterprise environments, PostgreSQL 16 operates with continuous Write-Ahead Log (WAL) archiving to cloud storage:
- **Point-in-Time Recovery**: Enables sub-second transaction rollbacks during data corruption events.
- **Read Replicas**: Distributes analytical query load away from the primary ingestion node.
- **Automated Failover**: Managed Cloud SQL automatically promotes secondary replicas within 30 seconds of primary failure.
