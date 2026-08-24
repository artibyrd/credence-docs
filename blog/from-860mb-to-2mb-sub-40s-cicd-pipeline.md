---
title: 'From 860MB to 2MB: Engineering a Sub-40-Second Multi-Plane CI/CD Pipeline'
description: How we eliminated unmocked socket timeouts, slashed build context upload
  bloat by 99.7%, parallelized 200+ tests across cores, and achieved sub-40s pre-commit
  verification.
since_version: v1.14.1
verified_version: v2.16.6
last_verified: 2026-08-24
---

# From 860MB to 2MB: Engineering a Sub-40-Second Multi-Plane CI/CD Pipeline

**Published:** August 19, 2026 | **Author:** Credence Core Team | **Tags:** `ci-cd`, `devops`, `pytest`, `docker`, `cloudrun`, `performance`

---

Every growing codebase eventually hits the **CI/CD Sludge Threshold**: that insidious point where running a quick pre-commit check takes long enough for a developer to switch context, browse social media, or grab a coffee.

In the Credence ecosystem, our strict architectural invariants require a 5-plane pre-commit verification gate (`just check`):
1. **Preflight**: Verify developer toolchain dependencies (`poetry`, `docker`, `gcloud`, `wrangler`, `gh`, `terraform`).
2. **Lint**: Ruff linting, formatting enforcement, and Mypy strict static type checking across 100+ files.
3. **Hermetic Test Gauntlet**: 200+ unit, cryptographic, consensus, and security tests.
4. **Infra Validation**: Terraform syntax and provider validation.
5. **Declarative Health**: Workspace rules and skill manifest integrity checks.

As our test suite and simulation capabilities grew—incorporating 13-node Watts-Strogatz P2P mesh cluster topologies and live rotating corpora—our pipeline began to drag. A complete local QA pass crept up to **~88 seconds**, and every remote deployment via Google Cloud Build pushed **861 MB** across the network wire.

Here is the technical forensic teardown of how we identified three hidden bottlenecks and re-engineered our pipeline to achieve a **sub-40-second complete QA gate** and a **2.1 MB build upload (a 99.7% payload reduction)**.

---

## 1. The Anatomy of CI/CD Drag

When we profiled our pipeline runtime, we discovered that drag was accumulating across three decoupled planes:

![Figure 1.1: Multi-stage container build optimization and keyless WIF CI/CD staging pipeline](assets/illustrations/from-860mb-to-2mb-sub-40s-cicd-pipeline.svg)---

## 2. Bottleneck 1: The 10.7-Second Ghost in the Test Suite

When running `pytest tests/ --durations=10`, one test consistently dominated the latency leaderboard:
```text
10.67s call tests/test_cli.py::test_cli_feeds_and_subjects
```

### The Root Cause
The CLI test was invoking `credence feeds sync` against an unmocked sample URL (`https://example.com/feed.xml`). Because our hermetic testing environment blocks or drops outbound network traffic, the underlying HTTP client (`httpx`) was silently waiting for socket connection timeouts before gracefully falling back.

### The Fix
We wrapped the CLI parser boundary in `unittest.mock.patch` with an `AsyncMock` returning a mock parsed feed structure:

```python
with patch("credence.feeds.parser.fetch_and_parse_feed", new_callable=AsyncMock) as mock_fetch:
    mock_fetch.return_value = ParsedFeed(title="Test Feed", is_modified=True, entries=[])
    # Execute CLI subcommand hermetically...
```

**Result**: Test runtime plummeted from **10.67s to 0.23s** (a **97.8% speedup**) without sacrificing command syntax or database insertion coverage.

---

## 3. Bottleneck 2: Pytest Concurrency & Async Mesh Teardown

Credence includes an extensive suite of P2P mesh cluster tests (`test_mesh_cluster.py`) that simulate 13-node Watts-Strogatz graphs, multi-hop epidemic gossip diffusion, and Byzantine seed tampering.

Even though our workstation featured an 8-core CPU (`Intel Core i7-7700K`), `pytest` was running tests sequentially on a single thread.

### Step 1: Multi-Core Distribution with `pytest-xdist`
We added `pytest-xdist = "^3.5.0"` to our development dependencies and updated our `Justfile` and CI workflows:

```just
test suite="unit":
    poetry run pytest tests/ -m "not integration and not e2e" -n auto --durations=10
```

### Step 2: Concurrent Socket Teardown
In our multi-node tests, shutting down 13 loopback WebSocket relays serially (`for r in relays: await r.stop()`) caused cumulative connection teardown latency. We refactored both startup and teardown to use `asyncio.gather`:

```python
# Before: Serial teardown (~1.5s per test)
for r in relays:
    await r.stop()

# After: Concurrent teardown (<0.08s per test)
await asyncio.gather(*(r.stop() for r in relays))
```

**Result**: The entire 201-test hermetic suite dropped from **81.1s down to 28.4s**—a **65.0% reduction**.

---

## 4. Bottleneck 3: The 861 MB Build Context Trap

When submitting container builds to Google Cloud Run via `gcloud builds submit`, developers noticed substantial upload delays:

```text
Uploading tarball of [.] to [gs://credence-prod-505902_cloudbuild/source/...]
Uploaded [861.4MiB/861.4MiB]...
```

