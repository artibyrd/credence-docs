---
title: 'Launch Parity: The Death of "It Worked in Staging"'
description: A sovereign engineering manifesto on synchronized dual-target release pipelines and deterministic environment parity.
since_version: v1.18.0
verified_version: v2.15.1
last_verified: 2026-08-24
---

# Launch Parity: The Death of "It Worked in Staging"

The phrase *"it worked in staging"* is a symptom of architectural drift. When staging runs on different Docker configurations, different database versions, or different routing layers than production, bugs slip through unnoticed.

Credence enforces **Synchronized Launch Parity**:
1. **Single OCI Build**: One immutable container digest is compiled once.
2. **Sequential Dual Deploy**: That identical digest is deployed to the Dev target first, probed with live health checks, and immediately deployed to Production.
3. **Dual-Target Edge Routing**: The Cloudflare Edge Router routes `dev.*` subdomains to Dev and root domains to Prod with zero code variance.

Parity is not a wish; it is an architectural invariant.
