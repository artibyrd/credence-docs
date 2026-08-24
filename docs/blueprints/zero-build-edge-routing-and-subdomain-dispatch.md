---
title: 'Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch'
description: Technical architecture of Cloudflare Anycast edge routing, multi-domain dispatching, and cache tiering across production and dev subdomains.
since_version: v1.18.0
verified_version: v2.15.1
last_verified: 2026-08-24
---

# Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch

This blueprint details the edge routing algorithms and cache tiering implemented in `web/_worker.js`.

---

## 1. Request Resolution Pipeline

---

## 2. Zero-Build Web Assets Invariant

All HTML, CSS, and ES Modules are served directly from Cloudflare Pages / KV without any build step, bundler, or npm dependencies.
