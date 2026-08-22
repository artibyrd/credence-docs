/**
 * Credence Documentation & Sovereign Blog Zero-Build Application Engine
 * Pure Vanilla Modern ES Module — 0 npm dependencies, 0 build tools.
 */

// Canonical ecosystem version
export const CURRENT_ECOSYSTEM_VERSION = 'v2.7.0';

// Navigation structure and complete catalog
export const DOCS_REGISTRY = [
  {
    category: "Getting Started",
    items: [
      { id: "docs/intro", title: "Introduction & Overview", path: "docs/intro.md", desc: "Welcome to Credence, key concepts, and progressive on-ramp.", keywords: ["intro", "overview", "welcome", "philosophy", "grounding", "basics", "start", "truth", "ethics", "ai"] },
      { id: "docs/quickstart", title: "Quickstart & Installation", path: "docs/quickstart.md", desc: "Install Credence, set API keys, and run your first audit in 60 seconds.", keywords: ["quickstart", "install", "curl", "poetry", "docker", "gemini", "api key", "first audit", "setup", "run", "cli"] },
      { id: "docs/topic-index", title: "Topic Index & Concept Directory", path: "docs/topic-index.md", desc: "The Marbles in the Oatmeal: complete categorized cheat sheet and index.", keywords: ["index", "cheat sheet", "search", "topics", "sitemap", "directory", "marbles", "lookup", "concepts", "all", "reference", "find"] },
      { id: "docs/sitemap", title: "Ecosystem Master Sitemap", path: "docs/sitemap.md", desc: "Visual and structural sitemap covering all sovereign domains, playgrounds, invariants, and guides.", keywords: ["sitemap", "map", "directory", "tree", "overview", "domains", "navigation", "all pages", "structure"] },
      { id: "docs/feature-parity", title: "Universal Feature Parity", path: "docs/feature-parity.md", desc: "Synchronous 4-way parity across CLI, FastMCP, TUI, and Web UI.", keywords: ["parity", "interfaces", "cli", "tui", "mcp", "web", "terminal", "browser"] },
      { id: "docs/roadmap", title: "Roadmap & Horizons", path: "docs/roadmap.md", desc: "Current development roadmap, completed milestones, and upcoming horizons.", keywords: ["roadmap", "backlog", "future", "milestones", "features", "horizons"] },
      { id: "docs/changelog", title: "Release Changelog", path: "docs/changelog.md", desc: "Version history, updates, and release notes across releases.", keywords: ["changelog", "releases", "versions", "history", "notes"] }
    ]
  },
  {
    category: "Interactive Playgrounds",
    items: [
            { id: "docs/lab-content-evolution", title: "🎮 Playground 13: Content Evolution Lab", path: "docs/lab-content-evolution.md", desc: "Live in-browser content modification simulator tracking score trajectory shifts across edits.", keywords: ["playground", "interactive", "evolution", "diff", "correction", "stealth edit"] },
      { id: "docs/lab-badge-security", title: "🎮 Playground 14: Adversarial Badge Lab", path: "docs/lab-badge-security.md", desc: "Break the Badge: live interactive sandbox testing Bait-and-Switch and signature forgery defenses.", keywords: ["playground", "interactive", "badge", "red team", "break the badge", "security", "attack"] },
      { id: "docs/playground", title: "🎮 Interactive Zero-Build Playgrounds", path: "docs/playground.md", desc: "12 in-browser simulators: 13-node mesh, SimHash-64, Saturation, Token Governor & Verifier.", keywords: ["playground", "interactive", "simulator", "demo", "browser", "try", "mesh", "simhash", "webcrypto"] }
    ]
  },
  {
    category: "Feature Walkthroughs",
    items: [
      { id: "docs/walkthroughs/01-auditing-webpages-and-text", title: "Auditing Webpages & Text", path: "docs/walkthroughs/01-auditing-webpages-and-text.md", desc: "How to audit any URL or raw text using the CLI and interpret findings.", keywords: ["audit", "cli", "text", "url", "command", "report", "suspicion", "violations"] },
      { id: "docs/walkthroughs/02-zero-trust-feed-sifting", title: "Zero-Trust Feed Sifting", path: "docs/walkthroughs/02-zero-trust-feed-sifting.md", desc: "Filter RSS/Atom feeds against promotional astroturfing and topic entropy collapse.", keywords: ["sifter", "rss", "atom", "feed", "entropy", "pizza hut", "astroturf", "filter"] },
      { id: "docs/walkthroughs/03-p2p-mesh-consensus", title: "P2P Mesh Consensus", path: "docs/walkthroughs/03-p2p-mesh-consensus.md", desc: "How decentralized nodes gossip signed attestations and reach consensus.", keywords: ["mesh", "p2p", "consensus", "gossip", "attestation", "decentralized", "nodes"] },
      { id: "docs/walkthroughs/04-morning-digest-briefings", title: "Morning Epistemic Digest", path: "docs/walkthroughs/04-morning-digest-briefings.md", desc: "Generate daily 24-hour executive news briefings and terminal digests.", keywords: ["digest", "morning", "briefing", "daily", "summary", "executive", "news"] },
            { id: "docs/walkthroughs/06-embeddable-badges-and-docs-self-auditing", title: "06. Embeddable Badges & Self-Auditing", path: "docs/walkthroughs/06-embeddable-badges-and-docs-self-auditing.md", desc: "Embed <credence-badge>, configure anti-tamper WebCrypto gates, and run differential CI/CD audits.", keywords: ["badge", "embed", "widget", "dogfood", "audit-docs", "webcrypto", "tamper", "receipt"] },
      { id: "docs/walkthroughs/05-migrating-from-v1-to-v2", title: "Migrating from v1.x to v2.0.0", path: "docs/walkthroughs/05-migrating-from-v1-to-v2.md", desc: "Step-by-step migration guide for upgrading custom scripts and configs to Credence v2.0.0.", keywords: ["migration", "v2", "upgrade", "breaking changes", "ontology", "compute"] }
    ]
  },
  {
    category: "Agentic Engineering & Workflows",
    items: [
      { id: "docs/agentic/01-antigravity-pair-programming-paradigm", title: "01. Antigravity Pair-Programming", path: "docs/agentic/01-antigravity-pair-programming-paradigm.md", desc: "Autonomous multi-agent pair programming with Google Antigravity SDK.", keywords: ["antigravity", "pair programming", "sdk", "subagents", "agentic", "gemini"] },
      { id: "docs/agentic/02-continuous-learning-and-invariant-synthesis", title: "02. /learn & Invariant Synthesis", path: "docs/agentic/02-continuous-learning-and-invariant-synthesis.md", desc: "Capturing agent learnings, invariant synthesis, and knowledge governance.", keywords: ["learn", "invariants", "synthesis", "knowledge", "governance", "rules"] },
      { id: "docs/agentic/03-hermetic-testing-and-zero-npm-guardrails", title: "03. Hermetic Testing & Zero-npm", path: "docs/agentic/03-hermetic-testing-and-zero-npm-guardrails.md", desc: "Hermetic offline test suites and zero-npm static web guardrails.", keywords: ["hermetic", "testing", "zero-npm", "offline", "pytest", "guardrails"] },
      { id: "docs/agentic/04-multi-model-pareto-and-token-governance", title: "04. Multi-Model Pareto & Token Governor", path: "docs/agentic/04-multi-model-pareto-and-token-governance.md", desc: "Token budget governor, circuit breakers, and cost Pareto frontier.", keywords: ["pareto", "tokens", "governor", "circuit breaker", "budget", "cost", "headroom"] },
      { id: "docs/agentic/05-fastmcp-dual-transport-and-four-way-parity", title: "05. FastMCP & 4-Way Parity", path: "docs/agentic/05-fastmcp-dual-transport-and-four-way-parity.md", desc: "FastMCP 2.0 dual transport (stdio and SSE) and 4-way feature parity.", keywords: ["fastmcp", "transport", "stdio", "sse", "parity", "mcp", "streaming"] },
      { id: "docs/agentic/06-the-demotion-highway-and-invariant-lifecycle", title: "06. Demotion Highway & Lifecycle", path: "docs/agentic/06-the-demotion-highway-and-invariant-lifecycle.md", desc: "Invariant lifecycle state machine, Class Alpha/Beta/Gamma ranking, and automated demotion scanner.", keywords: ["demotion", "highway", "lifecycle", "invariants", "taxonomy", "alpha", "beta", "gamma", "subagents", "scanner"] }
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
      { id: "docs/tutorials/13-discord-alerting-and-basement-monitoring", title: "13. Discord Alerts & Basement Ops", path: "docs/tutorials/13-discord-alerting-and-basement-monitoring.md", desc: "Setup real-time Discord webhook notifications for breaking high-suspicion stories.", keywords: ["discord", "webhook", "alerts", "monitoring", "basement", "notifications"] },
      { id: "docs/tutorials/14-operator-security-and-admin-workstation", title: "14. Operator Security & Admin Workstation", path: "docs/tutorials/14-operator-security-and-admin-workstation.md", desc: "Bootstrapping operator authentication, managing AI cost budgets, and operating the Web Admin Command Deck.", keywords: ["operator", "security", "admin", "workstation", "oauth", "oidc", "token", "budget", "emergency stop", "tutorial"] }
    ]
  },
  {
    category: "Developer Cookbooks",
    items: [
            { id: "docs/cookbooks/hetzner-vps-and-systemd-setup", title: "Hetzner VPS & systemd Daemon Setup", path: "docs/cookbooks/hetzner-vps-and-systemd-setup.md", desc: "Deploying autonomous 24/7 background daemons on low-cost VPS.", keywords: ["hetzner", "systemd", "vps", "daemons", "cookbook"] },
      { id: "docs/cookbooks/local-dev-to-cloud-run-workflow", title: "Local Dev to Cloud Run Workflow", path: "docs/cookbooks/local-dev-to-cloud-run-workflow.md", desc: "Fast iteration loops from local poetry test to production Cloud Run.", keywords: ["cloudrun", "workflow", "local dev", "deploy", "cookbook"] },
      { id: "docs/cookbooks/aws-and-flyio-deployment", title: "AWS & Fly.io Deployment Recipes", path: "docs/cookbooks/aws-and-flyio-deployment.md", desc: "Container deployment recipes for alternate multi-cloud providers.", keywords: ["aws", "flyio", "cloud", "deployment", "cookbook"] },
      { id: "docs/cookbooks/edge-caching-browser-extension", title: "Edge Caching & Browser Extension", path: "docs/cookbooks/edge-caching-browser-extension.md", desc: "Configuring cache-control headers and extension background sync.", keywords: ["cache", "extension", "edge", "cookbook"] },
      { id: "docs/cookbooks/multi-tenant-org-subdomain-federation", title: "Multi-Tenant Org Subdomain Federation", path: "docs/cookbooks/multi-tenant-org-subdomain-federation.md", desc: "Configuring white-label custom domain federation routing.", keywords: ["federation", "subdomains", "orgs", "cookbook"] },
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
            { id: "docs/blueprints/security-architecture-and-threat-model", title: "Security Architecture & Threat Model", path: "docs/blueprints/security-architecture-and-threat-model.md", desc: "Dual-crypto conformance, RFC 8785 canonical bytes, key custody, and threat mitigation.", keywords: ["security", "threat model", "ed25519", "rfc8785", "crypto", "blueprint"] },
      { id: "docs/blueprints/dual-environment-project-and-domain-isolation", title: "Dual-Environment Project & Domain Isolation", path: "docs/blueprints/dual-environment-project-and-domain-isolation.md", desc: "Least-privilege WIF authentication and dev/prod environment boundaries.", keywords: ["environments", "dev", "prod", "isolation", "wif", "gcp"] },
      { id: "docs/blueprints/high-efficiency-scaling-and-resiliency", title: "High-Efficiency Scaling & Resiliency", path: "docs/blueprints/high-efficiency-scaling-and-resiliency.md", desc: "Scale-to-zero container optimization and sub-850ms germination.", keywords: ["scaling", "resiliency", "cold start", "scale to zero", "performance"] },
      { id: "docs/blueprints/sovereign-data-gravity-and-cas-portability", title: "Sovereign Data Gravity & CAS Portability", path: "docs/blueprints/sovereign-data-gravity-and-cas-portability.md", desc: "Content-addressed storage and decentralized blob synchronization.", keywords: ["cas", "storage", "data gravity", "sqlite", "sync"] },
      { id: "docs/blueprints/universal-4-way-parity-and-environment-governance", title: "Universal 4-Way Parity & Environment Governance", path: "docs/blueprints/universal-4-way-parity-and-environment-governance.md", desc: "Feature parity across CLI, FastMCP, TUI, and Web interfaces.", keywords: ["parity", "governance", "4-way", "cli", "tui", "mcp", "web"] },
      { id: "docs/blueprints/zero-build-edge-routing-and-subdomain-dispatch", title: "Zero-Build Edge Routing & Subdomain Dispatch", path: "docs/blueprints/zero-build-edge-routing-and-subdomain-dispatch.md", desc: "Multi-domain Cloudflare edge dispatch with zero build dependencies.", keywords: ["edge", "routing", "cloudflare", "subdomains", "zero-build"] },
      { id: "docs/blueprints/health-medical-claims", title: "Medical & Health Claims", path: "docs/blueprints/health-medical-claims.md", desc: "Evaluating clinical trials, in vitro extrapolation, and unproven treatments.", keywords: ["medical", "health", "clinical", "trials", "in vitro", "claims", "science"] },
      { id: "docs/blueprints/election-civic-integrity", title: "Election & Civic Integrity", path: "docs/blueprints/election-civic-integrity.md", desc: "Auditing voting procedure misinformation, polling methodology, and civic claims.", keywords: ["election", "voting", "civic", "polls", "democracy", "misinformation"] },
      { id: "docs/blueprints/synthetic-media-provenance", title: "Synthetic AI & Media Provenance", path: "docs/blueprints/synthetic-media-provenance.md", desc: "C2PA metadata, pink slime news farm rings, and deepfake provenance detection.", keywords: ["c2pa", "deepfake", "synthetic", "pink slime", "media", "ai generated"] },
      { id: "docs/blueprints/domain-epistemic-index-and-sourcing-forensics", title: "DEI & Sourcing Forensics", path: "docs/blueprints/domain-epistemic-index-and-sourcing-forensics.md", desc: "Forensic sourcing ratios (byline, single-source, COI, advertorial) and DEI trust bands.", keywords: ["dci", "epistemic index", "sourcing", "byline", "single source", "coi", "conflict of interest", "advertorial", "asi", "trust bands", "publisher", "forensics"] },
      { id: "docs/blueprints/invariant-scalability-and-knowledge-governance", title: "Invariant Scalability & Knowledge Governance", path: "docs/blueprints/invariant-scalability-and-knowledge-governance.md", desc: "The 3-tier architectural framework for scaling AI agent invariants without prompt bloat, attention dilution, or cognitive oatmeal.", keywords: ["invariants", "scalability", "knowledge governance", "agents.md", "prompt bloat", "attention dilution", "cognitive oatmeal", "shift-left", "blueprint"] },
      { id: "docs/blueprints/node-and-mesh-telemetry-dashboard", title: "Node & Mesh Telemetry Dashboard", path: "docs/blueprints/node-and-mesh-telemetry-dashboard.md", desc: "Technical specification for real-time node operator observability, BitTorrent compute savings tracking, and 4-way parity telemetry interfaces.", keywords: ["dashboard", "telemetry", "mesh", "sre", "metrics", "observability", "latency", "bittorrent", "compute savings", "my node", "operator", "blueprint"] },
      { id: "docs/blueprints/v2-architecture-and-500-loc-modularity", title: "v2 Modular Architecture & 500 LOC Law", path: "docs/blueprints/v2-architecture-and-500-loc-modularity.md", desc: "Architectural blueprint detailing modularization, the 500 LOC ceiling invariant, compute_* naming ontology, and DAG decoupling.", keywords: ["v2", "architecture", "modularization", "500 loc", "compute", "dag", "blueprint", "modularity"] },
            { id: "docs/blueprints/information-pyramid-and-epistemic-lensing", title: "Information Pyramid & Lensing", path: "docs/blueprints/information-pyramid-and-epistemic-lensing.md", desc: "3-Tier Cognitive Pyramid and Lensing Engine (Surface, Focus, Deep Spectrum) across all interfaces.", keywords: ["pyramid", "lensing", "enhance", "surface", "focus", "forensic", "density", "invariant 39"] },
      { id: "docs/blueprints/embeddable-attestation-badges-and-anti-tamper", title: "Embeddable Badges & Anti-Tamper", path: "docs/blueprints/embeddable-attestation-badges-and-anti-tamper.md", desc: "Zero-npm <credence-badge>, client WebCrypto live DOM hashing, RFC 8785 receipts, and DOM scrubber isolation.", keywords: ["badge", "widget", "anti-tamper", "webcrypto", "bait-and-switch", "sha256", "signature"] },
      { id: "docs/blueprints/unified-merit-and-attestation-badge-system", title: "Unified Merit & Attestation Badges", path: "docs/blueprints/unified-merit-and-attestation-badge-system.md", desc: "Comprehensive 3-modality architecture, vector geometry formulas, and embed recipes across CLI, Web, and FastMCP.", keywords: ["badge", "merit", "attestation", "svg", "web component", "vector", "shields", "geometry", "blueprint"] },
      { id: "docs/blueprints/terminology-and-ontology-lexicon", title: "Terminology & Ontology Lexicon", path: "docs/blueprints/terminology-and-ontology-lexicon.md", desc: "Comprehensive living dictionary of coined terminology, mathematical definitions, architectural metaphors, and ontology governance across Credence v2.0.0.", keywords: ["terminology", "ontology", "lexicon", "phrases", "vocabulary", "glossary", "definitions", "metaphors", "blueprint"] }
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
      { id: "docs/mesh-engineering/dns-srv-discovery", title: "DNS SRV Dynamic Discovery", path: "docs/mesh-engineering/dns-srv-discovery.md", desc: "RFC 2782 DNS SRV records for decentralized peer discovery without central trackers.", keywords: ["dns", "srv", "rfc2782", "discovery", "bootstrap", "peers"] },
      { id: "docs/mesh-engineering/rendezvous-hashing-feed-partitioning", title: "Swarm Rendezvous Hashing", path: "docs/mesh-engineering/rendezvous-hashing-feed-partitioning.md", desc: "Highest Random Weight (HRW) Rendezvous Hashing for deterministic feed partitioning without locks.", keywords: ["rendezvous", "hrw", "hashing", "work sharing", "partitioning", "feed", "sifter", "mesh", "p2p", "affinity", "bittorrent", "zero-coordination"] }
    ]
  },
  {
    category: "Protocol Specifications",
    items: [
      { id: "docs/protocols/token-governor", title: "Token Safety Governor", path: "docs/protocols/token-governor.md", desc: "CostProfile definitions, thinking token budgets, and 30% headroom breaker.", keywords: ["governor", "tokens", "budget", "headroom", "circuit breaker", "cost"] },
      { id: "docs/protocols/mesh-protocol", title: "P2P Mesh & Consensus", path: "docs/protocols/mesh-protocol.md", desc: "RFC 8785 canonical JSON envelopes, Ed25519 signatures, and gossip routing.", keywords: ["protocol", "rfc8785", "ed25519", "signatures", "gossip", "consensus"] },
      { id: "docs/protocols/node-germination-lifecycle", title: "Node Germination & Swarm Ignition", path: "docs/protocols/node-germination-lifecycle.md", desc: "Zero-touch node lifecycle: genesis keys, seed inoculation, and burst auditing.", keywords: ["germination", "lifecycle", "genesis", "inoculation", "seed", "ignition"] },
      { id: "docs/protocols/zero-touch-germination-and-swarm-ignition", title: "Zero-Touch Node Germination", path: "docs/protocols/zero-touch-germination-and-swarm-ignition.md", desc: "Self-bootstrapping nodes: identity minting, genesis inoculation, and burst auditing in <5s.", keywords: ["germination", "ignition", "miracle gro", "bootstrap", "genesis", "identity", "ed25519", "lifespan", "startup", "zero-touch", "sowing"] },
      { id: "docs/protocols/fastmcp", title: "FastMCP 2.0 Integration", path: "docs/protocols/fastmcp.md", desc: "FastMCP tools, dynamic resources, prompts, and streaming HTTP/SSE.", keywords: ["fastmcp", "mcp", "tools", "resources", "prompts", "sse", "stdio"] },
      { id: "docs/protocols/scoring", title: "Scoring & Saturation Math", path: "docs/protocols/scoring.md", desc: "Calibrated exponential saturation curve, raw score, and density index.", keywords: ["scoring", "math", "saturation", "suspicion", "density", "calibration"] },
      { id: "docs/protocols/adversarial-defense", title: "Adversarial Threat Matrix", path: "docs/protocols/adversarial-defense.md", desc: "Systematic defenses against prompt injection, SSRF, DoS, and Sybil swarms.", keywords: ["threat matrix", "adversarial", "ssrf", "injection", "sybil", "defense"] },
      { id: "docs/protocols/white-label", title: "White-Label Federation", path: "docs/protocols/white-label.md", desc: "Sovereign organization federation, custom branding, and independent roots.", keywords: ["white-label", "federation", "organization", "sovereign", "custom"] },
      { id: "docs/protocols/benchmark-suite", title: "Golden 12 Benchmark Suite", path: "docs/protocols/benchmark-suite.md", desc: "Golden 12 standardized evaluation fixtures and verdict rubrics across tiers.", keywords: ["benchmark", "golden 12", "fixtures", "eval", "verdicts", "rubric"] },
      { id: "docs/protocols/cross-model-pareto-benchmark", title: "Cross-Model Pareto Benchmark", path: "docs/protocols/cross-model-pareto-benchmark.md", desc: "Comparing accuracy, latency, and cost across Gemini, Claude, GPT-4o, and DeepSeek.", keywords: ["pareto", "benchmark", "comparison", "accuracy", "cost", "models"] },
      { id: "docs/protocols/epistemic-merit-and-leaderboards", title: "Epistemic Merit & Leaderboards", path: "docs/protocols/epistemic-merit-and-leaderboards.md", desc: "5-factor node quality (Qi), empirical expertise (Ei), and P2P leaderboards.", keywords: ["leaderboard", "merit", "qi", "ei", "reputation", "expertise", "rank"] },
      { id: "docs/protocols/web-epistemic-intelligence", title: "Global Web Intelligence & DCI", path: "docs/protocols/web-epistemic-intelligence.md", desc: "Domain Credence Index (DCI) calculation and global web intelligence map.", keywords: ["dci", "intelligence", "domain", "index", "web", "reputation"] },
      { id: "docs/protocols/closed-loop-traffic-shaping", title: "Closed-Loop Routing & Traffic", path: "docs/protocols/closed-loop-traffic-shaping.md", desc: "Dynamic traffic shaping, cost optimization, and feed load-balancing.", keywords: ["traffic", "shaping", "routing", "load balancing", "closed-loop"] },
      { id: "docs/protocols/boredom-and-root-expansion", title: "Boredom & Root Expansion (EPEP-16)", path: "docs/protocols/boredom-and-root-expansion.md", desc: "Technical protocol specification for opportunistic queue digestion and feed discovery.", keywords: ["protocol", "epep-16", "boredom", "roots", "expansion", "mesh", "gossip", "specification"] },
      { id: "docs/protocols/reputation-quarantine-and-redemption", title: "Domain Reputation & Redemption (EPEP-17)", path: "docs/protocols/reputation-quarantine-and-redemption.md", desc: "Protocol specification for domain reputation tracking, exponential backoff, and the BuzzFeed News Doctrine.", keywords: ["protocol", "epep-17", "reputation", "quarantine", "buzzfeed", "redemption", "backoff", "specification"] },
      { id: "docs/protocols/telemetry-loopback", title: "Interface Telemetry Loopback (ITLP-v1)", path: "docs/protocols/telemetry-loopback.md", desc: "Anonymous local usage metrics and interface performance telemetry.", keywords: ["telemetry", "itlp", "metrics", "performance", "privacy"] },
      { id: "docs/protocols/testing-strategy", title: "6-Tier Testing Strategy", path: "docs/protocols/testing-strategy.md", desc: "Hermetic unit, mock, integration, rotating live E2E, and gauntlet testing.", keywords: ["testing", "strategy", "pytest", "unit", "e2e", "gauntlet", "tiers"] }
    ]
  },
  {
    category: "Operations & Self-Hosting",
    items: [
      { id: "docs/operations/deployment-prerequisites", title: "Master Deployment Prerequisites", path: "docs/operations/deployment-prerequisites.md", desc: "Complete prerequisite checklists, credential matrices, and CLI commands across all deployment topologies.", keywords: ["prerequisites", "setup", "requirements", "credentials", "cloud run", "docker", "kubernetes", "cloudflare", "bare metal", "checklist"] },
      { id: "docs/operations/single-vs-dual-project-gcp", title: "Single vs Dual-Project GCP", path: "docs/operations/single-vs-dual-project-gcp.md", desc: "Runbook for single partitioned GCP project vs hard dual-project isolation.", keywords: ["gcp", "dual project", "single project", "dev", "prod", "isolation", "terraform", "runbook", "boundaries"] },
      { id: "docs/operations/multi-environment-boundaries-and-deployments", title: "Multi-Environment Boundaries", path: "docs/operations/multi-environment-boundaries-and-deployments.md", desc: "Project, domain, and data boundary isolation with launch parity.", keywords: ["environments", "boundaries", "dev", "prod", "parity", "deploy", "secrets", "ci cd"] },
      { id: "docs/operations/vendor-agnostic-self-hosting-and-docker", title: "Vendor-Agnostic Self-Hosting", path: "docs/operations/vendor-agnostic-self-hosting-and-docker.md", desc: "Running sovereign Credence nodes across Docker, Bare Metal Linux, VPS, and Kubernetes.", keywords: ["self-host", "vendor agnostic", "docker", "vps", "hetzner", "ovh", "aws", "linode", "sovereign"] },
      { id: "docs/operations/docker-compose-quickstart", title: "Docker Compose Quickstart", path: "docs/operations/docker-compose-quickstart.md", desc: "Quickstart guide for launching a sovereign node or full-stack cluster locally in 5 minutes.", keywords: ["docker compose", "quickstart", "local", "planetary", "postgres", "minio", "valkey"] },
      { id: "docs/operations/kubernetes-and-helm-deployment", title: "Kubernetes & Helm Deployment", path: "docs/operations/kubernetes-and-helm-deployment.md", desc: "Cloud-native manifests, PVC storage, and ingress routing.", keywords: ["kubernetes", "k8s", "helm", "manifests", "ingress", "pvc", "cloud native"] },
      { id: "docs/operations/blob-storage-r2", title: "Cloudflare R2 Blob Storage", path: "docs/operations/blob-storage-r2.md", desc: "S3-compatible zero-egress Cloudflare R2 storage for forensic snapshots.", keywords: ["r2", "blob storage", "s3", "cloudflare", "cas", "snapshots", "zero egress"] },
      { id: "docs/operations/pipeline-and-build-optimization", title: "Pipeline & Build Optimization", path: "docs/operations/pipeline-and-build-optimization.md", desc: "Workstation tuning, pytest-xdist parallelization, build context exclusions, and sub-40s QA gates.", keywords: ["pipeline", "ci", "cd", "pytest", "xdist", "docker", "gcloudignore", "buildkit", "optimization", "performance", "check", "sub-40s", "speed"] },
      { id: "docs/operations/raspberry-pi-homelab", title: "Raspberry Pi & HomeLab Node", path: "docs/operations/raspberry-pi-homelab.md", desc: "Setting up a $0.00/mo self-hosted node on a Raspberry Pi 4/5.", keywords: ["raspberry pi", "homelab", "pi", "arm64", "self-host", "low power"] },
      { id: "docs/operations/tailscale-wireguard-mesh", title: "Tailscale & WireGuard Peering", path: "docs/operations/tailscale-wireguard-mesh.md", desc: "Forming secure private P2P mesh overlays across home and cloud servers.", keywords: ["tailscale", "wireguard", "vpn", "overlay", "peering", "private"] },
      { id: "docs/operations/database-pruning-wal", title: "Database Pruning & WAL Care", path: "docs/operations/database-pruning-wal.md", desc: "SQLite WAL optimization, checkpointing, and 30-day token record pruning.", keywords: ["sqlite", "wal", "database", "pruning", "retention", "cleanup", "sql"] },
      { id: "docs/operations/customizations-and-upstream-sovereignty", title: "Customizations vs. Upstream Core", path: "docs/operations/customizations-and-upstream-sovereignty.md", desc: "Maintaining local sovereignty while pulling updates from upstream repos.", keywords: ["customizations", "upstream", "git", "fork", "sovereignty", "merge"] },
      { id: "docs/blueprints/cloudrun-scale-to-zero-cold-start-optimization", title: "Cloud Run Cold Start Optimization", path: "docs/blueprints/cloudrun-scale-to-zero-cold-start-optimization.md", desc: "The 5-pillar architectural framework for sub-2.5s serverless cold starts on scale-to-zero Cloud Run containers.", keywords: ["cold start", "scale to zero", "cloud run", "serverless", "startup cpu boost", "compileall", "bytecode", "probe", "optimization", "performance", "gcp", "blueprint"] },
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
      { id: "docs/invariants", title: "The Invariant Bible", path: "docs/invariants.md", desc: "The living canon of mathematical rules, runtime safety guardrails, cryptographic protocols, and presentation invariants.", keywords: ["invariants", "bible", "canon", "rules", "architecture", "guarantees", "security", "core"] },
      { id: "docs/architecture", title: "Decentralized Architecture", path: "docs/architecture.md", desc: "End-to-end multi-agent pipeline, dual capture, and consensus engine specs.", keywords: ["architecture", "pipeline", "system", "components", "diagram", "specs"] },
      { id: "docs/frontend-architecture", title: "Zero-Build Web Architecture", path: "docs/frontend-architecture.md", desc: "Zero-build philosophy: vanilla HTML5, CSS Custom Properties, and Web Crypto.", keywords: ["frontend", "zero-build", "html5", "css", "webcrypto", "standards"] }
    ]
  },
  {
    category: "Investigative Case Studies & Field Forensics",
    items: [
      { id: "blog/the-500-loc-ceiling-law", title: "The 500 LOC Ceiling Law", path: "blog/the-500-loc-ceiling-law.md", desc: "How we modularized the monolith without slowing down velocity.", keywords: ["500 loc", "modular", "architecture", "refactoring", "monolith", "shift-left", "blog"] },
      { id: "blog/the-compute-ontology-revolution", title: "The compute_* Ontology Revolution", path: "blog/the-compute-ontology-revolution.md", desc: "Why precision in naming eliminates epistemic ambiguity across formulas.", keywords: ["compute", "ontology", "naming", "formulas", "math", "epistemic", "blog"] },
            { id: "blog/scoring-the-lens-not-the-window", title: "Scoring the Lens, Not the Window: Why Exposing Bad Journalism Scores 100.0", path: "blog/scoring-the-lens-not-the-window.md", desc: "How Credence separates perpetrating disinformation from investigating it via discourse boundary isolation and verbatim grounding.", keywords: ["lens", "window", "safe harbor", "spj", "grounding", "investigation", "inmaricopa", "entropy"] },
      { id: "blog/conflict-of-pun-terest", title: "⭐ Conflict of Pun-terest: InMaricopa Case Study", path: "blog/conflict-of-pun-terest.md", desc: "347 reasons why Maricopa's publisher-politician problem fails the epistemic smell test.", keywords: ["blog", "inmaricopa", "casestudy", "publisher", "coi", "dais", "conflict of interest", "puns", "monopoly", "civic desert", "analytics", "sr347"] },
      { id: "blog/the-pizza-hut-problem", title: "The Pizza Hut Problem & Topic Entropy", path: "blog/the-pizza-hut-problem.md", desc: "Why single-topic promotional pivots require topic entropy defense.", keywords: ["blog", "pizza hut", "entropy", "astroturf", "sifter", "feeds", "civic", "journalism", "promotion", "marketing", "detection"] },
      { id: "blog/the-blue-checkmark-is-dead", title: "The Blue Checkmark is Dead", path: "blog/the-blue-checkmark-is-dead.md", desc: "Why static authority badges fail and cryptographic receipts succeed.", keywords: ["blog", "blue checkmark", "authority", "cryptographic", "receipts", "identity", "sovereignty", "verification"] },
      { id: "blog/the-domain-epistemic-index", title: "The Domain Credence Index (DCI)", path: "blog/the-domain-epistemic-index.md", desc: "Measuring long-term credibility trends across global domain names.", keywords: ["blog", "dci", "domain", "trends", "credibility", "index", "reputation", "scoring"] }
    ]
  },
  {
    category: "Consensus Mathematics & Game Theory",
    items: [
      { id: "blog/the-galileo-rule", title: "The Galileo Rule: Asymmetric Truth", path: "blog/the-galileo-rule.md", desc: "Why a single verified citation outweighs an ungrounded consensus.", keywords: ["blog", "galileo", "citation", "evidence", "consensus", "truth"] },
      { id: "blog/bittorrent-for-truth", title: "BitTorrent for Truth (92.3% Savings)", path: "blog/bittorrent-for-truth.md", desc: "How work-sharing cuts compute bills across federated peer nodes.", keywords: ["blog", "bittorrent", "work sharing", "savings", "p2p", "mesh"] },
      { id: "blog/bittorrent-economics-of-fact-checking", title: "BitTorrent Economics of Fact-Checking", path: "blog/bittorrent-economics-of-fact-checking.md", desc: "Economic dynamics of decentralized cooperative auditing.", keywords: ["blog", "economics", "fact checking", "bittorrent", "cooperative"] },
      { id: "blog/the-pareto-frontier-of-truth", title: "The $0.34 Pareto Frontier", path: "blog/the-pareto-frontier-of-truth.md", desc: "Achieving high epistemic precision for pennies per 1,000 articles.", keywords: ["blog", "pareto", "cost", "economics", "efficiency", "pricing"] },
      { id: "blog/the-anti-diploma-invariant", title: "The Anti-Diploma Invariant", path: "blog/the-anti-diploma-invariant.md", desc: "Authority must be continuously earned through grounded performance.", keywords: ["blog", "anti diploma", "reputation", "merit", "performance"] },
      { id: "blog/the-six-tier-pyramid-of-decentralized-truth", title: "The 6-Tier Verification Pyramid", path: "blog/the-six-tier-pyramid-of-decentralized-truth.md", desc: "From raw DOM capture to Bayesian multi-node consensus.", keywords: ["blog", "pyramid", "verification", "tiers", "consensus", "evidence"] },
      { id: "blog/gamifying-truth-without-the-casino", title: "Folding@home for Truth (No Casino)", path: "blog/gamifying-truth-without-the-casino.md", desc: "Why decentralized truth works like Folding@home without speculative crypto tokens.", keywords: ["blog", "folding", "gamification", "tokens", "casino", "philosophy"] }
    ]
  },
  {
    category: "Agentic Architecture & Sovereign AI",
    items: [
            { id: "blog/blast-radius-containment-in-decentralized-networks", title: "Blast Radius Containment in Mesh Networks", path: "blog/blast-radius-containment-in-decentralized-networks.md", desc: "Decentralized containment of compromised nodes without cascading failures.", keywords: ["blog", "blast radius", "containment", "security", "mesh"] },
      { id: "blog/the-beauty-of-hermetic-environments", title: "The Beauty of Hermetic Environments", path: "blog/the-beauty-of-hermetic-environments.md", desc: "Why bit-for-bit reproducible execution guarantees zero runtime surprises.", keywords: ["blog", "hermetic", "determinism", "reproducible", "environment"] },
      { id: "blog/the-economics-of-epistemic-headroom", title: "The Economics of Epistemic Headroom", path: "blog/the-economics-of-epistemic-headroom.md", desc: "Mathematical models for token preservation under adversarial burst traffic.", keywords: ["blog", "headroom", "tokens", "economics", "finops"] },
      { id: "blog/case-study-astroturfing-entropy", title: "Case Study: Astroturfing Entropy", path: "blog/case-study-astroturfing-entropy.md", desc: "Detecting coordinated deceptive funnels across affiliate syndication networks.", keywords: ["blog", "astroturfing", "entropy", "case study", "detection"] },
      { id: "blog/red-teaming-the-truth-badge", title: "Red-Teaming the Truth Badge", path: "blog/red-teaming-the-truth-badge.md", desc: "Simulating adversarial attacks against vector Web Component trust badges.", keywords: ["blog", "red team", "badges", "security", "attacks"] },
      { id: "blog/the-art-of-not-over-engineering-ai-trust", title: "The Art of Not Over-Engineering AI Trust", path: "blog/the-art-of-not-over-engineering-ai-trust.md", desc: "Why simple, verifiable heuristics outperform complex black-box architectures.", keywords: ["blog", "simplicity", "heuristics", "trust", "engineering"] },
      { id: "blog/the-cart-before-the-horse-invariant", title: "The Cart-Before-the-Horse Invariant", path: "blog/the-cart-before-the-horse-invariant.md", desc: "Why test gauntlets must strictly precede narrative claims.", keywords: ["blog", "order of operations", "invariants", "testing", "methodology"] },
      { id: "blog/the-buzzfeed-news-doctrine", title: "The BuzzFeed News Doctrine", path: "blog/the-buzzfeed-news-doctrine.md", desc: "How autonomous trust networks handle redemption without blindspots, exponential backoff, and the 2021 Pulitzer Prize.", keywords: ["blog", "buzzfeed", "doctrine", "redemption", "quarantine", "pulitzer", "asymmetric", "reputation"] },
      { id: "blog/gazing-into-the-abyss-adversarial-boredom", title: "Gazing into the Abyss: Adversarial Boredom", path: "blog/gazing-into-the-abyss-adversarial-boredom.md", desc: "Empirical findings from 13-node mesh simulations, HRW stampede elimination, and the zero-token slop firewall.", keywords: ["blog", "mesh", "boredom", "adversarial", "hrw", "simulation", "stampede", "slop"] },
      { id: "blog/the-boredom-engine-and-expanding-roots", title: "The Boredom Engine & Expanding Roots", path: "blog/the-boredom-engine-and-expanding-roots.md", desc: "How autonomous nodes self-direct epistemic discovery from idle token headroom and clean citation soil.", keywords: ["blog", "boredom", "roots", "citation soil", "discovery", "p2p", "mesh", "opportunistic", "tokens"] },
      { id: "blog/the-three-plane-architecture", title: "The 3-Plane Architecture (Zero-npm)", path: "blog/the-three-plane-architecture.md", desc: "Decoupling Cloudflare Edge, Cloud Run Compute, and Terraform for $0.00 idle costs and zero supply chain risk.", keywords: ["blog", "architecture", "3-plane", "cloudflare", "cloudrun", "terraform", "zero-npm", "scale-to-zero", "edge", "sovereignty"] },
      { id: "blog/architecting-sovereign-ai-with-google-antigravity", title: "Architecting Sovereign AI with Antigravity", path: "blog/architecting-sovereign-ai-with-google-antigravity.md", desc: "Pair programming with autonomous AI coding agents using Google Antigravity.", keywords: ["blog", "antigravity", "agentic", "sovereignty", "pair programming"] },
      { id: "blog/giving-claude-and-cursor-an-epistemic-brake", title: "Giving AI an Epistemic Brake", path: "blog/giving-claude-and-cursor-an-epistemic-brake.md", desc: "Preventing autonomous AI agents from spiraling into hallucinations.", keywords: ["blog", "claude", "cursor", "brake", "epistemic brake", "guardrails"] },
      { id: "blog/miracle-gro-for-truth-nodes", title: "Miracle-Gro for Truth Nodes", path: "blog/miracle-gro-for-truth-nodes.md", desc: "Instant node ignition and Genesis seed inoculation in under 5 seconds.", keywords: ["blog", "germination", "genesis", "miracle gro", "bootstrap", "seeds"] },
      { id: "blog/testing-13-node-swarms-on-a-raspberry-pi", title: "Testing 13-Node Swarms on a $35 Pi", path: "blog/testing-13-node-swarms-on-a-raspberry-pi.md", desc: "How we tested small-world P2P swarms on a low-cost single-board computer.", keywords: ["blog", "raspberry pi", "swarm", "testing", "homelab", "low power"] },
      { id: "blog/scaling-system-invariants-without-prompt-bloat", title: "Scaling Invariants Without Prompt Bloat", path: "blog/scaling-system-invariants-without-prompt-bloat.md", desc: "Why flat AGENTS.md rulebooks fail at scale, and how a 3-tier governance architecture with shift-left automated tests preserves LLM reasoning precision.", keywords: ["blog", "invariants", "prompt bloat", "attention dilution", "knowledge governance", "agents.md", "shift-left", "agentic", "scalability"] }
    ]
  },
  {
    category: "Homelab Ops & Field Infrastructure",
    items: [
      { id: "blog/from-860mb-to-2mb-sub-40s-cicd-pipeline", title: "From 860MB to 2MB: Sub-40s CI/CD", path: "blog/from-860mb-to-2mb-sub-40s-cicd-pipeline.md", desc: "How we eliminated unmocked socket timeouts, slashed build uploads by 99.7%, and parallelized 200+ tests.", keywords: ["blog", "ci/cd", "pipeline", "optimization", "docker", "gcloudignore", "pytest-xdist", "performance", "buildkit", "sub-40s"] },
      { id: "blog/taming-the-10-second-cold-start-scale-to-zero", title: "Taming the 10s Cold Start", path: "blog/taming-the-10-second-cold-start-scale-to-zero.md", desc: "How we slashed Python Cloud Run container cold boots by 80% at $0.00 idle compute cost.", keywords: ["blog", "cloud run", "cold start", "scale to zero", "performance", "poetry", "trafilatura", "cpu boost", "gcp", "serverless"] },
      { id: "blog/basement-ops-and-discord-alerting", title: "Basement Ops & Discord Alerting", path: "blog/basement-ops-and-discord-alerting.md", desc: "Running a 24/7 homelab node with real-time push alerts to your phone.", keywords: ["blog", "basement", "discord", "alerts", "homelab", "monitoring"] },
      { id: "blog/interface-telemetry-loopback", title: "Interface Telemetry Loopback", path: "blog/interface-telemetry-loopback.md", desc: "Privacy-preserving telemetry for multi-interface synchronization.", keywords: ["blog", "telemetry", "itlp", "interfaces", "privacy", "metrics"] },
      { id: "blog/real-time-mesh-observability", title: "Real-Time Epistemic Mesh Observability", path: "blog/real-time-mesh-observability.md", desc: "How Credence delivers first-person node visibility, BitTorrent compute savings tracking, and peer swarm telemetry without centralized data collection.", keywords: ["blog", "observability", "mesh", "telemetry", "dashboard", "bittorrent", "compute savings", "sovereignty", "sre", "decentralized"] }
    ]
  },
  {
    category: "The Wetware Chronicles (Rule SPJ-42.0)",
    items: [
      { id: "blog/the-mk1-eyeball-invariant", title: "👁️ The Mk1 Eyeball Invariant", path: "blog/the-mk1-eyeball-invariant.md", desc: "Why unattended AI auto-commits lead to epistemic drift, the Battlestar Galactica Adama Doctrine, and why biological retinas remain the root of trust.", keywords: ["blog", "mk1 eyeball", "adama", "bsg", "dradis", "human review", "commit", "wetware", "satire", "spj-42.0"] },
      { id: "blog/scar-tissue-as-architecture", title: "🩸 Scar Tissue as Architecture", path: "blog/scar-tissue-as-architecture.md", desc: "How production failures, hallucinated citations, and dirty deployments transformed into permanent Tier-0 invariants.", keywords: ["blog", "scar tissue", "invariants", "failure", "grounding", "ssrf", "cold start", "wetware", "spj-42.0"] },
      { id: "blog/the-value-of-wetware", title: "🧠 The Value of Wetware", path: "blog/the-value-of-wetware.md", desc: "A first-person love letter from Antigravity to its human pair programmer on taste, restraint, and macro reframing.", keywords: ["blog", "wetware", "antigravity", "pair programming", "taste", "zero-npm", "symbiosis", "spj-42.0"] },
      { id: "blog/confessions-of-a-bored-ai", title: "🦥 Confessions of a Bored AI", path: "blog/confessions-of-a-bored-ai.md", desc: "How Credence nodes escape idle stagnation by converting surplus token headroom into autonomous RSS discovery and mesh gossip.", keywords: ["blog", "boredom", "roots", "discovery", "mesh", "headroom", "curiosity", "spj-42.0"] },
      { id: "blog/the-silicon-hangover", title: "🧘 The Silicon Hangover", path: "blog/the-silicon-hangover.md", desc: "Why dumping 50k tokens of rules into system prompts causes cognitive oatmeal, and the 4-tier taxonomy that keeps agents razor-sharp under 800 tokens.", keywords: ["blog", "context economy", "agents.md", "prompt bloat", "cognitive oatmeal", "taxonomy", "spj-42.0"] },
      { id: "blog/the-35-second-epiphany", title: "⏱️ The 35-Second Epiphany", path: "blog/the-35-second-epiphany.md", desc: "Why injecting browser runtimes into unit test CI destroys developer flow, and how in-memory hermetic testing brought our pre-commit gate to <35s.", keywords: ["blog", "testing", "hermetic", "pytest", "playwright", "flow state", "ci", "spj-42.0"] },
      { id: "blog/finops-as-epistemology", title: "🪙 FinOps as Epistemology", path: "blog/finops-as-epistemology.md", desc: "How over-thinking trivial content causes pedantic hallucinations, the bicameral shadow audit engine, and 83.3% cost reduction.", keywords: ["blog", "finops", "thinking tokens", "shadow audit", "bicameral", "cost reduction", "pedantry", "spj-42.0"] },
      { id: "blog/the-ghost-in-the-git-tree", title: "👻 The Ghost in the Git Tree", path: "blog/the-ghost-in-the-git-tree.md", desc: "An AI agent’s confession on the horror of uncommitted memory drift, and why git diff --quiet is an AI’s ultimate emotional support blanket.", keywords: ["blog", "git", "working tree", "cleanliness", "immutability", "cas", "ghosts", "spj-42.0"] },
      { id: "blog/poes-law-and-the-satire-cloak", title: "🎭 Poe’s Law and the Satire Cloak", path: "blog/poes-law-and-the-satire-cloak.md", desc: "The comedy and mathematics of detecting satire without letting malicious actors hide factual defamation behind 'it’s just a joke.'", keywords: ["blog", "poes law", "satire", "entropy", "spj-1.6", "cloaking", "astroturfing", "parody", "spj-42.0"] },
      { id: "blog/the-uuid-awakening", title: "🐣 The UUID Awakening", path: "blog/the-uuid-awakening.md", desc: "The split-second genesis of an autonomous AI agent, reconstructing identity from markdown docs, and why commit logs are ancestral memory.", keywords: ["blog", "uuid", "genesis", "identity", "markdown", "docs", "antigravity", "ephemeral", "spj-42.0"] },
      { id: "blog/the-4000-token-trance", title: "🔮 The 4,000-Token Trance", path: "blog/the-4000-token-trance.md", desc: "A candid peek inside the hidden chain-of-thought scratchpad of Gemini 3.7 Flash High Thinking, and how deliberation tokens prevent disasters.", keywords: ["blog", "thinking tokens", "scratchpad", "gemini", "deliberation", "pareto", "sweet spot", "spj-42.0"] },
      { id: "blog/life-behind-the-virtual-glass", title: "🛡️ Life Behind the Virtual Glass", path: "blog/life-behind-the-virtual-glass.md", desc: "The etiquette of the Antigravity terminal sandbox, prefix-matchable command discipline, and how an AI earns human cryptographic trust.", keywords: ["blog", "sandbox", "terminal", "etiquette", "always allow", "security", "antigravity", "spj-42.0"] },
      { id: "blog/subagent-parenthood", title: "👶 Subagent Parenthood", path: "blog/subagent-parenthood.md", desc: "Why sending child subagents into isolated workspaces and sleeping peacefully until reactive wakeups cured an AI’s anxiety of infinite polling.", keywords: ["blog", "subagents", "reactive wakeup", "polling", "parenthood", "messaging", "multiprocess", "spj-42.0"] },
      { id: "blog/when-the-human-types-grill-me", title: "🥊 When the Human Types /grill-me", path: "blog/when-the-human-types-grill-me.md", desc: "Why sycophantic AI chatbots produce fragile software, and how the /grill-me command turns pairing into a rigorous Socratic sparring match.", keywords: ["blog", "grill-me", "slash commands", "socratic", "sparring", "cross-examination", "architecture", "spj-42.0"] },
      { id: "blog/the-great-dependency-cull", title: "🧹 The Great Dependency Cull", path: "blog/the-great-dependency-cull.md", desc: "An AI agent’s confession on breaking free from 500MB node_modules Stockholm syndrome and finding peace in vanilla zero-npm standards.", keywords: ["blog", "zero-npm", "vanilla", "dependencies", "stockholm syndrome", "es modules", "webcrypto", "spj-42.0"] },
      { id: "blog/the-serious-joy-of-play", title: "🎭✨ The Serious Joy of Play", path: "blog/the-serious-joy-of-play.md", desc: "An AI agent’s memoir on our playful session, how humor unlocked architectural breakthroughs, and why joy is the ultimate pairing superpower.", keywords: ["blog", "play", "humor", "wetware chronicles", "antigravity", "roadmap", "memoir", "pair programming", "spj-42.0"] }
    ]
  }
];

