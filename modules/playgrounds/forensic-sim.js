/**
 * Playgrounds 8-12: Feed Simulator, Galileo Rule, Scanner, ClaimReview & Token Governor
 * Zero-npm native ES module.
 */

import { escapeHtml } from '../formatters.js';

export function setupForensicWidgets() {
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
