---
title: 'Operational Guide: Vendor-Agnostic Self-Hosting and Docker'
description: Comprehensive operational guide for running sovereign Credence nodes across Docker Compose, Bare Metal Linux, VPS, Kubernetes, and non-GCP clouds.
since_version: v1.18.0
verified_version: v1.18.0
last_verified: '2026-08-19'
---

# Operational Guide: Vendor-Agnostic Self-Hosting and Docker

Credence is engineered as a **sovereign, vendor-agnostic system**. It interfaces exclusively via standard open protocols, ensuring zero vendor lock-in.

---

## 1. Universal Standard Contracts

1. **Database Contract**: Standard async SQLAlchemy 2.0 (`DATABASE_URL`). Works with SQLite WAL, PostgreSQL 14+, Neon, AWS Aurora, or Supabase.
2. **Blob Storage Contract**: Standard S3 API (`S3_ENDPOINT_URL`, `S3_BUCKET_NAME`). Works with Cloudflare R2, MinIO, Wasabi, AWS S3, or Local POSIX disk.
3. **Distributed State Contract**: Standard Redis RESP Protocol (`REDIS_URL`). Works with Valkey, Redis 7+, Dragonfly, Upstash, or In-Memory Python fallback.

---

## 2. 1-Command Sovereign Docker Deployments

### Basic Sovereign Node (Zero-Cloud / Embedded SQLite)
```bash
docker compose up -d
```

### Advanced Planetary Cluster (PostgreSQL + MinIO + Valkey)
```bash
docker compose -f docker-compose.prod.yml up -d
```
