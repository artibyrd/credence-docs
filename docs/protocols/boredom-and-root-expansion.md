---
title: 'Epistemic Protocol Specification: Boredom Engine & Root Expansion (EPEP-16)'
description: Opportunistic token consumption, idle headroom exploration, citation crawl graph expansion, and candidate seed discovery.
since_version: v1.13.0
verified_version: v2.18.1
last_verified: 2026-08-28
sidebar:
  order: 9
---

# Epistemic Protocol Specification: Boredom Engine & Root Expansion (EPEP-16)

The **Boredom Engine & Epistemic Root Expansion Protocol (EPEP-16)** defines how autonomous Credence nodes utilize idle token headroom and off-peak compute cycles to proactively discover, audit, and index novel high-integrity information sources.

---

## 1. Overview & Architectural Motivation

In standard fact-checking architectures, nodes remain passive: they only evaluate URLs submitted directly by human users or syndicated RSS feeds. When network traffic is low, dedicated LLM API quotas and hardware compute sit completely idle.

EPEP-16 introduces the **Boredom Engine**:
- When the Token Safety Governor reports $>40\%$ available budget headroom and no active interactive workloads, the node enters `BOREDOM_EXPLORATION` mode.
- The node traverses outgoing citation graphs from verified high-integrity articles, discovering independent newsrooms, local public interest watchdogs, and academic preprint servers.
- High-performing domains are automatically nominated as **Root Candidate Seeds** for inclusion in the decentralized mesh directory (`peers.json`).

---

## 2. Headroom Tripwires & Boredom State Transition

The Boredom Engine transitions between three operating states based on real-time headroom telemetry:

| State | Headroom Floor | Action |
| :--- | :---: | :--- |
| **`SLEEPING`** | $< 30\%$ | Exploration disabled. All tokens preserved for interactive queries and high-priority feed alerts. |
| **`OPPORTUNISTIC`** | $30\% - 60\%$ | Evaluates Tier 1 citation links (direct hyperlinks found in high-grounding articles). Max 3 audits/hour. |
| **`ACTIVE_GERMINATION`** | $> 60\%$ | Deep citation graph traversal, DNS SRV peer exploration, and automated local standard benchmarking. |

---

## 3. Data Structures & Database Schema

The Boredom Engine stores candidate leads in the local SQLite WAL state:

```sql
CREATE TABLE IF NOT EXISTS root_candidates (
    id VARCHAR(64) PRIMARY KEY,
    fqdn VARCHAR(255) NOT NULL UNIQUE,
    discovered_via_url TEXT NOT NULL,
    referring_domain_dci FLOAT NOT NULL,
    sample_audits_count INTEGER DEFAULT 0,
    average_suspicion FLOAT DEFAULT 0.0,
    average_grounding FLOAT DEFAULT 0.0,
    topic_entropy FLOAT DEFAULT 0.0,
    status VARCHAR(32) DEFAULT 'DISCOVERED',
    discovered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_evaluated_at TIMESTAMP WITH TIME ZONE
);
```

### 3.1 `RootCandidate` Model & Scored Promotion

A candidate domain is promoted to `ROOT_SEED_CANDIDATE` when:
1. $\ge 20$ distinct articles audited via boredom crawls.
2. Grounding ratio $\ge 0.95$ across all extracted DOM citations.
3. Average suspicion $\le 10.0$ with zero deceptive patterns.
4. Topic entropy $H_{\text{topic}} \ge 0.70$ (verifying genuine editorial diversity).

---

## 4. REST API & FastMCP 2.0 Endpoints

```
GET  /api/v1/boredom/status       # Returns active headroom, state, and crawl queue
POST /api/v1/boredom/trigger      # Triggers single exploratory crawl cycle (if headroom permits)
GET  /api/v1/boredom/candidates   # Lists active root seed candidate domains
```

### FastMCP 2.0 Tool Invocation

```python
# Autonomous agent inspecting boredom discovery queue
result = await client.call_tool("credence_get_boredom_status", {})
print(f"Boredom State: {result['state']}, Candidates: {len(result['candidates'])}")
```

---

## 5. Related Protocols & Essays

* 🌱 [The Boredom Engine & Expanding Roots Essay](../../blog/the-boredom-engine-and-expanding-roots.md)
* 💎 [Bootstrap Seed Governance & Node Quality](../bootstrap-seeds.md)
* 🛡️ [Token Safety Governor Specification](token-governor.md)

---
## The Boredom Engine: Autonomous Curiosity & Root Expansion

When a Credence node has excess token headroom and zero active user queries, the **Boredom Engine** autonomously crawls syndicated feeds to discover breaking news:

| Curiosity State | Trigger Condition | Autonomous Action | Headroom Safeguard |
| :--- | :--- | :--- | :--- |
| **Active Idle** | No user queries for $>15\text{ min}$ | Checks 26 categorized RSS/Atom feeds | Suspends if headroom $<30\%$ |
| **Novel Article Discovery**| Unseen URL in syndicated feed | Computes SimHash and mints snapshot | 1,024 thinking token budget |
| **Root Expansion** | Discovers novel outbound source link | Registers source domain for tracking | Updates Domain Credence Index |

```bash
# Trigger an immediate manual boredom crawl cycle
$ credence sifter run --once --verbose
```

---
## Autonomous Sifting and Continuous Web Exploration

When idle, nodes proactively explore syndicated feeds to build a comprehensive historical record of breaking news stories.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Boredom And Root Expansion** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
