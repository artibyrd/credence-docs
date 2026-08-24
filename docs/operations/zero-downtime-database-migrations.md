---
title: 'Operational Guide: Zero-Downtime Database Migrations'
description: SRE runbook for executing backward-compatible database schema migrations with zero downtime on Cloud Run.
since_version: v1.17.0
verified_version: v2.16.1
last_verified: 2026-08-24
---

# Operational Guide: Zero-Downtime Database Migrations

Running zero-downtime schema migrations across auto-scaling Cloud Run containers requires strict adherence to backward-compatible schema evolutions.

---

## 1. The 4-Phase Zero-Downtime Migration Architecture

1. **Phase 1: Expand**: Apply additive non-destructive DDL (`ALTER TABLE ... ADD COLUMN ... DEFAULT ...`).
2. **Phase 2: Migrate**: Deploy new application container revisions running `credence serve`.
3. **Phase 3: Contract**: Drop legacy columns only after all older container revisions have rolled off traffic.
