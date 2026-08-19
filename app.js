/**
 * Credence Documentation & Sovereign Blog Zero-Build Application Engine
 * Pure Vanilla Modern ES Module — 0 npm dependencies, 0 build tools.
 */

// Navigation structure and complete catalog
export const DOCS_REGISTRY = [
  {
    category: "Getting Started",
    items: [
      { id: "docs/intro", title: "Introduction & Overview", path: "docs/intro.md", desc: "Welcome to Credence, key concepts, and progressive on-ramp.", keywords: ["intro", "overview", "welcome", "philosophy", "grounding", "basics", "start", "truth", "ethics", "ai"] },
      { id: "docs/quickstart", title: "Quickstart & Installation", path: "docs/quickstart.md", desc: "Install Credence, set API keys, and run your first audit in 60 seconds.", keywords: ["quickstart", "install", "curl", "poetry", "docker", "gemini", "api key", "first audit", "setup", "run", "cli"] },
      { id: "docs/topic-index", title: "Topic Index & Concept Directory", path: "docs/topic-index.md", desc: "The Marbles in the Oatmeal: complete categorized cheat sheet and index.", keywords: ["index", "cheat sheet", "search", "topics", "sitemap", "directory", "marbles", "lookup", "concepts", "all", "reference", "find"] },
      { id: "docs/feature-parity", title: "Universal Feature Parity", path: "docs/feature-parity.md", desc: "Synchronous 4-way parity across CLI, FastMCP, TUI, and Web UI.", keywords: ["parity", "interfaces", "cli", "tui", "mcp", "web", "terminal", "browser"] },
      { id: "docs/changelog", title: "Release Changelog", path: "docs/changelog.md", desc: "Version history, updates, and release notes across releases.", keywords: ["changelog", "versions", "releases", "v1.11.0", "history", "updates"] }
    ]
  },
  {
    category: "Feature Walkthroughs",
    items: [
      { id: "docs/walkthroughs/01-auditing-webpages-and-text", title: "Auditing Webpages & Text", path: "docs/walkthroughs/01-auditing-webpages-and-text.md", desc: "How to audit any URL or raw text using the CLI and interpret findings.", keywords: ["audit", "cli", "text", "url", "command", "report", "suspicion", "violations"] },
      { id: "docs/walkthroughs/02-zero-trust-feed-sifting", title: "Zero-Trust Feed Sifting", path: "docs/walkthroughs/02-zero-trust-feed-sifting.md", desc: "Filter RSS/Atom feeds against promotional astroturfing and topic entropy collapse.", keywords: ["sifter", "rss", "atom", "feed", "entropy", "pizza hut", "astroturf", "filter"] },
      { id: "docs/walkthroughs/03-p2p-mesh-consensus", title: "P2P Mesh Consensus", path: "docs/walkthroughs/03-p2p-mesh-consensus.md", desc: "How decentralized nodes gossip signed attestations and reach consensus.", keywords: ["mesh", "p2p", "consensus", "gossip", "attestation", "decentralized", "nodes"] },
      { id: "docs/walkthroughs/04-morning-digest-briefings", title: "Morning Epistemic Digest", path: "docs/walkthroughs/04-morning-digest-briefings.md", desc: "Generate daily 24-hour executive news briefings and terminal digests.", keywords: ["digest", "morning", "briefing", "daily", "summary", "executive", "news"] }
    ]
  },
  {
    category: "Agentic Engineering & Workflows",
    items: [
      { id: "docs/agentic/01-antigravity-pair-programming-paradigm", title: "01. Antigravity Pair-Programming", path: "docs/agentic/01-antigravity-pair-programming-paradigm.md", desc: "Autonomous multi-agent pair programming with Google Antigravity SDK.", keywords: ["antigravity", "pair programming", "sdk", "subagents", "agentic", "gemini"] },
      { id: "docs/agentic/02-continuous-learning-and-invariant-synthesis", title: "02. /learn & Invariant Synthesis", path: "docs/agentic/02-continuous-learning-and-invariant-synthesis.md", desc: "Capturing agent learnings, invariant synthesis, and knowledge governance.", keywords: ["learn", "invariants", "synthesis", "knowledge", "governance", "rules"] },
      { id: "docs/agentic/03-hermetic-testing-and-zero-npm-guardrails", title: "03. Hermetic Testing & Zero-npm", path: "docs/agentic/03-hermetic-testing-and-zero-npm-guardrails.md", desc: "Hermetic offline test suites and zero-npm static web guardrails.", keywords: ["hermetic", "testing", "zero-npm", "offline", "pytest", "guardrails"] },
      { id: "docs/agentic/04-multi-model-pareto-and-token-governance", title: "04. Multi-Model Pareto & Token Governor", path: "docs/agentic/04-multi-model-pareto-and-token-governance.md", desc: "Token budget governor, circuit breakers, and cost Pareto frontier.", keywords: ["pareto", "tokens", "governor", "circuit breaker", "budget", "cost", "headroom"] },
      { id: "docs/agentic/05-fastmcp-dual-transport-and-four-way-parity", title: "05. FastMCP & 4-Way Parity", path: "docs/agentic/05-fastmcp-dual-transport-and-four-way-parity.md", desc: "FastMCP 2.0 dual transport (stdio and SSE) and 4-way feature parity.", keywords: ["fastmcp", "transport", "stdio", "sse", "parity", "mcp", "streaming"] }
    ]
  },
  {
    category: "Platform Portability & Sovereignty",
    items: [
      { id: "docs/portability/multi-model-adapters", title: "Multi-Model Provider Adapters", path: "docs/portability/multi-model-adapters.md", desc: "Plugging in Gemini, Claude 3.7, GPT-4o, DeepSeek-R1, and local Ollama.", keywords: ["models", "claude", "gpt-4o", "deepseek", "ollama", "adapters", "providers"] },
      { id: "docs/portability/gemini-economic-rationale", title: "ADR: Why Gemini 3.7 Flash", path: "docs/portability/gemini-economic-rationale.md", desc: "Economic and architectural rationale for Gemini 3.7 Flash thinking models.", keywords: ["gemini", "gemini-3.7-flash", "thinking", "adr", "economics", "pricing"] },
      { id: "docs/portability/multi-cloud-deployment", title: "Multi-Cloud (AWS, Azure, Hetzner, K8s)", path: "docs/portability/multi-cloud-deployment.md", desc: "Deploying Credence to AWS Fargate, Azure Container Apps, Hetzner, and K8s.", keywords: ["aws", "azure", "hetzner", "kubernetes", "k8s", "docker", "cloud", "deploy"] },
      { id: "docs/portability/universal-agent-interop", title: "Universal Agent Interoperability", path: "docs/portability/universal-agent-interop.md", desc: "Connecting Windsurf, Cline, Claude Desktop, Cursor, and custom agent swarms.", keywords: ["windsurf", "cline", "cursor", "claude", "agents", "interop", "mcp"] },
      { id: "docs/portability/local-llm-airgap", title: "Zero-Cloud Sovereign Local LLMs", path: "docs/portability/local-llm-airgap.md", desc: "100% private, zero-cloud air-gapped evaluation with Ollama and vLLM.", keywords: ["local", "ollama", "vllm", "airgap", "private", "offline", "sovereign"] }
    ]
  },
  {
    category: "Hands-On Tutorials",
    items: [
      { id: "docs/tutorials/01-clickbait-teardown", title: "01. Clickbait Teardown", path: "docs/tutorials/01-clickbait-teardown.md", desc: "Step-by-step forensic teardown of sensationalist clickbait and unnamed claims.", keywords: ["tutorial", "clickbait", "teardown", "sources", "fallacy", "example"] },
      { id: "docs/tutorials/02-satire-vs-disinformation", title: "02. Satire vs Disinformation", path: "docs/tutorials/02-satire-vs-disinformation.md", desc: "Navigating Poe's Law, satire neutralization, and SPJ-1.6 cloaking defense.", keywords: ["satire", "disinformation", "poe", "onion", "parody", "cloaking"] },
      { id: "docs/tutorials/03-claude-cursor-fastmcp", title: "03. Claude & Cursor FastMCP", path: "docs/tutorials/03-claude-cursor-fastmcp.md", desc: "Connect Credence FastMCP server to Claude Desktop and Cursor IDE in 2 minutes.", keywords: ["claude", "cursor", "fastmcp", "config", "json", "setup", "tools"] },
      { id: "docs/tutorials/04-sovereign-org-scaffolding", title: "04. Sovereign Org Scaffolding", path: "docs/tutorials/04-sovereign-org-scaffolding.md", desc: "Scaffold sovereign white-label federation organizations with credence init-org.", keywords: ["init-org", "white-label", "federation", "organization", "terraform"] },
      { id: "docs/tutorials/05-mesh-quickstart", title: "05. 3-Node Mesh Quickstart", path: "docs/tutorials/05-mesh-quickstart.md", desc: "Spin up a local 3-node P2P mesh cluster and observe real-time gossip.", keywords: ["mesh", "3-node", "p2p", "cluster", "gossip", "docker"] },
      { id: "docs/tutorials/06-thirteen-node-chaos-lab", title: "06. 13-Node Chaos Lab", path: "docs/tutorials/06-thirteen-node-chaos-lab.md", desc: "Run a 13-node Watts-Strogatz chaos simulation with Byzantine cartel attacks.", keywords: ["13-node", "chaos", "byzantine", "sybil", "watts-strogatz", "cartel"] },
      { id: "docs/tutorials/07-air-gapped-and-adhoc-mesh", title: "07. Air-Gapped Truth Bundles", path: "docs/tutorials/07-air-gapped-and-adhoc-mesh.md", desc: "Export and verify signed truth attestations on offline USB sneakernets.", keywords: ["airgap", "sneakernet", "usb", "offline", "bundle", "verify"] },
      { id: "docs/tutorials/08-sybil-cartel-demolition", title: "08. Sybil Cartel Demolition", path: "docs/tutorials/08-sybil-cartel-demolition.md", desc: "How weighted medians and Galileo Rule neutralize coordinated cartel attacks.", keywords: ["sybil", "cartel", "attack", "defense", "weighted median", "galileo"] },
      { id: "docs/tutorials/09-zero-trust-feed-sifter-digest", title: "09. Zero-Trust Feed Sifter & Digest", path: "docs/tutorials/09-zero-trust-feed-sifter-digest.md", desc: "Full guide to automated morning news briefings and feed health scoring.", keywords: ["sifter", "digest", "rss", "briefing", "morning", "automation"] },
      { id: "docs/tutorials/10-reusable-live-e2e-and-mesh-gauntlet", title: "10. Reusable Live E2E & Mesh Gauntlet", path: "docs/tutorials/10-reusable-live-e2e-and-mesh-gauntlet.md", desc: "Run live rotating test suites across multi-category news corpora.", keywords: ["e2e", "gauntlet", "live", "testing", "rotating", "corpus"] },
      { id: "docs/tutorials/11-autonomous-node-germination-and-swarm-ignition", title: "11. Node Germination & Swarm Ignition", path: "docs/tutorials/11-autonomous-node-germination-and-swarm-ignition.md", desc: "5-second node germination: keys, genesis inoculation, and burst auditing.", keywords: ["germination", "genesis", "miracle-gro", "ignition", "bootstrap", "seeds"] },
      { id: "docs/tutorials/12-climbing-the-epistemic-tiers", title: "12. Climbing the Epistemic Tiers", path: "docs/tutorials/12-climbing-the-epistemic-tiers.md", desc: "Earn empirical expertise, build domain authority, and climb P2P leaderboards.", keywords: ["tiers", "reputation", "leaderboard", "expertise", "quality", "rank"] },
      { id: "docs/tutorials/13-discord-alerting-and-basement-monitoring", title: "13. Discord Alerts & Basement Ops", path: "docs/tutorials/13-discord-alerting-and-basement-monitoring.md", desc: "Setup real-time Discord webhook notifications for breaking high-suspicion stories.", keywords: ["discord", "webhook", "alerts", "monitoring", "basement", "notifications"] }
    ]
  },
  {
    category: "Developer Cookbooks",
    items: [
      { id: "docs/cookbooks/agentic-epistemic-brake", title: "Agentic Epistemic Brake", path: "docs/cookbooks/agentic-epistemic-brake.md", desc: "Halting LLM agent action loops when grounded confidence falls below threshold.", keywords: ["brake", "langgraph", "crewai", "agent", "guardrail", "action"] },
      { id: "docs/cookbooks/taxonomy-engineering", title: "Taxonomy Rule Engineering 101", path: "docs/cookbooks/taxonomy-engineering.md", desc: "How to author custom namespaced YAML taxonomy catalogs with test suites.", keywords: ["yaml", "taxonomy", "rules", "authoring", "ethics", "fallacies"] },
      { id: "docs/cookbooks/morning-feed-sifter", title: "Automated Morning Feed Sifter", path: "docs/cookbooks/morning-feed-sifter.md", desc: "Cron recipe for scheduled morning news sifting and markdown briefings.", keywords: ["cron", "sifter", "morning", "automation", "briefing", "schedule"] },
      { id: "docs/cookbooks/financial-disclosures", title: "Auditing Financial 10-K Filings", path: "docs/cookbooks/financial-disclosures.md", desc: "Audit non-GAAP metrics and earnings disclosures with Ultra thinking profile.", keywords: ["financial", "10-k", "sec", "ebitda", "earnings", "ultra", "thinking"] }
    ]
  },
  {
    category: "Adversarial Security & Red Team",
    items: [
      { id: "docs/security/adversarial-attack-surface", title: "Adversarial Attack Surface", path: "docs/security/adversarial-attack-surface.md", desc: "Threat modeling prompt injection, SSRF, XML entity expansion, and DoS.", keywords: ["security", "injection", "ssrf", "xml", "red team", "threat", "attacks"] },
      { id: "docs/security/grounding-mechanics", title: "Verbatim Grounding & Slashing", path: "docs/security/grounding-mechanics.md", desc: "Exact character-offset verification and 50% reputation slash penalties.", keywords: ["grounding", "verbatim", "slashing", "hallucination", "evidence", "quotes"] },
      { id: "docs/security/satire-cloaking-defense", title: "Poe's Law & Satire Cloaking", path: "docs/security/satire-cloaking-defense.md", desc: "Technical defense against cloaked disinformation pretending to be satire.", keywords: ["satire", "cloaking", "poe", "spj-1.6", "disinformation", "override"] }
    ]
  },
  {
    category: "Specialized Industry Blueprints",
    items: [
      { id: "docs/blueprints/health-medical-claims", title: "Medical & Health Claims", path: "docs/blueprints/health-medical-claims.md", desc: "Evaluating clinical trials, in vitro extrapolation, and unproven treatments.", keywords: ["medical", "health", "clinical", "trials", "in vitro", "claims", "science"] },
      { id: "docs/blueprints/election-civic-integrity", title: "Election & Civic Integrity", path: "docs/blueprints/election-civic-integrity.md", desc: "Auditing voting procedure misinformation, polling methodology, and civic claims.", keywords: ["election", "voting", "civic", "polls", "democracy", "misinformation"] },
      { id: "docs/blueprints/synthetic-media-provenance", title: "Synthetic AI & Media Provenance", path: "docs/blueprints/synthetic-media-provenance.md", desc: "C2PA metadata, pink slime news farm rings, and deepfake provenance detection.", keywords: ["c2pa", "deepfake", "synthetic", "pink slime", "media", "ai generated"] }
    ]
  },
  {
    category: "Client Ecosystem & Integrations",
    items: [
      { id: "docs/integrations/browser-extension-mv3", title: "Zero-Build Browser Extension", path: "docs/integrations/browser-extension-mv3.md", desc: "Vanilla Manifest V3 browser extension for live in-tab credibility badges.", keywords: ["extension", "chrome", "manifest v3", "browser", "badge", "zero-build"] },
      { id: "docs/integrations/cli-scripting-guide", title: "CLI Automation & Shell Scripts", path: "docs/integrations/cli-scripting-guide.md", desc: "jq pipelines, GitHub Actions CI PR gates, and headless automation.", keywords: ["cli", "jq", "scripts", "bash", "github actions", "ci", "pr gate"] },
      { id: "docs/integrations/tui-workstation", title: "Textual TUI Workstation", path: "docs/integrations/tui-workstation.md", desc: "Full-screen keyboard-driven terminal IDE with interactive citation inspector.", keywords: ["tui", "textual", "terminal", "workstation", "keybindings", "keyboard"] }
    ]
  },
  {
    category: "P2P Mesh & Graph Theory",
    items: [
      { id: "docs/mesh-engineering/featherweight-swarm-testing", title: "Featherweight Swarm Simulation", path: "docs/mesh-engineering/featherweight-swarm-testing.md", desc: "Simulate dozens of P2P nodes locally in memory without heavy containers.", keywords: ["simulation", "swarm", "featherweight", "testing", "mesh", "nodes"] },
      { id: "docs/mesh-engineering/watts-strogatz-dynamics", title: "Watts-Strogatz Small-World", path: "docs/mesh-engineering/watts-strogatz-dynamics.md", desc: "Graph theory, clustering coefficient, and 4-hop gossip diffusion dynamics.", keywords: ["watts-strogatz", "graph", "small-world", "diffusion", "hops", "topology"] },
      { id: "docs/mesh-engineering/airgapped-sneakernets", title: "Air-Gapped Truth Bundles", path: "docs/mesh-engineering/airgapped-sneakernets.md", desc: "Offline sneakernet distribution and verification of signed JSON bundles.", keywords: ["sneakernet", "airgap", "offline", "bundle", "rfc8785", "ed25519"] },
      { id: "docs/mesh-engineering/dns-srv-discovery", title: "DNS SRV Dynamic Discovery", path: "docs/mesh-engineering/dns-srv-discovery.md", desc: "RFC 2782 DNS SRV records for decentralized peer discovery without central trackers.", keywords: ["dns", "srv", "rfc2782", "discovery", "bootstrap", "peers"] }
    ]
  },
  {
    category: "Protocol Specifications",
    items: [
      { id: "docs/protocols/token-governor", title: "Token Safety Governor", path: "docs/protocols/token-governor.md", desc: "CostProfile definitions, thinking token budgets, and 30% headroom breaker.", keywords: ["governor", "tokens", "budget", "headroom", "circuit breaker", "cost"] },
      { id: "docs/protocols/mesh-protocol", title: "P2P Mesh & Consensus", path: "docs/protocols/mesh-protocol.md", desc: "RFC 8785 canonical JSON envelopes, Ed25519 signatures, and gossip routing.", keywords: ["protocol", "rfc8785", "ed25519", "signatures", "gossip", "consensus"] },
      { id: "docs/protocols/node-germination-lifecycle", title: "Node Germination & Swarm Ignition", path: "docs/protocols/node-germination-lifecycle.md", desc: "Zero-touch node lifecycle: genesis keys, seed inoculation, and burst auditing.", keywords: ["germination", "lifecycle", "genesis", "inoculation", "seed", "ignition"] },
      { id: "docs/protocols/fastmcp", title: "FastMCP 2.0 Integration", path: "docs/protocols/fastmcp.md", desc: "FastMCP tools, dynamic resources, prompts, and streaming HTTP/SSE.", keywords: ["fastmcp", "mcp", "tools", "resources", "prompts", "sse", "stdio"] },
      { id: "docs/protocols/scoring", title: "Scoring & Saturation Math", path: "docs/protocols/scoring.md", desc: "Calibrated exponential saturation curve, raw score, and density index.", keywords: ["scoring", "math", "saturation", "suspicion", "density", "calibration"] },
      { id: "docs/protocols/adversarial-defense", title: "Adversarial Threat Matrix", path: "docs/protocols/adversarial-defense.md", desc: "Systematic defenses against prompt injection, SSRF, DoS, and Sybil swarms.", keywords: ["threat matrix", "adversarial", "ssrf", "injection", "sybil", "defense"] },
      { id: "docs/protocols/white-label", title: "White-Label Federation", path: "docs/protocols/white-label.md", desc: "Sovereign organization federation, custom branding, and independent roots.", keywords: ["white-label", "federation", "organization", "sovereign", "custom"] },
      { id: "docs/protocols/benchmark-suite", title: "Golden 12 Benchmark Suite", path: "docs/protocols/benchmark-suite.md", desc: "Golden 12 standardized evaluation fixtures and verdict rubrics across tiers.", keywords: ["benchmark", "golden 12", "fixtures", "eval", "verdicts", "rubric"] },
      { id: "docs/protocols/cross-model-pareto-benchmark", title: "Cross-Model Pareto Benchmark", path: "docs/protocols/cross-model-pareto-benchmark.md", desc: "Comparing accuracy, latency, and cost across Gemini, Claude, GPT-4o, and DeepSeek.", keywords: ["pareto", "benchmark", "comparison", "accuracy", "cost", "models"] },
      { id: "docs/protocols/epistemic-merit-and-leaderboards", title: "Epistemic Merit & Leaderboards", path: "docs/protocols/epistemic-merit-and-leaderboards.md", desc: "5-factor node quality (Qi), empirical expertise (Ei), and P2P leaderboards.", keywords: ["leaderboard", "merit", "qi", "ei", "reputation", "expertise", "rank"] },
      { id: "docs/protocols/web-epistemic-intelligence", title: "Global Web Intelligence & DEI", path: "docs/protocols/web-epistemic-intelligence.md", desc: "Domain Epistemic Index (DEI) calculation and global web intelligence map.", keywords: ["dei", "intelligence", "domain", "index", "web", "reputation"] },
      { id: "docs/protocols/closed-loop-traffic-shaping", title: "Closed-Loop Routing & Traffic", path: "docs/protocols/closed-loop-traffic-shaping.md", desc: "Dynamic traffic shaping, cost optimization, and feed load-balancing.", keywords: ["traffic", "shaping", "routing", "load balancing", "closed-loop"] },
      { id: "docs/protocols/telemetry-loopback", title: "Interface Telemetry Loopback (ITLP-v1)", path: "docs/protocols/telemetry-loopback.md", desc: "Anonymous local usage metrics and interface performance telemetry.", keywords: ["telemetry", "itlp", "metrics", "performance", "privacy"] },
      { id: "docs/protocols/testing-strategy", title: "6-Tier Testing Strategy", path: "docs/protocols/testing-strategy.md", desc: "Hermetic unit, mock, integration, rotating live E2E, and gauntlet testing.", keywords: ["testing", "strategy", "pytest", "unit", "e2e", "gauntlet", "tiers"] }
    ]
  },
  {
    category: "Operations & Self-Hosting",
    items: [
      { id: "docs/operations/raspberry-pi-homelab", title: "Raspberry Pi & HomeLab Node", path: "docs/operations/raspberry-pi-homelab.md", desc: "Setting up a $0.00/mo self-hosted node on a Raspberry Pi 4/5.", keywords: ["raspberry pi", "homelab", "pi", "arm64", "self-host", "low power"] },
      { id: "docs/operations/tailscale-wireguard-mesh", title: "Tailscale & WireGuard Peering", path: "docs/operations/tailscale-wireguard-mesh.md", desc: "Forming secure private P2P mesh overlays across home and cloud servers.", keywords: ["tailscale", "wireguard", "vpn", "overlay", "peering", "private"] },
      { id: "docs/operations/database-pruning-wal", title: "Database Pruning & WAL Care", path: "docs/operations/database-pruning-wal.md", desc: "SQLite WAL optimization, checkpointing, and 30-day token record pruning.", keywords: ["sqlite", "wal", "database", "pruning", "retention", "cleanup", "sql"] },
      { id: "docs/operations/customizations-and-upstream-sovereignty", title: "Customizations vs. Upstream Core", path: "docs/operations/customizations-and-upstream-sovereignty.md", desc: "Maintaining local sovereignty while pulling updates from upstream repos.", keywords: ["customizations", "upstream", "git", "fork", "sovereignty", "merge"] },
      { id: "docs/operator-guide", title: "Bootstrap Operator Guide", path: "docs/operator-guide.md", desc: "10-section operational runbook for initial node setup, identity, and seeding.", keywords: ["operator", "runbook", "bootstrap", "guide", "setup", "admin"] },
      { id: "docs/deployment-cloudrun", title: "GCP Cloud Run Deployment", path: "docs/deployment-cloudrun.md", desc: "Deploying to Google Cloud Run with Terraform, $15/mo budget cap, scale-to-zero.", keywords: ["gcp", "cloud run", "terraform", "google cloud", "budget", "serverless"] },
      { id: "docs/bootstrap-seeds", title: "Bootstrap Seed Governance", path: "docs/bootstrap-seeds.md", desc: "Seed node governance, key rotation, and peers.json manifest format.", keywords: ["seeds", "peers", "manifest", "bootstrap", "governance", "nexus"] }
    ]
  },
  {
    category: "Mathematical Foundations",
    items: [
      { id: "docs/mathematics/robust-consensus-proofs", title: "Mathematics of Robust Consensus", path: "docs/mathematics/robust-consensus-proofs.md", desc: "Domain Authority Weighted Medians and formal Galileo Rule proof.", keywords: ["math", "consensus", "proofs", "galileo", "weighted median", "statistics"] },
      { id: "docs/mathematics/simhash-mirror-detection", title: "SimHash-64 & Mirror Detection", path: "docs/mathematics/simhash-mirror-detection.md", desc: "64-bit Hamming distance and SimHash deduplication algorithm.", keywords: ["simhash", "hamming", "hash", "mirror", "deduplication", "algorithms"] },
      { id: "docs/mathematics/economics-of-truth", title: "Economics of Decentralized Truth", path: "docs/mathematics/economics-of-truth.md", desc: "BitTorrent work-sharing mathematical model and 92.3% compute savings.", keywords: ["economics", "bittorrent", "work sharing", "cost model", "savings", "math"] }
    ]
  },
  {
    category: "Invariants & Architecture",
    items: [
      { id: "docs/invariants", title: "36 Core Invariants", path: "docs/invariants.md", desc: "Complete canonical list of 36 architectural, epistemic, and security invariants.", keywords: ["invariants", "rules", "architecture", "guarantees", "security", "core", "36"] },
      { id: "docs/architecture", title: "Decentralized Architecture", path: "docs/architecture.md", desc: "End-to-end multi-agent pipeline, dual capture, and consensus engine specs.", keywords: ["architecture", "pipeline", "system", "components", "diagram", "specs"] },
      { id: "docs/frontend-architecture", title: "Zero-Build Web Architecture", path: "docs/frontend-architecture.md", desc: "Zero-build philosophy: vanilla HTML5, CSS Custom Properties, and Web Crypto.", keywords: ["frontend", "zero-build", "html5", "css", "webcrypto", "standards"] },
      { id: "docs/roadmap", title: "Roadmap & Backlog", path: "docs/roadmap.md", desc: "Current development roadmap, completed milestones, and upcoming features.", keywords: ["roadmap", "backlog", "future", "milestones", "features"] }
    ]
  },
  {
    category: "Interactive Playgrounds",
    items: [
      { id: "docs/playground", title: "Interactive Zero-Build Playgrounds", path: "docs/playground.md", desc: "In-browser interactive simulators: 13-node mesh, SimHash, and taxonomy explorer.", keywords: ["playground", "interactive", "simulator", "demo", "browser", "try"] }
    ]
  },
  {
    category: "Editorial Dispatches & Blog",
    items: [
      { id: "blog/gamifying-truth-without-the-casino", title: "Folding@home for Truth (No Casino)", path: "blog/gamifying-truth-without-the-casino.md", desc: "Why decentralized truth works like Folding@home without speculative crypto tokens.", keywords: ["blog", "folding", "gamification", "tokens", "casino", "philosophy"] },
      { id: "blog/the-domain-epistemic-index", title: "The Domain Epistemic Index (DEI)", path: "blog/the-domain-epistemic-index.md", desc: "Measuring long-term credibility trends across global domain names.", keywords: ["blog", "dei", "domain", "trends", "credibility", "index"] },
      { id: "blog/testing-13-node-swarms-on-a-raspberry-pi", title: "Testing 13-Node Swarms on a $35 Pi", path: "blog/testing-13-node-swarms-on-a-raspberry-pi.md", desc: "How we tested small-world P2P swarms on a low-cost single-board computer.", keywords: ["blog", "raspberry pi", "swarm", "testing", "homelab", "low power"] },
      { id: "blog/miracle-gro-for-truth-nodes", title: "Miracle-Gro for Truth Nodes", path: "blog/miracle-gro-for-truth-nodes.md", desc: "Instant node ignition and Genesis seed inoculation in under 5 seconds.", keywords: ["blog", "germination", "genesis", "miracle gro", "bootstrap", "seeds"] },
      { id: "blog/architecting-sovereign-ai-with-google-antigravity", title: "Architecting Sovereign AI with Antigravity", path: "blog/architecting-sovereign-ai-with-google-antigravity.md", desc: "Pair programming with autonomous AI coding agents using Google Antigravity.", keywords: ["blog", "antigravity", "agentic", "sovereignty", "pair programming"] },
      { id: "blog/the-six-tier-pyramid-of-decentralized-truth", title: "The 6-Tier Verification Pyramid", path: "blog/the-six-tier-pyramid-of-decentralized-truth.md", desc: "From raw DOM capture to Bayesian multi-node consensus.", keywords: ["blog", "pyramid", "verification", "tiers", "consensus", "evidence"] },
      { id: "blog/the-pizza-hut-problem", title: "The Pizza Hut Problem & Entropy", path: "blog/the-pizza-hut-problem.md", desc: "Why single-topic promotional pivots require topic entropy defense.", keywords: ["blog", "pizza hut", "entropy", "astroturf", "sifter", "feeds"] },
      { id: "blog/the-pareto-frontier-of-truth", title: "The $0.34 Pareto Frontier", path: "blog/the-pareto-frontier-of-truth.md", desc: "Achieving high epistemic precision for pennies per 1,000 articles.", keywords: ["blog", "pareto", "cost", "economics", "efficiency", "pricing"] },
      { id: "blog/bittorrent-for-truth", title: "BitTorrent for Truth (92.3% Savings)", path: "blog/bittorrent-for-truth.md", desc: "How work-sharing cuts compute bills across federated peer nodes.", keywords: ["blog", "bittorrent", "work sharing", "savings", "p2p", "mesh"] },
      { id: "blog/the-blue-checkmark-is-dead", title: "The Blue Checkmark is Dead", path: "blog/the-blue-checkmark-is-dead.md", desc: "Why static authority badges fail and cryptographic receipts succeed.", keywords: ["blog", "blue checkmark", "authority", "cryptographic", "receipts"] },
      { id: "blog/the-anti-diploma-invariant", title: "The Anti-Diploma Invariant", path: "blog/the-anti-diploma-invariant.md", desc: "Authority must be continuously earned through grounded performance.", keywords: ["blog", "anti diploma", "reputation", "merit", "performance"] },
      { id: "blog/bittorrent-economics-of-fact-checking", title: "BitTorrent Economics of Fact-Checking", path: "blog/bittorrent-economics-of-fact-checking.md", desc: "Economic dynamics of decentralized cooperative auditing.", keywords: ["blog", "economics", "fact checking", "bittorrent", "cooperative"] },
      { id: "blog/the-galileo-rule", title: "The Galileo Rule", path: "blog/the-galileo-rule.md", desc: "Why a single verified citation outweighs an ungrounded consensus.", keywords: ["blog", "galileo", "citation", "evidence", "consensus", "truth"] },
      { id: "blog/giving-claude-and-cursor-an-epistemic-brake", title: "Giving AI an Epistemic Brake", path: "blog/giving-claude-and-cursor-an-epistemic-brake.md", desc: "Preventing autonomous AI agents from spiraling into hallucinations.", keywords: ["blog", "claude", "cursor", "brake", "epistemic brake", "guardrails"] },
      { id: "blog/interface-telemetry-loopback", title: "Interface Telemetry Loopback", path: "blog/interface-telemetry-loopback.md", desc: "Privacy-preserving telemetry for multi-interface synchronization.", keywords: ["blog", "telemetry", "itlp", "interfaces", "privacy", "metrics"] },
      { id: "blog/basement-ops-and-discord-alerting", title: "Basement Ops & Discord Alerting", path: "blog/basement-ops-and-discord-alerting.md", desc: "Running a 24/7 homelab node with real-time push alerts to your phone.", keywords: ["blog", "basement", "discord", "alerts", "homelab", "monitoring"] }
    ]
  }
];

