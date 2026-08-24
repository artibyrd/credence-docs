---
title: 'Cookbook: Deploying Credence on AWS App Runner & Fly.io'
description: Multi-cloud serverless container deployment guide for AWS App Runner, ECS Fargate, and Fly.io global edge.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

## Architectural Invariants & Verification Mechanics

The implementation of **Aws And Flyio Deployment** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Aws And Flyio Deployment** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "cookbooks"

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
