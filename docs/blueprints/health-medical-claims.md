---
title: Medical & Health Claim Auditing Blueprint
description: Threat model, PubMed grounding verification, clinical trial taxonomy, and specialist evaluation rubrics for biomedical prose.
since_version: v1.10.0
verified_version: v2.16.3
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

Inbound Health Article
1. Biomedical Entity & Claim Extraction
- Identifies disease entities, treatments, dosages
2. Clinical Trial & PubMed Grounding Verification
- Cross-references PMID, Cochrane, FDA status
3. Specialized IEP-MED Taxonomy Scoring
- IEP-MED-1: Uncontrolled In-Vitro Extrapolation
- IEP-MED-2: Unsubstantiated Therapeutic Claim
- IEP-MED-3: Hidden Commercial Affiliate Conflict
4. Calibrated Epistemic Health Verdict & Attestation

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

---
## Clinical Evidence Hierarchy & Medical Claim Verification

Medical disinformation and ungrounded health assertions pose immediate real-world dangers. Credence implements a specialized clinical evidence extraction engine aligned with peer-reviewed biomedical taxonomies:

| Clinical Hierarchy Level | Evidence Quality Standard | Epistemic Weight ($E_i$) | Grounding Requirement |
| :--- | :--- | :---: | :--- |
| **Level 1: Meta-Analysis** | Cochrane Reviews, PRISMA Systematic Reviews | $1.00$ | Verbatim DOI citation & sample size |
| **Level 2: RCTs** | Double-blind randomized controlled trials | $0.90$ | ClinicalTrials.gov registry ID match |
| **Level 3: Observational** | Cohort and case-control studies | $0.60$ | Confounder disclosure & statistical power |
| **Level 4: Anecdotal** | Testimonials, influencer marketing, preprints | $0.10$ | **Flagged as ungrounded medical claim** |

```python
from credence.subjects.taxonomy import MedicalTaxonomy

# Inspect clinical claims against the WHO and Cochrane taxonomy registry
tax = MedicalTaxonomy()
violations = tax.evaluate_claims(
    claims=["New berry extract cures diabetes in 48 hours"],
    verbatim_text=raw_dom_text
)
assert len(violations) > 0
assert violations[0].rule_id == "MED-UNSUBSTANTIATED-CURE"
```

---
## Biomedical Evidence Grounding and Clinical Trial Verification

Evaluating medical prose requires validating clinical trial identifiers against PubMed and ClinicalTrials.gov registries with $G=1.00$ verbatim citations.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Health Medical Claims** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
