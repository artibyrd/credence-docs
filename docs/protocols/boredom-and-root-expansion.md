---
title: 'Epistemic Protocol Specification: Boredom Engine & Root Expansion (EPEP-16)'
description: Opportunistic token consumption, idle headroom exploration, citation crawl graph expansion, and candidate seed discovery.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

## Architectural Invariants & Verification Mechanics

The implementation of **Boredom And Root Expansion** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Boredom And Root Expansion** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "protocols"

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
