---
title: Verbatim Grounding Mechanics & Slashing
description: How exact character substring offsets, whitespace collapsing, and 50%
  reputation slashes eliminate model hallucinations.
since_version: v1.0.0
verified_version: v2.17.0
last_verified: 2026-08-25
---

# Verbatim Grounding Mechanics & Slashing

The fundamental vulnerability of LLM-based evaluation is **hallucination**: models frequently fabricate plausible-sounding quotes or misattribute statements to justify findings.

In Credence, an evaluation that cannot cite exact, verifiable substrings from the source document is mathematically invalid ($G < 1.0$).

### Grounding Precision & Reputation Matrix

| Grounding Precision ($G_i$) | Attestation Status | Consensus Action | Reputation Impact |
| :--- | :--- | :--- | :--- |
| **$G = 1.00$** | ✅ **VERIFIED** | Admitted to Weighted Median & Galileo Pool | $+0.05$ Key Stability & Node Quality |
| **$0.75 \le G < 1.00$** | ⚠️ **PROBATION** | Local Warning, Secondary Specialist Audit | No penalty, marked for review |
| **$G < 0.75$** | ❌ **HALLUCINATED** | **Immediate Rejection** from Consensus | **50% Slashing Penalty ($W_i \leftarrow 0.5 W_i$)** |

---

## 1. The Grounding Precision Metric ($G_i$)

For any specialist audit reporting $K$ itemized rule violations $\{v_1, v_2, \dots, v_K\}$:

$$G_i = \frac{\sum_{k=1}^K \mathbb{I}(\text{quote}_k \in \text{DOM}_{\text{clean}})}{K}$$

Where:
- $\mathbb{I}(\cdot) \in \{0, 1\}$ is an exact substring indicator.
- $\text{DOM}_{\text{clean}}$ is the NFKC-normalized, whitespace-collapsed source prose.

---

## 2. Whitespace-Insensitive Character Indexing (The Invariant Bible)

Web typography often contains inconsistent linebreaks, non-breaking spaces (`&nbsp;`), and variable indentation.

To ensure robust matching without fuzzy string degradation:
1. **Collapsing**: All contiguous whitespace sequences in both the candidate citation and the source DOM are collapsed to a single ASCII space (`0x20`):
   $$\text{normalize}(S) = \text{re.sub}(r'\backslash s+', '\ ', \text{unicodedata.normalize}('NFKC', S)).\text{strip}()$$
2. **Exact Matching**: The validator executes exact case-sensitive substring location.
3. **Offset Calculation**: If matched, character start/end index offsets (`start_char`, `end_char`) are recorded in the attestation payload.

---

## 3. The 50% Hallucination Slash (The Invariant Bible)

If a node submits a single audit finding with a fabricated quote where $G_i < 0.75$:

1. **Gate Rejection**: The finding is rejected by the local quality gate and never admitted into consensus.
2. **Escalation**: Local evaluator nodes trigger a high-thinking re-evaluation with Gemini 3.7 Flash.
3. **P2P Gossip Slashing**: Peer nodes tracking evaluator reputation slash that node's historical authority score ($W_i$) by **50% across all domains**.

---
## The Mathematics of $G=1.00$ Verbatim Grounding

Every citation generated during an audit must match the normalized source DOM character-for-character:

$$G = \frac{\sum_{i=1}^{m} \text{len}(\text{verbatim\_quote}_i)}{\sum_{i=1}^{m} \text{len}(\text{claimed\_assertion}_i)} = 1.00$$

| Grounding Ratio ($G$) | Severity Assessment | System Action |
| :---: | :--- | :--- |
| **$G = 1.00$** | **Certified Pristine** | Mint signed Ed25519 attestation receipt |
| **$0.90 \le G < 1.00$** | Minor Ellipsis / Paraphrase | Warning attached; node enters 14-day probation |
| **$G < 0.90$** | **Hallucination / Fabrication**| **Autonomous 50% Concordance Slash Penalty** |

---
## Character-for-Character Citation Grounding Guarantees

Mandatory $G=1.00$ grounding ensures every audit finding is directly supported by verbatim text in the source webpage.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```
