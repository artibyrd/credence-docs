---
title: 'Operational Guide: Database Pruning & WAL Maintenance'
description: SQLite WAL checkpointing, automated 90-day half-life pruning, vacuuming, and performance tuning.
since_version: v1.14.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 20
---

# Operational Guide: Database Pruning & WAL Maintenance

This operational guide details the automated maintenance jobs, Write-Ahead Log (WAL) checkpointing, and 90-day reputation half-life pruning procedures for keeping Credence SQLite ledgers fast and compact.

---

## 1. SQLite Write-Ahead Logging (WAL) Architecture

Credence initializes SQLite with Write-Ahead Logging (`PRAGMA journal_mode=WAL;`), allowing concurrent readers to query audit attestations without locking write transactions from background feed sifters.

![Figure 1.1: SQLite Write-Ahead Logging concurrency architecture and 90-day pruning lifecycle](assets/illustrations/database-pruning-wal.svg)

| Database Plane | File Target | Concurrency Role | Maintenance Operation |
| :--- | :--- | :--- | :--- |
| **Write Plane** | `credence.db-wal` | Fast append-only write buffering | Sub-millisecond non-blocking writes |
| **Checkpoint Engine**| Background daemon | Flushes WAL pages to main database | Periodic passive & TRUNCATE checkpoints |
| **Read Plane** | `credence.db` | High-concurrency zero-lock reading | Serves Web UI & FastMCP queries |

---

## 2. Automated 90-Day Half-Life Pruning

To prevent disk exhaustion on self-hosted nodes while maintaining long-term domain reputation statistics:
- **Raw DOM Scrapes**: Pruned after 30 days once the SHA-256 hash and SimHash-64 fingerprints are committed.
- **Detailed Finding Logs**: Decayed after 90 days.
- **Aggregated DCI Domain Statistics**: Maintained permanently in compressed rolling window tables.

```bash
# Execute dry-run database pruning pass
$ credence db prune --dry-run --older-than 90d

# Execute active database vacuum and WAL checkpoint
$ credence db prune --older-than 90d --vacuum
```

---

## 3. Automated Cron & Systemd Maintenance

Add an automated weekly maintenance job to your server crontab:

```ini
# Run weekly SQLite WAL checkpoint and pruning at 03:00 AM on Sundays
0 3 * * 0 /usr/local/bin/credence db prune --older-than 90d --vacuum >> /var/log/credence/maintenance.log 2>&1
```

---

## 4. Related Runbooks

* 🗄️ [Zero-Downtime Database Migrations](zero-downtime-database-migrations.md)
* 🚀 [PostgreSQL Cloud Scaling & Connection Pooling](postgresql-cloud-scaling.md)

---
## SQLite WAL Optimization & 30-Day Record Pruning

Autonomous nodes running 24/7 accumulate audit records, gossip messages, and temporal diffs. To prevent unbounded disk growth while preserving cryptographic receipts:

```bash
# Execute automated SQLite WAL checkpoint and pruning
$ credence db prune --retention-days 30 --vacuum
```

| Maintenance Task | Execution Frequency | Subsystem Action | Performance Benefit |
| :--- | :--- | :--- | :--- |
| **WAL Checkpoint (`PASSIVE`)** | Every 5 minutes | Flushes WAL pages to main database file | Keeps WAL file size < 32MB |
| **WAL Checkpoint (`TRUNCATE`)**| Daily at 03:00 UTC | Truncates WAL log to 0 bytes | Recovers unallocated disk blocks |
| **Audit Log Pruning** | Weekly | Archives audits older than 90 days to CAS | Maintains sub-millisecond query latency |

---
## SQLite WAL Checkpointing and Database Maintenance

Automated WAL pruning and periodic vacuuming maintain sub-millisecond query latency and keep database size under control.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Database Pruning Wal** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Database Pruning Wal** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "database_pruning_wal" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
