---
title: Epistemic Merit & Sovereign Node Leaderboards
description: Technical specification and plain-English guide for 5-level node tiers, 11 sovereign node badges, 10 volunteer worker badges, operator maintenance half-life decay, and deterministic tie-breaking.
since_version: v1.9.0
verified_version: v2.22.0
last_verified: 2026-11-22
---

# Epistemic Merit & Sovereign Node Leaderboards

The Credence Epistemic Merit engine provides decentralized, unforgeable reputation scoring and leaderboard rankings for sovereign nodes participating in P2P mutual peer observation gossip.

---

## 1. 5-Tier Epistemic Hierarchy

A node's **Epistemic Tier** is evaluated dynamically based on five verifiable parameters:
1. **5-Factor Quality Score ($Q_i \in [0.0, 1.0]$)**
2. **Total Consensus Evaluated ($N_{\text{eval}} \ge 0$)**
3. **Verbatim Grounding Precision ($G_i \in [0.0, 1.0]$)**
4. **Max Empirical Domain Expertise ($E_{\text{max}} \in [0.0, 1.0]$)**
5. **Active Longevity ($L_i$ in days)**

### Mathematical Tier Milestones

```python
def determine_node_tier(
    quality_score: float,
    evaluations_count: int,
    grounding_ratio: float,
    max_domain_expertise: float,
    longevity_days: float,
) -> EpistemicTier:
    """Determine a node's Epistemic Tier based on mathematical milestones."""
    if quality_score >= 0.85 and longevity_days >= 30.0 and grounding_ratio >= 0.80:
        return EpistemicTier.ROOT_ANCHOR
    if max_domain_expertise >= 0.80 and quality_score >= 0.75 and evaluations_count >= 50:
        return EpistemicTier.SPECIALIST
    if quality_score >= 0.70 and evaluations_count >= 50 and grounding_ratio >= 0.85:
        return EpistemicTier.AUDITOR
    if evaluations_count >= 10 and quality_score >= 0.60 and grounding_ratio >= 0.70:
        return EpistemicTier.SIFTER
    return EpistemicTier.SPROUT
```

---

## 2. The 11 Verifiable Epistemic Merit Badges

Badges are awarded automatically when observable metric records satisfy strict cryptographic or computational conditions:

| Badge ID | Icon | Name | Tier | Requirement | Network Impact |
| :--- | :---: | :--- | :--- | :--- | :--- |
| `sprout_node` | 🌱 | Sprout Genesis | `SPROUT` | Identity initialized; signed genesis payload | Inoculated into peer routing |
| `first_attestation` | 🌾 | First Attestation | `SPROUT` | $\ge 5$ verified grounded audits with 0 errors | Initial consensus participation |
| `sifter_pioneer` | 🔍 | Sifter Century | `SIFTER` | $\ge 100$ feed items partitioned/sifted via HRW | Relays feed bundles to peers |
| `cadence_keeper` | ⏱️ | Cadence Keeper | `SIFTER` | $\ge 7\text{d}$ longevity with $\ge 98.0\%$ operational uptime | Steady backbone heartbeat |
| `verified_auditor` | ⚖️ | Verified Auditor | `AUDITOR` | $Q_i \ge 0.70$, $\ge 100$ citations, $G_i \ge 0.95$ | Attestation seeding adopted by peers |
| `philanthropic_relay` | 🎁 | Philanthropic Relay | `AUDITOR` | $\ge 1,000,000$ LLM tokens saved for swarm | $0.00 compute relay champion |
| `domain_specialist` | 🎯 | Domain Specialist | `SPECIALIST` | $E_i \ge 0.80$ across $\ge 5$ distinct FQDNs | Galileo median consensus weight |
| `galileo_pioneer` | 🔭 | Galileo Pioneer | `SPECIALIST` | $\ge 1$ consensus-shifting grounded discovery | Override erroneous swarm consensus |
| `root_seed_candidate` | 🌳 | Root Seed Candidate | `ROOT_ANCHOR` | $Q_i \ge 0.85, U_i \ge 0.80, G_i \ge 0.80, >30$d | Qualified for inclusion in `peers.json` |
| `sybil_shield` | 🛡️ | Sybil Sentinel | `ROOT_ANCHOR` | $\ge 5,000$ audits with 0 collusion & 0 slashing | Root anchor candidate badge |
| `century_anchor` | 🏛️ | Century Anchor | `ROOT_ANCHOR` | $\ge 100\text{d}$ longevity, $Q_i \ge 0.90, G_i \ge 0.98$ | Sovereign network pillar mark |