### The Root Cause
Neither `.dockerignore` nor `.gcloudignore` existed in the repository. As a consequence, `gcloud` packed everything in the workspace:
- `.venv/`: 463 MB of installed virtual environment dependencies
- `terraform/.terraform/`: 248 MB of downloaded Terraform provider binaries
- `data/`: 95 MB of local SQLite databases and historical snapshots
- `.mypy_cache/` & `.pytest_cache/`: 41 MB of static analysis caches

### The Fix
We introduced synchronized exclusion manifests across both containerization and cloud submission layers:

```ignore
# .dockerignore & .gcloudignore
.venv
.venv/**
terraform
terraform/**
data
data/**
.pytest_cache
.mypy_cache
.ruff_cache
.coverage
tests
tests/**
web
web/**
docs
docs/**
```

**Result**: The compressed upload archive plummeted from **861.4 MB to 2.1 MB** (a **99.7% reduction**), turning a multi-minute network upload into an instant 1.5-second transfer.

---

## 5. Bottleneck 4: Cloud Build & Multi-Stage Concurrency

In our remote CI/CD pipeline (`cloudbuild.yaml`), steps were executing strictly in serial:
1. `quality-gate` (Ruff & Mypy) $\to$ 2. `test-gate` (Pytest) $\to$ 3. `docker-build` $\to$ 4. `docker-push` $\to$ 5. `cloud-run-deploy` $\to$ 6. `health-check-probe`.

Steps 1 and 2 were completely independent but waited on each other. By adding `waitFor: ['-']` to both initial steps, Cloud Build starts them concurrently on separate worker threads:

```yaml
steps:
  # Step 1: Quality Gate - Runs immediately in parallel with tests
  - name: 'python:3.12-slim'
    id: 'quality-gate'
    waitFor: ['-']
    entrypoint: 'bash'
    args:
      - '-c'
      - |
        pip install --no-cache-dir poetry
        poetry install --no-root
        poetry run ruff check .
        poetry run mypy credence tests

  # Step 2: Hermetic Test Gate - Runs immediately in parallel with quality gate
  - name: 'python:3.12-slim'
    id: 'test-gate'
    waitFor: ['-']
    entrypoint: 'bash'
    args:
      - '-c'
      - |
        pip install --no-cache-dir poetry
        poetry install --no-root
        poetry run pytest tests/ -m "not integration and not e2e" -n auto

  # Step 3: Container Build - Waits for both gates to succeed
  - name: 'gcr.io/cloud-builders/docker'
    id: 'docker-build'
    waitFor: ['quality-gate', 'test-gate']
    env:
      - 'DOCKER_BUILDKIT=1'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/credence-server:latest', '.']
```

Furthermore, in `Dockerfile`, we ensured production images build with `poetry install --without dev` and BuildKit cache mounts (`--mount=type=cache,target=/root/.cache/pypoetry`) so development tools (`pytest`, `mypy`, `ruff`) are never shipped to production Cloud Run containers.

---

## 6. Bottleneck 5: Shell Pipefail Stream Safety

Under strict bash execution (`set -euo pipefail`), our preflight checks were executing commands like:
```bash
ver=$(terraform --version 2>&1 | head -n 1)
```

Because `terraform --version` outputs multiple lines (including provider and platform details), `head -n 1` closes standard input after reading the first line. When Terraform attempted to write subsequent lines to the closed pipe, the Linux kernel issued a `SIGPIPE` signal (exit code 141). Under `pipefail`, this caused the preflight recipe to intermittently fail with exit 141.

We replaced `head -n 1` with stream-draining `sed -n '1p'` across all preflight checks:
```bash
ver=$($version_cmd 2>&1 | sed -n '1p' || echo "installed")
```

`sed -n '1p'` reads line 1, continues draining the input stream quietly without breaking the pipe, and terminates cleanly with exit code 0.

---

## 7. Performance Scorecard

| Pipeline Metric / Stage | Baseline (Before) | Optimized (After) | Net Speedup |
| :--- | :--- | :--- | :--- |
| **Hermetic Test Suite Duration** | 81.1s | **28.4s** | **65.0% faster** |
| **`test_cli_feeds_and_subjects`** | 10.67s | **0.23s** | **97.8% faster** |
| **Full `just check` QA Gate (5 Planes)** | ~88.0s | **39.4s** | **55.2% faster** |
| **Terraform Validation Gate** | 2.73s | **0.38s** | **86.1% faster** |
| **Build / Deploy Context Upload** | 861.4 MB | **2.1 MB** | **99.7% payload reduction** |
| **Production Container Size** | Included dev dependencies | **`--without dev`** | **Leaner & attack-surface hardened** |

---

## Key Takeaways for Systems Engineers

1. **Audit Test Durations Continually**: A single unmocked network socket or serial socket teardown loop can quietly add 10-15 seconds of friction to every developer iteration.
2. **Never Ship Caches Over the Wire**: Always maintain synchronized `.dockerignore` and `.gcloudignore` manifests to prevent gigabytes of `.venv/`, `.terraform/`, and local caches from wasting bandwidth.
3. **Embrace Multi-Core Concurrency**: Distributed testing (`pytest-xdist`) combined with concurrent async socket lifecycles transforms CPU hardware into an instantaneous feedback loop.
4. **Mind Pipefail Edge Cases**: In `set -o pipefail` environments, prefer `sed -n '1p'` over `head -n 1` to avoid intermittent SIGPIPE exit 141 failures.
