---
title: "Interactive Zero-Build Playgrounds"
description: "In-browser WebCrypto Ed25519 verification, 13-node mesh gossip simulator, SimHash calculator, and taxonomy explorer."
---

Experience Credence's core mathematical models, cryptographic verification, and distributed consensus in real time directly inside your browser. All tools below run **100% client-side** using standard W3C Web APIs with zero external dependencies.

---

## 1. 13-Node Watts-Strogatz Mesh Gossip Simulator

Interact with a live Watts-Strogatz small-world network ($N=13, k=4, p=0.20$). Simulate multi-hop epidemic gossip diffusion, test network split tolerance, and observe Byzantine cartel resilience:

<div class="interactive-widget" id="mesh-simulator-widget">
  <div class="widget-toolbar">
    <button type="button" id="btn-broadcast-gossip" class="widget-btn primary">Broadcast Attestation from Node 1</button>
    <button type="button" id="btn-simulate-split" class="widget-btn">Simulate Barbell Network Split</button>
    <button type="button" id="btn-reset-mesh" class="widget-btn">Reset 13-Node Cluster</button>
  </div>

  <div class="mesh-visualizer-container">
    <svg id="mesh-svg" viewBox="0 0 600 400" class="mesh-svg-canvas">
      <!-- Injected dynamically by app.js -->
    </svg>
  </div>

  <div id="mesh-event-log" class="widget-status idle">
    <span>Ready. Click "Broadcast Attestation from Node 1" to observe 3-hop gossip diffusion.</span>
  </div>
</div>

---

## 2. SimHash-64 & Hamming Distance Visualizer

Compare two articles to compute their 64-bit SimHash fingerprints and Hamming Distance ($D_H$). Detect syndicated mirror networks and near-duplicate plagiarists:

<div class="interactive-widget" id="simhash-calculator-widget">
  <div class="widget-row">
    <div class="widget-col">
      <label class="widget-label">Article A (Original Text):</label>
      <textarea id="simhash-text-a" class="widget-textarea" style="height: 100px;">The international monetary conference reached a historic agreement today on cross-border liquidity standards.</textarea>
    </div>
    <div class="widget-col">
      <label class="widget-label">Article B (Mirror / Revision):</label>
      <textarea id="simhash-text-b" class="widget-textarea" style="height: 100px;">The international monetary conference reached a historic agreement today on cross-border liquidity standards. [Updated with comments]</textarea>
    </div>
  </div>

  <div class="widget-toolbar" style="margin-top: 1rem;">
    <button type="button" id="btn-calc-simhash" class="widget-btn primary">Compute 64-Bit SimHash &amp; Hamming Distance</button>
  </div>

  <div id="simhash-result-box" class="widget-result-box" style="margin-top: 1rem; text-align: left;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div class="widget-metric-title">Hamming Distance (\(D_H\))</div>
        <div id="simhash-dh-val" class="widget-score-big" style="font-size: 2.25rem;">--</div>
      </div>
      <div id="simhash-verdict-badge" class="verdict-tag reliable">AWAITING INPUT</div>
    </div>
    <div style="font-size: 0.85rem; margin-top: 0.75rem; color: #cbd5e1;">
      <div>Fingerprint A: <code id="simhash-fp-a" style="font-size: 0.75rem;">--</code></div>
      <div style="margin-top: 0.25rem;">Fingerprint B: <code id="simhash-fp-b" style="font-size: 0.75rem;">--</code></div>
    </div>
  </div>
</div>

---

## 3. Verbatim Quote Grounding Tester (\(G=1.0\))

Test character offset normalization and verbatim grounding validation. Ensure that model citations are 100% grounded in source DOM prose:

<div class="interactive-widget" id="grounding-tester-widget">
  <label class="widget-label">Source DOM Prose Text:</label>
  <textarea id="grounding-source-text" class="widget-textarea" style="height: 90px;">The company reported revenue of $4.2 billion, but declined to provide second-quarter guidance due to supply chain headwinds.</textarea>

  <label class="widget-label" style="margin-top: 1rem;">Candidate Violation Quote to Verify:</label>
  <input type="text" id="grounding-quote-input" class="search-input" value="declined to provide second-quarter guidance">

  <div class="widget-toolbar" style="margin-top: 1rem;">
    <button type="button" id="btn-test-grounding" class="widget-btn primary">Validate Verbatim Grounding</button>
  </div>

  <div id="grounding-status" class="widget-status idle">
    <span>Click "Validate Verbatim Grounding" to calculate character offsets and precision score.</span>
  </div>
</div>

---

## 4. Calibrated Saturation Curve Calculator

Credence uses an exponential decay function to prevent score clipping:

$$S_{\text{calibrated}} = 100 \times \left(1 - e^{-S_{\text{raw}} / 12}\right)$$

<div class="interactive-widget" id="saturation-calculator-widget">
  <div class="widget-row">
    <div class="widget-col">
      <label for="calc-violations" class="widget-label">Number of Violations: <span id="val-violations" class="widget-val">3</span></label>
      <input type="range" id="calc-violations" min="1" max="10" value="3" class="widget-slider">
      
      <label for="calc-severity" class="widget-label">Average Severity (1–5): <span id="val-severity" class="widget-val">3.0</span></label>
      <input type="range" id="calc-severity" min="1.0" max="5.0" step="0.5" value="3.0" class="widget-slider">
      
      <label for="calc-confidence" class="widget-label">Model Confidence (0–1.0): <span id="val-confidence" class="widget-val">0.90</span></label>
      <input type="range" id="calc-confidence" min="0.1" max="1.0" step="0.05" value="0.90" class="widget-slider">
    </div>

    <div class="widget-col widget-result-box">
      <div class="widget-metric-title">Calibrated Suspicion Score</div>
      <div id="calc-result-score" class="widget-score-big">48.6</div>
      <div id="calc-result-badge" class="verdict-tag mixed">MIXED / QUESTIONABLE</div>
      <div class="widget-submetrics">
        <div>Raw Score (\(S_{\text{raw}}\)): <strong id="calc-raw-score">8.10</strong></div>
        <div>Saturation: <strong id="calc-saturation-pct">48.6%</strong> of theoretical max</div>
      </div>
    </div>
  </div>
