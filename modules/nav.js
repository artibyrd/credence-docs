/**
 * Credence Documentation Navigation, Sidebar, Footer & Social Metadata
 * Zero-npm native ES module.
 */

import { DOCS_REGISTRY } from '../app.js';
import { getCleanRelativePath, getCanonicalDocUrl, isBlogContext, getDocsBaseUrl, getBlogBaseUrl } from './router.js';
import { scrollToAnchor } from './doc-loader.js';
import { escapeHtml } from './formatters.js';

export function updateSearchPills(activeFilter = 'all') {
  const isBlog = isBlogContext();
  const pillsContainer = document.getElementById('search-filter-pills');
  if (!pillsContainer) return;

  if (isBlog) {
    pillsContainer.innerHTML = `
      <button type="button" class="filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
      <button type="button" class="filter-pill ${activeFilter === 'dead-internet' ? 'active' : ''}" data-filter="dead-internet">Dead Internet</button>
      <button type="button" class="filter-pill ${activeFilter === 'wetware' ? 'active' : ''}" data-filter="wetware">Wetware</button>
      <button type="button" class="filter-pill ${activeFilter === 'cases' ? 'active' : ''}" data-filter="cases">Case Studies</button>
      <button type="button" class="filter-pill ${activeFilter === 'finops' ? 'active' : ''}" data-filter="finops">FinOps &amp; Math</button>
    `;
  } else {
    pillsContainer.innerHTML = `
      <button type="button" class="filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
      <button type="button" class="filter-pill ${activeFilter === 'playgrounds' ? 'active' : ''}" data-filter="playgrounds">Playgrounds</button>
      <button type="button" class="filter-pill ${activeFilter === 'invariants' ? 'active' : ''}" data-filter="invariants">Invariants</button>
      <button type="button" class="filter-pill ${activeFilter === 'agentic' ? 'active' : ''}" data-filter="agentic">Agentic</button>
      <button type="button" class="filter-pill ${activeFilter === 'fastmcp' ? 'active' : ''}" data-filter="fastmcp">FastMCP</button>
      <button type="button" class="filter-pill ${activeFilter === 'tutorials' ? 'active' : ''}" data-filter="tutorials">Tutorials</button>
    `;
  }

  pillsContainer.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pillsContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter') || 'all';
      if (typeof window.__applySearchFilter === 'function') {
        window.__applySearchFilter(filter);
      }
    });
  });
}

