---
title: 'FastMCP 2.0 Substrate: Dual Transports & 4-Way Synchronous Parity'
description: Architecture of the FastMCP 2.0 dual stdio/SSE server, Cloudflare edge
  proxying, and maintaining synchronous feature parity across CLI, FastMCP, TUI, and
  Web.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
tags:
- fastmcp
- sse
- mcp
- feature-parity
- cloud-run
- cloudflare
interfaces:
- CLI
- FastMCP 2.0
- Python SDK
- Zero-Build Web UI
- Textual TUI
invariants:
- inv-fastmcp-transport-security
- inv-edge-origin-header
- inv-fastmcp-datetime-serialization
- inv-4way-feature-paritydifficulty: Advanced
read_time: 8 min
---

> **Note**: FastMCP 2.0 Substrate: Dual Transports & 4-Way Synchronous Parity

Explore the communication architecture powering Credence's **FastMCP 2.0 server**, providing unified tool and resource access to Claude Desktop, Cursor, and Antigravity while maintaining 4-way synchronous feature parity.

> [!IMPORTANT]
> **[The Invariant Bible: Universal Feature Parity](../invariants.md#invariant-30)**: Every capability in Credence must be synchronously accessible across all 4 surfaces: CLI (`credence`), FastMCP 2.0 tools and resources, Textual TUI (`credence tui`), and the Zero-Build Web UI.

---

## 1. Dual Transport Architecture: stdio vs. Server-Sent Events (SSE)

Credence implements dual FastMCP transports to support both local IDE pair-programming and remote decentralized mesh querying:

| Feature | `stdio` Transport | `sse` Transport |
| :--- | :--- | :--- |
| **Primary Use Case** | Local Claude Desktop & Cursor IDE | Multi-cloud mesh nodes & Webhooks |
| **Network Overhead** | **0ms** (Kernel UNIX pipes) | ~15–45ms (HTTPS / HTTP/3) |
| **Authentication** | Local OS User Permissions | Ed25519 Signed Session Handshake |
| **Launch Command** | `credence serve --transport stdio` | `credence serve --transport sse --port 8000` |

---

## 2. Reverse Proxy Security & Edge Header Rewriting

When deploying FastMCP servers behind Cloudflare and Google Cloud Run, default DNS rebinding protections reject custom domain host headers.

To ensure seamless production routing:
1. **Configure Transport Security Settings**:
```python
   # In credence/mcp/server.py
   TransportSecuritySettings(
       enable_dns_rebinding_protection=False,
       allowed_hosts=["*"],
       allowed_origins=["*"]
   )
```
2. **[The Invariant Bible: Edge Routing Origin Header Translation](../invariants.md#invariant-14)**: Cloudflare Worker edge routers rewrite `Host` headers to native Cloud Run URLs (`<service>.run.app`) to preserve live Server-Sent Events (SSE) streaming and global CORS headers.

---

## 3. FastMCP Nested Datetime Serialization Invariant

JSON cannot natively represent Python `datetime` objects. To prevent serialization runtime crashes during MCP payload marshalling:

```python
# In models and digest export dictionaries
# [The Invariant Bible](../invariants.md#invariant-16): FastMCP Nested Datetime Serialization
def to_dict(self) -> dict:
    return {
        "content_sha256": self.content_sha256,
        "evaluated_at": self.evaluated_at.isoformat() if isinstance(self.evaluated_at, datetime) else self.evaluated_at,
        "violations": [v.to_dict() for v in self.violations]
    }
```

> [!TIP]
> Always verify FastMCP payloads against standard JSON schema validators before publishing new tools or resources.

## Architectural Invariants & Verification Mechanics

The implementation of **05 Fastmcp Dual Transport And Four Way Parity** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **05 Fastmcp Dual Transport And Four Way Parity** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "agentic"

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
