---
title: "GCP Cloud Run Deployment"
description: "Deploy the FastMCP 2.0 server to Google Cloud Run with scale-to-zero, Secret Manager, and billing alerts."
---

# GCP Cloud Run Deployment

This guide covers deploying the **Credence FastMCP Server** to **Google Cloud Platform (Cloud Run v2)** with strict cost controls ($15/month budget ceiling, scale-to-zero) and automated **Cloud Build CI/CD**.

---

## 1. Architecture Overview

```mermaid
graph LR
    subgraph Client ["Clients / Coding Assistants"]
        Antigravity[Antigravity IDE / Agent] -->|HTTPS / SSE| CloudRun
        Claude[Claude Desktop] -->|HTTPS / SSE| CloudRun
    end

    subgraph GCP ["Google Cloud Platform (us-central1)"]
        CloudRun["Cloud Run v2 Service<br/>(Scale-to-Zero | 512Mi | 1 CPU)"]
        SM["Secret Manager<br/>(credence-gemini-api-key)"]
        Budget["Cloud Billing Budget<br/>($15.00/mo Ceiling)"]
        Monitoring["Cloud Monitoring<br/>(Latency & Token Gauges)"]
        CloudRun --> SM
        CloudRun --> Monitoring
    end
```

---

## 2. Terraform Deployment Steps

### Step 1: Configure Terraform Variables
Create `terraform/terraform.tfvars`:
```hcl
project_id                  = "YOUR_PROJECT_ID"
region                      = "us-central1"
service_name                = "credence-server"
credence_profile            = "balanced"
monthly_budget_limit_usd    = 15.00
billing_account_id          = "YOUR_BILLING_ACCOUNT_ID"
alert_email_addresses       = ["admin@yourdomain.com"]
```

### Step 2: Provision Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### Step 3: Verify Live SSE Service
```bash
curl -i https://mcp.credence.run/sse
```
