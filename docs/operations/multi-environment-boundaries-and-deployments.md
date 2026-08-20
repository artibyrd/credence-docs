---
title: 'Operational Guide: Multi-Environment Boundaries and Deployments'
description: Comprehensive operational runbook detailing project, account, domain, and data boundary isolation between Basic Dev and Advanced Prod deployments.
since_version: v1.18.0
verified_version: v1.18.0
last_verified: '2026-08-19'
---

# Operational Guide: Multi-Environment Boundaries and Deployments

This guide details the operational boundaries, governance rules, and deployment procedures for maintaining separate **Basic Dev** and **Advanced Prod** environments with 100% launch parity.

---

## 1. Boundary Isolation Matrix

| Boundary Layer | Basic Dev Environment | Advanced Prod Environment |
| :--- | :--- | :--- |
| **GCP Project** | `credence-dev-XXXXX` (or shared `credence-prod-505902`) | `credence-prod-505902` |
| **Service Name** | `credence-dev` | `credence-server` |
| **Compute Sizing** | 1 vCPU, 512MiB RAM, max 1 instance | 1–2 vCPU, 1024–2048MiB RAM, max 2–5 instances |
| **Database Engine** | Embedded SQLite WAL (`data/credence.db`) | Managed Serverless PostgreSQL (Neon / Cloud SQL) |
| **CAS Blob Storage** | Local filesystem (`data/snapshots/`) | Cloudflare R2 (`STORAGE_BACKEND=s3`, $0 egress) |
| **Distributed State** | In-Memory Python State Store | Serverless Redis / Valkey (`REDIS_URL`) |
| **Monitoring Tier** | `simple` (Failure alerts, $5/mo budget cap) | `advanced` (Full SRE telemetry, P95 latency, 5xx alerts, $15/mo cap) |
| **Edge Domain** | `dev.credence.run`, `mcp.dev.credence.run` | `credence.run`, `mcp.credence.run` |
| **Report Cache** | `Cache-Control: private, max-age=60` | `Cache-Control: public, max-age=2592000, immutable` |

---

## 2. Developer Runbooks

### Deploying to Dev Environment
```bash
# 1. Build and deploy container in Basic mode
just deploy dev

# 2. Probe live Dev health
just gcp probe credence-dev

# 3. Check Dev telemetry
credence cost status
```

### Deploying to Production Environment
```bash
# 1. Execute pre-commit quality gauntlet
just check

# 2. Deploy Production container and verify health
just deploy prod

# 3. Deploy Cloudflare Edge Router
just deploy edge

# 4. Run multi-plane diagnostics
just doctor prod
```
