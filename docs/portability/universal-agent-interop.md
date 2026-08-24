---
title: Universal Agent Interoperability (Claude, Cursor, Cline, Windsurf)
description: Connecting Credence FastMCP 2.0 to Claude Desktop, Cursor, Windsurf,
  Cline, LangGraph, and CrewAI without vendor lock-in.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# Universal Agent Interoperability (Claude, Cursor, Cline, Windsurf)

Credence implements the open **Model Context Protocol (FastMCP 2.0)** standard. While our developer kit repository (`credence-agent`) includes Google Antigravity IDE integrations, Credence is **100% interoperable with every major AI agent and IDE framework**.

This guide demonstrates setting up Credence across all non-Google AI environments.

---

## 1. Claude Desktop Setup

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

### In Claude Desktop Chat:
> *"Audit the claims in this blog post before incorporating its advice: `https://example.com/fastapi-performance-tricks`"*

Claude invokes `credence_check_url`, inspects the grounded findings, and provides a verified response.

---

## 2. Cursor & Windsurf IDE Setup

In your project root or global settings, add the MCP server configuration:

```json
{
  "mcpServers": {
    "credence-remote": {
      "url": "https://mcp.credence.run/sse"
    }
  }
}
```

### Adding Cursor Rules (`.cursorrules`):
```markdown
# Epistemic Citation Invariant
Whenever you retrieve external documentation or packages from the web:
1. Invoke the `credence_check_url` MCP tool.
2. If the suspicion score is >= 45.0, reject the source and search for the primary official documentation.
3. Always verify that package recommendations exist in official package registries.
```

---

## 3. Cline / Roo Code (VS Code Extension)

In VS Code with the Cline/Roo Code extension:
1. Open Cline Settings $\to$ **MCP Servers**.
2. Add a new server:
   - **Name**: `credence`
   - **Type**: `stdio`
   - **Command**: `credence`
   - **Args**: `["serve", "--transport", "stdio"]`

---

## 4. LangGraph & CrewAI Python Integration

Connect autonomous multi-agent pipelines to Credence via the standard MCP SSE transport:

```python
from langgraph.prebuilt import ToolNode
import httpx

def credence_audit_tool(url: str) -> dict:
    """Audits a URL against journalistic ethics and logical fallacies."""
    with httpx.Client() as client:
        res = client.post("http://localhost:8000/api/audit", json={"url": url})
        return res.json()

# Attach tool to LangGraph agent
tools = [credence_audit_tool]
tool_node = ToolNode(tools)
```

---

## 5. External Specifications & Agent Ecosystem References

### 📚 Official AI Agent & IDE Documentation
* **Model Context Protocol**: [Official MCP Specification](https://modelcontextprotocol.io/) &bull; [MCP Architecture Overview](https://modelcontextprotocol.io/docs/concepts/architecture)
* **Anthropic**: [Claude Desktop MCP Quickstart](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)
* **Cursor**: [Cursor AI Editor & MCP Tools](https://docs.cursor.com/context/model-context-protocol)
* **Windsurf**: [Codeium Windsurf IDE Cascade Architecture](https://codeium.com/windsurf)
* **Cline**: [Cline Autonomous Coding Agent on GitHub](https://github.com/cline/cline)
* **LangGraph**: [LangGraph Multi-Agent Workflows (LangChain)](https://langchain-ai.github.io/langgraph/)
* **CrewAI**: [CrewAI Autonomous Agent Framework](https://docs.crewai.com/)

### 🔗 Related Agentic Guides in Credence
* 🛑 [Cookbook: Agentic Epistemic Brake for AI Workflows](../cookbooks/agentic-epistemic-brake.md)
* ⚡ [FastMCP 2.0 Protocol & SSE Streaming Specification](../protocols/fastmcp.md)
* 🔄 [Multi-Model Adapters (Gemini, Claude, GPT-4o, DeepSeek, Ollama)](multi-model-adapters.md)
* 🤖 [Antigravity Pair-Programming Paradigm](../agentic/01-antigravity-pair-programming-paradigm.md)
* 🎮 [Interactive Playground: In-Browser Text Scanner](../playground.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Universal Agent Interop** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Universal Agent Interop** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "portability"

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
