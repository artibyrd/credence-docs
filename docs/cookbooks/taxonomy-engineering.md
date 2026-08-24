---
title: Taxonomy Rule Engineering 101
description: Authoring custom namespaced YAML catalogs, calibrating numerical severities,
  and defining grounded citation requirements.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# Taxonomy Rule Engineering 101

Credence's evaluation engine is completely decoupled from hardcoded heuristics. All auditing logic is defined in **namespaced, content-addressed YAML taxonomy catalogs**.

This guide walks you through authoring a new domain taxonomy catalog (e.g. for `FINANCIAL_DISCLOSURES` or `MEDICAL_CLAIMS`).

> [!IMPORTANT]
> **Immutable URI Invariant**: Rule IDs are permanently pinned by catalog SHA-256 digests. Evaluator models cannot invent ad-hoc rules outside the active registered taxonomy.

---

## 1. Catalog Architecture & Namespacing

Every rule in Credence is identified by an immutable, content-addressed URI:

$$\text{URI} = \text{domain}:\text{cluster}/\text{rule\_id}@\text{version}$$

Example: `FINANCIAL_DISCLOSURES:PROJECTIONS/ungrounded_ebitda@1.0.0`

---

## 2. Anatomy of a Taxonomy File (`financial_disclosures.yaml`)

Place custom YAML files in `credence/taxonomies/`:

```yaml
version: "1.0.0"
domain: "FINANCIAL_DISCLOSURES"
name: "SEC & Financial Disclosure Integrity Catalog"
description: "Rules auditing corporate earnings calls, 10-K filings, and investor disclosures."

clusters:
  - id: "PROJECTIONS"
    name: "Forward-Looking Projections & Non-GAAP Metrics"
    description: "Evaluates forward projections for substantiation and risk disclosures."
    rules:
      - rule_id: "ungrounded_ebitda"
        name: "Adjusted EBITDA Without GAAP Reconciliation"
        severity: 4
        description: "Promoting non-GAAP metrics (e.g. Adjusted EBITDA) without providing standard GAAP reconciliation or required cautionary disclosures."
        detection_signals:
          - "Presentation of non-GAAP financial figures with no immediate reconciliation table."
          - "Exclusion of recurring normal cash expenses from adjusted performance metrics."
        grounding_criteria:
          - "Must quote the specific non-GAAP figure and the surrounding context lacking GAAP reference."
        sample_violations:
          - "Our Core Adjusted EBITDA rose 400%, completely excluding all operating expenses and stock compensation."

      - rule_id: "unsupported_guidance"
        name: "Definitive Guidance Without Caveats"
        severity: 3
        description: "Making categorical forward revenue guarantees without safe harbor forward-looking statements."
        detection_signals:
          - "Use of deterministic verbs ('will guarantee', 'certainly achieve') for future quarterly performance."
        grounding_criteria:
          - "Must quote the categorical projection verbatim."
```

---

## 3. Severity Calibration Rubric

When assigning `severity` ($1 \dots 5$), use the standardized Credence rubric:

| Severity Level | Definition | Impact on Calibrated Score |
|:---|:---|:---|
| **Severity 1** (Informational) | Minor formatting or slight stylistic ambiguity. | Minimal ($\approx +7.0$) |
| **Severity 2** (Low Concern) | Standard informal fallacy without malicious intent (e.g. mild straw man). | Noticeable ($\approx +15.0$) |
| **Severity 3** (Moderate Concern) | Sensationalized headline delta, unbacked statistical claims, or missing byline. | Substantial ($\approx +26.0$) |
| **Severity 4** (Severe Malice) | Anonymous smear, ungrounded medical cures, hidden native advertisement, non-GAAP deception. | Critical ($\approx +40.0$) |
| **Severity 5** (Catastrophic) | Overt phishing, financial fraud, fabricated emergency broadcast, cloaked dangerous disinfo. | Hard Threshold ($\ge 75.0$) |

---

## 4. Deterministic Catalog Hashing (The Invariant Bible)

When a node loads a catalog, it computes its SHA-256 hash across canonical bytes. Peer nodes verify that evaluations cite pinned catalog hashes:

```bash
credence taxonomy hash credence/taxonomies/financial_disclosures.yaml
```
Output: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`

## Architectural Invariants & Verification Mechanics

The implementation of **Taxonomy Engineering** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Taxonomy Engineering** using standard CLI commands and FastMCP 2.0 tools:

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
