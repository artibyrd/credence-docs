---
title: 10. Reusable Live Rotating E2E & Byzantine Mesh Gauntlet
description: Step-by-step tutorial on executing, customizing, and scaling the reusable live rotating test suite across CLI, FastMCP 2.0 SSE, and 13-node P2P mesh clusters.
since_version: v1.4.0
verified_version: v2.18.3
last_verified: 2026-08-29
tags:
- tutorial
- e2e
- live-testing
- fastmcp-sse
- byzantine-defense
- mesh-simulation
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
invariants:
- inv-hermetic-unit-tests
- inv-topic-entropy-astroturfing
- inv-canonical-json-ed25519
difficulty: Intermediate
read_time: 10 min
---

# Tutorial 10: Running the Reusable Live Rotating E2E & Byzantine Mesh Gauntlet

In this hands-on tutorial, you will learn how to operate, configure, and extend Credence's **Reusable Live Rotating E2E Test Suite**. You will execute live audits against real-world targets, test remote FastMCP 2.0 Server-Sent Events (SSE) streaming, and simulate Byzantine ungrounded smear attacks in a 13-node P2P mesh cluster.

---

## 1. Prerequisites & Environment Setup

Ensure your local development environment is active and dependencies are installed:

```bash
cd /home/pendragon/Projects/credence-ecosystem/credence
poetry install
```

Verify that your preflight checks and command tools are operational:

```bash
# Verify local toolchain readiness
$ just preflight
```

---

## 2. Understanding the Rotating Live Corpus Mechanics

The live rotating gauntlet ensures that epistemic heuristics do not overfit to static, frozen fixtures. Instead, it deterministically samples live targets each day using a rotating seed:

$$\text{Seed} = \text{SHA-256}(\text{YYYY-MM-DD} \parallel \text{SALT})$$

This produces a predictable, reproducible subset of real-world RSS feeds and news domains while preventing prompt drift.

---

## 3. Simulating the 13-Node Byzantine Mesh Cluster

Credence includes an in-memory 13-node Watts-Strogatz small-world mesh simulator to stress-test P2P gossip, attestation adoption, and Byzantine cartel isolation:

| Gauntlet Phase | Cluster Participant | Action Executed | Epistemic Result |
| :--- | :--- | :--- | :--- |
| **Phase 1: Ingestion** | Node 0 (Evaluator) | Evaluates target article with Gemini 3.7 | Mints signed RFC 8785 attestation |
| **Phase 2: Gossip** | Nodes 1..11 (Honest) | Adopts signed attestation via WebSocket | 12 nodes adopt in 0 tokens ($0.00) |
| **Phase 3: Attack** | Node 12 (Adversary) | Injects forged attestation with bad score | Quorum consensus rejects forged payload |
| **Phase 4: Slashing** | Consensus Aggregator| Computes Bayesian median and penalizes Node 12 | Node 12 Concordance slashed by 50% |

The test verifies two critical properties:
1. **P2P Work-Sharing**: 12 peer nodes adopt the attestation in $0$ LLM tokens (**92.3% compute savings**).
2. **Anti-Smear Slashing**: When Node 12 injects an ungrounded smear ($S=95.0, G=0.0$), the aggregator isolates Node 12 and drops it from the consensus score.

```bash
# Execute 13-node Byzantine swarm test
$ poetry run pytest tests/unit/mesh/test_mesh.py -k "test_byzantine_resilience" -v
```

---

## 4. Running Remote FastMCP Server-Sent Events (SSE) Tests

To verify that AI agents can interact with Credence over network boundaries without transport dropouts, execute the FastMCP integration tests:

```bash
# Test FastMCP stdio and SSE transport protocols
$ poetry run pytest tests/unit/mcp/test_admin_tools.py -v
```

This verifies that:
* JSON-RPC request-response cycles complete in `<50ms`.
* Structured report resources adhere to RFC 8785 canonical serialization.
* Token headroom limits are checked before executing LLM reasoning prompts.

---

## 5. Summary Commands & Cheat Sheet

| Operational Task | Canonical Command | Verification Target |
| :--- | :--- | :--- |
| **Run Daily Live Rotating Suite** | `just test-live` | Deterministic daily live corpus |
| **Run Live Suite with Custom Seed** | `CREDENCE_LIVE_SEED=2026-08-24 just test-live` | Specific historical snapshot |
| **Run Full E2E Testbed** | `just test-e2e` | End-to-end multi-plane validation |
| **Run Hermetic Unit Tests** | `just test-unit` | In-memory unit test suite (<35s) |
| **Run Pre-Commit QA Gate** | `just check` | Full parallel multi-plane gate |
