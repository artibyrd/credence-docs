---
title: Medical & Health Claim Auditing Blueprint
description: Threat model, PubMed grounding verification, clinical trial taxonomy, and specialist evaluation rubrics for biomedical prose.
since_version: v1.10.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 2
---

> **Note**: Medical & Health Claim Auditing Blueprint

This blueprint specifies the forensic auditing architecture, specialized clinical taxonomies, and source-grounding mechanics used by Credence to evaluate health, biomedical, and pharmaceutical assertions.

---

## 1. The Medical Evaluation Threat Model

Medical and wellness misinformation poses acute physical harm. Deceptive health publishers employ sophisticated psychological framing:
1. **Miracle Cure SEO Bait**: Promoting unapproved supplements as cures for severe chronic conditions (cancer, diabetes, Alzheimer's).
2. **Pseudoscientific Extrapolation**: Citing *in vitro* or rodent cell studies as definitive human clinical proof.
3. **Correlation-to-Causation Fallacies**: Presenting uncontrolled observational cohort correlations as causal medical treatment protocols.
4. **Undisclosed Affiliate Commercial Camouflage**: Recommending proprietary wellness products with hidden affiliate commissions disguised as unbiased health advice.

```
 Inbound Health Article
           |
           ▼
| 1. Biomedical Entity & Claim Extraction                |
|    • Identifies disease entities, treatments, dosages  |
                           |
                           ▼
| 2. Clinical Trial & PubMed Grounding Verification      |
|    • Cross-references PMID, Cochrane, FDA status       |
                           |
                           ▼
| 3. Specialized IEP-MED Taxonomy Scoring                |
|    • IEP-MED-1: Uncontrolled In-Vitro Extrapolation    |
|    • IEP-MED-2: Unsubstantiated Therapeutic Claim     |
|    • IEP-MED-3: Hidden Commercial Affiliate Conflict   |
                           |
                           ▼
| 4. Calibrated Epistemic Health Verdict & Attestation   |
```

---

## 2. Specialized Clinical Taxonomy Rules (`IEP-MED`)

Medical evaluations enforce strict domain-specific rules from the Institute for Epistemic Purity (IEP):

| Rule Code | Severity | Name | Forensic Description |
| :--- | :---: | :--- | :--- |
| `IEP-MED-1` | **HIGH** | In-Vitro Over-Extrapolation | Extrapolating petri dish or mouse model findings to clinical human efficacy without disclosure. |
| `IEP-MED-2` | **CRITICAL** | Fabricated Therapeutic Cure | Claiming an unapproved substance cures, prevents, or reverses severe medical illness. |
| `IEP-MED-3` | **HIGH** | Hidden Commercial Sourcing | Recommending specific commercial supplements without clear FTC affiliate disclosure. |
| `IEP-MED-4` | **MEDIUM** | Missing Dosage/Adverse Warning | Promoting pharmacologically active compounds while omitting known contraindications. |
| `IEP-MED-5` | **MEDIUM** | Anecdotal Generalization | Presenting individual patient testimonials as statistically valid clinical evidence. |

---

## 3. Example CLI Audit & FastMCP Invocation

```bash
# Audit an online health article with clinical specialist profile
$ credence audit https://example-health-blog.com/miracle-compound-cure --profile ultra --thinking-budget 4096

# Output:
# [SUSPICIOUS] Suspicion Score: 78.4 / 100
# Violations (2):
#   - [IEP-MED-2: CRITICAL] "Compound X reverses stage 4 tumor growth in 3 weeks" (Ungrounded claim)
#   - [IEP-MED-1: HIGH] Cited study (PMID 382910) was conducted on murine cell cultures, not human trials.
```

---

## 4. PubMed & Cochrane Citation Grounding

For any document asserting therapeutic efficacy, Credence verifies that cited PubMed IDs (PMID) or DOIs match character-for-character with source DOM elements ($G=1.00$) and verifies study methodology (Meta-Analysis, Randomized Controlled Trial, vs. Observational).

---

## 5. Related Protocols & Blueprints

* 📘 [The Invariant Bible](../invariants.md) — Namespaced Fixed Taxonomies
* 📐 [Mathematical Scoring Calibration](../protocols/scoring.md)
* 🏛️ [Autonomous Standards Ratification Blueprint](autonomous-standards-ratification-and-governance.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Health Medical Claims** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Health Medical Claims** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blueprints"

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