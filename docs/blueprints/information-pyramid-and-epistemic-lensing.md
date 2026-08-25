---
title: 'Architectural Blueprint: The Information Pyramid & Epistemic Lensing'
description: The 3-Tier Cognitive Hierarchy, Surface/Focus/Deep Spectrum Lenses, and progressive disclosure UI architecture.
since_version: v1.12.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 10
---

# Architectural Blueprint: The Information Pyramid & Epistemic Lensing

The **Information Pyramid & Epistemic Lensing Invariant (`inv-epistemic-lensing`)** governs how complex forensic evidence, mathematical scores, and cryptographic attestations are presented across human and machine interfaces.

---

## 1. The 3-Tier Cognitive Hierarchy

Digital prose auditing produces vast quantities of forensic data (DOM trees, token distributions, SimHash matrices, Ed25519 bytes). Dumping this data in a wall-of-text creates cognitive fatigue. Credence organizes presentation into **3 Decoupled Cognitive Lenses**:

| Epistemic Lens Tier | Information Granularity | Target User Persona | Inspection Time Horizon | Cryptographic Proof Depth |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Surface Lens (Glance)** | Suspicion Score (0–100), DCI rating, classification pill badge | General readers & quick scanning | `<1 second` | Color-coded visual status |
| **Tier 2: Focus Lens (Explore)** | Specific violated rules, verbatim DOM quotes, claim cards | Investigative journalists & researchers | `<10 seconds` | Character quote exactness ($G=1.00$) |
| **Tier 3: Deep Spectrum Lens (Forensic)**| Canonical RFC 8785 JSON bytes, SimHash grids, Ed25519 signatures | Forensic auditors & autonomous agents | `<60 seconds` | Full mathematical proof |

---

## 2. Lens Specifications & Interface Mapping

### 2.1 Surface Lens (Glance: $<1$ Second)
- **Objective**: Immediate trust comprehension for general readers.
- **Components**: Color-coded SVG pill badge (`#10b981` PRISTINE), calibrated numeric score (`14.2 / 100`), and one-sentence executive summary.
- **Interfaces**: `<credence-badge>` embed, CLI default output, TUI Top Summary bar.

### 2.2 Focus Lens (Explore: $<10$ Seconds)
- **Objective**: Editorial understanding of specific journalistic defects.
- **Components**: Grouped violation cards, verbatim DOM quotes highlighting extracted assertions, confidence ratings, and taxonomy citations (SPJ, IEP).
- **Interfaces**: Web Report Inspector tab, CLI `--verbose` / `--lens focus`, TUI Finding Browser.

### 2.3 Deep Spectrum Lens (Forensic: Deep Analysis)
- **Objective**: Full cryptographic and reproducible verification for researchers, legal counsel, and autonomous agents.
- **Components**: Complete RFC 8785 canonical JSON bytes, SHA-256 hashes, 64-tile SimHash differential grids, and Ed25519 signature hex strings.
- **Interfaces**: Web ClaimReview / RFC 8785 tab, CLI `--json` / `--lens forensic`, FastMCP tool responses.

---

## 3. CLI Command Options

```bash
# Default Surface Lens view
$ credence audit https://example.com/article

# Focus Lens (Claim Cards & Grounded Quotes)
$ credence audit https://example.com/article --lens focus

# Deep Spectrum Lens (Raw RFC 8785 Attestation JSON)
$ credence audit https://example.com/article --lens forensic
```

---

## 4. Related Protocols & Blueprints

* 📘 [The Invariant Bible](../invariants.md) — Epistemic Lensing & Information Pyramid
* 📊 [Unified Merit & Attestation Badge System](unified-merit-and-attestation-badge-system.md)
* 🎮 [Interactive Report Viewer](https://credence.report/viewer.html)

---
## Epistemic Lensing Architecture & Progressive Disclosure

The Information Pyramid invariant (`inv-epistemic-lensing`) organizes complex forensic data into 3 decoupled cognitive layers to prevent reader fatigue:

| Lens Tier | Cognitive Horizon | Data Elements Rendered | Target Audience |
| :--- | :---: | :--- | :--- |
| **1. Surface Lens (Glance)** | `<1 second` | Suspicion Score gauge (0–100), DCI rating, classification pill | Quick browsing / everyday readers |
| **2. Focus Lens (Explore)** | `<10 seconds` | Claim cards, rule violations, verbatim quotes ($G=1.00$) | Curious readers & fact-checkers |
| **3. Deep Spectrum Lens (Forensic)**| `<60 seconds` | RFC 8785 Canonical JSON, SHA-256 hashes, Ed25519 signatures | Forensic auditors & autonomous agents |

```bash
# Surface Lens view (Default)
$ credence audit https://example.com/breaking-news

# Focus Lens view (Detailed Claim Breakdown)
$ credence audit https://example.com/breaking-news --verbose

# Deep Spectrum Lens (Cryptographic JSON Envelope)
$ credence audit https://example.com/breaking-news --json
```

---
## Progressive Disclosure in Forensic User Interfaces

The Surface, Focus, and Deep Spectrum lenses allow readers to progressively inspect evidence without cognitive overwhelm.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Information Pyramid And Epistemic Lensing** operates according to strict operational parameters and deterministic boundaries:

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Information Pyramid And Epistemic Lensing** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "information_pyramid_and_epistemic_lensing" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
