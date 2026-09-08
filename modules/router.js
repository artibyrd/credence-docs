/**
 * Credence Documentation Clean URL & Subdomain Routing
 * Zero-npm native ES module.
 */

import { DOCS_REGISTRY } from '../app.js';
import { loadDocument, scrollToAnchor } from './doc-loader.js';
import { renderSidebar } from './nav.js';

export function getDomainContext() {
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isDev = host.startsWith('dev.') || host.startsWith('mcp.dev.');
  const isDocsDomain = host === 'docs.credence.run' || host === 'dev.docs.credence.run' || (isDev && (pathname === '/docs' || pathname.startsWith('/docs/')));
  const isBlogDomain = host === 'blog.credence.run' || host === 'dev.blog.credence.run' || (isDev && (pathname === '/blog' || pathname.startsWith('/blog/')));
  const isMultiDomain = isDocsDomain || isBlogDomain || host.endsWith('credence.run');
  return { host, pathname, isDev, isDocsDomain, isBlogDomain, isMultiDomain };
}

export function getDocsBaseUrl() {
  const { isDev, isMultiDomain } = getDomainContext();
  if (!isMultiDomain) return '';
  return isDev ? 'https://dev.credence.run/docs' : 'https://docs.credence.run';
}

export function getBlogBaseUrl() {
  const { isDev, isMultiDomain } = getDomainContext();
  if (!isMultiDomain) return '';
  return isDev ? 'https://dev.credence.run/blog' : 'https://blog.credence.run';
}

