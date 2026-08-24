---
title: 'Technical Blueprint: Security Architecture & Threat Model'
description: Adversarial threat model and zero-trust security architecture for planetary scale Credence deployments.
since_version: v1.17.0
verified_version: v2.14.0
last_verified: 2026-08-23
---

# Technical Blueprint: Security Architecture & Threat Model

This document establishes the zero-trust security controls protecting Credence nodes against network exploitation, state poisoning, and prompt injection.

---

## 1. Threat Vector & Countermeasure Matrix

![Figure 1.1: Comprehensive security architecture, threat model, and untrusted boundary defenses](assets/illustrations/security-architecture-and-threat-model.svg)---

## 2. Ingestion Defense Specifications
- **Single-Resolution DNS Pinning**: Resolves host IP once, validates non-routable ranges, and opens raw sockets directly to the pinned IP with `Host:` attached.
- **Decompression Caps**: Enforces `max_content_length = 10_485_760` (10MB) on chunked streams.
- **External Text Isolation**: Untrusted scraped prose is wrapped in `<untrusted_source_text>` XML containers before entering subagent context.
