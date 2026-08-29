---
title: 'Technical Blueprint: Security Architecture & Threat Model'
description: STRIDE threat model, Ed25519 key custody, SSRF defense, prompt injection boundaries, and keyless WIF CI/CD.
since_version: v1.14.0
verified_version: v2.18.2
last_verified: 2026-08-29
sidebar:
  order: 6
---

# Technical Blueprint: Security Architecture & Threat Model

![Figure 1.1: Multi-layered security architecture and adversarial threat mitigation model](assets/illustrations/security-architecture-and-threat-model.svg)


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

---
## Threat Modeling & Defense-in-Depth Matrix

Credence is engineered to withstand adversarial attacks across network, parsing, LLM inference, and cryptographic layers:

| Threat Vector | Attack Mechanism | Credence Defense Invariant | Implementation Subsystem |
| :--- | :--- | :--- | :--- |
| **SSRF & Metadata Exfiltration**| Probing `169.254.169.254` | `inv-untrusted-ingestion` | Network pre-request IP filter |
| **XML Bomb / DoS** | Deeply nested DTD entity expansions | Reject `<!DOCTYPE` / `<!ENTITY>` | Fast HTML parser sanitization |
| **Prompt Injection Smuggling** | Hidden instructions in HTML comments | Wrap inputs in XML wrappers | `<untrusted_source_text>` isolation |
| **Bait-and-Switch Tampering**| Modifying article text post-audit | `inv-canonical-json-ed25519` | SHA-256 CAS digest validation |
| **Sybil Cartel Smears** | Colluding nodes submitting fake 0.0 scores| Weighted Bayesian Medians | $3f+1$ Byzantine isolation |

---
## Multi-Layered Threat Mitigation Architecture

By isolating untrusted ingestion inside XML wrappers and enforcing Ed25519 signatures, the system neutralizes SSRF, DoS, and prompt injection attacks.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **Security Architecture And Threat Model** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Security Architecture And Threat Model** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "security_architecture_and_threat_model" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
