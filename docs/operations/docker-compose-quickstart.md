---
title: 'Operational Guide: Docker Compose 5-Minute Quickstart'
description: Quickstart guide for launching a sovereign Credence node or full-stack
  cluster locally using Docker Compose in under 5 minutes.
since_version: v1.18.0
verified_version: v2.16.2
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

## Architectural Invariants & Verification Mechanics

The implementation of **Docker Compose Quickstart** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Docker Compose Quickstart** using standard CLI commands and FastMCP 2.0 tools:

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
