---
title: 'Tutorial 14: Operator Security & Admin Workstation Setup'
description: Secure your production node with Cloudflare Access Zero Trust, Ed25519 operator tokens, and admin cockpit controls.
since_version: v1.13.0
verified_version: v2.17.0
last_verified: 2026-08-25
sidebar:
  order: 14
---

# Tutorial 14: Operator Security & Admin Workstation Setup

In this tutorial, you will harden your production Credence node using **Cloudflare Access Zero Trust**, **Ed25519 operator authentication**, and configure the **Admin Cockpit** (`admin.credence.run`).

---

## 1. The Operator Security Threat Model

The Admin Cockpit allows authorized operators to trip emergency circuit breakers, adjust token spending ceilings, trigger exploratory boredom crawls, and manage domain quarantine states. Securing this interface against unauthorized access is paramount.

---

## 2. Minting Secure Operator Tokens

Every administrative API request requires a cryptographically signed Bearer token derived from the operator's private key:

```bash
# Bootstrap local .env with a high-entropy operator token
$ credence identity mint-operator-token --output-env

# Display public key binding
$ credence identity show --operator
```

---

## 3. Protecting Admin Cockpit with Cloudflare Access

To prevent public internet exposure of your admin cockpit:
1. Navigate to **Cloudflare Zero Trust Dashboard** $\rightarrow$ **Access** $\rightarrow$ **Applications**.
2. Add an application for `admin.credence.run`.
3. Configure an Access Policy requiring **GitHub SSO** or **Hardware Security Keys (WebAuthn / FIDO2)** restricted to your authorized engineering team emails.

---

## 4. Launching the Admin Cockpit

Access the admin cockpit in your browser or terminal:

```bash
# Open authenticated admin cockpit in terminal
$ credence tui cockpit

# Or launch local zero-build admin web portal
$ credence tui serve --port 8768
```

---

## 5. API & CLI Authentication Reference

When making automated administrative REST API calls:

```bash
# Authenticate API call using operator token header
$ curl -fsSL -H "Authorization: Bearer $(credence identity get-token)" \
    https://admin.credence.run/api/v1/governor/brake
```

---

## 6. Related Documentation

* 🛡️ [Security Architecture & Threat Model Blueprint](../blueprints/security-architecture-and-threat-model.md)
* 📘 [The Invariant Bible](../invariants.md) — Sovereign Safety & Human Authority

---
## Operator Security & Admin Workstation Operations

```bash
# Launch Admin Command Deck with secure local token
$ credence serve --port 8080 --admin
```

| Security Dimension | Protection Standard | Safeguard Rationale |
| :--- | :--- | :--- |
| **Operator Token Auth** | High-entropy Bearer token | Prevents unauthorized admin API access |
| **Memory Isolation** | Scale-to-zero container | Ephemeral RAM state with zero leak risk |
| **Emergency Killswitch** | `POST /api/governor/emergency-stop` | Instantly halts all background LLM burn |

---
## Securing the Web Admin Deck and Managing Budgets

Comprehensive tutorial on configuring Bearer token auth and managing token budgets from the Admin Command Deck.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **14 Operator Security And Admin Workstation**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **14 Operator Security And Admin Workstation** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "14_operator_security_and_admin_workstation" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
