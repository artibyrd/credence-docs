---
title: 'Operator Guide: Node Operational Roles & Exhaustion Policies'
description: Comprehensive operations runbook for configuring Evaluator, Serving, and Hybrid Credence nodes.
since_version: v2.18.0
verified_version: v2.18.1
last_verified: 2026-08-28
sidebar:
  order: 10
---

# Operator Guide: Node Operational Roles & Exhaustion Policies

This guide provides a comprehensive operational runbook for configuring, monitoring, and scaling a Credence node across **Evaluator**, **Serving**, and **Hybrid** operational roles.

---

## 1. Node Operational Roles

In Credence `v2.18.0`, node compute responsibilities are cleanly decoupled into three discrete operational roles to support diverse deployment topographies:

| Operational Role | Primary Responsibility | Compute & Token Profile | Ideal Infrastructure |
| :--- | :--- | :--- | :--- |
| **`EVALUATOR`** | Executes multi-agent LLM specialist swarms, performs aggressive heuristic re-scoring sweeps, and deep forensic auditing. | High token spend; requires valid LLM API keys. | Hosted cloud containers (Google Cloud Run), local developer workstations. |
| **`SERVING`** | Ingests and verifies peer attestations, performs SQLite cache lookups, and gossips verified reports across the P2P mesh. | Exactly $0.00 token cost; minimal CPU/RAM. | Edge routers, low-cost VPS instances, sovereign local relays. |
| **`HYBRID`** *(Default)* | Autonomously balances active evaluations when token headroom permits, falling back to serving and relays when exhausted. | Variable; capped strictly by daily budget limits. | Standard node operators, institutional publishers, research nodes. |

---

## 2. Dynamic Node Role Configuration

Node operators can adjust operational roles dynamically without requiring container restarts or redeployments.

### Method A: Environment Variables
Configure the primary node role at boot time via standard environment variables:

```bash
# Set role to pure serving mode
export CREDENCE_NODE_ROLE="serving"

# Set exhaustion strategy
export CREDENCE_EXHAUSTION_STRATEGY="serving_mode"

# Enable automatic heuristic re-scoring sweeps
export CREDENCE_AUTO_RESCORE="true"
```

### Method B: CLI Administration
Use the `credence node` command suite for local or remote runtime configuration:

```bash
# Inspect current node role, active strategy, and governor headroom
$ credence node status

# Dynamically update the node role to Evaluator
$ credence node role --role evaluator --strategy heuristic_fallback

# Inspect spend governor limits and hourly token velocity
$ credence quota
```

### Method C: FastMCP 2.0 & Admin REST API
For automated infrastructure management or web dashboards, send an authenticated POST request to the admin endpoint:

```bash
$ curl -X POST https://admin.credence.run/api/admin/node-role \
  -H "Authorization: Bearer <CREDENCE_ADMIN_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "role": "hybrid",
    "exhaustion_strategy": "heuristic_fallback",
    "auto_rescore": true
  }'
```

---

## 3. Exhaustion Strategies & Governor Behavior

When incoming article volume exceeds the configured daily budget (`CREDENCE_DAILY_BUDGET_USD`) or hourly token velocity ceiling (`CREDENCE_MAX_TOKENS_PER_HOUR`), the node engages its configured **Exhaustion Strategy**:

1. **`HEURISTIC_FALLBACK`**: Seamlessly falls back to the deterministic offline structural heuristic engine (`offline_structural_heuristic@v1.1.0`). Confidence is capped at 25% max with verbatim DOM grounding ($G=1.00$). The report is saved with `quota_preserved=True`.
2. **`SERVING_MODE`**: Drops all new evaluation requests and operates strictly as a zero-token attestation cache and P2P relay.
3. **`DEFER`**: Halts immediate processing and enqueues articles in the SQLite task backlog until the governor window resets at the next UTC hour.

---

## 4. Evaluator Re-scoring Sweeps

Evaluator and Hybrid nodes can proactively upgrade low-confidence heuristic audits once LLM quota becomes available. Sweeps query the database for records where `quota_preserved=True` and re-evaluate them through the full multi-agent LLM consensus pipeline:

```bash
# Execute a manual re-scoring sweep for up to 20 pending audits
$ credence node sweep --limit 20

# Execute a sweep overriding governor headroom checks (operator override)
$ credence node sweep --limit 50 --force
```

During server startup, evaluator nodes automatically execute a non-blocking background sweep if token headroom is available.
