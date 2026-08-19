# Credence Documentation Portal (`credence-docs`)

This repository contains the decoupled, zero-build documentation portal ([`docs.credence.run`](https://docs.credence.run)) and sovereign editorial blog ([`blog.credence.run`](https://blog.credence.run)) for the Credence network.

It follows **Invariant 26 (Zero-Build Web Standards)**:
- **0 npm dependencies**, 0 `package.json`, 0 `node_modules`, 0 build tools.
- **Vanilla Semantic HTML5**, CSS Custom Properties, and native ES Modules.
- Instant, client-side keyword and multi-term search across all 48+ guides and specs.
- Styled using the master Zero-Build Design System ([`assets/credence-ui.css`](assets/credence-ui.css)).
- Hosted on **Cloudflare Pages** with instant edge deployment.

---

## 🧭 Concept Directory ("Finding the Marble in the Oatmeal")

All documentation is indexed with rich search tags and accessible via the **[Topic Index & Cheat Sheet](docs/topic-index.md)**.
You can also press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> anywhere on the portal to filter guides by command, concept, setting, or invariant.

---

## Complete Repository Architecture

```text
credence-docs/
├── .github/workflows/deploy.yml         # Zero-Build Cloudflare Pages deploy (0 npm)
├── index.html                           # Zero-Build dynamic documentation portal
├── styles.css                           # Documentation typography, responsive layout & widgets
├── app.js                               # Vanilla ES module router, rich search engine & playgrounds
├── assets/
│   ├── logo.svg                         # Vector shield branding
│   └── credence-ui.css                  # Master ecosystem design system
├── docs/                                # Complete technical documentation suite
│   ├── intro.md                         # Getting Started: Welcome, Philosophy & On-Ramp
│   ├── quickstart.md                    # Getting Started: 60-Second Setup & First Audit
│   ├── topic-index.md                   # Getting Started: Master Concept Directory & Cheat Sheet
│   ├── feature-parity.md                # Getting Started: 4-Interface Capability Matrix
│   ├── changelog.md                     # Getting Started: Release History & Versioning
│   ├── walkthroughs/                    # 🚀 4 Feature Walkthroughs (Audit, Sifter, Mesh, Digest)
│   ├── agentic/                         # 🤖 5 Agentic Engineering & Workflow Specs
│   ├── portability/                     # 🌐 5 Platform Portability & Sovereignty Specs
│   ├── tutorials/                       # 🎓 13 Step-by-Step Hands-On Tutorials
│   ├── cookbooks/                       # 🍳 4 Developer Integration Cookbooks
│   ├── security/                        # 🛡️ 3 Adversarial Security & Red Team Specs
│   ├── blueprints/                      # 🏥 3 Specialized Industry Blueprints
│   ├── integrations/                    # 🔌 3 Client Ecosystem Guides
│   ├── mesh-engineering/               # 🕸️ 4 P2P Mesh & Graph Theory Specs
│   ├── protocols/                       # 📜 14 Core Protocol Specifications
│   ├── operations/                      # ☁️ 7 Self-Hosting & Operations Guides
│   ├── mathematics/                     # 📐 3 Mathematical Foundations Deep Dives
│   ├── invariants.md                    # 🏛️ Master Index of 36 System Invariants
│   ├── architecture.md                  # 🏗️ Decentralized Multi-Tier Architecture Spec
│   ├── frontend-architecture.md         # 🌐 Zero-Build WebCrypto Rationale
│   ├── roadmap.md                       # 🗺️ Product Roadmap & Milestones
│   └── playground.md                    # 🎮 Interactive In-Browser Simulators
└── blog/                                # 📰 16 Sovereign Editorial Dispatches
```

---

## Local Development & Preview

Preview the zero-build portal with any static HTTP server:

```bash
# In credence-docs directory
python3 -m http.server 8080

# Or from core repository
just serve-web
```

---

## License

Apache License 2.0 &copy; 2026 Credence Network Contributors.
