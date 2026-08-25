---
title: 'Operational Guide: Kubernetes and Container Orchestration'
description: Comprehensive operational guide for deploying Credence to vanilla Kubernetes,
  k3s, MicroK8s, AWS EKS, or GKE using standard declarative manifests.
since_version: v1.18.0
verified_version: v2.17.1
last_verified: 2026-08-25
---

# Operational Guide: Kubernetes and Container Orchestration

Deploy Credence into any Kubernetes cluster (GKE, AWS EKS, Azure AKS, k3s, or bare-metal MicroK8s) using cloud-native declarative manifests.

---

## 1. Cluster Prerequisites Checklist

- **Kubernetes Cluster**: Version 1.28 or higher.
- **`kubectl` CLI**: Authenticated with cluster admin or namespace admin permissions.
- **StorageClass**: Standard CSI provisioner supporting `ReadWriteOnce` (for SQLite WAL volumes) or S3 object storage.
- **Ingress Controller**: Ingress-NGINX, Traefik, or Cloudflare Tunnel.

---

## 2. Declarative Deployment Runbook

### Step 1: Create Namespace and ConfigMap
```bash
kubectl create namespace credence

kubectl create configmap credence-config \
  --namespace=credence \
  --from-literal=ENV="production" \
  --from-literal=CREDENCE_PROFILE="balanced" \
  --from-literal=STORAGE_BACKEND="local" \
  --from-literal=SNAPSHOT_DIR="/app/data/snapshots"
```

### Step 2: Create Secrets
```bash
kubectl create secret generic credence-secrets \
  --namespace=credence \
  --from-literal=GEMINI_API_KEY="your_gemini_api_key_here" \
  --from-literal=CREDENCE_ADMIN_API_KEY="your_admin_api_key_here"
```

### Step 3: Apply Deployment & Service Manifest
```bash
kubectl apply -f k8s/deployment.yaml -n credence
```

### Step 4: Verify Rollout & Health
```bash
# Verify rollout status
kubectl rollout status deployment/credence-server -n credence

# Port forward locally to test health probe
kubectl port-forward svc/credence-service 8000:8000 -n credence &
curl -sSL http://localhost:8000/health | jq .
```

---

## 3. Ingress & TLS Configuration (Ingress-NGINX)

Create `k8s/ingress.yaml`:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: credence-ingress
  namespace: credence
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "3600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "3600"
    nginx.ingress.kubernetes.io/proxy-buffering: "off"
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - credence.yourdomain.com
      secretName: credence-tls
  rules:
    - host: credence.yourdomain.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: credence-service
                port:
                  number: 8000
```

Apply the ingress:
```bash
kubectl apply -f k8s/ingress.yaml -n credence
```

---

## 4. Horizontal Pod Autoscaling (HPA)

For high-traffic swarms, configure CPU/Memory autoscaling:
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: credence-hpa
  namespace: credence
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: credence-server
  minReplicas: 1
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 75
```

---
## Kubernetes & Helm Deployment Architecture

For enterprise Kubernetes clusters running across GKE, EKS, or Bare-Metal k8s:

| Kubernetes Resource | Specification | Scalability Parameter |
| :--- | :--- | :--- |
| **Deployment** | `credence-compute` | Scaled via HPA (`min: 2, max: 20`) based on CPU $>70\%$ |
| **StatefulSet** | `credence-mesh-node` | Fixed pod identity for P2P gossip peer discovery |
| **ConfigMap / Secret** | `credence-config` | Injected via Secret Manager / HashiCorp Vault |
| **Ingress** | NGINX / Cloudflare Tunnel | TLS termination and WebSocket protocol upgrade |

```bash
# Deploy Credence via official Helm chart
$ helm repo add credence https://charts.credence.run
$ helm install credence-node credence/credence --values production-values.yaml
```

---
## Enterprise Kubernetes Manifests and Helm Charts

Scalable Kubernetes deployments utilize Horizontal Pod Autoscalers and Secret Manager integration for enterprise deployments.

---
## Production Operational Runbook & Maintenance Protocols

When managing **Kubernetes And Helm Deployment** in production, operators should adhere to the following maintenance procedures:

| Operational Phase | Frequency | Standard Command / Tool | Verification Target |
| :--- | :--- | :--- | :--- |
| **Pre-Flight Health Check** | Prior to deploy | `just preflight` | Toolchain, Python 3.12, Docker status |
| **Diagnostic Scan** | Hourly (Automated) | `credence stats --json` | Latency, memory usage, token headroom |
| **State Pruning** | Weekly | `credence db prune --retention-days 30` | SQLite WAL cleanup & disk optimization |
| **Failover Drill** | Monthly | `credence db backup --verify-replica` | Cross-region replica readiness verification |

```bash
# Verify operational readiness
$ credence stats --detailed
```