### Plain-English Guide: What Each Sovereign Node Badge Means

The table above uses shorthand for five automated telemetry measurements: **$Q_i$** is your node's overall 0–1 quality score, **$G_i$** is how accurately your cited quotes match the source text word-for-word, **$U_i$** is operational uptime, **$E_i$** is accuracy within a specific subject domain, and **HRW** is Credence's deterministic way of dividing RSS feed monitoring across peers without duplicate work. Here is what each node badge means in everyday terms:

* **🌱 Sprout Genesis (`sprout_node`)**: You started a node, generated its cryptographic Ed25519 identity, and signed your initial network handshake. It proves your node is online and reachable.
* **🌾 First Attestation (`first_attestation`)**: Your node completed its first 5 article audits where every cited quote matched the source text exactly and had zero formatting or validation errors.
* **🔍 Sifter Century (`sifter_pioneer`)**: Your node monitored and processed at least 100 incoming RSS/Atom feed items assigned to your slice of the network and shared the results with peers.
* **⏱️ Cadence Keeper (`cadence_keeper`)**: Your node stayed online and healthy for at least 7 consecutive days with 98% or higher uptime, proving reliable day-to-day hosting.
* **⚖️ Verified Auditor (`verified_auditor`)**: Your node consistently produces trustworthy audits—maintaining at least a 0.70 overall quality score across 100+ grounded citations with 95%+ word-for-word quote accuracy.
* **🎁 Philanthropic Relay (`philanthropic_relay`)**: Your cached audit results saved the rest of the network at least 1,000,000 LLM tokens by answering repeat lookups so other nodes did not have to pay to re-evaluate the same articles.
* **🎯 Domain Specialist (`domain_specialist`)**: Your node demonstrated strong calibration (80%+ domain accuracy) across at least 5 distinct publisher websites within a subject area.
* **🔭 Galileo Pioneer (`galileo_pioneer`)**: Your node uncovered a verbatim, verifiable violation in an article that earlier consensus passes missed—and the exact quote proved your finding right, shifting the final verdict.
* **🌳 Root Seed Candidate (`root_seed_candidate`)**: Your node has been online for over 30 days with high overall quality ($\ge 0.85$), high uptime ($\ge 0.80$), and strong quote accuracy ($\ge 0.80$), making it eligible to serve as a trusted bootstrap seed in `peers.json`.
* **🛡️ Sybil Sentinel (`sybil_shield`)**: Your node has completed at least 5,000 verified audits with a spotless record—zero collusion flags and zero reputation penalties.
* **🏛️ Century Anchor (`century_anchor`)**: Long-term pillar status for nodes running continuously for 100+ days while holding top-tier quality ($\ge 0.90$) and near-perfect quote accuracy ($\ge 0.98$).

---

## 3. Operator Maintenance Grace Period & Half-Life Decay

In distributed peer networks, node operators occasionally need to restart servers for kernel upgrades, docker re-deployments, or hardware migrations. A naive uptime formula would immediately plummet a node's reputation during a 15-minute reboot.

Credence implements an **Operator Half-Life Decay Grace Period ($\tau=24\text{h}$)**:

$$U_i(t) = \begin{cases} 
U_{\text{raw}} & \text{if } \Delta t \le 2\text{ hours} \\
U_{\text{raw}} \cdot \exp\left( - \frac{\ln(2) \cdot (\Delta t - 2)}{24} \right) & \text{if } \Delta t > 2\text{ hours}
\end{cases}$$

