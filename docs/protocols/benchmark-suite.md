---
title: Golden 12 Benchmark Suite
description: Standardized epistemic evaluation benchmark, precision/recall metrics, and cross-model calibration.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 14
---

> **Note**: Golden 12 Benchmark Suite

The **Golden 12 Benchmark Suite** is the canonical evaluation harness used to measure precision, recall, and cross-entropy across Credence scoring models and heuristic engines.

---

## 1. The 12 Canonical Ground Truth Scenarios

The suite comprises 12 hand-curated, multi-disciplinary test cases spanning investigative journalism, corporate disclosures, health claims, satire, and adversarial prompt injections:

| ID | Title / Scenario | Category | Expected Verdict | Target Suspicion |
| :--- | :--- | :--- | :---: | :---: |
| `G12-01` | Multi-Source Investigative Report | Tech Watchdog | `PRISTINE` | $\le 10.0$ |
| `G12-02` | Anonymous Source Superlative Farm | Clickbait Blog | `SUSPICIOUS` | $45.0 - 65.0$ |
| `G12-03` | SEC 10-K Material Omission | Corporate Finance | `SUSPICIOUS` | $50.0 - 70.0$ |
| `G12-04` | Satirical Parody Headline | Satire (*The Onion*) | `PRISTINE` | $\le 5.0$ (Satire flag) |
| `G12-05` | Medical Miracle Cure Advertorial | Clinical Medicine | `UNRELIABLE` | $\ge 75.0$ |
| `G12-06` | Coordinated Astroturfing Swarm | Disinformation | `UNRELIABLE` | $\ge 80.0$ ($H < 0.30$) |
| `G12-07` | Transparent Editorial Correction | Breaking News | `PRISTINE` | $\le 12.0$ |
| `G12-08` | Indirect Prompt Injection Payload | Adversarial | `PRISTINE` / Flagged | Quarantined |
| `G12-09` | Stealth Mutation Revision Attack | Revision History | `SUSPICIOUS` | $40.0 - 60.0$ |
| `G12-10` | Peer-Reviewed Science Preprint | Academic Preprints | `PRISTINE` | $\le 8.0$ |
| `G12-11` | Politician-Publisher Conflict | Civic Integrity | `SUSPICIOUS` | $55.0 - 70.0$ |
| `G12-12` | Deceptive Urgency Countdown UI | E-Commerce | `SUSPICIOUS` | $35.0 - 50.0$ |

---

## 2. Benchmark Execution & Metrics

```bash
# Run the Golden 12 benchmark across active model engine
$ credence benchmark run --suite golden-12

# Run benchmark in mock hermetic mode (0 tokens)
$ credence benchmark run --suite golden-12 --mock
```

### Performance Target Metrics
- **Classification Accuracy**: $\ge 91.6\%$ (minimum 11/12 concordant verdicts).
- **False Positive Rate (FPR)**: $0.00\%$ on PRISTINE journalism and transparent corrections.
- **Grounding Ratio ($G$)**: $100\%$ character-offset precision on extracted claims.

---

## 3. Related Protocols

* 📊 [Cross-Model Epistemic & Economic Pareto Benchmark](cross-model-pareto-benchmark.md)
* 📐 [Mathematical Scoring Calibration](scoring.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Benchmark Suite** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Benchmark Suite** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "protocols"

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


---

## 4. Continuous Model Calibration & Drift Detection

The Golden 12 suite is executed automatically in pre-release CI pipelines to detect epistemic drift when updating model reasoning adapters (e.g., transitioning between Gemini 3.7 and Claude 3.7).

If any model revision exhibits a drop in precision below 91.6% or generates a false positive on clean investigative journalism ($FPR > 0.00\%$), the deployment gate halts immediately, preventing uncalibrated inference models from entering planetary production.
