/**
 * Credence Documentation & Sovereign Blog Zero-Build Application Engine
 * Pure Vanilla Modern ES Module — 0 npm dependencies, 0 build tools.
 */

// Navigation structure and catalog
export const DOCS_REGISTRY = [
  {
    category: "Getting Started",
    items: [
      { id: "docs/intro", title: "Introduction & Overview", path: "docs/intro.md" },
      { id: "docs/quickstart", title: "Quickstart & Installation", path: "docs/quickstart.md" },
      { id: "docs/feature-parity", title: "Universal Feature Parity", path: "docs/feature-parity.md" }
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
    category: "Operations & Mesh",
    items: [
      { id: "docs/operator-guide", title: "Bootstrap Operator Guide", path: "docs/operator-guide.md" },
      { id: "docs/deployment-cloudrun", title: "GCP Cloud Run Deployment", path: "docs/deployment-cloudrun.md" },
      { id: "docs/bootstrap-seeds", title: "Bootstrap Seed Governance", path: "docs/bootstrap-seeds.md" }
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

// Helper: Escape HTML
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Lightweight Zero-Dependency Markdown Parser
function parseMarkdown(md) {
  // Strip YAML frontmatter
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

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Fenced code blocks
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

    // Tables
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // Separator row
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

    // Headers with automatic ID generation for Table of Contents
    if (/^#{1,6}\s+/.test(line)) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const level = line.match(/^#{1,6}/)[0].length;
      const title = line.replace(/^#{1,6}\s+/, '').trim();
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      html.push(`<h${level} id="${slug}">${formatInline(title)}</h${level}>`);
      continue;
    }

    // Blockquotes & GitHub Alerts
    if (line.startsWith('>')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const content = line.replace(/^>\s*/, '');
      html.push(`<blockquote>${formatInline(content)}</blockquote>`);
      continue;
    }

    // Horizontal rules
    if (/^(\*\*\*|---|___)$/.test(line.trim())) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      html.push('<hr>');
      continue;
    }

    // Unordered list
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

    // Ordered list
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

    // Paragraph
    if (line.trim() !== '') {
      html.push(`<p>${formatInline(line)}</p>`);
    }
  }

  if (inCodeBlock) html.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
  if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>');
  if (inTable) html.push('</tbody></table>');

  return html.join('\n');
}

// Inline formatting (code, bold, italics, links)
function formatInline(text) {
  let res = escapeHtml(text);

  // Inline code
  res = res.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold & Italic
  res = res.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  res = res.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Links
  res = res.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    // If internal docs link, transform to hash route
    if (url.startsWith('/')) {
      const hash = url.replace(/^\//, '').replace(/\/$/, '');
      return `<a href="#docs/${hash}">${text}</a>`;
    }
    const isExternal = url.startsWith('http');
    return `<a href="${url}" ${isExternal ? 'target="_blank" rel="noopener"' : ''}>${text}</a>`;
  });

  return res;
}

// Render sidebar navigation
export function renderSidebar(activeId) {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  container.innerHTML = DOCS_REGISTRY.map(group => `
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

// Generate in-page Table of Contents
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

// Load and render document by ID
export async function loadDocument(docId) {
  // Find doc in registry
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
    target = DOCS_REGISTRY[0].items[0];
  }

  renderSidebar(target.id);

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

// Global Search Filter
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

// Router & initialization
export function initRouter() {
  function handleRoute() {
    const hash = window.location.hash.slice(1) || 'docs/intro';
    loadDocument(hash);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  setupSearch();
}
