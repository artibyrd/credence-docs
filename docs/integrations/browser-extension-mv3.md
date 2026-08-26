---
title: Building a Zero-Build Browser Extension (Manifest V3)
description: How to build a lightweight, zero-npm Chrome and Firefox extension to
  query Credence scores on active browser tabs.
since_version: v1.0.0
verified_version: v2.18.0
last_verified: 2026-08-26
---

# Building a Zero-Build Browser Extension (Manifest V3)

Readers and researchers want real-time epistemic scores as they browse the web.

This guide shows how to build a **100% Zero-Build browser extension (Manifest V3)** for Chrome, Brave, Edge, and Firefox that connects to your local or remote Credence node with **0 npm dependencies**.

---

## 1. Extension Directory Structure

The extension follows a lean, zero-build directory layout:

| File | Purpose |
| :--- | :--- |
| `manifest.json` | Manifest V3 permissions and entry points |
| `popup.html` | Zero-build popup interface with Web Component badges |
| `popup.js` | FastMCP/HTTP API querying client |
| `icon.svg` | Resolution-independent extension icon |

---

## 2. The Manifest File (`manifest.json`)

```json
{
  "manifest_version": 3,
  "name": "Credence Epistemic Guard",
  "version": "1.0.0",
  "description": "Cryptographically verified journalistic ethics and fallacy auditing for active tabs.",
  "permissions": ["activeTab"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.svg"
  }
}
```

---

## 3. Popup UI (`popup.html`) & Logic (`popup.js`)

### `popup.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">Credence Guard</span>
      <h3 id="site-title">Auditing Tab...</h3>
    </div>
    <div id="score-val" class="score">--</div>
    <div id="status-tag" class="tag">QUERYING NODE</div>
    <div id="violations-list" class="findings"></div>
  </div>
  <script src="popup.js"></script>
</body>
</html>
```

### `popup.js`:
```javascript
async function auditCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url.startsWith('http')) return;

  document.getElementById('site-title').textContent = new URL(tab.url).hostname;

  try {
    const res = await fetch('http://localhost:8000/api/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: tab.url, cost_profile: 'FREE' })
    });

    const report = await res.json();
    document.getElementById('score-val').textContent = report.suspicion_score.toFixed(1);
    document.getElementById('status-tag').textContent = report.classification;
  } catch (err) {
    document.getElementById('status-tag').textContent = 'NODE OFFLINE';
  }
}

document.addEventListener('DOMContentLoaded', auditCurrentTab);
```

---

## 4. Loading the Extension in Chrome

1. Open `chrome://extensions/` in Chrome.
2. Toggle on **Developer Mode** (top right).
3. Click **Load Unpacked** and select the `credence-extension/` folder.
4. Click the Credence icon on any active webpage to see live in-browser epistemic audit scores!

---
## Chrome Manifest V3 Browser Extension Architecture

The Manifest V3 extension runs client-side WebCrypto verification in a service worker with zero npm dependencies.

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

To ensure continuous compliance with system invariants, **Browser Extension Mv3** is verified using shift-left integration test gates in the continuous integration pipeline:

```bash
# Execute focused test gate for this subsystem
$ poetry run pytest tests/ -k "browser_extension_mv3" -v
```

| Verification Layer | Target Invariant | Execution Frequency | Verification Criterion |
| :--- | :--- | :--- | :--- |
| **Hermetic Isolation** | `inv-hermetic-unit-tests` | Pre-commit (<35s) | Zero network I/O & in-memory SQLite state |
| **Attestation Custody**| `inv-canonical-json-ed25519` | On every evaluation | RFC 8785 canonical bytes & Ed25519 signature |
| **Grounding Precision**| `inv-verbatim-grounding` | Continuous | Character-for-character DOM quote exactness ($G=1.00$) |
| **Interface Parity** | `inv-4way-parity-symmetric-web`| Release gate | Synchronous CLI, FastMCP, TUI, and Web UI parity |

By structuring verification across these four invariant gates, the Credence ecosystem guarantees total mathematical transparency, financial predictability, and complete architectural sovereignty across all operational environments.
