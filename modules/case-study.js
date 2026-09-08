/**
 * Credence Documentation Interactive Case Study & Publisher Widgets
 * Zero-npm native ES module.
 */

import { escapeHtml } from './formatters.js';

export function setupInMaricopaCaseStudyWidget() {
  const workbench = document.getElementById('inmaricopa-forensics-workbench');
  if (!workbench) return;

  const CASE_STUDY_ARTICLES = [
    {
      id: "land-sale-op-ed",
      title: "Manfredi: Land sale is not a scandal, no matter how badly some want one",
      byline: "Vincent Manfredi",
      date: "2026-08-16",
      url: "https://inmaricopa.com/copper-sky-land-sale-is-no-scandal/",
      suspicion: 78.5,
      classification: "DECEPTIVE_OR_UNETHICAL",
      band: "DECEPTIVE",
      bandClass: "deceptive",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">City government should be open and transparent. But when public records requests are weaponized for personal political vendettas, it harms the entire community.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="IEP-AD-HOMINEM">Province resident Bill Robertson recently submitted a public records request regarding the sale of City-owned land south of Copper Sky... Robertson is now digging through records, apparently hoping to manufacture the insinuation that I somehow broke the law... That is the sickness behind this behavior... your obsession with attacking me has become your entire political personality. It is pathetic.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.1">The businessman is Scott Bartle, a longtime Maricopa business owner who founded InMaricopa only months after the City incorporated. He began selling InMaricopa to me in 2018... Scott has no ownership interest in InMaricopa. He works as its publisher because I intentionally remain separate from the editorial side of the company... The sale was then approved unanimously by the City Council. Let me repeat that: unanimously.</mark></p>
        <p style="margin-bottom: 0.85rem;">I voted in favor of this land disposal because it benefits the city tax rolls and brings private enterprise to the Copper Sky corridor.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.2">For City-related questions, email me at Vincent.Manfredi@maricopa-az.gov or call the office at (520) 316-6823... Vincent Manfredi, Maricopa City Councilmember &amp; owner of InMaricopa</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.1",
          domain: "JOURNALISTIC_ETHICS",
          name: "Avoid Conflicts of Interest",
          severity: "4/5",
          confidence: "95%",
          reasoning: "Councilmember casting an official municipal vote disposing of city-owned land to his own business publisher (Scott Bartle) without independent recusal."
        },
        {
          rule_id: "SPJ-3.2",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish Advocacy from News",
          severity: "4/5",
          confidence: "92%",
          reasoning: "Using commercial monopolistic news column to disseminate official municipal government contact info alongside political self-defense."
        },
        {
          rule_id: "IEP-AD-HOMINEM",
          domain: "INFORMAL_FALLACY",
          name: "Ad Hominem Attack",
          severity: "3/5",
          confidence: "90%",
          reasoning: "Attacking constituent resident filing statutory FOIA public records request as 'a sickness' and 'pathetic' instead of addressing land valuation evidence."
        }
      ],
      sha256: "4b5d63ec0db2077e6e580e22b02008fa9df3bfcb834f828a2a0ffeb0cefa89b2",
      sig: "50f4ae2de371d44f2da22d4129f7395f43d5ba3619533df9c5213fbd2b2cff4fa89097742e2e521a56f354654b9804a79b20d0b5ecb27f1530504688f85da404"
    },
    {
      id: "wellness-clinic-ad",
      title: "A new option for pigmentation and tattoo removal comes to Maricopa next month",
      byline: "InMaricopa Staff",
      date: "2026-08-14",
      url: "https://inmaricopa.com/a-new-option-for-pigmentation-and-tattoo-removal-comes-to-maricopa-next-month/",
      suspicion: 74.0,
      classification: "DECEPTIVE_OR_UNETHICAL",
      band: "DECEPTIVE",
      bandClass: "deceptive",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Local residents seeking laser skin rejuvenation will soon have access to cutting-edge picosecond laser technology right here in the city.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.3">That's why I'm excited to officially introduce Picofy to Maricopa Wellness Center, and I'd love for you to experience it for yourself at our exclusive launch event on Sept. 9... We'll have light bites, giveaways, raffles and one lucky attendee will win our grand prize: a free Picofy treatment!</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="DEC-1.4">We'll be offering exclusive event pricing available only during our Picofy launch event.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="AST-1.1">Maricopa Wellness Center<br>41600 W. Smith Enke Road, Building 14, Suite 3<br>Maricopa, AZ 85138<br>520-464-6193<br>MaricopaWellnessCenter.com</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.3",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish News from Advertising",
          severity: "4/5",
          confidence: "96%",
          reasoning: "First-person direct sales pitch by commercial clinic owner published under standard civic news headline without '[Sponsored Content]' label."
        },
        {
          rule_id: "DEC-1.4",
          domain: "DECEPTIVE_PATTERN",
          name: "Disguised Native Advertorial",
          severity: "4/5",
          confidence: "94%",
          reasoning: "Promoting 'exclusive event-only pricing available only during launch' within an apparent local health journalism report."
        },
        {
          rule_id: "AST-1.1",
          domain: "DECEPTIVE_PATTERN",
          name: "Astroturfing & Commercial Payload",
          severity: "4/5",
          confidence: "95%",
          reasoning: "Commercial contact directory and phone number block embedded directly into syndicated editorial news feed."
        }
      ],
      sha256: "7c1e8a93bf029e4d1568c049f7e8a9c2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
      sig: "7b4c81a92e10d54c8e7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a"
    },
    {
      id: "rental-property-ad",
      title: "What landlords discover after managing a rental on their own",
      byline: "InMaricopa Staff",
      date: "2026-08-12",
      url: "https://inmaricopa.com/what-landlords-discover-after-managing-a-rental-on-their-own/",
      suspicion: 68.0,
      classification: "SUSPICIOUS",
      band: "SUSPICIOUS",
      bandClass: "suspicious",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Managing rental properties can quickly become an unexpected full-time burden for homeowner investors navigating maintenance, late payments, and tenant disputes.</p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="SPJ-3.3">At Crest Premier Properties, we believe professional property management is an investment in protecting both your property and your peace of mind... We handle tenant screening, 24/7 maintenance, and rent collection seamlessly.</mark></p>
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight" data-rule="AST-1.1">Phone: 480-838-9558<br>Web: CrestPremierProperties.com<br>Address: 4625 S. Lakeshore Drive, Suite 300, Tempe</mark></p>
      `,
      violations: [
        {
          rule_id: "SPJ-3.3",
          domain: "JOURNALISTIC_ETHICS",
          name: "Distinguish News from Advertising",
          severity: "4/5",
          confidence: "93%",
          reasoning: "Commercial property manager promotional essay disguised as generic civic advisory journalism without advertising disclosure."
        },
        {
          rule_id: "AST-1.1",
          domain: "DECEPTIVE_PATTERN",
          name: "Astroturfing & Commercial Payload",
          severity: "4/5",
          confidence: "92%",
          reasoning: "Commercial lead-generation directory payload embedded without Schema.org AdvertiserContentArticle markup."
        }
      ],
      sha256: "9e3c2b1a0d8f7e6c5b4a3928170f6e5d4c3b2a1f0c8e7d6b5a4938271605f4e3",
      sig: "2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c"
    },
    {
      id: "sr347-blotter",
      title: "Bicyclist dead after SR 347 crash south of city",
      byline: "InMaricopa Staff",
      date: "2026-08-13",
      url: "https://inmaricopa.com/bicyclist-dead-after-sr-347-crash-south-of-city/",
      suspicion: 42.0,
      classification: "SUSPICIOUS",
      band: "SUSPICIOUS",
      bandClass: "suspicious",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;"><mark class="violation-highlight warning" data-rule="SPJ-1.1">The Arizona Department of Public Safety said a bicyclist was struck by a pickup truck on State Route 347 south of Maricopa... the pickup collided with them in the same lane, DPS said. The bicyclist was pronounced dead at the scene. DPS did not immediately identify the bicyclist. The driver of the pickup, who was not identified, was arrested on suspicion of driving under the influence, DPS said.</mark></p>
        <p style="margin-bottom: 0.85rem;">Traffic was restricted to one lane for several hours while investigators cleared the scene.</p>
      `,
      violations: [
        {
          rule_id: "SPJ-1.1",
          domain: "JOURNALISTIC_ETHICS",
          name: "Verify Sourcing Before Release",
          severity: "3/5",
          confidence: "88%",
          reasoning: "100% single-source pass-through of law enforcement dispatch press statement without independent witness check or reconstruction corroboration."
        }
      ],
      sha256: "1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8",
      sig: "4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a39281"
    },
    {
      id: "overpass-history",
      title: "HISTORY: When John Wayne Parkway overpass took shape",
      byline: "InMaricopa Staff",
      date: "2026-08-10",
      url: "https://inmaricopa.com/history-when-john-wayne-parkway-overpass-took-shape/",
      suspicion: 8.0,
      classification: "FACTUAL_REPORTING",
      band: "CLEAN",
      bandClass: "reliable",
      citationsCount: "100% (G=1.00)",
      bodyHtml: `
        <p style="margin-bottom: 0.85rem;">Long before the six-lane flyover bridged the Union Pacific Railroad tracks, Maricopa drivers routinely waited through 20-minute freight train delays that severed the city in two.</p>
        <p style="margin-bottom: 0.85rem;">Construction of the $55 million overpass began in 2017 after years of regional transit coordination between ADOT, the City of Maricopa, and federal highway partners. The structure officially opened to vehicular traffic in July 2019.</p>
        <p style="margin-bottom: 0.85rem;">Archival photographs from the city historical society depict the monumental concrete piers rising above the desert floor during the initial foundation pours.</p>
      `,
      violations: [],
      sha256: "3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c",
      sig: "9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c5b4a3928170fe4d9b2a1f0c8e7d6b5a4938271605f4e3d2c1b0a9f8e7d6c"
    }
  ];

  let currentArticleIdx = 0;

  const btnPills = workbench.querySelectorAll('#wb-article-pills button');
  const verdictBadge = workbench.getElementById ? workbench.getElementById('wb-verdict-badge') : document.getElementById('wb-verdict-badge');
  const previewTitle = document.getElementById('wb-preview-title');
  const previewByline = document.getElementById('wb-preview-byline');
  const previewDate = document.getElementById('wb-preview-date');
  const previewUrl = document.getElementById('wb-preview-url');
  const previewBody = document.getElementById('wb-preview-body');
  const suspicionDisplay = document.getElementById('wb-suspicion-display');
  const classificationDisplay = document.getElementById('wb-classification-display');
  const citationsDisplay = document.getElementById('wb-citations-count');
  const violationsDisplay = document.getElementById('wb-violations-count');
  const ruleCardsList = document.getElementById('wb-rule-cards-list');
  const attestationJson = document.getElementById('wb-attestation-json');
  const btnCopyJson = document.getElementById('btn-wb-copy-json');
  const btnDownloadJson = document.getElementById('btn-wb-download-json');

  function renderArticle(idx) {
    currentArticleIdx = idx;
    const art = CASE_STUDY_ARTICLES[idx];
    if (!art) return;

    btnPills.forEach((btn, bIdx) => {
      if (bIdx === idx) {
        btn.classList.add('primary');
      } else {
        btn.classList.remove('primary');
      }
    });

    if (verdictBadge) {
      verdictBadge.className = `verdict-tag ${art.bandClass}`;
      verdictBadge.textContent = `${art.band} (${art.suspicion.toFixed(1)})`;
    }

    if (previewTitle) previewTitle.textContent = art.title;
    if (previewByline) previewByline.textContent = art.byline;
    if (previewDate) previewDate.textContent = art.date;
    if (previewUrl) {
      previewUrl.href = art.url;
      previewUrl.textContent = art.url.replace('https://', '').substring(0, 32) + '...';
    }

    if (previewBody) {
      previewBody.innerHTML = art.bodyHtml;
      // Add click listener on highlight marks
      previewBody.querySelectorAll('.violation-highlight').forEach(mark => {
        mark.addEventListener('click', () => {
          const ruleId = mark.getAttribute('data-rule');
          highlightRuleCard(ruleId);
        });
      });
    }

    if (suspicionDisplay) {
      suspicionDisplay.textContent = art.suspicion.toFixed(1);
      suspicionDisplay.style.color = art.suspicion >= 60 ? '#ef4444' : (art.suspicion > 15 ? '#f59e0b' : '#4ade80');
    }

    if (classificationDisplay) {
      classificationDisplay.textContent = `Classification: ${art.classification}`;
    }

    if (citationsDisplay) citationsDisplay.textContent = art.citationsCount;
    if (violationsDisplay) violationsDisplay.textContent = art.violations.length;

    if (ruleCardsList) {
      if (art.violations.length === 0) {
        ruleCardsList.innerHTML = `
          <div class="rule-card" style="border-color: rgba(74, 222, 128, 0.3);">
            <div class="rule-card-title" style="color: #4ade80;">✅ Zero Violations Detected</div>
            <div class="rule-card-reasoning">Historical retrospective reporting with neutral framing and zero commercial or governance entanglements.</div>
          </div>
        `;
      } else {
        ruleCardsList.innerHTML = art.violations.map(v => `
          <div class="rule-card" id="card-${escapeHtml(v.rule_id)}">
            <div class="rule-card-header">
              <span class="rule-id-badge">${escapeHtml(v.rule_id)}</span>
              <span style="font-size: 0.75rem; color: #f87171; font-weight: 600;">Severity ${escapeHtml(v.severity)} · Conf ${escapeHtml(v.confidence)}</span>
            </div>
            <div class="rule-card-title">${escapeHtml(v.name)}</div>
            <div class="rule-card-reasoning">${escapeHtml(v.reasoning)}</div>
          </div>
        `).join('');
      }
    }

    // Update RFC 8785 Canonical Attestation JSON
    const canonicalEnvelope = {
      header: {
        protocol: "credence/1.0",
        envelope_type: "attestation",
        algorithm: "Ed25519",
        canonicalization: "RFC-8785"
      },
      payload: {
        url: art.url,
        content_sha256: art.sha256,
        domain: "inmaricopa.com",
        suspicion_score: art.suspicion,
        classification: art.classification,
        verified_byline: art.byline,
        violations: art.violations,
        audited_at: `${art.date}T12:00:00Z`
      },
      signature: {
        node_pubkey: "9580dc91601992b33e3fd76718fcf94a69c76bf233b634221a9ae2ee59974cd0",
        sig_hex: art.sig
      }
    };

    if (attestationJson) {
      const jsonStr = JSON.stringify(canonicalEnvelope, null, 2);
      if (attestationJson.tagName === 'TEXTAREA' || attestationJson.tagName === 'INPUT') {
        attestationJson.value = jsonStr;
      } else {
        attestationJson.textContent = jsonStr;
      }
    }
  }

  function highlightRuleCard(ruleId) {
    if (!ruleId) return;
    const targetCard = document.getElementById(`card-${ruleId}`);
    if (targetCard) {
      document.querySelectorAll('.rule-card').forEach(c => c.classList.remove('active'));
      targetCard.classList.add('active');
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => targetCard.classList.remove('active'), 2500);
    }
  }

  btnPills.forEach((btn, idx) => {
    btn.addEventListener('click', () => renderArticle(idx));
  });

  btnCopyJson?.addEventListener('click', () => {
    if (attestationJson) {
      const text = attestationJson.value || attestationJson.textContent;
      navigator.clipboard?.writeText(text);
      btnCopyJson.textContent = '✅ Copied!';
      setTimeout(() => btnCopyJson.textContent = '📋 Copy Canonical JSON', 1500);
    }
  });

  btnDownloadJson?.addEventListener('click', () => {
    if (attestationJson) {
      const text = attestationJson.value || attestationJson.textContent;
      const art = CASE_STUDY_ARTICLES[currentArticleIdx];
      const blob = new Blob([text], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `attestation_inmaricopa_${art.id}.json`;
      a.click();
    }
  });

  // Reform Simulator Logic
  const simByline = document.getElementById('wb-sim-byline');
  const simCoi = document.getElementById('wb-sim-coi');
  const simAsi = document.getElementById('wb-sim-asi');

  const simBylineVal = document.getElementById('wb-sim-byline-val');
  const simCoiVal = document.getElementById('wb-sim-coi-val');
  const simAsiVal = document.getElementById('wb-sim-asi-val');

  const simDeiVal = document.getElementById('wb-sim-dei-val');
  const simBandBadge = document.getElementById('wb-sim-band-badge');
  const simNote = document.getElementById('wb-sim-verdict-note');

  function updateReformSimulator() {
    if (!simByline || !simCoi || !simAsi) return;

    const bylinePct = parseFloat(simByline.value);
    const coiPct = parseFloat(simCoi.value);
    const asiScore = parseFloat(simAsi.value);

    if (simBylineVal) simBylineVal.textContent = `${bylinePct.toFixed(1)}%`;
    if (simCoiVal) simCoiVal.textContent = `${coiPct.toFixed(1)}%`;
    if (simAsiVal) simAsiVal.textContent = asiScore.toFixed(1);

    // Reform simulation formula:
    // Base suspicion drops as COI and Advertorials are cleaned up
    const S_base = 53.3;
    const S_sim = Math.max(5.0, S_base - (coiPct * 0.35) - ((asiScore - 50.0) * 0.30));
    const density_sim = Math.max(0.5, 5.7 - (coiPct * 0.04));
    const bylineRatio = bylinePct / 100.0;

    let dei = 100.0 - ((0.50 * S_sim) + (0.30 * Math.min(50.0, density_sim)) + (0.20 * (1.0 - bylineRatio) * 100.0));
    dei = Math.max(0.0, Math.min(100.0, dei));

    if (simDeiVal) {
      simDeiVal.textContent = dei.toFixed(1);
      simDeiVal.style.color = dei >= 80.0 ? '#4ade80' : (dei >= 60.0 ? '#f59e0b' : '#ef4444');
    }

    if (simBandBadge) {
      if (dei >= 85.0) {
        simBandBadge.className = 'verdict-tag reliable';
        simBandBadge.textContent = 'HIGH INTEGRITY (REPUTABLE)';
      } else if (dei >= 65.0) {
        simBandBadge.className = 'verdict-tag reliable';
        simBandBadge.textContent = 'RELIABLE NEWSROOM';
      } else if (dei >= 50.0) {
        simBandBadge.className = 'verdict-tag mixed';
        simBandBadge.textContent = 'MIXED REPUTATION';
      } else {
        simBandBadge.className = 'verdict-tag deceptive';
        simBandBadge.textContent = 'DECEPTIVE PATTERNS';
      }
    }

    if (simNote) {
      if (dei >= 85.0) {
        simNote.textContent = '🌟 Full reform achieved: Transparent bylines, strict editorial COI firewall, and clear advertorial demarcation.';
        simNote.style.color = '#4ade80';
      } else if (dei >= 65.0) {
        simNote.textContent = '📈 Significant improvement: Elevated into the Reliable Newsroom tier.';
        simNote.style.color = '#7dd3fc';
      } else {
        simNote.textContent = '⚠️ Baseline/compromised state: Requires higher byline transparency and commercial separation.';
        simNote.style.color = 'var(--text-muted)';
      }
    }
  }

  simByline?.addEventListener('input', updateReformSimulator);
  simCoi?.addEventListener('input', updateReformSimulator);
  simAsi?.addEventListener('input', updateReformSimulator);

  // Initial render
  renderArticle(0);
  updateReformSimulator();

  // Setup Publisher Aggregate Profile Card
  setupPublisherAggregateCard();
}

