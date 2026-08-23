---
title: Cloud Run Deployment & Dual-Tier Monitoring Guide
description: Deploying to Google Cloud Run with Terraform, $15/mo budget cap, scale-to-zero
  compute, Workload Identity Federation, and automated CI/CD.
since_version: v1.8.0
verified_version: v2.1.1
last_verified: 2026-08-20
---

# Cloud Run Deployment & Dual-Tier Monitoring Guide

This guide covers deploying the **Credence FastMCP Server** to **Google Cloud Platform (Cloud Run v2)** with strict cost controls ($15/month budget ceiling, scale-to-zero compute), automated **Cloud Build / GitHub Actions CI/CD**, **Workload Identity Federation (WIF)**, and **Dual-Tier SRE Observability** with **Discord & Email Alerting**.

---

## 1. Architecture Overview

![Figure 1.1: Google Cloud Run serverless compute plane deployment with keyless WIF authentication](assets/illustrations/deployment-cloudrun.svg)---

## 2. Dual-Tier Monitoring Architecture

Credence provisions observability according to two operational modes controlled by `monitoring_tier`:

| Feature | "Guy in His Basement" Easy Mode (`monitoring_tier = "simple"`) | Advanced Production Tier (`monitoring_tier = "advanced"`) |
| :--- | :--- | :--- |
| **Default** | Yes (Default) | Optional |
| **Notification Channels**| Discord / Powercord Webhook (`discord_webhook_url`), Direct Email | Discord Webhook, Direct Email, Multi-Channel |
| **Budget Alerts** | 50%, 80%, 100% cap alerts sent to Discord & Email | 50%, 80%, 100% cap alerts sent to Discord & Email |
| **Core Failure Alerts** | 1. 🛑 Global Uptime Probe Failure (`/health`)<br/>2. 🔥 5xx Server Error Spike ($>5$ in 5m)<br/>3. ⚠️ Memory Near-OOM ($>85\%$) | 1. 🛑 Global Uptime Probe Failure<br/>2. 🔥 5xx Server Error Spike<br/>3. ⚠️ Memory Near-OOM |
| **Extended Alerts** | *Disabled (Zero false alarms)* | 4. ⏱️ P95 Latency Degradation ($>5000\text{ms}$)<br/>5. ⚙️ CPU Saturation ($>90\%$)<br/>6. 📅 Seed Publisher Cron Failure<br/>7. 📜 Log metric for `ERROR`/`CRITICAL` logs |
| **Dashboard** | 4-Quadrant SRE Visual Console | Multi-widget console with error log streams |

---

## 3. Step-by-Step Deployment Runbook

### Step 1: Initialize gcloud & Enable Required APIs
```bash
gcloud config set project YOUR_PROJECT_ID

gcloud services enable \
    run.googleapis.com \
    storage.googleapis.com \
    cloudscheduler.googleapis.com \
    cloudbuild.googleapis.com \
    artifactregistry.googleapis.com \
    secretmanager.googleapis.com \
    monitoring.googleapis.com \
    logging.googleapis.com \
    cloudbilling.googleapis.com
```

### Step 2: Configure Secret Manager Keys
```bash
# Add your Gemini API key to Secret Manager
echo -n "YOUR_GEMINI_API_KEY" | gcloud secrets create credence-gemini-api-key \
    --data-file=- \
    --replication-policy="automatic"
```

### Step 3: Configure Terraform Variables
Create your git-ignored `terraform/terraform.prod.tfvars`:
```hcl
project_id                  = "YOUR_PROJECT_ID"
region                      = "us-central1"
service_name                = "credence-server"
environment                 = "prod"
credence_profile            = "balanced" # or 'economy', 'ultra'
monthly_budget_limit_usd    = 15.00
min_instance_count          = 0
max_instance_count          = 2

# Dual-Tier Monitoring & Discord Webhook
monitoring_tier             = "advanced" # or "simple"
discord_webhook_url         = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN"
enable_uptime_check         = true
```

### Step 4: Provision Infrastructure with Terraform
```bash
cd terraform
terraform init
terraform plan -var-file="terraform.prod.tfvars"
terraform apply -var-file="terraform.prod.tfvars" -state="terraform.prod.tfstate"
```

### Step 5: Build & Deploy the Container (Commit-Before-Deploy)
Ensure your working tree is clean (`git status -s`), then deploy:
```bash
just deploy backend
```

---

## 4. Workload Identity Federation (WIF) for GitHub Actions CI/CD

## 4. Workload Identity Federation & Least-Privileged CI/CD Setup

To automate continuous deployment to Cloud Run without managing long-lived service account JSON keys, configure **Workload Identity Federation (WIF)** using Google's **Principle of Least Privilege (PoLP)**.

### Least-Privileged IAM Role Architecture
Rather than granting excessive administrative roles (`roles/run.admin` or `roles/cloudbuild.builds.editor`), the CI/CD deployment service account (`credence-cloud-run-sa`) receives strictly scoped least-privileged roles:

