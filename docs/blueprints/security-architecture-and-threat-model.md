---
title: 'Technical Blueprint: Security Architecture & Threat Model'
description: STRIDE threat model, Ed25519 key custody, SSRF defense, prompt injection boundaries, and keyless WIF CI/CD.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 6
---

# Technical Blueprint: Security Architecture & Threat Model

This document outlines the holistic **Security Architecture & STRIDE Threat Model** protecting the Credence Epistemic Network across compute, edge, and cryptographic layers.

---

## 1. STRIDE Threat Model & Mitigations

| STRIDE Threat | Attack Scenario | Architectural Defense & Invariant |
| :--- | :--- | :--- |
| **Spoofing** | Attacker impersonates an authoritative node to inject fake scores. | **Ed25519 Cryptographic Signatures**: All receipts signed over RFC 8785 canonical bytes with public key verification. |
| **Tampering** | Intermediate relay modifies audit score in transit. | **RFC 8785 Deterministic Hashing**: Any payload alteration invalidates the mathematical signature. |
| **Repudiation** | Node denies having published a defamatory finding. | **Immutable Ed25519 Proof**: Unforgeable signature proves node custody. |
| **Information Disclosure** | Operator API keys leaked via browser scraping or error traces. | **Keyless WIF & Secret Manager**: Secrets isolated in memory; zero keys in client JS. |
| **Denial of Service** | XML entity bomb or unbounded scraping flood. | **Zero-XML Traversal & Token Governor**: Reject DTD/Entity declarations; hourly cost ceilings. |
| **Elevation of Privilege** | Indirect prompt injection in web prose commands the evaluator. | **Hermetic `<untrusted_source_text>` Quarantine**: Strict data/instruction separation. |

---

## 2. Cryptographic Custody Architecture

1. **Root Public Key (`root.pub`)**: Published at `https://keys.credence.foundation/root.pub` to sign canonical governance catalogs and standard schemas.
2. **Node Keypairs (`node.key`)**: Stored locally with POSIX `0600` permissions.
3. **Keyless CI/CD Authentication**: Workload Identity Federation (WIF) eliminates static private keys in CI pipelines.

---

## 3. Ingestion Network Defense (SSRF & Loopback)

All inbound URLs audited by Credence pass through a strict network firewall before HTTP sockets are opened:
- Cloud metadata service IP `169.254.169.254` is permanently blocked.
- Loopback (`127.0.0.0/8`, `::1`) and private RFC 1918 ranges are rejected unless `allow_local=True` is explicitly passed in isolated dev tests.
- Maximum redirect limit is clamped to 3 hops with strict SSL certificate verification.

---

## 4. Verification Commands

```bash
# Run full security and adversarial test suite
$ pytest tests/integration/test_adversarial_fuzzing.py tests/integration/test_epistemic_adversaries.py
```

---

## 5. Related Guides

* 🛡️ [The Adversarial Attack Surface of AI Fact-Checkers](../security/adversarial-attack-surface.md)
* 🎮 [Adversarial Badge Security Lab (Break the Badge)](../lab-badge-security.md)
* 📘 [The Invariant Bible](../invariants.md) — Sovereign Safety & Network Defense

## Architectural Invariants & Verification Mechanics

The implementation of **Security Architecture And Threat Model** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Security Architecture And Threat Model** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blueprints"

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
