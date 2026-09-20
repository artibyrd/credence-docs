---
title: "Protocol: The Open Epistemic Mempool Queue & Multi-Model Consensus"
description: "Architectural specification of the decentralized audit job queue, atomic lease state machine, multi-model Bayesian consensus quorum, and the Galileo Rule."
since_version: "v2.22.0"
verified_version: "v2.22.0"
last_verified: 2026-09-13
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

## 4. Bayesian Consensus & The Galileo Rule Override

When target quorum is fulfilled, the coordinator computes the consensus verdict:

### The Median Baseline
For $K$ independent evaluations with suspicion scores $S_1, S_2, \dots, S_K$, the baseline consensus is the median:
$$S_{\text{median}} = \operatorname{median}(S_1, S_2, \dots, S_K)$$

The median provides inherent Byzantine resilience against outlier models or hallucinations.

### The Galileo Rule ($G=1.00$ Override)
A fundamental tenet of epistemology is that **unanimous consensus cannot overwrite empirical truth**: if ten observers claim the sky is green, but one observer presents a calibrated photograph with mathematical proof, reality belongs to the proof.

In Credence, if an evaluation submits verified, character-for-character verbatim quotes ($G=1.00$) citing specific taxonomy violations (e.g., deceptive billing, fabricated quotes, unnamed source fallacies), the **Galileo Rule** overrides the clean consensus:

$$\text{If } \exists \text{ grounded violations and } S_{\text{median}} < 25.0 \implies S_{\text{consensus}} = \max(S_{\max}, 45.0)$$

This invariant guarantees that a compromised or gullible quorum cannot launder a deceptive article by simply failing to notice its violations.

---

## 5. Security Architecture & Threat Model

| Attack Vector | Defense Mechanism | Invariant / Rule |
| :--- | :--- | :--- |
| **Sybil Lease Exhaustion** | Strict limit of 3 concurrent active leases per worker pubkey. | Vector 7 |
| **Model Slug Injection** | Strict regex validation (`^[a-zA-Z0-9_-]+/[a-zA-Z0-9_.-]+$`). Block `..` and path traversal. | Vector 9 |
| **Hallucinated Quotes** | Grounding assertion $G=1.00$: every quote must exist verbatim in source text. | Vector 4 |
| **Stored XSS Injection** | Sanitization and HTML-tag stripping on all violation quotes and reasoning. | Vector 5 |
| **Signature Forgery** | Ed25519 cryptographic attestation verification on every submission. | Vector 6 |
| **Tampered Timestamp** | Coordinator-assigned UTC lease expiration window. | Vector 12 |

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
