---
title: 'The Sovereign Stack: Escaping Cloud Feudalism with Open Protocols'
description: Why relying on open standards (SQLAlchemy, S3 API, Redis RESP, OCI) beats proprietary cloud lock-in every single time.
since_version: v1.18.0
verified_version: v2.16.0
last_verified: 2026-08-24
---

# The Sovereign Stack: Escaping Cloud Feudalism with Open Protocols

When software is tightly coupled to proprietary cloud SDKs (like AWS DynamoDB or GCP Datastore), the operator loses sovereignty. Pricing changes, regional outages, or vendor lock-in dictate technical choices.

Credence is built entirely on **Sovereign Open Protocols**:
- **SQLAlchemy 2.0 Async**: Runs on SQLite, PostgreSQL, CockroachDB, or Aurora.
- **Standard S3 CAS Protocol**: Runs on Cloudflare R2, MinIO, Wasabi, or local disk.
- **Redis RESP**: Runs on Valkey, Redis, Dragonfly, or In-Memory Python.

Run it on a $4/mo Hetzner VPS, a home Raspberry Pi, or a 100-node Kubernetes cluster. The choice belongs to you.