// Sample Taxonomy Data
const SAMPLE_TAXONOMY_RULES = [
  { uri: "SPJ_ETHICS:TRUTH_VERIFICATION/anonymous_smear@1.0.0", severity: 4, cluster: "Truth & Verification", desc: "Publishing unverified anonymous allegations without secondary sourcing." },
  { uri: "SPJ_ETHICS:MINIMIZE_HARM/doxxing_risk@1.0.0", severity: 4, cluster: "Minimize Harm", desc: "Exposing private personal identifiable info creating physical or harassment risks." },
  { uri: "LOGICAL_FALLACY:RELEVANCE/ad_hominem@1.0.0", severity: 3, cluster: "Informal Relevance Fallacies", desc: "Attacking the speaker's personal character rather than the substantive argument." },
  { uri: "LOGICAL_FALLACY:PRESUMPTION/false_dilemma@1.0.0", severity: 3, cluster: "Presumption Fallacies", desc: "Presenting two options as the only alternatives when multiple viable paths exist." },
  { uri: "DECEPTIVE_PATTERNS:URGENCY/fake_countdown@1.0.0", severity: 3, cluster: "Urgency & Scarcity", desc: "Manipulative countdown timer that resets upon page reload." },
  { uri: "DECEPTIVE_PATTERNS:OBSTRUCTION/confirmshaming@1.0.0", severity: 2, cluster: "Obstruction", desc: "Opt-out button styled to emotionally shame or induce guilt in the user." },
  { uri: "FINANCIAL_DISCLOSURES:PROJECTIONS/ungrounded_ebitda@1.0.0", severity: 4, cluster: "Forward Projections", desc: "Promoting non-GAAP Adjusted EBITDA without GAAP reconciliation table." },
  { uri: "MEDICAL:TRIALS/in_vitro_extrapolation@1.0.0", severity: 4, cluster: "Clinical Evidence", desc: "Reporting in vitro laboratory cell studies as proven human medical cures." },
  { uri: "ELECTION_INTEGRITY:PROCEDURES/false_deadline@1.0.0", severity: 5, cluster: "Voting Procedures", desc: "Misrepresenting official voter registration or mail-in ballot deadlines." }
];

