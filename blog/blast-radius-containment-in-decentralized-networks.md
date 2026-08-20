---
title: 'Blast Radius Containment in Decentralized Networks'
description: An architectural essay on preventing cross-environment state bleed, key compromise containment, and epistemic security.
since_version: v1.18.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Blast Radius Containment in Decentralized Networks

Decentralized consensus networks require uncompromising blast radius containment. If an experimental node or developer build can poison the shared epistemic ledger, consensus collapses.

Credence achieves absolute containment through:
1. **Cryptographic Key Separation**: Distinct Ed25519 root keys for dev and prod.
2. **Dual-Project GCP IAM Boundaries**: Zero credential sharing across project lines.
3. **Strict Ingestion SSRF Firewalls**: Hermetic fixture permissions in dev, zero-tolerance IP blocklists in prod.
