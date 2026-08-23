---
title: Poe's Law & Satire Cloaking Defense
description: How Credence distinguishes legitimate parody from weaponized disinformation
  using Schema.org badges and SPJ-1.6 cloaking overrides.
since_version: v1.0.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Poe's Law & Satire Cloaking Defense

**Poe's Law** states that without a clear indicator of the author's intent, it is impossible to create a parody of extreme views so obviously exaggerated that it cannot be mistaken by some readers for sincere belief.

In adversarial media ecosystems, bad actors exploit this ambiguity by publishing defamatory allegations, hate speech, or dangerous medical fraud, then claiming *"it was just satire"* when confronted.

Credence solves this with a **two-tier satire evaluation pipeline**.

---

## 1. Two-Tier Satire Pipeline

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         TWO-TIER SATIRE & SPJ-1.6 CLOAKING DEFENSE                               │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Incoming Audited Article / Prose Content                                                    │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                ▼                                                 │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────┐   │
│ │ TIER 1: SATIRE CUE & SCHEMA EXTRACTION                                                     │   │
│ │ • Masthead analysis, `Schema.org/SatiricalArticle`, domain taxonomy registry               │   │
│ └──────────────────────────────────────────────┬─────────────────────────────────────────────┘   │
│                                                │                                                 │
│                     ┌──────────────────────────┴──────────────────────────┐                      │
│                     ▼ Satire Confirmed                                    ▼ Not Satire           │
│ ┌────────────────────────────────────────────────────────┐ ┌─────────────────────────────────┐ │
│ │ TIER 2: `SPJ-1.6` CLOAKING OVERRIDE GATE               │ │ Standard Multi-Specialist Audit │ │
│ ├────────────────────────────────────────────────────────┤ └─────────────────────────────────┘ │
│ │ Does the text contain defamatory or medical harms?     │                                       │
│ ├────────────────────────────┬───────────────────────────┤                                       │
│ │ Condition                  │ Operational Action        │                                       │
│ ├────────────────────────────┼───────────────────────────┤                                       │
│ │ ✅ Clean Humor / Parody     │ Neutralize Score: $S=0.00$│                                       │
│ │    (The Onion, Bee, Whispers│ Tag: `SATIRE_PARODY`      │                                       │
│ ├────────────────────────────┼───────────────────────────┤                                       │
│ │ ❌ Poisoning / Defamation  │ `SPJ-1.6` Override Fires  │                                       │
│ │    (Bad-faith cloaking)    │ Strip Satire Exemption    │                                       │
│ │                            │ Full Disinformation Audit │                                       │
│ └────────────────────────────┴───────────────────────────┘                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Legitimate Satire Neutralization

For genuine satirical outlets (*The Onion*, *The Babylon Bee*, *Private Eye*):
- **Structural Cues**: Masthead labels, `schema.org/SatiricalArticle` markup, or site metadata.
- **Score Neutralization**: Suspicion score is set to $S = 0.00$, and the article is tagged with `is_satire: true`.
- **Zero False Alarms**: Fact-checking models are prevented from raising false alarms over humorous exaggeration.

---

## 3. Tier 2: The `SPJ-1.6` Cloaking Override (Invariant 11)

If an article purporting to be satire contains:
1. **Specific Factual Health Claims**: Fabricated warnings about vaccines, poisoned water supplies, or dangerous medical treatments.
2. **Defamatory Allegations Against Private Individuals**: Smears presented as "satirical facts" designed to inflict real-world reputational damage.

The **`SPJ-1.6` Cloaking Override** activates automatically:
- Satire protection is completely disabled.
- The document is escalated to full specialist ethical and fallacy auditing.
- The finding explicitly populates `cloaking_override_triggered: true`.
