---
title: 'Red-Teaming the Truth Badge: 7 Attack Vectors to Game an Embeddable Fact-Check'
description: "How adversarial publishers attempt to forge, steal, or bypass embeddable\
  \ credibility badges\u2014and how client-side WebCrypto DOM hash gates neutralize\
  \ them."
category: Sovereign Essays
verified_version: v2.15.1
last_verified: 2026-08-24
since_version: v2.1.0
---

# Red-Teaming the Truth Badge: 7 Attack Vectors to Game an Embeddable Fact-Check

Embeddable trust badges are notorious for being exploited. In this essay, we document our internal **Red Team vs. Blue Team** exercise testing `<credence-badge>` against seven sophisticated evasion attacks.

---

## Vector 1: The "Bait-and-Switch" (Post-Audit Mutation)
* **The Attack**: An author audits a pristine article on their site to receive an Ed25519-signed verification receipt with a 99.0 score. They then replace the page content with defamatory libel while continuing to display the valid badge.
* **The Defense**: **In-Browser WebCrypto Live DOM Hashing**. When `<credence-badge>` mounts in the visitor's browser, it hashes the rendered page text using `crypto.subtle.digest("SHA-256")`. If the DOM hash mismatches `receipt.content_sha256`, the badge immediately flips to **"⚠️ Content Modified Since Verification"**.

---

## Vector 2: Receipt Theft & Cross-Origin Replay
* **The Attack**: A clickbait farm copies the signed `<credence-badge>` receipt snippet from `nature.com` and embeds it on `fake-health-news.xyz`.
* **The Defense**: **Origin & Host Binding**. Every signed receipt contains the canonical `origin_url`. If `window.location.origin` does not match the signed origin, the badge fails closed and alerts: **"🛑 DOMAIN MISMATCH: Attestation issued for nature.com, not fake-health-news.xyz"**.

---

## Vector 3: DOM Scrubber Camouflage (`[data-credence-ignore]`)
* **The Attack**: Hiding fraudulent medical claims inside `<div data-credence-ignore="true">` to trick the auditor into skipping them.
* **The Defense**: **SEC-1.1 Camouflage Guard**. Non-badge ignored elements containing $>150$ characters of text trigger an immediate 50-point suspicion penalty.\n