---
title: 'The Cart-Before-the-Horse Invariant: Prerequisite Order of Operations'
description: Why data models and cryptographic primitives must always precede APIs, UIs, and marketing documentation.
since_version: v1.13.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 25
---

# The Cart-Before-the-Horse Invariant: Prerequisite Order of Operations

In modern software development, teams often suffer from "speculative presentation disease."

Engineers design elaborate UI mockups, draft sweeping case studies, and wire up REST endpoints before the underlying data models, cryptographic primitives, and mathematical formulas have been written, tested, and validated. When the actual implementation begins, the team discovers that their assumptions were flawed: the data model cannot support the promised features, the API contracts change, and the UIs must be completely rewritten.

To eliminate speculative waste, Credence established **The Cart-Before-the-Horse Invariant (`inv-cart-before-horse`)**.

---

## The Strict Order-of-Operations Hierarchy

Under `inv-cart-before-horse`, feature development must proceed through a strict sequential dependency ladder:

```
 1. Mathematical Formulas & Invariants (The Invariant Bible)
                         |
                         ▼
 2. Pydantic Models & SQLModel Database Schemas
                         |
                         ▼
 3. Pure Calculation Pipelines (compute_* functions)
                         |
                         ▼
 4. Hermetic Unit Tests & Mathematical Proofs
                         |
                         ▼
 5. FastMCP 2.0 Tools & REST API Endpoints
                         |
                         ▼
 6. Presentation Layer: Textual TUI & Zero-Build Web Components
                         |
                         ▼
 7. Technical Documentation & Forensic Case Studies
```

---

## Why Documentation Must Come Last

Writing documentation or case studies before the underlying code has passed automated unit tests guarantees documentation drift. When an engineer writes a tutorial based on what they *hope* the CLI syntax will look like, the tutorial inevitably lies to the reader the moment the implementation details evolve.

In Credence:
- Every documented CLI command is statically validated against `argparse` in CI.
- Every documented `just` recipe is verified against the actual `Justfile`.
- Every code snippet in `docs/` is tested in hermetic test suites before publication.

---

## The Payoff: Zero Rework and 100% Verifiable Truth

By respecting the natural dependency order of software, Credence eliminates throwaway UI code, prevents API contract breakage, and ensures that every sentence in our documentation is backed by passing unit tests.

## Architectural Invariants & Verification Mechanics

The implementation of **The Cart Before The Horse Invariant** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **The Cart Before The Horse Invariant** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "blog"

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

* 📘 [The Invariant Bible](../docs/invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../docs/feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../docs/changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../docs/playground.md)
