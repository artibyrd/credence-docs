---
title: 'Operational Guide: Simple vs Advanced Operating Modes'
description: Comprehensive operational guide comparing Simple Sovereign Mode (SQLite/Local) and Advanced Planetary Cloud Mode (PostgreSQL/Cloud Run/R2).
since_version: v1.17.0
verified_version: v2.18.0
last_verified: 2026-08-28
---

# Operational Guide: Simple vs Advanced Operating Modes

Credence operates in two distinct operational topologies sharing the exact same codebase and business logic.

---

## 1. Topologies at a Glance

### Topology A: Simple Mode (Sovereign Local)
- **Database**: Embedded SQLite WAL (`data/credence.db`).
- **State**: In-memory Python structures.
- **Blobs**: Local directory (`data/snapshots/`).
- **Monthly Cost**: **$0.00 / month**.
- **Ideal For**: Developers, single-workstation newsrooms, Raspberry Pi homelabs.

### Topology B: Advanced Mode (Planetary Cloud)
- **Compute**: Google Cloud Run v2 (0 to 500 container replicas).
- **Database**: Managed Serverless PostgreSQL (Neon / Cloud SQL).
- **State**: Serverless Redis / Valkey (Upstash / Memorystore).
- **Blobs**: Cloudflare R2 (`credence-snapshots`) with $0 egress fees.
- **Edge**: Cloudflare Anycast CDN & Worker Edge Router ($<20\text{ms}$ global read latency).
- **Monthly Cost**: **~$5 – $40 / month**.
- **Ideal For**: High-throughput public nodes, browser extension backends, multi-tenant organizations.

---

## 2. Quickstart Runbooks

### Simple Mode (60 Seconds)
```bash
just setup
just ignite
just tui
```

### Advanced Mode (Cloud Deployment)
```bash
# Set production secrets
export DATABASE_URL="postgresql+asyncpg://user:pass@ep-cool.neon.tech/credencedb?ssl=require"
export REDIS_URL="rediss://default:pass@us1-upstash.io:6379"
export STORAGE_BACKEND="s3"
export S3_BUCKET_NAME="credence-snapshots"

# Deploy Compute and Edge
just deploy backend
just deploy edge
```

---
## Simple vs. Advanced Operational Modes

Credence adapts to both single-user desktop workflows and multi-node planetary swarms:

| Operational Mode | Target User | Infrastructure Footprint | Execution Characteristics |
| :--- | :--- | :--- | :--- |
| **Simple Mode** | Individual developers, local CLI | Single SQLite file, zero daemons | On-demand audits with zero background idle cost |
| **Advanced Mode** | Sovereign orgs, 24/7 newsrooms | Cloud Run, PostgreSQL, P2P mesh | Continuous RSS sifting, WebSocket gossip, CAS |

```bash
# Run in Simple Mode (Immediate CLI audit)
$ credence audit https://example.com/article

# Run in Advanced Mode (Daemonized background sifter)
$ credence sifter run --daemon --interval 3600
```

---
## Choosing Between Simple CLI and Advanced Daemon Modes

Simple mode provides instant CLI audits on a single machine, while advanced mode enables background sifting and mesh clustering.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Simple Vs Advanced Modes** in production, operators should adhere to the following maintenance procedures:

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

To ensure continuous compliance with system invariants, **Simple Vs Advanced Modes** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "simple_vs_advanced_modes" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
