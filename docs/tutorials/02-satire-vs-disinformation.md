---
title: "Tutorial 02: Distinguishing Satire from Disinformation (Poe's Law)"
description: Learn how Credence protects political parody while catching malicious defamation cloaked as satire.
since_version: v1.0.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 2
---

# Tutorial 02: Distinguishing Satire from Disinformation (Poe's Law)

In this tutorial, you will explore how Credence implements **Poe's Law Safeguards** to protect authentic satire (*The Onion*, *Babylon Bee*) while preventing malicious actors from using "parody" as a legal shield for defamation.

---

## 1. The Satire Classification Dilemma

Under **Poe's Law**, sufficiently extreme political views and genuine absurd parody become indistinguishable without explicit intent markers. Standard AI models make two common errors:
1. **False Positives**: Flagging *The Onion* as "fake news" because its literal assertions are false.
2. **False Negatives**: Excusing viral defamatory conspiracy theories because the publisher claimed "it was just satire."

---

## 2. Auditing Authentic Satire

Run an audit on a recognized satire article:

```bash
# Audit an article from a verified satire publisher
$ credence audit https://theonion.com/article-example --profile balanced
```

### Result Analysis
Credence detects the satire context, sets `SATIRE_IDENTIFIED=true`, and neutralizes heuristic clickbait penalties ($S = 0.00$), classifying the piece as `PRISTINE (SATIRE)`.

---

## 3. Auditing Malicious Satire Cloaking

Now audit a defamatory article from a disreputable outlet that asserts criminal charges against private citizens while claiming parody:

```bash
$ credence audit https://fake-wire.com/official-arrested-treason --profile ultra --thinking-budget 4096
```

### Result Analysis
The model triggers the `SPJ-1.6` override:
- Factual allegations against named real individuals are identified.
- No public satire disclaimer or absurd framing is present in the DOM.
- The article receives an unmitigated `UNRELIABLE` classification with a suspicion score $>80.0$.

---

## 4. Next Steps

* 🤖 [Tutorial 03: FastMCP 2.0 with Claude & Cursor](03-claude-cursor-fastmcp.md)
* 🛡️ [Poe's Law & Satire Cloaking Security Specification](../security/satire-cloaking-defense.md)

---
## Navigating Poe's Law & Satire Cloaking Detection

Differentiating legitimate political satire from deceptive disinformation masquerading under a humor disclaimer requires multi-tier linguistic and behavioral analysis:

| Evaluation Tier | Heuristic / Taxonomy Check | Legitimate Satire Result | Cloaked Disinformation Result |
| :--- | :--- | :--- | :--- |
| **Tier 1: Publisher Context** | Known parody outlet registry (e.g. *The Onion*) | Neutralized ($S = 0.0$) | Proceed to deep claim verification |
| **Tier 2: Irony & Absurdism**| High linguistic irony & exaggeration framing | Protected as political parody | Factual assertion framing without humor |
| **Tier 3: Factual Allegations**| Defamatory allegations against private individuals| SPJ-1.6 investigative review | **Flagged for malicious cloaking ($S \ge 75.0$)** |

```bash
# Audit satirical target with Poe's Law classifier
$ credence audit https://theonion.com/article --lens focus
```

---
## Evaluating Parody Framing and Defamatory Claims

Tutorial covering Poe's Law classification and investigative overrides on factual allegations in satirical contexts.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **02 Satire Vs Disinformation**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **02 Satire Vs Disinformation** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "02_satire_vs_disinformation" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
