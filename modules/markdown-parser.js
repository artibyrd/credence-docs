/**
 * Credence Documentation Client-Side Markdown Parser
 * Zero-npm native ES module.
 */

import { escapeHtml, sanitizeHtml, formatMath, formatInline } from './formatters.js';
import { CURRENT_ECOSYSTEM_VERSION } from '../app.js';

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

  const HTML_TAG_START_REGEX = /^<\/?(a|div|section|article|aside|nav|header|footer|main|figure|figcaption|img|svg|g|defs|filter|linearGradient|rect|circle|text|path|line|span|button|textarea|input|label|table|thead|tbody|tr|th|td|form|select|option|code|pre|p|h[1-6]|ul|ol|li|details|summary|hr|style|script|blockquote|!--)/i;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // 0a. Generic Container Callout Directives (:::note, :::tip, :::info, :::warning, :::caution, :::important, :::danger ... :::)
    const directiveMatch = !inCodeBlock && line.trim().match(/^:::(note|tip|info|warning|caution|important|danger)\b\s*(.*)$/i);
    if (directiveMatch) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }

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
        inCodeBlock = false;
        codeBuffer = [];
        codeLang = '';
      } else {
        if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
        if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
        inCodeBlock = true;
        codeLang = line.trim().slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // 2. GitHub Alert Callout Banners (> [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION])
    const alertMatch = !inCodeBlock && line.trim().match(/^>\s*\[!(NOTE|TIP|INFO|IMPORTANT|WARNING|CAUTION|DANGER)\]\s*(.*)$/i);
    if (alertMatch) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }

      let aType = alertMatch[1].toLowerCase();
      if (aType === 'danger') aType = 'caution';
      let aTitle = alertMatch[2].trim() || aType.toUpperCase();
      let aIcon = '📌';
      switch (aType) {
        case 'note': aIcon = '📘'; break;
        case 'tip': aIcon = '💡'; break;
        case 'info': aIcon = 'ℹ️'; break;
        case 'important': aIcon = '🛡️'; break;
        case 'warning': aIcon = '⚠️'; break;
        case 'caution': aIcon = '🛑'; break;
      }

      let alertContentLines = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        const subLine = lines[j];
        if (subLine.trim().startsWith('>')) {
          alertContentLines.push(subLine.replace(/^\s*>\s?/, ''));
        } else {
          break;
        }
      }
      i = j - 1; // Advance outer loop index

      const innerAlert = parseMarkdown(alertContentLines.join('\n'));
      html.push(`
        <div class="alert-box alert-${aType}">
          <div class="alert-header">
            <span class="alert-icon">${aIcon}</span>
            <strong>${escapeHtml(aTitle)}</strong>
          </div>
          <div class="alert-content">${innerAlert}</div>
        </div>
      `);
      continue;
    }

    // 3. Multi-Line Blockquotes
    if (!inCodeBlock && line.trim().startsWith('>')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }

      let bqLines = [];
      let j = i;
      for (; j < lines.length; j++) {
        const subLine = lines[j];
        if (subLine.trim().startsWith('>')) {
          if (j > i && /^\s*>\s*\[!(NOTE|TIP|INFO|IMPORTANT|WARNING|CAUTION|DANGER)\]/i.test(subLine.trim())) {
            break;
          }
          bqLines.push(subLine.replace(/^\s*>\s?/, ''));
        } else {
          break;
        }
      }
      i = j - 1; // Advance outer loop index

      const innerBq = parseMarkdown(bqLines.join('\n'));
      html.push(`<blockquote>${innerBq}</blockquote>`);
      continue;
    }

    // 4. Direct Raw HTML Lines / Elements (e.g. interactive widgets, custom SVG illustrations)
    if (HTML_TAG_START_REGEX.test(line.trim()) || line.trim().startsWith('<!--')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }
      let processedLine = line;
      if (processedLine.includes('$$')) {
        processedLine = processedLine.replace(/\$\$([^\$\n]+?)\$\$/g, (match, expr) => {
          return `<span class="math-inline">${formatMath(expr.trim())}</span>`;
        });
      }
      if (processedLine.includes('$')) {
        processedLine = processedLine.replace(/\$([^\$\n]+?)\$/g, (match, expr) => {
          return `<span class="math-inline">${formatMath(expr.trim())}</span>`;
        });
      }
      if (processedLine.includes('\\(') && processedLine.includes('\\)')) {
        processedLine = processedLine.replace(/\\\(([\s\S]+?)\\\)/g, (match, expr) => {
          return `<span class="math-inline">${formatMath(expr.trim())}</span>`;
        });
      }
      html.push(sanitizeHtml(processedLine));
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
      
      // Split cells respecting pipe characters inside code backticks or math expressions
      const trimmedTableLine = line.trim().replace(/^\||\|$/g, '');
      const cells = [];
      let curCell = '';
      let inCode = false;
      let inMath = false;
      for (let cIdx = 0; cIdx < trimmedTableLine.length; cIdx++) {
        const ch = trimmedTableLine[cIdx];
        if (ch === '\\' && cIdx + 1 < trimmedTableLine.length) {
          curCell += ch + trimmedTableLine[++cIdx];
          continue;
        }
        if (ch === '`') {
          inCode = !inCode;
          curCell += ch;
        } else if (ch === '$' && !inCode) {
          if (inMath) {
            inMath = false;
          } else {
            const restOfCell = trimmedTableLine.slice(cIdx + 1);
            const nextPipeIdx = restOfCell.indexOf('|');
            const cellSubstring = nextPipeIdx !== -1 ? restOfCell.slice(0, nextPipeIdx) : restOfCell;
            const isCurrency = /\d/.test(trimmedTableLine[cIdx + 1] || '');
            if (!isCurrency && cellSubstring.includes('$')) {
              inMath = true;
            }
          }
          curCell += ch;
        } else if (ch === '|' && !inCode && !inMath) {
          cells.push(curCell.trim());
          curCell = '';
        } else {
          curCell += ch;
        }
      }
      cells.push(curCell.trim());
      
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

    // Defensive Anti-Headless Synthesis: If document lacks leading <h1>, synthesize one from frontmatter.title
    if (frontmatter.title && !resultHtml.includes('</h1>')) {
      resultHtml = `<h1>${escapeHtml(frontmatter.title)}</h1>\n` + resultHtml;
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

