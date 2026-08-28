---
title: 'Technical Blueprint: Decentralized Local Evaluator & Egalitarian Mesh Ingestion'
description: Zero-privilege public mesh submission, RFC 8785 Ed25519 attestation proofs, and 5-factor adversarial defense gate.
since_version: v2.18.0
verified_version: v2.18.1
last_verified: 2026-08-28
sidebar:
  order: 22
---

# Technical Blueprint: Decentralized Local Evaluator & Egalitarian Mesh Ingestion

This technical blueprint specifies the **Egalitarian Public Mesh Ingestion Protocol** and decentralized local evaluator architecture implemented in Credence `v2.18.0`.

---

## 1. The Egalitarian Architecture Principle

In decentralized trust protocols, truth auditing must not be restricted to privileged server node operators. Anyone with the Credence codebase must be able to run local evaluations on their own workstation, cryptographically sign the resulting `AuditReport`, and contribute their findings to the global P2P mesh.

Prior to `v2.18.0`, mesh nodes required pre-shared API keys to accept attestations from peers, creating an asymmetric hierarchy between hosted nodes and community contributors. The Egalitarian Mesh Ingestion protocol eliminates this barrier by replacing bearer token authentication with **mathematical, cryptographic, and epistemic verification gates**.

| Contributor Category | Ingestion Endpoint | Authentication | Verification Mechanism |
| :--- | :--- | :--- | :--- |
| **Hosted Node Operator** | `POST /api/mesh/submit-attestation` | Zero Auth | RFC 8785 Ed25519 Proof + $G=1.00$ DOM Grounding |
| **Ephemeral Contributor** | `POST /api/mesh/submit-attestation` | Zero Auth | RFC 8785 Ed25519 Proof + $G=1.00$ DOM Grounding |
| **Batch Research Ingest** | `POST /api/mesh/submit-batch` | Zero Auth | Batch Signature Validation + Entropy Floor |
| **Node Admin Operations** | `POST /api/admin/node-role` | `CREDENCE_ADMIN_API_KEY` | Bearer Token Auth (Gated for Infra / Budget) |

As shown in the matrix above, node operators and ephemeral community contributors share the **exact same public ingestion gate**. Admin API keys are reserved strictly for node infrastructure management (adjusting token spend, secret rotation, and role configuration).

---

## 2. The 5-Factor Defensive Ingestion Gate

Because public ingestion endpoints (`POST /api/mesh/submit-attestation` and `POST /api/mesh/submit-batch`) are open and unauthenticated, nodes defend their storage and compute against Sybil attacks and data poisoning using a five-stage defense pipeline:

### Factor 1: RFC 8785 Canonical JSON & Ed25519 Integrity (`inv-canonical-json-ed25519`)
Every submitted attestation must contain a valid Ed25519 signature computed over the RFC 8785 canonical bytes of the report payload:

$$\text{Verify}_{\text{pk}}\left(\sigma, \, \text{RFC8785}(\text{Report} \setminus \{\sigma, \text{pk}\})\right) = \text{True}$$

Any mutation of scores, timestamps, or violation details invalidates the signature and causes an immediate HTTP 422 rejection.

### Factor 2: Untrusted Ingestion Boundary & Network Defense (`inv-untrusted-ingestion`)
To prevent Server-Side Request Forgery (SSRF) and cloud metadata exfiltration, submitted target URLs are strictly validated:
- Rejects cloud metadata addresses (`169.254.169.254`, `metadata.google.internal`).
- Rejects loopback addresses (`127.0.0.1`, `localhost`) unless `allow_local=True` is explicitly enabled in testing fixtures.
- Rejects RFC 1918 private subnets (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).

### Factor 3: Verbatim Whitespace-Insensitive DOM Grounding ($G=1.00$) (`inv-verbatim-grounding`)
For every violation finding included in the audit, the quoted excerpt must exist character-for-character within the sanitized DOM or clean article text:

$$G = \frac{|\text{Quoted Tokens} \cap \text{DOM Tokens}|}{|\text{Quoted Tokens}|} = 1.00$$

If any specialist finding contains hallucinated or fabricated text ($G < 1.00$), the entire report is rejected and the node's reputation score is slashed.

### Factor 4: Topic Entropy Floor Defense ($H \ge 0.30$) (`inv-topic-entropy-defense`)
To prevent adversarial astroturfing and repetitive synthetic slop attacks, submissions must meet or exceed the normalized Shannon word entropy threshold:

$$H_{\text{penalized}} = H_{\text{normalized}} \times (1 - C_{\text{top3}}) \times \text{TTR} \ge 0.30$$

Where $C_{\text{top3}}$ is the concentration of the top three most frequent tokens and $\text{TTR}$ is the Type-Token Ratio.

### Factor 5: Zero-Token SQLite Inoculation & Model Provenance
Once an attestation passes all four verification filters, it is committed to SQLite storage without invoking downstream LLM inference. The audit is recorded under `evaluation_method="mesh_contributed"` and is immediately indexed for model comparison queries.

---

## 3. Contributor Workflows & Practical Examples

Ephemeral contributors can audit articles locally using their preferred inference model (or the built-in offline heuristic engine) and publish the signed report to any public Credence node.

### Local Evaluation and Direct Mesh Submission
```bash
# Evaluate an investigative article locally and submit to a remote community node
$ credence mesh submit https://example.com/civic-investigation --node https://credence.run
```

### Batch Ingestion of Research Corpora
```bash
# Submit a pre-computed directory of JSON audit reports
$ credence mesh submit ./eval_corpus_2026/ --node https://credence.run --batch
```

### FastMCP 2.0 Agentic Dispatch
Autonomous AI agents interacting with Credence over FastMCP 2.0 can invoke the egalitarian mesh tools directly:

```json
{
  "tool": "credence_submit_mesh_attestation",
  "arguments": {
    "report_json": "{\"url\":\"https://example.com/news\",\"suspicion_score\":15.0,...}",
    "node_url": "https://credence.run"
  }
}
```

---

## 4. Sybil Resistance and Long-Term Network Health

By anchoring attestation acceptance to mathematical proofs ($G=1.00$, RFC 8785 Ed25519 signatures, and entropy floors) rather than economic tokens or centralized whitelists, Credence achieves Byzantine Sybil resistance ($3f + 1$). Serving nodes can scale horizontally on zero-budget infrastructure while maintaining cryptographic trust.
