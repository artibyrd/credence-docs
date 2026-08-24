---
title: 'Operational Guide: Docker Compose 5-Minute Quickstart'
description: Quickstart guide for launching a sovereign Credence node or full-stack
  cluster locally using Docker Compose in under 5 minutes.
since_version: v1.18.0
verified_version: v2.16.6
last_verified: 2026-08-24
---

# Operational Guide: Docker Compose 5-Minute Quickstart

Get Credence running locally on any machine (Linux, macOS, Windows) in 5 minutes with zero cloud setup.

---

## 1. Prerequisites Checklist

- **Docker Engine**: Version 24.0 or higher.
- **Docker Compose**: Version 2.20 or higher (`docker compose version`).
- **Gemini API Key**: From [Google AI Studio](https://aistudio.google.com/).

---

## 2. Launch Option A: Basic Sovereign Node ($0 Idle / SQLite)

The Basic configuration runs Credence with an embedded SQLite WAL database and local CAS snapshot filesystem:

```bash
# 1. Clone repository
git clone https://github.com/artibyrd/credence.git && cd credence

# 2. Set your Gemini API Key
export GEMINI_API_KEY="your_api_key_here"

# 3. Launch container
docker compose up -d

# 4. Verify health probe
curl -sSL http://localhost:8000/health | jq .
```

### Endpoints Available Immediately:
- **FastMCP SSE Transport**: `http://localhost:8000/sse`
- **Cost & Health Dashboard**: `http://localhost:8000/cost.html`
- **Audit Reports Viewer**: `http://localhost:8000/api/reports`
- **P2P Gossip Relay**: `ws://localhost:8765`

---

## 3. Launch Option B: Planetary Sovereign Cluster (PostgreSQL + MinIO + Valkey)

The Planetary stack provisions a multi-container sovereign cluster with enterprise database persistence, S3 CAS storage, and distributed cache:

```bash
# Launch Credence + PostgreSQL 16 + MinIO S3 + Valkey Distributed Cache
docker compose -f docker-compose.prod.yml up -d
```

### Architecture Topology:
- **`credence-server`** (Port 8000): FastMCP & REST API Engine.
- **`postgres`** (Port 5432): Async PostgreSQL 16 persistence.
- **`minio`** (Port 9000 API, Port 9001 Web Console): S3-compatible content-addressable storage.
- **`valkey`** (Port 6379): High-throughput in-memory distributed cache.

---

## 4. Operational Runbook: Logs & Teardown

```bash
# View real-time streaming logs
docker compose logs -f credence

# Stop all services (preserving data volumes)
docker compose down

# Stop services and purge data volumes (clean reset)
docker compose down -v
```

---
## Docker Compose Multi-Container Orchestration

For self-hosters deploying a complete production-grade Credence cluster on a single VPS or dedicated server:

```yaml
version: '3.8'
services:
  credence-server:
    image: ghcr.io/artibyrd/credence:v2.16.2
    container_name: credence-server
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      - CREDENCE_ENV=production
      - GEMINI_API_KEY=${GEMINI_API_KEY}
      - DATABASE_URL=sqlite+aiosqlite:////data/credence.db
    volumes:
      - credence-data:/data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 15s
      timeout: 5s
      retries: 3

volumes:
  credence-data:
```

| Deployment Parameter | Value | Description |
| :--- | :--- | :--- |
| **Container Port** | `8080` | Starlette REST & FastMCP SSE endpoint |
| **Persistent Volume** | `/data` | SQLite WAL state store and node Ed25519 identity |
| **Healthcheck Interval**| `15s` | Docker daemon automatic restart on failure |

---
## Production-Ready Docker Compose Multi-Service Stack

Deploying Credence with Docker Compose provides an instant, self-contained node stack with automatic restart policies.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Docker Compose Quickstart** in production, operators should adhere to the following maintenance procedures:

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
