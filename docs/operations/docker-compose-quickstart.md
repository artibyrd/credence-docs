---
title: 'Operational Guide: Docker Compose 5-Minute Quickstart'
description: Quickstart guide for launching a sovereign Credence node or full-stack cluster locally using Docker Compose in under 5 minutes.
since_version: v1.18.0
verified_version: v1.18.0
last_verified: '2026-08-19'
---

# Operational Guide: Docker Compose 5-Minute Quickstart

Get Credence running locally on any machine (Linux, macOS, Windows) in 5 minutes with zero cloud setup.

---

## 1. Launch Basic Sovereign Node

```bash
# 1. Clone repository
git clone https://github.com/artibyrd/credence.git && cd credence

# 2. Launch container with SQLite WAL and local CAS
docker compose up -d

# 3. Verify health
curl -s http://localhost:8000/health
```

The node is immediately accessible:
- **FastMCP SSE**: `http://localhost:8000/sse`
- **Cost Dashboard**: `http://localhost:8000/cost.html`
- **Audit Reports**: `http://localhost:8000/api/reports`

---

## 2. Launch Advanced Full-Stack Cluster

```bash
# Launch Credence + Postgres 16 + MinIO S3 + Valkey Redis
docker compose -f docker-compose.prod.yml up -d
```
