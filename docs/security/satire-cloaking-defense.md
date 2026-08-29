---
title: Poe's Law & Satire Cloaking Defense
description: Two-tier satire pipeline, linguistic irony detection, SPJ-1.6 overrides, and protecting genuine parody.
since_version: v1.0.0
verified_version: v2.18.3
last_verified: 2026-08-29
sidebar:
  order: 1
---

# Poe's Law & Satire Cloaking Defense

This security specification details how Credence differentiates authentic political parody from malicious disinformation cloaked as satire under **Poe's Law**.

---

## 1. Two-Tier Satire Pipeline

Poe's Law observes that without a clear indicator of intent, it is impossible to create a parody of extreme views so obviously exaggerated that it cannot be mistaken for genuine extremism. Credence resolves this with a **Two-Tier Evaluation Pipeline**:

| Security Evaluation Tier | Parody Cue / Grounding Test | Scoring Rule | Epistemic Resolution |
| :--- | :--- | :--- | :--- |
| **Tier 1: Linguistic Irony** | Parody framing, absurdism cues, publisher history | Neutralizes score ($S=0.00$) | Legitimate satire protected |
| **Tier 2: Factual Allegation**| Verifiable real-world claims in parody context | Triggers SPJ-1.6 review | Inspects underlying defamation |
| **Tier 3: Cloaking Detection**| Disinformation disguised under satire disclaimers | Flags deceptive masquerading | Assigns high suspicion score |

---

## 2. Satire Neutralization vs. Defamation Overrides

1. **Authentic Parody Neutralization**: When a recognized satire outlet (*The Onion*, *Babylon Bee*) publishes an absurd or exaggerated story, heuristic clickbait and superlative penalties are completely wiped ($S = 0.00$), and the document is classified as `PRISTINE (SATIRE)`.
2. **The `SPJ-1.6` Malicious Cloaking Override**: If an unverified outlet publishes defamatory factual allegations (e.g., alleging a named election official was arrested for treason) and subsequently attempts to escape penalties by asserting "it was satire", Credence triggers the `SPJ-1.6` override:
   - Evaluates whether reasonable readers would recognize parody.
   - Assesses public disclosure notices and prominent satire labeling.
   - If deceptive intent is proven, full disinformation penalties apply.

---

## 3. Operator CLI & FastMCP Verification

```bash
# Evaluate a satire article with contextual disclosure
$ credence audit https://theonion.com/article-example --profile balanced

# Output:
# [PRISTINE] Suspicion Score: 0.0 / 100
# Flags: [SATIRE_IDENTIFIED] Parody context recognized; heuristic penalties neutralized.
```

---

## 4. Related Protocols & Essays

* 📰 [Poe's Law and the Satire Cloak Essay](../../blog/poes-law-and-the-satire-cloak.md)
* 📘 [The Invariant Bible](../invariants.md) — Poe's Law & Satire Safeguards
* 🎓 [Tutorial 02: Poe's Law & Satire Cloaking](../tutorials/02-satire-vs-disinformation.md)

---
## Satire Cloaking & Deceptive Parody Neutralization

| Detection Tier | Linguistic Indicator | Scoring Outcome |
| :--- | :--- | :--- |
| **Tier 1: Parody Frame** | Known satire publication history | Score neutralized ($S=0.0$) |
| **Tier 2: SPJ-1.6 Allegation**| Verifiable real-world claims in satire | Triggers factual background audit |
| **Tier 3: Deceptive Cloaking**| False news masquerading under joke tag | High Suspicion ($S \ge 75.0$) |

---
## Protecting Parody While Exposing Malicious Cloaking

Multi-tiered evaluation distinguishes harmless satire from deceptive propaganda disguised as humor.

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

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Satire Cloaking Defense** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "satire_cloaking_defense" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