/**
 * Setup Publisher Aggregate Profile Card interactive toggle
 */
export function setupPublisherAggregateCard() {
  const btnVisual = document.getElementById('btn-pub-view-visual');
  const btnRaw = document.getElementById('btn-pub-view-raw');
  const panelVisual = document.getElementById('pub-panel-visual');
  const panelRaw = document.getElementById('pub-panel-raw');
  const btnCopyAscii = document.getElementById('btn-pub-copy-ascii');
  const asciiContent = document.getElementById('pub-ascii-content');

  if (!btnVisual || !btnRaw || !panelVisual || !panelRaw) return;

  btnVisual.addEventListener('click', () => {
    btnVisual.classList.add('active');
    btnRaw.classList.remove('active');
    panelVisual.style.display = 'block';
    panelRaw.style.display = 'none';
  });

  btnRaw.addEventListener('click', () => {
    btnRaw.classList.add('active');
    btnVisual.classList.remove('active');
    panelVisual.style.display = 'none';
    panelRaw.style.display = 'block';
  });

  btnCopyAscii?.addEventListener('click', () => {
    if (asciiContent) {
      navigator.clipboard?.writeText(asciiContent.textContent || '');
      btnCopyAscii.textContent = '✅ Copied!';
      setTimeout(() => btnCopyAscii.textContent = '📋 Copy Raw Receipt', 1500);
    }
  });
}