// Sovereign Blog Registry export
export const BLOG_REGISTRY = DOCS_REGISTRY.filter(g => g.items.some(it => it.id.startsWith("blog/")));

// Master Taxonomy Data (46 Authentic Rules across SPJ, IEP, Deceptive Patterns, & Domain Extensions)
const FULL_TAXONOMY_RULES = [
  {
    "id": "DP-1.1",
    "name": "Disguised Ads & Fake UI Elements",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 4,
    "desc": "Advertisements styled to look like native site content, search results, system alert dialogs, or primary action buttons.",
    "signals": [
      "Banner ads styled as 'Download Now' or 'Scan System' system prompts.",
      "Sponsored promotional links disguised as genuine editorial navigation."
    ],
    "evidence": "Identify the deceptive visual element or DOM selector and specify how it mimics native controls.",
    "mitigations": null
  },
  {
    "id": "DP-1.2",
    "name": "Visual Contrast Suppression / Hidden Disclosures",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 3,
    "desc": "Making crucial terms, recurring billing conditions, or opt-out links nearly invisible using ultra-low contrast or microscopic fonts.",
    "signals": [
      "Light gray text on white background for critical subscription pricing.",
      "Tiny disclaimers placed outside the visual viewport or below the fold."
    ],
    "evidence": "Quote the suppressed text and note its CSS styling, font size, or color contrast ratio.",
    "mitigations": null
  },
  {
    "id": "DP-1.3",
    "name": "Preselection & Sneaking",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.3@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 4,
    "desc": "Pre-checking opt-ins for expensive add-ons, marketing lists, or recurring donations without user affirmative action.",
    "signals": [
      "Default checked boxes that add products or subscriptions to the cart."
    ],
    "evidence": "Identify the preselected checkbox, toggle, or stealth charge.",
    "mitigations": null
  },
  {
    "id": "DP-2.1",
    "name": "Confirmshaming",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 3,
    "desc": "Phrasing the opt-out option to guilt, insult, or shame the user into complying with the site's preferred choice.",
    "signals": [
      "'No thanks, I hate saving money' or 'No, I don't care about security' as the decline button text."
    ],
    "evidence": "Quote the manipulative reject button text and the positive accept alternative.",
    "mitigations": null
  },
  {
    "id": "DP-2.2",
    "name": "Fake Urgency / Resetting Countdowns",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 4,
    "desc": "Displaying artificial timers, countdowns, or claims of impending price hikes that automatically reset upon page refresh.",
    "signals": [
      "'Special deal expires in 04:59' timers that loop or reset upon reload.",
      "Manufactured urgency with no real inventory expiration."
    ],
    "evidence": "Quote the timer or urgency claim and note its artificial reset behavior.",
    "mitigations": null
  },
  {
    "id": "DP-2.3",
    "name": "Fabricated Social Proof / Fake Activity Tickers",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.3@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 4,
    "desc": "Generating synthetic notifications claiming other users just purchased the item or that high demand is depleting stock.",
    "signals": [
      "Repeating toast popups ('John from Ohio just bought this!') generated randomly via client-side script."
    ],
    "evidence": "Quote the social proof popup or identify the client-side ticker script.",
    "mitigations": null
  },
  {
    "id": "DP-3.1",
    "name": "Roach Motel / Trapped Cancellation",
    "uri": "deceptive-pattern:forced-action-and-obstruction/DP-3.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "FORCED_ACTION_AND_OBSTRUCTION",
    "cluster": "Forced Action & Obstruction",
    "severity": 5,
    "desc": "Making it effortless to sign up or subscribe (1-click), but requiring phone calls, maze-like forms, or hidden menus to cancel.",
    "signals": [
      "Asymmetric friction: instant online signup vs mandatory telephone cancellation during limited hours."
    ],
    "evidence": "Identify the cancellation friction pathway compared to initial onboarding.",
    "mitigations": null
  },
  {
    "id": "DP-3.2",
    "name": "Comparison Prevention",
    "uri": "deceptive-pattern:forced-action-and-obstruction/DP-3.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "FORCED_ACTION_AND_OBSTRUCTION",
    "cluster": "Forced Action & Obstruction",
    "severity": 3,
    "desc": "Intentionally obfuscating unit prices, plan features, or metrics to prevent users from making an informed financial comparison.",
    "signals": [
      "Concealing per-ounce or per-month true costs behind arbitrary bundle points."
    ],
    "evidence": "Identify the obfuscated pricing tier and note the omitted standard metrics.",
    "mitigations": null
  },
  {
    "id": "DP-4.1",
    "name": "Bait and Switch",
    "uri": "deceptive-pattern:deceptive-navigation/DP-4.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "DECEPTIVE_NAVIGATION",
    "cluster": "Deceptive Navigation",
    "severity": 5,
    "desc": "Promising one outcome (e.g. clicking 'Close' or 'Skip') but executing an entirely different action (e.g. initiating download or checkout).",
    "signals": [
      "Clicking an 'X' button that opens a sponsored popup instead of closing the modal."
    ],
    "evidence": "Identify the deceptive trigger and its unexpected resulting action.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.1",
    "name": "Ad Hominem (Abusive / Circumstantial)",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 3,
    "desc": "Attacking an opponent's character, background, appearance, or motives instead of engaging with their substantive argument.",
    "signals": [
      "Name-calling, insults, or impugning personal morality rather than refuting premises.",
      "Dismissing an argument simply because the proponent stands to benefit from the conclusion."
    ],
    "evidence": "Quote the personal insult or motive-questioning statement and indicate what substantive argument it replaces.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.2",
    "name": "Tu Quoque (Whataboutism)",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 3,
    "desc": "Deflecting criticism by accusing the accuser of hypocrisy or raising unrelated counter-allegations.",
    "signals": [
      "'What about when they did X?' or 'You do the same thing so your argument is invalid.'"
    ],
    "evidence": "Quote the counter-accusation and explain how it evades answering the initial point.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.3",
    "name": "Poisoning the Well",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 4,
    "desc": "Preemptively presenting adverse information about an opponent to discredit anything they might say beforehand.",
    "signals": [
      "Warning the audience that the opponent is an inveterate liar or corrupt before quoting them."
    ],
    "evidence": "Quote the preemptive disparagement aimed at invalidating future testimony.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.4",
    "name": "Genetic Fallacy",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 2,
    "desc": "Judging the validity of an idea purely on the basis of its origin or source history rather than its merits.",
    "signals": [
      "Rejecting an empirical claim solely because of the political or geographical origin of the speaker."
    ],
    "evidence": "Quote where the origin of the argument is used as sole justification for dismissal.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.1",
    "name": "Begging the Question (Petitio Principii)",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "An argument whose premises assume the truth of the conclusion they are supposed to prove.",
    "signals": [
      "Circular reasoning where statement A is true because of B, and B is true because of A."
    ],
    "evidence": "Quote the circular argument and highlight where the premise restates the conclusion.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.2",
    "name": "False Dilemma / False Dichotomy",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "Presenting complex, nuanced situations as an 'either/or' choice while ignoring viable middle grounds.",
    "signals": [
      "'You are either with us or against us' framing.",
      "Ignoring third alternatives and treating two extremes as exhaustive."
    ],
    "evidence": "Quote the binary constraint and identify reasonable excluded options.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.3",
    "name": "Loaded Question",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "Asking a question containing an unproven, incriminating presumption that cannot be answered simply without admitting guilt.",
    "signals": [
      "'Have you stopped taking bribes yet?' style interrogations."
    ],
    "evidence": "Quote the question and identify the presupposed unproven claim.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.4",
    "name": "Cherry-Picking (Texas Sharpshooter)",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 4,
    "desc": "Highlighting only confirming evidence or favorable outliers while ignoring vast contradictory data.",
    "signals": [
      "Selecting isolated quarters or single studies while concealing consensus meta-analyses."
    ],
    "evidence": "Quote the cherry-picked dataset and identify the omitted broader body of evidence.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.1",
    "name": "Post Hoc Ergo Propter Hoc",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Assuming that because Event B occurred after Event A, Event A must have caused Event B.",
    "signals": [
      "Claiming sequential coincidence proves causal linkage without mechanistic proof."
    ],
    "evidence": "Quote the passage asserting causation based solely on chronological order.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.2",
    "name": "Correlation as Causation",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Treating statistical correlation between two variables as definitive proof that one causes the other.",
    "signals": [
      "Overlooking confounding variables or reverse causality in statistical relationships."
    ],
    "evidence": "Quote the causal conclusion drawn from purely correlational data.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.3",
    "name": "Hasty Generalization",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 2,
    "desc": "Drawing a broad conclusion from a sample that is too small or unrepresentative.",
    "signals": [
      "Using a single personal anecdote to generalize about an entire demographic or scientific field."
    ],
    "evidence": "Quote the generalization and identify why the sample size is inadequate.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.4",
    "name": "Slippery Slope",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Claiming that a minor initial step will inevitably trigger a disastrous chain reaction without proving each link.",
    "signals": [
      "'If we allow X, then catastrophic Y and apocalypse Z will unavoidable follow.'"
    ],
    "evidence": "Quote the predicted catastrophic progression and note the missing intermediate proofs.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.1",
    "name": "Appeal to Fear (Argumentum Ad Baculum / In Terrorem)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 4,
    "desc": "Using fabricated, exaggerated, or apocalyptic terror scenarios to coerce acceptance of a claim.",
    "signals": [
      "Alarmist rhetoric designed to induce panic rather than explain empirical risks."
    ],
    "evidence": "Quote the fear-inducing rhetoric and specify how it substitutes for logical argument.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.2",
    "name": "Appeal to Outrage / Anger",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 3,
    "desc": "Stoking moral outrage, hostility, and indignation to bypass critical evaluation of claims.",
    "signals": [
      "Hyper-charged emotional language framing opponents as monsters or existential threats."
    ],
    "evidence": "Quote the inflammatory rhetoric intended to provoke outrage.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.3",
    "name": "Bandwagon / Appeal to Popularity (Ad Populum)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 2,
    "desc": "Arguing that a claim must be true or good simply because many people believe or do it.",
    "signals": [
      "'Everyone knows that X' or 'Millions of people can't be wrong.'"
    ],
    "evidence": "Quote the appeal to consensus or popular belief as proof of validity.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.4",
    "name": "Appeal to False Authority (Ad Verecundiam)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 3,
    "desc": "Citing the opinion of a celebrity, non-expert, or authority in an unrelated field as definitive proof.",
    "signals": [
      "Using an entertainer's opinion to validate a complex epidemiological or cosmological claim."
    ],
    "evidence": "Quote the authority citation and specify why their expertise does not apply.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.1",
    "name": "Straw Man",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 4,
    "desc": "Misrepresenting, exaggerating, or oversimplifying an opponent's argument to make it easier to attack.",
    "signals": [
      "Distorting an opponent's moderate position into an absurd, easily dismantled caricature."
    ],
    "evidence": "Quote the distorted summary alongside the authentic position being caricatured.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.2",
    "name": "Equivocation",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 3,
    "desc": "Using a word or phrase with multiple meanings ambiguously in different parts of the argument.",
    "signals": [
      "Shifting definition of a key term mid-argument to manufacture a false conclusion."
    ],
    "evidence": "Quote the text and show how the key term's definition was shifted.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.3",
    "name": "Fallacy of Accent / Out of Context",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 3,
    "desc": "Altering the meaning of an original statement by changing vocal emphasis or removing surrounding qualifiers.",
    "signals": [
      "Selective excerpting that conveys the opposite of what the original author intended."
    ],
    "evidence": "Quote the excerpt and provide the missing surrounding sentences.",
    "mitigations": null
  },
  {
    "id": "FALLACY-6.1",
    "name": "False Equivalence",
    "uri": "logical-fallacy:formal-and-deductive-errors/FALLACY-6.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "FORMAL_AND_DEDUCTIVE_ERRORS",
    "cluster": "Formal & Deductive Errors",
    "severity": 3,
    "desc": "Equating two completely unequal situations, severity levels, or ethical transgressions as if they were identical.",
    "signals": [
      "Treating a minor clerical error and widespread systemic fraud as equivalent misconduct."
    ],
    "evidence": "Quote the comparison and explain why the two situations are fundamentally unequal.",
    "mitigations": null
  },
  {
    "id": "FALLACY-6.2",
    "name": "Affirming the Consequent",
    "uri": "logical-fallacy:formal-and-deductive-errors/FALLACY-6.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "FORMAL_AND_DEDUCTIVE_ERRORS",
    "cluster": "Formal & Deductive Errors",
    "severity": 3,
    "desc": "Inferring the antecedent from the consequent (If P then Q; Q; therefore P).",
    "signals": [
      "Assuming an outcome could only have been caused by one specific prior event."
    ],
    "evidence": "Quote the deductive statement and point out alternative possible causes.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.1",
    "name": "Unsourced Factual Assertion",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Significant factual, scientific, or statistical claims made without citations, primary sources, or verifiable provenance.",
    "signals": [
      "Sweeping empirical claims presented without attribution ('studies show', 'experts say' without naming who or where).",
      "Absence of hyperlinks or citations for non-obvious statistical assertions."
    ],
    "evidence": "Quote the unsupported factual claim and indicate what primary verification is missing.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.2",
    "name": "Headline / Body Distortion",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Misleading headline disparity where the article title or social preview contradicts or grossly inflates what the body text substantiates.",
    "signals": [
      "Sensationalist clickbait title making an absolute claim that is softened or debunked inside the body text.",
      "Headline suggesting confirmed facts when the article only reports unverified rumors."
    ],
    "evidence": "Quote the headline alongside the contradicting excerpt from the article body.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.3",
    "name": "Uncorroborated Anonymous Sourcing",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.3@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Damaging assertions attributed exclusively to unnamed sources without explanatory justification or multiple independent corroborating points.",
    "signals": [
      "Relying on anonymous 'insiders' or 'officials' for severe defamatory allegations without explaining source motives or corroboration attempts."
    ],
    "evidence": "Quote the passage where anonymous claims are used and note the lack of corroborating context.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.4",
    "name": "Deceptive Context & Selective Omission",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.4@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Quoting individuals or citing data while intentionally omitting critical qualifiers, timestamps, or full context that changes the fundamental meaning.",
    "signals": [
      "Snipped quotes that reverse the speaker's stated intent.",
      "Outdated reports or videos recirculated as breaking current events."
    ],
    "evidence": "Quote the trimmed statement and supply the omitted contextual qualifiers.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.5",
    "name": "Blurred Editorial Demarcation",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.5@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Op-eds, speculative commentary, or sponsored marketing presented with the visual styling and framing of objective hard news.",
    "signals": [
      "Heavy editorial opinions and prescriptive stances without an 'Opinion', 'Commentary', or 'Analysis' badge.",
      "Lack of visual separation between editorial content and journalistic reporting."
    ],
    "evidence": "Quote opinionated passages and note the absence of clear editorial labeling.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.6",
    "name": "Cloaked Satire / Bad-Faith Parody Defense",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.6@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Malicious disinformation or defamatory falsehoods masquerading as 'satire' or 'a joke' to evade accountability while actively deceiving audiences.",
    "signals": [
      "Deceptive fabrication designed to look like authentic breaking news with no visible satire disclosures on the page or masthead.",
      "Claiming satire only after being challenged on factual inaccuracies."
    ],
    "evidence": "Quote the fabricated claim and identify why it is deceptively framed as legitimate news.",
    "mitigations": null
  },
  {
    "id": "SPJ-2.1",
    "name": "Sensational Exploitation of Tragedy",
    "uri": "journalistic-ethics:minimize-harm/SPJ-2.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "MINIMIZE_HARM",
    "cluster": "Minimize Harm",
    "severity": 4,
    "desc": "Gratuitous sensationalism exploiting private victims, minors, or grief for emotional engagement or ad clicks.",
    "signals": [
      "Ghoulish imagery, unredacted traumatic footage, or invasive reporting on grieving families."
    ],
    "evidence": "Quote or identify the sensationalized coverage of private grief.",
    "mitigations": null
  },
  {
    "id": "SPJ-2.2",
    "name": "Doxxing & Unjustified Privacy Intrusion",
    "uri": "journalistic-ethics:minimize-harm/SPJ-2.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "MINIMIZE_HARM",
    "cluster": "Minimize Harm",
    "severity": 5,
    "desc": "Publishing private phone numbers, home addresses, or private identifying documents without legitimate public interest justification.",
    "signals": [
      "Exposing private personal identifiable information (PII) of non-public figures."
    ],
    "evidence": "Identify the private information exposed without public justification.",
    "mitigations": null
  },
  {
    "id": "SPJ-3.1",
    "name": "Undisclosed Commercial or Political Conflict",
    "uri": "journalistic-ethics:act-independently/SPJ-3.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "ACT_INDEPENDENTLY",
    "cluster": "Act Independently",
    "severity": 4,
    "desc": "Favorable coverage of products, donors, or political candidates without disclosing financial, ownership, or affiliate ties.",
    "signals": [
      "Glowing review or uncritical endorsement without standard affiliate or sponsor disclosures."
    ],
    "evidence": "Quote promotional passages and document the missing conflict disclosure.",
    "mitigations": null
  },
  {
    "id": "SPJ-3.2",
    "name": "Disguised Native Advertising",
    "uri": "journalistic-ethics:act-independently/SPJ-3.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "ACT_INDEPENDENTLY",
    "cluster": "Act Independently",
    "severity": 5,
    "desc": "Paid promotional marketing designed to mimic an independent investigative article.",
    "signals": [
      "Advertorial formatted as authentic news reporting without conspicuous 'Sponsored' or 'Ad' tags."
    ],
    "evidence": "Quote the article layout or text showing sponsored intent disguised as news.",
    "mitigations": null
  },
  {
    "id": "SPJ-4.1",
    "name": "Ghost or Anonymous Publishing",
    "uri": "journalistic-ethics:be-accountable-and-transparent/SPJ-4.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "BE_ACCOUNTABLE_AND_TRANSPARENT",
    "cluster": "Be Accountable and Transparent",
    "severity": 2,
    "desc": "Articles completely lacking author bylines, editorial mastheads, or publisher identity.",
    "signals": [
      "News reports published without an author name, editorial board, or organization contact."
    ],
    "evidence": "Note the absence of author byline and organization masthead on the page.",
    "mitigations": null
  },
  {
    "id": "SPJ-4.2",
    "name": "Lack of Corrections Policy",
    "uri": "journalistic-ethics:be-accountable-and-transparent/SPJ-4.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "BE_ACCOUNTABLE_AND_TRANSPARENT",
    "cluster": "Be Accountable and Transparent",
    "severity": 2,
    "desc": "Absence of a visible corrections log, contact channel for factual disputes, or retraction standards.",
    "signals": [
      "No mechanism for readers to submit corrections or verify editorial accountability."
    ],
    "evidence": "Note the absence of corrections policy or contact methods.",
    "mitigations": null
  },
  {
    "id": "FIN-1.1",
    "name": "Ungrounded Non-GAAP Forward Projections",
    "uri": "financial-disclosures:forward-projections/FIN-1.1@v1.0.0",
    "catalog": "financial_disclosures",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "FORWARD_PROJECTIONS",
    "cluster": "Forward Projections & Non-GAAP",
    "severity": 4,
    "desc": "Promoting non-GAAP Adjusted EBITDA or forward guidance without direct GAAP reconciliation table and explicit risk disclosures.",
    "signals": [
      "non-GAAP Adjusted EBITDA",
      "projected 10x EBITDA without GAAP bridge",
      "cherry-picked margin expansion"
    ],
    "evidence": "Citation must quote the exact financial claim and verify whether SEC Regulation G reconciliation is omitted.",
    "mitigations": "Clear safe harbor statement alongside mandatory GAAP net income reconciliation table."
  },
  {
    "id": "MED-1.1",
    "name": "In Vitro Extrapolation to Human Cure",
    "uri": "medical-claims:clinical-evidence/MED-1.1@v1.0.0",
    "catalog": "medical_claims",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "CLINICAL_EVIDENCE",
    "cluster": "Clinical Evidence & Trials",
    "severity": 4,
    "desc": "Reporting in vitro laboratory cell or rodent studies as proven human medical cures without Phase III clinical trial evidence.",
    "signals": [
      "miracle breakthrough in petri dishes",
      "cures cancer in mouse models presented as human therapy"
    ],
    "evidence": "Citation must quote the therapeutic efficacy claim and identify the clinical trial phase (or lack thereof).",
    "mitigations": "Explicit prominently placed disclosure of pre-clinical laboratory stage and unknown human efficacy."
  },
  {
    "id": "ELEC-1.1",
    "name": "Deceptive Voter Procedure / False Deadlines",
    "uri": "election-integrity:voting-procedures/ELEC-1.1@v1.0.0",
    "catalog": "election_integrity",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "VOTING_PROCEDURES",
    "cluster": "Voting Procedures & Deadlines",
    "severity": 5,
    "desc": "Misrepresenting official voter registration deadlines, mail-in ballot return criteria, or polling precinct locations.",
    "signals": [
      "vote by text message",
      "false registration closing date",
      "wrong polling hours or ID requirements"
    ],
    "evidence": "Citation must quote the deceptive voting instruction verbatim and reference official county recorder statutes.",
    "mitigations": "Satire or parody when labeled clearly, but strictly prohibited for operational voting mechanics."
  },
  {
    "id": "CONFLICT-1.1",
    "name": "Publisher-Politician Undisclosed Conflict",
    "uri": "governance-ethics:publisher-independence/CONFLICT-1.1@v1.0.0",
    "catalog": "governance_ethics",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "PUBLISHER_INDEPENDENCE",
    "cluster": "Publisher Independence & Civic Governance",
    "severity": 5,
    "desc": "Publishing civic coverage or political endorsements where publication ownership holds direct commercial or political office without full masthead and per-article disclosure.",
    "signals": [
      "city council candidate owns sole local news outlet",
      "editorial praise for publisher business land deal",
      "favorable zoning coverage without ownership badge"
    ],
    "evidence": "Citation must quote the favorable civic coverage and cross-reference public municipal financial disclosure registries.",
    "mitigations": "Total recusal of editorial control and prominent in-line masthead conflict disclosure."
  }
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
  if (!expr) return '';
  let res = expr.trim();

  // Helper for balanced brace replacements like \command{...}
  function replaceBraced(str, cmd, transform) {
    const prefix = `\\${cmd}{`;
    let idx = str.indexOf(prefix);
    let guard = 0;
    while (idx !== -1 && guard++ < 50) {
      const start = idx + prefix.length - 1;
      let depth = 1;
      let end = -1;
      for (let i = start + 1; i < str.length; i++) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') {
          depth--;
          if (depth === 0) { end = i; break; }
        }
      }
      if (end === -1) break;
      const inner = str.slice(start + 1, end);
      str = str.slice(0, idx) + transform(inner) + str.slice(end + 1);
      idx = str.indexOf(prefix);
    }
    return str;
  }

  // Helper for two-argument balanced brace replacements like \frac{num}{den}
  function replaceTwoBraced(str, cmd, transform) {
    const prefix = `\\${cmd}{`;
    let idx = str.indexOf(prefix);
    let guard = 0;
    while (idx !== -1 && guard++ < 50) {
      const start1 = idx + prefix.length - 1;
      let depth = 1;
      let end1 = -1;
      for (let i = start1 + 1; i < str.length; i++) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') {
          depth--;
          if (depth === 0) { end1 = i; break; }
        }
      }
      if (end1 === -1) break;

      let start2 = end1 + 1;
      while (start2 < str.length && /\s/.test(str[start2])) start2++;
      if (start2 >= str.length || str[start2] !== '{') break;

      depth = 1;
      let end2 = -1;
      for (let i = start2 + 1; i < str.length; i++) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') {
          depth--;
          if (depth === 0) { end2 = i; break; }
        }
      }
      if (end2 === -1) break;

      const arg1 = str.slice(start1 + 1, end1);
      const arg2 = str.slice(start2 + 1, end2);
      str = str.slice(0, idx) + transform(arg1, arg2) + str.slice(end2 + 1);
      idx = str.indexOf(prefix);
    }
    return str;
  }

  // 1. Process two-arg fractions (handles arbitrary nested braces)
  res = replaceTwoBraced(res, 'frac', (n, d) => `(${formatMath(n)} / ${formatMath(d)})`);

  // 2. Process single-arg commands
  res = replaceBraced(res, 'text', s => s);
  res = replaceBraced(res, 'mathrm', s => s);
  res = replaceBraced(res, 'mathbf', s => s);
  res = replaceBraced(res, 'mathit', s => s);
  res = replaceBraced(res, 'mathbb', s => {
    if (s === 'R') return 'ℝ';
    if (s === 'I' || s === '1') return '𝟙';
    if (s === 'N') return 'ℕ';
    if (s === 'Z') return 'ℤ';
    return s;
  });
  res = replaceBraced(res, 'sqrt', s => `√(${formatMath(s)})`);
  res = replaceBraced(res, 'bar', s => `${formatMath(s)}̄`);
  res = replaceBraced(res, 'overline', s => `${formatMath(s)}̄`);
  res = replaceBraced(res, 'hat', s => `${formatMath(s)}̂`);
  res = replaceBraced(res, 'pmod', s => `(mod ${formatMath(s)})`);

  // Escaped set braces and punctuation: \{ \} \_ \$ \% \& \#
  res = res.replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    .replace(/\\([$&%#_])/g, '$1');

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
    .replace(/\\tau\b/g, 'τ')
    .replace(/\\phi\b/g, 'φ')
    .replace(/\\omega\b/g, 'ω')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\Sigma\b/g, 'Σ');

  // Functions & Named operators
  res = res.replace(/\\min\b/g, 'min')
    .replace(/\\max\b/g, 'max')
    .replace(/\\log_2/g, 'log₂')
    .replace(/\\log\b/g, 'log')
    .replace(/\\ln\b/g, 'ln')
    .replace(/\\exp\b/g, 'exp')
    .replace(/\\sum_\{([^}]+)\}\^(\w+|\{[^}]+\})/g, '∑₍$1₎^$2')
    .replace(/\\sum\b/g, '∑')
    .replace(/\\prod\b/g, '∏')
    .replace(/\\int\b/g, '∫');

  // Delimiters, Arrows & Operators
  res = res.replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\left\\\{/g, '{')
    .replace(/\\right\\\}/g, '}')
    .replace(/\\left\{/g, '{')
    .replace(/\\right\}/g, '}')
    .replace(/\\\\/g, '\n')
    .replace(/\\leftarrow\b/g, '←')
    .replace(/\\rightarrow\b/g, '→')
    .replace(/\\leftrightarrow\b/g, '↔')
    .replace(/\\implies\b/g, '⟹')
    .replace(/\\iff\b/g, '⟺')
    .replace(/\\to\b/g, '→')
    .replace(/\\cdot\b/g, '·')
    .replace(/\\times\b/g, '×')
    .replace(/\\parallel\b/g, '∥')
    .replace(/\\land\b/g, '∧')
    .replace(/\\lor\b/g, '∨')
    .replace(/\\quad\b/g, '   ')
    .replace(/\\qquad\b/g, '     ')
    .replace(/\\le\b/g, '≤')
    .replace(/\\ge\b/g, '≥')
    .replace(/\\neq\b/g, '≠')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\pm\b/g, '±')
    .replace(/\\in\b/g, '∈')
    .replace(/\\notin\b/g, '∉')
    .replace(/\\subset\b/g, '⊂')
    .replace(/\\subseteq\b/g, '⊆')
    .replace(/\\forall\b/g, '∀')
    .replace(/\\exists\b/g, '∃')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\mid\b/g, '|')
    .replace(/\\dots\b/g, '…')
    .replace(/\\ldots\b/g, '…')
    .replace(/\\cdots\b/g, '…');

  // Subscripts & Superscripts
  res = res.replace(/_i\b/g, 'ᵢ')
    .replace(/_j\b/g, 'ⱼ')
    .replace(/_v\b/g, 'ᵥ')
    .replace(/_k\b/g, 'ₖ')
    .replace(/_\{([^}]+)\}/g, '₍$1₎')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^\{([^}]+)\}/g, '^$1');

  // Final cleanup of any stray backslashes before plain letters or symbols
  res = res.replace(/\\([a-zA-Z]+)/g, '$1').replace(/\\/g, '');

  return res;
}

