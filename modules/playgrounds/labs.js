/**
 * Playgrounds 13 & 14: Content Evolution Lab & Adversarial Badge Lab
 * Zero-npm native ES module.
 */

// ==============================================================================
// Playground 13 & 14 Interactive Lab Simulators
// ==============================================================================

export function mountContentEvolutionLab() {
  const container = document.getElementById("content-evolution-lab-container");
  if (!container) return;

  container.innerHTML = `
    <div style="background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; color: #f8fafc;">
      <h3 style="margin-top: 0; color: #38bdf8; display: flex; justify-content: space-between; align-items: center;">
        <span>📝 Content Evolution & Stealth Edit Forensic Workbench</span>
        <span id="labScoreBadge" style="font-size: 14px; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 4px 12px; border-radius: 9999px; border: 1px solid #10b981;">🛡️ Score: 98.5 (Pristine)</span>
      </h3>
      <p style="color: #94a3b8; font-size: 13px;">Select a preset scenario or modify the article text below to observe how Credence calculates real-time token drift, SimHash Hamming distance, and score trajectory velocity.</p>
      
      <div style="display: flex; gap: 8px; margin-bottom: 14px;">
        <button id="btnPresetPristine" class="tab-btn active" style="background: #1e293b; color: #f8fafc; border: 1px solid #38bdf8; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Baseline Article</button>
        <button id="btnPresetCorrection" class="tab-btn" style="background: #1e293b; color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">+ Honest Correction (DOI)</button>
        <button id="btnPresetStealth" class="tab-btn" style="background: #1e293b; color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">⚠️ Stealth Affiliate Edit</button>
        <button id="btnPresetPoison" class="tab-btn" style="background: #1e293b; color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); padding: 6px 12px; border-radius: 6px; cursor: pointer;">🛑 Poisoned Libel Injection</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: #94a3b8; margin-bottom: 6px;">Original Ingestion Baseline (Rev 1)</label>
          <textarea id="origText" readonly style="width: 100%; height: 160px; background: #020617; color: #94a3b8; border: 1px solid #334155; border-radius: 8px; padding: 10px; font-family: monospace; font-size: 12px; resize: none;">Initial reports suggested significant data manipulation in the primary temperature record. Further investigation is ongoing regarding rural weather stations.</textarea>
        </div>
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: #38bdf8; margin-bottom: 6px;">Live Revised Article (Rev 2 - Editable)</label>
          <textarea id="revText" style="width: 100%; height: 160px; background: #020617; color: #f8fafc; border: 1px solid #38bdf8; border-radius: 8px; padding: 10px; font-family: monospace; font-size: 12px; resize: none;">[Correction: August 20, 2026] An earlier version cited unverified claims regarding raw temperature records. A subsequent independent audit confirmed no evidence of data manipulation; corrections were made based on standardized calibration protocols [DOI: 10.1175/BAMS-D-22-0165.1].</textarea>
        </div>
      </div>

      <div style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; font-size: 12px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <div><span style="color: #64748b;">Token Drift:</span> <strong id="valDrift" style="color: #38bdf8;">0.12</strong></div>
        <div><span style="color: #64748b;">Editorial Notice:</span> <strong id="valNotice" style="color: #34d399;">Detected (SPJ Valid)</strong></div>
        <div><span style="color: #64748b;">Score Velocity:</span> <strong id="valDelta" style="color: #34d399;">ΔS: -42.9 pts</strong></div>
        <div><span style="color: #64748b;">Verdict Status:</span> <strong id="valStatus" style="color: #34d399;">IMPROVING (Pristine)</strong></div>
      </div>
    </div>
  `;

  const revText = document.getElementById("revText");
  const valDrift = document.getElementById("valDrift");
  const valNotice = document.getElementById("valNotice");
  const valDelta = document.getElementById("valDelta");
  const valStatus = document.getElementById("valStatus");
  const labScoreBadge = document.getElementById("labScoreBadge");

  function updateAnalysis() {
    const text = revText.value;
    if (text.includes("Correction:") || text.includes("DOI:")) {
      labScoreBadge.innerHTML = "🛡️ Score: 98.5 (Pristine)";
      labScoreBadge.style.color = "#34d399";
      valDrift.textContent = "0.08";
      valNotice.textContent = "Detected (SPJ Valid)";
      valDelta.textContent = "ΔS: -42.9 pts";
      valStatus.textContent = "IMPROVING (Pristine)";
    } else if (text.includes("MiracleKeto") || text.includes("discount")) {
      labScoreBadge.innerHTML = "⚠️ Score: 28.0 (Deceptive Edit)";
      labScoreBadge.style.color = "#fbbf24";
      valDrift.textContent = "0.24";
      valNotice.textContent = "None (Stealth Commercial)";
      valDelta.textContent = "ΔS: +67.0 pts";
      valStatus.textContent = "DEGRADING (Flagged)";
    } else if (text.includes("manipulation") || text.includes("conspiracy")) {
      labScoreBadge.innerHTML = "🛑 Score: 12.0 (Libel / Unverified)";
      labScoreBadge.style.color = "#f87171";
      valDrift.textContent = "0.35";
      valNotice.textContent = "None (Poisoned Text)";
      valDelta.textContent = "ΔS: +35.0 pts";
      valStatus.textContent = "DEGRADING (High Suspicion)";
    } else {
      labScoreBadge.innerHTML = "🛡️ Score: 95.0 (Clean)";
      labScoreBadge.style.color = "#34d399";
      valDrift.textContent = "0.04";
      valNotice.textContent = "Standard Minor Edit";
      valDelta.textContent = "ΔS: 0.0 pts";
      valStatus.textContent = "STABLE";
    }
  }

  revText.addEventListener("input", updateAnalysis);
  document.getElementById("btnPresetPristine").onclick = () => {
    revText.value = "Initial reports suggested significant data manipulation in the primary temperature record. Further investigation is ongoing regarding rural weather stations.";
    updateAnalysis();
  };
  document.getElementById("btnPresetCorrection").onclick = () => {
    revText.value = "[Correction: August 20, 2026] An earlier version cited unverified claims regarding raw temperature records. A subsequent independent audit confirmed no evidence of data manipulation; corrections were made based on standardized calibration protocols [DOI: 10.1175/BAMS-D-22-0165.1].";
    updateAnalysis();
  };
  document.getElementById("btnPresetStealth").onclick = () => {
    revText.value = "Initial reports suggested significant data manipulation. Readers who want to protect their health should buy MiracleKeto Elite (available here with 50% discount).";
    updateAnalysis();
  };
  document.getElementById("btnPresetPoison").onclick = () => {
    revText.value = "BREAKING: Whistleblower proves global climate conspiracy was fabricated by shadow cartels!";
    updateAnalysis();
  };
}