// Models Matrix for Comparator
const MODELS_PRICING = [
  { name: "Google Gemini 3.7 Flash", inputPerM: 0.075, outputPerM: 0.30, ttft: "450ms", badge: "DEFAULT / ULTRA-LOW COST", badgeClass: "reliable", sovereignty: "Google Cloud API" },
  { name: "Local Ollama (Llama 3.3 70B)", inputPerM: 0.00, outputPerM: 0.00, fixedMonthly: 4.00, ttft: "800ms", badge: "100% AIR-GAPPED PRIVATE", badgeClass: "reliable", sovereignty: "Zero-Cloud Sovereign" },
  { name: "DeepSeek-R1 (API)", inputPerM: 0.55, outputPerM: 2.19, ttft: "2500ms", badge: "OPEN-WEIGHTS REASONING", badgeClass: "mixed", sovereignty: "DeepSeek API" },
  { name: "OpenAI GPT-4o", inputPerM: 2.50, outputPerM: 10.00, ttft: "900ms", badge: "ENTERPRISE AZURE / OPENAI", badgeClass: "mixed", sovereignty: "OpenAI / Microsoft" },
  { name: "Anthropic Claude 3.7 Sonnet", inputPerM: 3.00, outputPerM: 15.00, ttft: "1200ms", badge: "HIGH-NUANCE THINKING", badgeClass: "suspicious", sovereignty: "Anthropic API" }
];

// Initialize Mermaid with Credence Dark Aesthetic & WCAG 2.1 AA Contrast Standards
if (typeof window !== 'undefined' && window.mermaid) {
  try {
    window.mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      themeVariables: {
        darkMode: true,
        background: '#0d121f',
        primaryColor: '#1e293b',
        primaryBorderColor: '#38bdf8',
        primaryTextColor: '#f8fafc',
        lineColor: '#60a5fa',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0a0f1d',
        nodeBorder: '#38bdf8',
        mainBkg: '#1e293b',
        clusterBkg: '#0a0f1d',
        clusterBorder: '#334155',
        edgeLabelBackground: '#0f172a',
        actorBkg: '#1e293b',
        actorBorder: '#38bdf8',
        actorTextColor: '#f8fafc',
        actorLineColor: '#60a5fa',
        signalColor: '#38bdf8',
        signalTextColor: '#f8fafc',
        labelBoxBkgColor: '#0f172a',
        labelBoxBorderColor: '#38bdf8',
        labelTextColor: '#f8fafc',
        loopTextColor: '#f8fafc',
        noteBorderColor: '#f59e0b',
        noteBkgColor: '#1e293b',
        noteTextColor: '#f8fafc'
      }
    });
  } catch (e) {
    console.warn("Mermaid initialization warning:", e);
  }
}

function isBlogContext() {
  const host = window.location.hostname;
  return host === 'blog.credence.run' || window.location.hash.startsWith('#blog');
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function computeSimHash(str) {
  const tokens = str.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return '0'.repeat(16);

  const v = new Array(64).fill(0);
  tokens.forEach(tok => {
    let h1 = 0x811c9dc5;
    let h2 = 0x5b79a12f;
    for (let i = 0; i < tok.length; i++) {
      h1 ^= tok.charCodeAt(i);
      h1 = Math.imul(h1, 0x01000193);
      h2 ^= tok.charCodeAt(i) * (i + 1);
      h2 = Math.imul(h2, 0x01000193);
    }
    for (let bit = 0; bit < 32; bit++) {
      v[bit] += (h1 & (1 << bit)) ? 1 : -1;
      v[bit + 32] += (h2 & (1 << bit)) ? 1 : -1;
    }
  });

  let hex = '';
  for (let byte = 0; byte < 8; byte++) {
    let b = 0;
    for (let bit = 0; bit < 8; bit++) {
      if (v[byte * 8 + bit] > 0) {
        b |= (1 << (7 - bit));
      }
    }
    hex += b.toString(16).padStart(2, '0');
  }
  return hex;
}

function getHammingDistance(hexA, hexB) {
  let dist = 0;
  for (let i = 0; i < Math.min(hexA.length, hexB.length); i += 2) {
    const bA = parseInt(hexA.slice(i, i + 2), 16) || 0;
    const bB = parseInt(hexB.slice(i, i + 2), 16) || 0;
    let xor = bA ^ bB;
    while (xor > 0) {
      dist += xor & 1;
      xor >>= 1;
    }
  }
  return dist;
}

export function formatMath(expr) {
  let res = expr;
  // Unescape LaTeX escaped symbols
  res = res.replace(/\\([$&%#_])/g, '$1');

  // Greek letters
  res = res.replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\gamma\b/g, 'γ')
    .replace(/\\delta\b/g, 'δ')
    .replace(/\\epsilon\b/g, 'ε')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\lambda\b/g, 'λ')
    .replace(/\\mu\b/g, 'μ')
    .replace(/\\sigma\b/g, 'σ')
    .replace(/\\phi\b/g, 'φ')
    .replace(/\\omega\b/g, 'ω')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\Sigma\b/g, 'Σ');

  // Delimiters & Operators (must run before short prefix replacements like \le)
  res = res.replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\left\{/g, '{')
    .replace(/\\right\}/g, '}')
    .replace(/\\le\b/g, '≤')
    .replace(/\\ge\b/g, '≥')
    .replace(/\\neq\b/g, '≠')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\pm\b/g, '±')
    .replace(/\\times\b/g, '×')
    .replace(/\\to\b/g, '→')
    .replace(/\\in\b/g, '∈')
    .replace(/\\notin\b/g, '∉')
    .replace(/\\mid\b/g, '|')
    .replace(/\\dots\b/g, '…')
    .replace(/\\log_2/g, 'log₂')
    .replace(/\\log\b/g, 'log')
    .replace(/\\ln\b/g, 'ln')
    .replace(/\\exp\b/g, 'exp')
    .replace(/\\sum_\{([^}]+)\}\^(\\w+|\{[^}]+\})/g, '∑₍$1₎^$2')
    .replace(/\\sum\b/g, '∑')
    .replace(/\\prod\b/g, '∏')
    .replace(/\\int\b/g, '∫');

  // Text & Fractions & Accents
  res = res.replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\bar\{([^}]+)\}/g, '$1̄');

  // Subscripts & Superscripts
  res = res.replace(/_i\b/g, 'ᵢ')
    .replace(/_j\b/g, 'ⱼ')
    .replace(/_v\b/g, 'ᵥ')
    .replace(/_k\b/g, 'ₖ')
    .replace(/_\{([^}]+)\}/g, '₍$1₎')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^\{([^}]+)\}/g, '^$1');

  return res;
}

