---
title: 'The Galileo Rule: Why Grounded Truth Must Always Defeat Consensus Swarms'
description: How a single specialist with verbatim DOM citations overrides a 100-node Sybil cartel in Bayesian consensus.
since_version: v1.12.0
verified_version: v2.18.3
last_verified: 2026-08-29
sidebar:
  order: 22
---

# The Galileo Rule: Why Grounded Truth Must Always Defeat Consensus Swarms

In 1632, Galileo Galilei published his *Dialogue Concerning the Two Chief World Systems*, demonstrating that the Earth revolved around the Sun.

At the time, the overwhelming consensus of religious authorities, academic faculties, and civil institutions insisted upon a geocentric universe. If truth were determined purely by a democratic vote or average consensus across all active observers, Galileo would have been overwhelmingly outvoted. Yet Galileo was right, and the entire consensus was wrong—because Galileo possessed empirical, verifiable observations.

In decentralized trust systems, this historical reality creates a profound mathematical challenge: **How do you prevent a swarm of low-quality or colluding nodes from voting down authentic truth?**

Credence answers this question with **The Galileo Rule (`inv-verbatim-grounding`)**.

---

## The Vulnerability of Pure Democratic Consensus

In naive Byzantine Fault Tolerant networks, nodes compute the median or mean score across all peer votes:

$$\bar{S}_{\text{naive}} = \frac{1}{N} \sum_{i=1}^{N} S_i$$

If an adversary deploys a Sybil swarm of 10 colluding nodes that broadcast `0.0 (PRISTINE)` for a fraudulent corporate earnings report, while 2 honest specialist nodes report `85.0 (FRAUD)`, the naive consensus median calculates:

$$\text{Median}(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85) = 0.0\text{ (CLEAN)}$$

The truth is completely suppressed by brute numerical force.

---

## The Mathematical Formulation of The Galileo Rule

To prevent consensus suppression, Credence enforces an asymmetric evidentiary override:

$$\text{Final Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_k \times G_k\right)$$

Where:
- $\bar{S}_{\text{consensus}}$ is the expertise-weighted Bayesian median across all peers.
- $S_k$ is the suspicion score evaluated by specialist node $k$ ($E_k \ge 0.90$).
- $G_k \in [0.0, 1.0]$ is the specialist's **verifiable citation grounding ratio**.

| Swarm Consensus Voter | Voter Expertise & Grounding | Submitted Score | Galileo Rule Resolution |
| :--- | :--- | :--- | :--- |
| **10 Generalist Nodes** | Generalist profile, 0 citations ($G=0.00$) | $S=0.0$ (Complacent Pass) | Majority vote ungrounded |
| **1 Specialist Node** | Domain specialist, verbatim DOM quotes ($G=1.00$) | $S=88.0$ (Definitive Violation) | **Galileo Rule Overrides Majority** |
| **Final Consensus Score** | Grounded evidence prevails over ungrounded consensus | **$S=88.0$ (PRISTINE Grounding)** | Prevents democratic hallucination |

---

## Why Verbatim Grounding ($G=1.00$) Is Essential

The Galileo Rule cannot be abused by rogue actors because the override is gated strictly by **character-for-character DOM grounding**:
- If a rogue node submits an ungrounded high suspicion score ($G=0.0$), the override evaluates to $88.0 \times 0.0 = 0.0$, neutralizing the attack.
- Only when the node extracts exact, unalterable DOM evidence verifying an egregious violation does its lone vote carry the authority to overturn the swarm.

Truth is not a popularity contest. By codifying The Galileo Rule into our mathematical consensus, Credence ensures that evidence always triumphs over noise.

---
## Mathematical Formulation of the Galileo Rule

The Galileo Rule ensures that an expert node with verified character-for-character citations cannot be outvoted by a majority of ungrounded or compromised generalist nodes:

$$\text{Consensus} = \begin{cases} 
S_{\text{expert}} & \text{if } \exists i : (E_i \ge 0.90 \land G_i = 1.00 \land |S_i - \bar{S}| > 30) \\
\text{WeightedMedian}(S) & \text{otherwise}
\end{cases}$$

| Consensus Scenario | Swarm Node Composition | Raw Majority Score | Galileo Rule Final Verdict |
| :--- | :--- | :--- | :--- |
| **Coordinated Smear** | 10 Cartel Nodes ($S=95.0, G=0.0$), 1 Expert ($S=12.0, G=1.00$) | $S=95.0$ (Fake Violation) | **$S=12.0$ (PRISTINE Grounded Pass)** |
| **Complex Science Claim**| 8 Generalist Nodes ($S=50.0, G=0.3$), 1 Specialist ($S=88.0, G=1.00$)| $S=50.0$ (Ambiguous Pass) | **$S=88.0$ (Definitive Violation Overrule)**|
