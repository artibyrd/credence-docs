---
title: Mesh Protocol & P2P Consensus
description: Watts-Strogatz small-world lattice, Ed25519 gossip envelopes, TTL bounds, and Bayesian consensus.
since_version: v1.0.0
verified_version: v2.16.8
last_verified: 2026-08-25
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

![Figure 1.1: 13-node Watts-Strogatz peer mesh topology and Byzantine Sybil cartel defense](assets/illustrations/mesh-network.svg)

---

## 2. P2P Gossip Protocol Specification

The Credence Gossip Protocol operates over bi-directional WebSocket transports (`ws://<peer-ip>:8765/gossip` or `wss://` over TLS). Nodes organize in a **Watts-Strogatz small-world topology** ($k=4, eta=0.20$), providing high local clustering alongside short characteristic path lengths ($L \approx O(\log N)$) across the global network.

### 2.1 Connection Lifecycle & Handshake

When Node $A$ establishes a peering session with Node $B$, the connection undergoes a strict 3-stage cryptographic handshake before any audit payloads are relayed:

| Handshake Step | Sender $
ightarrow$ Receiver | Wire Message Type | Cryptographic Proof & Payload |
| :--- | :--- | :--- | :--- |
| **Step 1: Init** | Node A $
ightarrow$ Node B | `HANDSHAKE_INIT` | `{ node_id: "A", pubkey: "...", nonce_a: "..." }` |
| **Step 2: Challenge**| Node B $
ightarrow$ Node A | `HANDSHAKE_CHALLENGE` | `{ nonce_b: "...", sig_b: "Ed25519(nonce_a)" }` |
| **Step 3: Ack** | Node A $
ightarrow$ Node B | `HANDSHAKE_ACK` | `{ sig_a: "Ed25519(nonce_b)", session_id: "..." }` |
| **Step 4: Gossip** | Bidirectional | `ATTESTATION_BROADCAST`| Canonical RFC 8785 JSON + Ed25519 signature |

1. **`HANDSHAKE_INIT`**: Node $A$ transmits its canonical Ed25519 public key hex string, supported protocol version, and a 32-byte cryptographic random nonce.
2. **`HANDSHAKE_CHALLENGE`**: Node $B$ verifies that Node $A$ is not quarantined or blacklisted, signs Node $A$'s nonce with its own private key, generates a fresh 32-byte nonce, and returns the challenge.
3. **`HANDSHAKE_ACK`**: Node $A$ verifies Node $B$'s signature, signs Node $B$'s nonce, and sends its current 5-factor quality score ($Q_i$). Both nodes mark the link as `ACTIVE`.

### 2.2 Gossip Envelope & Wire Format

All gossip messages are serialized as canonical UTF-8 JSON envelopes:

```json
{
  "type": "ATTESTATION_BROADCAST",
  "protocol_version": "2.0",
  "msg_id": "9f8b7c6a-5d4e-3f2a-1b0c-9e8d7c6b5a4f",
  "origin_node_id": "ed25519:6c57f7b3a1b2c3d4e5f60718293a4b5c6d7e8f901a2b3c4d5e6f708192a3b4c5",
  "ttl": 4,
  "timestamp_utc": "2026-08-24T02:00:00Z",
  "payload": {
    "url": "https://example.com/investigation",
    "content_sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "simhash_64": "a3f5b891c0e2478d",
    "suspicion_score": 14.2,
    "classification": "CLEAN",
    "findings_count": 0,
    "grounding_ratio": 1.0,
    "audited_at": "2026-08-24T01:58:30Z",
    "node_pubkey": "6c57f7b3a1b2c3d4e5f60718293a4b5c6d7e8f901a2b3c4d5e6f708192a3b4c5",
    "signature": "3045022100abc123..."
  }
}
```

### 2.3 Epidemic Dissemination & Deduplication Cache

To eliminate broadcast storms and exponential bandwidth waste:
- **Bloom Filter & LRU Deduplication**: Every node maintains a 65,536-bit Counting Bloom Filter combined with a 5,000-entry in-memory LRU ring buffer storing message IDs (`msg_id`) and content hashes (`content_sha256`). Messages already present in the filter are silently dropped with zero retransmission.
- **TTL Bounding ($TTL \le 5$)**: Envelopes decrement `ttl` by 1 at each hop. When `ttl = 0`, relaying halts immediately.
- **Rate-Limiting per Peer**: Inbound message rates are capped at 50 envelopes/second per peer link. Bursts exceeding the quota trigger temporary backpressure disconnects.

---

## 3. Node Quality ($Q_i$) & Empirical Expertise ($E_i$)

Every peer node in the mesh is evaluated using a continuous 5-factor quality rubric:
$$Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$$

