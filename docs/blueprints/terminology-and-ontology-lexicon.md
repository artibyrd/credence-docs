---
title: "Credence Ecosystem Terminology & Ontology Lexicon"
description: "Canonical living dictionary of terminology, mathematical definitions, architectural metaphors, and ontology governance across Credence v2.0.0, organized across 5 cohesive thematic families and proportional complexity tiers."
since_version: v2.0.0
verified_version: v2.18.0
last_verified: 2026-08-28
---

# Credence Ecosystem Terminology & Ontology Lexicon

*A unified, human-digestible semantic blueprint and architectural dictionary governing the Credence network.*

---

## 1. Executive Semantic Architecture

In an epistemic verification network where mathematical rigor determines whether an allegation is verified fact or deceptive astroturfing, **language is architecture**. Conceptual ambiguity leads to software defects, prompt dilution in AI agents, and cognitive friction for node operators.

In **Credence v2.0.0**, all system concepts adhere to two strict semantic laws:

1. **The Proportional Naming Law**:
   - **🟢 Basic Concepts (Level 1)**: Simple, everyday plain language (*Risk Score*, *Trust Bands*, *Exact Quote Check*, *The 500 LOC Law*, *Humor Shield*).
   - **🟡 Advanced Concepts (Level 2)**: Crisp, functional engineering names (*Verbatim Grounding*, *Feed Sifter*, *Token Governor*, *Curiosity Loop*, *Domain Credence Index*).
   - **🔴 Expert Concepts (Level 3)**: Formal mathematical formulations (*The Galileo Theorem*, *Expertise-Weighted Medians*, *Advertorial Separation Index*, *Byzantine $3f+1$ Quorum*).
2. **The 5 Cohesive Thematic Families**:
   All 36 Credence-invented concepts are organized into **5 unified metaphors** to provide an intuitive, memorable mental model across the ecosystem.

---

## 2. Complexity & Origin Distribution

Across the **52 terms** governing Credence (16 Industry Standards + 36 Credence Inventions), the vocabulary forms an intentional **cognitive pyramid**:

| Complexity Level | Count | Share | Target Audience | Primary Focus |
| :--- | :---: | :---: | :--- | :--- |
| **🟢 Basic (Level 1)** | 16 | 30.8% | Readers, news consumers, first-time devs | Clear verdicts, basic rules, intuitive UI metrics |
| **🟡 Advanced (Level 2)** | 21 | 40.4% | Node operators, agent engineers, architects | Workflows, protocol loops, telemetry, cost governance |
| **🔴 Expert (Level 3)** | 15 | 28.8% | Cryptographers, consensus researchers, auditors | Mathematical proofs, Byzantine consensus, byte encodings |
| **Total** | **52** | **100.0%** | **Complete Network Ecosystem** | **Full Semantic Alignment** |

---

## 3. The 5 Cohesive Thematic Families

### 🌿 Theme 1: Botanical Network & Lifecycle
*Core Metaphor: Decentralized nodes germinate from cryptographic seeds, sprout into sifters, and establish deep root anchors across the mesh.*

| Concept | 🟢 Plain / Friendly Name | 🟡 Protocol / Engineering Name | 🔴 Mathematical / Formal Name | Implementation Subsystem |
| :--- | :--- | :--- | :--- | :--- |
| **Genesis Seeds** | Trust Seeds | Bootstrap Seeds | Pinned Ed25519 Anchor State | `credence.mesh.discovery` |
| **Node Setup** | Quickstart Setup | Node Germination (`credence germinate`) | Identity & Genesis Handshake | `credence.germinate` |
| **Sprout Node** | New Node | Sprout Tier Node | Initial Leaf Node ($Q_i < 0.50$) | `credence.models.EpistemicTier` |
| **Expanding Roots** | Trusted Relays | Expanding Roots Protocol | Dynamic Anchor Promotion Protocol | `credence.feeds.roots` |
| **Database Care** | Stale Data Cleanup | Database WAL Pruning | 30-Day Retention Vacuuming | `credence.db` |

