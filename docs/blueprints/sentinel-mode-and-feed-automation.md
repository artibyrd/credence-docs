---
title: 'Technical Blueprint: Sentinel Mode & Sovereign Feed Automation'
description: Decentralized newsroom RSS/Atom feed automation, sentinel source subscriptions, auto-discovery, and zero-token serving relays.
since_version: v2.17.0
verified_version: v2.18.0
last_verified: 2026-08-27
sidebar:
  order: 21
---

# Technical Blueprint: Sentinel Mode & Sovereign Feed Automation

This technical blueprint specifies the **Sentinel Mode** feed monitoring, auto-sifting architecture, and sovereign multi-tenant decoupling protocol implemented in Credence.

---

## 1. Architectural Philosophy: The Cart-Before-the-Horse Paradigm

In decentralized information networks, evaluating claims manually does not scale to the velocity of live web publishing. Sentinel Mode inverts the evaluation loop from reactive user checks to autonomous, continuous ingestion and auditing.

A **Sentinel Source** is a monitored RSS, Atom, or JSON news feed that undergoes automated periodic polling, novel article extraction, dual-capture snapshotting, and cryptographic attestation generation.

| Pipeline Phase | Component | Computational Duty | Security Boundary |
| :--- | :--- | :--- | :--- |
| **Ingestion** | Sifter Daemon | Periodic feed polling, XML parsing, and entry deduplication | Untrusted network boundary, SSRF isolation |
| **Extraction** | Trafilatura Engine | Clean article prose parsing, DOM quote preservation, and byline extraction | HTML sanitization, script stripping |
| **Evaluation** | Specialist Swarms / Heuristics | 42-rule journalistic ethics and fallacy analysis | Bounded token governor headroom |
| **Attestation** | Ed25519 Custody Engine | RFC 8785 canonical JSON envelope generation and signing | Private key isolation, cryptographic integrity |
| **Distribution** | P2P Mesh Gossip | Inoculation broadcast across peer Watts-Strogatz clusters | Zero-token relaying, Sybil defense |

---

## 2. Dynamic Source Configuration & Invariant Decoupling

Under **`inv-sovereign-config-decoupling`**, core engine models, database migrations, scrapers, and background daemons must contain zero hardcoded third-party domain favoritism or proprietary feeds.

Sentinel sources are configured strictly through:
1. **Environment Configuration**: `CREDENCE_SENTINEL_FEEDS` (a comma-separated string of trusted RSS/Atom feed URLs configured per deployment).
2. **Admin API Management**: `POST /api/feeds/sentinel` with authenticated operator keys, enabling dynamic subscription provisioning.
3. **Database Subscriptions**: Stored in the `FeedSubscription` SQLModel entity with `is_sentinel=True` and `is_active=True`.

When a Credence node boots, the server lifespan initializes the sifter worker with these dynamic subscriptions. If zero external feeds are configured, the node operates cleanly in local evaluation and serving modes without raising runtime errors.

---

## 3. Evaluator vs. Serving Node Exhaustion Handling

When an ingestion burst from high-frequency news feeds threatens to exceed the configured daily dollar budget (`CREDENCE_DAILY_BUDGET_USD`) or hourly token velocity limit (`CREDENCE_MAX_TOKENS_PER_HOUR`), the node transitions gracefully according to its configured **Exhaustion Strategy**:

### Heuristic Fallback Strategy (`HEURISTIC_FALLBACK`)
The node automatically shifts inference from external LLM providers to the deterministic offline heuristic engine (`offline_structural_heuristic@v1.1.0`). In this state:
- All 12 SPJ ethics rules, 21 fallacies, and 9 deceptive patterns are evaluated using regex and DOM pattern matchers.
- Confidence scores are capped at a maximum of 25.0% (`HEURISTIC_MAX_CONFIDENCE_CEILING = 0.25`).
- The audit report is flagged with `quota_preserved=True` and tagged with the heuristic engine version.
- When LLM quota resets, background re-scoring sweeps automatically upgrade these audits to multi-agent consensus.

