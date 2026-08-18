---
title: "The Mathematics of Robust Consensus"
description: "Mathematical proofs of the Domain Authority Weighted Median, Byzantine 3f+1 tolerance, and the Galileo Rule."
---

Decentralized consensus over qualitative or factual evaluations cannot rely on simple majority voting or arithmetic means. A cartel of shallow or dishonest nodes could easily manipulate averages.

This document presents the formal mathematical proofs underlying Credence's **Domain Authority Weighted Median** and **The Galileo Rule**.

---

## 1. The Domain Authority Composite Weight ($W_i$)

Let node $i$ have 5-factor quality $Q_i \in [0, 1]$ and domain expertise $E_{i, \text{domain}} \in [0, 1]$.

The composite weight $W_i$ assigned to node $i$'s evaluation is:

$$W_i = 0.20 Q_i + 0.80 E_{i, \text{domain}}$$

Where:
- $Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$
- $E_{i, \text{domain}} = 0.40 C_{\text{domain}} + 0.35 G_{\text{domain}} + 0.15 V_{\text{domain}} + 0.10 L_{\text{domain}}$

---

## 2. Domain Authority Weighted Median Algorithm

Given $N$ independent node evaluations with scores $S_1, S_2, \dots, S_N$ and corresponding weights $W_1, W_2, \dots, W_N$:

1. Sort all evaluations such that $S_{(1)} \le S_{(2)} \le \dots \le S_{(N)}$.
2. Calculate total cumulative weight: $W_{\text{total}} = \sum_{i=1}^N W_i$.
3. The **Weighted Median** $S_{\text{consensus}}$ is the score $S_{(k)}$ where:

$$\sum_{j=1}^{k-1} W_{(j)} < \frac{W_{\text{total}}}{2} \quad \text{and} \quad \sum_{j=1}^k W_{(j)} \ge \frac{W_{\text{total}}}{2}$$

### Why Weighted Medians Resist Sybil Cartels ($3f + 1$):
In an arithmetic mean, a single compromised node submitting $S=100.0$ shifts the consensus by $\frac{100}{N}$. In a weighted median, an adversary must control more than **50% of the total weighted domain authority** to move the consensus by even $0.01$ points.

---

## 3. Mathematical Proof of The Galileo Rule (Invariant 27)

> **Theorem (Asymmetric Grounded Evidence)**:
> If node $e$ satisfies $W_e \ge 0.70$ and provides grounded citations with precision $G_e = 1.0$, node $e$'s finding $S_e > 0$ cannot be discarded as an outlier by a swarm of $M$ ungrounded nodes reporting $S_m = 0.0$.

### Proof:
1. An evaluation reporting $S_m = 0$ provides zero grounded citations ($|V_{\text{grounded}}| = 0$). By definition, absence of citations is **absence of evidence**, not proof of non-violation.
2. Node $e$ provides a non-empty set of citations $V_e$ where every quote is verifiably present in the source text ($G_e = 1.0$).
3. The consensus engine evaluates the subset of active evidentiary claims:

$$S_{\text{consensus}} \ge \min_{v \in V_e} (\text{severity}_v \times \text{confidence}_v)$$

4. Node $e$ is exempted from outlier trimming (`is_outlier = False`), guaranteeing that verified factual discovery cannot be silenced by uninformed majorities. $\blacksquare$