Where:
- $U_i \in [0.0, 1.0]$: **Historical Node Uptime** (calculated using exponential decay over a 30-day sliding window).
- $C_i \in [0.0, 1.0]$: **Consensus Concordance** (how closely the node's prior score outputs align with the network's ratified Bayesian medians).
- $G_i \in [0.0, 1.0]$: **Verifiable Grounding Ratio** (verbatim character-offset precision $G=1.00$ on extracted DOM evidence).
- $T_i \in [0.0, 1.0]$: **Latency Responsiveness** (P95 roundtrip gossip transmission time $<250\text{ms}$).
- $K_i \in [0.0, 1.0]$: **Cryptographic Seed Verification** (valid signatures matching known roots or web-of-trust anchors).

### Empirical Domain Authority ($E_i$)

To prevent credentialist astroturfing, nodes earn empirical authority in specific subject namespaces (e.g., `finance`, `medicine`, `tech`) strictly through verified performance:
$$E_i = \min\left(1.0, \frac{N_{\text{audits}}}{50}\right) \times H_{\text{domain}}$$

Where $H_{\text{domain}}$ represents Shannon entropy across $\ge 5$ distinct Fully Qualified Domain Names (FQDNs). Single-domain farming incurs an immediate authority clamp. Hallucinated findings or forged citations result in an autonomous 50% reputation slash.

---

## 4. Cryptographic Envelope & RFC 8785 Canonicalization

To ensure that attestations cannot be tampered with in transit by intermediate relay nodes, all signatures are calculated over deterministic **RFC 8785 Canonical JSON bytes**:

```json
{
  "audited_at": "2026-08-24T01:58:30Z",
  "classification": "CLEAN",
  "content_sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "origin_url": "https://example.com/investigation",
  "simhash_64": "a3f5b891c0e2478d",
  "suspicion_score": 14.2
}
```

Key verification invariants enforced across all nodes:
1. **RFC 8785 Ordering**: Keys sorted by UTF-16 code point order, zero extraneous whitespace, strict double quotes.
2. **Ed25519 Custody**: Signatures verified against `node_pubkey`. Payload tampering invalidates the mathematical signature.
3. **Replay Rejection**: Timestamps older than 72 hours without refreshed seed counters are rejected during Bayesian aggregation.

---

## 5. Bayesian Multi-Node Consensus & The Galileo Rule

When multiple peers audit the same target document, the network resolves the true suspicion score through an **Expertise-Weighted Bayesian Median**:

$$\bar{S} = \frac{\sum_{i=1}^{M} w_i S_i}{\sum_{i=1}^{M} w_i}, \quad w_i = Q_i \times E_i$$

### The Galileo Rule Override

If a high-expertise specialist ($E_k \ge 0.90, G_k = 1.00$) identifies verified, verbatim-grounded forensic evidence that a swarm of generalist nodes missed, the network triggers **The Galileo Rule**:

$$\text{Verdict} = \max\left(\bar{S}_{\text{consensus}}, S_k \times G_k\right)$$

This mathematical guarantee prevents low-quality Sybil cartels ($3f+1$) from suppressing authentic investigative discoveries through sheer node count.

---

## 6. Operator CLI & Mesh Diagnostics

Operators can inspect and manage mesh connectivity directly from the terminal:

```bash
# Query live mesh topology and active peer health
$ credence mesh status

# Inspect specific peer quality ratings and gossip latency
$ credence mesh peers --detailed

# Query Bayesian consensus for a URL across connected peers
$ credence mesh query https://example.com/article --min-peers 3
```

---

## 7. RFC Standards & Mathematical References

### 📚 Official IETF RFCs & Scientific Publications
* **RFC 8785**: [JSON Canonicalization Scheme (JCS) - IETF](https://datatracker.ietf.org/doc/html/rfc8785)
* **RFC 8032**: [Edwards-Curve Digital Signature Algorithm (Ed25519) - IETF](https://datatracker.ietf.org/doc/html/rfc8032)
* **RFC 6455**: [The WebSocket Protocol - IETF](https://datatracker.ietf.org/doc/html/rfc6455)
* **RFC 2782**: [DNS SRV Records for Decentralized Peer Discovery - IETF](https://datatracker.ietf.org/doc/html/rfc2782)
* **Small-World Graph Theory**: [Watts & Strogatz (1998) - Collective Dynamics of Small-World Networks (*Nature*)](https://www.nature.com/articles/30918)
* **Ed25519 Cryptography**: [Daniel J. Bernstein et al. - High-Speed High-Security Signatures](https://ed25519.cr.yp.to/)

### 🔗 Related Mesh Guides in Credence
* 🕸️ [Tutorial 05: 3-Node Mesh Local Quickstart](../tutorials/05-mesh-quickstart.md)
* 💥 [Tutorial 06: 13-Node Chaos Lab & Byzantine Cartel Defense](../tutorials/06-thirteen-node-chaos-lab.md)
* 📐 [Mathematics of Robust Consensus & Galileo Rule Proof](../mathematics/robust-consensus-proofs.md)
* 💰 [Economics of Decentralized Truth (92.3% Work-Sharing Model)](../mathematics/economics-of-truth.md)
* 💾 [Air-Gapped Truth Bundles & Sneakernet Distribution](../mesh-engineering/airgapped-sneakernets.md)
* 🎮 [Interactive 13-Node Mesh Simulator in Browser](../playground.md)
