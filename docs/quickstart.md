---
title: "Quickstart & Installation"
description: "Get started with Credence CLI, FastMCP 2.0 server, and Textual TUI in minutes."
---

# Quickstart & Installation

Get started with the Credence CLI, FastMCP 2.0 server, and Textual TUI workstation in minutes.

---

## 1. Quick Installation

### Option A: POSIX One-Liner Install

```bash
curl -fsSL https://credence.run/install.sh | bash
```

### Option B: Local Repository Installation

```bash
git clone https://github.com/artibyrd/credence.git
cd credence
poetry install
```

---

## 2. API Key Configuration

Credence uses **Gemini 3.7 Flash** for its multi-agent evaluation pipeline. Set your API key in your shell environment:

```bash
export CREDENCE_GEMINI_API_KEY="your-gemini-api-key"
```

> **Note**: Credence includes a built-in **Token Safety Governor** that defaults to offline structural heuristic fallback if no API key is provided or when budget limits are exceeded.

---

## 3. Running Your First Audit

Audit any URL directly from your terminal:

```bash
# Basic audit with default Balanced profile (1,024 thinking tokens)
credence audit https://example.com/news-story

# Free tier audit (0 thinking tokens, fast & low cost)
credence audit https://example.com/news-story --profile free

# Ultra depth audit (8,192 thinking tokens)
credence audit https://example.com/news-story --profile ultra
```

Example terminal output:
```text
🛡️ Credence Audit: https://example.com/breaking-news
Content SHA-256: 8f4e2b...
Classification: FACTUAL_REPORTING (is_satire: False)
Suspicion Score: 0.12 (Low Suspicion)
Violations Found: 1
  - [IEP:INFORMAL/straw_man@1.0.0] Severity: 2
    Quote: "Opponents believe that everyone should lose their jobs immediately."
    Grounding: Verified (G = 1.00)
Attestation Signed: Ed25519 (Node ID: e4d9...)
```

---

## 4. Launching the Textual TUI

Launch the full-screen terminal workstation with live mesh node monitors, audit history, and real-time epidemic gossip visualizations:

```bash
credence tui
```

---

## 5. FastMCP 2.0 Integration

### Claude Desktop Configuration

Add Credence to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "credence": {
      "command": "credence",
      "args": ["mcp", "stdio"],
      "env": {
        "CREDENCE_GEMINI_API_KEY": "your-gemini-api-key"
      }
    }
  }
}
```

### FastMCP SSE Server

Start the standalone SSE server for remote AI agents and browser clients:

```bash
credence serve --transport sse --port 8000
```
Connect via `http://localhost:8000/sse`.

---

## 6. Verification Suite

Run the hermetic test suite to verify your local installation:

```bash
just test
```
All 144 unit and mesh tests execute hermetically in under 65 seconds with zero external network dependencies.