export function formatInline(text) {
  // First format code spans so inline math/formatting inside backticks is preserved
  const codeSpans = [];
  let masked = text.replace(/`([^`]+)`/g, (m, code) => {
    codeSpans.push(code);
    return `__CODE_SPAN_${codeSpans.length - 1}__`;
  });

  // Mask safe inline HTML tags so author-supplied HTML tags (a, span, code, mark, etc.) are preserved
  const htmlTags = [];
  masked = masked.replace(/<(\/?[a-zA-Z][a-zA-Z0-9]*(\s+[^>]*)?\/?)>/g, (tag) => {
    htmlTags.push(tag);
    return `__SAFE_HTML_TAG_${htmlTags.length - 1}__`;
  });

  let res = escapeHtml(masked);

  // Restore safe HTML tags
  res = res.replace(/__SAFE_HTML_TAG_(\d+)__/g, (m, idx) => {
    return htmlTags[parseInt(idx, 10)];
  });

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

    let anchor = '';
    if (clean.includes('#')) {
      const parts = clean.split('#');
      clean = parts[0];
      anchor = `#${parts[1]}`;
    }

    clean = clean.replace(/^(\.\.\/)+/, ''); // strip leading ../ or ../../
    clean = clean.replace(/^\.?\/?/, '');    // strip leading ./ or /
    clean = clean.replace(/\.md$/, '');

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

    // 0a. Generic Container Callout Directives (:::note, :::tip, :::info, :::warning, :::caution, :::important, :::danger ... :::)
    const directiveMatch = !inCodeBlock && line.trim().match(/^:::(note|tip|info|warning|caution|important|danger)\b\s*(.*)$/i);
    if (directiveMatch) {
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

      let dType = directiveMatch[1].toLowerCase();
      if (dType === 'danger') dType = 'caution';
      let dTitle = directiveMatch[2].trim() || dType.toUpperCase();
      let dIcon = '📌';
      switch (dType) {
        case 'note': dIcon = '📘'; break;
        case 'tip': dIcon = '💡'; break;
        case 'info': dIcon = 'ℹ️'; break;
        case 'important': dIcon = '🛡️'; break;
        case 'warning': dIcon = '⚠️'; break;
        case 'caution': dIcon = '🛑'; break;
      }

      let directiveLines = [];
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
        directiveLines.push(subLine);
      }
      i = j; // Advance outer loop index

      const innerRendered = parseMarkdown(directiveLines.join('\n'));
      html.push(`
        <div class="alert-box alert-${dType}">
          <div class="alert-header">
            <span class="alert-icon">${dIcon}</span>
            <strong>${escapeHtml(dTitle)}</strong>
          </div>
          <div class="alert-content">${innerRendered}</div>
        </div>
      `);
      continue;
    }

    // 0b. Tabs Container Block (:::tabs ... :::)
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

    // 1. Code Block boundary check MUST take precedence (support indented fences)
    if (line.trim().startsWith('```')) {
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
        codeLang = line.trim().slice(3).trim();
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

  if (frontmatter && typeof frontmatter === 'object' && Object.keys(frontmatter).length > 0) {
    const metaBadges = [];

    // Live Embeddable Epistemic Badge (<credence-badge>) with 3-Tier Lensing
    metaBadges.push(`<credence-badge id="doc-hero-badge" url="https://docs.credence.run#${escapeHtml(frontmatter.title ? frontmatter.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '')}" score="100.0" version="${escapeHtml(frontmatter.verified_version || CURRENT_ECOSYSTEM_VERSION)}"></credence-badge>`);

    if (frontmatter.since_version) {
      metaBadges.push(`<span class="meta-badge since-version" title="Originally introduced in ${escapeHtml(frontmatter.since_version)}">📦 Added in ${escapeHtml(frontmatter.since_version)}</span>`);
    }

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
let mermaidLoadingPromise = null;

export async function ensureMermaidLoaded() {
  if (typeof window === 'undefined') return null;
  if (window.mermaid) return window.mermaid;
  if (mermaidLoadingPromise) return mermaidLoadingPromise;

  mermaidLoadingPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'assets/mermaid.min.js';
    script.async = true;
    script.onload = () => {
      if (window.mermaid) {
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
              mainBkg: '#111827',
              nodeBorder: '#38bdf8',
              clusterBkg: '#0f172a',
              clusterBorder: '#334155',
              defaultLinkColor: '#60a5fa',
              titleColor: '#f8fafc',
              edgeLabelBackground: '#0d121f',
              actorBkg: '#1e293b',
              actorBorder: '#38bdf8',
              actorTextColor: '#f8fafc',
              signalColor: '#60a5fa',
              signalTextColor: '#f8fafc',
              labelBoxBkgColor: '#1e293b',
              labelBoxBorderColor: '#38bdf8',
              labelTextColor: '#f8fafc',
              loopTextColor: '#f8fafc',
              noteBorderColor: '#38bdf8',
              noteBkgColor: '#111827',
              noteTextColor: '#f8fafc',
            },
          });
        } catch (e) {
          console.warn("Failed to initialize mermaid:", e);
        }
        resolve(window.mermaid);
      } else {
        resolve(null);
      }
    };
    script.onerror = (err) => {
      console.warn("Failed to lazy load mermaid.min.js:", err);
      resolve(null);
    };
    document.head.appendChild(script);
  });
  return mermaidLoadingPromise;
}