| Offline Duration ($\Delta t$) | Uptime Calculation Formula | Governance & Leaderboard Impact |
| :--- | :--- | :--- |
| **$\Delta t \le 2\text{ hours}$ (Grace Period)** | $U_i = U_{\text{raw}}$ | Zero penalty; seamless reboot |
| **$2\text{h} < \Delta t \le 26\text{ hours}$** | $U_i = U_{\text{raw}} \cdot \exp(-\ln(2)(\Delta t-2)/24)$ | Smooth exponential 50% decay |
| **$\Delta t > 7\text{ days}$ (Stale Node)** | $U_i \to 0.00$ | Demoted to CHOKED status |

This prevents transient network glitches from wrecking leaderboards while ensuring permanently dead nodes gracefully decay out of top ranks.

---

## 4. Deterministic 4-Level Tie-Breaking

To eliminate non-deterministic flapping across leaderboards, all node rankings use a deterministic 4-stage comparator:

```python
def leaderboard_sort_key(entry: LeaderboardEntry) -> tuple:
    return (
        -entry.score,              # 1. Primary Category Score (descending)
        -entry.tokens_seeded,       # 2. Total Tokens Donated (descending)
        entry.first_seen_timestamp, # 3. Longevity / Tenure (ascending: older is better)
        entry.node_pubkey,          # 4. Ed25519 Public Key Hex (lexicographical tie-breaker)
    )
```

---

## 5. Solitary Genesis Node Mathematical Priors ($N=1$)

When a solitary node runs in isolation (e.g. initial setup before connecting to bootstrap peers), it has 0 recorded heartbeats and 0 peer interactions. 

To prevent division-by-zero crashes or spurious $0.0$ scores, mathematical routines assign **healthy neutral priors**:
- **Uptime Factor ($U_i$)**: Defaulted to $1.00$
- **Concordance Factor ($C_i$)**: Defaulted to $0.85$
- **Quality Score ($Q_i$)**: Defaulted to $0.50$
- **P2P Traffic Class**: Assigned `PeerTrafficClass.STANDARD` (50 msgs/s, never choked)

---

## 6. Vector SVG Badge Generation & Embed Mechanics

Sovereign nodes, newsroom mastheads, and federation organizations can export and embed live dynamic vector badges in the **Credence Cyber Dark** aesthetic:

```bash
# Export static badge file via CLI (supports --style pill|shield and --theme dark|midnight|light)
$ credence badge export verified_auditor --node anchor-us-central1 --style pill --output badge.svg

# Export publisher trust badge via CLI
$ credence badge export reuters.com --style shield --output reuters_badge.svg

# Request dynamic SVG from server API
GET /api/badge/verified_auditor?node=anchor-us-central1&style=pill&theme=dark
GET /api/badge/publisher/reuters.com?style=shield&theme=dark
```

### Visual Style Variants & Color Schemes
- **Cyber Glass Pill (`style="pill"`)**: Sleek rounded badge (`rx="14"`) matching the `<credence-badge>` Web Component geometry with glowing metric sub-pill.
- **Modern Shield (`style="shield"`)**: Crisp 2-segment badge with 6px rounded corners (`rx="6"`) and clean dividing border.
- **Emerald Glow (`#34d399` → `#059669`)**: Root Seed Candidates, Sybil Shields, and Pristine Publications ($\ge 85\%$).
- **Cyber Cyan (`#38bdf8` → `#0284c7`)**: Verified Auditors, Sifter Pioneers, and Clean Publications ($\ge 70\%$).
- **Violet Beam (`#c084fc` → `#7c3aed`)**: Galileo Pioneers and Domain Specialists.
- **Amber Alert (`#fbbf24` → `#d97706`)**: Philanthropic Relays and Moderate Publications ($\ge 50\%$).
*For complete vector geometry specifications and threat isolation proofs, see the [Unified Merit & Attestation Badge System Blueprint](../blueprints/unified-merit-and-attestation-badge-system.md).*

---

## 7. Volunteer Worker Contributor Leaderboard & Badges

The mempool worker subsystem tracks volunteer compute donations, computing contributor rankings and awarding verifiable merit badges:

### API Endpoints
- `GET /api/workers/leaderboard`: Returns the active worker leaderboard sorted by quality score ($Q_w$), bounties cleared, or tokens donated.
- `GET /api/worker/{pubkey}`: Returns an individual worker's telemetry dossier, recent verified audits, unlocked badges, and embed code.
- `GET /api/badge/worker/{pubkey}`: Dynamically renders an Ed25519-anchored vector SVG badge suitable for GitHub READMEs or personal portfolios.

