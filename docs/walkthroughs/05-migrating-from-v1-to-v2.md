---
title: 'Walkthrough: Migrating from v1.x to v2.0.0'
description: Step-by-step migration guide for upgrading custom scripts, programmatic
  agents, and MCP client configurations to Credence v2.0.0.
since_version: v2.0.0
verified_version: v2.0.0
---

# Walkthrough: Migrating from v1.x to v2.0.0

Credence **v2.0.0** introduces a modular architecture, standardized `compute_*` naming ontology, and enhanced FastMCP 2.0 tool registrations. This guide walks you through migrating existing configurations and client code.

---

## 1. Summary of Breaking Changes

1. **Calculation Naming Standardization**: All `calculate_*` and `calc_*` functions have been renamed to `compute_*`.
2. **Modular CLI Dispatch**: Programmatic CLI entrypoints are centralized in `credence.cli.main` with async-native signatures.
3. **Server Subpackage Restructuring**: Internal REST and FastMCP route handlers moved into `credence.server.api.*` and `credence.server.mcp.*`.
4. **Mesh and Badge Modularization**: SVG badge generation and node longevity calculations are imported from `credence.mesh.badges`.

---

## 2. Updating Function Imports

### Calculating Topic Entropy & Epistemic Weather
```python
# ❌ Old v1.x
from credence.subjects.analytics import calculate_topic_entropy

# ✅ New v2.0.0
from credence.subjects.analytics import compute_topic_entropy
```

### Node Longevity & Uptime Decay
```python
# ❌ Old v1.x
from credence.mesh.merit import calculate_longevity_days, calculate_half_life_uptime

# ✅ New v2.0.0
from credence.mesh.badges import compute_longevity_days, compute_half_life_uptime
```

### Bayesian Consensus Evaluation
```python
# ❌ Old v1.x
aggregator = BayesianConsensusAggregator()
consensus = aggregator.calculate_consensus(reports)

# ✅ New v2.0.0
aggregator = BayesianConsensusAggregator()
consensus = aggregator.compute_consensus(reports)
```

---

## 3. CLI & Programmatic Workflows

In v2.0.0, CLI commands support both command-line argument dispatch and direct async Python execution:

```python
import asyncio
from credence.cli.main import cli_audit, cli_quota

async def run_checks():
    # Run async audit
    report = await cli_audit("https://example.com/article", profile="balanced")
    print(f"Verdict: {report.classification} ({report.suspicion_score})")

    # Check remaining quota
    await cli_quota()

asyncio.run(run_checks())
```

---

## 4. MCP Server Registration

The FastMCP 2.0 server entrypoint remains 100% compatible. Ensure your Claude Desktop or Cursor configuration launches the modular engine:

```json
{
  "mcpServers": {
    "credence": {
      "command": "poetry",
      "args": ["run", "credence", "serve", "--transport", "stdio"],
      "cwd": "/path/to/credence"
    }
  }
}
```
