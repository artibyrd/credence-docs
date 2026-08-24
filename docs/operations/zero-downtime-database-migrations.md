---
title: 'Operational Guide: Zero-Downtime Database Migrations'
description: SQLite WAL online migrations, PostgreSQL Alembic phased schema evolution, and backwards-compatible table cutover.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 14
---

# Operational Guide: Zero-Downtime Database Migrations

This operational runbook details how Credence executes zero-downtime schema evolution across both **Embedded SQLite WAL** nodes and **Planetary PostgreSQL 16** clusters without locking read transactions or dropping active P2P gossip connections.

---

## 1. The 3-Phase Expand-Contract Migration Pattern

To ensure continuous availability across active nodes during deployment rollouts, all schema changes follow the **Expand/Contract Pattern**:

```
 Phase 1: EXPAND
 +-- Add nullable columns or new tables
 +-- Old application code reads/writes legacy columns
 +-- New application code writes to both old and new columns
         |
         ▼
 Phase 2: MIGRATE & BACKFILL
 +-- Asynchronous background backfill of historical rows
 +-- Dual-writing active on all nodes
 +-- Zero read locks during backfill execution
         |
         ▼
 Phase 3: CONTRACT
 +-- All nodes running updated application code
 +-- Drop deprecated columns / tables safely
```

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

## Architectural Invariants & Verification Mechanics

The implementation of **Zero Downtime Database Migrations** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Zero Downtime Database Migrations** using standard CLI commands and FastMCP 2.0 tools:

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
