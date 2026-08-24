---
title: Auditing Financial Disclosures & 10-K Filings
description: Using the ULTRA profile (16k thinking tokens) to audit SEC 10-K filings,
  earnings calls, and corporate releases.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

Corporate press releases and quarterly SEC filings often contain evasive phrasing, non-GAAP exclusions, ungrounded forward projections, and disguised conflicts of interest.

This cookbook shows how to use **Credence with the ULTRA operational profile** to execute deep syllogistic reasoning audits on financial texts.

---

## 1. Why the ULTRA Profile Matters for Finance

While the `BALANCED` profile (1,024 thinking tokens) excels at everyday journalism and dark patterns, financial audits require **deep chain-of-thought reasoning**:
- Correlating footnote disclosures with top-line GAAP operating income.
- Detecting subtle non-sequiturs in CEO answers during earnings call Q&A sessions.
- Identifying cherry-picked time horizons in performance graphs.

The `ULTRA` profile allocates up to **16,384 thinking tokens** on Gemini 3.7 Flash to exhaustively trace logical entailments before outputting findings.

---

## 2. CLI Audit of an SEC Filing or Earnings Transcript

```bash
# Audit an online SEC 10-K filing or earnings call transcript
credence audit https://www.sec.gov/edgar/data/.../10-k.htm \
  --profile ULTRA \
  --taxonomy financial_disclosures
```

### Auditing Raw Text / Local PDF Transcripts:

```bash
credence audit \
  --file ./transcripts/q3-earnings-call.txt \
  --profile ULTRA \
  --title "Acme Corp Q3 2026 Earnings Call"
```

---

## 3. Sample Financial Findings Output

```text
============================================================
Credence Financial Epistemic Audit Report
Target: Acme Corp Q3 2026 Earnings Call Transcript
Cost Profile: ULTRA (12,450 Thinking Tokens Consumed)
============================================================

Overall Suspicion Score: 68.4 / 100 [SUSPICIOUS]
Violation Density: 3.8 / 1k words
Citation Grounding: 100% (G = 1.0)

Key Violations:
  [FINANCIAL_DISCLOSURES:PROJECTIONS/ungrounded_ebitda@1.0.0] Severity: 4
    Quote: "Our Core Adjusted Community EBITDA grew 320% year-over-year, demonstrating exceptional unit economics."
    Rationale: Excludes recurring cloud infrastructure hosting fees, depreciation, and executive stock compensation without reconciliatory footnote disclosures.

  [LOGICAL_FALLACY:RELEVANCE/ad_hominem@1.0.0] Severity: 3
    Quote: "Short sellers who question our cash runway are simply bad-faith saboteurs who don't understand our industry."
    Rationale: Dismisses substantive questions regarding 6-month liquidity reserves by attacking the motives of critics rather than presenting audited balance sheet reserves.
============================================================
```

## Architectural Invariants & Verification Mechanics

The implementation of **Financial Disclosures** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Financial Disclosures** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "cookbooks"

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
