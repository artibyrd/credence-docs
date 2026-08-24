---
title: 'Red-Teaming the Truth Badge: 4 Ways We Tried to Break Our Own Web Component'
description: An adversarial engineering postmortem on attacking the <credence-badge> WebCrypto verification pipeline.
since_version: v1.11.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 19
---

# Red-Teaming the Truth Badge: 4 Ways We Tried to Break Our Own Web Component

When you release an embeddable trust badge like `<credence-badge>`, you paint a massive target on your back.

If bad actors can trick the badge into displaying a glowing green `PRISTINE` shield on a malicious disinformation article, they can launder propaganda with cryptographic authority. To ensure that our zero-build Web Component could withstand determined adversaries, our engineering team conducted an intensive red-team gauntlet against the verification engine.

Here are the 4 primary attack vectors we attempted, how the system reacted, and the permanent invariants we codified into the living canon.

---

## Attack 1: The Post-Audit "Bait-and-Switch" Mutation

### The Attack Vector
An adversarial publisher submits a clean, high-integrity news article to Credence. The node audits the content, confirms character-for-character citation grounding ($G=1.00$), and signs an Ed25519 attestation containing the article's SHA-256 hash. The publisher embeds the badge. Five minutes later, the publisher silently edits the CMS database to replace the article text with a fraudulent cryptocurrency scam, hoping the badge will continue displaying `PRISTINE`.

Step 1: Audit Clean Article ---► Receives Signed Receipt (Hash: 0xa1b2...) ---► Badge Renders Green (PRISTINE)
Step 2: Publisher Edits CMS ---► Article Body Mutates to Scam (Hash: 0xf9e8...)
Step 3: Reader Browser Loads --► WebCrypto Computes Hash: 0xf9e8 != 0xa1b2 ---► BADGE FLASHES RED (TAMPERED)

### The Defense
The `<credence-badge>` does not blindly trust the server receipt. Upon loading in the reader's browser, the component's client-side JavaScript extracts the live DOM text, runs the canonical DOM scrubber, and hashes the text using the native W3C WebCrypto API (`crypto.subtle.digest('SHA-256')`).

When the computed hash `0xf9e8...` fails to match the signed receipt hash `0xa1b2...`, the badge immediately transitions to a flashing crimson **`TAMPERED`** state, displaying the exact timestamp and forensic hash mismatch warning to the reader.

---

## Attack 2: Cryptographic Signature Forgery & Replay

### The Attack Vector
An attacker downloads a valid `PRISTINE` receipt from a Reuters article, changes the `origin_url` field to point to their own fake news blog, and attempts to pass off the forged receipt as valid.

### The Defense
All Credence receipts are signed over **RFC 8785 Canonical JSON bytes**. The client component executes `crypto.subtle.verify()` using the node's Ed25519 public key. Because the URL, timestamp, and content hash are deeply bound in the canonical byte array, altering even a single character in the payload invalidates the digital signature. The badge rejects the receipt in $<1\text{ms}$.

---

## Attack 3: Scrubber Cloaking via Ignored Attributes

### The Attack Vector
The attacker discovers that the DOM scrubber ignores HTML elements tagged with `[data-credence-ignore="true"]` (used legitimately for dynamic ad containers). The attacker places defamatory claims inside an ignored `<div>` while leaving only innocuous prose in the audited container.

### The Defense
We introduced **The Scrubber Surface Ratio Invariant**: if ignored elements account for $>30\%$ of total body text, or if unverified assertions are detected within ignored containers, the crawler rejects the document and logs an automated `CLOAKING_ATTEMPT` violation.

---

## Attack 4: Web Component Clone Pollution (`cloneNode`)

### The Attack Vector
A malicious client script attempts to clone the active `<credence-badge>` DOM node via `element.cloneNode(true)` and insert it into unverified third-party iframes.

### The Defense
We codified `inv-web-component-isolation`: Web Components must never invoke `cloneNode(true)` on host trees containing custom element instances. The component uses an isolated Shadow DOM with encapsulated styles and strict origin validation.

---

## The Takeaway: Trust Requires Local Verification

Trust badges cannot rely on static images or third-party iframe redirects. Real security requires **local, client-side cryptographic verification** executed directly in the reader's browser.