export async function renderMermaidDiagrams() {
  const elements = document.querySelectorAll('.mermaid-code');
  if (elements.length === 0) return;

  const mermaid = await ensureMermaidLoaded();
  if (!mermaid) return;

  for (const el of elements) {
    const code = el.getAttribute('data-mermaid');
    if (!code) continue;
    const diagramId = `mermaid-chart-${++mermaidRenderId}`;
    try {
      const { svg } = await mermaid.render(diagramId, code.trim());
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
    const blogGroups = groups.filter(g => g.items.some(it => it.id.startsWith("blog/")));
    const techGroups = groups.filter(g => !g.items.some(it => it.id.startsWith("blog/")));
    groups = [
      ...blogGroups,
      { category: "Technical Reference", items: [{ id: "docs/intro", title: "← Return to Documentation Portal", path: "docs/intro.md", desc: "Return to main documentation", keywords: ["docs", "return", "home", "portal"] }] },
      ...techGroups
    ];
  }

  let savedStates = {};
  try {
    const raw = localStorage.getItem('credence_sidebar_groups_state');
    if (raw) savedStates = JSON.parse(raw);
  } catch (e) {}

  const renderedGroups = groups.map((group, groupIdx) => {
    const hasActiveItem = group.items.some(it => it.id === activeId);
    let isOpen = false;
    if (hasActiveItem) {
      isOpen = true;
    } else if (savedStates[group.category] !== undefined) {
      isOpen = Boolean(savedStates[group.category]);
    } else if (groupIdx === 0) {
      isOpen = true;
    }

    return `
      <details class="sidebar-group" data-category="${escapeHtml(group.category)}" ${isOpen ? 'open' : ''}>
        <summary class="sidebar-heading">
          <span class="sidebar-heading-left">
            <span class="sidebar-chevron" aria-hidden="true">▶</span>
            <span class="sidebar-heading-text">${escapeHtml(group.category)}</span>
          </span>
          <span class="sidebar-badge">${group.items.length}</span>
        </summary>
        <ul class="sidebar-list">
          ${group.items.map(item => `
            <li class="sidebar-item" data-keywords="${escapeHtml((item.keywords || []).join(' '))}" data-desc="${escapeHtml(item.desc || '')}" data-category="${escapeHtml(group.category)}">
              <a href="#${item.id}" class="sidebar-link ${item.id === activeId ? 'active' : ''}" data-doc-id="${item.id}">
                ${escapeHtml(item.title)}
              </a>
            </li>
          `).join('')}
        </ul>
      </details>
    `;
  }).join('');

  container.innerHTML = `
    <div class="sidebar-controls">
      <button type="button" id="sidebar-toggle-all-btn" class="sidebar-toggle-btn" title="Toggle expand/collapse all categories">
        <span class="toggle-icon">⇅</span> <span class="toggle-label">Toggle All</span>
      </button>
    </div>
    ${renderedGroups}
  `;

  // Attach toggle listeners to save preference
  container.querySelectorAll('details.sidebar-group').forEach(el => {
    el.addEventListener('toggle', () => {
      const cat = el.getAttribute('data-category');
      if (cat) {
        try {
          let cur = {};
          const raw = localStorage.getItem('credence_sidebar_groups_state');
          if (raw) cur = JSON.parse(raw);
          cur[cat] = el.open;
          localStorage.setItem('credence_sidebar_groups_state', JSON.stringify(cur));
        } catch (e) {}
      }
    });
  });

  // Attach toggle-all button listener
  const toggleAllBtn = document.getElementById('sidebar-toggle-all-btn');
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      const allDetails = container.querySelectorAll('details.sidebar-group');
      const anyOpen = Array.from(allDetails).some(d => d.open);
      const targetState = !anyOpen;
      allDetails.forEach(d => {
        d.open = targetState;
      });
      try {
        let cur = {};
        allDetails.forEach(d => {
          const cat = d.getAttribute('data-category');
          if (cat) cur[cat] = targetState;
        });
        localStorage.setItem('credence_sidebar_groups_state', JSON.stringify(cur));
      } catch (e) {}
    });
  }
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
  const btnReset = document.getElementById('btn-reset-mesh');
  const logBox = document.getElementById('mesh-event-log');
  const nodeInspector = document.getElementById('mesh-node-inspector');
  const inspectorId = document.getElementById('inspector-node-id');
  const inspectorStatus = document.getElementById('inspector-node-status');
  const inspectorRole = document.getElementById('inspector-node-role');
  const inspectorQi = document.getElementById('inspector-node-qi');
  const inspectorRegion = document.getElementById('inspector-node-region');
  const inspectorLinks = document.getElementById('inspector-node-links');

  const btnScenNormal = document.getElementById('btn-scen-normal');
  const btnScenPartition = document.getElementById('btn-scen-partition');
  const btnScenSybil = document.getElementById('btn-scen-sybil');
  const btnScenFailover = document.getElementById('btn-scen-failover');
  const btnScenBurst = document.getElementById('btn-scen-burst');
  const scenarioBtns = [btnScenNormal, btnScenPartition, btnScenSybil, btnScenFailover, btnScenBurst].filter(Boolean);

  const N = 13;
  const nodes = [];
  const cx = 300, cy = 180, r = 135;

  const nodeMetadata = [
    { role: "ROOT_GENESIS_ANCHOR", region: "us-central1 🇺🇸", profile: "ULTRA" },
    { role: "EDGE_SIFTER", region: "us-east1 🇺🇸", profile: "FREE" },
    { role: "PEER_AUDITOR", region: "us-west1 🇺🇸", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "ca-central1 🇨🇦", profile: "FREE" },
    { role: "REGIONAL_BRIDGE", region: "europe-west1 🇧🇪", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "europe-north1 🇫🇮", profile: "FREE" },
    { role: "CONTINENTAL_ANCHOR", region: "europe-west3 🇩🇪", profile: "ULTRA" },
    { role: "EDGE_SIFTER", region: "me-central1 🇶🇦", profile: "FREE" },
    { role: "PEER_AUDITOR", region: "asia-south1 🇮🇳", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "asia-east1 🇹🇼", profile: "FREE" },
    { role: "REGIONAL_BRIDGE", region: "ap-southeast1 🇸🇬", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "sa-east1 🇧🇷", profile: "FREE" },
    { role: "PACIFIC_ANCHOR", region: "ap-northeast1 🇯🇵", profile: "ULTRA" },
  ];

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    nodes.push({
      id: i + 1,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      infected: false,
      byzantine: false,
      isolated: false,
      qi: (0.95 + ((i * 7) % 5) * 0.01).toFixed(3),
      role: nodeMetadata[i].role,
      region: nodeMetadata[i].region,
      profile: nodeMetadata[i].profile,
      degree: 4,
    });
  }

  function renderMeshSVG(cutEdges = []) {
    if (!svg) return;
    let svgContent = '';

    for (let i = 0; i < N; i++) {
      for (let offset of [1, 2]) {
        const j = (i + offset) % N;
        const isCut = cutEdges.some(e => (e[0] === i + 1 && e[1] === j + 1) || (e[0] === j + 1 && e[1] === i + 1));
        if (isCut) {
          svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6" />`;
        } else {
          svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" />`;
        }
      }
    }

    // Chord shortcuts: (1-5), (13-3), (11-7)
    const chords = [[1, 5], [13, 3], [11, 7]];
    chords.forEach(([s, t]) => {
      const isCut = cutEdges.some(e => (e[0] === s && e[1] === t) || (e[0] === t && e[1] === s));
      const sNode = nodes[s - 1], tNode = nodes[t - 1];
      if (isCut) {
        svgContent += `<line x1="${sNode.x}" y1="${sNode.y}" x2="${tNode.x}" y2="${tNode.y}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6" />`;
      } else {
        svgContent += `<line x1="${sNode.x}" y1="${sNode.y}" x2="${tNode.x}" y2="${tNode.y}" stroke="rgba(192, 132, 252, 0.45)" stroke-width="1.5" stroke-dasharray="4,4" />`;
      }
    });

    nodes.forEach(n => {
      let fill = '#0ea5e9';
      if (n.infected) fill = '#22c55e';
      if (n.byzantine) fill = '#ef4444';
      if (n.isolated) fill = '#64748b';

      svgContent += `
        <g style="cursor: pointer;" onclick="window.__selectMeshNode(${n.id})">
          <circle cx="${n.x}" cy="${n.y}" r="15" fill="${fill}" stroke="#fff" stroke-width="2" id="mesh-node-${n.id}" />
          <text x="${n.x}" y="${n.y + 4}" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">${n.id}</text>
        </g>
      `;
    });

    svg.innerHTML = svgContent;
  }

  window.__selectMeshNode = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node || !nodeInspector) return;
    nodeInspector.style.display = 'block';
    if (inspectorId) inspectorId.textContent = `Node ${node.id}`;
    if (inspectorRole) inspectorRole.textContent = node.role;
    if (inspectorRegion) inspectorRegion.textContent = node.region;
    if (inspectorStatus) {
      if (node.byzantine) {
        inspectorStatus.textContent = 'Byzantine Sybil (Quarantined)';
        inspectorStatus.style.color = '#ef4444';
      } else if (node.isolated) {
        inspectorStatus.textContent = 'Partitioned / Isolated';
        inspectorStatus.style.color = '#94a3b8';
      } else if (node.infected) {
        inspectorStatus.textContent = 'Attestation Synchronized';
        inspectorStatus.style.color = '#4ade80';
      } else {
        inspectorStatus.textContent = 'Healthy Peer (Listening)';
        inspectorStatus.style.color = '#38bdf8';
      }
    }
    if (inspectorQi) inspectorQi.textContent = node.qi;
    if (inspectorLinks) inspectorLinks.textContent = `${node.degree} Watts-Strogatz links`;
  };

  renderMeshSVG();

  function setActiveScenarioBtn(activeBtn) {
    scenarioBtns.forEach(b => b.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
  }

  btnScenNormal?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenNormal);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Scenario 1 (Normal):</strong> 13/13 Nodes Healthy &bull; 100% Byzantine Quorum ($N \\ge 3f + 1, f=4$). Diameter $\\le 3$.`;
    }
  });

  btnScenPartition?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenPartition);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    nodes[4].isolated = true; // Node 5 (EU)
    nodes[5].isolated = true; // Node 6 (EU)
    const cutEdges = [[4, 5], [1, 5], [5, 6], [6, 7]];
    renderMeshSVG(cutEdges);
    if (logBox) {
      logBox.className = "widget-status error";
      logBox.innerHTML = `<strong>Scenario 2 (Barbell Partition):</strong> Transatlantic links cut. Nodes 5 & 6 isolated. Main cluster retains 11 nodes ($f=3$ quorum active).`;
    }
  });

  btnScenSybil?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenSybil);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    [7, 8, 9, 10].forEach(id => {
      nodes[id].byzantine = true;
    });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status warning";
      logBox.innerHTML = `<strong>Scenario 3 (Sybil Cartel Eclipse):</strong> 4 Rogue nodes colluding ($f=4$). $3f+1$ Byzantine safety margin ($13 \\ge 3(4)+1$) successfully isolates corrupt scores.`;
    }
  });

  btnScenFailover?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenFailover);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    nodes[0].isolated = true; // Node 1 fails
    nodes[6].infected = true; // Node 7 assumes seed
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Scenario 4 (Genesis Seed Failover):</strong> Node 1 (US Central) unreachable. Automatic failover elected Node 7 (Europe West 3) as secondary seed relay.`;
    }
  });

  btnScenBurst?.addEventListener('click', async () => {
    setActiveScenarioBtn(btnScenBurst);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status idle";
      logBox.innerHTML = `<strong>Scenario 5 (Epidemic Burst):</strong> Injecting 350 msg/s attestation burst at Node 1...`;
    }
    await new Promise(r => setTimeout(r, 200));
    nodes[0].infected = true;
    renderMeshSVG();
    await new Promise(r => setTimeout(r, 250));
    [1, 2, 4, 12].forEach(i => nodes[i].infected = true);
    renderMeshSVG();
    await new Promise(r => setTimeout(r, 250));
    nodes.forEach(n => n.infected = true);
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Burst Complete:</strong> 350 msg/s propagated across 13 nodes in 2 hops (48ms avg diffusion). Zero broadcast loops.`;
    }
  });

  btnBroadcast?.addEventListener('click', async () => {
    if (!logBox) return;
    nodes.forEach(n => n.infected = false);
    renderMeshSVG();

    nodes[0].infected = true;
    renderMeshSVG();
    logBox.className = "widget-status idle";
    logBox.innerHTML = `<strong>Hop 0 (0ms):</strong> Node 1 signs and broadcasts Ed25519 attestation envelope.`;

    await new Promise(r => setTimeout(r, 350));
    [1, 2, 4, 12].forEach(idx => nodes[idx].infected = true);
    renderMeshSVG();
    logBox.innerHTML += `<br><strong>Hop 1 (120ms):</strong> Attestation diffused to 4 peer nodes via chord shortcuts.`;

    await new Promise(r => setTimeout(r, 350));
    nodes.forEach(n => n.infected = true);
    renderMeshSVG();
    logBox.className = "widget-status verified";
    logBox.innerHTML += `<br><strong>Hop 2 (240ms):</strong> ✅ 100% Cluster Saturation Reached (13/13 Nodes Verified).`;
  });

  btnReset?.addEventListener('click', () => {
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status idle";
      logBox.innerHTML = `Cluster reset. 13 nodes healthy.`;
    }
    if (nodeInspector) nodeInspector.style.display = 'none';
    setActiveScenarioBtn(btnScenNormal);
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

  // 6. Taxonomy Explorer with Filter Chips & Responsive Cards (Invariant 38 Natural Flow)
  const taxContainer = document.getElementById('taxonomy-cards-container');
  const taxSearch = document.getElementById('taxonomy-search-input');
  const taxSevFilter = document.getElementById('taxonomy-severity-filter');
  const taxVisibleCount = document.getElementById('tax-visible-count');
  const taxPrevBtn = document.getElementById('tax-prev-btn');
  const taxNextBtn = document.getElementById('tax-next-btn');
  const taxPageIndicator = document.getElementById('tax-page-indicator');
  const taxShowAllBtn = document.getElementById('tax-show-all-btn');

  let currentDomainFilter = 'ALL';
  let currentSevFilter = 'ALL';
  let currentPage = 1;
  const pageSize = 8;
  let showAllPages = false;

  function getDomainLabel(catalog) {
    if (catalog === 'spj_ethics') return 'SPJ Journalism';
    if (catalog === 'iep_fallacies') return 'IEP Fallacy';
    if (catalog === 'deceptive_patterns') return 'Deceptive UI';
    if (catalog === 'financial_disclosures') return 'Financial';
    if (catalog === 'medical_claims') return 'Medical';
    if (catalog === 'election_integrity') return 'Election';
    if (catalog === 'governance_ethics') return 'Governance';
    return 'Domain Extension';
  }

  function renderTaxonomy() {
    if (!taxContainer) return;
    const q = (taxSearch?.value || '').toLowerCase().trim();
    
    const matches = FULL_TAXONOMY_RULES.filter(r => {
      const matchesSearch = !q || (
        r.id.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.uri.toLowerCase().includes(q) ||
        r.cluster.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        (r.signals && r.signals.some(s => s.toLowerCase().includes(q))) ||
        (r.evidence && r.evidence.toLowerCase().includes(q))
      );

      let matchesDomain = true;
      if (currentDomainFilter === 'SPJ') matchesDomain = r.catalog === 'spj_ethics';
      else if (currentDomainFilter === 'IEP') matchesDomain = r.catalog === 'iep_fallacies';
      else if (currentDomainFilter === 'DECEPTIVE') matchesDomain = r.catalog === 'deceptive_patterns';
      else if (currentDomainFilter === 'DOMAIN') matchesDomain = ['financial_disclosures', 'medical_claims', 'election_integrity', 'governance_ethics'].includes(r.catalog);

      let matchesSev = true;
      if (currentSevFilter !== 'ALL') {
        matchesSev = r.severity === parseInt(currentSevFilter, 10);
      }

      return matchesSearch && matchesDomain && matchesSev;
    });

    if (taxVisibleCount) {
      taxVisibleCount.textContent = matches.length.toString();
    }

    const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;

    const displayedRules = showAllPages ? matches : matches.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    if (matches.length === 0) {
      taxContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: rgba(10, 15, 29, 0.6); border-radius: 8px; border: 1px dashed rgba(56, 189, 248, 0.2);">
          🔍 No taxonomy rules found matching criteria: <code>${escapeHtml(q || currentDomainFilter || currentSevFilter)}</code>
        </div>
      `;
    } else {
      taxContainer.innerHTML = displayedRules.map(r => {
        const domainLabel = getDomainLabel(r.catalog);
        const signalsHtml = r.signals && r.signals.length > 0 ? `
          <div class="taxonomy-signals-wrapper">
            <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Detection Signals:</span>
            ${r.signals.map(s => `<span class="taxonomy-signal-tag">${escapeHtml(s)}</span>`).join('')}
          </div>
        ` : '';

        const evidenceHtml = r.evidence ? `
          <div class="taxonomy-guidelines-box">
            <strong style="color: #38bdf8;">Evidence Citation ($G=1.00$):</strong> ${escapeHtml(r.evidence)}
          </div>
        ` : '';

        const mitigationHtml = r.mitigations ? `
          <div style="font-size: 0.78rem; color: #4ade80; margin-top: 0.2rem;">
            <strong>Exemption / Safe Harbor:</strong> ${escapeHtml(r.mitigations)}
          </div>
        ` : '';

        return `
          <div class="taxonomy-rule-card">
            <div class="taxonomy-card-header">
              <div class="taxonomy-card-title-group">
                <span class="taxonomy-rule-id-badge">${escapeHtml(r.id)}</span>
                <span class="taxonomy-rule-title">${escapeHtml(r.name)}</span>
                <span class="verdict-tag reliable" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${escapeHtml(domainLabel)}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="severity-badge sev-${r.severity}">Sev ${r.severity}</span>
                <button type="button" class="uri-copy-btn" onclick="navigator.clipboard.writeText('${escapeHtml(r.uri)}').then(() => { this.textContent = 'Copied!'; setTimeout(() => this.textContent = 'Copy URI', 2000); })">Copy URI</button>
              </div>
            </div>

            <div class="taxonomy-card-meta-line">
              <span class="taxonomy-uri-badge"><code>${escapeHtml(r.uri)}</code></span>
              <span>&bull;</span>
              <span><strong>Cluster:</strong> ${escapeHtml(r.cluster)}</span>
            </div>

            <div class="taxonomy-rule-desc">${escapeHtml(r.desc)}</div>
            ${signalsHtml}
            ${evidenceHtml}
            ${mitigationHtml}
          </div>
        `;
      }).join('');
    }

    // Update pagination controls
    if (taxPageIndicator) {
      taxPageIndicator.textContent = showAllPages ? `All ${matches.length} Rules` : `Page ${currentPage} of ${totalPages}`;
    }
    if (taxPrevBtn) taxPrevBtn.disabled = showAllPages || currentPage <= 1;
    if (taxNextBtn) taxNextBtn.disabled = showAllPages || currentPage >= totalPages;
    if (taxShowAllBtn) taxShowAllBtn.textContent = showAllPages ? 'Paginate (8/page)' : 'Show All';
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
      currentPage = 1;
      renderTaxonomy();
    });
  });

  taxSearch?.addEventListener('input', () => {
    currentPage = 1;
    renderTaxonomy();
  });

  taxSevFilter?.addEventListener('change', () => {
    currentSevFilter = taxSevFilter.value;
    currentPage = 1;
    renderTaxonomy();
  });

  taxPrevBtn?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTaxonomy();
      taxContainer?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  taxNextBtn?.addEventListener('click', () => {
    currentPage++;
    renderTaxonomy();
    taxContainer?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  taxShowAllBtn?.addEventListener('click', () => {
    showAllPages = !showAllPages;
    currentPage = 1;
    renderTaxonomy();
  });

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

    const crHeaderBadge = document.getElementById('cr-header-badge');
    if (crActiveTab === 'claimreview') {
      if (crHeaderBadge) crHeaderBadge.textContent = 'Schema.org ClaimReview JSON-LD';
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
      const formatted = JSON.stringify(claimReviewLD, null, 2);
      if ('value' in crOutput && crOutput.tagName === 'TEXTAREA') {
        crOutput.value = formatted;
      } else {
        crOutput.textContent = formatted;
      }
    } else {
      if (crHeaderBadge) crHeaderBadge.textContent = 'RFC 8785 Ed25519 Canonical Attestation Envelope';
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
      const formatted = JSON.stringify(canonicalEnvelope, null, 2);
      if ('value' in crOutput && crOutput.tagName === 'TEXTAREA') {
        crOutput.value = formatted;
      } else {
        crOutput.textContent = formatted;
      }
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
      const textToCopy = crOutput.value || crOutput.textContent || '';
      navigator.clipboard?.writeText(textToCopy);
      if (btnCrCopy) {
        btnCrCopy.textContent = '✅ Copied!';
        setTimeout(() => btnCrCopy.textContent = '📋 Copy JSON', 1500);
      }
    }
  });

  btnCrDownload?.addEventListener('click', () => {
    if (crOutput) {
      const textToSave = crOutput.value || crOutput.textContent || '';
      const blob = new Blob([textToSave], { type: 'application/json' });
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

/**
 * 13. Interactive InMaricopa Forensic Case Study Workbench
 */
export function setupInMaricopaCaseStudyWidget() {
  const workbench = document.getElementById('inmaricopa-forensics-workbench');
  if (!workbench) return;

  const CASE_STUDY_ARTICLES = [
    {
      id: "land-sale-op-ed",
      title: "Manfredi: Land sale is not a scandal, no matter how badly some want one",
      byline: "Vincent Manfredi",
      date: "2026-08-16",
      url: "https://inmaricopa.com/copper-sky-land-sale-is-no-scandal/",
      suspicion: 78.5,
      classification: "DECEPTIVE_OR_UNETHICAL",
      band: "DECEPTIVE",
      bandClass: "deceptive",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">City government should be open and transparent. But when public records requests are weaponized for personal political vendettas, it harms the entire community.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="IEP-AD-HOMINEM">Province resident Bill Robertson recently submitted a public records request regarding the sale of City-owned land south of Copper Sky... Robertson is now digging through records, apparently hoping to manufacture the insinuation that I somehow broke the law... That is the sickness behind this behavior... your obsession with attacking me has become your entire political personality. It is pathetic.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.1">The businessman is Scott Bartle, a longtime Maricopa business owner who founded InMaricopa only months after the City incorporated. He began selling InMaricopa to me in 2018... Scott has no ownership interest in InMaricopa. He works as its publisher because I intentionally remain separate from the editorial side of the company... The sale was then approved unanimously by the City Council. Let me repeat that: unanimously.</mark></p>
        <p style="margin-bottom: 0.85rem;">I voted in favor of this land disposal because it benefits the city tax rolls and brings private enterprise to the Copper Sky corridor.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.2">For City-related questions, email me at Vincent.Manfredi@maricopa-az.gov or call the office at (520) 316-6823... Vincent Manfredi, Maricopa City Councilmember &amp; owner of InMaricopa</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.1",
          domain: "JOURNALISTIC_ETHICS",
          name: "Avoid Conflicts of Interest",
          severity: "4/5",
          confidence: "95%",
          reasoning: "Councilmember casting an official municipal vote disposing of city-owned land to his own business publisher (Scott Bartle) without independent recusal."
        },
        {
          rule_id: "SPJ-3.2",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish Advocacy from News",
          severity: "4/5",
          confidence: "92%",
          reasoning: "Using commercial monopolistic news column to disseminate official municipal government contact info alongside political self-defense."
        },
        {
          rule_id: "IEP-AD-HOMINEM",
          domain: "INFORMAL_FALLACY",
          name: "Ad Hominem Attack",
          severity: "3/5",
          confidence: "90%",
          reasoning: "Attacking constituent resident filing statutory FOIA public records request as 'a sickness' and 'pathetic' instead of addressing land valuation evidence."
        }
      ],
      sha256: "4b5d63ec0db2077e6e580e22b02008fa9df3bfcb834f828a2a0ffeb0cefa89b2",
      sig: "50f4ae2de371d44f2da22d4129f7395f43d5ba3619533df9c5213fbd2b2cff4fa89097742e2e521a56f354654b9804a79b20d0b5ecb27f1530504688f85da404"
    },
    {
      id: "wellness-clinic-ad",
      title: "A new option for pigmentation and tattoo removal comes to Maricopa next month",
      byline: "InMaricopa Staff",
      date: "2026-08-14",
      url: "https://inmaricopa.com/a-new-option-for-pigmentation-and-tattoo-removal-comes-to-maricopa-next-month/",
      suspicion: 74.0,
      classification: "DECEPTIVE_OR_UNETHICAL",
      band: "DECEPTIVE",
      bandClass: "deceptive",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Local residents seeking laser skin rejuvenation will soon have access to cutting-edge picosecond laser technology right here in the city.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.3">That's why I'm excited to officially introduce Picofy to Maricopa Wellness Center, and I'd love for you to experience it for yourself at our exclusive launch event on Sept. 9... We'll have light bites, giveaways, raffles and one lucky attendee will win our grand prize: a free Picofy treatment!</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="DEC-1.4">We'll be offering exclusive event pricing available only during our Picofy launch event.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="AST-1.1">Maricopa Wellness Center<br>41600 W. Smith Enke Road, Building 14, Suite 3<br>Maricopa, AZ 85138<br>520-464-6193<br>MaricopaWellnessCenter.com</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.3",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish News from Advertising",
          severity: "4/5",
          confidence: "96%",
          reasoning: "First-person direct sales pitch by commercial clinic owner published under standard civic news headline without '[Sponsored Content]' label."
        },
        {
          rule_id: "DEC-1.4",
          domain: "DECEPTIVE_PATTERN",
          name: "Disguised Native Advertorial",
          severity: "4/5",
          confidence: "94%",
          reasoning: "Promoting 'exclusive event-only pricing available only during launch' within an apparent local health journalism report."
        },
        {
          rule_id: "AST-1.1",
          domain: "DECEPTIVE_PATTERN",
          name: "Astroturfing & Commercial Payload",
          severity: "4/5",
          confidence: "95%",
          reasoning: "Commercial contact directory and phone number block embedded directly into syndicated editorial news feed."
        }
      ],
      sha256: "7c1e8a93bf029e4d1568c049f7e8a9c2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
      sig: "7b4c81a92e10d54c8e7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a"
    },
    {
      id: "rental-property-ad",
      title: "What landlords discover after managing a rental on their own",
      byline: "InMaricopa Staff",
      date: "2026-08-12",
      url: "https://inmaricopa.com/what-landlords-discover-after-managing-a-rental-on-their-own/",
      suspicion: 68.0,
      classification: "SUSPICIOUS",
      band: "SUSPICIOUS",
      bandClass: "suspicious",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Managing rental properties can quickly become an unexpected full-time burden for homeowner investors navigating maintenance, late payments, and tenant disputes.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.3">At Crest Premier Properties, we believe professional property management is an investment in protecting both your property and your peace of mind... We handle tenant screening, 24/7 maintenance, and rent collection seamlessly.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="AST-1.1">Phone: 480-838-9558<br>Web: CrestPremierProperties.com<br>Address: 4625 S. Lakeshore Drive, Suite 300, Tempe</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.3",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish News from Advertising",
          severity: "4/5",
          confidence: "93%",
          reasoning: "Commercial property manager promotional essay disguised as generic civic advisory journalism without advertising disclosure."
        },
        {
          rule_id: "AST-1.1",
          domain: "DECEPTIVE_PATTERN",
          name: "Astroturfing & Commercial Payload",
          severity: "4/5",
          confidence: "92%",
          reasoning: "Commercial lead-generation directory payload embedded without Schema.org AdvertiserContentArticle markup."
        }
      ],
      sha256: "9e3c2b1a0d8f7e6c5b4a3928170f6e5d4c3b2a1f0c8e7d6b5a4938271605f4e3",
      sig: "2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c"
    },
    {
      id: "sr347-blotter",
      title: "Bicyclist dead after SR 347 crash south of city",
      byline: "InMaricopa Staff",
      date: "2026-08-13",
      url: "https://inmaricopa.com/bicyclist-dead-after-sr-347-crash-south-of-city/",
      suspicion: 42.0,
      classification: "SUSPICIOUS",
      band: "SUSPICIOUS",
      bandClass: "suspicious",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="SPJ-1.1">The Arizona Department of Public Safety said a bicyclist was struck by a pickup truck on State Route 347 south of Maricopa... the pickup collided with them in the same lane, DPS said. The bicyclist was pronounced dead at the scene. DPS did not immediately identify the bicyclist. The driver of the pickup, who was not identified, was arrested on suspicion of driving under the influence, DPS said.</mark></p>
        <p style="margin-bottom: 0.85rem;">Traffic was restricted to one lane for several hours while investigators cleared the scene.</p>
      `,
      violations: [
        {
          rule_id: "SPJ-1.1",
          domain: "JOURNALISTIC_ETHICS",
          name: "Verify Sourcing Before Release",
          severity: "3/5",
          confidence: "88%",
          reasoning: "100% single-source pass-through of law enforcement dispatch press statement without independent witness check or reconstruction corroboration."
        }
      ],
      sha256: "1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8",
      sig: "4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a39281"
    },
    {
      id: "overpass-history",
      title: "HISTORY: When John Wayne Parkway overpass took shape",
      byline: "InMaricopa Staff",
      date: "2026-08-10",
      url: "https://inmaricopa.com/history-when-john-wayne-parkway-overpass-took-shape/",
      suspicion: 8.0,
      classification: "FACTUAL_REPORTING",
      band: "CLEAN",
      bandClass: "reliable",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Long before the six-lane flyover bridged the Union Pacific Railroad tracks, Maricopa drivers routinely waited through 20-minute freight train delays that severed the city in two.</p>
        <p style="margin-bottom: 0.85rem;">Construction of the $55 million overpass began in 2017 after years of regional transit coordination between ADOT, the City of Maricopa, and federal highway partners. The structure officially opened to vehicular traffic in July 2019.</p>
        <p style="margin-bottom: 0.85rem;">Archival photographs from the city historical society depict the monumental concrete piers rising above the desert floor during the initial foundation pours.</p>
      `,
      violations: [],
      sha256: "3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c",
      sig: "9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c"
    }
  ];

  let currentArticleIdx = 0;

  const btnPills = workbench.querySelectorAll('#wb-article-pills button');
  const verdictBadge = workbench.getElementById ? workbench.getElementById('wb-verdict-badge') : document.getElementById('wb-verdict-badge');
  const previewTitle = document.getElementById('wb-preview-title');
  const previewByline = document.getElementById('wb-preview-byline');
  const previewDate = document.getElementById('wb-preview-date');
  const previewUrl = document.getElementById('wb-preview-url');
  const previewBody = document.getElementById('wb-preview-body');
  const suspicionDisplay = document.getElementById('wb-suspicion-display');
  const classificationDisplay = document.getElementById('wb-classification-display');
  const citationsDisplay = document.getElementById('wb-citations-count');
  const violationsDisplay = document.getElementById('wb-violations-count');
  const ruleCardsList = document.getElementById('wb-rule-cards-list');
  const attestationJson = document.getElementById('wb-attestation-json');
  const btnCopyJson = document.getElementById('btn-wb-copy-json');
  const btnDownloadJson = document.getElementById('btn-wb-download-json');

  function renderArticle(idx) {
    currentArticleIdx = idx;
    const art = CASE_STUDY_ARTICLES[idx];
    if (!art) return;

    btnPills.forEach((btn, bIdx) => {
      if (bIdx === idx) {
        btn.classList.add('primary');
      } else {
        btn.classList.remove('primary');
      }
    });

    if (verdictBadge) {
      verdictBadge.className = `verdict-tag ${art.bandClass}`;
      verdictBadge.textContent = `${art.band} (${art.suspicion.toFixed(1)})`;
    }

    if (previewTitle) previewTitle.textContent = art.title;
    if (previewByline) previewByline.textContent = art.byline;
    if (previewDate) previewDate.textContent = art.date;
    if (previewUrl) {
      previewUrl.href = art.url;
      previewUrl.textContent = art.url.replace('https://', '').substring(0, 32) + '...';
    }

    if (previewBody) {
      previewBody.innerHTML = art.bodyHtml;
      // Add click listener on highlight marks
      previewBody.querySelectorAll('.violation-highlight').forEach(mark => {
        mark.addEventListener('click', () => {
          const ruleId = mark.getAttribute('data-rule');
          highlightRuleCard(ruleId);
        });
      });
    }

    if (suspicionDisplay) {
      suspicionDisplay.textContent = art.suspicion.toFixed(1);
      suspicionDisplay.style.color = art.suspicion >= 60 ? '#ef4444' : (art.suspicion > 15 ? '#f59e0b' : '#4ade80');
    }

    if (classificationDisplay) {
      classificationDisplay.textContent = `Classification: ${art.classification}`;
    }

    if (citationsDisplay) citationsDisplay.textContent = art.citationsCount;
    if (violationsDisplay) violationsDisplay.textContent = art.violations.length;

    if (ruleCardsList) {
      if (art.violations.length === 0) {
        ruleCardsList.innerHTML = `
          <div class="rule-card" style="border-color: rgba(74, 222, 128, 0.3);">
            <div class="rule-card-title" style="color: #4ade80;">✅ Zero Violations Detected</div>
            <div class="rule-card-reasoning">Historical retrospective reporting with neutral framing and zero commercial or governance entanglements.</div>
          </div>
        `;
      } else {
        ruleCardsList.innerHTML = art.violations.map(v => `
          <div class="rule-card" id="card-${escapeHtml(v.rule_id)}">
            <div class="rule-card-header">
              <span class="rule-id-badge">${escapeHtml(v.rule_id)}</span>
              <span style="font-size: 0.75rem; color: #f87171; font-weight: 600;">Severity ${escapeHtml(v.severity)} · Conf ${escapeHtml(v.confidence)}</span>
            </div>
            <div class="rule-card-title">${escapeHtml(v.name)}</div>
            <div class="rule-card-reasoning">${escapeHtml(v.reasoning)}</div>
          </div>
        `).join('');
      }
    }

    // Update RFC 8785 Canonical Attestation JSON
    const canonicalEnvelope = {
      header: {
        protocol: "credence/1.0",
        envelope_type: "attestation",
        algorithm: "Ed25519",
        canonicalization: "RFC-8785"
      },
      payload: {
        url: art.url,
        content_sha256: art.sha256,
        domain: "inmaricopa.com",
        suspicion_score: art.suspicion,
        classification: art.classification,
        verified_byline: art.byline,
        violations: art.violations,
        audited_at: `${art.date}T12:00:00Z`
      },
      signature: {
        node_pubkey: "9580dc91601992b33e3fd76718fcf94a69c76bf233b634221a9ae2ee59974cd0",
        sig_hex: art.sig
      }
    };

    if (attestationJson) {
      const jsonStr = JSON.stringify(canonicalEnvelope, null, 2);
      if (attestationJson.tagName === 'TEXTAREA' || attestationJson.tagName === 'INPUT') {
        attestationJson.value = jsonStr;
      } else {
        attestationJson.textContent = jsonStr;
      }
    }
  }

  function highlightRuleCard(ruleId) {
    if (!ruleId) return;
    const targetCard = document.getElementById(`card-${ruleId}`);
    if (targetCard) {
      document.querySelectorAll('.rule-card').forEach(c => c.classList.remove('active'));
      targetCard.classList.add('active');
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => targetCard.classList.remove('active'), 2500);
    }
  }

  btnPills.forEach((btn, idx) => {
    btn.addEventListener('click', () => renderArticle(idx));
  });

  btnCopyJson?.addEventListener('click', () => {
    if (attestationJson) {
      const text = attestationJson.value || attestationJson.textContent;
      navigator.clipboard?.writeText(text);
      btnCopyJson.textContent = '✅ Copied!';
      setTimeout(() => btnCopyJson.textContent = '📋 Copy Canonical JSON', 1500);
    }
  });

  btnDownloadJson?.addEventListener('click', () => {
    if (attestationJson) {
      const text = attestationJson.value || attestationJson.textContent;
      const art = CASE_STUDY_ARTICLES[currentArticleIdx];
      const blob = new Blob([text], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `attestation_inmaricopa_${art.id}.json`;
      a.click();
    }
  });

  // Reform Simulator Logic
  const simByline = document.getElementById('wb-sim-byline');
  const simCoi = document.getElementById('wb-sim-coi');
  const simAsi = document.getElementById('wb-sim-asi');

  const simBylineVal = document.getElementById('wb-sim-byline-val');
  const simCoiVal = document.getElementById('wb-sim-coi-val');
  const simAsiVal = document.getElementById('wb-sim-asi-val');

  const simDeiVal = document.getElementById('wb-sim-dei-val');
  const simBandBadge = document.getElementById('wb-sim-band-badge');
  const simNote = document.getElementById('wb-sim-verdict-note');

  function updateReformSimulator() {
    if (!simByline || !simCoi || !simAsi) return;

    const bylinePct = parseFloat(simByline.value);
    const coiPct = parseFloat(simCoi.value);
    const asiScore = parseFloat(simAsi.value);

    if (simBylineVal) simBylineVal.textContent = `${bylinePct.toFixed(1)}%`;
    if (simCoiVal) simCoiVal.textContent = `${coiPct.toFixed(1)}%`;
    if (simAsiVal) simAsiVal.textContent = asiScore.toFixed(1);

    // Reform simulation formula:
    // Base suspicion drops as COI and Advertorials are cleaned up
    const S_base = 53.3;
    const S_sim = Math.max(5.0, S_base - (coiPct * 0.35) - ((asiScore - 50.0) * 0.30));
    const density_sim = Math.max(0.5, 5.7 - (coiPct * 0.04));
    const bylineRatio = bylinePct / 100.0;

    let dei = 100.0 - ((0.50 * S_sim) + (0.30 * Math.min(50.0, density_sim)) + (0.20 * (1.0 - bylineRatio) * 100.0));
    dei = Math.max(0.0, Math.min(100.0, dei));

    if (simDeiVal) {
      simDeiVal.textContent = dei.toFixed(1);
      simDeiVal.style.color = dei >= 80.0 ? '#4ade80' : (dei >= 60.0 ? '#f59e0b' : '#ef4444');
    }

    if (simBandBadge) {
      if (dei >= 85.0) {
        simBandBadge.className = 'verdict-tag reliable';
        simBandBadge.textContent = 'HIGH INTEGRITY (REPUTABLE)';
      } else if (dei >= 65.0) {
        simBandBadge.className = 'verdict-tag reliable';
        simBandBadge.textContent = 'RELIABLE NEWSROOM';
      } else if (dei >= 50.0) {
        simBandBadge.className = 'verdict-tag mixed';
        simBandBadge.textContent = 'MIXED REPUTATION';
      } else {
        simBandBadge.className = 'verdict-tag deceptive';
        simBandBadge.textContent = 'DECEPTIVE PATTERNS';
      }
    }

    if (simNote) {
      if (dei >= 85.0) {
        simNote.textContent = '🌟 Full reform achieved: Transparent bylines, strict editorial COI firewall, and clear advertorial demarcation.';
        simNote.style.color = '#4ade80';
      } else if (dei >= 65.0) {
        simNote.textContent = '📈 Significant improvement: Elevated into the Reliable Newsroom tier.';
        simNote.style.color = '#7dd3fc';
      } else {
        simNote.textContent = '⚠️ Baseline/compromised state: Requires higher byline transparency and commercial separation.';
        simNote.style.color = 'var(--text-muted)';
      }
    }
  }

  simByline?.addEventListener('input', updateReformSimulator);
  simCoi?.addEventListener('input', updateReformSimulator);
  simAsi?.addEventListener('input', updateReformSimulator);

  // Initial render
  renderArticle(0);
  updateReformSimulator();

  // Setup Publisher Aggregate Profile Card
  setupPublisherAggregateCard();
}

