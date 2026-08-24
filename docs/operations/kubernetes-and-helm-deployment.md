---
title: 'Operational Guide: Kubernetes and Container Orchestration'
description: Comprehensive operational guide for deploying Credence to vanilla Kubernetes,
  k3s, MicroK8s, AWS EKS, or GKE using standard declarative manifests.
since_version: v1.18.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

## Architectural Invariants & Verification Mechanics

The implementation of **Kubernetes And Helm Deployment** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Kubernetes And Helm Deployment** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "operations"

# Inspect real-time execution metrics and Bayesian concordance
$ credence stats --detailed --window 24h

# Export canonical verification receipts for external compliance
$ credence verify --json --audit-trail
```

### Quantitative Operational Benchmarks

| Metric / Dimension | Target Performance | Worst-Case Tolerance | Subsystem Status |
| :--- | :---: | :---: | :--- |
| **Verification Latency** | $< 15\text{ ms}$ (Local Cache) | $< 250\text{ ms}$ (P95 Mesh Gossip) | ✅ Optimal |
| **Grounding Precision ($G$)** | $1.00$ (Verbatim DOM Match) | $0.90$ (Probation Window) | ✅ Certified |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle) | ✅ Protected |
| **Memory Consumption** | $< 150\text{ MB RAM}$ | $< 256\text{ MB RAM}$ | ✅ Lean |

### RFC Standards & Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../playground.md)