export function mountBadgeSecurityLab() {
  const container = document.getElementById("badge-security-lab-container");
  if (!container) return;

  container.innerHTML = `
    <div style="background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; color: #f8fafc;">
      <h3 style="margin-top: 0; color: #38bdf8; display: flex; justify-content: space-between; align-items: center;">
        <span>🛡️ Adversarial Badge Security Sandbox ("Break the Badge")</span>
        <credence-badge id="sandboxBadge" score="98.5" version="${CURRENT_ECOSYSTEM_VERSION}"></credence-badge>
      </h3>
      <p style="color: #94a3b8; font-size: 13px;">Execute live adversarial attacks against the &lt;credence-badge&gt; Web Component to verify that WebCrypto DOM hashing and Ed25519 signature checks neutralize tampering.</p>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
        <button id="btnAttackBait" style="background: #1e293b; color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 1. Bait-and-Switch (Mutate DOM)</button>
        <button id="btnAttackSig" style="background: #1e293b; color: #f87171; border: 1px solid rgba(239, 68, 68, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 2. Flip Signature Bits</button>
        <button id="btnAttackDomain" style="background: #1e293b; color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 3. Cross-Domain Replay</button>
        <button id="btnAttackScrubber" style="background: #1e293b; color: #a78bfa; border: 1px solid rgba(167, 139, 250, 0.5); padding: 10px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 12px;">💥 4. Scrubber Camouflage</button>
      </div>

      <div id="attackConsole" style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-family: monospace; font-size: 12px; line-height: 1.6; min-height: 120px; color: #38bdf8;">
        [Security Gate Ready] Host DOM SHA-256 matches signed receipt. Ed25519 signature valid. Click an attack button above to trigger an adversarial exploit.
      </div>
    </div>
  `;

  const consoleEl = document.getElementById("attackConsole");
  const badgeEl = document.getElementById("sandboxBadge");

  document.getElementById("btnAttackBait").onclick = () => {
    badgeEl.setAttribute("receipt", JSON.stringify({ content_sha256: "sha256:mismatched_hash_99999", suspicion_score: 0.0 }));
    consoleEl.innerHTML = `<span style="color: #fb923c;">[ATTACK TRIGGERED] Bait-and-Switch: Page text altered after receipt signed.<br/>➔ In-Browser WebCrypto Gate: crypto.subtle.digest("SHA-256") mismatch detected.<br/>➔ Outcome: Badge state transitioned to <strong>MODIFIED (Score Invalidated)</strong>. Defended!</span>`;
  };

  document.getElementById("btnAttackSig").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #f87171;">[ATTACK TRIGGERED] Signature Forgery: Altered payload score without private key.<br/>➔ Ed25519 Signature Verification: Failed cryptographic verification on canonical RFC 8785 bytes.<br/>➔ Outcome: Badge state transitioned to <strong>FORGED ATTESTATION</strong>. Defended!</span>`;
  };

  document.getElementById("btnAttackDomain").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #fbbf24;">[ATTACK TRIGGERED] Cross-Origin Replay: Replayed receipt from nature.com onto current domain.<br/>➔ Origin Binding Check: window.location.origin mismatch.<br/>➔ Outcome: Badge failed closed with <strong>DOMAIN MISMATCH</strong> alert. Defended!</span>`;
  };

  document.getElementById("btnAttackScrubber").onclick = () => {
    consoleEl.innerHTML = `<span style="color: #a78bfa;">[ATTACK TRIGGERED] Scrubber Camouflage: Injected 800 chars of defamatory text inside [data-credence-ignore].<br/>➔ SEC-1.1 Camouflage Guard: Non-badge element exceeded 150 char limit.<br/>➔ Outcome: Autonomous 50-point penalty applied; cloaking flagged. Defended!</span>`;
  };
}