export function resolveDocument(slugOrPath, isBlog = false) {
  if (!slugOrPath) return null;
  const clean = slugOrPath.trim().replace(/^\/+|\/+$/g, '').replace(/\.md$/, '').replace(/\.html$/, '');
  if (!clean || clean === 'index') return null;

  const allItems = DOCS_REGISTRY.flatMap(g => g.items);

  // 1. Direct exact match on id or path
  let match = allItems.find(it => it.id === clean || (it.path && it.path.replace(/\.md$/, '') === clean));
  if (match) return match;

  // 2. Plane-prefixed exact match
  if (isBlog) {
    match = allItems.find(it => it.id === `blog/${clean}`);
    if (match) return match;
  } else {
    match = allItems.find(it => it.id === `docs/${clean}`);
    if (match) return match;
  }

  // 3. Pure slug match
  const cleanSlug = clean.replace(/^blog\//, '').replace(/^docs\//, '');
  const candidates = allItems.filter(it => {
    const itemSlug = it.id.replace(/^blog\//, '').replace(/^docs\//, '');
    const itemPathSlug = (it.path || '').replace(/^blog\//, '').replace(/^docs\//, '').replace(/\.md$/, '');
    return itemSlug === cleanSlug || itemPathSlug === cleanSlug || it.id === cleanSlug || it.id.endsWith(`/${cleanSlug}`);
  });

  if (candidates.length > 0) {
    if (isBlog) {
      const blogCandidate = candidates.find(it => it.id.startsWith('blog/'));
      if (blogCandidate) return blogCandidate;
    } else {
      const docsCandidate = candidates.find(it => it.id.startsWith('docs/'));
      if (docsCandidate) return docsCandidate;
    }
    return candidates[0];
  }

  // 4. Dynamic fallback: if slug matches a file structure, synthesize document metadata so direct URLs never fail
  const isTargetBlog = isBlog || clean.startsWith('blog/');
  let resolvedId = clean;
  if (!resolvedId.startsWith('blog/') && !resolvedId.startsWith('docs/')) {
    resolvedId = isTargetBlog ? `blog/${resolvedId}` : `docs/${resolvedId}`;
  }
  const cleanTitle = resolvedId.split('/').pop().replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    id: resolvedId,
    title: cleanTitle,
    path: `${resolvedId}.md`,
    desc: `Documentation article for ${cleanTitle}.`,
    keywords: [clean]
  };
}

export function getCanonicalDocUrl(target, isBlog = false) {
  if (!target) return typeof window !== 'undefined' ? window.location.href : '';
  const { isDev, isDocsDomain, isBlogDomain } = getDomainContext();
  const slug = target.id.replace(/^blog\//, '').replace(/^docs\//, '');
  const isTargetBlog = target.id.startsWith('blog/');

  if (isDev) {
    const devBase = 'https://dev.credence.run';
    if (isTargetBlog) {
      return `${devBase}/blog/${slug}`;
    } else {
      return slug === 'intro' ? `${devBase}/docs` : `${devBase}/docs/${slug}`;
    }
  }

  if (isBlogDomain || isTargetBlog) {
    const base = getBlogBaseUrl() || 'https://blog.credence.run';
    return `${base}/${slug}`;
  }

  if (isDocsDomain || !isTargetBlog) {
    const base = getDocsBaseUrl() || 'https://docs.credence.run';
    return slug === 'intro' ? `${base}/` : `${base}/${slug}`;
  }

  return `/${slug}`;
}

export function getCleanRelativePath(target, isBlog = false) {
  if (!target) return '/';
  const { isDev } = getDomainContext();
  const slug = target.id.replace(/^blog\//, '').replace(/^docs\//, '');
  const isTargetBlog = target.id.startsWith('blog/');

  if (isDev) {
    return isTargetBlog ? `/blog/${slug}` : (slug === 'intro' ? '/docs' : `/docs/${slug}`);
  }
  return `/${slug}`;
}

export function isBlogContext() {
  const { isDocsDomain, isBlogDomain } = getDomainContext();
  if (isBlogDomain) return true;
  if (isDocsDomain) return false;
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname || '';
  const hash = window.location.hash || '';
  if (hash.startsWith('#blog') || path.startsWith('/blog')) return true;
  if (hash.startsWith('#docs') || path.startsWith('/docs')) return false;
  const doc = resolveDocument(path, true);
  return Boolean(doc && doc.id.startsWith('blog/'));
}


export function initRouter() {
  function normalizeLinks() {
    const { isDev, isDocsDomain, isBlogDomain } = getDomainContext();

    // Adjust top navbar Docs link when on blog domain
    const docsNavLinks = document.querySelectorAll('.nav-links a[href*="docs"], .nav-links a.active');
    docsNavLinks.forEach(link => {
      const text = (link.textContent || '').trim().toLowerCase();
      if (text === 'docs') {
        if (isBlogDomain) {
          link.classList.remove('active');
          link.setAttribute('href', getDocsBaseUrl() ? `${getDocsBaseUrl()}/` : '/');
        } else if (isDocsDomain) {
          link.classList.add('active');
          link.setAttribute('href', '/');
        }
      }
    });

    if (!isDev) return;

    const prodToDev = {
      'https://credence.run': 'https://dev.credence.run',
      'https://admin.credence.run': 'https://dev.credence.run/admin',
      'https://credence.report': 'https://dev.credence.report',
      'https://credence.nexus': 'https://dev.credence.nexus',
      'https://credence.foundation': 'https://dev.credence.foundation',
      'https://docs.credence.run': 'https://dev.credence.run/docs',
      'https://blog.credence.run': 'https://dev.credence.run/blog',
      'https://mcp.credence.run': 'https://mcp.dev.credence.run',
    };

    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      for (const [prod, dev] of Object.entries(prodToDev)) {
        if (href === prod || href.startsWith(prod + '/') || href.startsWith(prod + '#')) {
          const sub = href.substring(prod.length);
          if (dev.endsWith('/') && sub.startsWith('/')) {
            a.setAttribute('href', dev.slice(0, -1) + sub);
          } else {
            a.setAttribute('href', dev + sub);
          }
        }
      }
    });
  }

  function parseCurrentRoute() {
    const { isDev, isDocsDomain, isBlogDomain, host, pathname } = getDomainContext();
    const rawHash = typeof window !== 'undefined' ? (window.location.hash || '').replace(/^#/, '') : '';
    let rawPath = (pathname || '').replace(/^\/+|\/+$/g, '');

    if (isDev && host.includes('credence.run')) {
      if (rawPath === 'docs' || rawPath === 'blog') {
        rawPath = '';
      } else if (rawPath.startsWith('docs/')) {
        rawPath = rawPath.substring(5);
      } else if (rawPath.startsWith('blog/')) {
        rawPath = rawPath.substring(5);
      }
    } else if (isDocsDomain && rawPath.startsWith('docs/')) {
      rawPath = rawPath.substring(5);
    } else if (isBlogDomain && rawPath.startsWith('blog/')) {
      rawPath = rawPath.substring(5);
    }
    if (rawPath === 'index.html' || rawPath === '404.html') rawPath = '';

    const isBlog = isBlogDomain || (isBlogContext() && !isDocsDomain);
    let docId = '';
    let anchorId = '';

    // 1. Try to resolve document from pathname first (clean URL routing)
    const docFromPath = rawPath ? resolveDocument(rawPath, isBlog) : null;

    if (docFromPath) {
      docId = docFromPath.id;
      anchorId = rawHash;
    } else if (rawHash) {
      // 2. If pathname did not resolve to a doc, check if hash contains a document slug/path
      let hashDocPart = rawHash;
      let hashAnchorPart = '';
      if (rawHash.includes('#')) {
        const idx = rawHash.indexOf('#');
        hashDocPart = rawHash.substring(0, idx);
        hashAnchorPart = rawHash.substring(idx + 1);
      } else if (rawHash.includes(':') && !rawHash.startsWith('http')) {
        const idx = rawHash.indexOf(':');
        hashDocPart = rawHash.substring(0, idx);
        hashAnchorPart = rawHash.substring(idx + 1);
      }

      const hashDoc = resolveDocument(hashDocPart, isBlog);
      if (hashDoc) {
        docId = hashDoc.id;
        anchorId = hashAnchorPart;
      } else {
        docId = isBlog ? 'blog/conflict-of-pun-terest' : 'docs/intro';
        anchorId = rawHash;
      }
    } else {
      docId = isBlog ? 'blog/conflict-of-pun-terest' : 'docs/intro';
      anchorId = '';
    }

    return { docId, anchorId };
  }

  function handleRoute() {
    const { isDocsDomain, isBlogDomain } = getDomainContext();
    const { docId, anchorId } = parseCurrentRoute();

    // Cross-domain route boundary enforcement
    if (isDocsDomain && docId.startsWith('blog/')) {
      const slug = docId.replace(/^blog\//, '');
      const targetUrl = getBlogBaseUrl() + '/' + slug + (anchorId ? '#' + anchorId : '');
      window.location.replace(targetUrl);
      return;
    }
    if (isBlogDomain && docId.startsWith('docs/')) {
      const path = docId.replace(/^docs\//, '');
      const targetUrl = getDocsBaseUrl() + '/' + path + (anchorId ? '#' + anchorId : '');
      window.location.replace(targetUrl);
      return;
    }

    if (currentLoadedDocId && currentLoadedDocId === docId) {
      if (anchorId) {
        scrollToAnchor(anchorId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    loadDocument(docId, anchorId);
    setTimeout(normalizeLinks, 100);
  }

  // Top-level capture interceptor to guarantee clean cross-domain, dev routing, and zero-reload navigation
  document.addEventListener('click', (e) => {
    const anchor = e.target && e.target.closest && e.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('javascript:')) return;
    if (href.startsWith('file:') || href.includes('file:///')) {
      e.preventDefault();
      console.warn('Blocked invalid local file URI in web context:', href);
      return;
    }

    const { isDev, isDocsDomain, isBlogDomain } = getDomainContext();

    // 0. Handle legacy hash links (#docs/..., #blog/...) and local hash anchors (#some-id)
    if (href.startsWith('#docs/') || href.startsWith('#blog/')) {
      e.preventDefault();
      const raw = href.substring(1);
      const parts = raw.split('#');
      const docSlug = parts[0];
      const anchorPart = parts[1] || '';
      const targetDoc = resolveDocument(docSlug, isBlogContext());
      if (targetDoc) {
        const isTargetBlog = targetDoc.id.startsWith('blog/');
        if (isDocsDomain && isTargetBlog) {
          window.location.href = getBlogBaseUrl() + '/' + targetDoc.id.replace(/^blog\//, '') + (anchorPart ? '#' + anchorPart : '');
          return;
        }
        if (isBlogDomain && !isTargetBlog) {
          window.location.href = getDocsBaseUrl() + '/' + targetDoc.id.replace(/^docs\//, '') + (anchorPart ? '#' + anchorPart : '');
          return;
        }

        const nextUrl = getCleanRelativePath(targetDoc, isBlogDomain) + (anchorPart ? '#' + anchorPart : '');
        if (window.location.pathname + window.location.hash !== nextUrl) {
          window.history.pushState(null, '', nextUrl);
        }
        if (currentLoadedDocId && currentLoadedDocId === targetDoc.id) {
          if (anchorPart) scrollToAnchor(anchorPart);
          else window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        loadDocument(targetDoc.id, anchorPart);
        setTimeout(normalizeLinks, 100);
        return;
      }
    } else if (href.startsWith('#')) {
      const anchorId = href.substring(1);
      if (anchorId) {
        e.preventDefault();
        if (window.location.hash !== href) {
          window.history.pushState(null, '', href);
        }
        scrollToAnchor(anchorId);
        return;
      }
    }

    // 1. Doc links with data-doc-id attribute or relative internal paths
    const docIdAttr = anchor.getAttribute('data-doc-id');
    if (docIdAttr) {
      const targetDoc = resolveDocument(docIdAttr, isBlogContext());
      if (targetDoc) {
        let anchorId = '';
        if (href.includes('#')) {
          anchorId = href.substring(href.indexOf('#') + 1);
        }
        const isTargetBlog = targetDoc.id.startsWith('blog/');

        // Cross-domain transitions: preserve anchorId!
        if (isDocsDomain && isTargetBlog) {
          e.preventDefault();
          window.location.href = getBlogBaseUrl() + '/' + targetDoc.id.replace(/^blog\//, '') + (anchorId ? '#' + anchorId : '');
          return;
        }
        if (isBlogDomain && !isTargetBlog) {
          e.preventDefault();
          window.location.href = getDocsBaseUrl() + '/' + targetDoc.id.replace(/^docs\//, '') + (anchorId ? '#' + anchorId : '');
          return;
        }

        // Same domain: check if already loaded
        e.preventDefault();
        const nextUrl = getCleanRelativePath(targetDoc, isBlogDomain) + (anchorId ? '#' + anchorId : '');
        if (window.location.pathname + window.location.hash !== nextUrl) {
          window.history.pushState(null, '', nextUrl);
        }

        if (currentLoadedDocId && currentLoadedDocId === targetDoc.id) {
          if (anchorId) {
            scrollToAnchor(anchorId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
        }

        loadDocument(targetDoc.id, anchorId);
        setTimeout(normalizeLinks, 100);
        return;
      }
    }

    // 2. Dev preview host normalization
    if (isDev) {
      const prodToDev = {
        'https://admin.credence.run': 'https://dev.credence.run/admin',
        'https://credence.run': 'https://dev.credence.run',
        'https://credence.report': 'https://dev.credence.report',
        'https://credence.nexus': 'https://dev.credence.nexus',
        'https://credence.foundation': 'https://dev.credence.foundation',
        'https://docs.credence.run': 'https://dev.credence.run/docs',
        'https://blog.credence.run': 'https://dev.credence.run/blog',
        'https://mcp.credence.run': 'https://mcp.dev.credence.run',
      };

      for (const [prod, dev] of Object.entries(prodToDev)) {
        if (href === prod || href.startsWith(prod + '/') || href.startsWith(prod + '#')) {
          e.preventDefault();
          const sub = href.substring(prod.length);
          if (dev.endsWith('/') && sub.startsWith('/')) {
            window.location.href = dev.slice(0, -1) + sub;
          } else {
            window.location.href = dev + sub;
          }
          return;
        }
      }
    }
  }, true);

  window.addEventListener('popstate', handleRoute);
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  setupSearch();
  normalizeLinks();
}


