---
title: 'Cookbook: Local Dev to Cloud Run Fast-Path Workflow'
description: Step-by-step developer recipe for editing locally, testing with basic SQLite, and pushing revisions to dev Cloud Run in seconds.
since_version: v1.18.0
verified_version: v2.13.0
last_verified: 2026-08-23
---

# Cookbook: Local Dev to Cloud Run Fast-Path Workflow

Follow this practical workflow for rapid daily coding and immediate testing on your dev Cloud Run instance.

---

## 1. Edit and Test Locally

```bash
# 1. Edit code and run targeted unit tests
just test-unit

# 2. Run fast parallel pre-commit check (<3s)
just check
```

---

## 2. Push to Dev Cloud Run

```bash
# Deploy instantly to dev
just cloud-deploy-dev

# Probe live endpoints
just cloud-probe credence-dev dev
```