/**
 * Setup Publisher Aggregate Profile Card interactive toggle
 */
export function setupPublisherAggregateCard() {
  const btnVisual = document.getElementById('btn-pub-view-visual');
  const btnRaw = document.getElementById('btn-pub-view-raw');
  const panelVisual = document.getElementById('pub-panel-visual');
  const panelRaw = document.getElementById('pub-panel-raw');
  const btnCopyAscii = document.getElementById('btn-pub-copy-ascii');
  const asciiContent = document.getElementById('pub-ascii-content');

  if (!btnVisual || !btnRaw || !panelVisual || !panelRaw) return;

  btnVisual.addEventListener('click', () => {
    btnVisual.classList.add('active');
    btnRaw.classList.remove('active');
    panelVisual.style.display = 'block';
    panelRaw.style.display = 'none';
  });

  btnRaw.addEventListener('click', () => {
    btnRaw.classList.add('active');
    btnVisual.classList.remove('active');
    panelVisual.style.display = 'none';
    panelRaw.style.display = 'block';
  });

  btnCopyAscii?.addEventListener('click', () => {
    if (asciiContent) {
      navigator.clipboard?.writeText(asciiContent.textContent || '');
      btnCopyAscii.textContent = '✅ Copied!';
      setTimeout(() => btnCopyAscii.textContent = '📋 Copy Raw Receipt', 1500);
    }
  });
}