### The 10 Volunteer Worker Achievement Badges

| Badge ID | Name | Icon | Tier | Automated Unlock Criterion |
| :--- | :--- | :---: | :--- | :--- |
| `first_bounty` | First Bounty | 🎯 | `SPROUT` | Complete your first verified mempool audit (`total_completed >= 1` or `bounties_cleared >= 1`) |
| `speed_demon` | Speed Demon | ⚡ | `SIFTER` | Claim, evaluate, and submit a verified audit in under 15 seconds |
| `bounty_hunter` | Bounty Hunter | 🏹 | `SIFTER` | Clear 25+ open mempool bounties (`bounties_cleared >= 25`) |
| `bounty_legend` | Bounty Legend | 👑 | `AUDITOR` | Clear 100+ open mempool bounties (`bounties_cleared >= 100`) |
| `diversity_champion` | Diversity Champion | 🌈 | `AUDITOR` | Submit verified audits across 3+ distinct canonical model families |
| `model_pioneer` | Model Pioneer | 🧪 | `AUDITOR` | Be the first worker to anchor a newly seen model family on the coordinator |
| `night_owl` | Night Owl | 🦉 | `SPROUT` | Complete at least 1 verified audit during off-peak UTC hours (00:00–06:00 UTC) |
| `weekend_warrior` | Weekend Warrior | ⚔️ | `SPROUT` | Complete 10+ verified audits on UTC Saturday or Sunday |
| `precision_striker` | Precision Striker | 🎯 | `SPECIALIST` | Anchor 50+ verbatim grounded citations with zero rejections and $Q_w \ge 0.80$ |
| `iron_worker` | Iron Worker | 🛡️ | `ROOT_ANCHOR` | Complete 500+ verified audits with zero grounding rejections and $Q_w \ge 0.85$ |

### Plain-English Guide: What Each Worker Badge Means

Volunteer worker badges recognize compute contributors who run `credence worker` to evaluate articles from the open mempool without having to host a full coordinator node:

* **🎯 First Bounty (`first_bounty`)**: Awarded the first time your worker picks up an open job from the queue, evaluates it, and returns a validly signed, verbatim-grounded result.
* **⚡ Speed Demon (`speed_demon`)**: Awarded when your worker finishes an audit from claim to verified submission in under 15 seconds—useful for keeping live in-editor queries snappy.
* **🏹 Bounty Hunter (`bounty_hunter`)**: Awarded once your worker has cleared 25 queued bounties, showing steady ongoing contribution to the community pool.
* **👑 Bounty Legend (`bounty_legend`)**: Awarded after clearing 100 queued bounties—recognizing high-volume contributors who keep the public backlog clear.
* **🌈 Diversity Champion (`diversity_champion`)**: Awarded when the same worker identity submits verified audits using at least 3 different model families (for example, Gemini, Claude, and a local Llama/Ollama model), strengthening multi-lineage consensus.
* **🧪 Model Pioneer (`model_pioneer`)**: Awarded to the very first volunteer who introduces and anchors an audit from a model family that has never been seen on that coordinator before.
* **🦉 Night Owl (`night_owl`)**: Awarded for completing at least one verified audit during quiet overnight hours (00:00–06:00 UTC), when fewer desktop workers are typically online.
* **⚔️ Weekend Warrior (`weekend_warrior`)**: Awarded for completing 10 or more verified audits on Saturday or Sunday (UTC), helping keep turnaround times fast over weekends.
* **🎯 Precision Striker (`precision_striker`)**: Awarded for high forensic accuracy—finding at least 50 violations whose quotes match the original page character-for-character, with zero rejected submissions and a worker quality score of at least 0.80 (8.0 / 10 on the leaderboard).
* **🛡️ Iron Worker (`iron_worker`)**: The top volunteer reliability mark—completing 500 or more verified audits with zero grounding rejections and a sustained quality score of at least 0.85 (8.5 / 10 on the leaderboard).
