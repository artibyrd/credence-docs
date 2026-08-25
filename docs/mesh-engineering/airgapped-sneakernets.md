---
title: Air-Gapped Truth Bundles & Sneakernets
description: Exporting and importing cryptographically signed .credence.bundle archives
  across air-gapped secure facilities, vessels, or conflict zones.
since_version: v1.0.0
verified_version: v2.17.1
last_verified: 2026-08-25
---

# Air-Gapped Truth Bundles & Sneakernets

In environments with total internet censorship, maritime isolation, or military air-gaps, live WebSocket mesh peering is impossible.

Credence supports **Air-Gapped Truth Bundles (`.credence.bundle`)** allowing offline nodes to exchange signed attestations, consensus scores, and taxonomy catalogs over physical media (USB drives, SD cards, local ad-hoc Wi-Fi).

---

## 1. The Air-Gapped Sneakernet Flow

Sneakernet synchronization operates through a three-step physical custody transfer:
1. **Online Export**: Connected frontier nodes export signed attestation bundles to encrypted physical storage.
2. **Physical Transit**: Media is transported across air-gap perimeters to isolated facilities or vessels.
3. **Offline Ingestion**: Air-gapped nodes verify Ed25519 signatures locally and integrate new attestations without network connectivity.

---

## 2. Exporting an Epistemic Truth Bundle

From an online node:

```bash
# Export all attestations and taxonomy updates from the past 48 hours
credence bundle export \
  --output ./bundles/truth-bundle-2026-08-17.credence.json \
  --since 48h \
  --include-taxonomies
```

### Bundle Structure (`truth-bundle.credence.json`):
```json
{
  "bundle_version": "1.0.0",
  "generated_at_utc": "2026-08-17T18:00:00Z",
  "issuer_pubkey": "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
  "attestation_count": 142,
  "attestations": [ ... ],
  "taxonomies": [ ... ],
  "bundle_signature_ed25519": "c9a8b7..."
}
```

---

## 3. Importing into an Air-Gapped Node

On the isolated system:

```bash
credence bundle import ./bundles/truth-bundle-2026-08-17.credence.json
```

### Verification Safeguards:
1. **Root Signature Verification**: Verifies the bundle envelope signature against known genesis public keys.
2. **Itemized Attestation Verification**: Iterates over every enclosed `AuditReport`, checking Ed25519 signatures and RFC 8785 canonical bytes.
3. **Hermetic DB Ingestion**: Populates local SQLite database without initiating any outbound network connections.

---
## Air-Gapped Sneakernets & Offline Truth Bundles

For journalists and researchers operating in restricted environments with zero internet access, Credence exports signed attestations to offline USB bundles:

```bash
# Export signed attestations to air-gapped bundle
$ credence verify --export-bundle /media/usb/truth-bundle-2026.tar.gz

# Verify offline bundle on air-gapped laptop
$ credence verify --import-bundle /media/usb/truth-bundle-2026.tar.gz --offline
```

| Offline Bundle Structure | File Path | Verification Requirement |
| :--- | :--- | :--- |
| **Attestation Registry** | `attestations.json` | RFC 8785 Ed25519 signature checks |
| **Normalized DOM CAS** | `cas/sha256/...` | SHA-256 content address validation |
| **Public Trust Anchors** | `keys/peers.pub` | Hardcoded genesis public keys |

---
## Offline Attestation Verification on Air-Gapped Sneakernets

Exporting signed CAS bundles to USB media allows researchers to verify truth attestations in completely disconnected environments.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Airgapped Sneakernets** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "airgapped_sneakernets" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
