---
title: White-Label Sovereign Federation
description: Multi-tenant sovereign organization federation, custom DNS namespaces, signed seed trees, and decentralized identity.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
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

## Architectural Invariants & Verification Mechanics

The implementation of **White Label** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **White Label** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "protocols"

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