---

### 🔭 Theme 2: Optical & Forensic Grounding
*Core Metaphor: Truth is brought into sharp focus through exact optical grounding, forensic inspection, and empirical specialist observation.*

| Concept | 🟢 Plain / Friendly Name | 🟡 Protocol / Engineering Name | 🔴 Mathematical / Formal Name | Implementation Subsystem |
| :--- | :--- | :--- | :--- | :--- |
| **Citation Matching** | Exact Quote Check | Verbatim Grounding | Canonical Grounding Ratio ($G = 1.00$) | `credence.pipeline.scoring` |
| **Hallucination Penalty**| 50% Truth Slash | Anti-Hallucination Slashing | 50% Validator Slashing Protocol | `credence.mesh.merit` |
| **Asymmetric Truth** | Specialist Overrides Crowd | The Galileo Rule | Asymmetric Consensus Theorem | `credence.mesh.consensus` |
| **Publisher Trust** | Publisher Trust Score | Domain Credence Index (DCI) | Longitudinal Trust Rating ($DCI \in [0, 100]$) | `credence.subjects.analytics` |
| **Article Risk** | Risk Score | Suspicion Score ($S$) | Calibrated Suspicion Function ($S \in [0, 100]$) | `credence.pipeline.scoring` |
| **Quality Ratings** | Quality Badges | Trust Bands | 5-Tier Partition (`PRISTINE` to `DECEPTIVE`) | `credence.subjects.models` |
| **Sponsor Infiltration**| Sponsored Content Index | Advertorial Separation Index (ASI) | Forensic Commercial Sponsoring Ratio ($ASI$) | `credence.subjects.models` |
| **Forensic Sourcing** | Sourcing Breakdown | Forensic Sourcing Suite | Quad-Factor Sourcing Metrics ($B_r, S_r, ASI, C_r$) | `credence.subjects.models` |
| **Consensus Voting** | Quality-Weighted Vote | Weighted Consensus Medians | Expertise-Weighted Medians ($W_i = 0.2 Q_i + 0.8 E_i$) | `credence.mesh.consensus` |
| **Merit Over Titles** | Merit Over Titles | The Anti-Diploma Invariant | Multi-Domain Empirical Entropy Requirement | `credence.mesh.merit` |

---

### 🌤️ Theme 3: Meteorological Epistemics & Information Dynamics
*Core Metaphor: The web experiences atmospheric weather—clearing skies of truth, storms of viral deception, and gradual climate drift.*

| Concept | 🟢 Plain / Friendly Name | 🟡 Protocol / Engineering Name | 🔴 Mathematical / Formal Name | Implementation Subsystem |
| :--- | :--- | :--- | :--- | :--- |
| **Macro Telemetry** | Truth Forecast | Epistemic Weather | Category Atmospheric Health Index | `credence.subjects.weather` |
| **Trust Decay** | Trust Degradation | Epistemic Drift | Longitudinal Sourcing Concept Drift | `credence.subjects.analytics` |
| **Spam Defense** | Spam & PR Filter | Astroturf Entropy Defense | Penalized Shannon Entropy ($H 	imes (1 - C_{	ext{top3}})$) | `credence.subjects.weather` |
| **Promo Hijacking** | Commercial Hijacking | "The Pizza Hut Problem" | Syndicated Promo Concentration Anomaly | `credence.feeds.boredom` |
| **Newsroom Partition** | News vs Viral Split | The Newsroom Partition Principle| "BuzzFeed News Doctrine" Recovery Function | `credence.feeds.reputation` |
| **Humor Protection** | Satire Shield | Humor Shield & Malice Override | Algorithmic Satire Exception Engine (`SPJ-1.6`) | `credence.pipeline.scoring` |

---

