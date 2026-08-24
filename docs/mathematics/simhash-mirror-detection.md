---
title: SimHash-64 & Mirror Network Detection
description: Mathematical formulation of 64-bit SimHash, Hamming distances, and detecting
  coordinated propaganda syndication rings.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
---

# SimHash-64 & Mirror Network Detection

Coordinated disinformation networks frequently clone articles across dozens of disposable domain names (`news-daily1.test`, `breaking-wire2.test`), modifying only minor ad tags, comment counters, or timestamps to evade exact SHA-256 matching.

Credence uses **64-bit SimHash with Hamming Distance comparison** to detect near-duplicate content mirrors in $O(1)$ time.

---

## 1. 64-Bit SimHash Algorithm Formulation

Given normalized prose tokens $T = \{t_1, t_2, \dots, t_m\}$:

1. Initialize a 64-dimensional accumulator vector: $V = [0, 0, \dots, 0] \in \mathbb{R}^{64}$.
2. For each token $t_i \in T$:
   - Compute standard 64-bit cryptographic token hash: $h(t_i) \in \{0, 1\}^{64}$.
   - For bit position $j \in \{0, \dots, 63\}$:
     $$V_j \leftarrow V_j + \begin{cases} +1 & \text{if } h(t_i)_j = 1 \\ -1 & \text{if } h(t_i)_j = 0 \end{cases}$$
3. The final 64-bit SimHash fingerprint $F \in \{0, 1\}^{64}$ is:

$$F_j = \begin{cases} 1 & \text{if } V_j > 0 \\ 0 & \text{if } V_j \le 0 \end{cases}$$

---

## 2. Hamming Distance Metric ($D_H$)

The similarity between two documents with SimHash fingerprints $F_A$ and $F_B$ is evaluated via the bitwise XOR Hamming distance:

$$D_H(F_A, F_B) = \sum_{j=0}^{63} (F_{A, j} \oplus F_{B, j})$$

### Classification Thresholds:

| Hamming Distance ($D_H$) | Relationship | Action in Credence Mesh |
|:---|:---|:---|
| **$D_H = 0$** | Bitwise Identical | Instant cache hit ($0$ token evaluation). |
| **$1 \le D_H \le 3$** | Near-Duplicate / Mirror Site | Link attestation to parent audit record; flag syndicated mirror ring. |
| **$4 \le D_H \le 7$** | Substantial Plagiarism / Revision | Trigger differential audit focusing on altered paragraphs. |
| **$D_H \ge 8$** | Distinct Document | Independent evaluation required. |

## 3. Detecting Coordinated Syndication Rings

When $D_H \le 3$ occurs across $\ge 5$ distinct domain origins within a 24-hour window, Credence automatically flags the cluster as a **Coordinated Syndication Ring**, collapsing their aggregate domain weight to prevent Sybil authority farming.

---

## 4. Academic Foundations & Literature

### 📚 Seminal Papers in Locality-Sensitive Hashing
* **SimHash Algorithm**: [Moses S. Charikar (2002) - Similarity Estimation Techniques from Rounding Algorithms (*ACM STOC*)](https://doi.org/10.1145/509907.509965)
* **Web-Scale Near-Duplicate Detection**: [Manku, Jain, & Das Sarma (2007) - Detecting Near-Duplicates for Web Crawling (*ACM WWW*)](https://doi.org/10.1145/1242572.1242592)
* **Hamming Distance Foundations**: [Richard W. Hamming (1950) - Error Detecting and Error Correcting Codes (*Bell System Technical Journal*)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### 🔗 Related Tools & Guides in Credence
* 🎮 [Interactive Playground: SimHash-64 Bitwise Distance Matrix](../playground.md)
* 📰 [Zero-Trust Feed Sifting Walkthrough](../walkthroughs/02-zero-trust-feed-sifting.md)
* 🛡️ [Adversarial Threat Matrix & Sybil Defense](../protocols/adversarial-defense.md)
* 💥 [Tutorial 08: Sybil Cartel Demolition & Mirror Busting](../tutorials/08-sybil-cartel-demolition.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Simhash Mirror Detection** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Simhash Mirror Detection** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "mathematics"

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
