---
title: "FastMCP 2.0 Integration"
description: "Model Context Protocol tools, resources, prompt templates, and multi-transport specifications (stdio & SSE)."
sidebar:
  order: 3
---

Credence implements a fully compliant **Model Context Protocol (FastMCP 2.0)** server allowing AI coding assistants (Antigravity, Claude Desktop, Cursor, and custom autonomous agents) to invoke epistemic tools and inspect live taxonomy resources.

---

## 1. Transports Supported

1. **Standard I/O (`stdio`)**: Best for local interactive agents and desktop tools (`credence serve --transport stdio`).
2. **Server-Sent Events (`SSE / HTTP`)**: Best for multi-agent clusters, remote microservices, and Google Cloud Run (`credence serve --transport sse --port 8000`).

---

## 2. FastMCP Tool Catalog

### `credence_check_url`
Audits a live webpage against journalistic ethics, logical fallacies, and deceptive UI patterns.
- **Parameters**: `url: str`, `force_refresh: bool = False`, `cost_profile: str = "BALANCED"`
- **Output**: JSON payload containing `suspicion_score`, `classification`, `is_satire`, `violations`, and Ed25519 `node_signature`.

### `credence_evaluate_text`
Audits raw prose text directly without web scraping (zero network overhead).
- **Parameters**: `text: str`, `title: str = "Pasted Text"`, `byline: Optional[str] = None`
- **Output**: Full signed `AuditReport` JSON.

### `credence_get_audit`
Queries cached audits by URL or content SHA-256 in $0$ LLM tokens.
- **Parameters**: `identifier: str` (URL or SHA-256 hash)

### `credence_verify_attestation`
Cryptographically verifies an Ed25519 signed attestation.
- **Parameters**: `signed_attestation_json: str`
- **Output**: `{ "is_valid": true, "node_pubkey": "...", "content_sha256": "..." }`

### `credence_get_quota_status`
Returns real-time token safety headroom %, daily spend, and circuit breaker health.

### `credence_get_consensus`
Calculates Bayesian multi-node consensus across peer evaluations for a given content hash, with optional empirical subject-weighted scoring.
- **Parameters**: `content_sha256: str`, `subject_id: Optional[str] = None`

### `credence_sync_feeds`
Polls all active syndicated RSS/Atom/JSON feeds, executes mesh effort avoidance, and adopts peer attestations at $0.00 token cost.

---

## 3. FastMCP Resource URIs

- `credence://taxonomies`: Active taxonomy catalogs with SHA-256 hashes.
- `credence://profiles`: Operational cost profiles (`FREE`, `BALANCED`, `ULTRA`).
- `credence://node/identity`: Local node Ed25519 public key and reputation stats.
- `credence://mesh/seeds`: Signed bootstrap seed peers.
- `credence://subjects/registry`: Hierarchical subject domain ontology.
- `credence://feeds/status`: Syndicated feed status and compute savings.
