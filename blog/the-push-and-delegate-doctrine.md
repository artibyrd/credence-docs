---
title: "The Push-and-Delegate Doctrine: Why Autonomous AI Agents Must Trust Keyless CI/CD Over Local Deploys"
description: "Why running manual deployment commands locally after a git push creates anti-patterns, OAuth timeouts, and state fragmentation, and how push-and-delegate solves it."
category: "Sovereign Essays"
since_version: "v2.1.3"
verified_version: v2.1.1
last_verified: 2026-08-20
---

# The Push-and-Delegate Doctrine: Why Autonomous AI Agents Must Trust Keyless CI/CD Over Local Deploys

One of the subtlest temptations in autonomous AI pair programming is **redundant execution**. When an agent completes a feature, verifies it locally, and executes a git push, it often feels compelled to immediately run a manual deployment command (`just deploy all`, `wrangler deploy`, or `gcloud run deploy`).

In **Credence v2.1.3**, we codified **The Push-and-Delegate CI/CD Invariant** to permanently eliminate this anti-pattern.

---

## 1. The Perils of Dual Deployment

When an engineer or AI agent triggers both a Git push and a manual local deploy, several systemic problems arise:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 Dual Deployment Hazards                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. State Race Conditions:   Local build vs. CI/CD build deploy competing revisions.    │
│ 2. Fragile Credentials:     Local deployment depends on browser OAuth login tokens.    │
│ 3. Wasted Compute Cycles:   Compiling containers and uploading assets twice.           │
│ 4. Audit Trail Blindspots:  Local deploys bypass GitHub Actions audit telemetry logs.  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### The Inherent Strength of Workload Identity Federation (WIF)
The modern Credence compute plane relies on keyless **Workload Identity Federation (WIF)** in GitHub Actions. GitHub Actions authenticates directly with Google Cloud IAM and Cloudflare APIs using short-lived OIDC tokens tied strictly to cryptographic commit signatures (`assertion.repository == 'artibyrd/credence'`).

Local environments, on the other hand, require interactive developer sessions (e.g. `gcloud auth` or Wrangler browser redirects). Running local deploy commands after a push not only duplicates work, but risks stalling on interactive browser authentication dialogs.

---

## 2. The Canonical Pipeline Progression

Under the Push-and-Delegate Doctrine, the lifecycle boundary between developer workstation and production cloud is strictly defined:

$$\text{Code} \xrightarrow{\text{QA Gates}} \text{Mk1 Eyeball} \xrightarrow{\text{Commit \& Tag}} \text{Push to Origin} \xrightarrow{\text{Hand-off}} \text{GitHub Actions CI/CD}$$

```
[ Developer / AI Agent Workstation ]
  1. Write Code & Add Unit/Integrity Tests
  2. Run Hermetic QA Gauntlet (`just check`)
  3. Present Changes for Human Review ("Mk1 Eyeball")
  4. User Approves -> Commit & Tag (`just git-sync commit`, `just git-sync tag`)
  5. Push to GitHub (`just git-sync push`)
       │
       ▼ (Authoritative Boundary Hand-off)
[ GitHub Actions Automated Cloud Plane ]
  6. Verify Multi-Repository Version Parity
  7. Keyless WIF Authentication (OIDC)
  8. Automated Cloud Build & Gen 2 Container Deploy
  9. Cloudflare Edge Router Anycast Propagation
 10. Multi-Plane Telemetry & Health Probe
```

---

## 3. Summary

Once `just git-sync push` reports clean exit code `0`, the agent's work on deployment is done. The cloud belongs to the automated pipeline.