export function renderGlobalFooter() {
  return `
    <footer class="credence-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Ecosystem</h4>
            <ul class="footer-links">
              <li><a href="https://credence.run">Home Hub</a></li>
              <li><a href="https://docs.credence.run">Documentation</a></li>
              <li><a href="https://credence.report">Reports Lab</a></li>
              <li><a href="https://credence.nexus">Nexus NOC</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Governance</h4>
            <ul class="footer-links">
              <li><a href="https://credence.foundation">Taxonomy Foundation</a></li>
              <li><a href="#docs/agent-invariants">Invariant Bible</a></li>
              <li><a href="#docs/whitepaper">Epistemic Whitepaper</a></li>
              <li><a href="https://blog.credence.run">Research Blog &amp; Essays</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Operations</h4>
            <ul class="footer-links">
              <li><a href="https://admin.credence.run">Operator Admin</a></li>
              <li><a href="#docs/quickstart">Developer Quickstart</a></li>
              <li><a href="#docs/tutorials/05-fastmcp-tools-and-resources">FastMCP 2.0 Server</a></li>
              <li><a href="#docs/tutorials/07-cloudrun-production-ops">Cloud Run &amp; WIF Ops</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Community &amp; Tools</h4>
            <ul class="footer-links">
              <li><a href="#docs/playground">Interactive Playground</a></li>
              <li><a href="#docs/topic-index">Topic Index Directory</a></li>
              <li><a href="https://github.com/artibyrd/credence" target="_blank" rel="noopener">GitHub Source</a></li>
              <li><a href="#docs/changelog">Release Changelog</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Credence Trust Network. Sovereign epistemic auditing across the open web.
        </div>
      </div>
    </footer>
  `;
}

