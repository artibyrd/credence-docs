---
title: "SimHash-64 & Mirror Network Detection"
description: "Mathematical formulation of 64-bit SimHash, Hamming distances, and detecting coordinated propaganda syndication rings."
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

---

## 3. Detecting Coordinated Syndication Rings

When $D_H \le 3$ occurs across $\ge 5$ distinct domain origins within a 24-hour window, Credence automatically flags the cluster as a **Coordinated Syndication Ring**, collapsing their aggregate domain weight to prevent Sybil authority farming.
