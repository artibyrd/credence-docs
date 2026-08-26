---
title: White-Label Sovereign Federation
description: Multi-tenant sovereign organization federation, custom DNS namespaces, signed seed trees, and decentralized identity.
since_version: v1.11.0
verified_version: v2.17.3
last_verified: 2026-08-26
sidebar:
  order: 12
---

# White-Label Sovereign Federation Protocol

The **White-Label Sovereign Federation Protocol** enables independent news organizations, academic institutions, municipal governments, and enterprise consortia to scaffold, brand, and operate autonomous Credence trust networks with 100% cryptographic sovereignty.

---

## 1. Sovereign Federation Architecture

In a white-label deployment, the organization does not depend on centralized Credence infrastructure. Instead, the entity establishes:
1. **Sovereign Root Keys (`root.pub`)**: Independent Ed25519 root authority for signing taxonomies, standard ratifications, and node certifications.
2. **Custom Multi-Domain Edge Topologies**: Organization-specific apex domains (e.g., `trust.acmenews.org`, `verify.healthconsortium.org`) with zero-build edge routing.
3. **Dedicated Subject Namespaces**: Namespaced taxonomy catalogs (e.g., `acme.finance.*`, `consortium.clinical.*`) coexisting with global Tier 0 standards (SPJ Ethics, IEP Fallacies).



---

## 2. Deploying Your Sovereign Mesh

Scaffolding a sovereign federation takes under 60 seconds using the `credence init-org` CLI command:

```bash
# Initialize sovereign organization repository structure
$ credence init-org --name "Acme Investigative Syndicate" --slug "acme" --domain "acmenews.org"
```

Generated directory topology:
* 📁 **`config/`**: Organization metadata (`org.yaml`) & custom taxonomy definitions
* 📁 **`keys/`**: Root authority Ed25519 public key (`root.pub`) and signed peer directory
* 📁 **`terraform/`**: Multi-cloud infrastructure blueprints for GCP Cloud Run and Cloudflare
* 📁 **`web/`**: Zero-build vanilla Web UI pre-configured with sovereign branding

### Step 1: Configure Custom DNS Endpoints
The organization points its DNS CNAME and SRV records to Cloudflare Edge CDN and Cloud Run compute backends:
```ini
; Edge CDN & Documentation Portal
docs.trust.acmenews.org.   IN CNAME   custom.credence.run.cdn.cloudflare.net.
; Gossip Peer Discovery SRV Record
_credence-mesh._tcp.acme   IN SRV 10 60 8765 node1.trust.acmenews.org.
```

### Step 2: Provision Cloud Infrastructure (Terraform)
```bash
# Deploy isolated GCP Cloud Run and Cloudflare Worker edge routes
$ cd terraform/gcp
$ terraform init
$ terraform apply -var="org_domain=acmenews.org"
```

### Step 3: Publish Signed Seeds & Web of Trust
The organization signs its initial bootstrap seed manifest with its root Ed25519 key:
```bash
$ credence mesh sign-seeds --key keys/root.key --output keys/peers.json
$ credence mesh publish-seeds --endpoint https://seeds.trust.acmenews.org/peers.json
```

---

## 3. Epistemic Cross-Federation Interoperability

Sovereign organizations can peer with the global Credence network while maintaining absolute local editorial autonomy:
- **Asymmetric Trust Peering**: An organization may consume global audit attestations for general wire news while enforcing strict custom taxonomy rules for regional municipal claims.
- **Selective Quarantine Rules**: Organizations can define local domain soft-quarantine policies without impacting peer meshes.
- **Cryptographic Web-of-Trust**: Cross-signing root keys allows partner organizations to accept each other's attestations with zero token re-computation.

---

## 4. Administrative CLI Reference

```bash
# Verify organization configuration and cryptographic signatures
$ credence org verify config/org.yaml

# Generate live SVG merit and trust badges with custom organization branding
$ credence badge generate --org "acme" --theme dark --output assets/acme-trust-badge.svg

# Inspect multi-tenant federation routing status
$ credence org routes
```

---

## 5. Related Guides & Blueprints

* 🏛️ [Tutorial 04: Sovereign Org Scaffolding](../tutorials/04-sovereign-org-scaffolding.md)
* 📘 [The Invariant Bible](../invariants.md) — 3-Plane Deployment Governance
* 🛠️ [Multi-Tenant Org Subdomain Federation Cookbook](../cookbooks/multi-tenant-org-subdomain-federation.md)

---
## White-Label Multi-Tenant Federation Architecture

Organizations can deploy independent white-label verification portals with custom domain routing:

| White-Label Component | Configuration Parameter | Multi-Tenant Isolation |
| :--- | :--- | :--- |
| **Custom Taxonomy** | `config/org.yaml` | Scoped to organization slug |
| **Root Public Key** | `keys/root.pub` | Independent Ed25519 trust anchor |
| **Edge Domain Route** | `_worker.js` | Cloudflare KV subdomain dispatch |
| **Zero-Build Branding** | `web/index.html` | Custom CSS variables and logo SVGs |

```bash
# Initialize new white-label federation portal
$ credence init-org --name "Acme News Trust" --domain "acme.trust.credence.run"
```

---
## Sovereign Organization Customization and Federation

White-label scaffolding allows organizations to maintain custom taxonomies while participating in the global mesh.

---
## Formal Subsystem Specification & Verification Matrix

The technical architecture for **White Label** operates according to strict operational parameters and deterministic boundaries:

| Specification Parameter | Nominal Baseline | Peak / Adversarial Threshold | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **Evaluation Latency** | `< 15ms` (Cached Attestation) | `< 2.5s` (Cold-Start Flash Reasoning) | Scale-to-Zero Container Optimization |
| **Grounding Precision ($G$)** | $1.00$ (Character-Exact Match) | $0.90$ (Probationary Boundary) | Verbatim DOM Substring Verification |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle Ceiling) | `QUOTA_PRESERVED` Circuit Breaker |
| **Consensus Quorum** | $N \ge 13$ Nodes ($f=4$) | $3f+1$ Byzantine Cartel Resilience | Weighted Bayesian Consensus Medians |

```python
# Programmatic verification of subsystem integrity
from credence.pipeline.scoring import evaluate_grounding_exactness

is_grounded = evaluate_grounding_exactness(
    source_dom=normalized_html,
    extracted_quotes=evidence_cards
)
assert is_grounded is True
```