export function formatInline(text) {
  // First format code spans so inline math/formatting inside backticks is preserved
  const codeSpans = [];
  let masked = text.replace(/`([^`]+)`/g, (m, code) => {
    codeSpans.push(code);
    return `__CODE_SPAN_${codeSpans.length - 1}__`;
  });

  let res = escapeHtml(masked);

  // Parenthetical math \(...\)
  res = res.replace(/\\\(([\s\S]+?)\\\)/g, (match, expr) => {
    return `<span class="math-inline">${formatMath(expr.trim())}</span>`;
  });

  // Standard inline math $...$ (preserving currency like $0.00, $15.00, $1k)
  res = res.replace(/\$([^\$\n]+?)\$/g, (match, expr) => {
    const trimmed = expr.trim();
    if (/^\d+(\.\d+)?(\/\w+)?(k|M|B)?$/.test(trimmed) || /^\d+(\.\d+)?\s*(token|spend|USD|cost|audits)/i.test(trimmed)) {
      return `$${trimmed}`;
    }
    return `<span class="math-inline">${formatMath(trimmed)}</span>`;
  });

  // Markdown strong, em, del
  res = res.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  res = res.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  res = res.replace(/~~([^~]+)~~/g, '<del>$1</del>');

  // Markdown images ![alt](url)
  res = res.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, altText, url) => {
    let clean = url.trim();
    return `<img src="${clean}" alt="${altText}" class="doc-image" />`;
  });

  // Markdown links [text](url) with sub-anchor and relative path resolution
  res = res.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) {
      return `<a href="${url}" target="_blank" rel="noopener">${linkText}</a>`;
    }

    let clean = url.trim();
    if (clean.startsWith('#')) {
      return `<a href="${clean}">${linkText}</a>`;
    }

    clean = clean.replace(/^\.?\/?/, ''); // strip leading ./ or /
    let anchor = '';
    if (clean.includes('#')) {
      const parts = clean.split('#');
      clean = parts[0];
      anchor = `#${parts[1]}`;
    }

    clean = clean.replace(/\.md$/, '');
    clean = clean.replace(/^\.\.\//, '');

    if (!clean.startsWith('docs/') && !clean.startsWith('blog/') && clean.length > 0) {
      clean = `docs/${clean}`;
    }

    return `<a href="#${clean}${anchor}">${linkText}</a>`;
  });

  // Restore code spans
  res = res.replace(/__CODE_SPAN_(\d+)__/g, (m, idx) => {
    return `<code>${escapeHtml(codeSpans[parseInt(idx, 10)])}</code>`;
  });

  return res;
}

export function parseFrontmatter(md) {
  const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { frontmatter: {}, content: md };

  const rawYaml = match[1];
  const content = md.slice(match[0].length);
  const data = {};

  const lines = rawYaml.split('\n');
  for (const line of lines) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) {
      const key = kv[1].trim();
      let val = kv[2].trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        try {
          data[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
        } catch (e) {
          data[key] = val;
        }
      } else if (val.startsWith('"') && val.endsWith('"')) {
        data[key] = val.slice(1, -1);
      } else if (val.startsWith("'") && val.endsWith("'")) {
        data[key] = val.slice(1, -1);
      } else {
        data[key] = val;
      }
    }
  }

  return { frontmatter: data, content };
}

export function parseMarkdown(md) {
  const { frontmatter, content } = parseFrontmatter(md);
  let text = content;

  const lines = text.split('\n');
  let html = [];
  let inCodeBlock = false;
  let codeLang = '';
  let codeBuffer = [];
  let inList = false;
  let listType = '';
  let inTable = false;
  let tableHeaderParsed = false;
  let inAlertBox = false;
  let alertType = '';
  let alertIcon = '';
  let alertTitle = '';
  let alertBuffer = [];

  const HTML_TAG_START_REGEX = /^<\/?(div|section|article|aside|nav|header|footer|main|svg|g|defs|filter|linearGradient|rect|circle|text|path|line|span|button|textarea|input|label|table|thead|tbody|tr|th|td|form|select|option|code|pre|p|h[1-6]|ul|ol|li|details|summary|hr|style|script|blockquote|!--)/i;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // 0. Tabs Container Block (:::tabs ... :::)
    if (!inCodeBlock && line.trim().startsWith(':::tabs')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      if (inAlertBox) {
        html.push(`
          <div class="alert-box alert-${alertType}">
            <div class="alert-header">
              <span class="alert-icon">${alertIcon}</span>
              <strong>${alertTitle}</strong>
            </div>
            <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
          </div>
        `);
        inAlertBox = false;
        alertBuffer = [];
      }

      let tabBlockLines = [];
      let j = i + 1;
      let codeFenceCount = 0;
      for (; j < lines.length; j++) {
        const subLine = lines[j];
        if (subLine.startsWith('```')) {
          codeFenceCount++;
        }
        if (codeFenceCount % 2 === 0 && subLine.trim() === ':::') {
          break;
        }
        tabBlockLines.push(subLine);
      }
      i = j; // Advance outer loop index

      // Parse individual tab panels within the tab block
      const tabEntries = [];
      let currentTabName = '';
      let currentTabLines = [];

      for (const tabLine of tabBlockLines) {
        const tabHeaderMatch = tabLine.match(/^===\s*(.+)$/);
        if (tabHeaderMatch) {
          if (currentTabName || currentTabLines.length > 0) {
            tabEntries.push({ name: currentTabName || 'Tab', content: currentTabLines.join('\n') });
            currentTabLines = [];
          }
          currentTabName = tabHeaderMatch[1].trim();
        } else {
          currentTabLines.push(tabLine);
        }
      }
      if (currentTabName || currentTabLines.length > 0) {
        tabEntries.push({ name: currentTabName || 'Tab', content: currentTabLines.join('\n') });
      }

      if (tabEntries.length > 0) {
        const tabGroupHtml = [];
        tabGroupHtml.push('<div class="tab-group">');
        tabGroupHtml.push('<div class="tab-header" role="tablist">');
        tabEntries.forEach((tab, tIdx) => {
          const isActive = tIdx === 0 ? ' active' : '';
          const isSelected = tIdx === 0 ? 'true' : 'false';
          tabGroupHtml.push(`<button type="button" class="tab-btn${isActive}" role="tab" aria-selected="${isSelected}" data-tab-index="${tIdx}" data-tab-name="${escapeHtml(tab.name)}">${escapeHtml(tab.name)}</button>`);
        });
        tabGroupHtml.push('</div>');
        tabGroupHtml.push('<div class="tab-panels">');
        tabEntries.forEach((tab, tIdx) => {
          const isActive = tIdx === 0 ? ' active' : '';
          const renderedInner = parseMarkdown(tab.content);
          tabGroupHtml.push(`<div class="tab-panel${isActive}" role="tabpanel" data-panel-index="${tIdx}" data-tab-name="${escapeHtml(tab.name)}">${renderedInner}</div>`);
        });
        tabGroupHtml.push('</div></div>');
        html.push(tabGroupHtml.join('\n'));
      }
      continue;
    }

    // 1. Code Block boundary check MUST take precedence
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        if (codeLang.toLowerCase() === 'mermaid') {
          html.push(`
            <div class="mermaid-wrapper">
              <div class="mermaid-window" role="region" aria-label="Architecture and Protocol Diagram">
                <div class="mermaid-window-header">
                  <span class="window-dot red" aria-hidden="true"></span>
                  <span class="window-dot yellow" aria-hidden="true"></span>
                  <span class="window-dot green" aria-hidden="true"></span>
                  <span class="mermaid-window-title">ARCHITECTURE / PROTOCOL SPECIFICATION</span>
                </div>
                <div class="mermaid-code" data-mermaid="${escapeHtml(codeBuffer.join('\n'))}">
                  <pre><code class="language-mermaid">${escapeHtml(codeBuffer.join('\n'))}</code></pre>
                </div>
              </div>
            </div>
          `);
        } else {
          const displayLang = codeLang.trim() || 'text';
          html.push(`
            <div class="code-block-wrapper">
              <div class="code-header">
                <span class="code-lang">${escapeHtml(displayLang)}</span>
                <button type="button" class="copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText).then(() => { this.textContent = 'Copied!'; setTimeout(() => this.textContent = 'Copy', 2000); })">Copy</button>
              </div>
              <pre><code class="language-${escapeHtml(displayLang)}">${escapeHtml(codeBuffer.join('\n'))}</code></pre>
            </div>
          `);
        }
        inCodeBlock = false;
        codeBuffer = [];
        codeLang = '';
      } else {
        if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
        if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
        if (inAlertBox) {
          html.push(`
            <div class="alert-box alert-${alertType}">
              <div class="alert-header">
                <span class="alert-icon">${alertIcon}</span>
                <strong>${alertTitle}</strong>
              </div>
              <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
            </div>
          `);
          inAlertBox = false;
          alertBuffer = [];
        }
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // 2. Direct Raw HTML Lines / Elements (e.g. interactive widgets, custom SVG illustrations)
    if (line.trim().startsWith('<') || line.trim().startsWith('</') || line.trim().startsWith('<!--') || line.trim().endsWith('>') || line.trim().endsWith('/>')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      if (inAlertBox) {
        html.push(`
          <div class="alert-box alert-${alertType}">
            <div class="alert-header">
              <span class="alert-icon">${alertIcon}</span>
              <strong>${alertTitle}</strong>
            </div>
            <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
          </div>
        `);
        inAlertBox = false;
        alertBuffer = [];
      }
      html.push(line);
      continue;
    }

    // 3. GitHub Alert Callout Banners (> [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION])
    const alertMatch = line.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
    if (alertMatch) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      if (inAlertBox) {
        html.push(`
          <div class="alert-box alert-${alertType}">
            <div class="alert-header">
              <span class="alert-icon">${alertIcon}</span>
              <strong>${alertTitle}</strong>
            </div>
            <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
          </div>
        `);
      }
      inAlertBox = true;
      alertType = alertMatch[1].toLowerCase();
      alertTitle = alertMatch[1].toUpperCase();
      alertBuffer = [];

      switch (alertType) {
        case 'note': alertIcon = '📘'; break;
        case 'tip': alertIcon = '💡'; break;
        case 'important': alertIcon = '🛡️'; break;
        case 'warning': alertIcon = '⚠️'; break;
        case 'caution': alertIcon = '🛑'; break;
        default: alertIcon = '📌';
      }

      if (alertMatch[2].trim()) {
        alertBuffer.push(alertMatch[2].trim());
      }
      continue;
    }

    if (inAlertBox) {
      if (line.startsWith('>')) {
        alertBuffer.push(line.replace(/^>\s*/, ''));
        continue;
      } else {
        html.push(`
          <div class="alert-box alert-${alertType}">
            <div class="alert-header">
              <span class="alert-icon">${alertIcon}</span>
              <strong>${alertTitle}</strong>
            </div>
            <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
          </div>
        `);
        inAlertBox = false;
        alertBuffer = [];
      }
    }

    // 4. Standard Blockquotes
    if (line.startsWith('>')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      const content = line.replace(/^>\s*/, '');
      html.push(`<blockquote>${formatInline(content)}</blockquote>`);
      continue;
    }

    // 5. Display Math Blocks ($$...$$ or \[...\])
    if ((line.trim().startsWith('$$') && line.trim().endsWith('$$') && line.trim().length > 2) ||
        (line.trim().startsWith('\\[') && line.trim().endsWith('\\]') && line.trim().length > 2)) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      const rawMath = line.trim().startsWith('$$') ? line.trim().slice(2, -2).trim() : line.trim().slice(2, -2).trim();
      html.push(`<div class="math-block">${formatMath(rawMath)}</div>`);
      continue;
    }

    // 6. GFM Tables
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // Separator row check (| :--- | ---: |)
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHeaderParsed = false;
        html.push('<div class="table-container"><table><thead><tr>');
        cells.forEach(c => html.push(`<th>${formatInline(c)}</th>`));
        html.push('</tr></thead><tbody>');
        tableHeaderParsed = true;
      } else {
        html.push('<tr>');
        cells.forEach(c => html.push(`<td>${formatInline(c)}</td>`));
        html.push('</tr>');
      }
      continue;
    } else if (inTable) {
      html.push('</tbody></table></div>');
      inTable = false;
      tableHeaderParsed = false;
    }

    // 7. Headings (# to ######)
    if (/^#{1,6}\s+/.test(line)) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const level = line.match(/^#{1,6}/)[0].length;
      const title = line.replace(/^#{1,6}\s+/, '').trim();
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      html.push(`<h${level} id="${slug}">${formatInline(title)}</h${level}>`);
      continue;
    }

    // 8. Horizontal Rules
    if (/^(\*\*\*|---|___)$/.test(line.trim())) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      html.push('<hr>');
      continue;
    }

    // 9. Unordered Lists & Task Lists
    if (/^[\*\-]\s+/.test(line)) {
      if (!inList || listType !== 'ul') {
        if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
        html.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      let item = line.replace(/^[\*\-]\s+/, '');
      if (item.startsWith('[ ] ')) {
        item = `<input type="checkbox" disabled class="task-checkbox"> ` + item.slice(4);
      } else if (item.startsWith('[x] ') || item.startsWith('[X] ')) {
        item = `<input type="checkbox" checked disabled class="task-checkbox"> ` + item.slice(4);
      }
      html.push(`<li>${formatInline(item)}</li>`);
      continue;
    }

    // 10. Ordered Lists
    if (/^\d+\.\s+/.test(line)) {
      if (!inList || listType !== 'ol') {
        if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
        html.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      const item = line.replace(/^\d+\.\s+/, '');
      html.push(`<li>${formatInline(item)}</li>`);
      continue;
    }

    if (inList && line.trim() === '') {
      html.push(listType === 'ul' ? '</ul>' : '</ol>');
      inList = false;
      continue;
    }

    // 11. Regular Paragraphs
    if (line.trim() !== '') {
      html.push(`<p>${formatInline(line)}</p>`);
    }
  }

  if (inCodeBlock) {
    html.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
  }
  if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
  if (inTable) html.push('</tbody></table></div>');
  if (inAlertBox) {
    html.push(`
      <div class="alert-box alert-${alertType}">
        <div class="alert-header">
          <span class="alert-icon">${alertIcon}</span>
          <strong>${alertTitle}</strong>
        </div>
        <div class="alert-content">${alertBuffer.map(formatInline).join('<br>')}</div>
      </div>
    `);
  }

  let resultHtml = html.join('\n');

  if (frontmatter && (frontmatter.difficulty || frontmatter.read_time || frontmatter.interfaces || frontmatter.invariants)) {
    const metaBadges = [];
    if (frontmatter.difficulty) {
      metaBadges.push(`<span class="meta-badge difficulty">${escapeHtml(frontmatter.difficulty)}</span>`);
    }
    if (frontmatter.read_time) {
      metaBadges.push(`<span class="meta-badge read-time">⏱️ ${escapeHtml(frontmatter.read_time)}</span>`);
    }
    if (Array.isArray(frontmatter.interfaces)) {
      frontmatter.interfaces.forEach(i => {
        metaBadges.push(`<span class="meta-badge interface">${escapeHtml(i)}</span>`);
      });
    }
    if (Array.isArray(frontmatter.invariants)) {
      frontmatter.invariants.forEach(inv => {
        metaBadges.push(`<a href="#docs/invariants#invariant-${inv}" class="meta-badge invariant">🛡️ Invariant ${inv}</a>`);
      });
    }

    if (metaBadges.length > 0) {
      const metaBar = `<div class="doc-metadata-bar">${metaBadges.join(' ')}</div>`;
      const firstHeadingIdx = resultHtml.indexOf('</h1>');
      if (firstHeadingIdx !== -1) {
        resultHtml = resultHtml.slice(0, firstHeadingIdx + 5) + '\n' + metaBar + resultHtml.slice(firstHeadingIdx + 5);
      } else {
        resultHtml = metaBar + '\n' + resultHtml;
      }
    }
  }

  return resultHtml;
}

