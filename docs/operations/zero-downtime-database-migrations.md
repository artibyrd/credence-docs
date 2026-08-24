---
title: 'Operational Guide: Zero-Downtime Database Migrations'
description: SQLite WAL online migrations, PostgreSQL Alembic phased schema evolution, and backwards-compatible table cutover.
since_version: v1.14.0
verified_version: v2.16.3
last_verified: 2026-08-24
sidebar:
  order: 14
---

# Operational Guide: Zero-Downtime Database Migrations

This operational runbook details how Credence executes zero-downtime schema evolution across both **Embedded SQLite WAL** nodes and **Planetary PostgreSQL 16** clusters without locking read transactions or dropping active P2P gossip connections.

---

## 1. The 3-Phase Expand-Contract Migration Pattern

To ensure continuous availability across active nodes during deployment rollouts, all schema changes follow the **Expand/Contract Pattern**:

| Migration Phase | Schema State | Application Code State | Operational Safety |
| :--- | :--- | :--- | :--- |
| **Phase 1: Expand** | Add nullable column / new table | Writes to both old and new columns | Zero (backward compatible) |
| **Phase 2: Backfill** | Asynchronously populate new schema | Reads from new column with fallback | Zero downtime |
| **Phase 3: Contract**| Drop deprecated old column | Fully migrated application code | Verified stable |

---

## 2. SQLite WAL Online Migration Mechanics

For self-hosted sovereign nodes running embedded SQLite, Write-Ahead Logging allows concurrent readers to proceed uninterrupted while Alembic or SQLModel applies schema updates in a discrete transaction:

```bash
# Step 1: Pre-flight check database lock status and WAL size
$ credence db status

# Step 2: Create automated online snapshot backup before migration
$ credence db backup --output /var/backups/credence/pre-migrate.db

# Step 3: Apply pending Alembic migrations with WAL busy timeout
$ credence db upgrade head
```

---

## 3. PostgreSQL Cloud Scaling Runbook (Cloud SQL / Aurora)

For large-scale newsroom federations running distributed PostgreSQL:
1. **Never Execute Blocking `ALTER TABLE ... ADD COLUMN ... DEFAULT <val>` without NULL**: In PostgreSQL, adding columns with static non-null defaults locks large tables. Use nullable columns, backfill asynchronously, and then add `NOT NULL` constraints with `NOT VALID` followed by `VALIDATE CONSTRAINT`.
2. **Lock Timeout Configuration**: All migration scripts set `SET lock_timeout = '2s';` to immediately fail and retry rather than queuing behind long-running analytical queries.

---

## 4. Rollback & Disaster Recovery Procedures

If a migration fails mid-execution:
```bash
# Check current migration revision
$ credence db current

# Rollback one migration step safely
$ credence db downgrade -1

# Verify integrity and foreign key constraints
$ credence db check-integrity
```

---

## 5. Related Guides & Blueprints

* 🗄️ [PostgreSQL Cloud Scaling & Connection Pooling](postgresql-cloud-scaling.md)
* 🧹 [Database Pruning & WAL Maintenance](database-pruning-wal.md)
* 📘 [The Invariant Bible](../invariants.md) — Async SQLite / aiosqlite Invariants

---
## Three-Phase Expand/Contract Database Migrations

The expand-backfill-contract pattern ensures zero downtime when adding or modifying database schema columns.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Zero Downtime Database Migrations** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Zero Downtime Database Migrations** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "zero_downtime_database_migrations" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
