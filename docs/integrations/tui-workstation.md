---
title: "Textual TUI Terminal Workstation Deep Dive"
description: "Mastering the interactive terminal user interface, keybindings, SSE log streaming, and visual DOM inspection."
---

# Textual TUI Terminal Workstation Deep Dive

Credence includes an interactive terminal workstation powered by **Textual** (`credence tui`).

It provides real-time audit monitoring, mesh peer status displays, feed stream logs, and keyboard-driven epistemic inspection directly inside your terminal emulator.

---

## 1. Launching the Workstation

```bash
credence tui
```

---

## 2. Global Keyboard Navigation

| Keybinding | Action |
|:---|:---|
| `q` | Quit the workstation. |
| `d` | Toggle Dark / High-Contrast mode. |
| `Tab` / `Shift+Tab` | Cycle focus across panels. |
| `1` | Jump to **Active Audits** pane. |
| `2` | Jump to **P2P Mesh Network** topology pane. |
| `3` | Jump to **Syndicated Feed Sifter** stream. |
| `r` | Refresh peer list and fetch latest gossip attestations. |
| `/` | Focus search / filter bar. |

---

## 3. Workstation Architecture

```mermaid
graph TD
    subgraph Textual TUI Workspace
        Header[Header Bar: Node Name, Ed25519 PubKey, Uptime, Memory]
        Nav[Sidebar Navigation: Audits | Mesh Peers | Feeds | Config]
        Main[Main Panel: Active Attestation Card & Violation Tree]
        Logs[Bottom Panel: Live SSE Protocol & Gossip Event Stream]
    end
```

---

## 4. Visual Inspection & Terminal Image Protocols

When inspecting a captured webpage, the TUI displays:
- **Left Column**: Normalized article prose with character-offset highlighted violation quotes.
- **Right Column**: Interactive tree of specialist auditor findings (SPJ Ethics, Logical Fallacies, Deceptive Patterns).
- **Terminal Graphics**: In terminals supporting Kitty, Sixel, or iTerm2 graphics protocols, the visual screenshot `.png` is rendered inline.
