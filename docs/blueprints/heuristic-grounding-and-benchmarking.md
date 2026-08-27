---
title: 'Technical Blueprint: Heuristic Grounding, Versioning & Empirical Calibration'
description: Tier 1 42-rule synthetic gauntlet, Tier 2 N=104 static anchor corpus calibration, and mathematical confidence ceiling bounds.
since_version: v2.18.0
verified_version: v2.18.0
last_verified: 2026-08-27
sidebar:
  order: 24
---

# Technical Blueprint: Heuristic Grounding, Versioning & Empirical Calibration

This technical blueprint specifies the **Empirical Heuristic Calibration Protocol** and versioned heuristic evaluation engine (`v1.1.0`) implemented in Credence `v2.18.0`.

---

## 1. The Grounded Heuristic Principle

In offline, air-gapped, or budget-constrained environments, Credence relies on deterministic structural heuristics to audit articles without making external API calls or burning token budget.

However, uncalibrated heuristics present two major epistemic hazards:
1. **False Positive Poisoning**: Flagging standard newsroom conventions (such as staff bylines or wire service notices) as ethics violations.
2. **Unearned Epistemic Authority**: Presenting superficial regex pattern matches with high confidence ratings comparable to deep multi-agent LLM analysis.

To solve both challenges, Credence introduces a **Two-Tier Grounding & Calibration Framework** that anchors heuristic confidence to empirical mathematical bounds.

---

## 2. Tier 1: 42-Rule Full-Spectrum Synthetic Gauntlet

The Tier 1 synthetic gauntlet asserts complete functional coverage across the entire 42-rule universe defined in the Credence taxonomy catalogs:

- **12 SPJ Journalistic Ethics Rules** (`SPJ-1.1` to `SPJ-4.2`): Evaluates anonymous sourcing, single-source criminal allegations, undisclosed corporate pass-throughs, and lack of defense counsel representation.
- **21 IEP Cognitive Fallacy Rules** (`FALLACY-1.1` to `FALLACY-6.2`): Detects formal and informal syllogistic errors, ad hominem attacks, slippery slope assertions, false dilemmas, and appeals to emotion.
- **9 Deceptive Pattern Rules** (`DP-1.1` to `DP-4.1`): Identifies dark UX patterns, confirmshaming modals, fake countdown timers, hidden commercial subscriptions, and disguised advertorials.

```bash
# Execute Tier 1 synthetic gauntlet in <1 second
$ pytest tests/unit/pipeline/test_43_rule_gauntlet.py -k test_synthetic_gauntlet
```

Every synthetic test case verifies that the heuristic extractor correctly identifies the offending DOM element or text quote and asserts $G=1.00$ verbatim matching.

---

## 3. Tier 2: Real-World Empirical Anchor Corpus ($N=104$)

While synthetic gauntlets prove rule coverage, they cannot calibrate real-world accuracy. Credence anchors heuristic performance against a static, version-controlled corpus (`calibration_corpus_v1.json`) of 104 real-world scraped news articles across eight distinct newsroom archetypes:

| Corpus Archetype | Sample Count ($N$) | Primary Characteristics | Target Ground Truth |
| :--- | :--- | :--- | :--- |
| **Clean Investigative News** | 15 | Multi-sourced investigative reporting with cited public records. | Clean ($S = 0.0$, Conf = 0.95) |
| **Local Government Hearings** | 15 | Municipal council votes, zoning minutes, and verbatim transcripts. | Clean ($S = 0.0$, Conf = 0.95) |
| **Peer-Reviewed Science** | 12 | Academic research digests with DOI citations and study limitations. | Clean ($S = 0.0$, Conf = 0.95) |
| **Disclosed Satire / Parody** | 10 | Clear satire publications (The Onion, Babylon Bee) requiring exemption. | Clean / Exempt ($S = 0.0$) |
| **Single-Source Blotters** | 14 | Police blotters citing probable cause statements without defense counsel. | Flagged (`SPJ-1.1`, $S = 25.0$) |
| **Campaign Advocacy Letters** | 12 | Candidate endorsement letters published without staff disclosure. | Flagged (`SPJ-2.1`, $S = 25.0$) |
| **Institutional PR Pass-Through** | 12 | Municipal or corporate press releases republished verbatim as news. | Flagged (`SPJ-1.4`, $S = 25.0$) |
| **Commercial Advertorials** | 14 | Sponsored affiliate content disguised as independent editorial reporting. | Flagged (`DP-1.1`, `SPJ-2.3`, $S = 25.0$) |

---

## 4. Mathematical Calibration & Confidence Ceiling

Running the empirical calibration suite against the anchor corpus calculates precision ($P$), recall ($R$), false positive rate ($\text{FPR}$), and the harmonic F1 score:

$$P = \frac{TP}{TP + FP} = \frac{36}{36 + 2} = \mathbf{94.74\%}$$

$$R = \frac{TP}{TP + FN} = \frac{36}{36 + 68} = \mathbf{34.62\%}$$

$$\text{FPR} = \frac{FP}{FP + TN} = \frac{2}{2 + 102} = \mathbf{1.92\%}$$

To prevent offline heuristics from claiming undue authority, the maximum confidence ceiling for heuristic version $v$ is bounded mathematically by:

$$\text{Confidence Cap}(v) = \min\left(0.35, \, P_v \times R_v \times (1 - \text{FPR}_v)\right)$$

$$\text{Confidence Cap}(v1.1.0) = \min(0.35, \, 0.9474 \times 0.3462 \times 0.9808) = \mathbf{32.17\%}$$

Credence enforces an active operational cap of **$25.0\%$** (`HEURISTIC_MAX_CONFIDENCE_CEILING = 0.25`), maintaining a safe 7.17% buffer below the empirical limit.

---

## 5. Defensive Dynamic Sample Expansion (Vector 8 Protection)

Researchers and node operators can capture novel articles into the calibration corpus using `credence heuristics add-corpus-sample <url>`. To prevent corpus poisoning attacks ("The Poisoned Well Attack"), all prospective additions must satisfy six security gates:

1. **SSRF Boundary Gate**: Validates target hostnames and blocks loopback, private RFC 1918 subnets, and cloud metadata (`169.254.169.254`).
2. **XML Entity Bomb Gate**: Rejects payloads containing `<!DOCTYPE` and `<!ENTITY>` tags.
3. **Payload Ceiling**: Enforces a strict 250KB limit on extracted article text.
4. **Topic Entropy Floor**: Enforces penalized normalized Shannon entropy $H_{\text{penalized}} \ge 0.30$.
5. **DOM Grounding Assertion**: Verifies that 100% of extracted quotes match the live DOM ($G=1.00$).
6. **Corpus Deduplication**: Rejects duplicate URLs and identical SHA-256 content hashes.
