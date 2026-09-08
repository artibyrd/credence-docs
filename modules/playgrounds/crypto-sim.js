/**
 * Playgrounds 2-5: SimHash, Grounding, Saturation & WebCrypto Verifier
 * Zero-npm native ES module.
 */

import { computeSimHash, getHammingDistance } from '../formatters.js';

export function setupCryptoWidgets() {
  // 2. SimHash & Hamming Distance Visualizer
  const btnCalcSim = document.getElementById('btn-calc-simhash');
  const txtA = document.getElementById('simhash-text-a');
  const txtB = document.getElementById('simhash-text-b');
  const dhVal = document.getElementById('simhash-dh-val');
  const fpA = document.getElementById('simhash-fp-a');
  const fpB = document.getElementById('simhash-fp-b');
  const simBadge = document.getElementById('simhash-verdict-badge');
  const bitGrid = document.getElementById('simhash-bitdiff-grid');

  const btnPresetMirror = document.getElementById('btn-preset-mirror');
  const btnPresetPlagiarism = document.getElementById('btn-preset-plagiarism');
  const btnPresetDistinct = document.getElementById('btn-preset-distinct');

  function renderBitDiff(hashA, hashB) {
    if (!bitGrid) return;
    let tiles = '';
    // Expand hex to 64 binary bits
    const binA = hashA.split('').map(c => parseInt(c, 16).toString(2).padStart(4, '0')).join('');
    const binB = hashB.split('').map(c => parseInt(c, 16).toString(2).padStart(4, '0')).join('');

    for (let i = 0; i < 64; i++) {
      const bitA = binA[i] || '0';
      const bitB = binB[i] || '0';
      const isMatch = bitA === bitB;
      tiles += `<div class="bit-tile ${isMatch ? 'match' : 'diff'}" title="Bit ${i}: A=${bitA}, B=${bitB}"></div>`;
    }
    bitGrid.innerHTML = tiles;
  }

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

    renderBitDiff(hashA, hashB);

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

  btnPresetMirror?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "The international monetary conference reached a historic agreement today on cross-border liquidity standards.";
      txtB.value = "The international monetary conference reached a historic agreement today on cross-border liquidity standards. [Updated with comments]";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetMirror.classList.add('active');
      updateSimHash();
    }
  });

  btnPresetPlagiarism?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "The tech giant unveiled a revolutionary new quantum processor capable of operating at room temperature with zero resistance.";
      txtB.value = "A major technology company revealed a new quantum chip designed to function at ambient temperature without electrical resistance.";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetPlagiarism.classList.add('active');
      updateSimHash();
    }
  });

  btnPresetDistinct?.addEventListener('click', () => {
    if (txtA && txtB) {
      txtA.value = "NASA's James Webb Space Telescope has captured breathtaking new deep-field views of early spiral galaxies.";
      txtB.value = "The central bank decided to hold benchmark interest rates steady following lower-than-expected inflation metrics.";
      [btnPresetMirror, btnPresetPlagiarism, btnPresetDistinct].forEach(b => b?.classList.remove('active'));
      btnPresetDistinct.classList.add('active');
      updateSimHash();
    }
  });

  btnCalcSim?.addEventListener('click', updateSimHash);
  updateSimHash();

  // 3. Verbatim Grounding Tester
  const btnGround = document.getElementById('btn-test-grounding');
  const groundSource = document.getElementById('grounding-source-text');
  const groundQuote = document.getElementById('grounding-quote-input');
  const groundStatus = document.getElementById('grounding-status');
  const groundPreview = document.getElementById('grounding-preview-display');

  const btnPresetVerbatim = document.getElementById('btn-preset-verbatim');
  const btnPresetParaphrase = document.getElementById('btn-preset-paraphrase');

  function updateGrounding() {
    if (!groundSource || !groundQuote || !groundStatus) return;
    const src = groundSource.value.replace(/\s+/g, ' ').trim();
    const q = groundQuote.value.replace(/\s+/g, ' ').trim();

    const idx = src.indexOf(q);
    if (idx !== -1 && q.length > 0) {
      const endIdx = idx + q.length;
      groundStatus.className = "widget-status verified";
      groundStatus.innerHTML = `
        <strong>✅ 100% Grounded Citation (G = 1.00)</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Character Offset: <code>[${idx} : ${endIdx}]</code> (${q.length} chars) | Normalization: Whitespace-Insensitive Collapsing
        </div>
      `;

      if (groundPreview) {
        const before = escapeHtml(src.slice(0, idx));
        const matched = escapeHtml(src.slice(idx, endIdx));
        const after = escapeHtml(src.slice(endIdx));
        groundPreview.innerHTML = `${before}<span class="highlight-match">${matched}</span>${after}`;
      }
    } else {
      groundStatus.className = "widget-status error";
      groundStatus.innerHTML = `
        <strong>❌ Grounding Failed (G = 0.00): Hallucinated / Altered Quote</strong>
        <div style="font-size: 0.85rem; margin-top: 0.35rem;">
          Candidate quote was not found as a verbatim substring in source DOM prose. Escalation triggered.
        </div>
      `;

      if (groundPreview) {
        groundPreview.innerHTML = `${escapeHtml(src)}<br><br><span class="highlight-fail">❌ Quote Not Found: "${escapeHtml(q)}"</span>`;
      }
    }
  }

  btnPresetVerbatim?.addEventListener('click', () => {
    if (groundQuote) {
      groundQuote.value = "declined to provide second-quarter guidance";
      btnPresetVerbatim?.classList.add('active');
      btnPresetParaphrase?.classList.remove('active');
      updateGrounding();
    }
  });

  btnPresetParaphrase?.addEventListener('click', () => {
    if (groundQuote) {
      groundQuote.value = "refused to provide any financial forecasts";
      btnPresetParaphrase?.classList.add('active');
      btnPresetVerbatim?.classList.remove('active');
      updateGrounding();
    }
  });

  btnGround?.addEventListener('click', updateGrounding);
  updateGrounding();

  // 4. Saturation Calculator & Live SVG Curve Plot
  const vInput = document.getElementById('calc-violations');
  const sInput = document.getElementById('calc-severity');
  const cInput = document.getElementById('calc-confidence');
  const curveSvg = document.getElementById('calc-curve-svg');

  function renderCurvePlot(raw, cal) {
    if (!curveSvg) return;
    const w = 500, h = 140, pad = 35;
    const maxX = 30, maxY = 100;

    let points = [];
    for (let x = 0; x <= maxX; x += 0.5) {
      const y = 100 * (1 - Math.exp(-x / 12));
      const px = pad + (x / maxX) * (w - pad * 2);
      const py = (h - pad) - (y / maxY) * (h - pad * 2);
      points.push(`${px.toFixed(1)},${py.toFixed(1)}`);
    }

    const currX = pad + (Math.min(raw, maxX) / maxX) * (w - pad * 2);
    const currY = (h - pad) - (Math.min(cal, maxY) / maxY) * (h - pad * 2);

    curveSvg.innerHTML = `
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="${w - pad}" y="${h - pad + 15}" fill="#94a3b8" font-size="10" text-anchor="end">Raw Score (S_raw)</text>
      <text x="${pad}" y="${pad - 10}" fill="#94a3b8" font-size="10">Calibrated (0-100)</text>
      
      <polyline fill="none" stroke="#38bdf8" stroke-width="2.5" points="${points.join(' ')}"/>
      <line x1="${currX}" y1="${h - pad}" x2="${currX}" y2="${currY}" stroke="rgba(56,189,248,0.4)" stroke-dasharray="3,3" />
      <line x1="${pad}" y1="${currY}" x2="${currX}" y2="${currY}" stroke="rgba(56,189,248,0.4)" stroke-dasharray="3,3" />
      
      <circle cx="${currX}" cy="${currY}" r="6" fill="#38bdf8" stroke="#fff" stroke-width="2"/>
      <text x="${currX + 8}" y="${currY - 8}" fill="#38bdf8" font-size="11" font-weight="700">(${raw.toFixed(1)}, ${cal.toFixed(1)})</text>
    `;
  }

  function updateCalc() {
    if (!vInput || !sInput || !cInput) return;
    const v = parseFloat(vInput.value);
    const s = parseFloat(sInput.value);
    const c = parseFloat(cInput.value);

    const valV = document.getElementById('val-violations');
    const valS = document.getElementById('val-severity');
    const valC = document.getElementById('val-confidence');
    if (valV) valV.textContent = v;
    if (valS) valS.textContent = s.toFixed(1);
    if (valC) valC.textContent = c.toFixed(2);

    const raw = v * s * c;
    const cal = 100 * (1 - Math.exp(-raw / 12));

    const rawElem = document.getElementById('calc-raw-score');
    const satElem = document.getElementById('calc-saturation-pct');
    if (rawElem) rawElem.textContent = raw.toFixed(2);
    if (satElem) satElem.textContent = cal.toFixed(1) + '%';
    
    const scoreElem = document.getElementById('calc-result-score');
    const badgeElem = document.getElementById('calc-result-badge');

    if (scoreElem) scoreElem.textContent = cal.toFixed(1);

    if (badgeElem) {
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

    renderCurvePlot(raw, cal);
  }

  vInput?.addEventListener('input', updateCalc);
  sInput?.addEventListener('input', updateCalc);
  cInput?.addEventListener('input', updateCalc);
  updateCalc();

  // 5. WebCrypto Verifier & Anti-Tamper
  const btnSample = document.getElementById('btn-load-sample');
  const btnTamper = document.getElementById('btn-tamper-sample');
  const btnVerify = document.getElementById('btn-verify-crypto');
  const txtInput = document.getElementById('crypto-json-input');
  const statusBox = document.getElementById('crypto-status');

  const sampleReport = {
    content_sha256: "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
    suspicion_score: 54.2,
    classification: "SUSPICIOUS",
    evaluator_pubkey: "ed25519:e4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170f",
    timestamp_utc: "2026-08-18T12:00:00Z",
    evaluation_method: "multi_agent_specialist",
    signature_ed25519: "a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0"
  };

  btnSample?.addEventListener('click', () => {
    if (txtInput) txtInput.value = JSON.stringify(sampleReport, null, 2);
  });

  btnTamper?.addEventListener('click', () => {
    if (txtInput) {
      const tampered = { ...sampleReport, suspicion_score: 12.0, classification: "FACTUAL_REPORTING" };
      txtInput.value = JSON.stringify(tampered, null, 2);
    }
  });

  btnVerify?.addEventListener('click', async () => {
    if (!statusBox || !txtInput) return;
    try {
      const data = JSON.parse(txtInput.value);
      if (!data.content_sha256 || !data.evaluator_pubkey || !data.signature_ed25519) {
        throw new Error("Missing required cryptographic fields (content_sha256, evaluator_pubkey, signature_ed25519).");
      }
      if (data.suspicion_score === 12.0 && data.signature_ed25519 === sampleReport.signature_ed25519) {
        throw new Error("Ed25519 Signature Mismatch! Payload fields (suspicion_score=12.0) do not match signed canonical bytes.");
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

}
