/**
 * Credence Documentation Document Loader & Lifecycle Controller
 * Zero-npm native ES module.
 */

import { DOCS_REGISTRY, CURRENT_ECOSYSTEM_VERSION } from '../app.js';
import { getCleanRelativePath, getCanonicalDocUrl, isBlogContext, resolveDocument } from './router.js';
import { parseMarkdown } from './markdown-parser.js';
import { renderTableOfContents, renderGlobalFooter, updateSocialMetadata, renderSidebar } from './nav.js';
import { escapeHtml } from './formatters.js';
import { setupPlaygroundWidgets } from './playgrounds/index.js';
import { mountContentEvolutionLab, mountBadgeSecurityLab } from './playgrounds/labs.js';
import { setupInMaricopaCaseStudyWidget, setupPublisherAggregateCard } from './case-study.js';

export let currentLoadedDocId = null;

export function scrollToAnchor(anchorId) {
  if (!anchorId) return;
  const cleanId = anchorId.replace(/^#/, '').trim();
  if (!cleanId) return;

  function findAndScroll(attemptsLeft) {
    const el = document.getElementById(cleanId)
      || document.querySelector(`[name="${cleanId}"]`)
      || document.querySelector(`a[id="${cleanId}"]`)
      || document.getElementById('inv-' + cleanId.replace(/^inv-/, ''))
      || document.getElementById('invariant-' + cleanId.replace(/^inv-/, ''))
      || document.getElementById(cleanId.replace(/^inv-/, ''));

    if (el) {
      // 1. If inside an invariant card, ensure card is visible
      const card = el.closest ? el.closest('.invariant-card') : (el.classList.contains('invariant-card') ? el : null);
      if (card) {
        if (card.style.display === 'none') {
          const scope = card.getAttribute('data-scope');
          const scopeBtn = document.querySelector(`.invariant-scope-filter-bar .scope-btn[data-scope-filter="${scope}"]`)
            || document.querySelector('.invariant-scope-filter-bar .scope-btn[data-scope-filter="all"]');
          if (scopeBtn) {
            scopeBtn.click();
          } else {
            card.style.display = '';
          }
        }
      }

      // 2. If inside a details element, expand it
      const details = el.closest ? el.closest('details') : null;
      if (details) {
        details.open = true;
      }

      // 3. Calculate offset taking sticky navbar (70px) + filter bar (if present, ~55px) into account
      const filterBar = document.querySelector('.invariant-scope-filter-bar');
      const headerOffset = filterBar ? 135 : 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      // 4. Highlight the target card or element with cyan glow pulse
      const highlightTarget = card || el;
      highlightTarget.classList.add('highlight-anchor');
      setTimeout(() => highlightTarget.classList.remove('highlight-anchor'), 2500);
    } else if (attemptsLeft > 0) {
      setTimeout(() => findAndScroll(attemptsLeft - 1), 75);
    }
  }

  requestAnimationFrame(() => findAndScroll(8));
}

export async function loadDocument(docId, anchorId = '') {
  let target = resolveDocument(docId, isBlogContext());

  if (!target) {
    const isBlog = isBlogContext();
    if (isBlog) {
      target = resolveDocument('conflict-of-pun-terest', true) || DOCS_REGISTRY.flatMap(g => g.items).find(it => it.id === 'blog/conflict-of-pun-terest') || DOCS_REGISTRY[0].items[0];
    } else {
      target = DOCS_REGISTRY[0].items[0];
    }
  }

  renderSidebar(target.id);

  // Update header, document title, and Open Graph social metadata
  const isBlog = isBlogContext();
  const brandBadge = document.querySelector('.credence-nav .badge');
  if (brandBadge) {
    brandBadge.textContent = isBlog ? 'Editorial' : CURRENT_ECOSYSTEM_VERSION;
  }
  updateSocialMetadata(target, isBlog);

  // Update active navbar link
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (isBlog && href && href.includes('blog')) {
      a.classList.add('active');
    } else if (!isBlog && href && href.includes('docs')) {
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
    if (md.trim().startsWith('<!DOCTYPE html>') || md.trim().startsWith('<html') || md.trim().startsWith('<head')) {
      throw new Error(`Invalid markdown response: received HTML payload for ${target.path}`);
    }
    contentArea.innerHTML = parseMarkdown(md) + renderGlobalFooter();
    renderTableOfContents();

    // Automatically bind cryptographic attestation receipt to the page's <credence-badge>
    try {
      if (!window._credenceAttestations) {
        const attRes = await fetch(`assets/attestations.json?v=${encodeURIComponent(CURRENT_ECOSYSTEM_VERSION)}`, { cache: 'no-cache' });
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

    // Synchronize tabbed interface groups to preferred interface
    syncAllTabGroups();

    if (target.id === 'docs/playground') {
      setupPlaygroundWidgets();
    }

    if (target.id === 'docs/lab-content-evolution' || document.getElementById('content-evolution-lab-container')) {
      mountContentEvolutionLab();
    }

    if (target.id === 'docs/lab-badge-security' || document.getElementById('badge-security-lab-container')) {
      mountBadgeSecurityLab();
    }

    if (target.id.includes('conflict-of-pun-terest') || target.id.includes('the-publisher-on-the-dais') || document.getElementById('inmaricopa-forensics-workbench')) {
      setupInMaricopaCaseStudyWidget();
    }

    if (target.id === 'docs/invariants' || document.querySelector('.invariant-scope-filter-bar')) {
      setupInvariantsPageInteractivity();
    }

    currentLoadedDocId = target.id;

    if (anchorId) {
      scrollToAnchor(anchorId);
    } else {
      window.scrollTo(0, 0);
    }
  } catch (err) {
    currentLoadedDocId = null;
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

export function setupInvariantsPageInteractivity() {
  const filterBar = document.querySelector('.invariant-scope-filter-bar');
  if (!filterBar) return;

  const buttons = filterBar.querySelectorAll('.scope-btn');
  const cards = document.querySelectorAll('.invariant-card');

  // Add dynamic live status pill if not present
  let statusPill = filterBar.querySelector('.scope-filter-status');
  if (!statusPill) {
    statusPill = document.createElement('span');
    statusPill.className = 'scope-filter-status';
    statusPill.style.cssText = 'font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan, #38bdf8); font-family: monospace; padding: 0.2rem 0.5rem; background: rgba(56, 189, 248, 0.1); border-radius: 4px; margin-left: 0.5rem;';
    const label = filterBar.querySelector('.scope-filter-label');
    if (label) label.appendChild(statusPill);
    else filterBar.prepend(statusPill);
  }

  function applyFilter(filter) {
    let visibleCount = 0;
    cards.forEach(card => {
      const scope = card.getAttribute('data-scope');
      if (filter === 'all' || filter === scope) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (filter === 'all') {
      statusPill.textContent = `(Showing all ${visibleCount} Invariants)`;
    } else if (filter === 'universal') {
      statusPill.textContent = `(Showing ${visibleCount} Universal Standards)`;
    } else if (filter === 'domain') {
      statusPill.textContent = `(Showing ${visibleCount} Domain Invariants)`;
    }

    // Toggle pillar headings if all cards within that pillar are hidden
    const pillarHeadings = document.querySelectorAll('#doc-content h2');
    pillarHeadings.forEach(h2 => {
      if (!h2.textContent.includes('Pillar')) return;
      let next = h2.nextElementSibling;
      let hasVisible = false;
      while (next && next.tagName !== 'H2' && !next.matches('.table-container, .invariant-scope-filter-bar')) {
        if (next.classList.contains('invariant-card') && next.style.display !== 'none') {
          hasVisible = true;
          break;
        }
        next = next.nextElementSibling;
      }
      if (filter === 'all' || hasVisible) {
        h2.style.display = '';
        const prevHr = h2.previousElementSibling;
        if (prevHr && prevHr.tagName === 'HR') prevHr.style.display = '';
      } else {
        h2.style.display = 'none';
        const prevHr = h2.previousElementSibling;
        if (prevHr && prevHr.tagName === 'HR') prevHr.style.display = 'none';
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-scope-filter');
      applyFilter(filter);

      // If user is scrolled above the filter bar, smoothly scroll to it so cards are immediately visible
      const rect = filterBar.getBoundingClientRect();
      if (rect.top < 60 || rect.top > 250) {
        filterBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Initial status count
  applyFilter('all');

  const exportBtn = document.getElementById('btn-export-agentic-pack');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const universalCards = Array.from(document.querySelectorAll('.invariant-card[data-scope="universal"]'));
      let exportText = `# Universal Agentic Engineering Standards (Portable Starter Pack)\n\n`;
      exportText += `Extracted from the Credence Living Invariant Canon (https://docs.credence.run/#docs/invariants).\n`;
      exportText += `Drop this ruleset into AGENTS.md to bootstrap high-reliability agentic pair-programming in any repository.\n\n`;
      exportText += `## Universal Core Invariants\n\n`;

      universalCards.forEach(card => {
        const titleEl = card.querySelector('h3 a') || card.querySelector('h3');
        const headlineEl = card.querySelector('.invariant-headline');
        const rules = Array.from(card.querySelectorAll('.agent-rules-list li')).map(li => li.textContent.trim());
        
        const title = titleEl ? titleEl.textContent.replace('The Invariant Bible: ', '').trim() : card.id;
        const headline = headlineEl ? headlineEl.textContent.trim() : '';
        const rulesStr = rules.join(' ');
        
        exportText += `- **\`${card.id}\` — 🌐 ${title}**: ${headline} ${rulesStr}\n`;
      });

      navigator.clipboard.writeText(exportText).then(() => {
        const orig = exportBtn.textContent;
        exportBtn.textContent = '✅ Copied Universal Starter Pack!';
        setTimeout(() => { exportBtn.textContent = orig; }, 3000);
      }).catch(err => {
        console.warn('Clipboard write failed:', err);
      });
    });
  }
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

