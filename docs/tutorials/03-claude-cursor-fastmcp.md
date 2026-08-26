---
title: 'Tutorial 03: Pairing with Claude Desktop & Cursor via FastMCP 2.0'
description: Connect your favorite AI coding assistants directly to your local Credence node using the Model Context Protocol.
since_version: v1.0.0
verified_version: v2.17.3
last_verified: 2026-08-26
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

---
## FastMCP 2.0 Integration with Claude Desktop & Cursor IDE

To equip your coding assistants with live epistemic verification, configure the FastMCP 2.0 server substrate:

### Configuration Manifest (`claude_desktop_config.json`)
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

| FastMCP Tool Name | Arguments | Execution Purpose | Return Type |
| :--- | :--- | :--- | :--- |
| `credence_check_url` | `url`, `profile`, `thinking_budget` | Audit webpage credibility | JSON Attestation Receipt |
| `credence_audit_text` | `text`, `profile` | Audit raw text or clipboard snippet | Grounded Violation Cards |
| `credence_get_quota_status`| *None* | Check token headroom & budget | Remaining Token Capacity |

---
## Configuring AI Coding Assistants with Credence FastMCP

Step-by-step setup guide for integrating Credence tools into Claude Desktop and Cursor IDE workflows.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **03 Claude Cursor Fastmcp**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **03 Claude Cursor Fastmcp** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "03_claude_cursor_fastmcp" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