| Role | Purpose | Least-Privilege Constraint |
| :--- | :--- | :--- |
| `roles/run.developer` | Create/update Cloud Run revisions | **Cannot** alter service IAM policies (`setIamPolicy`) or view project secrets |
| `roles/cloudbuild.builds.builder` | Submit and execute container builds | **Cannot** modify build triggers, workers, or worker pools |
| `roles/iam.serviceAccountUser` | Act as Cloud Run runtime identity | **Resource-scoped** directly on `credence-cloud-run-sa` (no project-wide impersonation) |
| `roles/iam.workloadIdentityUser` | Exchange GitHub OIDC tokens for short-lived GCP tokens | **Repository-scoped** strictly to `attribute.repository/artibyrd/credence` |

### Step-by-Step Dual-Environment Setup Runbook

#### A. Dev Environment (`credence-dev-495173`)
```bash
# 1. Create Workload Identity Pool
gcloud iam workload-identity-pools create "github-pool" \
    --project="credence-dev-495173" \
    --location="global" \
    --display-name="GitHub Actions Pool"

# 2. Create OIDC Provider with Repository Condition
gcloud iam workload-identity-pools providers create-oidc "github-provider" \
    --project="credence-dev-495173" \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Actions Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
    --attribute-condition="assertion.repository=='artibyrd/credence'" \
    --issuer-uri="https://token.actions.githubusercontent.com"

# 3. Grant Resource-Scoped WIF Access to Service Account
gcloud iam service-accounts add-iam-policy-binding "credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com" \
    --project="credence-dev-495173" \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/865363499314/locations/global/workloadIdentityPools/github-pool/attribute.repository/artibyrd/credence"

# 4. Grant Resource-Scoped ServiceAccountUser Binding
gcloud iam service-accounts add-iam-policy-binding "credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com" \
    --project="credence-dev-495173" \
    --role="roles/iam.serviceAccountUser" \
    --member="serviceAccount:credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com"

# 5. Grant Project-Level Least-Privilege Roles
gcloud projects add-iam-policy-binding "credence-dev-495173" \
    --member="serviceAccount:credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com" \
    --role="roles/run.developer"

gcloud projects add-iam-policy-binding "credence-dev-495173" \
    --member="serviceAccount:credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.builder"
```

#### B. Production Environment (`credence-prod-505902`)
```bash
# 1. Create Workload Identity Pool
gcloud iam workload-identity-pools create "github-pool" \
    --project="credence-prod-505902" \
    --location="global" \
    --display-name="GitHub Actions Pool"

# 2. Create OIDC Provider with Repository Condition
gcloud iam workload-identity-pools providers create-oidc "github-provider" \
    --project="credence-prod-505902" \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Actions Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
    --attribute-condition="assertion.repository=='artibyrd/credence'" \
    --issuer-uri="https://token.actions.githubusercontent.com"

# 3. Grant Resource-Scoped WIF Access to Service Account
gcloud iam service-accounts add-iam-policy-binding "credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com" \
    --project="credence-prod-505902" \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/663899237633/locations/global/workloadIdentityPools/github-pool/attribute.repository/artibyrd/credence"

# 4. Grant Resource-Scoped ServiceAccountUser Binding
gcloud iam service-accounts add-iam-policy-binding "credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com" \
    --project="credence-prod-505902" \
    --role="roles/iam.serviceAccountUser" \
    --member="serviceAccount:credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com"

# 5. Grant Project-Level Least-Privilege Roles
gcloud projects add-iam-policy-binding "credence-prod-505902" \
    --member="serviceAccount:credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com" \
    --role="roles/run.developer"

gcloud projects add-iam-policy-binding "credence-prod-505902" \
    --member="serviceAccount:credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.builder"
```

### GitHub Repository Secrets Matrix

Configure the following secrets in GitHub via `gh secret set -R artibyrd/credence`:

| Secret Name | Environment | Value Description |
| :--- | :--- | :--- |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Prod | `projects/663899237633/locations/global/workloadIdentityPools/github-pool/providers/github-provider` |
| `GCP_SERVICE_ACCOUNT` | Prod | `credence-cloud-run-sa@credence-prod-505902.iam.gserviceaccount.com` |
| `GCP_PROJECT_ID` | Prod | `credence-prod-505902` |
| `GCP_DEV_WORKLOAD_IDENTITY_PROVIDER` | Dev | `projects/865363499314/locations/global/workloadIdentityPools/github-pool/providers/github-provider` |
| `GCP_DEV_SERVICE_ACCOUNT` | Dev | `credence-cloud-run-sa@credence-dev-495173.iam.gserviceaccount.com` |
| `GCP_DEV_PROJECT_ID` | Dev | `credence-dev-495173` |

---

## 5. Connecting Antigravity & Claude Desktop to Cloud Run

Once deployed, retrieve your Cloud Run SSE endpoint:
```bash
just gcp status
# Output: https://credence-server-xxxxx-uc.a.run.app
```

Add the remote endpoint to your `mcp_config.json`:
```json
{
  "mcpServers": {
    "credence_remote": {
      "url": "https://credence-server-xxxxx-uc.a.run.app/sse"
    }
  }
}
```

---

