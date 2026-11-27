---
title: "Protocol: The Open Epistemic Mempool Queue & Multi-Model Consensus"
description: "Architectural specification of the decentralized audit job queue, atomic lease state machine, multi-model Bayesian consensus quorum, and the Galileo Rule."
since_version: "v2.22.0"
verified_version: v2.24.1
last_verified: 2026-11-26
---

# Protocol: The Open Epistemic Mempool Queue & Multi-Model Consensus

## 1. Abstract

Centralized fact-checking architectures suffer from single-model epistemic bias, opaque moderation agendas, and throughput bottlenecks. Credence resolves this by establishing an **Open Epistemic Mempool Queue**: an open, decentralized job pool where audit requests are enqueued, claimed under time-bounded cryptographic leases by volunteer workers, evaluated blindly across heterogeneous model families, and synthesized into tamper-evident Bayesian consensus verdicts.

---

## 2. Queue Lifecycle & The Atomic Lease State Machine

Every evaluation request moves through a formal 4-state lifecycle:

| State | Description | Transition Trigger | Next State |
| :--- | :--- | :--- | :--- |
| **`pending`** | Job is queued with priority and target quorum. Eligible workers may claim it. | Worker claims matching family lease | `claimed` |
| **`claimed`** | One or more workers hold active time-bounded leases. | Worker submits valid signed report | `completed` |
| **`claimed`** | Worker fails to submit within lease duration. | Timeout expires without submission | `pending` (reclaim) |
| **`completed`** | Target quorum achieved across distinct model families. | Coordinator compiles consensus | Consensus Ratified |

### State Transitions

1. **`pending`**:
   The job is queued with target quorum $N_{\text{target}}$ and priority level. Any eligible volunteer worker from an unrepresented model family may claim it.
2. **`claimed`**:
   One or more workers hold active leases. Each active lease is recorded with an expiration timestamp:
   - **Priority 1 (FastMCP / In-Chat)**: $\Delta t_{\text{lease}} = 15$ seconds.
   - **Priority 2+ (Feeds / Daemons)**: $\Delta t_{\text{lease}} = 180$ seconds.
3. **`completed`**:
   Sufficient distinct model families have submitted valid reports ($|M_{\text{completed}}| \ge N_{\text{target}}$). The Bayesian consensus engine synthesizes the final attestation and notifies listeners.
4. **`abandoned / expired`**:
   If a worker fails to submit within its lease window, the lease expires. When all active leases for a job expire without fulfilling the quorum, the job reverts to `pending`.

---

## 3. Quorum Diversity & Multi-Model Allocation

To guarantee epistemic diversity and prevent sybil attacks:
- **No Duplicate Family Work**: A single model family (e.g., `google/gemini`) can only claim and submit once per job. Secondary workers using the same family are assigned different jobs.
- **Concurrent Cross-Model Evaluation**: Workers from different families (e.g., `google/gemini`, `anthropic/claude`, `deepseek/deepseek`, `meta/llama`) evaluate the exact same job in parallel.
- **Client Affinity Targeting**: Clients running FastMCP IDE sessions can specify an affinity tag (`client_affinity="fastmcp-ide-session"`), routing priority jobs directly to their local or preferred workers while maintaining open fallback.

---

## 4. Bayesian Consensus & The Hardened Galileo Rule

When target quorum is fulfilled, the coordinator delegates consensus aggregation to `BayesianConsensusAggregator.compute_consensus(...)` and classifies the resulting score using canonical 5-tier verdict bands (`classify_verdict`):

### Authority-Weighted Median Baseline
For $K$ independent evaluations with suspicion scores $S_1, S_2, \dots, S_K$ and domain-authority weights $W_1, W_2, \dots, W_K$ derived from each worker's quality score $Q_w$ (penalized for grounding failures and divergence slashes), rolling-window concordance, and subject expertise:
$$S_{\text{median}} = \operatorname{WeightedMedian}\big((S_1, W_1), \dots, (S_K, W_K)\big)$$

The weighted median provides inherent Byzantine resilience against unverified outliers, low-reputation Sybils, and hallucinations.