</div>

---

## 5. In-Browser Ed25519 WebCrypto Verifier

<div class="interactive-widget" id="webcrypto-verifier-widget">
  <div class="widget-toolbar">
    <button type="button" id="btn-load-sample" class="widget-btn">Load Sample Signed Attestation</button>
    <button type="button" id="btn-verify-crypto" class="widget-btn primary">Verify Signature In-Browser</button>
  </div>

  <textarea id="crypto-json-input" class="widget-textarea" placeholder="Paste signed JSON here..."></textarea>
  
  <div id="crypto-status" class="widget-status idle">
    <span>Ready to verify. Paste JSON or load sample above.</span>
  </div>
</div>

---

## 6. Live Namespaced Taxonomy Rule Explorer

<div class="interactive-widget" id="taxonomy-explorer-widget">
  <input type="text" id="taxonomy-search-input" class="search-input" placeholder="Filter rules by name, severity, or domain...">
  <div class="taxonomy-table-container">
    <table class="taxonomy-table">
      <thead>
        <tr>
          <th>Namespaced Rule URI</th>
          <th>Severity</th>
          <th>Domain Cluster</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody id="taxonomy-table-body">
        <!-- Injected via JavaScript -->
      </tbody>
    </table>
  </div>
</div>

---

## 7. Multi-Model Cost, Latency & Sovereignty Comparator

Compare estimated monthly operational costs, latency (TTFT), and cloud sovereignty across different frontier APIs and local models:

<div class="interactive-widget" id="model-comparator-widget">
  <div class="widget-row">
    <div class="widget-col">
      <label for="comp-articles-slider" class="widget-label">Daily Audited Articles: <span id="comp-articles-val" class="widget-val">500</span></label>
      <input type="range" id="comp-articles-slider" min="10" max="2000" step="10" value="500" class="widget-slider">

      <label for="comp-length-slider" class="widget-label">Average Article Length (Words): <span id="comp-length-val" class="widget-val">1,500</span></label>
      <input type="range" id="comp-length-slider" min="500" max="5000" step="250" value="1500" class="widget-slider">
    </div>
  </div>

  <div class="model-cards-grid" id="model-cards-container" style="margin-top: 1.5rem;">
    <!-- Injected dynamically by app.js -->
  </div>
</div>

---

## 8. Zero-Trust Dynamic Feed Discovery & Quality (\(F_j\)) Simulator

Test how Credence dynamically evaluates candidate feeds, calculates Topic Entropy (\(H_{\text{topic}}\)), detects commercial astroturfing (The "Pizza Hut Test"), and determines whether a feed is approved for active mesh rotation:

$$F_j = 0.35 (1.0 - \bar{S}_j/100) + 0.25 G_j + 0.20 H_{\text{topic}} + 0.20 T_{\text{freshness}}$$

<div class="interactive-widget" id="feed-simulator-widget">
  <div class="widget-row">
    <div class="widget-col">
      <label for="feed-suspicion-slider" class="widget-label">Average Suspicion (\(\bar{S}_j\)): <span id="feed-suspicion-val" class="widget-val">12.0</span> / 100</label>
      <input type="range" id="feed-suspicion-slider" min="0" max="100" step="1" value="12" class="widget-slider">

      <label for="feed-grounding-slider" class="widget-label">Verbatim Grounding Precision (\(G_j\)): <span id="feed-grounding-val" class="widget-val">95%</span></label>
      <input type="range" id="feed-grounding-slider" min="0" max="100" step="5" value="95" class="widget-slider">

      <label for="feed-entropy-slider" class="widget-label">Topic Entropy / Diversity (\(H_{\text{topic}}\)): <span id="feed-entropy-val" class="widget-val">0.85</span></label>
      <input type="range" id="feed-entropy-slider" min="0.0" max="1.0" step="0.05" value="0.85" class="widget-slider">

      <label for="feed-freshness-slider" class="widget-label">Cadence Freshness Index (\(T_{\text{freshness}}\)): <span id="feed-freshness-val" class="widget-val">0.90</span></label>
      <input type="range" id="feed-freshness-slider" min="0.1" max="1.0" step="0.05" value="0.90" class="widget-slider">
    </div>

    <div class="widget-col widget-result-box">
      <div class="widget-metric-title">Composite Feed Quality Score (\(F_j\))</div>
      <div id="feed-result-score" class="widget-score-big" style="color: #4ade80;">0.89</div>
      <div id="feed-result-badge" class="verdict-tag reliable">ACTIVE ROTATION (APPROVED)</div>
      <div class="widget-submetrics" style="margin-top: 1rem;">
        <div>Astroturfing Alert: <strong id="feed-astroturf-status" style="color: #4ade80;">NONE (Diverse Coverage)</strong></div>
        <div>Mesh Seeding: <strong style="color: #38bdf8;">ENABLED (0-Token Work-Sharing)</strong></div>
      </div>
    </div>
  </div>
</div>