### Serving Mode Strategy (`SERVING_MODE`)
The node immediately suspends active content extraction and sifter polling passes. It transitions strictly into an edge relay that serves previously computed attestations and snapshots from its local SQLite cache ($0.00 token cost).

### Defer Strategy (`DEFER`)
The sifter daemon halts downstream evaluation and persists newly discovered article URLs to an internal task backlog table. When the token governor resets at the next UTC hour window, queued tasks are processed sequentially.

---

## 4. Dual-Capture Fastpath Protocol

To prevent link-rot and forensic tampering, Credence captures dual evidence artifacts before evaluation:
- **Raw HTML DOM Artifact**: The complete sanitized source HTML is stored in content-addressable storage hashed by SHA-256 (`dom_file_path`).
- **Normalized Plaintext Extraction**: Pure prose is extracted, cleaned of navigation clutter, and hashed via SimHash-64 to detect subsequent editorial modifications or stealth retractions.

If a publisher alters an article after an initial audit, the sifter calculates token drift and creates an incremental revision entry (`is_editorial_update=True`), preserving full historical transparency.

---

## 5. Universal 4-Way Interface Parity

Sentinel operations maintain synchronous feature parity across all four official surfaces:

- **CLI**:
  - `credence feeds list`: Displays all active and inactive feed subscriptions.
  - `credence sifter run`: Triggers an immediate one-shot sifter polling cycle.
  - `credence boredom status`: Displays background worker telemetry and idle cycles.
- **FastMCP 2.0**:
  - `credence_list_feeds`: MCP tool returning structured JSON arrays of feed subscriptions.
  - `credence_trigger_sifter_cycle`: MCP tool initiating background feed inspection.
- **Textual TUI Workstation**:
  - Tab 4 (`📡 Feeds Stream`): Interactive feed health matrix and live sifter log stream.
- **Zero-Build Web UI**:
  - `admin.credence.run`: Station 3 provides real-time daemon toggles and live status badges.

---

## 6. Mathematical & Cryptographic Verification

All articles ingested via Sentinel feeds produce immutable RFC 8785 canonical JSON records signed with the node's private Ed25519 key:

$$\text{CanonicalEnvelope} = \text{RFC8785}\left(\text{ReportPayload}\right)$$

$$\sigma = \text{Ed25519\_Sign}\left(\text{sk}_{\text{node}}, \, \text{CanonicalEnvelope}\right)$$

When peer nodes receive this attestation over the P2P mesh, they verify $\sigma$ against the sender's public key ($\text{pk}_{\text{node}}$). Because verification consumes zero LLM tokens and requires <2ms of CPU time, Sentinel feeds enable global epistemic consensus at minimal operational cost.

---

## 7. Taxonomy Delta Sifter & Staleness-Driven Re-Audits

In a living epistemic system, taxonomy rulebooks expand continuously. To ensure historical audits stay synchronized with modern rubrics without re-running entire swarms unnecessarily, Sentinel Mode includes the **Taxonomy Delta Sifter**:

1. **State Root Comparison**:
   Sentinel compares the attestation's recorded `taxonomy_root_hash` against the registry's active `TaxonomyRegistry.get_composite_catalog_hash()`.
2. **Cluster Isolation**:
   If a mismatch occurs, `TaxonomyRegistry.get_catalog_deltas(taxonomies_used)` identifies the exact `TaxonomyCluster` objects that were added or modified.
3. **Incremental Micro-Pass Execution**:
   Rather than re-evaluating the entire 42-rule canon, Sentinel dispatches focused micro-agents solely against the delta clusters, merging new findings and re-sealing the attestation.

---

## 8. Antigravity-Native Scheduled Task Protocol

Operators can run Sentinel daemons directly within Antigravity using internal agent reasoning tokens:

- **CLI / Justfile Commands**:
  - `just sentinel-audit <feed_url>`: Batch audit incoming articles under the cluster swarm.
  - `just audit-stale [domain]`: Sweep local database, identify audits with outdated taxonomy hashes, and execute delta upgrades.
- **Scheduled Antigravity Automation (`/schedule`)**:
  - Configure scheduled jobs to poll local feeds (e.g. `inmaricopa.com/feed/`), audit new or stale articles, and submit signed attestations to live mesh nodes.

