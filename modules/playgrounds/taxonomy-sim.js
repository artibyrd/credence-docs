/**
 * Playgrounds 6-7: Taxonomy Explorer & Multi-Model Comparator
 * Zero-npm native ES module.
 */

import { FULL_TAXONOMY_RULES } from '../taxonomy-rules.js';
import { MODELS_PRICING } from '../../app.js';

export function setupTaxonomyWidgets() {
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

}
