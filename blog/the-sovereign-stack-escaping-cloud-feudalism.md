---
title: 'The Sovereign Stack: Escaping Cloud Feudalism with Open Protocols'
description: Why relying on open standards (SQLAlchemy, S3 API, Redis RESP, OCI) beats proprietary cloud lock-in every single time.
since_version: v1.18.0
verified_version: v2.19.0
last_verified: 2026-09-07
sidebar:
  order: 15
---

# The Sovereign Stack: Escaping Cloud Feudalism with Open Protocols

In modern software engineering, developers have unwittingly traded operational independence for the convenience of proprietary cloud ecosystems.

When your architecture depends tightly on AWS DynamoDB streams, GCP Datastore, proprietary vector search databases, and vendor-specific authentication SDKs, you no longer own your software. You are an epistemic tenant paying rent on a digital feudal estate. When the cloud vendor increases API pricing, deprecates a runtime, or suffers a regional outage, your system is helpless.

When we built Credence, we committed to a non-negotiable architectural invariant: **The Sovereign Stack**. Every component must run on open, vendor-agnostic protocols that can be hosted on a $4/mo Hetzner VPS, a home Raspberry Pi, or a 100-node enterprise Kubernetes cluster with zero code modifications.

---

## The 4 Sovereign Protocol Layers

| Sovereign Stack Layer | Technology Selection | Architectural Purpose | Vendor Independence |
| :--- | :--- | :--- | :--- |
| **Presentation Plane** | Vanilla HTML5, CSS Variables, Native WebCrypto | Zero-build Web UI & Workstation | 100% portable across any static CDN |
| **Application Plane** | Python 3.12, FastMCP 2.0, FastAPI | Pure epistemic computation | Runs anywhere (Docker, Cloud Run, VPS) |
| **Storage Plane** | SQLAlchemy 2.0 Async (SQLite WAL / PostgreSQL 16) | Sovereign verifiable state storage | Single-file portability / self-hosting |
| **Cryptographic Plane**| RFC 8785 Canonical JSON & Ed25519 (RFC 8032) | Tamper-proof decentralized trust | Zero reliance on centralized certificate CAs |

### 1. Storage Sovereignty: Async SQLite & SQLAlchemy 2.0
Rather than tying the database layer to proprietary document stores, Credence uses **SQLAlchemy 2.0 Async**:
- **Single-Node / Homelab**: Embedded **SQLite with Write-Ahead Logging (WAL)**. Delivers $>10,000$ queries/second with zero external database processes and $0.00 idle cost.
- **Planetary Scaling**: Point the single `DATABASE_URL` environment variable to PostgreSQL 16, CockroachDB, or AWS Aurora with zero application code changes.

### 2. Content-Addressable Storage (CAS): S3 Standard Protocol
Audit snapshots, DOM trees, and verification receipts are indexed by their SHA-256 content hashes. Credence interfaces with storage via the open **S3 CAS Protocol**:
- Local developer workstation: Writes directly to local disk directory (`data/cas/`).
- Self-hosted homelab: Points to open-source MinIO or SeaweedFS.
- Production cloud: Points to Cloudflare R2 ($0.00 egress charges) or AWS S3.

### 3. Messaging & Distributed State: Redis RESP Protocol
For distributed feed sifting and rate-limiting across multi-node swarms, Credence uses the open Redis Serialization Protocol (RESP), running equally on **Valkey**, Redis, KeyDB, or an in-memory Python fallback.

---

## Cost Comparison: Cloud Feudalism vs. The Sovereign Stack

| Architectural Component | Proprietary Cloud Stack (AWS/GCP) | Credence Sovereign Stack | Monthly Cost |
| :--- | :--- | :--- | :---: |
| **Compute Plane** | Dedicated ECS Fargate / EKS ($75/mo) | Cloud Run v2 (Scale-to-Zero) | **$0.00** |
| **Database** | DynamoDB / Cloud Spanner ($120/mo) | SQLite WAL on local disk | **$0.00** |
| **Edge & CDN** | CloudFront / Cloud CDN ($45/mo) | Cloudflare Pages Zero-Build | **$0.00** |
| **Blob Storage** | S3 Standard + Data Egress ($60/mo) | Cloudflare R2 (0 Egress Fees) | **$0.00** |
| **Total Base Idle Cost** | **~$300.00 / month** | **$0.00 / month** | **100% Savings** |

---

## True Portability: From Cloud Run to a Raspberry Pi

Because Credence avoids proprietary SDK locks, moving from Google Cloud Run to a bare-metal Linux server takes exactly one command:

```bash
# Deploy entire sovereign node on any bare-metal Linux host
$ docker compose up -d

# Or run natively with zero containers
$ poetry install && credence germinate
```

Sovereignty is not about rejecting the cloud—it is about retaining the absolute technical freedom to leave whenever you choose.

---

## Conclusion: The Three Laws of Sovereign Software Architecture

Escaping cloud feudalism is not an ideological posture—it is an engineering discipline. When software architectures tie their operational destiny to proprietary cloud APIs, bespoke database dialects, and brittle build-time package managers, they surrender their sovereignty to a landlord who can raise rents or deprecate infrastructure on a whim.

To maintain true computational autonomy, Credence codifies three laws of sovereign software architecture:

1. **Protocol Over Platform**: Anchor all data exchange in open, RFC-standardized protocols (RFC 8785 Canonical JSON, Ed25519 cryptography, and HTTP/2 SSE) rather than proprietary cloud messaging buses.
2. **State Over Service**: Treat storage as content-addressable and portable. A local SQLite database or simple S3-compatible bucket should always suffice for operational independence; never bind your data models to proprietary managed cloud databases.
3. **Zero-Build Distribution**: Deliver user interfaces as vanilla HTML5, native CSS custom properties, and standard ES Modules. When your frontend requires zero `npm install` steps and zero compilation toolchains, your application can be served from any static file server, IPFS node, or local filesystem indefinitely.

By enforcing these three boundaries, Credence demonstrates that high-performance, planetary-scale verification software can remain entirely self-sovereign—giving every operator the absolute freedom to run anywhere, anytime, under their own authority.