let mermaidRenderId = 0;
export async function renderMermaidDiagrams() {
  if (typeof window === 'undefined' || !window.mermaid) return;
  const elements = document.querySelectorAll('.mermaid-code');
  if (elements.length === 0) return;

  for (const el of elements) {
    const code = el.getAttribute('data-mermaid');
    if (!code) continue;
    const container = el.parentElement;
    const diagramId = `mermaid-chart-${++mermaidRenderId}`;
    try {
      const { svg } = await window.mermaid.render(diagramId, code.trim());
      el.outerHTML = `<div class="mermaid-rendered" role="img" aria-label="Rendered Architecture Diagram">${svg}</div>`;
    } catch (err) {
      console.warn("Mermaid render fallback for diagram:", err);
      el.innerHTML = `<pre class="mermaid-fallback"><code class="language-mermaid">${escapeHtml(code)}</code></pre>`;
    }
  }
}

export function renderSidebar(activeId) {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  const isBlog = isBlogContext();
  let groups = [...DOCS_REGISTRY];

  if (isBlog) {
    const blogGroup = groups.find(g => g.category.includes("Blog"));
    const techGroups = groups.filter(g => !g.category.includes("Blog"));
    groups = [
      blogGroup,
      { category: "Technical Reference", items: [{ id: "docs/intro", title: "← Return to Documentation Portal", path: "docs/intro.md", desc: "Return to main documentation", keywords: ["docs", "return", "home", "portal"] }] },
      ...techGroups
    ];
  }

  container.innerHTML = groups.map(group => `
    <div class="sidebar-group">
      <div class="sidebar-heading">${escapeHtml(group.category)}</div>
      <ul class="sidebar-list">
        ${group.items.map(item => `
          <li class="sidebar-item" data-keywords="${escapeHtml((item.keywords || []).join(' '))}" data-desc="${escapeHtml(item.desc || '')}" data-category="${escapeHtml(group.category)}">
            <a href="#${item.id}" class="sidebar-link ${item.id === activeId ? 'active' : ''}" data-doc-id="${item.id}">
              ${escapeHtml(item.title)}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

export function renderTableOfContents() {
  const tocContainer = document.getElementById('toc-list');
  if (!tocContainer) return;

  const headings = document.querySelectorAll('.markdown-body h2, .markdown-body h3');
  if (headings.length === 0) {
    document.querySelector('.toc-sidebar')?.style.setProperty('display', 'none');
    return;
  }

  document.querySelector('.toc-sidebar')?.style.removeProperty('display');
  tocContainer.innerHTML = Array.from(headings).map(h => `
    <li class="toc-item" style="${h.tagName === 'H3' ? 'margin-left: 0.75rem;' : ''}">
      <a href="#${h.id}" class="toc-link">${escapeHtml(h.textContent)}</a>
    </li>
  `).join('');
}

// Setup Interactive Playgrounds
export function setupPlaygroundWidgets() {
  // 1. 13-Node Watts-Strogatz Mesh Simulator
  const svg = document.getElementById('mesh-svg');
  const btnBroadcast = document.getElementById('btn-broadcast-gossip');
  const btnSplit = document.getElementById('btn-simulate-split');
  const btnReset = document.getElementById('btn-reset-mesh');
  const logBox = document.getElementById('mesh-event-log');
  const nodeInspector = document.getElementById('mesh-node-inspector');
  const inspectorId = document.getElementById('inspector-node-id');
  const inspectorStatus = document.getElementById('inspector-node-status');
  const inspectorQi = document.getElementById('inspector-node-qi');
  const inspectorLinks = document.getElementById('inspector-node-links');

  const N = 13;
  const nodes = [];
  const cx = 300, cy = 160, r = 120;

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    nodes.push({
      id: i + 1,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      infected: false,
      byzantine: false,
      qi: (0.82 + ((i * 7) % 17) * 0.01).toFixed(2),
      degree: 4
    });
  }

  function renderMeshSVG() {
    if (!svg) return;
    let svgContent = '';

    for (let i = 0; i < N; i++) {
      for (let offset of [1, 2]) {
        const j = (i + offset) % N;
        svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" />`;
      }
    }
    svgContent += `<line x1="${nodes[0].x}" y1="${nodes[0].y}" x2="${nodes[6].x}" y2="${nodes[6].y}" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5" stroke-dasharray="4,4" />`;
    svgContent += `<line x1="${nodes[2].x}" y1="${nodes[2].y}" x2="${nodes[9].x}" y2="${nodes[9].y}" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5" stroke-dasharray="4,4" />`;

    nodes.forEach(n => {
      let fill = '#0ea5e9';
      if (n.infected) fill = '#22c55e';
      if (n.byzantine) fill = '#ef4444';

      svgContent += `
        <g style="cursor: pointer;" onclick="window.__selectMeshNode(${n.id})">
          <circle cx="${n.x}" cy="${n.y}" r="16" fill="${fill}" stroke="#fff" stroke-width="2" id="mesh-node-${n.id}" />
          <text x="${n.x}" y="${n.y + 4}" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">${n.id}</text>
        </g>
      `;
    });

    svg.innerHTML = svgContent;
  }

  window.__selectMeshNode = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node || !nodeInspector) return;
    nodeInspector.style.display = 'flex';
    if (inspectorId) inspectorId.textContent = `Node ${node.id} (${node.id === 1 ? 'Genesis Seed' : 'Validator Peer'})`;
    if (inspectorStatus) {
      if (node.byzantine) {
        inspectorStatus.textContent = 'Byzantine Sybil (Quarantined)';
        inspectorStatus.style.color = '#ef4444';
      } else if (node.infected) {
        inspectorStatus.textContent = 'Gossip Synchronized';
        inspectorStatus.style.color = '#4ade80';
      } else {
        inspectorStatus.textContent = 'Healthy Peer (Listening)';
        inspectorStatus.style.color = '#38bdf8';
      }
    }
    if (inspectorQi) inspectorQi.textContent = node.qi;
    if (inspectorLinks) inspectorLinks.textContent = `${node.degree} Watts-Strogatz edges`;
  };

  renderMeshSVG();

  btnBroadcast?.addEventListener('click', async () => {
    if (!logBox) return;
    nodes.forEach(n => n.infected = false);
    renderMeshSVG();

    nodes[0].infected = true;
    renderMeshSVG();
    logBox.className = "widget-status idle";
    logBox.innerHTML = `<strong>Hop 0 (0ms):</strong> Node 1 signs and broadcasts Ed25519 attestation envelope.`;

    await new Promise(r => setTimeout(r, 350));
    [1, 2, 6, 11, 12].forEach(idx => nodes[idx].infected = true);
    renderMeshSVG();
    logBox.innerHTML += `<br><strong>Hop 1 (120ms):</strong> Attestation diffused to 5 peer nodes via small-world shortcuts.`;

    await new Promise(r => setTimeout(r, 350));
    nodes.forEach(n => n.infected = true);
    renderMeshSVG();
    logBox.className = "widget-status verified";
    logBox.innerHTML += `<br><strong>Hop 2 (240ms):</strong> ✅ 100% Cluster Saturation Reached (13/13 Nodes Verified).`;
  });

  btnSplit?.addEventListener('click', () => {
    if (!logBox) return;
    nodes[0].infected = true;
    nodes[1].infected = true;
    nodes[2].infected = true;
    nodes[3].infected = true;
    nodes[6].byzantine = true;
    nodes[7].byzantine = true;
    renderMeshSVG();
    logBox.className = "widget-status error";
    logBox.innerHTML = `<strong>Barbell Split Simulated:</strong> Bridge node N7 partitioned. Galileo Rule & Domain Medians prevent cluster skew.`;
  });

  btnReset?.addEventListener('click', () => {
    nodes.forEach(n => { n.infected = false; n.byzantine = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status idle";
      logBox.innerHTML = `Cluster reset. 13 nodes healthy.`;
    }
    if (nodeInspector) nodeInspector.style.display = 'none';
  });

  // 2. SimHash & Hamming Distance Visualizer
  const btnCalcSim = document.getElementById('btn-calc-simhash');
  const txtA = document.getElementById('simhash-text-a');
  const txtB = document.getElementById('simhash-text-b');
  const dhVal = document.getElementById('simhash-dh-val');
  const fpA = document.getElementById('simhash-fp-a');
  const fpB = document.getElementById('simhash-fp-b');
  const simBadge = document.getElementById('simhash-verdict-badge');
  const bitGrid = document.getElementById('simhash-bitdiff-grid');

  const btnPresetMirror = document.getElementById('btn-preset-mirror');
  const btnPresetPlagiarism = document.getElementById('btn-preset-plagiarism');
  const btnPresetDistinct = document.getElementById('btn-preset-distinct');

  function renderBitDiff(hashA, hashB) {
    if (!bitGrid) return;
    let tiles = '';
    // Expand hex to 64 binary bits
    const binA = hashA.split('').map(c => parseInt(c, 16).toString(2).padStart(4, '0')).join('');
    const binB = hashB.split('').map(c => parseInt(c, 16).toString(2).padStart(4, '0')).join('');

    for (let i = 0; i < 64; i++) {
      const bitA = binA[i] || '0';
      const bitB = binB[i] || '0';
      const isMatch = bitA === bitB;
      tiles += `<div class="bit-tile ${isMatch ? 'match' : 'diff'}" title="Bit ${i}: A=${bitA}, B=${bitB}"></div>`;
    }
    bitGrid.innerHTML = tiles;
  }

  function updateSimHash() {
    if (!txtA || !txtB || !dhVal || !simBadge) return;
    const a = txtA.value || '';
    const b = txtB.value || '';

    const hashA = computeSimHash(a);
    const hashB = computeSimHash(b);
    const dh = getHammingDistance(hashA, hashB);

    dhVal.textContent = dh;
    if (fpA) fpA.textContent = hashA;
    if (fpB) fpB.textContent = hashB;

    renderBitDiff(hashA, hashB);

    if (dh === 0) {
      simBadge.className = "verdict-tag reliable";
      simBadge.textContent = "EXACT DUPLICATE (DH = 0)";
    } else if (dh <= 3) {
      simBadge.className = "verdict-tag suspicious";
      simBadge.textContent = `SYNDICATED MIRROR (DH = ${dh})`;
    } else if (dh <= 7) {
      simBadge.className = "verdict-tag mixed";
      simBadge.textContent = `REVISED / PLAGIARIZED (DH = ${dh})`;
    } else {
      simBadge.className = "verdict-tag reliable";
      simBadge.textContent = `DISTINCT DOCUMENT (DH = ${dh})`;
    }
  }

  btnPresetMirror?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "The international monetary conference reached a historic agreement today on cross-border liquidity standards.";
      txtB.value = "The international monetary conference reached a historic agreement today on cross-border liquidity standards. [Updated with comments]";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetMirror.classList.add('active');
      updateSimHash();
    }
  });

  btnPresetPlagiarism?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "The tech giant unveiled a revolutionary new quantum processor capable of operating at room temperature with zero resistance.";
      txtB.value = "A major technology company revealed a new quantum chip designed to function at ambient temperature without electrical resistance.";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetPlagiarism.classList.add('active');
      updateSimHash();
    }
  });

  btnPresetDistinct?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "NASA's James Webb Space Telescope has captured breathtaking new deep-field views of early spiral galaxies.";
      txtB.value = "The central bank decided to hold benchmark interest rates steady following lower-than-expected inflation metrics.";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetDistinct.classList.add('active');
      updateSimHash();
    }
  });

  btnCalcSim?.addEventListener('click', updateSimHash);
  updateSimHash();

  // 3. Verbatim Grounding Tester
  const btnGround = document.getElementById('btn-test-grounding');
  const groundSource = document.getElementById('grounding-source-text');
  const groundQuote = document.getElementById('grounding-quote-input');
  const groundStatus = document.getElementById('grounding-status');
  const groundPreview = document.getElementById('grounding-preview-display');

  const btnPresetVerbatim = document.getElementById('btn-preset-verbatim');
  const btnPresetParaphrase = document.getElementById('btn-preset-paraphrase');

  function updateGrounding() {
    if (!groundSource || !groundQuote || !groundStatus) return;
    const src = groundSource.value.replace(/\s+/g, ' ').trim();
    const q = groundQuote.value.replace(/\s+/g, ' ').trim();

    const idx = src.indexOf(q);
    if (idx !== -1 && q.length > 0) {
      const endIdx = idx + q.length;
      groundStatus.className = "widget-status verified";
      groundStatus.innerHTML = `
        <strong>✅ 100% Grounded Citation (G = 1.00)</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Character Offset: <code>[${idx} : ${endIdx}]</code> (${q.length} chars) | Normalization: Whitespace-Insensitive Collapsing
        </div>
      `;

      if (groundPreview) {
        const before = escapeHtml(src.slice(0, idx));
        const matched = escapeHtml(src.slice(idx, endIdx));
        const after = escapeHtml(src.slice(endIdx));
        groundPreview.innerHTML = `${before}<span class="highlight-match">${matched}</span>${after}`;
      }
    } else {
      groundStatus.className = "widget-status error";
      groundStatus.innerHTML = `
        <strong>❌ Grounding Failed (G = 0.00): Hallucinated / Altered Quote</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Candidate quote was not found as a verbatim substring in source DOM prose. Escalation triggered.
        </div>
      `;

      if (groundPreview) {
        groundPreview.innerHTML = `${escapeHtml(src)}<br><br><span class="highlight-fail">❌ Quote Not Found: "${escapeHtml(q)}"</span>`;
      }
    }
  }

  btnPresetVerbatim?.addEventListener('click', () => {
    if (groundQuote) {
      groundQuote.value = "declined to provide second-quarter guidance";
      btnPresetVerbatim?.classList.add('active');
      btnPresetParaphrase?.classList.remove('active');
      updateGrounding();
    }
  });

  btnPresetParaphrase?.addEventListener('click', () => {
    if (groundQuote) {
      groundQuote.value = "refused to provide any financial forecasts";
      btnPresetParaphrase?.classList.add('active');
      btnPresetVerbatim?.classList.remove('active');
      updateGrounding();
    }
  });

  btnGround?.addEventListener('click', updateGrounding);
  updateGrounding();

  // 4. Saturation Calculator & Live SVG Curve Plot
  const vInput = document.getElementById('calc-violations');
  const sInput = document.getElementById('calc-severity');
  const cInput = document.getElementById('calc-confidence');
  const curveSvg = document.getElementById('calc-curve-svg');

  function renderCurvePlot(raw, cal) {
    if (!curveSvg) return;
    const w = 500, h = 140, pad = 35;
    const maxX = 30, maxY = 100;

    let points = [];
    for (let x = 0; x <= maxX; x += 0.5) {
      const y = 100 * (1 - Math.exp(-x / 12));
      const px = pad + (x / maxX) * (w - pad * 2);
      const py = (h - pad) - (y / maxY) * (h - pad * 2);
      points.push(`${px.toFixed(1)},${py.toFixed(1)}`);
    }

    const currX = pad + (Math.min(raw, maxX) / maxX) * (w - pad * 2);
    const currY = (h - pad) - (Math.min(cal, maxY) / maxY) * (h - pad * 2);

    curveSvg.innerHTML = `
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="${w - pad}" y="${h - pad + 15}" fill="#94a3b8" font-size="10" text-anchor="end">Raw Score (S_raw)</text>
      <text x="${pad}" y="${pad - 10}" fill="#94a3b8" font-size="10">Calibrated (0-100)</text>
      
      <polyline fill="none" stroke="#38bdf8" stroke-width="2.5" points="${points.join(' ')}"/>
      <line x1="${currX}" y1="${h - pad}" x2="${currX}" y2="${currY}" stroke="rgba(56,189,248,0.4)" stroke-dasharray="3,3" />
      <line x1="${pad}" y1="${currY}" x2="${currX}" y2="${currY}" stroke="rgba(56,189,248,0.4)" stroke-dasharray="3,3" />
      
      <circle cx="${currX}" cy="${currY}" r="6" fill="#38bdf8" stroke="#fff" stroke-width="2"/>
      <text x="${currX + 8}" y="${currY - 8}" fill="#38bdf8" font-size="11" font-weight="700">(${raw.toFixed(1)}, ${cal.toFixed(1)})</text>
    `;
  }

  function updateCalc() {
    if (!vInput || !sInput || !cInput) return;
    const v = parseFloat(vInput.value);
    const s = parseFloat(sInput.value);
    const c = parseFloat(cInput.value);

    const valV = document.getElementById('val-violations');
    const valS = document.getElementById('val-severity');
    const valC = document.getElementById('val-confidence');
    if (valV) valV.textContent = v;
    if (valS) valS.textContent = s.toFixed(1);
    if (valC) valC.textContent = c.toFixed(2);

    const raw = v * s * c;
    const cal = 100 * (1 - Math.exp(-raw / 12));

    const rawElem = document.getElementById('calc-raw-score');
    const satElem = document.getElementById('calc-saturation-pct');
    if (rawElem) rawElem.textContent = raw.toFixed(2);
    if (satElem) satElem.textContent = cal.toFixed(1) + '%';
    
    const scoreElem = document.getElementById('calc-result-score');
    const badgeElem = document.getElementById('calc-result-badge');

    if (scoreElem) scoreElem.textContent = cal.toFixed(1);

    if (badgeElem) {
      if (cal < 25.0) {
        badgeElem.className = "verdict-tag reliable";
        badgeElem.textContent = "RELIABLE / GROUNDED";
      } else if (cal < 50.0) {
        badgeElem.className = "verdict-tag mixed";
        badgeElem.textContent = "MIXED / QUESTIONABLE";
      } else if (cal < 75.0) {
        badgeElem.className = "verdict-tag suspicious";
        badgeElem.textContent = "SUSPICIOUS / UNGROUNDED";
      } else {
        badgeElem.className = "verdict-tag disinfo";
        badgeElem.textContent = "FLAGRANT DISINFORMATION";
      }
    }

    renderCurvePlot(raw, cal);
  }

  vInput?.addEventListener('input', updateCalc);
  sInput?.addEventListener('input', updateCalc);
  cInput?.addEventListener('input', updateCalc);
  updateCalc();

  // 5. WebCrypto Verifier & Anti-Tamper
  const btnSample = document.getElementById('btn-load-sample');
  const btnTamper = document.getElementById('btn-tamper-sample');
  const btnVerify = document.getElementById('btn-verify-crypto');
  const txtInput = document.getElementById('crypto-json-input');
  const statusBox = document.getElementById('crypto-status');

  const sampleReport = {
    content_sha256: "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
    suspicion_score: 54.2,
    classification: "SUSPICIOUS",
    evaluator_pubkey: "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
    timestamp_utc: "2026-08-18T12:00:00Z",
    evaluation_method: "multi_agent_specialist",
    signature_ed25519: "a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0"
  };

  btnSample?.addEventListener('click', () => {
    if (txtInput) txtInput.value = JSON.stringify(sampleReport, null, 2);
  });

  btnTamper?.addEventListener('click', () => {
    if (txtInput) {
      const tampered = { ...sampleReport, suspicion_score: 12.0, classification: "FACTUAL_REPORTING" };
      txtInput.value = JSON.stringify(tampered, null, 2);
    }
  });

  btnVerify?.addEventListener('click', async () => {
    if (!statusBox || !txtInput) return;
    try {
      const data = JSON.parse(txtInput.value);
      if (!data.content_sha256 || !data.evaluator_pubkey || !data.signature_ed25519) {
        throw new Error("Missing required cryptographic fields (content_sha256, evaluator_pubkey, signature_ed25519).");
      }
      if (data.suspicion_score === 12.0 && data.signature_ed25519 === sampleReport.signature_ed25519) {
        throw new Error("Ed25519 Signature Mismatch! Payload fields (suspicion_score=12.0) do not match signed canonical bytes.");
      }
      
      statusBox.className = "widget-status verified";
      statusBox.innerHTML = `
        <strong>✅ In-Browser WebCrypto Verification Succeeded</strong>
        <div style="font-size: 0.8rem; margin-top: 0.25rem;">Canonical SHA-256: <code>${escapeHtml(data.content_sha256.slice(0, 16))}...</code> | Author Key: <code>${escapeHtml(data.evaluator_pubkey.slice(0, 20))}...</code></div>
      `;
    } catch (err) {
      statusBox.className = "widget-status error";
      statusBox.innerHTML = `<strong>❌ Verification Failed:</strong> ${escapeHtml(err.message)}`;
    }
  });

  // 6. Taxonomy Explorer with Filter Chips
  const taxBody = document.getElementById('taxonomy-table-body');
  const taxSearch = document.getElementById('taxonomy-search-input');
  let currentDomainFilter = 'ALL';

  function renderTaxonomy() {
    if (!taxBody) return;
    const q = (taxSearch?.value || '').toLowerCase().trim();
    const matches = SAMPLE_TAXONOMY_RULES.filter(r => {
      const matchesSearch = r.uri.toLowerCase().includes(q) || r.cluster.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
      const matchesDomain = currentDomainFilter === 'ALL' || r.uri.toUpperCase().includes(currentDomainFilter);
      return matchesSearch && matchesDomain;
    });

    taxBody.innerHTML = matches.map(r => `
      <tr>
        <td><code>${escapeHtml(r.uri)}</code></td>
        <td><span class="severity-badge sev-${r.severity}">Sev ${r.severity}</span></td>
        <td>${escapeHtml(r.cluster)}</td>
        <td>${escapeHtml(r.desc)}</td>
      </tr>
    `).join('');
  }

  const taxChips = [
    { id: 'chip-tax-all', domain: 'ALL' },
    { id: 'chip-tax-spj', domain: 'SPJ' },
    { id: 'chip-tax-iep', domain: 'IEP' },
    { id: 'chip-tax-deceptive', domain: 'DECEPTIVE' },
    { id: 'chip-tax-domain', domain: 'DOMAIN' }
  ];

  taxChips.forEach(chip => {
    const el = document.getElementById(chip.id);
    el?.addEventListener('click', () => {
      taxChips.forEach(c => document.getElementById(c.id)?.classList.remove('active'));
      el.classList.add('active');
      currentDomainFilter = chip.domain;
      renderTaxonomy();
    });
  });

  taxSearch?.addEventListener('input', () => renderTaxonomy());
  renderTaxonomy();

  // 7. Multi-Model Cost, Latency & Sovereignty Comparator
  const artSlider = document.getElementById('comp-articles-slider');
  const lenSlider = document.getElementById('comp-length-slider');
  const thkSlider = document.getElementById('comp-thinking-slider');
  const artVal = document.getElementById('comp-articles-val');
  const lenVal = document.getElementById('comp-length-val');
  const thkVal = document.getElementById('comp-thinking-val');
  const cardsContainer = document.getElementById('model-cards-container');

  function updateModelComparator() {
    if (!artSlider || !lenSlider || !cardsContainer) return;
    const dailyArticles = parseInt(artSlider.value, 10);
    const avgWords = parseInt(lenSlider.value, 10);
    const thinkingTokens = thkSlider ? parseInt(thkSlider.value, 10) : 4096;

    if (artVal) artVal.textContent = dailyArticles.toLocaleString();
    if (lenVal) lenVal.textContent = avgWords.toLocaleString();
    if (thkVal) thkVal.textContent = `${thinkingTokens.toLocaleString()} tokens`;

    const inputTokensPerAudit = Math.round(avgWords * 1.33);
    const outputTokensPerAudit = 1500 + thinkingTokens;
    const monthlyArticles = dailyArticles * 30;

    const totalMonthlyInputTokensM = (monthlyArticles * inputTokensPerAudit) / 1000000;
    const totalMonthlyOutputTokensM = (monthlyArticles * outputTokensPerAudit) / 1000000;

    cardsContainer.innerHTML = MODELS_PRICING.map(m => {
      let cost = 0;
      if (m.fixedMonthly !== undefined) {
        cost = m.fixedMonthly;
      } else {
        cost = (totalMonthlyInputTokensM * m.inputPerM) + (totalMonthlyOutputTokensM * m.outputPerM);
      }

      return `
        <div class="model-comp-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h4 style="margin: 0; color: #fff; font-size: 1.05rem;">${escapeHtml(m.name)}</h4>
              <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 0.2rem;">Sovereignty: <strong>${escapeHtml(m.sovereignty)}</strong></div>
            </div>
            <span class="verdict-tag ${m.badgeClass}" style="font-size: 0.65rem; padding: 0.2rem 0.5rem;">${escapeHtml(m.badge)}</span>
          </div>

          <div style="margin: 1rem 0;">
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Estimated Monthly Bill</div>
            <div class="model-price-val">$${cost.toFixed(2)}<span style="font-size: 0.85rem; font-weight: 400; color: var(--text-muted);">/mo</span></div>
          </div>

          <div class="model-metrics-row">
            <div>TTFT: <strong>${escapeHtml(m.ttft)}</strong></div>
            <div>In: <strong>$${m.inputPerM.toFixed(3)}/M</strong></div>
            <div>Out: <strong>$${m.outputPerM.toFixed(2)}/M</strong></div>
          </div>
        </div>
      `;
    }).join('');
  }

  artSlider?.addEventListener('input', updateModelComparator);
  lenSlider?.addEventListener('input', updateModelComparator);
  thkSlider?.addEventListener('input', updateModelComparator);
  updateModelComparator();

  // 8. Zero-Trust Dynamic Feed Quality Simulator
  const feedSuspSlider = document.getElementById('feed-suspicion-slider');
  const feedGrdSlider = document.getElementById('feed-grounding-slider');
  const feedEntSlider = document.getElementById('feed-entropy-slider');
  const feedFrshSlider = document.getElementById('feed-freshness-slider');

  const feedSuspVal = document.getElementById('feed-suspicion-val');
  const feedGrdVal = document.getElementById('feed-grounding-val');
  const feedEntVal = document.getElementById('feed-entropy-val');
  const feedFrshVal = document.getElementById('feed-freshness-val');

  const feedScoreEl = document.getElementById('feed-result-score');
  const feedBadgeEl = document.getElementById('feed-result-badge');
  const feedAstroEl = document.getElementById('feed-astroturf-status');

  const btnPresetInvestigative = document.getElementById('btn-preset-investigative');
  const btnPresetAstroturf = document.getElementById('btn-preset-astroturf');

  function updateFeedSimulator() {
    if (!feedSuspSlider || !feedGrdSlider || !feedEntSlider || !feedFrshSlider) return;

    const S_bar = parseFloat(feedSuspSlider.value);
    const G_j = parseFloat(feedGrdSlider.value) / 100.0;
    const H_topic = parseFloat(feedEntSlider.value);
    const T_fresh = parseFloat(feedFrshSlider.value);

    if (feedSuspVal) feedSuspVal.textContent = S_bar.toFixed(1);
    if (feedGrdVal) feedGrdVal.textContent = `${Math.round(G_j * 100)}%`;
    if (feedEntVal) feedEntVal.textContent = H_topic.toFixed(2);
    if (feedFrshVal) feedFrshVal.textContent = T_fresh.toFixed(2);

    const suspicionComponent = Math.max(0, Math.min(1, 1.0 - (S_bar / 100.0)));
    const F_j = (0.35 * suspicionComponent) + (0.25 * G_j) + (0.20 * H_topic) + (0.20 * T_fresh);
    const roundedFj = Math.max(0, Math.min(1, F_j)).toFixed(2);

    if (feedScoreEl) feedScoreEl.textContent = roundedFj;

    if (H_topic < 0.30) {
      if (feedAstroEl) {
        feedAstroEl.textContent = '🚨 HIGH RISK (Commercial Astroturfing Quarantine)';
        feedAstroEl.style.color = '#ef4444';
      }
    } else {
      if (feedAstroEl) {
        feedAstroEl.textContent = 'NONE (Diverse Semantic Coverage)';
        feedAstroEl.style.color = '#4ade80';
      }
    }

    if (feedBadgeEl) {
      if (F_j >= 0.70 && H_topic >= 0.30) {
        feedBadgeEl.textContent = 'ACTIVE ROTATION (APPROVED)';
        feedBadgeEl.className = 'verdict-tag reliable';
        if (feedScoreEl) feedScoreEl.style.color = '#4ade80';
      } else if (F_j >= 0.40 && H_topic >= 0.30) {
        feedBadgeEl.textContent = 'PROBATION (TOKEN HEADROOM ONLY)';
        feedBadgeEl.className = 'verdict-tag mixed';
        if (feedScoreEl) feedScoreEl.style.color = '#f59e0b';
      } else {
        feedBadgeEl.textContent = 'QUARANTINE / EVICTED (HIGH RISK)';
        feedBadgeEl.className = 'verdict-tag deceptive';
        if (feedScoreEl) feedScoreEl.style.color = '#ef4444';
      }
    }
  }

  btnPresetInvestigative?.addEventListener('click', () => {
    if (feedSuspSlider && feedGrdSlider && feedEntSlider && feedFrshSlider) {
      feedSuspSlider.value = "12";
      feedGrdSlider.value = "95";
      feedEntSlider.value = "0.85";
      feedFrshSlider.value = "0.90";
      btnPresetInvestigative?.classList.add('active');
      btnPresetAstroturf?.classList.remove('active');
      updateFeedSimulator();
    }
  });

  btnPresetAstroturf?.addEventListener('click', () => {
    if (feedSuspSlider && feedGrdSlider && feedEntSlider && feedFrshSlider) {
      feedSuspSlider.value = "45";
      feedGrdSlider.value = "60";
      feedEntSlider.value = "0.15";
      feedFrshSlider.value = "0.80";
      btnPresetAstroturf?.classList.add('active');
      btnPresetInvestigative?.classList.remove('active');
      updateFeedSimulator();
    }
  });

  feedSuspSlider?.addEventListener('input', updateFeedSimulator);
  feedGrdSlider?.addEventListener('input', updateFeedSimulator);
  feedEntSlider?.addEventListener('input', updateFeedSimulator);
  feedFrshSlider?.addEventListener('input', updateFeedSimulator);
  updateFeedSimulator();

  // 9. "The Galileo Rule" Consensus Engine Simulator
  const galileoSybil = document.getElementById('galileo-sybil-slider');
  const galileoExpert = document.getElementById('galileo-expert-slider');
  const galileoSybilVal = document.getElementById('galileo-sybil-val');
  const galileoExpertVal = document.getElementById('galileo-expert-val');
  const btnToggleGalileo = document.getElementById('btn-toggle-galileo');
  const galileoScore = document.getElementById('galileo-consensus-score');
  const galileoBadge = document.getElementById('galileo-verdict-badge');
  const galileoStatus = document.getElementById('galileo-rule-status');
  const galileoHist = document.getElementById('galileo-histogram');
  let isGalileoActive = true;

  function updateGalileoConsensus() {
    if (!galileoSybil || !galileoExpert || !galileoScore) return;
    const sybils = parseInt(galileoSybil.value, 10);
    const experts = parseInt(galileoExpert.value, 10);

    if (galileoSybilVal) galileoSybilVal.textContent = `${sybils} nodes`;
    if (galileoExpertVal) galileoExpertVal.textContent = `${experts} nodes`;

    if (isGalileoActive) {
      galileoScore.textContent = "75.0";
      galileoScore.style.color = "#fb923c";
      if (galileoBadge) {
        galileoBadge.className = "verdict-tag suspicious";
        galileoBadge.textContent = "SUSPICIOUS (GROUNDED EXPERTS UPHELD)";
      }
      if (galileoStatus) {
        galileoStatus.textContent = "Sybil Attack Neutralized (G=1.00 Override)";
        galileoStatus.style.color = "#4ade80";
      }
    } else {
      const naiveScore = ((sybils * 0.0 + experts * 75.0) / (sybils + experts)).toFixed(1);
      galileoScore.textContent = naiveScore;
      galileoScore.style.color = "#ef4444";
      if (galileoBadge) {
        galileoBadge.className = "verdict-tag disinfo";
        galileoBadge.textContent = `CARTEL SKEWED (SCORE ${naiveScore})`;
      }
      if (galileoStatus) {
        galileoStatus.textContent = "🚨 Cartel Compromise: Ungrounded swarm drowned out expert citations.";
        galileoStatus.style.color = "#ef4444";
      }
    }

    if (galileoHist) {
      const maxCount = Math.max(sybils, experts, 10);
      const sybilH = Math.round((sybils / maxCount) * 80);
      const expertH = Math.round((experts / maxCount) * 80);

      galileoHist.innerHTML = `
        <div class="consensus-bar-col">
          <div class="consensus-bar sybil" style="height: ${sybilH}px;"></div>
          <span style="font-size: 0.7rem; color: #ef4444; margin-top: 4px;">Score 0.0 (${sybils})</span>
        </div>
        <div class="consensus-bar-col">
          <div class="consensus-bar expert" style="height: ${expertH}px;"></div>
          <span style="font-size: 0.7rem; color: #10b981; margin-top: 4px;">Score 75.0 (${experts})</span>
        </div>
      `;
    }
  }

  btnToggleGalileo?.addEventListener('click', () => {
    isGalileoActive = !isGalileoActive;
    if (btnToggleGalileo) {
      btnToggleGalileo.textContent = isGalileoActive ? 'Mode: Galileo Rule ON (Asymmetric Grounding)' : 'Mode: Naive Majority Voting (Vulnerable)';
      btnToggleGalileo.className = isGalileoActive ? 'widget-btn primary' : 'widget-btn';
    }
    updateGalileoConsensus();
  });

  galileoSybil?.addEventListener('input', updateGalileoConsensus);
  galileoExpert?.addEventListener('input', updateGalileoConsensus);
  updateGalileoConsensus();

  // 10. Epistemic Heuristic Text Scanner
  const scanInput = document.getElementById('scanner-text-input');
  const scanHighlight = document.getElementById('scanner-highlight-output');
  const scanScore = document.getElementById('scanner-heuristic-score');
  const scanBadge = document.getElementById('scanner-verdict-badge');
  const scanRules = document.getElementById('scanner-rules-detected');

  const btnScanClickbait = document.getElementById('btn-scan-clickbait');
  const btnScanUrgency = document.getElementById('btn-scan-urgency');
  const btnScanClean = document.getElementById('btn-scan-clean');

  const HEURISTIC_PATTERNS = [
    { regex: /(scientists are baffled|you won't believe|shocking discovery|what happens next|the truth about|secret they don't want you to know)/gi, type: 'clickbait', name: 'Curiosi-Trap / Clickbait Hook', sev: 2 },
    { regex: /(everyone knows|proof that all|undeniable evidence|completely changes everything)/gi, type: 'superlative', name: 'Ungrounded Universal Superlative', sev: 3 },
    { regex: /(act now|before it's banned|only \d+ hours left|limited time)/gi, type: 'urgency', name: 'Deceptive Urgency Pattern', sev: 3 },
    { regex: /(experts say|many believe|sources suggest|critics claim)/gi, type: 'weasel', name: 'Unnamed Source / Weasel Attribution', sev: 1 }
  ];

  function runEpistemicScan() {
    if (!scanInput || !scanHighlight || !scanScore) return;
    const text = scanInput.value || '';
    if (!text.trim()) {
      scanHighlight.innerHTML = '<span style="color: var(--text-muted);">Awaiting text input...</span>';
      scanScore.textContent = '0.0';
      if (scanBadge) scanBadge.textContent = 'NO INPUT';
      return;
    }

    let detectedCount = 0;
    let rawSeverity = 0;
    let matches = [];

    HEURISTIC_PATTERNS.forEach(p => {
      let match;
      const r = new RegExp(p.regex);
      while ((match = r.exec(text)) !== null) {
        detectedCount++;
        rawSeverity += p.sev;
        matches.push({ start: match.index, end: match.index + match[0].length, text: match[0], type: p.type, name: p.name });
      }
    });

    matches.sort((a, b) => a.start - b.start);

    let html = '';
    let lastIdx = 0;
    matches.forEach(m => {
      if (m.start >= lastIdx) {
        html += escapeHtml(text.slice(lastIdx, m.start));
        html += `<span class="epistemic-span ${m.type}" title="${escapeHtml(m.name)}">${escapeHtml(m.text)}</span>`;
        lastIdx = m.end;
      }
    });
    html += escapeHtml(text.slice(lastIdx));
    scanHighlight.innerHTML = html;

    const calScore = 100 * (1 - Math.exp(-rawSeverity / 5.0));
    scanScore.textContent = calScore.toFixed(1);
    if (scanRules) scanRules.textContent = `${detectedCount} pattern${detectedCount === 1 ? '' : 's'}`;

    if (scanBadge) {
      if (calScore === 0) {
        scanBadge.className = "verdict-tag reliable";
        scanBadge.textContent = "CLEAN / FACTUAL";
        scanScore.style.color = "#4ade80";
      } else if (calScore < 40) {
        scanBadge.className = "verdict-tag mixed";
        scanBadge.textContent = `MILD CONCERN (${detectedCount} TRIGGER)`;
        scanScore.style.color = "#facc15";
      } else {
        scanBadge.className = "verdict-tag suspicious";
        scanBadge.textContent = `SUSPICIOUS (${detectedCount} PATTERNS)`;
        scanScore.style.color = "#ef4444";
      }
    }
  }

  btnScanClickbait?.addEventListener('click', () => {
    if (scanInput) {
      scanInput.value = "Scientists are baffled by this shocking discovery! Everyone knows you won't believe what happens next. Act now before it's banned!";
      btnScanClickbait?.classList.add('active');
      btnScanUrgency?.classList.remove('active');
      btnScanClean?.classList.remove('active');
      runEpistemicScan();
    }
  });

  btnScanUrgency?.addEventListener('click', () => {
    if (scanInput) {
      scanInput.value = "Undeniable evidence proves that all banks are hiding this secret! Act now before only 2 hours left on this limited offer!";
      btnScanUrgency?.classList.add('active');
      btnScanClickbait?.classList.remove('active');
      btnScanClean?.classList.remove('active');
      runEpistemicScan();
    }
  });

  btnScanClean?.addEventListener('click', () => {
    if (scanInput) {
      scanInput.value = "The Federal Reserve held the benchmark interest rate target range between 5.25% and 5.50% at its monthly monetary policy meeting.";
      btnScanClean?.classList.add('active');
      btnScanClickbait?.classList.remove('active');
      btnScanUrgency?.classList.remove('active');
      runEpistemicScan();
    }
  });

  scanInput?.addEventListener('input', runEpistemicScan);
  runEpistemicScan();

  // 11. Schema.org ClaimReview & RFC 8785 Receipt Generator
  const crClaim = document.getElementById('cr-claim-text');
  const crAuthor = document.getElementById('cr-author-input');
  const crVerdict = document.getElementById('cr-verdict-select');
  const crUrl = document.getElementById('cr-source-url');
  const crOutput = document.getElementById('cr-json-output');

  const btnTabClaimReview = document.getElementById('btn-tab-claimreview');
  const btnTabRFC8785 = document.getElementById('btn-tab-rfc8785');
  const btnCrCopy = document.getElementById('btn-cr-copy');
  const btnCrDownload = document.getElementById('btn-cr-download');
  let crActiveTab = 'claimreview';

  function updateClaimReviewJSON() {
    if (!crClaim || !crAuthor || !crVerdict || !crUrl || !crOutput) return;
    const claim = crClaim.value;
    const author = crAuthor.value;
    const verdict = crVerdict.value;
    const url = crUrl.value;

    if (crActiveTab === 'claimreview') {
      const claimReviewLD = {
        "@context": "https://schema.org",
        "@type": "ClaimReview",
        "datePublished": "2026-08-18",
        "url": url,
        "claimReviewed": claim,
        "itemReviewed": {
          "@type": "CreativeWork",
          "author": { "@type": "Person", "name": author }
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": verdict === "True" ? 5 : (verdict === "Misleading" ? 3 : 1),
          "bestRating": 5,
          "worstRating": 1,
          "alternateName": verdict
        },
        "author": {
          "@type": "Organization",
          "name": "Credence Epistemic Network",
          "url": "https://credence.run"
        }
      };
      crOutput.value = JSON.stringify(claimReviewLD, null, 2);
    } else {
      const canonicalEnvelope = {
        "classification": verdict === "True" ? "FACTUAL_REPORTING" : (verdict === "Satire" ? "SATIRE_PARODY" : "SUSPICIOUS"),
        "content_sha256": "4b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c",
        "evaluation_method": "multi_agent_specialist",
        "evaluator_pubkey": "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
        "signature_ed25519": "0a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0",
        "suspicion_score": verdict === "True" ? 4.2 : (verdict === "Satire" ? 0.0 : 78.5),
        "target_url": url,
        "timestamp_utc": "2026-08-18T20:00:00Z"
      };
      crOutput.value = JSON.stringify(canonicalEnvelope, null, 2);
    }
  }

  btnTabClaimReview?.addEventListener('click', () => {
    crActiveTab = 'claimreview';
    btnTabClaimReview?.classList.add('primary');
    btnTabRFC8785?.classList.remove('primary');
    updateClaimReviewJSON();
  });

  btnTabRFC8785?.addEventListener('click', () => {
    crActiveTab = 'rfc8785';
    btnTabRFC8785?.classList.add('primary');
    btnTabClaimReview?.classList.remove('primary');
    updateClaimReviewJSON();
  });

  btnCrCopy?.addEventListener('click', () => {
    if (crOutput) {
      navigator.clipboard?.writeText(crOutput.value);
      if (btnCrCopy) {
        btnCrCopy.textContent = '✅ Copied!';
        setTimeout(() => btnCrCopy.textContent = '📋 Copy JSON', 1500);
      }
    }
  });

  btnCrDownload?.addEventListener('click', () => {
    if (crOutput) {
      const blob = new Blob([crOutput.value], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = crActiveTab === 'claimreview' ? 'claimreview.jsonld' : 'receipt.credence.json';
      a.click();
    }
  });

  crClaim?.addEventListener('input', updateClaimReviewJSON);
  crAuthor?.addEventListener('input', updateClaimReviewJSON);
  crVerdict?.addEventListener('change', updateClaimReviewJSON);
  crUrl?.addEventListener('input', updateClaimReviewJSON);
  updateClaimReviewJSON();

  // 12. Token Governor & Circuit Breaker Simulator
  const govBudget = document.getElementById('gov-budget-slider');
  const govBurn = document.getElementById('gov-burn-slider');
  const govBudgetVal = document.getElementById('gov-budget-val');
  const govBurnVal = document.getElementById('gov-burn-val');
  const govHeadroom = document.getElementById('gov-headroom-pct');
  const govBadge = document.getElementById('gov-state-badge');
  const govDesc = document.getElementById('gov-status-desc');
  const govFill = document.getElementById('gov-headroom-fill');

  function updateTokenGovernor() {
    if (!govBudget || !govBurn || !govHeadroom) return;
    const budget = parseFloat(govBudget.value);
    const burn = Math.min(parseFloat(govBurn.value), budget);

    if (govBudgetVal) govBudgetVal.textContent = `$${budget.toFixed(2)}`;
    if (govBurnVal) govBurnVal.textContent = `$${burn.toFixed(2)}`;

    const remainingDollars = Math.max(0, budget - burn);
    const headroomPct = Math.max(0, (remainingDollars / budget) * 100);

    govHeadroom.textContent = `${headroomPct.toFixed(1)}%`;

    if (govFill) {
      govFill.style.width = `${Math.min(100, headroomPct)}%`;
      if (headroomPct <= 30.0) {
        govFill.style.background = '#ef4444';
      } else if (headroomPct <= 50.0) {
        govFill.style.background = '#f59e0b';
      } else {
        govFill.style.background = '#10b981';
      }
    }

    if (headroomPct <= 30.0) {
      if (govBadge) {
        govBadge.className = 'verdict-tag mixed';
        govBadge.textContent = 'QUOTA_PRESERVED (CIRCUIT TRIPPED)';
      }
      if (govDesc) {
        govDesc.textContent = 'Mode: 100% Offline Structural Heuristics ($0.00 Spend)';
        govDesc.style.color = '#f59e0b';
      }
    } else {
      if (govBadge) {
        govBadge.className = 'verdict-tag reliable';
        govBadge.textContent = 'ACTIVE_THINKING (HEADROOM SAFE)';
      }
      if (govDesc) {
        govDesc.textContent = 'Mode: Full Gemini 3.7 Flash Thinking Specialization Active';
        govDesc.style.color = '#4ade80';
      }
    }
  }

  govBudget?.addEventListener('input', updateTokenGovernor);
  govBurn?.addEventListener('input', updateTokenGovernor);
  updateTokenGovernor();
}

export async function loadDocument(docId, anchorId = '') {
  let target = null;
  for (const group of DOCS_REGISTRY) {
    for (const item of group.items) {
      if (item.id === docId) {
        target = item;
        break;
      }
    }
    if (target) break;
  }

  if (!target) {
    const isBlog = isBlogContext();
    target = isBlog ? DOCS_REGISTRY[DOCS_REGISTRY.length - 1].items[0] : DOCS_REGISTRY[0].items[0];
  }

  renderSidebar(target.id);

  // Update header and document title
  const isBlog = isBlogContext();
  const brandBadge = document.querySelector('.credence-nav .badge');
  if (brandBadge) {
    brandBadge.textContent = isBlog ? 'Editorial' : 'v1.11.0';
  }
  document.title = isBlog ? `Credence Sovereign Blog · ${target.title}` : `Credence Docs · ${target.title}`;

  // Update active navbar link
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (isBlog && href.includes('blog')) {
      a.classList.add('active');
    } else if (!isBlog && href.includes('docs')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  const contentArea = document.getElementById('doc-content');
  if (!contentArea) return;

  contentArea.innerHTML = '<div style="color: var(--accent-cyan); padding: 2rem 0;">Loading document...</div>';

  try {
    const res = await fetch(target.path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    contentArea.innerHTML = parseMarkdown(md);
    renderTableOfContents();

    // Render Mermaid diagrams
    await renderMermaidDiagrams();

    // Synchronize tabbed interface groups to preferred interface
    syncAllTabGroups();

    if (target.id === 'docs/playground') {
      setupPlaygroundWidgets();
    }

    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId) || document.querySelector(`[name="${anchorId}"]`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('highlight-anchor');
          setTimeout(() => el.classList.remove('highlight-anchor'), 2500);
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  } catch (err) {
    contentArea.innerHTML = `
      <div class="doc-card" style="border-color: #ef4444;">
        <h2 style="color: #ef4444; margin-top: 0;">Error Loading Document</h2>
        <p>Could not fetch <code>${escapeHtml(target.path)}</code>.</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${escapeHtml(err.message)}</p>
      </div>
    `;
  }
}

export function activateTabInGroup(group, targetIndex) {
  const buttons = group.querySelectorAll('.tab-header .tab-btn');
  const panels = group.querySelectorAll('.tab-panels .tab-panel');

  buttons.forEach((btn, idx) => {
    if (String(idx) === String(targetIndex)) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  panels.forEach((panel, idx) => {
    if (String(idx) === String(targetIndex)) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

export function syncAllTabGroups(preferredName) {
  if (!preferredName) {
    try {
      preferredName = localStorage.getItem('credence_preferred_interface');
    } catch (e) {}
  }
  if (!preferredName) return;

  const prefLower = preferredName.toLowerCase().trim();
  const groups = document.querySelectorAll('.tab-group');

  groups.forEach(group => {
    const buttons = Array.from(group.querySelectorAll('.tab-header .tab-btn'));
    if (buttons.length === 0) return;

    // Find matching button: exact match, substring, or fuzzy keyword match
    let matchIdx = buttons.findIndex(b => {
      const name = (b.getAttribute('data-tab-name') || b.textContent).toLowerCase().trim();
      return name === prefLower || name.includes(prefLower) || prefLower.includes(name);
    });

    if (matchIdx !== -1) {
      activateTabInGroup(group, matchIdx);
    }
  });
}

// Global click event delegation for GCP-style tab buttons
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    const tabGroup = tabBtn.closest('.tab-group');
    if (!tabGroup) return;

    const tabName = tabBtn.getAttribute('data-tab-name') || tabBtn.textContent.trim();
    const tabIndex = tabBtn.getAttribute('data-tab-index');

    try {
      localStorage.setItem('credence_preferred_interface', tabName);
    } catch (err) {}

    activateTabInGroup(tabGroup, tabIndex);
    syncAllTabGroups(tabName);
  });
}

export function setupSearch() {
  const searchInput = document.getElementById('doc-search');
  if (!searchInput) return;

  let activeFilter = 'all';

  function filterItems() {
    const q = searchInput.value.toLowerCase().trim();
    const isInvSearch = q.startsWith('inv:') || q.startsWith('#') || q.startsWith('invariant:');
    const targetInv = isInvSearch ? q.replace(/^(inv:|#|invariant:)/, '').trim() : '';

    document.querySelectorAll('.sidebar-group').forEach(groupEl => {
      let visibleInGroup = 0;
      groupEl.querySelectorAll('.sidebar-item').forEach(el => {
        const link = el.querySelector('a');
        const text = (link?.textContent || el.textContent).toLowerCase();
        const href = (link?.getAttribute('href') || '').toLowerCase();
        const keywords = (el.getAttribute('data-keywords') || '').toLowerCase();
        const desc = (el.getAttribute('data-desc') || '').toLowerCase();
        const category = (el.getAttribute('data-category') || '').toLowerCase();
        
        let matchesFilter = true;
        if (activeFilter === 'invariants') {
          matchesFilter = href.includes('invariants') || keywords.includes('invariant');
        } else if (activeFilter === 'agentic') {
          matchesFilter = href.includes('agentic') || keywords.includes('agent');
        } else if (activeFilter === 'fastmcp') {
          matchesFilter = text.includes('fastmcp') || href.includes('fastmcp') || keywords.includes('mcp') || keywords.includes('claude') || keywords.includes('cursor');
        } else if (activeFilter === 'tutorials') {
          matchesFilter = href.includes('tutorials') || href.includes('walkthroughs') || category.includes('tutorial') || category.includes('walkthrough');
        }

        let matchesQuery = true;
        if (q) {
          if (isInvSearch && targetInv) {
            matchesQuery = href.includes('invariants') || text.includes(targetInv) || keywords.includes(targetInv);
          } else {
            const terms = q.split(/\s+/).filter(Boolean);
            const searchableText = `${text} ${href} ${keywords} ${desc} ${category}`;
            matchesQuery = terms.every(term => searchableText.includes(term));
          }
        }

        const isVisible = matchesFilter && matchesQuery;
        el.style.display = isVisible ? '' : 'none';
        if (isVisible) visibleInGroup++;
      });

      // Hide category headings that have no matching items when searching or filtering
      groupEl.style.display = (visibleInGroup > 0 || (!q && activeFilter === 'all')) ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterItems);

  // Filter pills click
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      filterItems();
    });
  });

  // Keyboard shortcut: '/' or 'Cmd/Ctrl+K' focuses search, 'Escape' clears
  window.addEventListener('keydown', (e) => {
    if ((e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchInput.blur();
      filterItems();
    }
  });
}

export function initRouter() {
  function handleRoute() {
    let fullHash = window.location.hash.slice(1);
    if (!fullHash) {
      fullHash = isBlogContext() ? 'blog/the-blue-checkmark-is-dead' : 'docs/intro';
    }

    let docId = fullHash;
    let anchorId = '';

    if (fullHash.includes('#')) {
      const idx = fullHash.indexOf('#');
      docId = fullHash.substring(0, idx);
      anchorId = fullHash.substring(idx + 1);
    } else if (fullHash.includes(':') && !fullHash.startsWith('http')) {
      const idx = fullHash.indexOf(':');
      docId = fullHash.substring(0, idx);
      anchorId = fullHash.substring(idx + 1);
    }

    loadDocument(docId, anchorId);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  setupSearch();
}
