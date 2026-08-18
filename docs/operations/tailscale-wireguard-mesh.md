---
title: "Tailscale & WireGuard Sovereign Peering"
description: "Connecting private P2P mesh clusters across newsrooms and research labs without public firewall ports."
---

Newsrooms, human rights organizations, and university research collectives often need to share signed epistemic attestations privately without exposing public IPv4 listening ports to the internet.

This guide demonstrates how to peer Credence nodes across **Tailscale** or **WireGuard** virtual mesh overlays.

---

## 1. Network Topology

```mermaid
graph LR
    subgraph Newsroom Alpha (London)
        NodeA["Node Alpha (100.64.0.10:8765)"]
    end

    subgraph Research Lab Beta (Berlin)
        NodeB["Node Beta (100.64.0.20:8765)"]
    end

    subgraph Field Team Gamma (Geneva)
        NodeC["Node Gamma (100.64.0.30:8765)"]
    end

    NodeA <-->|Encrypted WireGuard Tunnel| NodeB
    NodeB <-->|Encrypted WireGuard Tunnel| NodeC
    NodeA <-->|Encrypted WireGuard Tunnel| NodeC
```

---

## 2. Setting Up Peering Over Tailscale

1. **Install Tailscale on all peer hosts**:
   ```bash
   curl -fsSL https://tailscale.com/install.sh | sh
   sudo tailscale up
   ```

2. **Retrieve Peer Tailscale IPs**:
   ```bash
   tailscale ip -4
   # Example: 100.64.0.10 (Node Alpha)
   # Example: 100.64.0.20 (Node Beta)
   ```

3. **Start Node Alpha (London)**:
   ```bash
   credence mesh start --port 8765 --host 100.64.0.10 --node-id "london-newsroom"
   ```

4. **Start Node Beta (Berlin) with Peer Connection**:
   ```bash
   credence mesh start --port 8765 --host 100.64.0.20 --peer "ws://100.64.0.10:8765" --node-id "berlin-lab"
   ```

---

## 3. Advantages of VPN Overlay Peering

* **NAT Traversal & CGNAT Bypass**: Nodes connect seamlessly even when behind complex corporate firewalls or carrier-grade NATs.
* **Mutual TLS & End-to-End Encryption**: All WebSocket frames are encapsulated in WireGuard's ChaCha20-Poly1305 encryption.
* **Zero Public Port Exposure**: Scanning tools cannot detect the running Credence WebSocket relay on the public internet.
