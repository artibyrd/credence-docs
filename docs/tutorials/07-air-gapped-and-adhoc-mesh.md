---
title: 'Tutorial 07: Air-Gapped Sneakernets & Offline Ad-Hoc Verification'
description: Export and verify Ed25519 audit bundles across offline environments, disaster zones, and air-gapped networks.
since_version: v1.0.0
verified_version: v2.17.0
last_verified: 2026-08-25
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

* 📄 **`manifest.json`**: Canonical RFC 8785 manifest signed by exporter Ed25519 key
* 📁 **`attestations/`**: Array of signed Ed25519 audit JSON receipts
* 📁 **`snapshots/`**: Scrubber-normalized HTML DOM text files
* 📁 **`keys/`**: Public root authority key (`root.pub`) for offline verification

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

---
## Air-Gapped Sneakernets: Exporting & Verifying Offline Attestations

```bash
# Step 1: Export signed attestation bundle to external media
$ credence verify --export-bundle /media/usb/truth-bundle-2026.tar.gz

# Step 2: Verify offline cryptographic bundle on air-gapped machine
$ credence verify --import-bundle /media/usb/truth-bundle-2026.tar.gz --offline
```

| Bundle Manifest Component | File Path | Cryptographic Purpose |
| :--- | :--- | :--- |
| **Attestation Receipt** | `manifest.json` | RFC 8785 canonical JSON envelope |
| **Normalized DOM** | `cas/sha256/...` | SHA-256 digested HTML source text |
| **Public Keys** | `keys/root.pub` | Root trust anchor for offline verify |
