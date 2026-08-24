---
title: 'Architectural Blueprint: The Information Pyramid & Epistemic Lensing'
description: The 3-Tier Cognitive Hierarchy, Surface/Focus/Deep Spectrum Lenses, and progressive disclosure UI architecture.
since_version: v1.12.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 10
---

# Architectural Blueprint: The Information Pyramid & Epistemic Lensing

The **Information Pyramid & Epistemic Lensing Invariant (`inv-epistemic-lensing`)** governs how complex forensic evidence, mathematical scores, and cryptographic attestations are presented across human and machine interfaces.

---

## 1. The 3-Tier Cognitive Hierarchy

Digital prose auditing produces vast quantities of forensic data (DOM trees, token distributions, SimHash matrices, Ed25519 bytes). Dumping this data in a wall-of-text creates cognitive fatigue. Credence organizes presentation into **3 Decoupled Cognitive Lenses**:

| Epistemic Lens Tier | Information Granularity | Target User Persona | Inspection Time Horizon | Cryptographic Proof Depth |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Surface Lens (Glance)** | Suspicion Score (0–100), DCI rating, classification pill badge | General readers & quick scanning | `<1 second` | Color-coded visual status |
| **Tier 2: Focus Lens (Explore)** | Specific violated rules, verbatim DOM quotes, claim cards | Investigative journalists & researchers | `<10 seconds` | Character quote exactness ($G=1.00$) |
| **Tier 3: Deep Spectrum Lens (Forensic)**| Canonical RFC 8785 JSON bytes, SimHash grids, Ed25519 signatures | Forensic auditors & autonomous agents | `<60 seconds` | Full mathematical proof |

---

## 2. Lens Specifications & Interface Mapping

### 2.1 Surface Lens (Glance: $<1$ Second)
- **Objective**: Immediate trust comprehension for general readers.
- **Components**: Color-coded SVG pill badge (`#10b981` PRISTINE), calibrated numeric score (`14.2 / 100`), and one-sentence executive summary.
- **Interfaces**: `<credence-badge>` embed, CLI default output, TUI Top Summary bar.

### 2.2 Focus Lens (Explore: $<10$ Seconds)
- **Objective**: Editorial understanding of specific journalistic defects.
- **Components**: Grouped violation cards, verbatim DOM quotes highlighting extracted assertions, confidence ratings, and taxonomy citations (SPJ, IEP).
- **Interfaces**: Web Report Inspector tab, CLI `--verbose` / `--lens focus`, TUI Finding Browser.

### 2.3 Deep Spectrum Lens (Forensic: Deep Analysis)
- **Objective**: Full cryptographic and reproducible verification for researchers, legal counsel, and autonomous agents.
- **Components**: Complete RFC 8785 canonical JSON bytes, SHA-256 hashes, 64-tile SimHash differential grids, and Ed25519 signature hex strings.
- **Interfaces**: Web ClaimReview / RFC 8785 tab, CLI `--json` / `--lens forensic`, FastMCP tool responses.

---

## 3. CLI Command Options

```bash
# Default Surface Lens view
$ credence audit https://example.com/article

# Focus Lens (Claim Cards & Grounded Quotes)
$ credence audit https://example.com/article --lens focus

# Deep Spectrum Lens (Raw RFC 8785 Attestation JSON)
$ credence audit https://example.com/article --lens forensic
```

---

## 4. Related Protocols & Blueprints

* 📘 [The Invariant Bible](../invariants.md) — Epistemic Lensing & Information Pyramid
* 📊 [Unified Merit & Attestation Badge System](unified-merit-and-attestation-badge-system.md)
* 🎮 [Interactive Report Viewer](https://credence.report/viewer.html)

## Architectural Invariants & Verification Mechanics

The implementation of **Information Pyramid And Epistemic Lensing** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Information Pyramid And Epistemic Lensing** using standard CLI commands and FastMCP 2.0 tools:

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