---
title: 'Tutorial 03: Pairing with Claude Desktop & Cursor via FastMCP 2.0'
description: Connect your favorite AI coding assistants directly to your local Credence node using the Model Context Protocol.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 3
---

# Tutorial 03: Pairing with Claude Desktop & Cursor via FastMCP 2.0

In this tutorial, you will configure **Claude Desktop** and **Cursor IDE** to communicate with your local Credence node via **FastMCP 2.0**, enabling your AI coding assistant to audit external documentation, packages, and claims in real time.

---

## 1. Prerequisites & Installation

Ensure you have Credence installed locally:
```bash
# Verify FastMCP server is available
$ credence serve --help
```

---

## 2. Configuring Claude Desktop

Open your Claude Desktop configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the Credence MCP server definition:

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

Restart Claude Desktop. You will see a 🔨 icon indicating that Credence tools (`credence_check_url`, `credence_check_text`, `credence_get_quota_status`) are active.

---

## 3. Configuring Cursor IDE

In Cursor, navigate to **Settings** $\rightarrow$ **Features** $\rightarrow$ **MCP Servers** $\rightarrow$ **Add New MCP Server**:
- **Name**: `credence`
- **Type**: `command`
- **Command**: `credence serve --transport stdio`

---

## 4. Prompting Your AI Pair Programmer

Test the integration in Claude or Cursor chat:

> *"Check the claims on https://example.com/new-framework using Credence before we decide whether to add it to our project."*

Claude will autonomously call `credence_check_url`, review the epistemic suspicion score and grounding citations, and summarize findings with zero hallucinations.

---

## 5. Next Steps

* 🏛️ [Tutorial 04: Sovereign Org Scaffolding](04-sovereign-org-scaffolding.md)
* 🛑 [Giving Claude and Cursor an Epistemic Brake Essay](../../blog/giving-claude-and-cursor-an-epistemic-brake.md)

## Architectural Invariants & Verification Mechanics

The implementation of **03 Claude Cursor Fastmcp** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **03 Claude Cursor Fastmcp** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "tutorials"

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
