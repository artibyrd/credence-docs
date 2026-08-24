---
title: 'Operational Guide: Database Pruning & WAL Maintenance'
description: SQLite WAL checkpointing, automated 90-day half-life pruning, vacuuming, and performance tuning.
since_version: v1.14.0
verified_version: v2.16.2
last_verified: 2026-08-24
sidebar:
  order: 20
---

# Operational Guide: Database Pruning & WAL Maintenance

This operational guide details the automated maintenance jobs, Write-Ahead Log (WAL) checkpointing, and 90-day reputation half-life pruning procedures for keeping Credence SQLite ledgers fast and compact.

---

## 1. SQLite Write-Ahead Logging (WAL) Architecture

Credence initializes SQLite with Write-Ahead Logging (`PRAGMA journal_mode=WAL;`), allowing concurrent readers to query audit attestations without locking write transactions from background feed sifters.

```
 Inbound Writes (Sifter / Attestation) --► Write-Ahead Log (`credence.db-wal`)
                                                     |
                                                     ▼ (Passive Checkpoint)
 Reader Transactions (FastMCP / Web)   --► Main Database (`credence.db`)
```

---

## 2. Automated 90-Day Half-Life Pruning

To prevent disk exhaustion on self-hosted nodes while maintaining long-term domain reputation statistics:
- **Raw DOM Scrapes**: Pruned after 30 days once the SHA-256 hash and SimHash-64 fingerprints are committed.
- **Detailed Finding Logs**: Decayed after 90 days.
- **Aggregated DCI Domain Statistics**: Maintained permanently in compressed rolling window tables.

```bash
# Execute dry-run database pruning pass
$ credence db prune --dry-run --older-than 90d

# Execute active database vacuum and WAL checkpoint
$ credence db prune --older-than 90d --vacuum
```

---

## 3. Automated Cron & Systemd Maintenance

Add an automated weekly maintenance job to your server crontab:

```ini
# Run weekly SQLite WAL checkpoint and pruning at 03:00 AM on Sundays
0 3 * * 0 /usr/local/bin/credence db prune --older-than 90d --vacuum >> /var/log/credence/maintenance.log 2>&1
```

---

## 4. Related Runbooks

* 🗄️ [Zero-Downtime Database Migrations](zero-downtime-database-migrations.md)
* 🚀 [PostgreSQL Cloud Scaling & Connection Pooling](postgresql-cloud-scaling.md)

## Architectural Invariants & Verification Mechanics

The implementation of **Database Pruning Wal** adheres strictly to the core invariants defined in **The Invariant Bible**:

1. **Epistemic Verbatim Grounding (`inv-verbatim-grounding`)**:
   Every factual assertion and journalistic finding analyzed within this subsystem must maintain character-for-character citation grounding ($G=1.00$) against the source DOM tree. If an external model or heuristic engine generates ungrounded assertions or speculative extrapolations, the system triggers an autonomous 50% score slash, preventing hallucinated findings from entering the peer-to-peer gossip stream.

2. **RFC 8785 Canonical JSON & Ed25519 Custody (`inv-canonical-json-ed25519`)**:
   All audit attestations, domain state transitions, and mesh metadata envelopes are formatted in deterministic UTF-8 byte ordering according to the IETF RFC 8785 standard. Cryptographic signatures are minted using high-entropy Ed25519 private keys stored with strict POSIX `0600` permissions. Modifying any field in transit immediately invalidates the signature during peer verification.

3. **Untrusted Ingestion Boundary (`inv-untrusted-ingestion`)**:
   All external prose, syndicated feeds, and web DOM elements are hermetically isolated within `<untrusted_source_text>` XML wrappers. Outbound network requests strictly prohibit loopback (`127.0.0.0/8`), private RFC 1918 addresses, and link-local cloud metadata endpoints (`169.254.169.254`), preventing Server-Side Request Forgery (SSRF) attacks.

## Diagnostic Telemetry & Operational Reference

Operators can inspect the operational health, token burn rates, and cryptographic proofs for **Database Pruning Wal** using standard CLI commands and FastMCP 2.0 tools:

```bash
# Verify subsystem diagnostic health and invariant compliance
$ credence stats --subsystem "operations"

# Inspect real-time execution metrics and Bayesian concordance
$ credence stats --detailed --window 24h

# Export canonical verification receipts for external compliance
$ credence verify --json --audit-trail
```

### Quantitative Operational Benchmarks

| Metric / Dimension | Target Performance | Worst-Case Tolerance | Subsystem Status |
| :--- | :---: | :---: | :--- |
| **Verification Latency** | $< 15\text{ ms}$ (Local Cache) | $< 250\text{ ms}$ (P95 Mesh Gossip) | ✅ Optimal |
| **Grounding Precision ($G$)** | $1.00$ (Verbatim DOM Match) | $0.90$ (Probation Window) | ✅ Certified |
| **Token Headroom Safety** | $\ge 30\%$ Reserved Headroom | $15\%$ (Emergency Throttle) | ✅ Protected |
| **Memory Consumption** | $< 150\text{ MB RAM}$ | $< 256\text{ MB RAM}$ | ✅ Lean |

### RFC Standards & Related Documentation

* 📘 [The Invariant Bible](../invariants.md) — Universal System Invariants & Cognitive Hierarchy
* 🌐 [Feature Parity & Interface Symmetry Matrix](../feature-parity.md)
* 🚀 [Release Changelog & Milestone Achievements](../changelog.md)
* 🎮 [Interactive Web Playgrounds & Chaos Simulators](../playground.md)
