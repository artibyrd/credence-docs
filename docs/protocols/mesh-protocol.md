---
title: "Mesh Protocol & P2P Consensus"
description: "Watts-Strogatz small-world lattice, Ed25519 gossip envelopes, TTL bounds, and Bayesian consensus."
sidebar:
  order: 2
---

# Mesh Protocol & P2P Consensus

The **Credence Mesh** is an asynchronous, decentralized peer-to-peer trust network that enables independent Credence nodes to exchange, verify, and aggregate Ed25519-signed audit attestations over WebSockets.

---

## 1. Why Decentralize Epistemic Auditing?

Centralized truth or fact-checking APIs have fundamental flaws:
1. **Single Points of Failure & Censorship**: Centralized nodes can be blocked, DDoS'd, or politically coerced.
2. **Duplicative Compute / Token Waste**: If Node A already spent tokens auditing a breaking news article, Node B can verify Node A's cryptographic attestation and reuse the result in $0$ LLM tokens.
3. **Byzantine Fault Tolerance**: By gathering signed evaluations from multiple independent nodes and computing **Bayesian consensus**, the network eliminates rogue or compromised nodes.

---

## 2. P2P Gossip Protocol Specification

```mermaid
sequenceDiagram
    autonumber
    participant NodeA as Node Alpha (ws://8761)
    participant NodeB as Node Beta (ws://8762)
    participant NodeC as Node Gamma (ws://8763)

    Note over NodeA,NodeB: 1. Handshake Phase
    NodeA->>NodeB: PEER_HELLO (Node PubKey, Catalog Hashes, Vector)
    NodeB->>NodeA: PEER_HELLO (Node PubKey, Catalog Hashes, Vector)

    Note over NodeA,NodeC: 2. Evaluation & Broadcast
    NodeA->>NodeA: Audits URL & Signs AuditReport (Ed25519)
    NodeA->>NodeB: ANNOUNCE_ATTESTATION (Signed Envelope, TTL=3)
    NodeA->>NodeC: ANNOUNCE_ATTESTATION (Signed Envelope, TTL=3)

    Note over NodeB,NodeC: 3. Verification & Storm Suppression
    NodeB->>NodeB: Rate Limit, Deduplicate, Verify Ed25519 & Grounding
    NodeB->>NodeC: Rebroadcast ANNOUNCE_ATTESTATION (TTL=2)
    NodeC->>NodeC: Drop Rebroadcast (Already Seen)
```

---

## 3. Node Quality ($Q_i$) & Empirical Expertise ($E_i$)

Every peer node is evaluated using a 5-factor quality score:
$$Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$$

Where:
- $U_i$: Historical node uptime
- $C_i$: Consensus concordance
- $G_i$: Verifiable citation grounding ratio
- $T_i$: Latency performance
- $K_i$: Dynamic seed signature verification

Empirical authority ($E_i$) requires evaluation entropy across $\ge 5$ distinct FQDNs. Hallucinated findings incur an instant 50% reputation slash.
