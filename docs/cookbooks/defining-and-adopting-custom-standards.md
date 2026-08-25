---
title: Defining & Adopting Custom Standards in Credence
description: Complete operator and researcher handbook for authoring epistemic rule catalogs, executing the synthetic benchmark gauntlet, and achieving autonomous decentralized mesh adoption.
since_version: v2.16.0
verified_version: v2.16.7
last_verified: 2026-08-24
---

# Defining & Adopting Custom Standards in Credence

Credence's evaluation engine is completely decoupled from hardcoded heuristics. Every audit rule—from universal journalistic ethics to niche municipal zoning regulations—is defined as an **RFC Standard Catalog** with deterministic Content-Addressed Storage (CAS) pinning.

Unlike legacy standards bodies that rely on slow human committees and manual political ballots, **Credence standards are adopted and evolved autonomously by running nodes** through empirical math, adversarial synthetic benchmarking, background mesh shadow trials, and cryptographic Ed25519 quorum voting.

---

## 1. The 3-Tier Standards Hierarchy

Epistemic standards in Credence operate across three distinct tiers:

| Tier | Scope & Standards | Ratification Quorum & Authority |
| :--- | :--- | :--- |
| **🏛️ Tier 0: Universal General** | SPJ Journalistic Ethics, IEP Logical Fallacies, Deceptive UI Dark Patterns | Global Byzantine Quorum $\ge 66.7\%$ across active anchors ($N \ge 3f + 1$) |
| **🔬 Tier 1: Domain Specialist** | SEC 10-K Disclosures, Clinical Medicine Trials, Municipal Regulations | Domain Expertise-Weighted Median $\ge 70.0\%$ among verified authority nodes |
| **🏢 Tier 2: Sovereign Niche** | Municipal Conflict Disclosures, Enterprise Custom Policies | Sponsoring Organization Sovereign Ed25519 Root Key |