### 🏛️ Theme 4: Sovereign Governance & Architectural Laws
*Core Metaphor: A living constitution strictly binding human developers and AI pair programmers to verifiable architectural constraints.*

| Concept | 🟢 Plain / Friendly Name | 🟡 Protocol / Engineering Name | 🔴 Mathematical / Formal Name | Implementation Subsystem |
| :--- | :--- | :--- | :--- | :--- |
| **Living Canon** | Core System Rules | The Invariant Bible | Living Canon of System Invariants | `docs/invariants.md` |
| **File Size Limit** | 500-Line Code Rule | 500 LOC Ceiling Law | Strict DAG Module Boundary Invariant | `tests.governance` |
| **Math Naming** | Math Function Naming | `compute_*` Naming Standard | Deterministic Computation Naming Standard | `tests.governance` |
| **Human Eye Review** | Human Eyes First | Mk1 Eyeball Invariant | Mandatory Human-in-the-Loop Gate | `AGENTS.md` |
| **Delivery Cycle** | 5-Step Kaizen Cycle | 4-Phase Learning Lifecycle | Continuous Improvement Protocol | `AGENTS.md` |
| **Interface Symmetry** | Universal Parity | Universal 4-Way Parity | Multi-Interface Parity Invariant | `AGENTS.md` |
| **Vanilla Web** | Zero Build Tools | Zero-npm Web Invariant | Pure ES Modules & CSS Web Architecture | `tests.governance` |
| **Honest Telemetry** | Real-World Telemetry | Telemetry-Simulation Boundary | Empirical Observability Invariant | `AGENTS.md` |
| **Script Readability** | Readable Scripts | Clean Scratch Script Invariant | Standalone Approval Transparency Gate | `AGENTS.md` |

---

### ⚡ Theme 5: Self-Regulating Engine & FinOps
*Core Metaphor: A physical engine equipped with autonomous flywheels, curiosity loops, governors, and high-voltage circuit breakers.*

| Concept | 🟢 Plain / Friendly Name | 🟡 Protocol / Engineering Name | 🔴 Mathematical / Formal Name | Implementation Subsystem |
| :--- | :--- | :--- | :--- | :--- |
| **Automated Ingestion** | Feed Filter | Zero-Trust Feed Sifter | Autonomous RSS/Atom Ingestion Daemon | `credence.feeds.sifter` |
| **Idle Exploration** | Curiosity Loop | Autonomous Curiosity Loop | Adversarial Boredom Engine | `credence.feeds.boredom` |
| **Idle Capacity** | Spare Audit Capacity | Curiosity Headroom | Capacity Utilization Ratio ($Q_{	ext{boredom}}$) | `credence.feeds.boredom` |
| **Spend Protection** | Spend Protection | Token Safety Governor | Real-Time Headroom Circuit Breaker (30%) | `credence.pipeline.governor` |
| **Reasoning Optimum** | 4k Thinking Sweet Spot | The 4k Pareto Invariant | Gemini 3.7 Flash 4,096 Thinking Optimum | `credence.pipeline` |
| **P2P Work Sharing** | Shared Fact-Checking | BitTorrent Attestation Relay | Distributed P2P Audit Reuse Model (92.3%) | `credence.mesh.relay` |
| **Swarm Activation** | Live Swarm Activation | Swarm Quorum Transition | Byzantine Quorum Threshold ($N \ge 4$) | `credence.mesh.topology` |
| **3-Plane Sovereign Cloud**| 3-Plane System | 3-Plane Sovereign Architecture | Decoupled Edge / Compute / Infra Planes | `credence.server` |
| **Fast Cold Start** | Fast Serverless Boot | Scale-to-Zero Optimization | 5-Pillar Cold Start Engineering Engine | `credence.server` |

---

## 4. Complete Industry Standards Reference (16 Adopted Standards)

