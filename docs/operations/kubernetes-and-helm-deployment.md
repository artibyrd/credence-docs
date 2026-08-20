---
title: 'Operational Guide: Kubernetes and Container Orchestration'
description: Guide for deploying Credence to vanilla Kubernetes, k3s, MicroK8s, AWS EKS, or GKE using standard declarative manifests.
since_version: v1.18.0
verified_version: v1.18.0
last_verified: '2026-08-19'
---

# Operational Guide: Kubernetes and Container Orchestration

Deploy Credence into any Kubernetes cluster using the standard manifest in `k8s/deployment.yaml`.

---

## 1. Apply Kubernetes Manifest

```bash
# 1. Create secret for API keys and database connections
kubectl create secret generic credence-secrets \
  --from-literal=gemini-api-key="YOUR_GEMINI_KEY" \
  --from-literal=database-url="postgresql+asyncpg://user:pass@postgres-service:5432/credence"

# 2. Deploy Credence Deployment and Service
kubectl apply -f k8s/deployment.yaml

# 3. Verify rollout
kubectl rollout status deployment/credence-server
```

---

## 2. Ingress & TLS

Bind an Ingress controller (Traefik, NGINX Ingress, or Cloudflare Tunnel) to `credence-service:80` for public HTTP/SSE routing.
