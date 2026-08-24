---
title: FastMCP 2.0 Integration Specification
description: Model Context Protocol (MCP) tool definitions, dual stdio/SSE transports, and autonomous agent contracts.
since_version: v1.0.0
verified_version: v2.16.4
last_verified: 2026-08-24
sidebar:
  order: 3
---

# FastMCP 2.0 Integration Specification

**FastMCP 2.0** provides autonomous AI coding assistants (Claude Desktop, Cursor, Antigravity, Cline) with high-performance epistemic evaluation tools, real-time citation verification, and structured resource endpoints.

---

## 1. Dual Transport Architecture

Credence exposes FastMCP 2.0 across two standard communication transports:
1. **Standard I/O (`stdio`)**: Zero-network local process execution, ideal for local desktop clients (Claude Desktop, Cursor IDE).
2. **Server-Sent Events (`sse` / HTTP)**: Asynchronous streaming over HTTP/TLS (`/sse` and `/messages`), ideal for multi-agent cloud swarms and remote workstations.

| Integration Layer | Transport | Communication Protocol | Epistemic Tool Access |
| :--- | :--- | :--- | :--- |
| **IDE Host** | Claude Desktop / Cursor | stdio / Server-Sent Events | Direct pair programming prompts |
| **FastMCP Substrate**| FastMCP 2.0 Engine | RFC 8785 JSON-RPC | `credence_audit_text`, `credence_get_quota_status` |
| **Execution Kernel** | Pure Python Subsystem | Hermetic In-Memory Pipeline | Verbatim source grounding ($G=1.00$) |

---

## 2. FastMCP Tool Catalog

### 2.1 `credence_check_url`
Audits a live webpage URL for deceptive patterns, unverified assertions, clickbait framing, and prompt injection attacks.

```json
{
  "name": "credence_check_url",
  "description": "Performs a complete epistemic audit of a web URL, returning a calibrated suspicion score, classification, and grounded quotes.",
  "parameters": {
    "type": "object",
    "properties": {
      "url": { "type": "string", "description": "The fully qualified HTTP/HTTPS URL to audit." },
      "profile": { "type": "string", "enum": ["free", "balanced", "ultra"], "default": "balanced" },
      "thinking_budget": { "type": "integer", "default": 1024 }
    },
    "required": ["url"]
  }
}
```

### 2.2 `credence_check_text`
Performs an instant audit on raw unstructured prose (news releases, benchmark claims, corporate earnings transcripts) with zero browser scraping overhead. Standalone audits persist `Snapshot`, `Audit`, and `Violation` entities to SQLite and serialize nested `datetime` attributes to RFC 3339 strings.

### 2.3 `credence_verify_attestation`
Cryptographically verifies an Ed25519 audit receipt against the publisher's public key over RFC 8785 canonical JSON bytes.

### 2.4 `credence_get_quota_status`
Returns real-time token governor budget status, active hourly spend, and circuit breaker tripwire headroom.

---

## 3. FastMCP Resource URIs

| Resource URI | Role | Format |
| :--- | :--- | :--- |
| `credence://stats/live` | Real-time node vitals, peer count, and token spend odometer | JSON |
| `credence://governance/invariants` | The Invariant Bible & active system invariant catalog | JSON / Markdown |
| `credence://governance/rfcs` | Active and candidate RFC standard specifications | YAML |
| `credence://taxonomies/all` | 46 authentic taxonomy rules (SPJ, IEP, Deceptive Patterns) | JSON |

---

## 4. Setup Guide for Claude Desktop & Cursor

Add Credence to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "credence": {
      "command": "credence",
      "args": ["serve", "--transport", "stdio"]
    }
  }
}
```

For remote agent swarms using SSE:
```json
{
  "mcpServers": {
    "credence-remote": {
      "url": "https://mcp.credence.run/sse"
    }
  }
}
```

---

## 5. Related Tutorials & Protocols

* 🛑 [Giving Claude and Cursor an Epistemic Brake Essay](../../blog/giving-claude-and-cursor-an-epistemic-brake.md)
* 🤖 [Tutorial 03: FastMCP 2.0 with Claude & Cursor](../tutorials/03-claude-cursor-fastmcp.md)
* 🌐 [Universal Agent Interoperability Guide](../portability/universal-agent-interop.md)

---
## FastMCP 2.0 Protocol Specification and Tool Schemas

RFC 8785 JSON-RPC schemas define structured tool calls and resources for seamless AI pair-programming integration.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Fastmcp** operates according to strict operational parameters and deterministic boundaries:

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Fastmcp** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "fastmcp" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
