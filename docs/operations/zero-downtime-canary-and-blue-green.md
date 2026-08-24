---
title: 'Operational Guide: Zero-Downtime Canary and Blue-Green Deployments'
description: Traffic splitting, automated revision rollbacks, telemetry health gates, and blue-green Cloud Run deploys.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 16
---

# Operational Guide: Zero-Downtime Canary and Blue-Green Deployments

This guide details the automated traffic-splitting, telemetry observation windows, and zero-downtime canary deployment procedures executed during Credence production releases.

---

## 1. The 3-Stage Canary Traffic-Splitting Sequence

Stage 1: Deploy Revision B (0% Traffic)
+-- Deploy new container revision to Cloud Run
+-- Execute health check probe against direct revision URL
(Health Check Passed)
▼
Stage 2: Canary Split (10% Traffic, 5-Minute Observation)
+-- Route 10% of live traffic to Revision B
+-- Monitor P95 latency, 5xx error rate, and memory consumption
(Zero Errors, Latency < 250ms)
▼
Stage 3: Full Cutover (100% Traffic to Revision B)
+-- Shift 100% of live traffic to Revision B
+-- Keep Revision A alive for 15 minutes for instant rollback

---

## 2. Step-by-Step Canary Runbook (CLI & Terraform)

```bash
# Step 1: Deploy new container revision without routing public traffic
$ gcloud run deploy credence-server-prod \
    --image gcr.io/credence-prod-505902/credence:v2.16.2 \
    --no-traffic \
    --region us-central1

# Step 2: Route 10% canary traffic for observation
$ gcloud run services update-traffic credence-server-prod \
    --to-revisions LATEST=10 \
    --region us-central1

# Step 3: Monitor live telemetry via ITLP-v1
$ credence stats --window 5m

# Step 4: Promote to 100% traffic upon clean telemetry observation
$ gcloud run services update-traffic credence-server-prod \
    --to-latest \
    --region us-central1
```

---

## 3. Instant Rollback Triggers

If P95 latency exceeds $500\text{ms}$ or the 5xx error rate exceeds $0.1\%$ during the canary window:
```bash
# Instantly roll back 100% of traffic to previous known-good revision
$ gcloud run services update-traffic credence-server-prod \
    --to-revisions PREVIOUS=100 \
    --region us-central1
```

---

## 4. Related Guides

* ☁️ [Google Cloud Run Deployment](../deployment-cloudrun.md)
* 🏛️ [Single-Project vs Dual-Project Topologies](single-vs-dual-project-gcp.md)
* 📘 [The Invariant Bible](../invariants.md) — 4-Phase Release & Lean Learning Lifecycle

## Architectural Invariants & Verification Mechanics

The implementation of **Zero Downtime Canary And Blue Green** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Zero Downtime Canary And Blue Green** using standard CLI commands and FastMCP 2.0 tools:

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