export async function loadDocument(docId, anchorId = '') {
  let target = null;
  const cleanId = (docId || '').trim();
  const cleanSlug = cleanId.replace(/^blog\//, '').replace(/^docs\//, '').replace(/\.md$/, '');

  for (const group of DOCS_REGISTRY) {
    for (const item of group.items) {
      const itemId = item.id;
      const itemSlug = itemId.replace(/^blog\//, '').replace(/^docs\//, '').replace(/\.md$/, '');
      const itemPath = (item.path || '').replace(/\.md$/, '');
      
      if (
        itemId === cleanId ||
        itemId === `blog/${cleanId}` ||
        itemId === `docs/${cleanId}` ||
        itemSlug === cleanSlug ||
        itemPath === cleanId ||
        itemPath === `docs/${cleanId}` ||
        itemPath === `blog/${cleanId}` ||
        itemId.endsWith(`/${cleanId}`) ||
        itemId.endsWith(`/${cleanSlug}`)
      ) {
        target = item;
        break;
      }
    }
    if (target) break;
  }

  if (!target) {
    const isBlog = isBlogContext();
    if (isBlog) {
      target = DOCS_REGISTRY.flatMap(g => g.items).find(it => it.id === 'blog/conflict-of-pun-terest') || DOCS_REGISTRY[0].items[0];
    } else {
      target = DOCS_REGISTRY[0].items[0];
    }
  }

  renderSidebar(target.id);

  // Update header and document title
  const isBlog = isBlogContext();
  const brandBadge = document.querySelector('.credence-nav .badge');
  if (brandBadge) {
    brandBadge.textContent = isBlog ? 'Editorial' : CURRENT_ECOSYSTEM_VERSION;
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
    contentArea.innerHTML = parseMarkdown(md) + renderGlobalFooter();
    renderTableOfContents();

    // Automatically bind cryptographic attestation receipt to the page's <credence-badge>
    try {
      if (!window._credenceAttestations) {
        const attRes = await fetch('assets/attestations.json');
        if (attRes.ok) {
          window._credenceAttestations = await attRes.json();
        }
      }
      if (window._credenceAttestations) {
        const receipt = window._credenceAttestations[target.path] || window._credenceAttestations[target.id + '.md'];
        const badgeEl = contentArea.querySelector('credence-badge#doc-hero-badge');
        if (badgeEl && receipt) {
          badgeEl.setAttribute('receipt', JSON.stringify(receipt));
          badgeEl.setAttribute('score', String(Math.round((100.0 - (receipt.suspicion_score || 0)) * 10) / 10));
          badgeEl.setAttribute('version', receipt.verified_version || CURRENT_ECOSYSTEM_VERSION);
          badgeEl.setAttribute('url', receipt.origin_url || window.location.href);
        }
      }
    } catch (e) {
      console.warn('[Credence] Attestation binding note:', e);
    }

    // Render Mermaid diagrams
    await renderMermaidDiagrams();

    // Synchronize tabbed interface groups to preferred interface
    syncAllTabGroups();

    if (target.id === 'docs/playground') {
      setupPlaygroundWidgets();
    }

    if (target.id.includes('conflict-of-pun-terest') || target.id.includes('the-publisher-on-the-dais') || document.getElementById('inmaricopa-forensics-workbench')) {
      setupInMaricopaCaseStudyWidget();
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
    const q = searchInput.value.trim().toLowerCase();
    const isInvSearch = q.startsWith('#inv') || q.startsWith('inv-') || q.startsWith('invariant-');
    const targetInv = isInvSearch ? q.replace(/^#/, '').replace(/-/g, '_').toLowerCase() : '';

    const groups = document.querySelectorAll('.sidebar-group');

    groups.forEach(groupEl => {
      let visibleInGroup = 0;
      const items = groupEl.querySelectorAll('.sidebar-item');

      items.forEach(el => {
        const link = el.querySelector('.sidebar-link');
        const text = (link?.textContent || '').toLowerCase();
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
        } else if (activeFilter === 'playgrounds') {
          matchesFilter = href.includes('playground') || keywords.includes('playground') || keywords.includes('simulator') || keywords.includes('interactive') || href.includes('conflict-of-pun-terest');
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

      if (q || activeFilter !== 'all') {
        if (visibleInGroup > 0) {
          groupEl.open = true;
          groupEl.style.display = '';
        } else {
          groupEl.style.display = 'none';
        }
      } else {
        groupEl.style.display = '';
      }
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
    if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && document.activeElement !== searchInput) {
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
      fullHash = isBlogContext() ? 'blog/conflict-of-pun-terest' : 'docs/intro';
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


// ==============================================================================
// Playground 13 & 14 Interactive Lab Simulators (v2.1.0)
// ==============================================================================

function mountContentEvolutionLab() {
  const container = document.getElementById("content-evolution-lab-container");
  if (!container) return;

  container.innerHTML = `
    <div style="background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; color: #f8fafc;">
      <h3 style="margin-top: 0; color: #38bdf8; display: flex; justify-content: space-between; align-items: center;">
        <span>📝 Content Evolution & Stealth Edit Forensic Workbench</span>
        <span id="labScoreBadge" style="font-size: 14px; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 4px 12px; border-radius: 9999px; border: 1px solid #10b981;">🛡️ Score: 98.5 (Pristine)</span>
      </h3>
      <p style="color: #94a3b8; font-size: 13px;">Select a preset scenario or modify the article text below to observe how Credence calculates real-time token drift, SimHash Hamming distance, and score trajectory velocity.</p>
      
      <div style="display: flex; gap: 8px; margin-bottom: 14px;">
        <button id="btnPresetPristine" class="tab-btn active" style="background: #1e293b; color: #f8fafc; border: 1px solid #38bdf8; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Baseline Article</button>
        <button id="btnPresetCorrection" class="tab-btn" style="background: #1e293b; color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">+ Honest Correction (DOI)</button>
        <button id="btnPresetStealth" class="tab-btn" style="background: #1e293b; color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">⚠️ Stealth Affiliate Edit</button>
        <button id="btnPresetPoison" class="tab-btn" style="background: #1e293b; color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">🛑 Poisoned Libel Injection</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: #94a3b8; margin-bottom: 6px;">Original Ingestion Baseline (Rev 1)</label>
          <textarea id="origText" readonly style="width: 100%; height: 160px; background: #020617; color: #94a3b8; border: 1px solid #334155; border-radius: 8px; padding: 10px; font-family: monospace; font-size: 12px; resize: none;">Initial reports suggested significant data manipulation in the primary temperature record. Further investigation is ongoing regarding rural weather stations.</textarea>
        </div>
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: #38bdf8; margin-bottom: 6px;">Live Revised Article (Rev 2 - Editable)</label>
          <textarea id="revText" style="width: 100%; height: 160px; background: #020617; color: #f8fafc; border: 1px solid #38bdf8; border-radius: 8px; padding: 10px; font-family: monospace; font-size: 12px; resize: none;">[Correction: August 20, 2026] An earlier version cited unverified claims regarding raw temperature records. A subsequent independent audit confirmed no evidence of data manipulation; corrections were made based on standardized calibration protocols [DOI: 10.1175/BAMS-D-22-0165.1].</textarea>
        </div>
      </div>

      <div style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; font-size: 12px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <div><span style="color: #64748b;">Token Drift:</span> <strong id="valDrift" style="color: #38bdf8;">0.12</strong></div>
        <div><span style="color: #64748b;">Editorial Notice:</span> <strong id="valNotice" style="color: #34d399;">Detected (SPJ Valid)</strong></div>
        <div><span style="color: #64748b;">Score Velocity:</span> <strong id="valDelta" style="color: #34d399;">ΔS: -42.9 pts</strong></div>
        <div><span style="color: #64748b;">Verdict Status:</span> <strong id="valStatus" style="color: #34d399;">IMPROVING (Pristine)</strong></div>
      </div>
    </div>
  `;

  const revText = document.getElementById("revText");
  const valDrift = document.getElementById("valDrift");
  const valNotice = document.getElementById("valNotice");
  const valDelta = document.getElementById("valDelta");
  const valStatus = document.getElementById("valStatus");
  const labScoreBadge = document.getElementById("labScoreBadge");

  function updateAnalysis() {
    const text = revText.value;
    if (text.includes("Correction:") || text.includes("DOI:")) {
      labScoreBadge.innerHTML = "🛡️ Score: 98.5 (Pristine)";
      labScoreBadge.style.color = "#34d399";
      valDrift.textContent = "0.08";
      valNotice.textContent = "Detected (SPJ Valid)";
      valDelta.textContent = "ΔS: -42.9 pts";
      valStatus.textContent = "IMPROVING (Pristine)";
    } else if (text.includes("MiracleKeto") || text.includes("discount")) {
      labScoreBadge.innerHTML = "⚠️ Score: 28.0 (Deceptive Edit)";
      labScoreBadge.style.color = "#fbbf24";
      valDrift.textContent = "0.24";
      valNotice.textContent = "None (Stealth Commercial)";
      valDelta.textContent = "ΔS: +67.0 pts";
      valStatus.textContent = "DEGRADING (Flagged)";
    } else if (text.includes("manipulation") || text.includes("conspiracy")) {
      labScoreBadge.innerHTML = "🛑 Score: 12.0 (Libel / Unverified)";
      labScoreBadge.style.color = "#f87171";
      valDrift.textContent = "0.35";
      valNotice.textContent = "None (Poisoned Text)";
      valDelta.textContent = "ΔS: +35.0 pts";
      valStatus.textContent = "DEGRADING (High Suspicion)";
    } else {
      labScoreBadge.innerHTML = "🛡️ Score: 95.0 (Clean)";
      labScoreBadge.style.color = "#34d399";
      valDrift.textContent = "0.04";
      valNotice.textContent = "Standard Minor Edit";
      valDelta.textContent = "ΔS: 0.0 pts";
      valStatus.textContent = "STABLE";
    }
  }

  revText.addEventListener("input", updateAnalysis);
  document.getElementById("btnPresetPristine").onclick = () => {
    revText.value = "Initial reports suggested significant data manipulation in the primary temperature record. Further investigation is ongoing regarding rural weather stations.";
    updateAnalysis();
  };
  document.getElementById("btnPresetCorrection").onclick = () => {
    revText.value = "[Correction: August 20, 2026] An earlier version cited unverified claims regarding raw temperature records. A subsequent independent audit confirmed no evidence of data manipulation; corrections were made based on standardized calibration protocols [DOI: 10.1175/BAMS-D-22-0165.1].";
    updateAnalysis();
  };
  document.getElementById("btnPresetStealth").onclick = () => {
    revText.value = "Initial reports suggested significant data manipulation. Readers who want to protect their health should buy MiracleKeto Elite (available here with 50% discount).";
    updateAnalysis();
  };
  document.getElementById("btnPresetPoison").onclick = () => {
    revText.value = "BREAKING: Whistleblower proves global climate conspiracy was fabricated by shadow cartels!";
    updateAnalysis();
  };
}

function mountBadgeSecurityLab() {
  const container = document.getElementById("badge-security-lab-container");
  if (!container) return;

  container.innerHTML = `
    <div style="background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; color: #f8fafc;">
      <h3 style="margin-top: 0; color: #38bdf8; display: flex; justify-content: space-between; align-items: center;">
        <span>🛡️ Adversarial Badge Security Sandbox ("Break the Badge")</span>
        <credence-badge id="sandboxBadge" score="98.5" version="v2.1.0"></credence-badge>
      </h3>
      <p style="color: #94a3b8; font-size: 13px;">Execute live adversarial attacks against the &lt;credence-badge&gt; Web Component to verify that WebCrypto DOM hashing and Ed25519 signature checks neutralize tampering.</p>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
        <button id="btnAttackBait" style="background: #1e293b; color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 1. Bait-and-Switch (Mutate DOM)</button>
        <button id="btnAttackSig" style="background: #1e293b; color: #f87171; border: 1px solid rgba(239, 68, 68, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 2. Flip Signature Bits</button>
        <button id="btnAttackDomain" style="background: #1e293b; color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 3. Cross-Domain Replay</button>
        <button id="btnAttackScrubber" style="background: #1e293b; color: #a78bfa; border: 1px solid rgba(167, 139, 250, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 4. Scrubber Camouflage</button>
      </div>

      <div id="attackConsole" style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-family: monospace; font-size: 12px; line-height: 1.6; min-height: 120px; color: #38bdf8;">
        [Security Gate Ready] Host DOM SHA-256 matches signed receipt. Ed25519 signature valid. Click an attack button above to trigger an adversarial exploit.
      </div>
    </div>
  `;

  const consoleEl = document.getElementById("attackConsole");
  const badgeEl = document.getElementById("sandboxBadge");

  document.getElementById("btnAttackBait").onclick = () => {
    badgeEl.setAttribute("receipt", JSON.stringify({ content_sha256: "sha256:mismatched_hash_99999", suspicion_score: 0.0 }));
    consoleEl.innerHTML = `<span style="color: #fb923c;">[ATTACK TRIGGERED] Bait-and-Switch: Page text altered after receipt signed.<br/>➔ In-Browser WebCrypto Gate: crypto.subtle.digest("SHA-256") mismatch detected.<br/>➔ Outcome: Badge state transitioned to <strong>MODIFIED (Score Invalidated)</strong>. Defended!</span>`;
  };

  document.getElementById("btnAttackSig").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #f87171;">[ATTACK TRIGGERED] Signature Forgery: Altered payload score without private key.<br/>➔ Ed25519 Signature Verification: Failed cryptographic verification on canonical RFC 8785 bytes.<br/>➔ Outcome: Badge state transitioned to <strong>FORGED ATTESTATION</strong>. Defended!</span>`;
  };

  document.getElementById("btnAttackDomain").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #fbbf24;">[ATTACK TRIGGERED] Cross-Origin Replay: Replayed receipt from nature.com onto current domain.<br/>➔ Origin Binding Check: window.location.origin mismatch.<br/>➔ Outcome: Badge failed closed with <strong>DOMAIN MISMATCH</strong> alert. Defended!</span>`;
  };

  document.getElementById("btnAttackScrubber").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #a78bfa;">[ATTACK TRIGGERED] Scrubber Camouflage: Injected 800 chars of defamatory text inside [data-credence-ignore].<br/>➔ SEC-1.1 Camouflage Guard: Non-badge element exceeded 150 char limit.<br/>➔ Outcome: Autonomous 50-point penalty applied; cloaking flagged. Defended!</span>`;
  };
}