### The Hardened Galileo Rule ($G=1.00$ Authority-Gated Override)
A fundamental tenet of epistemology is that **unanimous ungrounded consensus cannot overwrite empirical truth**: if an established specialist presents verbatim-grounded evidence ($G=1.00$) that a silent swarm missed ($S_{\text{swarm}} \le 15.0$), reality belongs to the verified evidence.

To prevent weaponization by fresh Sybils or compromised veteran nodes executing bait-and-switch / slow-drip attacks, the mempool enforces four coupled safeguards:
1. **No Zero-Reputation Hijack**: Unconditional `max(max(scores), 45.0)` score overriding is prohibited. Only verified authorities with earned expertise and active acceleration dampening can trigger a Galileo override.
2. **Rolling-Window Concordance & Divergence Acceleration Dampening**: Each worker tracks a rolling window of recent deviations from consensus (`recent_deviations_json`) plus a pre-window baseline. Effective concordance is bounded by $\min(C_{\text{lifetime}}, C_{\text{recent}})$, and sustained divergence drives an acceleration dampening factor toward `0.0`, scaling down the Galileo floor (`0.70 * grounding_ratio * dampening`) and triggering automated reputation slashing after 3 consecutive zero-dampening windows.
3. **Single-Lineage Quorum Escalation**: When a Galileo override is triggered by a single model family lineage and the quorum cap (`4`) has not yet been reached, the coordinator marks the job `provisional_galileo` and escalates `target_quorum` by `+1` so an independent model family can corroborate or refute the finding before final ratification.
4. **Canonical 5-Tier Verdicts**: Mempool consensus maps directly through `classify_verdict` rather than a coarse 3-band split, maintaining parity with CLI, mesh, and web surfaces.

---

## 5. Security Architecture & Threat Model

| Attack Vector | Defense Mechanism | Invariant / Rule |
| :--- | :--- | :--- |
| **Sybil Lease Exhaustion & Pubkey DoS** | Ed25519 proof-of-possession signature (`claim_timestamp` + `claim_signature`, 300s replay window) plus max 3 concurrent active leases per worker pubkey (`HTTP 429`). | Vector 7 |
| **Model Slug Injection** | Strict regex validation (`^(?!.*\.\.)[a-zA-Z0-9_\-\.\/]{1,64}(?::[a-zA-Z0-9_\-\.]{1,32})?$`) and server-side canonical family derivation (`resolve_model_family`). | Vector 9 & 10 |
| **Untrusted Enqueue Poisoning** | Public `http(s)://` enqueues ignore untrusted caller prose and capture authoritative text via SSRF-safe, rate-limited, 10 MB-capped coordinator fastpath fetch. | Vector 1 & 3 |
| **Hallucinated Quotes** | Fail-closed grounding assertion $G=1.00$: every quote must exist verbatim in coordinator source text; failures reject with `HTTP 422` and slash worker $Q_w$. | Vector 4 & 8 |
| **Stored XSS Injection** | Reject HTML tags, event handlers, and dangerous URI schemes on submit; sanitize worker aliases; render via safe DOM APIs (`textContent`). | Vector 5 & 13 |
| **Signature Forgery & Replay** | RFC 8785 Ed25519 verification bound to `worker_pubkey`, claimed `job.url`, `content_sha256`, and active unexpired lease. | Vector 6 & 12 |
| **Zero-Reputation Galileo Hijack & Slow-Drip Drift** | Delegate mempool consensus to `BayesianConsensusAggregator`, enforce rolling-window concordance, divergence acceleration dampening, automated slashing after 3 consecutive zero-dampening windows, and single-lineage `+1` quorum escalation. | Vector 15 |

---

## 6. API Endpoint Reference

### `POST /api/queue/enqueue`
Enqueues a new evaluation job into the mempool with single-flight deduplication.

### `POST /api/queue/claim`
Atomically claims an available job matching the worker's model family and affinity.

### `POST /api/queue/submit`
Submits a signed `AuditReport`, validates grounding, and updates worker telemetry.

### `GET /api/queue/stats`
Returns live mempool depth, active lease count, and estimated wait times.

### `GET /api/workers/leaderboard`
Returns ranked contributor telemetry and quality scores.

### `GET /api/worker/{pubkey}`
Retrieves complete contributor dossier, unlocked badges, and verified audit history.

### `GET /api/badge/worker/{pubkey}.svg`
Generates live SVG achievement profile badge with dark-mode styling.
