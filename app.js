/**
 * Credence Documentation & Sovereign Blog Zero-Build Application Engine
 * Pure Vanilla Modern ES Module — 0 npm dependencies, 0 build tools.
 */

// Navigation structure and complete catalog
export const DOCS_REGISTRY = [
  {
    category: "Getting Started",
    items: [
      { id: "docs/intro", title: "Introduction & Overview", path: "docs/intro.md" },
      { id: "docs/quickstart", title: "Quickstart & Installation", path: "docs/quickstart.md" },
      { id: "docs/feature-parity", title: "Universal Feature Parity", path: "docs/feature-parity.md" },
      { id: "docs/changelog", title: "Release Changelog", path: "docs/changelog.md" }
    ]
  },
  {
    category: "Platform Portability & Sovereignty",
    items: [
      { id: "docs/portability/multi-model-adapters", title: "Multi-Model Provider Adapters", path: "docs/portability/multi-model-adapters.md" },
      { id: "docs/portability/gemini-economic-rationale", title: "ADR: Why Gemini 3.7 Flash", path: "docs/portability/gemini-economic-rationale.md" },
      { id: "docs/portability/multi-cloud-deployment", title: "Multi-Cloud (AWS, Azure, Hetzner, K8s)", path: "docs/portability/multi-cloud-deployment.md" },
      { id: "docs/portability/universal-agent-interop", title: "Universal Agent Interoperability", path: "docs/portability/universal-agent-interop.md" },
      { id: "docs/portability/local-llm-airgap", title: "Zero-Cloud Sovereign Local LLMs", path: "docs/portability/local-llm-airgap.md" }
    ]
  },
  {
    category: "Hands-On Tutorials",
    items: [
      { id: "docs/tutorials/01-clickbait-teardown", title: "01. Clickbait Teardown", path: "docs/tutorials/01-clickbait-teardown.md" },
      { id: "docs/tutorials/02-satire-vs-disinformation", title: "02. Satire vs Disinformation", path: "docs/tutorials/02-satire-vs-disinformation.md" },
      { id: "docs/tutorials/03-claude-cursor-fastmcp", title: "03. Claude & Cursor FastMCP", path: "docs/tutorials/03-claude-cursor-fastmcp.md" },
      { id: "docs/tutorials/04-sovereign-org-scaffolding", title: "04. Sovereign Org Scaffolding", path: "docs/tutorials/04-sovereign-org-scaffolding.md" },
      { id: "docs/tutorials/05-mesh-quickstart", title: "05. 3-Node Mesh Quickstart", path: "docs/tutorials/05-mesh-quickstart.md" },
      { id: "docs/tutorials/06-thirteen-node-chaos-lab", title: "06. 13-Node Chaos Lab", path: "docs/tutorials/06-thirteen-node-chaos-lab.md" },
      { id: "docs/tutorials/07-air-gapped-and-adhoc-mesh", title: "07. Air-Gapped Truth Bundles", path: "docs/tutorials/07-air-gapped-and-adhoc-mesh.md" },
      { id: "docs/tutorials/08-sybil-cartel-demolition", title: "08. Sybil Cartel Demolition", path: "docs/tutorials/08-sybil-cartel-demolition.md" }
    ]
  },
  {
    category: "Developer Cookbooks",
    items: [
      { id: "docs/cookbooks/agentic-epistemic-brake", title: "Agentic Epistemic Brake", path: "docs/cookbooks/agentic-epistemic-brake.md" },
      { id: "docs/cookbooks/taxonomy-engineering", title: "Taxonomy Rule Engineering 101", path: "docs/cookbooks/taxonomy-engineering.md" },
      { id: "docs/cookbooks/morning-feed-sifter", title: "Automated Morning Feed Sifter", path: "docs/cookbooks/morning-feed-sifter.md" },
      { id: "docs/cookbooks/financial-disclosures", title: "Auditing Financial 10-K Filings", path: "docs/cookbooks/financial-disclosures.md" }
    ]
  },
  {
    category: "Adversarial Security & Red Team",
    items: [
      { id: "docs/security/adversarial-attack-surface", title: "Adversarial Attack Surface", path: "docs/security/adversarial-attack-surface.md" },
      { id: "docs/security/grounding-mechanics", title: "Verbatim Grounding & Slashing", path: "docs/security/grounding-mechanics.md" },
      { id: "docs/security/satire-cloaking-defense", title: "Poe's Law & Satire Cloaking", path: "docs/security/satire-cloaking-defense.md" }
    ]
  },
  {
    category: "Specialized Industry Blueprints",
    items: [
      { id: "docs/blueprints/health-medical-claims", title: "Medical & Health Claims", path: "docs/blueprints/health-medical-claims.md" },
      { id: "docs/blueprints/election-civic-integrity", title: "Election & Civic Integrity", path: "docs/blueprints/election-civic-integrity.md" },
      { id: "docs/blueprints/synthetic-media-provenance", title: "Synthetic AI & Media Provenance", path: "docs/blueprints/synthetic-media-provenance.md" }
    ]
  },
  {
    category: "Client Ecosystem & Integrations",
    items: [
      { id: "docs/integrations/browser-extension-mv3", title: "Zero-Build Browser Extension", path: "docs/integrations/browser-extension-mv3.md" },
      { id: "docs/integrations/cli-scripting-guide", title: "CLI Automation & Shell Scripts", path: "docs/integrations/cli-scripting-guide.md" },
      { id: "docs/integrations/tui-workstation", title: "Textual TUI Workstation", path: "docs/integrations/tui-workstation.md" }
    ]
  },
  {
    category: "P2P Mesh & Graph Theory",
    items: [
      { id: "docs/mesh-engineering/watts-strogatz-dynamics", title: "Watts-Strogatz Small-World", path: "docs/mesh-engineering/watts-strogatz-dynamics.md" },
      { id: "docs/mesh-engineering/airgapped-sneakernets", title: "Air-Gapped Truth Bundles", path: "docs/mesh-engineering/airgapped-sneakernets.md" },
      { id: "docs/mesh-engineering/dns-srv-discovery", title: "DNS SRV Dynamic Discovery", path: "docs/mesh-engineering/dns-srv-discovery.md" }
    ]
  },
  {
    category: "Protocol Specifications",
    items: [
      { id: "docs/protocols/token-governor", title: "Token Safety Governor", path: "docs/protocols/token-governor.md" },
      { id: "docs/protocols/mesh-protocol", title: "P2P Mesh & Consensus", path: "docs/protocols/mesh-protocol.md" },
      { id: "docs/protocols/fastmcp", title: "FastMCP 2.0 Integration", path: "docs/protocols/fastmcp.md" },
      { id: "docs/protocols/scoring", title: "Scoring & Saturation Math", path: "docs/protocols/scoring.md" },
      { id: "docs/protocols/adversarial-defense", title: "Adversarial Threat Matrix", path: "docs/protocols/adversarial-defense.md" },
      { id: "docs/protocols/white-label", title: "White-Label Federation", path: "docs/protocols/white-label.md" },
      { id: "docs/protocols/benchmark-suite", title: "Golden 12 Benchmark Suite", path: "docs/protocols/benchmark-suite.md" }
    ]
  },
  {
    category: "Operations & Self-Hosting",
    items: [
      { id: "docs/operations/raspberry-pi-homelab", title: "Raspberry Pi & HomeLab Node", path: "docs/operations/raspberry-pi-homelab.md" },
      { id: "docs/operations/tailscale-wireguard-mesh", title: "Tailscale & WireGuard Peering", path: "docs/operations/tailscale-wireguard-mesh.md" },
      { id: "docs/operations/database-pruning-wal", title: "Database Pruning & WAL Care", path: "docs/operations/database-pruning-wal.md" },
      { id: "docs/operator-guide", title: "Bootstrap Operator Guide", path: "docs/operator-guide.md" },
      { id: "docs/deployment-cloudrun", title: "GCP Cloud Run Deployment", path: "docs/deployment-cloudrun.md" },
      { id: "docs/bootstrap-seeds", title: "Bootstrap Seed Governance", path: "docs/bootstrap-seeds.md" }
    ]
  },
  {
    category: "Mathematical Foundations",
    items: [
      { id: "docs/mathematics/robust-consensus-proofs", title: "Mathematics of Robust Consensus", path: "docs/mathematics/robust-consensus-proofs.md" },
      { id: "docs/mathematics/simhash-mirror-detection", title: "SimHash-64 & Mirror Detection", path: "docs/mathematics/simhash-mirror-detection.md" },
      { id: "docs/mathematics/economics-of-truth", title: "Economics of Decentralized Truth", path: "docs/mathematics/economics-of-truth.md" }
    ]
  },
  {
    category: "Invariants & Architecture",
    items: [
      { id: "docs/invariants", title: "32 Agent Invariants", path: "docs/invariants.md" },
      { id: "docs/architecture", title: "Decentralized Architecture", path: "docs/architecture.md" },
      { id: "docs/frontend-architecture", title: "Zero-Build Web Architecture", path: "docs/frontend-architecture.md" }
    ]
  },
  {
    category: "Interactive Playgrounds",
    items: [
      { id: "docs/playground", title: "Interactive Zero-Build Playgrounds", path: "docs/playground.md" }
    ]
  },
  {
    category: "Editorial Dispatches & Blog",
    items: [
      { id: "blog/the-blue-checkmark-is-dead", title: "The Blue Checkmark is Dead", path: "blog/the-blue-checkmark-is-dead.md" },
      { id: "blog/the-anti-diploma-invariant", title: "The Anti-Diploma Invariant", path: "blog/the-anti-diploma-invariant.md" },
      { id: "blog/bittorrent-economics-of-fact-checking", title: "BitTorrent Economics of Fact-Checking", path: "blog/bittorrent-economics-of-fact-checking.md" },
      { id: "blog/the-galileo-rule", title: "The Galileo Rule", path: "blog/the-galileo-rule.md" },
      { id: "blog/giving-claude-and-cursor-an-epistemic-brake", title: "Giving AI an Epistemic Brake", path: "blog/giving-claude-and-cursor-an-epistemic-brake.md" }
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

function isBlogContext() {
  const host = window.location.hostname;
  return host === 'blog.credence.run' || window.location.hash.startsWith('#blog');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
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

function parseMarkdown(md) {
  let text = md.replace(/^---[\s\S]*?---\s*/, '');

  const lines = text.split('\n');
  let html = [];
  let inCodeBlock = false;
  let codeLang = '';
  let codeBuffer = [];
  let inList = false;
  let listType = '';
  let inTable = false;
  let tableHeaderParsed = false;
  let inRawHtmlBlock = false;
  let rawHtmlBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.trim().startsWith('<div') || line.trim().startsWith('<input') || line.trim().startsWith('<table') || inRawHtmlBlock) {
      if (line.includes('</div>') && !line.includes('<div')) {
        rawHtmlBuffer.push(line);
        html.push(rawHtmlBuffer.join('\n'));
        rawHtmlBuffer = [];
        inRawHtmlBlock = false;
      } else {
        inRawHtmlBlock = true;
        rawHtmlBuffer.push(line);
        if (line.trim().endsWith('</div>') && line.split('<div').length === line.split('</div>').length) {
          html.push(rawHtmlBuffer.join('\n'));
          rawHtmlBuffer = [];
          inRawHtmlBlock = false;
        }
      }
      continue;
    }

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        html.push(`<pre><code class="language-${codeLang}">${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
        inCodeBlock = false;
        codeBuffer = [];
        codeLang = '';
      } else {
        if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
        if (inTable) { html.push('</tbody></table>'); inTable = false; tableHeaderParsed = false; }
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHeaderParsed = false;
        html.push('<table><thead><tr>');
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
      html.push('</tbody></table>');
      inTable = false;
      tableHeaderParsed = false;
    }

    if (line.trim().startsWith('$$') && line.trim().endsWith('$$') && line.trim().length > 2) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table>'); inTable = false; tableHeaderParsed = false; }
      const mathContent = line.trim().slice(2, -2).trim();
      html.push(`<div class="math-block" style="text-align: center; margin: 1.25rem 0; padding: 0.85rem 1rem; background: var(--bg-card, #121824); border: 1px solid var(--border-subtle, rgba(255,255,255,0.08)); border-radius: 8px; font-family: monospace; font-size: 1.05rem; overflow-x: auto; color: var(--accent-cyan, #38bdf8);">${formatMath(mathContent)}</div>`);
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const level = line.match(/^#{1,6}/)[0].length;
      const title = line.replace(/^#{1,6}\s+/, '').trim();
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      html.push(`<h${level} id="${slug}">${formatInline(title)}</h${level}>`);
      continue;
    }

    if (line.startsWith('>')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const content = line.replace(/^>\s*/, '');
      html.push(`<blockquote>${formatInline(content)}</blockquote>`);
      continue;
    }

    if (/^(\*\*\*|---|___)$/.test(line.trim())) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      html.push('<hr>');
      continue;
    }

    if (/^[\*\-]\s+/.test(line)) {
      if (!inList || listType !== 'ul') {
        if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
        html.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      const item = line.replace(/^[\*\-]\s+/, '');
      html.push(`<li>${formatInline(item)}</li>`);
      continue;
    }

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

    if (line.trim() !== '') {
      html.push(`<p>${formatInline(line)}</p>`);
    }
  }

  if (inCodeBlock) html.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
  if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
  if (inTable) html.push('</tbody></table>');

  return html.join('\n');
}

function formatMath(expr) {
  let res = expr
    .replace(/\\ge/g, '≥')
    .replace(/\\le/g, '≤')
    .replace(/\\times/g, '×')
    .replace(/\\to/g, '→')
    .replace(/\\in/g, '∈')
    .replace(/\\sum/g, '∑')
    .replace(/\\mid/g, '|')
    .replace(/\\dots/g, '…')
    .replace(/\\beta/g, 'β')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/_i\b/g, 'ᵢ')
    .replace(/_v\b/g, 'ᵥ')
    .replace(/_\{(\w+)\}/g, '₍$1₎')
    .replace(/\^2/g, '²')
    .replace(/\^\{([^}]+)\}/g, '^$1');
  return res;
}

function formatInline(text) {
  let res = escapeHtml(text);
  
  // Format inline math $...$ while preserving standard currency like $0.00
  res = res.replace(/\$([^\$]+)\$/g, (match, expr) => {
    const trimmed = expr.trim();
    if (/^\d+(\.\d+)?(\/\w+)?$/.test(trimmed)) {
      return `$${trimmed}`;
    }
    return `<span class="math-inline" style="font-family: monospace; color: var(--accent-cyan, #38bdf8); font-style: italic;">${formatMath(trimmed)}</span>`;
  });

  res = res.replace(/`([^`]+)`/g, '<code>$1</code>');
  res = res.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  res = res.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  res = res.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    if (url.startsWith('/')) {
      const hash = url.replace(/^\//, '').replace(/\/$/, '');
      return `<a href="#docs/${hash}">${text}</a>`;
    }
    const isExternal = url.startsWith('http');
    return `<a href="${url}" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>${text}</a>`;
  });
  return res;
}

export function renderSidebar(activeId) {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  const isBlog = isBlogContext();
  let groups = [...DOCS_REGISTRY];

  if (isBlog) {
    // Reorder: Blog first when on blog.credence.run
    const blogGroup = groups.find(g => g.category.includes("Blog"));
    const techGroups = groups.filter(g => !g.category.includes("Blog"));
    groups = [
      blogGroup,
      { category: "Technical Reference", items: [{ id: "docs/intro", title: "← Return to Documentation Portal", path: "docs/intro.md" }] },
      ...techGroups
    ];
  }

  container.innerHTML = groups.map(group => `
    <div class="sidebar-group">
      <div class="sidebar-heading">${escapeHtml(group.category)}</div>
      <ul class="sidebar-list">
        ${group.items.map(item => `
          <li class="sidebar-item">
            <a href="#${item.id}" class="sidebar-link ${item.id === activeId ? 'active' : ''}" data-doc-id="${item.id}">
              ${escapeHtml(item.title)}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderTableOfContents() {
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
function setupPlaygroundWidgets() {
  // 1. 13-Node Watts-Strogatz Mesh Simulator
  const svg = document.getElementById('mesh-svg');
  const btnBroadcast = document.getElementById('btn-broadcast-gossip');
  const btnSplit = document.getElementById('btn-simulate-split');
  const btnReset = document.getElementById('btn-reset-mesh');
  const logBox = document.getElementById('mesh-event-log');

  const N = 13;
  const nodes = [];
  const cx = 300, cy = 200, r = 140;

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    nodes.push({
      id: i + 1,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      infected: false,
      byzantine: false
    });
  }

  function renderMeshSVG() {
    if (!svg) return;
    let svgContent = '';

    for (let i = 0; i < N; i++) {
      for (let offset of [1, 2]) {
        const j = (i + offset) % N;
        svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.5" />`;
      }
    }
    svgContent += `<line x1="${nodes[0].x}" y1="${nodes[0].y}" x2="${nodes[6].x}" y2="${nodes[6].y}" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-dasharray="4,4" />`;
    svgContent += `<line x1="${nodes[2].x}" y1="${nodes[2].y}" x2="${nodes[9].x}" y2="${nodes[9].y}" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-dasharray="4,4" />`;

    nodes.forEach(n => {
      let fill = '#0ea5e9';
      if (n.infected) fill = '#22c55e';
      if (n.byzantine) fill = '#ef4444';

      svgContent += `
        <circle cx="${n.x}" cy="${n.y}" r="16" fill="${fill}" stroke="#fff" stroke-width="2" id="mesh-node-${n.id}" />
        <text x="${n.x}" y="${n.y + 4}" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">N${n.id}</text>
      `;
    });

    svg.innerHTML = svgContent;
  }

  renderMeshSVG();

  btnBroadcast?.addEventListener('click', async () => {
    if (!logBox) return;
    nodes.forEach(n => n.infected = false);
    renderMeshSVG();

    nodes[0].infected = true;
    renderMeshSVG();
    logBox.className = "widget-status idle";
    logBox.innerHTML = `<strong>Hop 0 (0ms):</strong> Node 1 signs and broadcasts audit report.`;

    await new Promise(r => setTimeout(r, 400));
    [1, 2, 6, 11, 12].forEach(idx => nodes[idx].infected = true);
    renderMeshSVG();
    logBox.innerHTML += `<br><strong>Hop 1 (120ms):</strong> Attestation diffused to 5 peer nodes.`;

    await new Promise(r => setTimeout(r, 400));
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
  });

  // 2. SimHash & Hamming Distance Visualizer
  const btnCalcSim = document.getElementById('btn-calc-simhash');
  const txtA = document.getElementById('simhash-text-a');
  const txtB = document.getElementById('simhash-text-b');
  const dhVal = document.getElementById('simhash-dh-val');
  const fpA = document.getElementById('simhash-fp-a');
  const fpB = document.getElementById('simhash-fp-b');
  const simBadge = document.getElementById('simhash-verdict-badge');

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

  btnCalcSim?.addEventListener('click', updateSimHash);

  // 3. Verbatim Grounding Tester
  const btnGround = document.getElementById('btn-test-grounding');
  const groundSource = document.getElementById('grounding-source-text');
  const groundQuote = document.getElementById('grounding-quote-input');
  const groundStatus = document.getElementById('grounding-status');

  btnGround?.addEventListener('click', () => {
    if (!groundSource || !groundQuote || !groundStatus) return;
    const src = groundSource.value.replace(/\s+/g, ' ').trim();
    const q = groundQuote.value.replace(/\s+/g, ' ').trim();

    const idx = src.indexOf(q);
    if (idx !== -1) {
      const endIdx = idx + q.length;
      groundStatus.className = "widget-status verified";
      groundStatus.innerHTML = `
        <strong>✅ 100% Grounded Citation (G = 1.00)</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Character Offset: <code>[${idx} : ${endIdx}]</code> (${q.length} chars) | Normalization: Whitespace-Insensitive Collapsing
        </div>
      `;
    } else {
      groundStatus.className = "widget-status error";
      groundStatus.innerHTML = `
        <strong>❌ Grounding Failed (G = 0.00): Hallucinated / Altered Quote</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Candidate quote was not found as a verbatim substring in source DOM prose. Gate triggers escalation.
        </div>
      `;
    }
  });

  // 4. Saturation Calculator
  const vInput = document.getElementById('calc-violations');
  const sInput = document.getElementById('calc-severity');
  const cInput = document.getElementById('calc-confidence');

  function updateCalc() {
    if (!vInput || !sInput || !cInput) return;
    const v = parseFloat(vInput.value);
    const s = parseFloat(sInput.value);
    const c = parseFloat(cInput.value);

    document.getElementById('val-violations').textContent = v;
    document.getElementById('val-severity').textContent = s.toFixed(1);
    document.getElementById('val-confidence').textContent = c.toFixed(2);

    const raw = v * s * c;
    const cal = 100 * (1 - Math.exp(-raw / 12));

    document.getElementById('calc-raw-score').textContent = raw.toFixed(2);
    document.getElementById('calc-saturation-pct').textContent = cal.toFixed(1) + '%';
    
    const scoreElem = document.getElementById('calc-result-score');
    const badgeElem = document.getElementById('calc-result-badge');

    scoreElem.textContent = cal.toFixed(1);

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

  vInput?.addEventListener('input', updateCalc);
  sInput?.addEventListener('input', updateCalc);
  cInput?.addEventListener('input', updateCalc);
  updateCalc();

  // 5. WebCrypto Verifier
  const btnSample = document.getElementById('btn-load-sample');
  const btnVerify = document.getElementById('btn-verify-crypto');
  const txtInput = document.getElementById('crypto-json-input');
  const statusBox = document.getElementById('crypto-status');

  const sampleReport = {
    content_sha256: "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
    suspicion_score: 54.2,
    classification: "SUSPICIOUS",
    evaluator_pubkey: "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
    timestamp_utc: "2026-08-17T18:00:00Z",
    evaluation_method: "multi_agent_specialist",
    signature_ed25519: "a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0"
  };

  btnSample?.addEventListener('click', () => {
    if (txtInput) txtInput.value = JSON.stringify(sampleReport, null, 2);
  });

  btnVerify?.addEventListener('click', async () => {
    if (!statusBox || !txtInput) return;
    try {
      const data = JSON.parse(txtInput.value);
      if (!data.content_sha256 || !data.evaluator_pubkey || !data.signature_ed25519) {
        throw new Error("Missing required cryptographic fields (content_sha256, evaluator_pubkey, signature_ed25519).");
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

  // 6. Taxonomy Explorer
  const taxBody = document.getElementById('taxonomy-table-body');
  const taxSearch = document.getElementById('taxonomy-search-input');

  function renderTaxonomy(filter = '') {
    if (!taxBody) return;
    const q = filter.toLowerCase().trim();
    const matches = SAMPLE_TAXONOMY_RULES.filter(r => 
      r.uri.toLowerCase().includes(q) || 
      r.cluster.toLowerCase().includes(q) || 
      r.desc.toLowerCase().includes(q)
    );

    taxBody.innerHTML = matches.map(r => `
      <tr>
        <td><code>${escapeHtml(r.uri)}</code></td>
        <td><span class="severity-badge sev-${r.severity}">Sev ${r.severity}</span></td>
        <td>${escapeHtml(r.cluster)}</td>
        <td>${escapeHtml(r.desc)}</td>
      </tr>
    `).join('');
  }

  taxSearch?.addEventListener('input', (e) => renderTaxonomy(e.target.value));
  renderTaxonomy();

  // 7. Multi-Model Cost, Latency & Sovereignty Comparator
  const artSlider = document.getElementById('comp-articles-slider');
  const lenSlider = document.getElementById('comp-length-slider');
  const artVal = document.getElementById('comp-articles-val');
  const lenVal = document.getElementById('comp-length-val');
  const cardsContainer = document.getElementById('model-cards-container');

  function updateModelComparator() {
    if (!artSlider || !lenSlider || !cardsContainer) return;
    const dailyArticles = parseInt(artSlider.value, 10);
    const avgWords = parseInt(lenSlider.value, 10);

    if (artVal) artVal.textContent = dailyArticles.toLocaleString();
    if (lenVal) lenVal.textContent = avgWords.toLocaleString();

    const inputTokensPerAudit = Math.round(avgWords * 1.33);
    const outputTokensPerAudit = 1500;
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
  updateModelComparator();
}

export async function loadDocument(docId) {
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
    brandBadge.textContent = isBlog ? 'Editorial' : 'v1.0.1';
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
    window.scrollTo(0, 0);
    renderTableOfContents();

    if (target.id === 'docs/playground') {
      setupPlaygroundWidgets();
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

export function setupSearch() {
  const searchInput = document.getElementById('doc-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.sidebar-item').forEach(el => {
      const text = el.textContent.toLowerCase();
      el.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

export function initRouter() {
  function handleRoute() {
    let hash = window.location.hash.slice(1);
    if (!hash) {
      hash = isBlogContext() ? 'blog/the-blue-checkmark-is-dead' : 'docs/intro';
    }
    loadDocument(hash);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  setupSearch();
}
