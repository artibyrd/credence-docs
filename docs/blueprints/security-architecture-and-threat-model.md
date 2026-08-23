---
title: 'Technical Blueprint: Security Architecture & Threat Model'
description: Adversarial threat model and zero-trust security architecture for planetary scale Credence deployments.
since_version: v1.17.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Technical Blueprint: Security Architecture & Threat Model

This document establishes the zero-trust security controls protecting Credence nodes against network exploitation, state poisoning, and prompt injection.

---

## 1. Threat Vector & Countermeasure Matrix

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         ADVERSARIAL THREAT VECTOR & ZERO-TRUST DEFENSE MATRIX                    │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────┬────────────────────────────────────────────────────────────────┐   │
│ │ Adversarial Threat Vector │ Zero-Trust Cryptographic & Network Defense                     │   │
│ ├───────────────────────────┼────────────────────────────────────────────────────────────────┤   │
│ │ 1. SSRF & DNS Rebinding   │ Single-Resolution DNS Pinning & Strict RFC 1918 / Cloud IP Drop│   │
│ │ 2. Edge Cache Poisoning   │ Ed25519 Canonical Origin Signature Verification Lock           │   │
│ │ 3. Redis State Tampering  │ Constant-Time Admin Bearer Auth (`hmac.compare_digest`) & Clamp│   │
│ │ 4. Blob Traversal Attack  │ Strict `^[a-f0-9]{64}$` SHA-256 Hex Hash Key Whitelisting      │   │
│ │ 5. Decompression Bombs    │ Hard 10MB Streaming Response Cap & DefusedXML Entity Stripping │   │
│ └───────────────────────────┴────────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 🛡️ Invariant: Untrusted scraped DOM wrapped in `<untrusted_source_text>` isolation boundary       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Ingestion Defense Specifications
- **Single-Resolution DNS Pinning**: Resolves host IP once, validates non-routable ranges, and opens raw sockets directly to the pinned IP with `Host:` attached.
- **Decompression Caps**: Enforces `max_content_length = 10_485_760` (10MB) on chunked streams.
- **External Text Isolation**: Untrusted scraped prose is wrapped in `<untrusted_source_text>` XML containers before entering subagent context.
