---
title: FastMCP 2.0 Integration Specification
description: Model Context Protocol (MCP) tool definitions, dual stdio/SSE transports, and autonomous agent contracts.
since_version: v1.0.0
verified_version: v2.16.2
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

```
 Claude Desktop / Cursor IDE
             |
   (stdio or SSE stream)
             ▼
|              FastMCP 2.0 Server Substrate               |
| 🛠️ Dynamic Tools Catalog    | 📂 Structured Resources    |
|  • credence_check_url      |  • credence://stats/live   |
|  • credence_check_text     |  • credence://governance   |
|  • credence_get_dossier    |  • credence://taxonomies   |
```

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

## Architectural Invariants & Verification Mechanics

The implementation of **Fastmcp** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Fastmcp** using standard CLI commands and FastMCP 2.0 tools:

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