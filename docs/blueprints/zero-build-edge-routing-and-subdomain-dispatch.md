---
title: 'Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch'
description: Technical architecture of Cloudflare Anycast edge routing, multi-domain dispatching, and cache tiering across production and dev subdomains.
since_version: v1.18.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Technical Blueprint: Zero-Build Edge Routing and Subdomain Dispatch

This blueprint details the edge routing algorithms and cache tiering implemented in `web/_worker.js`.

---

## 1. Request Resolution Pipeline

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         CLOUDFLARE ANYCAST EDGE ROUTING & SUBDOMAIN DISPATCH                     │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Incoming HTTP / SSE Request at Cloudflare Edge (`_worker.js`)                                    │
│                                │                                                                 │
│                                ▼ Hostname & Route Evaluation                                     │
│ ┌──────────────────────────────┬─────────────────────────────────────────────────────────────┐   │
│ │ Host / Path Pattern          │ Edge Dispatch Target & Cache Policy                         │   │
│ ├──────────────────────────────┼─────────────────────────────────────────────────────────────┤   │
│ │ `dev.credence.run`           │ 🛠️ Dev Compute Plane (`credence-dev-495173`)                 │   │
│ │ `credence.run`               │ 🏛️ Prod Compute Plane (`credence-prod-505902`)               │   │
│ │ `mcp.credence.run`           │ ⚡ FastMCP 2.0 Real-Time SSE Streaming Proxy (Long-Lived)   │   │
│ │ `credence.report/api/*`      │ 🗄️ Prod Immutable Edge Cache (`Cache-Control: 30d, max-age`)│   │
│ │ `dev.credence.report/api/*`  │ 🧪 Dev Ephemeral Preview Cache (`Cache-Control: 60s`)       │   │
│ └──────────────────────────────┴─────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ⚡ Zero-Build Invariant: 100% Native HTML5/ESM served directly with zero node/npm compilation     │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Zero-Build Web Assets Invariant

All HTML, CSS, and ES Modules are served directly from Cloudflare Pages / KV without any build step, bundler, or npm dependencies.
