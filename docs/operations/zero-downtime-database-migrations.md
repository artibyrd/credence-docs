---
title: 'Operational Guide: Zero-Downtime Database Migrations'
description: SRE runbook for executing backward-compatible database schema migrations with zero downtime on Cloud Run.
since_version: v1.17.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Operational Guide: Zero-Downtime Database Migrations

Running zero-downtime schema migrations across auto-scaling Cloud Run containers requires strict adherence to backward-compatible schema evolutions.

---

## 1. The 4-Phase Zero-Downtime Migration Architecture

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         4-PHASE ZERO-DOWNTIME DATABASE MIGRATION                                 │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ PHASE 1: EXPAND (Non-Destructive Additive DDL)                                             │   │
│ │ • Apply additive schema: `ALTER TABLE ... ADD COLUMN ... DEFAULT ...`                      │   │
│ │ • Bump `PRAGMA user_version = N+1` • Compatible with concurrent SQLite WAL readers/writers │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                ▼                                                 │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ PHASE 2: DEPLOY & DUAL-WRITE CANARY REVISION                                               │   │
│ │ • Deploy Revision N+1 container to Cloud Run with 5% Canary Traffic Split                  │   │
│ │ • Both Revision N (95%) and N+1 (5%) safely read/write to shared database WAL              │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                ▼                                                 │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ PHASE 3: AGGRESSIVE HEALTH GATE & 100% TRAFFIC SHIFT                                       │   │
│ │ • Monitor `/health` probes (latencies < 150ms, 0 5xx errors)                              │   │
│ │ • Healthy ──▶ 100% Traffic Shift to Revision N+1 • Degraded ──▶ Instant 0-Downtime Rollback │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                ▼                                                 │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ PHASE 4: CONTRACT (7-Day Soak & Legacy Cleanup)                                            │   │
│ │ • All Revision N instances terminated • Drop deprecated columns/views after 7-day soak     │   │
│ └────────────────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **Phase 1: Expand**: Apply additive non-destructive DDL (`ALTER TABLE ... ADD COLUMN ... DEFAULT ...`).
2. **Phase 2: Migrate**: Deploy new application container revisions running `credence serve`.
3. **Phase 3: Contract**: Drop legacy columns only after all older container revisions have rolled off traffic.
