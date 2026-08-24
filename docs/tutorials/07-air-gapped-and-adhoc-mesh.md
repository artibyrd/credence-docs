---
title: 'Tutorial 07: Air-Gapped Sneakernets & Offline Ad-Hoc Verification'
description: Export and verify Ed25519 audit bundles across offline environments, disaster zones, and air-gapped networks.
since_version: v1.0.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 7
---

# Tutorial 07: Air-Gapped Sneakernets & Offline Ad-Hoc Verification

In this tutorial, you will learn how to export, transport, and cryptographically verify **Air-Gapped Attestation Bundles** (`.credence.tar.gz`) across offline sneakernets, isolated field laptops, and disaster-zone local networks with **zero internet connectivity**.

---

## 1. Why Offline Epistemic Verification Matters

In extreme operational scenarios—such as war zones, internet blackouts, natural disasters, or high-security air-gapped research facilities—access to public fact-checking APIs and cloud LLMs is physically impossible. Disinformation thrives during communication outages.

Credence solves this using **Sovereign Attestation Bundles**:
- A field node or satellite-connected workstation audits breaking news and generates Ed25519-signed attestations over deterministic RFC 8785 canonical JSON bytes.
- The attestations, along with their cryptographic root signatures and DOM snapshots, are exported to a portable archive.
- The bundle is transferred via physical USB drive, MicroSD card, or local ad-hoc Wi-Fi / LoRa mesh.
- Any offline recipient node verifies the mathematical signatures locally using public keys with $0$ bytes of external network traffic.

---

## 2. Exporting an Attestation Bundle from an Online Node

On your internet-connected workstation, export an attestation bundle for the latest audited articles:

```bash
# Export the last 50 verified audits into an air-gapped bundle
$ credence bundle export \
    --output ./field-bundle-2026-08-24.credence.tar.gz \
    --count 50 \
    --include-snapshots
```

### Inspected Bundle Structure

```
field-bundle-2026-08-24.credence.tar.gz
+-- manifest.json              # Canonical RFC 8785 manifest signed by exporter
+-- attestations/              # Array of signed Ed25519 audit JSON receipts
|   +-- e3b0c442...json
|   +-- 9f8b7c6a...json
+-- snapshots/                 # Scrubber-normalized HTML DOM text files
+-- keys/
    +-- root.pub               # Ed25519 public root authority key
```

---

## 3. Transferring & Importing on an Air-Gapped Host

Copy the `.tar.gz` archive to a USB drive and insert it into your air-gapped laptop:

```bash
# Verify bundle integrity and cryptographic signatures before import
$ credence bundle verify ./field-bundle-2026-08-24.credence.tar.gz

# Import verified receipts into local air-gapped SQLite WAL ledger
$ credence bundle import ./field-bundle-2026-08-24.credence.tar.gz
```

---

## 4. Querying Audits Completely Offline

Launch your local offline UI or CLI to query imported attestations:

```bash
# Query audit status for an article hash offline
$ credence verify file://downloaded-article.html --bundle ./field-bundle-2026-08-24.credence.tar.gz

# Or inspect in the local Textual TUI Workstation
$ credence tui --offline
```

### Result Analysis
The air-gapped node calculates the SHA-256 hash of the local HTML file, looks up the signed attestation in its local WAL cache, and verifies the Ed25519 signature in **$0.4\text{ms}$** with zero network calls.

---

## 5. Next Steps

* 💥 [Tutorial 08: Sybil Cartel Demolition](08-sybil-cartel-demolition.md)
* 💾 [Air-Gapped Truth Bundles Specification](../mesh-engineering/airgapped-sneakernets.md)
* 📘 [The Invariant Bible](../invariants.md) — Ed25519 & RFC 8785 Invariants

## Architectural Invariants & Verification Mechanics

The implementation of **07 Air Gapped And Adhoc Mesh** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **07 Air Gapped And Adhoc Mesh** using standard CLI commands and FastMCP 2.0 tools:

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
