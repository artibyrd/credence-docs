---
title: 'Blast Radius Containment in Decentralized Networks'
description: An architectural essay on preventing cross-environment state bleed, key compromise containment, and epistemic security.
since_version: v1.18.0
verified_version: v2.16.8
last_verified: 2026-08-25
sidebar:
  order: 14
---

# Blast Radius Containment in Decentralized Networks

In a decentralized peer-to-peer trust network, **blast radius containment** is not an optimization—it is an existential survival prerequisite.

If an experimental developer build, a rogue staging container, or a compromised ephemeral node can broadcast invalid audit attestations that pollute the shared Bayesian ledger, the entire consensus collapses. Trust in distributed systems is asymmetric: it takes thousands of verified evaluations to build reputation, and a single poisoned consensus state to destroy it.

When designing Credence, we engineered blast radius containment into every layer of the system: from cryptographic key custody to multi-cloud IAM boundaries.

---

## The 3-Plane Blast Radius Boundary

Credence enforces physical and logical separation across three decoupled architectural planes:

1. EDGE PLANE (Cloudflare Anycast CDN & Workers)
- Public routing, vector SVG caching, zero-npm static delivery
- Blast Containment: Edge can never access database write credentials
2. COMPUTE PLANE (Google Cloud Run v2 Stateless Containers)
- Epistemic evaluation pipelines, LLM adapters, FastMCP 2.0
- Blast Containment: Scale-to-Zero isolation; ephemeral RAM state
3. INFRASTRUCTURE & LEDGER PLANE (Sovereign Storage & Root Custody)
- SQLite WAL / Cloud SQL, Ed25519 root keys (credence.foundation)
- Blast Containment: Posix 0600 keys; keyless WIF authentication

---

## Dual-Project GCP Isolation: Preventing State Bleed

A common anti-pattern in cloud architectures is hosting Development and Production workloads inside the same cloud project under different naming prefixes. While convenient, a single IAM misconfiguration or leaked service account key grants full read/write access across both environments.

Credence mandates **Dual-Project Physical Isolation**:
1. **Development Project (`credence-dev-495173`)**: Completely independent billing, separate Secret Manager instances, and ephemeral SQLite state. All test node attestations are signed with developmental Ed25519 keys tagged `stage=dev`.
2. **Production Project (`credence-prod-505902`)**: Production Google Cloud Run services communicate exclusively with production Secret Manager vaults. Production mesh nodes automatically reject any gossip envelope signed with a `stage=dev` public key.

---

## Network Ingestion Boundaries & SSRF Firewalls

When autonomous nodes fetch external web URLs for ethical and factual evaluation, malicious actors frequently attempt **Server-Side Request Forgery (SSRF)** attacks to query internal cloud infrastructure:

- **Cloud Metadata Interception**: Querying `http://169.254.169.254/computeMetadata/v1/` to steal container service account tokens.
- **Localhost Loopback Pivoting**: Attempting to access internal admin ports (`http://localhost:8765/admin`).

Credence enforces strict ingestion defense in accordance with `inv-untrusted-ingestion`:
- All IP addresses are resolved before socket initialization. Link-local (`169.254.0.0/16`), loopback (`127.0.0.0/8`), and private RFC 1918 networks are permanently blacklisted at the kernel level.
- Maximum redirect chains are clamped to $\le 3$ hops, with SSL certificates enforced unconditionally.

---

## Cryptographic Key Rotation & Quarantine Blast Walls

If a peer node's Ed25519 private key is compromised:
1. **Instant Reputation Slashing**: The network triggers an automated 50% score slash across all historical evaluations associated with the compromised public key.
2. **Bayesian Quarantine**: The compromised node ID is broadcast via the P2P gossip quarantine topic (`EPEP-17`), causing peer nodes to drop all incoming messages from that key within $O(\log N)$ network propagation time.
3. **Zero Impact on Root Custody**: Because individual node keys cannot modify the root governance catalog (`keys.credence.foundation/root.pub`), network-wide standards remain 100% untampered.

By constraining failure to isolated cryptographic cells, Credence ensures that the truth of the network remains unshakeable.

---
## Key Architectural Takeaways & Future Directions

The investigation documented in **Blast Radius Containment In Decentralized Networks** highlights several fundamental principles for building resilient, decentralized software systems:

1. **Decouple Heuristics from Probabilistic Inference**: By layering fast, deterministic filters ahead of complex reasoning models, systems achieve sub-second execution while conserving computational resources.
2. **Anchor Trust in Cryptographic Provenance**: Rather than trusting centralized platform credentials, all evaluative findings must be backed by verifiable digital signatures over canonical bytes.
3. **Continuous Shift-Left Verification**: Real-world robustness is maintained through daily mutating test gauntlets and strict invariant enforcement.

| System Dimension | Conventional Approach | Credence Sovereign Architecture |
| :--- | :--- | :--- |
| **Trust Model** | Centralized authority / Platform badges | Decentralized Ed25519 cryptographic receipts |
| **Compute Strategy** | Monolithic unconstrained LLM calls | Multi-tiered heuristic and token-budgeted pipelines |
| **Frontend Delivery** | Heavy bundled frameworks (npm) | Zero-build Vanilla HTML5 / Native ES Modules |
