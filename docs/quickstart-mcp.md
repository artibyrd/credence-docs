---
title: "Quickstart: FastMCP 2.0 AI Assistant (Claude & Cursor)"
description: "Equip Claude Desktop, Cursor IDE, Antigravity, and AI swarms with Credence real-time fact checking and the Epistemic Brake in under 60 seconds."
since_version: v2.22.0
verified_version: v2.22.0
last_verified: 2026-09-14
---

# Quickstart: FastMCP 2.0 AI Assistant (Claude & Cursor) ⚡

Equip your AI pair programmer (Claude Desktop, Cursor IDE, Antigravity, or Cline) with real-time fact-checking and hallucination defense in **under 60 seconds**.

---

## 🎯 What FastMCP 2.0 Delivers

AI assistants are extraordinary at writing code and analyzing arguments, but they can hallucinate plausibly sounding citations, adopt promotional PR astroturfing as objective reality, or cite unverified web claims without skepticism.

**FastMCP 2.0** turns Credence into an in-editor **Epistemic Brake**:

1. **The In-IDE Epistemic Brake**: When your AI assistant browses external documentation, reviews dependencies, or investigates claims, it halts execution when encountering ungrounded claims and verifies the underlying source text before accepting it into its context window.
2. **`credence_check_url`**: Dispatches real-time evaluations to the Credence network. It checks articles against standardized journalism codes (SPJ), logical fallacies (IEP), and deceptive patterns. Every finding is character-grounded ($G=1.00$) against the original DOM text.
3. **`credence_verify_and_anchor`**: Automatically anchors verified sources directly into your local git-tracked markdown notes or documentation, cryptographically signed with an Ed25519 attestation.
4. **Zero-Token Local Cache Fastpath**: If an article or claim has already been evaluated by the network, FastMCP returns an instant consensus receipt without burning LLM context window tokens or incurring API costs.

---

## 🚀 60-Second Setup: Choose Your Connection Mode

You can connect your IDE to Credence using either our public hosted remote endpoint (zero local Python required) or a local runtime.

:::tabs
=== Option A: Public Remote Endpoint (Zero Local Install)
Connect directly to the public Credence network over Server-Sent Events (SSE). No Python or local binaries required:

* **Transport**: `sse`
* **URL**: `https://credence.run/sse` (or dev environment `https://credence-dev-865363499314.us-central1.run.app/sse`)

=== Option B: Zero-Install Local CLI (via uvx)
Run the local FastMCP server on demand using `uvx` (part of the Astral `uv` toolchain). No permanent package installation needed:

```bash
uvx credence serve --mcp
```

=== Option C: Installed Credence CLI
If you installed Credence via the POSIX installer (`curl -fsSL https://credence.run/install.sh | bash`):

```bash
credence serve --mcp
```
:::

---

## 💻 Drop-In IDE Configurations

Copy and paste the configuration snippet for your environment below.

### 1. Claude Desktop Setup

Open your Claude Desktop configuration file:
* **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Linux**: `~/.config/Claude/claude_desktop_config.json`
* **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the `credence` server entry:

:::tabs
=== Stdio Runner (Recommended)
```json
{
  "mcpServers": {
    "credence": {
      "command": "uvx",
      "args": ["credence", "serve", "--mcp"],
      "env": {
        "CREDENCE_MODEL_API_KEY": "<your-model-api-key>"
      }
    }
  }
}
```

=== Remote SSE (Zero Local Python)
```json
{
  "mcpServers": {
    "credence": {
      "url": "https://credence.run/sse"
    }
  }
}
```
:::

> 💡 **Model-Agnostic & Zero-Cost Modes**: Credence supports any major model provider (`CREDENCE_MODEL_API_KEY`, or provider-specific keys like `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `DEEPSEEK_API_KEY`) as well as local Ollama instances (`OLLAMA_HOST`). If no key is provided, Credence automatically executes in **100% offline heuristic mode** ($0.00 spend) using deterministic structural rules.

### 2. Cursor IDE Setup

1. Open Cursor Settings and navigate to **Features** → **MCP Servers**.
2. Click **+ Add New MCP Server**.
3. Fill in the connection settings:
   - **Name**: `credence`
   - **Type**: `command`
   - **Command**: `uvx credence serve --mcp`
4. Click **Save**. The status indicator will turn green once connected.

### 3. Google Antigravity & Agent Swarms

For autonomous agents using the Google Antigravity SDK, register the Credence FastMCP server in your agent configuration:

```json
{
  "mcp_servers": {
    "credence": {
      "command": "credence",
      "args": ["serve", "--mcp"]
    }
  }
}
```

---

## 🔍 Testing Your First Audit Inside the Editor

Once configured, restart your AI assistant or refresh MCP tools. You will see `credence_check_url` and `credence_verify_and_anchor` in your active tool list.

### Prompt Your Assistant

Try prompting your assistant with a live news story or research claim:

> *"Claude, check the credibility of this article using Credence: https://example.com/breaking-news"*

### What You Will Receive Back

Your assistant receives a structured JSON payload containing:
* **Classification**: `FACTUAL_REPORTING`, `SATIRE`, `OPINION`, or `UNTRUSTED`.
* **Suspicion Score**: Continuous scale from `0.00` (Pristine) to `1.00` (High Suspicion).
* **Grounding Evidence ($G=1.00$)**: Exact character-offset quotes extracted verbatim from the original text showing where bias, unnamed sources, or fallacies occurred.
* **Cryptographic Attestation**: Ed25519 signature from the auditing node, verifiable against public keys.

---

## 🌐 How FastMCP Overlaps with the Network

FastMCP 2.0 is the **consumer tier** of the Credence network:

![Figure 2.1: Tripartite consensus topology illustrating consumer demand, coordinator mempool dispatch, and volunteer worker attestation](assets/illustrations/mempool-worker-consensus.svg)

1. When you request an audit, FastMCP checks the coordinator's edge cache.
2. If the URL was recently audited, you receive an instant response in milliseconds.
3. If the URL is novel, the coordinator automatically places an audit bounty on the **Open Epistemic Mempool**. Distributed volunteer workers claim the job, evaluate it using diverse models, and post signed attestations back to the coordinator.

---

## 🎓 The Credence Graduation Path

FastMCP is the easiest way to consume verified truth. As your needs expand, you can seamlessly graduate to higher levels of participation in the ecosystem:

| Graduation Step | Why Graduate? | Next Quickstart Guide |
| :--- | :--- | :--- |
| **Contribute as a Worker** | Not getting audits fast enough on fresh or obscure links? Want to donate spare compute and earn merit badges? | [Quickstart: Volunteer Worker](quickstart-worker.md) |
| **Host a Sovereign Node** | Have an entire engineering team running audits? Need private caching, custom ethics taxonomies, or full local autonomy? | [Quickstart: Sovereign Node](quickstart-node.md) |

---

## 🔗 Related Specifications & System Invariants

* 📖 [The Credence Graduation Path Hub](quickstart.md): Complete overview of the 3 roles and network architecture.
* 🤖 [FastMCP 2.0 Protocol Specification](protocols/fastmcp.md): Technical RPC details, SSE endpoints, and tool schemas.
* 🛡️ [System Invariant: Untrusted Ingestion](invariants.md#inv-untrusted-ingestion): Security constraints on external content ingestion.
* 👁️ [System Invariant: Verbatim Anti-Truncation](invariants.md#inv-verbatim-anti-truncation): The zero-ellipsis character grounding standard ($G=1.00$).