| Official Standard | Primary Authority | Formal Specification | Role in Credence |
| :--- | :--- | :--- | :--- |
| **Shannon Topic Entropy ($H$)** | Academic Information Theory | Claude Shannon (1948) | Foundations of lexical diversity and astroturfing detection. |
| **Watts-Strogatz Small-World Lattice**| Academic Graph Theory | Watts & Strogatz (1998) | Governs P2P gossip clustering and short network diameter. |
| **Byzantine Fault Tolerance ($3f+1$)** | Academic Distributed Systems | Lamport, Shostak, Pease (1982) | Mathematical basis of decentralized quorum safety. |
| **Rendezvous Hashing (HRW)** | ACM / IEEE Standard | Thaler & Ravishankar (1998) | Consistent feed partitioning without central master nodes. |
| **SimHash-64 & Hamming Distance** | ACM STOC Standard | Moses Charikar (2002) | Locality-sensitive fingerprinting for near-duplicate mirror detection. |
| **JSON Canonicalization Scheme (JCS)** | IETF Standards Track | RFC 8785 | Deterministic byte serialization for cross-platform signatures. |
| **Ed25519 Cryptography** | IETF Standards Track | RFC 8032 | High-speed public-key node identity and attestation custody. |
| **DNS SRV Peer Discovery** | IETF Standards Track | RFC 2782 | Decentralized relay autodiscovery via standard DNS records. |
| **Model Context Protocol (FastMCP)** | Open Standard (Anthropic) | FastMCP 2.0 Specification | Standardized AI agent tooling over stdio and SSE streaming. |
| **Poe's Law** | Internet Cultural Canon | Nathan Poe (2005) | Sociological baseline for satire vs. disinformation ambiguity. |
| **SPJ Code of Ethics** | Society of Professional Journalists| SPJ Ethics Standards | Foundational taxonomy catalog for journalistic truth rules. |
| **ClaimReview Markup** | W3C / Schema.org | ClaimReview Fact Check Standard| Machine-readable structured fact-checking output schema. |
| **Workload Identity Federation (WIF)** | Google Cloud / OIDC | Keyless Cloud Security Standard | Automated least-privilege CI/CD without static secrets. |
| **Web Cryptography API (SubtleCrypto)**| W3C Recommendation | WebCrypto API Standard | Zero-npm in-browser attestation verification. |
| **SQLite Write-Ahead Logging (WAL)** | SQLite Consortium | SQLite WAL Concurrency Mode | In-memory and disk asynchronous non-blocking storage engine. |
| **"Pink Slime" News Typology** | Investigative Journalism | Tow Center / CJR Standard | Taxonomic classification of automated partisan pseudo-local sites. |

---

## 5. Key Semantic Polish Codified for v2.0.0

1. **Replaced Ambiguous "DEI" with "Domain Credence Index (DCI)"**:
   - Eliminates confusion with corporate Diversity, Equity & Inclusion acronyms while strengthening the core Credence brand.
2. **Replaced SEO-Confusing "Domain Authority" with "Expertise-Weighted Consensus"**:
   - Eliminates ambiguity with commercial Moz/Ahrefs SEO metrics in favor of pure node-level subject authority ($E_i$).
3. **Harmonized Coined Jargon with Clear Plain-Language Aliases**:
   - *Adversarial Boredom* $\rightarrow$ Accessible alias: **Autonomous Curiosity Loop**.
   - *Poe's Law Satire Cloak* $\rightarrow$ Accessible alias: **Humor Shield & Malice Override**.
   - *The BuzzFeed News Doctrine* $\rightarrow$ Subtitle: **The Newsroom Partition Principle**.
   - *Epistemic Verbatim Grounding* $\rightarrow$ Accessible alias: **Exact Quote Grounding**.

---

## 6. New Terms Coined in v2.1.0 (10 Terms)