export function renderSidebar(activeId) {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  const isBlog = isBlogContext();
  let groups = [...DOCS_REGISTRY];

  let savedStates = {};
  try {
    const raw = localStorage.getItem('credence_sidebar_groups_state');
    if (raw) savedStates = JSON.parse(raw);
  } catch (e) {}

  let renderedContent = '';

  if (isBlog) {
    const blogGroups = groups.filter(g => g.items.some(it => it.id.startsWith("blog/")));
    
    const renderedGroups = blogGroups.map((group, groupIdx) => {
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
                <a href="${getCleanRelativePath(item, true)}" class="sidebar-link ${item.id === activeId ? 'active' : ''}" data-doc-id="${item.id}">
                  ${escapeHtml(item.title)}
                </a>
              </li>
            `).join('')}
          </ul>
        </details>
      `;
    }).join('');

    renderedContent = `
      <div class="sidebar-controls">
        <button type="button" id="sidebar-toggle-all-btn" class="sidebar-toggle-btn" title="Toggle expand/collapse all categories">
          <span class="toggle-icon">⇅</span> <span class="toggle-label">Toggle All</span>
        </button>
      </div>
      ${renderedGroups}
      <div class="sidebar-bridge-card">
        <a href="${getDocsBaseUrl() ? getDocsBaseUrl() + '/' : '/'}" class="sidebar-bridge-link" data-plane="docs">
          <span class="bridge-icon">📘</span>
          <div class="bridge-text">
            <span class="bridge-title">Technical Documentation</span>
            <span class="bridge-subtitle">← Return to 3-tier technical reference</span>
          </div>
        </a>
      </div>
    `;
  } else {
    const techGroups = groups.filter(g => !g.items.some(it => it.id.startsWith("blog/")));

    const tier1Cats = ["Getting Started", "Platform Portability & Sovereignty", "Interactive Playgrounds"];
    const tier2Cats = ["Feature Walkthroughs", "Hands-On Tutorials", "Developer Cookbooks", "Agentic Engineering & Workflows", "Client Ecosystem & Integrations", "Operations & Self-Hosting"];
    const tier3Cats = ["Protocol Specifications", "Specialized Industry Blueprints", "Adversarial Security & Red Team", "P2P Mesh & Graph Theory", "Mathematical Foundations", "Invariants & Architecture"];

    function renderTierGroups(categoryNames) {
      return techGroups
        .filter(g => categoryNames.includes(g.category))
        .map((group, groupIdx) => {
          const hasActiveItem = group.items.some(it => it.id === activeId);
          let isOpen = false;
          if (hasActiveItem) {
            isOpen = true;
          } else if (savedStates[group.category] !== undefined) {
            isOpen = Boolean(savedStates[group.category]);
          } else if (tier1Cats.includes(group.category) && groupIdx === 0) {
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
                    <a href="${getCleanRelativePath(item, false)}" class="sidebar-link ${item.id === activeId ? 'active' : ''}" data-doc-id="${item.id}">
                      ${escapeHtml(item.title)}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </details>
          `;
        }).join('');
    }

    renderedContent = `
      <div class="sidebar-controls">
        <button type="button" id="sidebar-toggle-all-btn" class="sidebar-toggle-btn" title="Toggle expand/collapse all categories">
          <span class="toggle-icon">⇅</span> <span class="toggle-label">Toggle All</span>
        </button>
      </div>

      <div class="sidebar-tier-header" data-tier="1">
        <div class="tier-badge-row">
          <span class="tier-badge">TIER 1</span>
          <span class="tier-label">Surface Lens</span>
        </div>
        <span class="tier-subtext">Orientation &amp; Quickstarts</span>
      </div>
      ${renderTierGroups(tier1Cats)}

      <div class="sidebar-tier-header" data-tier="2">
        <div class="tier-badge-row">
          <span class="tier-badge">TIER 2</span>
          <span class="tier-label">Focus Lens</span>
        </div>
        <span class="tier-subtext">Hands-On &amp; Workstations</span>
      </div>
      ${renderTierGroups(tier2Cats)}

      <div class="sidebar-tier-header" data-tier="3">
        <div class="tier-badge-row">
          <span class="tier-badge">TIER 3</span>
          <span class="tier-label">Deep Spectrum Lens</span>
        </div>
        <span class="tier-subtext">Protocols, Forensics &amp; Math</span>
      </div>
      ${renderTierGroups(tier3Cats)}

      <div class="sidebar-bridge-card">
        <a href="${getBlogBaseUrl() ? getBlogBaseUrl() + '/conflict-of-pun-terest' : '/conflict-of-pun-terest'}" class="sidebar-bridge-link" data-plane="blog">
          <span class="bridge-icon">⭐</span>
          <div class="bridge-text">
            <span class="bridge-title">Featured Case Study: InMaricopa.com</span>
            <span class="bridge-subtitle">Read forensic newsroom monopoly audit →</span>
          </div>
        </a>
      </div>
    `;
  }

  container.innerHTML = renderedContent;
  updateSearchPills();

  const planeToggleDocs = document.getElementById('plane-btn-docs');
  const planeToggleBlog = document.getElementById('plane-btn-blog');
  if (planeToggleDocs && planeToggleBlog) {
    if (isBlog) {
      planeToggleDocs.classList.remove('active');
      planeToggleBlog.classList.add('active');
    } else {
      planeToggleDocs.classList.add('active');
      planeToggleBlog.classList.remove('active');
    }
  }

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

export function updateSocialMetadata(target, isBlog) {
  if (!target || typeof document === 'undefined') return;
  const cleanTitle = (target.title || '').replace(/^[^\w\s]+/, '').trim();
  const fullTitle = isBlog ? `${cleanTitle} — Credence Sovereign Blog` : `${cleanTitle} — Credence Docs`;
  const desc = target.desc || 'Decoupled documentation and sovereign editorial blog engine for the Credence network.';
  const canonicalUrl = getCanonicalDocUrl(target, isBlog);

  document.title = fullTitle;

  const setMeta = (attr, key, val) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', val);
  };

  setMeta('name', 'description', desc);
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', isBlog ? 'article' : 'website');

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
}

