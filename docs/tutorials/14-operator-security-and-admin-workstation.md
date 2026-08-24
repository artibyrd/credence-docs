---
title: 'Tutorial 14: Operator Security & Admin Workstation Setup'
description: Secure your production node with Cloudflare Access Zero Trust, Ed25519 operator tokens, and admin cockpit controls.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 14
---

# Tutorial 14: Operator Security & Admin Workstation Setup

In this tutorial, you will harden your production Credence node using **Cloudflare Access Zero Trust**, **Ed25519 operator authentication**, and configure the **Admin Cockpit** (`admin.credence.run`).

---

## 1. The Operator Security Threat Model

The Admin Cockpit allows authorized operators to trip emergency circuit breakers, adjust token spending ceilings, trigger exploratory boredom crawls, and manage domain quarantine states. Securing this interface against unauthorized access is paramount.

---

## 2. Minting Secure Operator Tokens

Every administrative API request requires a cryptographically signed Bearer token derived from the operator's private key:

```bash
# Bootstrap local .env with a high-entropy operator token
$ credence identity mint-operator-token --output-env

# Display public key binding
$ credence identity show --operator
```

---

## 3. Protecting Admin Cockpit with Cloudflare Access

To prevent public internet exposure of your admin cockpit:
1. Navigate to **Cloudflare Zero Trust Dashboard** $\rightarrow$ **Access** $\rightarrow$ **Applications**.
2. Add an application for `admin.credence.run`.
3. Configure an Access Policy requiring **GitHub SSO** or **Hardware Security Keys (WebAuthn / FIDO2)** restricted to your authorized engineering team emails.

---

## 4. Launching the Admin Cockpit

Access the admin cockpit in your browser or terminal:

```bash
# Open authenticated admin cockpit in terminal
$ credence tui cockpit

# Or launch local zero-build admin web portal
$ credence tui serve --port 8768
```

---

## 5. API & CLI Authentication Reference

When making automated administrative REST API calls:

```bash
# Authenticate API call using operator token header
$ curl -fsSL -H "Authorization: Bearer $(credence identity get-token)" \
    https://admin.credence.run/api/v1/governor/brake
```

---

## 6. Related Documentation

* 🛡️ [Security Architecture & Threat Model Blueprint](../blueprints/security-architecture-and-threat-model.md)
* 📘 [The Invariant Bible](../invariants.md) — Sovereign Safety & Human Authority

## Architectural Invariants & Verification Mechanics

The implementation of **14 Operator Security And Admin Workstation** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **14 Operator Security And Admin Workstation** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "tutorials"

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
