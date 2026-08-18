---
title: "32 Agent Invariants"
description: "Core architectural invariants, mathematical rules, and safety constraints governing the Credence network."
---

This document outlines mandatory rules and design invariants for human contributors and AI agents working on Credence.

---

## 1. Core Engineering & Runtime Safety

1. **Project Isolation Invariant**: Credence is an autonomous project decoupled from other repositories.
2. **Python & SQLModel Async**: Python `>=3.12,<3.13`. Always use `sqlmodel.ext.asyncio.session.AsyncSession`. Never use `from __future__ import annotations` in `models.py`.
3. **Hermetic Testing Invariant**: Default unit test suite (`tests/`) must be 100% network-free using `sqlite+aiosqlite:///:memory:` and offline HTML fixtures.
4. **Human Review Before Commits ("Mk1 Eyeball")**: Never execute `git commit` automatically. Always present changes and live verification results for human approval first.
5. **Token Budget & Coexistence**: Prioritize `CREDENCE_GEMINI_API_KEY`. Enforce token budgets and automatic offline circuit-breaker fallbacks (`QUOTA_PRESERVED`) at 30% headroom.
6. **Network Ingestion SSRF Guard**: Reject cloud metadata (`169.254.169.254`, `metadata.google.internal`), loopback (`127.0.0.1`), and RFC 1918 private subnets.
7. **Red Team Ingestion & Protocol Defense**: XML parsers must reject `<!DOCTYPE` / `<!ENTITY>` declarations (Billion Laughs protection). External LLM inputs must be enclosed in `<untrusted_source_text>` containers.
8. **XML ElementTree Traversal Safety**: Never use boolean `or` expressions on ElementTree elements; always check `elem is not None` or use `_find_first_elem()`.
9. **Content Decoupling & Hermetic CI**: Maintain tutorials in `docs/tutorials/` in clean Markdown. CI workflows (`ci.yml`) must run 100% hermetically without cloud secrets.
10. **Context Governance**: Keep `AGENTS.md` lean (<1,000 tokens) with multi-step runbooks in `.agents/skills/`.

---

## 2. Epistemic Ingestion & Scoring Engine

11. **Poe's Law & Satire Safeguards**: Neutralize legitimate satire ($0.00$), but invoke `SPJ-1.6` cloaking overrides on factual defamatory/health allegations.
12. **Namespaced Fixed Taxonomies**: Never hardcode rule names in scoring math; use namespaced URIs (`domain:cluster/rule_id@version`) pinned by catalog SHA-256 hashes.
13. **Whitespace-Insensitive Grounding**: Quote validators must collapse whitespace sequences (`\s+` $\to$ ` `) in both citations and source DOM text ($G=1.0$).
14. **Transparent Heuristic Disclosure**: When the offline governor activates, explicitly populate `evaluation_method: "offline_structural_heuristic"` with confidence capped at $\le 0.50$.

---

## 3. Cryptographic Mesh & Empirical Authority

15. **RFC 8785 Canonical JSON & Ed25519 Custody**: Signatures must use RFC 8785 canonical bytes with UTC timestamps. Intermediate relay nodes must never re-sign valid envelopes.
16. **5-Factor Node Quality ($Q_i$)**: Reputation evaluates $Q_i = 0.25 U_i + 0.30 C_i + 0.25 G_i + 0.10 T_i + 0.10 K_i$. Bootstrap seeds require root Ed25519 signature verification.
17. **Empirical Expertise ($E_i$) & Anti-Diploma Invariant**: Authority is earned via performance ($E_i = 0.40 C + 0.35 G + 0.15 V + 0.10 L$) and combined with node quality ($W_i = 0.20 Q_i + 0.80 E_i$). Requires domain entropy across $\ge 5$ distinct FQDNs. Hallucinated findings incur a 50% score slash.
18. **The Galileo Rule (Asymmetric Grounded Evidence)**: Absence of evidence is not evidence of absence. Verified domain authorities submitting 100% grounded citations cannot be outlier-dismissed (`is_outlier = False`).
19. **BitTorrent Work-Sharing & Generous Defaults**: Nodes seed attestations freely and divide syndicated feeds across peers to achieve 92.3% compute savings at $0.00 token cost.

---

## 4. Universal Presentation Layer & Zero-Build Web

20. **Universal Feature Parity**: Maintain synchronous feature parity across CLI (`credence`), FastMCP 2.0, Textual TUI (`credence tui`), and Zero-Build Web UI (`web/`).
21. **Zero-Build Web Standards**: Public frontends strictly use vanilla HTML5, CSS Custom Properties, native ES Modules, W3C Web Cryptography API (`window.crypto.subtle`), and context-aware `escapeHtml()` sanitization with zero npm dependencies.
22. **Pure Logic Decoupling**: Business logic must execute and test decoupled from presentation layers.
