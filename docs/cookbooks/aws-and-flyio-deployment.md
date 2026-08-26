---
title: 'Cookbook: Deploying Credence on AWS App Runner & Fly.io'
description: Multi-cloud serverless container deployment guide for AWS App Runner, ECS Fargate, and Fly.io global edge.
since_version: v1.14.0
verified_version: v2.17.3
last_verified: 2026-08-26
sidebar:
  order: 9
---

# Cookbook: Deploying Credence on AWS App Runner & Fly.io

This cookbook demonstrates how to deploy Credence compute instances across alternative cloud providers including **AWS App Runner** and **Fly.io** for multi-cloud redundancy.

---

## 1. Deploying on Fly.io Global Edge

Fly.io allows running lightweight containers close to users with automatic scale-to-zero:

```bash
# 1. Launch Fly.io configuration
$ fly launch --image gcr.io/credence-prod-505902/credence:v2.16.2

# 2. Set environment secrets
$ fly secrets set CREDENCE_GEMINI_API_KEY="your_api_key"

# 3. Deploy to production
$ fly deploy
```

---

## 2. Deploying on AWS App Runner

AWS App Runner provides fully managed container execution with automatic TLS and scaling:

```bash
# Create App Runner service via AWS CLI
$ aws apprunner create-service \
    --service-name credence-server \
    --source-configuration '{
        "ImageRepository": {
            "ImageIdentifier": "public.ecr.aws/credence/server:v2.16.2",
            "ImageRepositoryType": "ECR_PUBLIC",
            "ImageConfiguration": { "Port": "8080" }
        },
        "AutoDeploymentsEnabled": true
    }'
```

---

## 3. Related Blueprints

* 🌐 [Zero-Build Edge Routing Blueprint](../blueprints/zero-build-edge-routing-and-subdomain-dispatch.md)
* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)

---
## Multi-Cloud Deployment: AWS Fargate & Fly.io Recipes

Credence runs seamlessly across containerized multi-cloud providers without vendor lock-in:

### Fly.io Deployment Recipe (`fly.toml`)
```toml
app = "credence-server"
primary_region = "iad"

[http_service]
  internal_port = 8080
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0

[[vm]]
  memory = "512mb"
  cpu_kind = "shared"
  cpus = 1
```

| Multi-Cloud Provider | Container Runtime | Cold Start Time | Egress Cost Optimization |
| :--- | :--- | :---: | :--- |
| **Google Cloud Run** | Serverless Container | `<2.5s` | Scale-to-zero with Startup CPU Boost |
| **AWS Fargate** | ECS Serverless Task | `<12s` | Ephemeral task orchestration |
| **Fly.io** | MicroVM Firecracker | `<1.8s` | Scale-to-zero Edge Compute |
| **Hetzner Cloud VPS** | Dedicated Docker Daemon | Instant (24/7) | Fixed low-cost monthly billing |

---
## Running Credence on AWS Fargate and Fly.io

Containerized deployment recipes allow node operators to host Credence across multi-cloud environments with zero vendor lock-in.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Aws And Flyio Deployment** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "aws_and_flyio_deployment" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
