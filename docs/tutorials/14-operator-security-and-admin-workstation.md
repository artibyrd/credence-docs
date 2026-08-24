---
title: 'Tutorial 14: Operator Security, Admin Bootstrapping & Workstation Operations'
description: Comprehensive guide to bootstrapping operator authentication, managing AI cost budgets, and operating the Web Admin Command Deck.
since_version: v2.2.0
verified_version: v2.14.0
last_verified: 2026-08-23
---

# Tutorial 14: Operator Security, Admin Bootstrapping & Workstation Operations 🛡️

In this tutorial, you will configure **Operator Security & Authentication**, bootstrap admin keys across local, dev, and prod environments, and operate the **Web Admin Command Cockpit** (`https://admin.credence.run`) to govern AI cost budgets, trigger germination bursts, and manage background sifting daemons.

---

## 🌐 The Public Transparency Invariant

Credence operates under a strict sovereign transparency principle:

> 💡 **Public Transparency Invariant**:
> **100% of telemetry, audit reports, DCI domain rankings, mesh topologies, node vitals, and taxonomy catalogs remain unrestricted and publicly readable.**
> Authentication is **only** required for mutative operational actions (adjusting budgets, pulling the emergency brake, triggering sifter/germination bursts, or modifying node settings).

---

## 1. Prerequisites

- Credence installed locally (`just ignite` or `poetry install`).
- FastMCP / Starlette backend running (`just serve web`).

---

## 2. Bootstrapping Operator Credentials

Credence supports a pluggable 3-mode authentication engine:

:::tabs
=== Local Development (1-Command)
For local development, Credence generates a cryptographically secure token automatically:

```bash
# Bootstrap local .env with a secure token
just auth-bootstrap local

# Print active operator token
just auth-token
```

This seeds `CREDENCE_ADMIN_API_KEY="cred_adm_..."` directly into your local `.env`.

=== GCP Cloud Run (Dev & Prod)
For Cloud Run deployments, the admin key is securely stored in **GCP Secret Manager**:

```bash
# Guide and verify Dev Secret Manager setup (credence-dev-495173)
just auth-bootstrap dev

# Guide and verify Prod Secret Manager setup (credence-prod-505902)
just auth-bootstrap prod
```

=== Google Workspace & GitHub SSO
To allow browser-based 1-click SSO for node operators, configure your email allowlist and OAuth client ID in `.env` or Terraform:

```bash
# Allowlist operator emails
CREDENCE_ADMIN_EMAILS="lead@credence.run,ops@credence.run"

# Optional Google OAuth Client ID
CREDENCE_OAUTH_GOOGLE_CLIENT_ID="1234567890-xyz.apps.googleusercontent.com"
```
:::

---

## 3. Unlocking the Web Admin Command Cockpit

1. Navigate to **`https://admin.credence.run`** in your browser (or `/admin.credence.run/` locally).
2. The initial view displays the gated authentication card: `🔒 Operator Authentication Gated`.
3. Click **`🔑 Authenticate with Operator Key`** to open the authentication modal.
4. Paste your operator key (`cred_adm_...`) or sign in via Google Workspace.
5. Once authenticated, the HUD illuminates: `🔓 OPERATOR MODE: ACTIVE`, unlocking all runtime controls and live telemetry feeds.

---

## 4. Operating the Command Cockpit

Inside the unlocked **Admin Command Cockpit** (`admin.credence.run`), you have instant sovereign control:

### ⚡ AI Token & Cost Governance
- **Daily Budget Ceiling ($USD)**: Adjust daily spend limit via interactive range sliders (e.g. `$5.00`).
- **Max Tokens / Hour**: Cap throughput to prevent unexpected traffic spikes (e.g. `100,000`).
- **Cost Profile Switcher**: Switch on-the-fly between `Economy`, `Balanced`, and `Ultra`.
- **Emergency Stop**: Instantly halt all model inference with 1 click.

### 🌱 Miracle-Gro Node Germination
- Trigger rapid burst audits (1–25 batches) to seed the local SQLite database and verify WAL pipeline health.

### 📡 Feed Sifter & Boredom Daemons
- Force an immediate sifter cycle across subscribed feeds.
- Expand cited domain roots into new feed subscriptions.
- Execute an opportunistic boredom loop utilizing spare token headroom ($H \ge 30\%$).

---

## 5. API & CLI Authentication

When interacting with Credence programmatically or via CLI, pass your key via headers:

```bash
# Authenticate REST API with Bearer token
curl -X POST https://admin.credence.run/api/cost/emergency-stop \
  -H "Authorization: Bearer $(just auth-token)"

# Authenticate via custom header
curl -X POST https://admin.credence.run/api/germinate?burst=3 \
  -H "X-Credence-Admin-Key: $(just auth-token)"
```

---

## 6. Verification Checklist

| Checkpoint | Target | Command / Action | Status |
| :--- | :--- | :--- | :--- |
| **Local Token Generation** | `.env` updated | `just auth-bootstrap local` | ✅ Verified |
| **Gated API Protection** | Returns 401 unauth | `curl -X POST http://localhost:8000/api/cost/budget` | ✅ Verified (401) |
| **Authorized API Execution** | Returns 200 auth | `curl -X POST http://localhost:8000/api/auth/verify -H "Authorization: Bearer <key>"` | ✅ Verified (200) |
| **Workstation Unlock** | Active session | Unlock `admin.credence.run` | ✅ Verified |
