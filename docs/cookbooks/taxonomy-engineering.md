---
title: Taxonomy Rule Engineering 101
description: Authoring custom namespaced YAML catalogs, calibrating numerical severities,
  and defining grounded citation requirements.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-26
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

When a node loads a catalog, it computes its SHA-256 hash across canonical RFC 8785 JSON bytes. The system indexes all catalogs into a global **Composite Taxonomy Root Hash**:

$$\text{Taxonomy Root Hash} = \text{SHA256}\left(\bigoplus_{i=1}^{N} \text{catalog\_id}_i : \text{catalog\_hash}_i\right)$$

---

## 5. Automatic Swarm Partitioning & Granular Cluster Sizing

To prevent prompt bloat and cognitive dilution when catalogs expand, rules must be grouped into semantic clusters bounded to **3–6 rules per cluster**:

```yaml
clusters:
  - cluster_id: CLINICAL_EVIDENCE
    name: "Clinical Trial Substantiation"
    description: "Rules auditing medical claims against peer-reviewed clinical trials."
    rules:
      - rule_id: MED-1.1
        name: "Unverified Miracle Cure Claim"
        severity: 5
        description: "Promoting unapproved compounds as definitive cures."
        evidence_guidelines: "Quote the specific medical efficacy claim."
```

When loaded, `TaxonomyRegistry.get_granular_evaluation_clusters()` automatically parses each cluster into a dedicated specialist micro-agent pass, ensuring zero-code extensibility.

---

## 6. Taxonomy State Drift & Re-Audit Lifecycle

When a developer or standards body updates a YAML catalog:
1. The catalog's SHA-256 digest and the composite `Taxonomy Root Hash` automatically change.
2. Existing attestations evaluated under older standards are flagged as `is_taxonomy_stale=True`.
3. Running `just audit-stale` or Sentinel daemons isolates the exact changed clusters via `TaxonomyRegistry.get_catalog_deltas()` and executes targeted delta micro-passes to update the attestation without re-running the entire suite.

