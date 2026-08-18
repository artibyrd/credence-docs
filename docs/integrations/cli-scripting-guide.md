---
title: "CLI Automation & Shell Scripting Guide"
description: "Advanced shell automation using JSON output, jq filtering, parallel batch processing with xargs, and CI/CD PR review gates."
---

The **`credence` CLI** is built with rich formatting for human terminals and structured JSON streams for shell automation, CI/CD pipelines, and data processing.

This guide provides practical command-line recipes for advanced developers and DevOps engineers.

---

## 1. JSON Output & `jq` Filtering

Extract specific fields from an audit report using `--json`:

```bash
# Get the calibrated suspicion score
credence audit https://example.com/article --json | jq '.suspicion_score'
# Output: 42.5

# List all grounded violation quotes
credence audit https://example.com/article --json | jq -r '.violations[].quote'

# Extract the Ed25519 signature and evaluator key
credence audit https://example.com/article --json | jq '{evaluator: .evaluator_pubkey, sig: .signature_ed25519}'
```

---

## 2. Parallel Batch Processing with `xargs`

To audit an entire list of URLs in parallel using local multi-core concurrency:

```bash
# urls.txt contains 50 target links
cat urls.txt | xargs -n 1 -P 4 -I {} credence audit {} --profile FREE --quiet
```

---

## 3. GitHub Actions CI PR Review Gate

Add an epistemic check to pull requests modifying documentation or external citations:

```yaml
name: Epistemic Link Verification

on:
  pull_request:
    paths: ['docs/**', 'README.md']

jobs:
  verify-links:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install Credence
        run: pip install credence

      - name: Audit Extracted URLs
        run: |
          # Extract all http links from markdown and audit
          grep -oP 'https?://[^\s\)]+' README.md | while read -r url; do
            score=$(credence audit "$url" --profile FREE --json | jq '.suspicion_score')
            echo "Audited $url: Score $score"
            if (( $(echo "$score > 60.0" | bc -l) )); then
              echo "❌ Suspicious link detected in PR: $url (Score $score)"
              exit 1
            fi
          done
```
