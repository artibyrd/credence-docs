/**
 * Credence Documentation Search Engine & Keyboard Navigation
 * Zero-npm native ES module.
 */

import { DOCS_REGISTRY } from '../app.js';
import { getCleanRelativePath, getDomainContext, getDocsBaseUrl, getBlogBaseUrl } from './router.js';
import { updateSearchPills } from './nav.js';
import { loadDocument } from './doc-loader.js';

export function setupSearch() {
  const searchInput = document.getElementById('doc-search');
  if (!searchInput) return;

  let activeFilter = 'all';

  window.__applySearchFilter = (filter) => {
    activeFilter = filter;
    filterItems();
  };

  // Setup Plane Switcher buttons
  const planeBtnDocs = document.getElementById('plane-btn-docs');
  const planeBtnBlog = document.getElementById('plane-btn-blog');
  if (planeBtnDocs) {
    planeBtnDocs.addEventListener('click', (e) => {
      const { isBlogDomain } = getDomainContext();
      if (isBlogDomain) {
        e.preventDefault();
        window.location.href = getDocsBaseUrl() ? getDocsBaseUrl() + '/' : '/';
      } else {
        const nextUrl = getCleanRelativePath({ id: 'docs/intro' }, false);
        if (window.location.pathname !== nextUrl) {
          window.history.pushState(null, '', nextUrl);
        }
        loadDocument('docs/intro', '');
      }
    });
  }
  if (planeBtnBlog) {
    planeBtnBlog.addEventListener('click', (e) => {
      const { isDocsDomain } = getDomainContext();
      if (isDocsDomain) {
        e.preventDefault();
        window.location.href = getBlogBaseUrl() ? getBlogBaseUrl() + '/conflict-of-pun-terest' : '/conflict-of-pun-terest';
      } else {
        const nextUrl = getCleanRelativePath({ id: 'blog/conflict-of-pun-terest' }, true);
        if (window.location.pathname !== nextUrl) {
          window.history.pushState(null, '', nextUrl);
        }
        loadDocument('blog/conflict-of-pun-terest', '');
      }
    });
  }

  function filterItems() {
    const q = searchInput.value.trim().toLowerCase();
    const isInvSearch = q.startsWith('#inv') || q.startsWith('inv-') || q.startsWith('invariant-');
    const targetInv = isInvSearch ? q.replace(/^#/, '').replace(/-/g, '_').toLowerCase() : '';

    const groups = document.querySelectorAll('#sidebar-nav details.sidebar-group');
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
        } else if (activeFilter === 'dead-internet') {
          matchesFilter = href.includes('dead-internet') || href.includes('crawler') || href.includes('slop') || keywords.includes('dead internet') || keywords.includes('crawler');
        } else if (activeFilter === 'wetware') {
          matchesFilter = category.includes('wetware') || keywords.includes('wetware') || keywords.includes('spj-42.0');
        } else if (activeFilter === 'cases') {
          matchesFilter = category.includes('case studies') || href.includes('case-study') || href.includes('conflict-of-pun-terest') || href.includes('pizza-hut');
        } else if (activeFilter === 'finops') {
          matchesFilter = category.includes('consensus mathematics') || keywords.includes('finops') || keywords.includes('bittorrent') || keywords.includes('math');
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

  updateSearchPills(activeFilter);
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

