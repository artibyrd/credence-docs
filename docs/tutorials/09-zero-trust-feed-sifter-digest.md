---
title: 'Tutorial 09: Zero-Trust Syndicated Feed Sifter & Morning Briefings'
description: Subscribe to RSS/Atom feeds, filter out low-integrity articles, and generate formatted morning briefings.
since_version: v1.1.0
verified_version: v2.18.0
last_verified: 2026-08-26
sidebar:
  order: 9
---

# Tutorial 09: Zero-Trust Syndicated Feed Sifter & Morning Briefings

In this tutorial, you will configure the **Zero-Trust Syndicated Feed Sifter** to monitor incoming RSS/Atom feeds, filter out clickbait and ungrounded claims, and generate automated **Morning Briefing Digests**.

---

## 1. Why Zero-Trust Feed Sifting?

Traditional RSS readers present all incoming syndicated headlines equally. A single clickbait farm can flood your feed with hundreds of sensationalized, unverified articles.

Credence operates as a **Zero-Trust Epistemic Sifter**:
- Incoming feed items are intercepted before entering your inbox.
- Articles are scrubbed, hashed (SimHash-64 & SHA-256), and evaluated against epistemic heuristics.
- Clean articles ($S \le 15.0$) are approved for morning briefings; suspicious articles are flagged with detailed forensic receipts.

---

## 2. Adding Feed Subscriptions

Add news feeds to your sifter configuration:

```bash
# Subscribe to investigative tech watchdogs
$ credence sifter subscribe https://news.ycombinator.com/rss --category tech

# Subscribe to peer-reviewed science preprints
$ credence sifter subscribe https://arxiv.org/rss/cs.AI --category ai-research
```

---

## 3. Running the Autonomous Sifter

Run a manual sifting cycle or launch the background worker:

```bash
# Run a single sifting pass across all subscribed feeds
$ credence sifter run --once

# Or launch as a continuous background daemon with 5-minute polling
$ credence sifter run --interval 300
```

---

## 4. Generating Your Morning Briefing Digest

Generate your formatted morning briefing:

```bash
# Generate terminal summary briefing
$ credence sifter digest --window 24h

# Export formatted Markdown newsletter
$ credence sifter digest --window 24h --format markdown --output morning-briefing.md
```

### Sample Briefing Output

```json
{
  "url": "https://example-news-blog.com/shocking-breakthrough",
  "classification": "SUSPICIOUS",
  "suspicion_score": 58.4,
  "grounding_ratio": 0.42,
  "verdict": "Low grounding ratio and unverified claims"
}
```

---

## 5. Next Steps

* 🤖 [Tutorial 10: Building Custom Taxonomy Rules](10-reusable-live-e2e-and-mesh-gauntlet.md)
* 📘 [The Invariant Bible](../invariants.md) — Topic Entropy & Astroturfing Defense

---
## Automated Morning News Briefings & Feed Sifting

```bash
# Generate 24-hour executive morning briefing
$ credence sifter run --briefing --window 24h
```

| Morning Briefing Metric | Value | Operational Meaning |
| :--- | :---: | :--- |
| **Articles Sifted** | `48` | Total syndicated RSS items scanned |
| **Approved Pristine** | `36` | Verified high-grounding articles ($G=1.00$) |
| **Flagged Suspicious** | `12` | Unnamed claims or clickbait headers |
| **Compute Savings** | `42,000 tokens` | P2P gossip attestation adoption |

---
## Automated Morning Executive News Briefings

Tutorial on scheduling morning news sifting and generating high-density executive briefings in markdown.

---
## Summary Verification Checklist & Command Reference

Complete the following validation steps to confirm successful execution of **09 Zero Trust Feed Sifter Digest**:

| Verification Step | Target Output / State | Troubleshooting Action |
| :--- | :--- | :--- |
| **1. Identity Check** | Valid Ed25519 public key printed | Run `credence germinate` to mint identity |
| **2. Storage Status** | SQLite WAL state store initialized | Verify directory write permissions (`chmod 0755 data/`) |
| **3. Mesh Peering** | Connected to $\ge 3$ seed peers | Check firewall WebSocket ports (`8080/tcp`) |
| **4. Attestation Proof**| RFC 8785 signed JSON receipt minted | Verify `assets/attestations.json` sync |

```bash
# Execute end-to-end verification
$ credence stats --json
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **09 Zero Trust Feed Sifter Digest** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "09_zero_trust_feed_sifter_digest" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