## 5.1 Cold-Boot Database Persistence & Scale-to-Zero Storage Gravity

In serverless scale-to-zero compute topologies (`min_instance_count = 0`), container instances start with an ephemeral local disk. Credence automatically preserves historical audits, snapshots, and node identity via zero-touch Google Cloud Storage synchronization:

1. **Pre-Boot Restore Hook**: Before `init_db()` runs on container startup, the server checks if the local SQLite database exists. If empty or fresh, it downloads `gs://<PROJECT_ID>-seeds-nexus/backups/credence_latest.db.gz` (with fallback to the newest timestamped archive), validates SQLite PRAGMA integrity, and hydrates the database in `<200ms`.
2. **Dual-Pointer Cloud Uploads**: Backups simultaneously push the immutable timestamped snapshot (`credence_YYYYMMDD_HHMMSS.db.gz`) and the latest pointer (`credence_latest.db.gz`) along with their Ed25519-signed RFC 8785 manifests.
3. **Heartbeat & Event-Driven Sync**: Autonomous Epistemic Boredom cycles (`/cron/boredom`), feed sifter passes, and manual audits automatically create and upload asynchronous snapshots.
4. **Graceful Scale-to-Zero Shutdown**: During container scale-down (SIGTERM), the server flushes the SQLite WAL and awaits cloud snapshot completion before process termination.
5. **Least-Privilege Storage IAM**: The runtime service account (`credence-cloud-run-sa`) requires `roles/storage.objectAdmin` on the seeds/backups bucket (`<PROJECT_ID>-seeds-nexus`), while maintaining read-only isolation across other cloud infrastructure.

---

## 6. Parameterized Operator Workflows (`Justfile`)

The repository provides a single canonical parameterized operator command family (`just gcp [action] [arg]`) with automated preflight validation:

| Command | Action | Description |
| :--- | :--- | :--- |
| `just preflight gcloud` | Preflight Gate | Verifies `gcloud` binary installation and active authenticated account. |
| `just gcp status` | Inspection | Displays active Cloud Run revision, image tag, CPU/memory, and traffic split. |
| `just gcp logs [limit]` | Forensics | Queries structured Cloud Run logs via `gcloud logging read` (default: 30 lines). |
| `just gcp tail` | Live Stream | Streams real-time container logs via `gcloud beta run services logs tail`. |
| `just gcp revisions` | History | Lists all historical revisions with author, deploy timestamp, and traffic split. |
| `just gcp describe` | Deep Inspect | Dumps full JSON/YAML service specification. |
| `just gcp probe` | Multi-Probe | Probes `/health`, `/api/health`, `/sse`, `/api/reports`, and `/api/sifter/status`. |
| `just gcp germinate [burst]` | Remote Sifting | Invokes remote `/api/germinate` endpoint to trigger Miracle-Gro ignition. |
| `just gcp rollback <revision>` | Safe Revert | Rolls back 100% traffic allocation to a previous healthy revision. |
| `just deploy backend` | Safe Deploy | Submits container build via Cloud Build, deploys to Cloud Run, and executes health probe. |

> [!WARNING]
> **Local Production Deployment Safety Gate**:
> Running local production deployments (`just deploy prod`, `just deploy backend prod`, `just deploy all`, or `just edge deploy`) triggers a safety confirmation prompt requiring the operator to explicitly type `DEPLOY-PROD`. Production releases should standardly be executed via GitHub Actions PR merges to `main`. For non-interactive troubleshooting scripts, pass `FORCE_PROD_DEPLOY=true`.

---

## 7. Scale-to-Zero Cold Start Optimization & SRE Tuning

When operating under `min_instance_count = 0` ($0.00 idle compute ceiling), Credence implements a 5-pillar serverless cold start optimization framework:

1. **Startup CPU Boost (`startup_cpu_boost = true`)**: Dynamically allocates 2–4 vCPUs during container boot to accelerate CPU-bound Python AST parsing and import graph loading.
2. **Direct Virtualenv Binary Execution**: Bypasses Poetry's CLI wrapper by executing `/app/.venv/bin/credence serve` directly with `PATH="/app/.venv/bin:$PATH"`, saving ~950ms.
3. **Build-Time Bytecode Precompilation (`compileall`)**: Docker images precompile `.pyc` files during build, eliminating AST compilation on cold boots.
4. **Lazy Dependency Deferral**: Heavy modules (`trafilatura`, `dateparser`, `playwright`) are lazy-loaded inside tool handlers, dropping module import latency by >48%.
5. **Calibrated Startup Probe Sizing**: Configured with `failure_threshold = 30`, `period_seconds = 2`, `timeout_seconds = 2`, and `initial_delay_seconds = 0`, providing a 60s grace window for initial node germination while detecting HTTP readiness within ~1.5–2.0s once Uvicorn starts listening.

*For complete benchmarks and mathematical breakdown, see the [Cloud Run Cold Start Blueprint](blueprints/cloudrun-scale-to-zero-cold-start-optimization.md) and [Engineering Blog Essay](../blog/taming-the-10-second-cold-start-scale-to-zero.md).*
