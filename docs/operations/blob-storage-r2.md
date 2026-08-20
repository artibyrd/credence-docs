---
title: 'Operational Guide: Content-Addressable Blob Storage with Cloudflare R2'
description: Operational guide for configuring S3-compatible zero-egress Cloudflare R2 storage for HTML DOM captures and visual screenshots.
since_version: v1.17.0
verified_version: v1.17.0
last_verified: '2026-08-19'
---

# Operational Guide: Content-Addressable Blob Storage with Cloudflare R2

Credence stores raw captured HTML DOM trees and visual PNG screenshots in **Content-Addressable Storage (CAS)**.

---

## 1. Zero-Egress Economics

Traditional cloud providers (AWS S3, GCP Cloud Storage) charge between $0.08 and $0.12 per GB of internet egress. In contrast, **Cloudflare R2** charges **$0.00 egress fees**, enabling infinite public inspection of verified forensic snapshots at zero marginal cost.

---

## 2. Key Structure & CAS Validation

Keys are strictly formatted by SHA-256 hash:
`cas/sha256/{content_sha256}.html`
`cas/sha256/{content_sha256}.png`

All keys are validated against regex `^cas/sha256/[a-f0-9]{64}\.(html|png)$` before write or read operations, preventing directory traversal attacks.
