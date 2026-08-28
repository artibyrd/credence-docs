---
title: DNS SRV & Dynamic Discovery Architecture
description: Configuring RFC 2782 DNS SRV records (_mesh._tcp.credence.nexus) with
  weighted priorities and failover sequences.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-28
---

# DNS SRV & Dynamic Discovery Architecture

When HTTPS seed endpoints are unreachable or undergoing maintenance, Credence falls back to **Tier 2 Discovery: Dynamic DNS SRV Records** (RFC 2782).

DNS SRV allows the Credence network to advertise live WebSocket relays and bootstrap seed peers with priority weights and port assignments directly via decentralized DNS resolution.

---

## 1. RFC 2782 DNS SRV Format

Credence queries the `_mesh._tcp.credence.nexus` service record:

```text
_service._proto.name.  TTL  Class  SRV  Priority  Weight  Port  Target.
```

### Production DNS Zone Example (`credence.nexus`):
```zone
; Primary North America Seed Relays (Priority 10)
_mesh._tcp.credence.nexus.  300  IN  SRV  10  60  8765  seed-us-east.credence.nexus.
_mesh._tcp.credence.nexus.  300  IN  SRV  10  40  8765  seed-us-west.credence.nexus.

; Secondary Europe & Asia Seed Relays (Priority 20)
_mesh._tcp.credence.nexus.  300  IN  SRV  20  50  8765  seed-eu-central.credence.nexus.
_mesh._tcp.credence.nexus.  300  IN  SRV  20  50  8765  seed-ap-east.credence.nexus.

; Fallback Community Relays (Priority 50)
_mesh._tcp.credence.nexus.  300  IN  SRV  50  100 8765  community-relay1.credence.org.
```

---

## 2. Weighted Selection Algorithm

When resolving SRV records:
1. **Sort by Priority**: The client attempts connections to records with the lowest `Priority` integer first ($10 \to 20 \to 50$).
2. **Weighted Probability**: Among records with identical priority, candidate peers are chosen proportionally based on `Weight`:
   $$P(\text{seed}_i) = \frac{\text{Weight}_i}{\sum_j \text{Weight}_j}$$
3. **Connection Handshake**: The client initiates a WebSocket connection (`ws://seed-us-east.credence.nexus:8765`) and requests the peer manifest.

---

## 3. Testing SRV Records via CLI

```bash
# Query live SRV records using dig
dig _mesh._tcp.credence.nexus SRV

# Query using Credence CLI discovery diagnostic
credence mesh discover --tier dns-srv
```

---
## DNS-SRV Discovery & Automatic Peer Bootstrapping

Autonomous nodes locate peer seeds automatically via RFC 2782 DNS-SRV records without centralized servers:

```
_credence-mesh._tcp.credence.nexus. 300 IN SRV 10 50 8080 seed-01.credence.nexus.
_credence-mesh._tcp.credence.nexus. 300 IN SRV 10 50 8080 seed-02.credence.nexus.
```

| DNS-SRV Parameter | Record Value | Discovery Function |
| :--- | :--- | :--- |
| **Service & Protocol** | `_credence-mesh._tcp` | Identifies Credence P2P gossip service |
| **TTL** | `300 seconds` | 5-minute dynamic failover refresh |
| **Priority & Weight** | `10 50` | Weighted load balancing across active seed nodes |

---
## Automated Peer Discovery via DNS-SRV Records

RFC 2782 DNS-SRV records provide decentralized node discovery without hardcoded IP addresses or centralized trackers.

---
## Technical Reference & Deployment Matrix

| Parameter / Dimension | Configuration Value | Architectural Purpose |
| :--- | :--- | :--- |
| **Runtime Environment** | Python 3.12+ (Linux / macOS) | Core epistemic execution kernel |
| **Transport Protocols** | stdio (Local) & SSE (Remote) | FastMCP 2.0 dual-transport substrate |
| **State Storage Engine** | SQLAlchemy 2.0 Async (SQLite / Postgres) | Verifiable attestation and snapshot persistence |
| **Frontend Standard** | Vanilla HTML5 / Native ES Modules | Zero-npm, zero-build client presentation |

```bash
# Verify system configuration
$ credence stats
```

---
## Diagnostic Verification & Invariant Enforcement

To ensure continuous compliance with system invariants, **Dns Srv Discovery** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "dns_srv_discovery" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
