---
title: Verbatim Grounding Mechanics & Slashing
description: How exact character substring offsets, whitespace collapsing, and 50%
  reputation slashes eliminate model hallucinations.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

## Architectural Invariants & Verification Mechanics

The implementation of **Grounding Mechanics** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Grounding Mechanics** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "security"

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
