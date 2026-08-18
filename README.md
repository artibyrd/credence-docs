# Credence Documentation & Sovereign Blog Engine (`credence-docs`)

This repository contains the decoupled documentation portal ([`docs.credence.run`](https://docs.credence.run)) and sovereign editorial blog ([`blog.credence.run`](https://blog.credence.run)) for the Credence network.

It follows **Invariant 26 (Zero-Build Web Standards)**:
- **0 npm dependencies**, 0 `package.json`, 0 `node_modules`, 0 build tools.
- **Vanilla Semantic HTML5**, CSS Custom Properties, and native ES Modules.
- Styled using the master Zero-Build Design System ([`assets/credence-ui.css`](assets/credence-ui.css)).
- Hosted on **Cloudflare Pages** with instant edge deployment.

---

## Repository Structure

```text
credence-docs/
├── .github/workflows/deploy.yml   # Zero-Build Cloudflare Pages deployment
├── index.html                     # Zero-Build dynamic documentation portal
├── styles.css                     # Documentation typography & responsive layout
├── app.js                         # Lightweight vanilla ES module renderer (0 npm)
├── assets/
│   ├── logo.svg                   # Vector shield branding
│   └── credence-ui.css            # Master ecosystem design system
├── docs/                          # Technical documentation and guides
│   ├── intro.md
│   ├── quickstart.md
│   ├── feature-parity.md
│   ├── operator-guide.md
│   ├── invariants.md
│   ├── architecture.md
│   ├── deployment-cloudrun.md
│   ├── bootstrap-seeds.md
│   ├── frontend-architecture.md
│   ├── protocols/                 # 7 Deep dive protocol specifications
│   │   ├── token-governor.md
│   │   ├── mesh-protocol.md
│   │   ├── fastmcp.md
│   │   ├── scoring.md
│   │   ├── adversarial-defense.md
│   │   ├── white-label.md
│   │   └── benchmark-suite.md
│   └── tutorials/                 # 8 Step-by-step interactive tutorials
│       ├── 01-clickbait-teardown.md
│       ├── 02-satire-vs-disinformation.md
│       ├── 03-claude-cursor-fastmcp.md
│       ├── 04-sovereign-org-scaffolding.md
│       ├── 05-mesh-quickstart.md
│       ├── 06-thirteen-node-chaos-lab.md
│       ├── 07-air-gapped-and-adhoc-mesh.md
│       └── 08-sybil-cartel-demolition.md
├── blog/                          # Sovereign editorial essays (YAML frontmatter)
│   ├── the-blue-checkmark-is-dead.md
│   ├── the-anti-diploma-invariant.md
│   ├── bittorrent-economics-of-fact-checking.md
│   ├── the-galileo-rule.md
│   └── giving-claude-and-cursor-an-epistemic-brake.md
├── AGENTS.md                      # Master ecosystem guidelines & invariants
├── LICENSE                        # Apache-2.0
└── README.md
```

---

## Local Development & Preview

Because `credence-docs` is 100% Zero-Build with zero build tools, you can preview it immediately with any static HTTP server:

```bash
# Python 3 built-in HTTP server
python3 -m http.server 8080

# Or via just from core repo
just serve-web
```

Open `http://localhost:8080` in your browser.

---

## License

Apache License 2.0 &copy; 2026 Credence Network Contributors.