| Concept | 🟢 Level 1 (Plain / Everyday) | 🟡 Level 2 (Engineering / Protocol) | 🔴 Level 3 (Formal / Mathematical) | Thematic Family | Subsystem |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **The Information Pyramid** | 3-Tier Information Pyramid | Progressive Epistemic Hierarchy | Cognitive Load Inverse Density Invariant | 🏛️ Sovereign Governance | `credence.web`, `credence.cli` |
| **Epistemic Lensing ("Enhance!")** | Zoom & Enhance Control | Epistemic Lensing Engine | Tri-Focal Dynamic Resolution Function | 🔭 Optical Grounding | `credence.web.lensing`, `credence.tui` |
| **DOM Extraction Scrubber** | Badge Filter & Rescore Bypass | DOM Extraction Scrubber (`[data-credence-ignore]`) | Invariant Ingestion Sanitizer | ⚡ Self-Regulating Engine | `credence.ingestion.extractor` |
| **Temporal Score Trajectory** | Score History Timeline | Temporal Score Trajectory ($\Delta S_t$) | Discrete Epistemic Score Velocity Vector ($\vec{\Delta S}$) | 🔭 Optical Grounding | `credence.storage.revisions` |
| **Content Evolution Forensics** | Stealth Edit & Correction Detector | Content Evolution Forensic Engine | Differential SimHash Mutation Classifier | 🌤️ Meteorological Epistemics | `credence.pipeline.evaluator` |
| **Dogfood Attestation** | Docs Self-Audit / Practice What We Preach | Self-Audited Provenance (`audit-docs`) | Reflexive Cryptographic Attestation Invariant | 🏛️ Sovereign Governance | `credence.cli.commands.docs_audit` |
| **Differential Dogfooding** | Smart Docs Re-check | Differential CI/CD Dogfood Engine | Git Tree Delta-Driven Attestation Loop | ⚡ Self-Regulating Engine | `.github/workflows` |
| **Order-of-Operations Invariant** | Dependency Order Check / Cart Before Horse | Order-of-Operations Dependency Law | Directed Acyclic Execution Dependency Law | 🏛️ Sovereign Governance | `AGENTS.md`, `tests.governance` |
| **Live DOM Hash Attestation** | Real-Time Badge Verification | Client-Side In-Browser DOM Attestation | Browser WebCrypto Live NFKC Hash Gate | 🔭 Optical Grounding | `credence.web.assets` |
| **Badge Abuse Neutralization** | Anti-Tamper Badge Defenses | Adversarial Badge Evasion Defense | Cryptographic Origin & Live Hash Binding | 🔭 Optical Grounding | `credence.web.assets` |

---

## 7. New Terms Coined in v2.2.0: Operator Security & SPA Workstation Architecture (4 Terms)

| Concept | 🟢 Level 1 (Plain / Everyday) | 🟡 Level 2 (Engineering / Protocol) | 🔴 Level 3 (Formal / Mathematical) | Thematic Family | Subsystem |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Public Transparency vs. Admin Gating** | Public Reading / Zero Login Wall | Public Read Transparency Invariant | Dual-Plane Access Control & Authorization Membrane | 🏛️ Sovereign Governance | `credence.server.middleware.security` |
| **Admin Command Deck** | Operator Cockpit / Admin Dashboard | Web Admin Command Deck (`credence.nexus#admin`) | Gated Node Telemetry & Mutative Operational Control Cockpit | ⚡ Self-Regulating Engine | `credence.nexus`, `credence.server` |
| **Pluggable Operator Auth** | Operator Login (Keys & Google/GitHub) | Pluggable 3-Mode Operator Authentication | Multi-Provider Cryptographic Identity & OIDC Federation Gate | 🏛️ Sovereign Governance | `credence.server.api.system` |
| **Zero-Build SPA Workstations** | Full-Screen Browser Workstation / TUI Mode | Zero-Build SPA Workstation Architecture | Vanilla ES Module & Custom Property Terminal State Engine | 🔭 Optical Grounding | `credence.web.assets` |
