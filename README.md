# Credence Documentation & Sovereign Blog Engine (`credence-docs`)

This repository contains the decoupled documentation portal ([`docs.credence.run`](https://docs.credence.run)) and sovereign editorial blog ([`blog.credence.run`](https://blog.credence.run)) for the Credence network.

It follows **Invariant 26 (Zero-Build Web Standards)**:
- **0 npm dependencies**, 0 `package.json`, 0 `node_modules`, 0 build tools.
- **Vanilla Semantic HTML5**, CSS Custom Properties, and native ES Modules.
- Styled using the master Zero-Build Design System ([`assets/credence-ui.css`](assets/credence-ui.css)).
- Hosted on **Cloudflare Pages** with instant edge deployment.

---

## Complete Repository Architecture

```text
credence-docs/
├── .github/workflows/deploy.yml         # Zero-Build Cloudflare Pages deploy (0 npm)
├── index.html                           # Zero-Build dynamic documentation portal
├── styles.css                           # Documentation typography, responsive layout & widgets
├── app.js                               # Zero-dependency vanilla ES module renderer & playgrounds
├── assets/
│   ├── logo.svg                         # Vector shield branding
│   └── credence-ui.css                  # Master ecosystem design system
├── docs/                                # Complete technical documentation suite (47 guides/specs)
│   ├── intro.md                         # Getting Started: Intro & Epistemic Philosophy
│   ├── quickstart.md                    # Getting Started: CLI, FastMCP & TUI setup
│   ├── feature-parity.md                # Getting Started: 4-Interface Capability Matrix
│   ├── playground.md                    # Interactive: 7 Zero-Build Web Playgrounds
│   ├── operator-guide.md                # Operations: 10-Section Bootstrap Runbook
│   ├── invariants.md                    # Invariants: 32 Architectural & Epistemic Invariants
│   ├── architecture.md                  # Architecture: Multi-Tier Ingestion & Consensus Specs
│   ├── deployment-cloudrun.md           # Operations: GCP Cloud Run v2 Provisioning
│   ├── bootstrap-seeds.md               # Operations: 5-Factor Seed Governance & Discovery
│   ├── frontend-architecture.md         # Architecture: Zero-Build WebCrypto Rationale
│   ├── portability/                     # 🌐 5 Platform Portability & Sovereignty Specs
│   │   ├── multi-model-adapters.md      # Claude 3.7, GPT-4o, DeepSeek-R1, Ollama
│   │   ├── gemini-economic-rationale.md # ADR: 16k Thinking Economics & Rationale
│   │   ├── multi-cloud-deployment.md    # AWS Fargate, Azure Apps, Hetzner, K8s
│   │   ├── universal-agent-interop.md   # Claude Desktop, Cursor, Windsurf, Cline
│   │   └── local-llm-airgap.md          # 100% Private Local LLMs via vLLM / Ollama
│   ├── cookbooks/                       # 🍳 4 Developer Integration Cookbooks
│   │   ├── agentic-epistemic-brake.md   # LangGraph, CrewAI & Antigravity SDK
│   │   ├── taxonomy-engineering.md      # Authoring Namespaced YAML Catalogs
│   │   ├── morning-feed-sifter.md       # Automated RSS Pre-Ingestion & Briefs
│   │   └── financial-disclosures.md     # 10-K Filings & ULTRA Thinking Profile
│   ├── security/                        # 🛡️ 3 Adversarial Security & Red Team Specs
│   │   ├── adversarial-attack-surface.md# Indirect Prompt Injection & Cloaking
│   │   ├── grounding-mechanics.md       # Verbatim Grounding & 50% Slash Math
│   │   └── satire-cloaking-defense.md   # Poe's Law & SPJ-1.6 Cloaking Overrides
│   ├── blueprints/                      # 🏥 3 Specialized Industry Blueprints
│   │   ├── health-medical-claims.md     # In Vitro Extrapolation & Clinical Trials
│   │   ├── election-civic-integrity.md  # Polling Methodology & Voting Deadlines
│   │   └── synthetic-media-provenance.md# C2PA Metadata & Pink Slime Farm Rings
│   ├── integrations/                    # 🔌 3 Client Ecosystem Guides
│   │   ├── browser-extension-mv3.md     # Zero-Build Manifest V3 Browser Extension
│   │   ├── cli-scripting-guide.md       # jq Pipelines, xargs & GitHub Actions PR Gates
│   │   └── tui-workstation.md           # Textual TUI Terminal Workstation & Keybindings
│   ├── mesh-engineering/               # 🕸️ 3 P2P Mesh & Distributed Systems Specs
│   │   ├── watts-strogatz-dynamics.md   # Small-World Network Topology (N=13, k=4)
│   │   ├── airgapped-sneakernets.md     # Offline Epistemic Truth Bundles
│   │   └── dns-srv-discovery.md         # RFC 2782 DNS SRV Dynamic Discovery
│   ├── protocols/                       # 📜 7 Core Protocol Specifications
│   │   ├── token-governor.md            # Headroom Economics & Circuit Breakers
│   │   ├── mesh-protocol.md             # Watts-Strogatz Consensus & Epistemic Relays
│   │   ├── fastmcp.md                   # FastMCP 2.0 Tools, Resources & Prompts
│   │   ├── scoring.md                   # Exponential Saturation Math
│   │   ├── adversarial-defense.md       # Red Team Attack Matrix & SSRF Guards
│   │   ├── white-label.md               # Federation & Sovereign Organizations
│   │   └── benchmark-suite.md           # Golden 12 Cross-Profile Evaluation Suite
│   ├── mathematics/                     # 📐 3 Mathematical Foundations Deep Dives
│   │   ├── robust-consensus-proofs.md   # Weighted Medians & Galileo Rule Proof
│   │   ├── simhash-mirror-detection.md  # 64-Bit SimHash & Hamming Distances
│   │   └── economics-of-truth.md        # BitTorrent Work-Sharing & Cost Model
│   └── tutorials/                       # 🎓 8 Step-by-Step Interactive Tutorials
│       ├── 01-clickbait-teardown.md
│       ├── 02-satire-vs-disinformation.md
│       ├── 03-claude-cursor-fastmcp.md
│       ├── 04-sovereign-org-scaffolding.md
│       ├── 05-mesh-quickstart.md
│       ├── 06-thirteen-node-chaos-lab.md
│       ├── 07-air-gapped-and-adhoc-mesh.md
│       └── 08-sybil-cartel-demolition.md
└── blog/                                # 5 Sovereign Editorial Dispatches
    ├── the-blue-checkmark-is-dead.md
    ├── the-anti-diploma-invariant.md
    ├── bittorrent-economics-of-fact-checking.md
    ├── the-galileo-rule.md
    └── giving-claude-and-cursor-an-epistemic-brake.md
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
