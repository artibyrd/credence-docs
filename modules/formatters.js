/**
 * Credence Documentation Formatting, Math & Hashing Utilities
 * Zero-npm native ES module.
 */
import { resolveDocument, getCleanRelativePath, isBlogContext } from './router.js';

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function sanitizeHtml(htmlStr) {
  if (typeof htmlStr !== 'string') return '';
  // 1. Strip dangerous tags entirely (script, iframe, object, embed, applet, base, form)
  let clean = htmlStr.replace(/<\s*(script|iframe|object|embed|applet|base|form)\b[^>]*>[\s\S]*?<\/\s*\1\s*>/gi, '');
  clean = clean.replace(/<\s*(script|iframe|object|embed|applet|base|form)\b[^>]*\/?>/gi, '');
  // 2. Strip inline JavaScript event handlers (onerror, onload, onclick, etc.)
  clean = clean.replace(/\s+on[a-zA-Z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
  // 3. Neutralize javascript: and data:text/html URIs
  clean = clean.replace(/\b(href|src|action)\s*=\s*(?:"\s*javascript:[^"]*"|'\s*javascript:[^']*'|javascript:[^\s>]+)/gi, '$1="#"');
  clean = clean.replace(/\b(href|src|action)\s*=\s*(?:"\s*data:text\/html[^"]*"|'\s*data:text\/html[^']*'|data:text\/html[^\s>]+)/gi, '$1="#"');
  return clean;
}

export function computeSimHash(str) {
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

export function getHammingDistance(hexA, hexB) {
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
  res = replaceBraced(res, 'vec', s => `${formatMath(s)}⃗`);
  res = replaceBraced(res, 'pmod', s => `(mod ${formatMath(s)})`);

  // Unbraced single-character bar/hat/vec (\bar S -> S̄)
  res = res.replace(/\\bar\s*([a-zA-Z])/g, '$1̄')
    .replace(/\\overline\s*([a-zA-Z])/g, '$1̄')
    .replace(/\\hat\s*([a-zA-Z])/g, '$1̂')
    .replace(/\\vec\s*([a-zA-Z])/g, '$1⃗');

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
    .replace(/_\{([^}]+)\}/g, (m, sub) => `₍${formatMath(sub)}₎`)
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

  // Display math $$...$$
  res = res.replace(/\$\$([^\$\n]+?)\$\$/g, (match, expr) => {
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
    let clean = url.trim().replace(/^(\.\.\/)+assets\//, 'assets/');
    if (clean.includes('illustrations/') || clean.endsWith('.svg')) {
      const captionHtml = altText ? `<figcaption>${altText}</figcaption>` : '';
      return `<figure class="doc-illustration"><img src="${clean}" alt="${altText}" loading="lazy" decoding="async" />${captionHtml}</figure>`;
    }
    return `<img src="${clean}" alt="${altText}" class="doc-image" loading="lazy" decoding="async" />`;
  });

  // Markdown links [text](url) with sub-anchor and clean slug resolution
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

    const targetDoc = resolveDocument(clean, false) || resolveDocument(clean, true);
    if (targetDoc) {
      const href = getCleanRelativePath(targetDoc, isBlogContext()) + anchor;
      return `<a href="${href}" data-doc-id="${targetDoc.id}">${linkText}</a>`;
    }

    if (!clean.startsWith('docs/') && !clean.startsWith('blog/') && clean.length > 0) {
      clean = `docs/${clean}`;
    }

    const fallbackDoc = resolveDocument(clean, false);
    const href = fallbackDoc ? getCleanRelativePath(fallbackDoc, isBlogContext()) + anchor : `/${clean}${anchor}`;
    return `<a href="${href}" data-doc-id="${fallbackDoc ? fallbackDoc.id : clean}">${linkText}</a>`;
  });

  // Restore code spans
  res = res.replace(/__CODE_SPAN_(\d+)__/g, (m, idx) => {
    return `<code>${escapeHtml(codeSpans[parseInt(idx, 10)])}</code>`;
  });

  return res;
}