### Tier 0: Universal General Standards
- **Scope**: Universal baseline principles of empirical truth, journalistic ethics ([SPJ](https://www.spj.org/ethicscode.asp)), formal logic ([IEP](https://iep.utm.edu/fallacy/)), and consumer protection against deceptive UI dark patterns.
- **Ratification Threshold**: Global Byzantine Quorum $\ge 66.7\%$ across all active network anchors ($N \ge 3f + 1$).
- **Primacy Invariant**: Specialist and niche standards cannot override or weaken Tier 0 protections.

### Tier 1: Domain Specialist Catalogs
- **Scope**: Rigorous technical standards requiring verified subject-matter expertise (e.g. SEC non-GAAP reconciliations in finance, Phase III double-blind trial claims in clinical medicine).
- **Ratification Threshold**: Expertise-Weighted Median Consensus $\ge 70.0\%$ among verified domain authority nodes ($E_i$).

### Tier 2: Sovereign Niche & White-Label Rules
- **Scope**: Organization-specific or municipal policies (e.g. InMaricopa municipal conflict-of-interest disclosures, enterprise internal communication standards).
- **Ratification Threshold**: Signed Ed25519 attestation from the sponsoring organization's root sovereign key (`credence init-org`).

---

## 2. The 5-Stage Autonomous Ratification Pipeline

Every standard advances through five automated stages:

| Stage | Target Lifecycle Event | Gate & Acceptance Criteria |
| :--- | :--- | :--- |
| **1. DRAFT** | YAML Catalog Authoring | $\ge 2$ distinct detection signals per rule, severity 1..5 |
| **2. PROPOSED** | AST Schema Gate (<0.3s) | Strict PyYAML AST syntax & schema validation pass |
| **3. CANDIDATE** | Synthetic Benchmark Gauntlet | $\mathcal{F}_1 \ge 0.87$, $\text{Precision} \ge 0.90$, $\text{Recall} \ge 0.85$, $\text{FPR} = 0.00\%$ |
| **4. SHADOW / VOTE**| Mesh Shadow Trial & Attestation | 500-audit live mesh canary + Signed Ed25519 envelopes |
| **5. RATIFIED** | CAS Hot-Reload Pinning | Byzantine / Domain-Weighted Quorum met $\rightarrow$ Hot-Reload into registry |

1. **Stage 1 (AST Schema Gate)**: Validates required YAML fields (`domain`, `name`, `clusters`, `rules`), enforces $\ge 2$ distinct detection signals per rule, and verifies severity ratings (1–5) in $<0.3\text{s}$.
2. **Stage 2 (Synthetic Benchmark Gauntlet)**: Evaluates candidate rules against positive test fixtures and the immutable **Golden Control Corpus**. Hard acceptance gates:
   $$\mathcal{F}_1 \ge 0.87, \quad \text{Precision} \ge 0.90, \quad \text{Recall} \ge 0.85, \quad \text{FPR} = 0.00\%, \quad G = 1.00$$
3. **Stage 3 (Mesh Shadow Trials)**: Nodes run the candidate standard in the background on live RSS/Atom feeds (500 audits) with a **1-canary concurrency cap** and **$\ge 40\%$ token headroom floor** to ensure zero disruption to production audits.
4. **Stage 4 (Deterministic Node Attestation Quorum)**: Nodes evaluate shadow scorecards and sign RFC 8785 canonical JSON vote envelopes with Ed25519 keys.
5. **Stage 5 (Hot-Reload Pinning)**: Ratified catalogs are assigned a sequential SemVer (e.g. `v1.0.0`), pinned to content-addressed storage (CAS), and hot-reloaded across the mesh without server restart.

---

## 3. Step-by-Step: Authoring a Specialist Standard (`financial_disclosures.yaml`)

### Step 1: Write the Catalog YAML

Create `taxonomies/financial_disclosures.yaml`:

```yaml
catalog_id: "financial_integrity"
domain: "FINANCIAL_DISCLOSURES"
name: "SEC Financial Disclosure Integrity Standard"
version: "1.0.0"
description: "Rules auditing corporate earnings releases, non-GAAP metrics, and investor presentations."

clusters:
  - cluster_id: "NON_GAAP"
    name: "Non-GAAP Metric Disclosures"
    description: "Evaluates adjusted non-GAAP figures against GAAP requirements."
    rules:
      - rule_id: "FIN-1.1"
        name: "Missing GAAP Reconciliation Table"
        severity: 4
        description: "Promoting non-GAAP metrics (e.g. Adjusted EBITDA) without providing standard GAAP reconciliation or required cautionary disclosures."
        detection_signals:
          - "Presentation of non-GAAP financial figures with no immediate reconciliation table."
          - "Exclusion of recurring normal cash expenses from adjusted performance metrics."
        evidence_guidelines: "Must quote the specific non-GAAP figure and identify the absence of GAAP reconciliation."

      - rule_id: "FIN-1.2"
        name: "Unsubstantiated Revenue Guidance"
        severity: 3
        description: "Publishing definitive revenue growth guidance without citing underlying operational drivers or risk factors."
        detection_signals:
          - "Definitive multi-year growth forecasts presented as certainties."
          - "Omission of Item 1A forward-looking risk qualification."
        evidence_guidelines: "Must quote the definitive forecast sentence."
```

### Step 2: Create Test Fixtures (`fixtures.json`)

```json
[
  {
    "id": "fix_fin_01",
    "expected_violations": ["FIN-1.1"],
    "detected_violations": ["FIN-1.1"]
  },
  {
    "id": "fix_fin_02",
    "expected_violations": ["FIN-1.2"],
    "detected_violations": ["FIN-1.2"]
  },
  {
    "id": "fix_fin_clean",
    "expected_violations": [],
    "detected_violations": []
  }
]
```

### Step 3: Validate AST Schema Locally

```bash
credence rfc validate taxonomies/financial_disclosures.yaml
```

Output:
```
✓ Validation Passed (2 rules across 1 clusters)
  Domain: FINANCIAL_DISCLOSURES | Version: v1.0.0
  Catalog SHA-256: sha256:7a8b9c...
```

### Step 4: Run the Synthetic Benchmark Gauntlet

```bash
credence rfc benchmark taxonomies/financial_disclosures.yaml --fixtures fixtures.json
```

Scorecard:
╭---------------------------- Synthetic Benchmark Gauntlet Scorecard ----------------------------╮
Metric                | Observed Value | Required Threshold | Status
F1 Score              | 1.0000         | >= 0.8700          | PASS
Precision             | 1.0000         | >= 0.9000          | PASS
Recall                | 1.0000         | >= 0.8500          | PASS
Golden Control FPR    | 0.0000         | == 0.0000          | PASS
Verbatim Grounding (G)| 1.00           | == 1.00            | PASS
✓ Standard Passed Synthetic Benchmark Gauntlet

---

## 4. Submitting and Voting via CLI, FastMCP & Web

### CLI Interface
```bash
# List all active and candidate standards
credence rfc list --tier specialist

# Inspect standard specification and rules
credence rfc show RFC-001

# Cast signed Ed25519 vote attestation
credence rfc vote RFC-001 --approve
```

### FastMCP 2.0 Interface
AI agents can interact with governance directly through MCP:
```python
# FastMCP Tools
await mcp.call_tool("credence_list_rfcs", {"tier": "specialist"})
await mcp.call_tool("credence_get_rfc", {"rfc_id": "RFC-001"})
await mcp.call_tool("credence_validate_standard", {"yaml_content": yaml_text})
await mcp.call_tool("credence_benchmark_standard", {"yaml_content": yaml_text, "fixtures_json": fixtures})

# FastMCP Resources
content = await mcp.read_resource("credence://governance/rfcs")
detail = await mcp.read_resource("credence://governance/rfcs/RFC-001")
```

### Web Governance Workstation
Visit [https://credence.foundation/#governance](https://credence.foundation/#governance) to paste candidate YAML into the interactive validator, run simulated gauntlet benchmarks, and verify cryptographic vote attestations client-side via WebCrypto.

---

## 5. Temporal Trajectory DAG & Immutability

When standards evolve (e.g. `v1.0.0` $\rightarrow$ `v2.0.0`):
1. **Historical Receipts Remain Bit-for-Bit Verifiable**: Past audits signed under `v1.0.0` maintain their original catalog SHA-256 hash forever.
2. **DAG Leaf Append**: Re-auditing an existing article under `v2.0.0` appends a new snapshot leaf to the temporal SQLite DAG, tracking score velocity ($\Delta S$) and SimHash Hamming distance deltas without overwriting historical receipts.
3. **Deprecation Highway**: Retired standards maintain an explicit `superseded_by` pointer for seamless migration.
