---
title: "Universal Agent Interoperability (Claude, Cursor, Cline, Windsurf)"
description: "Connecting Credence FastMCP 2.0 to Claude Desktop, Cursor, Windsurf, Cline, LangGraph, and CrewAI without vendor lock-in."
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
