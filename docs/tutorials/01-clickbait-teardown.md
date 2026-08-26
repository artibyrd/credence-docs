---
title: 'Tutorial 01: Dissecting Sensationalized Headlines & Clickbait'
description: Learn how Credence uses offline heuristic regexes and syllogistic reasoning to tear down hyperbolic headlines.
since_version: v1.0.0
verified_version: v2.17.2
last_verified: 2026-08-25
sidebar:
  order: 1
---

# Tutorial 01: Dissecting Sensationalized Headlines & Clickbait

In this hands-on tutorial, you will learn how Credence analyzes sensationalized headlines, detects emotional manipulation, and calculates the **Clickbait Severity Index (CSI)** using both offline heuristics and reasoning models.

---

## 1. The Anatomy of Clickbait

Clickbait relies on specific linguistic patterns designed to trigger dopamine responses and exploit curiosity gaps:
1. **The Curiosity Gap**: Deliberately withholding the core subject (`"You won't believe what happened next..."`).
2. **Superlative Saturation**: Excessive use of extreme adjectives (`"Shocking"`, `"Mind-blowing"`, `"Unbelievable"`).
3. **Emotional Provocation**: Framing neutral events in high-arousal moral outrage terms.

---

## 2. Running Your First Clickbait Audit

Execute an audit on a hyperbolic headline using the CLI:

```bash
# Basic audit using the default BALANCED profile (1,024 thinking tokens)
$ credence audit "https://example-news-blog.com/shocking-breakthrough-revealed"

# Run in FREE offline mode (0 tokens, 100% heuristic regexes)
$ credence audit "https://example-news-blog.com/shocking-breakthrough-revealed" --profile free
```

### Understanding the Terminal Output

```json
{
  "url": "https://example-news-blog.com/shocking-breakthrough",
  "classification": "SUSPICIOUS",
  "suspicion_score": 58.4,
  "grounding_ratio": 0.42,
  "verdict": "Low grounding ratio and unverified claims"
}
```

---

## 3. Dissecting the Forensic Evidence

Credence compares the extracted headline against the core claim entities extracted from the article DOM:
- **Headline Claim**: `"Scientists Reveal Miracle Cancer Cure!"`
- **Article Body Reality**: Study conducted in petri dishes on isolated cell cultures with no clinical trials.
- **Verdict**: Critical headline-body dissonance violation (`SPJ-1.1`), elevating suspicion by $+35.0$ points.

---

## 4. Next Steps

* 🎓 [Tutorial 02: Poe's Law & Satire Cloaking](02-satire-vs-disinformation.md)
* 🤖 [Tutorial 03: FastMCP 2.0 with Claude & Cursor](03-claude-cursor-fastmcp.md)

---
## Step-by-Step CLI Forensic Teardown

To deconstruct sensationalist clickbait and unnamed sourcing using the Credence CLI, follow these sequential steps:

### Step 1: Execute Heuristic & Claim Analysis
```bash
$ credence audit https://example.com/shocking-breakthrough --verbose
```

### Step 2: Interpret the Multi-Vector Forensic Output
```json
{
  "url": "https://example.com/shocking-breakthrough",
  "clickbait_index": 84.5,
  "superlative_density": 0.12,
  "verbatim_grounding_ratio": 0.42,
  "suspicion_score": 58.4,
  "classification": "SUSPICIOUS",
  "violations": [
    { "rule_id": "SPJ-1.1", "severity": "HIGH", "quote": "Scientists confirm miracle discovery that changes everything" },
    { "rule_id": "IEP-SRC-3", "severity": "MEDIUM", "quote": "According to anonymous insiders close to the project" }
  ]
}
```

| Detection Vector | Metric Formula / Pattern | Measured Value | Threshold & Verdict |
| :--- | :--- | :---: | :--- |
| **Clickbait Title Index** | Superlatives / Total Title Tokens | `84.5 / 100` | Exceeds 60.0 (Flagged) |
| **Verbatim Grounding ($G$)** | Cited DOM Text / Claim Text | `0.42` | Fails $G=1.00$ mandate |
| **Unnamed Attribution** | `regex: anonymous (sources|insiders|officials)` | `2 occurrences` | Triggers SPJ-1.1 warning |

---
## Hands-On Clickbait Analysis and Claim Extraction

Practical tutorial demonstrating how to extract assertions, identify unnamed sources, and interpret suspicion scores.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **01 Clickbait Teardown**:

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
