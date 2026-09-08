/**
 * Playground 1: 13-Node Watts-Strogatz Mesh Simulator
 * Zero-npm native ES module.
 */

export function setupMeshSimulatorWidget() {
  const svg = document.getElementById('mesh-svg');
  const btnBroadcast = document.getElementById('btn-broadcast-gossip');
  const btnReset = document.getElementById('btn-reset-mesh');
  const logBox = document.getElementById('mesh-event-log');
  const nodeInspector = document.getElementById('mesh-node-inspector');
  const inspectorId = document.getElementById('inspector-node-id');
  const inspectorStatus = document.getElementById('inspector-node-status');
  const inspectorRole = document.getElementById('inspector-node-role');
  const inspectorQi = document.getElementById('inspector-node-qi');
  const inspectorRegion = document.getElementById('inspector-node-region');
  const inspectorLinks = document.getElementById('inspector-node-links');

  const btnScenNormal = document.getElementById('btn-scen-normal');
  const btnScenPartition = document.getElementById('btn-scen-partition');
  const btnScenSybil = document.getElementById('btn-scen-sybil');
  const btnScenFailover = document.getElementById('btn-scen-failover');
  const btnScenBurst = document.getElementById('btn-scen-burst');
  const scenarioBtns = [btnScenNormal, btnScenPartition, btnScenSybil, btnScenFailover, btnScenBurst].filter(Boolean);

  const N = 13;
  const nodes = [];
  const cx = 300, cy = 180, r = 135;

  const nodeMetadata = [
    { role: "ROOT_GENESIS_ANCHOR", region: "us-central1 🇺🇸", profile: "ULTRA" },
    { role: "EDGE_SIFTER", region: "us-east1 🇺🇸", profile: "FREE" },
    { role: "PEER_AUDITOR", region: "us-west1 🇺🇸", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "ca-central1 🇨🇦", profile: "FREE" },
    { role: "REGIONAL_BRIDGE", region: "europe-west1 🇧🇪", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "europe-north1 🇫🇮", profile: "FREE" },
    { role: "CONTINENTAL_ANCHOR", region: "europe-west3 🇩🇪", profile: "ULTRA" },
    { role: "EDGE_SIFTER", region: "me-central1 🇶🇦", profile: "FREE" },
    { role: "PEER_AUDITOR", region: "asia-south1 🇮🇳", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "asia-east1 🇹🇼", profile: "FREE" },
    { role: "REGIONAL_BRIDGE", region: "ap-southeast1 🇸🇬", profile: "BALANCED" },
    { role: "EDGE_SIFTER", region: "sa-east1 🇧🇷", profile: "FREE" },
    { role: "PACIFIC_ANCHOR", region: "ap-northeast1 🇯🇵", profile: "ULTRA" },
  ];

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    nodes.push({
      id: i + 1,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      infected: false,
      byzantine: false,
      isolated: false,
      qi: (0.95 + ((i * 7) % 5) * 0.01).toFixed(3),
      role: nodeMetadata[i].role,
      region: nodeMetadata[i].region,
      profile: nodeMetadata[i].profile,
      degree: 4,
    });
  }

  function renderMeshSVG(cutEdges = []) {
    if (!svg) return;
    let svgContent = '';

    for (let i = 0; i < N; i++) {
      for (let offset of [1, 2]) {
        const j = (i + offset) % N;
        const isCut = cutEdges.some(e => (e[0] === i + 1 && e[1] === j + 1) || (e[0] === j + 1 && e[1] === i + 1));
        if (isCut) {
          svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6" />`;
        } else {
          svgContent += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" />`;
        }
      }
    }

    // Chord shortcuts: (1-5), (13-3), (11-7)
    const chords = [[1, 5], [13, 3], [11, 7]];
    chords.forEach(([s, t]) => {
      const isCut = cutEdges.some(e => (e[0] === s && e[1] === t) || (e[0] === t && e[1] === s));
      const sNode = nodes[s - 1], tNode = nodes[t - 1];
      if (isCut) {
        svgContent += `<line x1="${sNode.x}" y1="${sNode.y}" x2="${tNode.x}" y2="${tNode.y}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6" />`;
      } else {
        svgContent += `<line x1="${sNode.x}" y1="${sNode.y}" x2="${tNode.x}" y2="${tNode.y}" stroke="rgba(192, 132, 252, 0.45)" stroke-width="1.5" stroke-dasharray="4,4" />`;
      }
    });

    nodes.forEach(n => {
      let fill = '#0ea5e9';
      if (n.infected) fill = '#22c55e';
      if (n.byzantine) fill = '#ef4444';
      if (n.isolated) fill = '#64748b';

      svgContent += `
        <g style="cursor: pointer;" onclick="window.__selectMeshNode(${n.id})">
          <circle cx="${n.x}" cy="${n.y}" r="15" fill="${fill}" stroke="#fff" stroke-width="2" id="mesh-node-${n.id}" />
          <text x="${n.x}" y="${n.y + 4}" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">${n.id}</text>
        </g>
      `;
    });

    svg.innerHTML = svgContent;
  }

  window.__selectMeshNode = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node || !nodeInspector) return;
    nodeInspector.style.display = 'block';
    if (inspectorId) inspectorId.textContent = `Node ${node.id}`;
    if (inspectorRole) inspectorRole.textContent = node.role;
    if (inspectorRegion) inspectorRegion.textContent = node.region;
    if (inspectorStatus) {
      if (node.byzantine) {
        inspectorStatus.textContent = 'Byzantine Sybil (Quarantined)';
        inspectorStatus.style.color = '#ef4444';
      } else if (node.isolated) {
        inspectorStatus.textContent = 'Partitioned / Isolated';
        inspectorStatus.style.color = '#94a3b8';
      } else if (node.infected) {
        inspectorStatus.textContent = 'Attestation Synchronized';
        inspectorStatus.style.color = '#4ade80';
      } else {
        inspectorStatus.textContent = 'Healthy Peer (Listening)';
        inspectorStatus.style.color = '#38bdf8';
      }
    }
    if (inspectorQi) inspectorQi.textContent = node.qi;
    if (inspectorLinks) inspectorLinks.textContent = `${node.degree} Watts-Strogatz links`;
  };

  renderMeshSVG();

  function setActiveScenarioBtn(activeBtn) {
    scenarioBtns.forEach(b => b.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
  }

  btnScenNormal?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenNormal);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Scenario 1 (Normal):</strong> 13/13 Nodes Healthy &bull; 100% Byzantine Quorum ($N \\ge 3f + 1, f=4$). Diameter $\\le 3$.`;
    }
  });

  btnScenPartition?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenPartition);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    nodes[4].isolated = true; // Node 5 (EU)
    nodes[5].isolated = true; // Node 6 (EU)
    const cutEdges = [[4, 5], [1, 5], [5, 6], [6, 7]];
    renderMeshSVG(cutEdges);
    if (logBox) {
      logBox.className = "widget-status error";
      logBox.innerHTML = `<strong>Scenario 2 (Barbell Partition):</strong> Transatlantic links cut. Nodes 5 & 6 isolated. Main cluster retains 11 nodes ($f=3$ quorum active).`;
    }
  });

  btnScenSybil?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenSybil);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    [7, 8, 9, 10].forEach(id => {
      nodes[id].byzantine = true;
    });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status warning";
      logBox.innerHTML = `<strong>Scenario 3 (Sybil Cartel Eclipse):</strong> 4 Rogue nodes colluding ($f=4$). $3f+1$ Byzantine safety margin ($13 \\ge 3(4)+1$) successfully isolates corrupt scores.`;
    }
  });

  btnScenFailover?.addEventListener('click', () => {
    setActiveScenarioBtn(btnScenFailover);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    nodes[0].isolated = true; // Node 1 fails
    nodes[6].infected = true; // Node 7 assumes seed
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Scenario 4 (Genesis Seed Failover):</strong> Node 1 (US Central) unreachable. Automatic failover elected Node 7 (Europe West 3) as secondary seed relay.`;
    }
  });

  btnScenBurst?.addEventListener('click', async () => {
    setActiveScenarioBtn(btnScenBurst);
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status idle";
      logBox.innerHTML = `<strong>Scenario 5 (Epidemic Burst):</strong> Injecting 350 msg/s attestation burst at Node 1...`;
    }
    await new Promise(r => setTimeout(r, 200));
    nodes[0].infected = true;
    renderMeshSVG();
    await new Promise(r => setTimeout(r, 250));
    [1, 2, 4, 12].forEach(i => nodes[i].infected = true);
    renderMeshSVG();
    await new Promise(r => setTimeout(r, 250));
    nodes.forEach(n => n.infected = true);
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status verified";
      logBox.innerHTML = `<strong>Burst Complete:</strong> 350 msg/s propagated across 13 nodes in 2 hops (48ms avg diffusion). Zero broadcast loops.`;
    }
  });

  btnBroadcast?.addEventListener('click', async () => {
    if (!logBox) return;
    nodes.forEach(n => n.infected = false);
    renderMeshSVG();

    nodes[0].infected = true;
    renderMeshSVG();
    logBox.className = "widget-status idle";
    logBox.innerHTML = `<strong>Hop 0 (0ms):</strong> Node 1 signs and broadcasts Ed25519 attestation envelope.`;

    await new Promise(r => setTimeout(r, 350));
    [1, 2, 4, 12].forEach(idx => nodes[idx].infected = true);
    renderMeshSVG();
    logBox.innerHTML += `<br><strong>Hop 1 (120ms):</strong> Attestation diffused to 4 peer nodes via chord shortcuts.`;

    await new Promise(r => setTimeout(r, 350));
    nodes.forEach(n => n.infected = true);
    renderMeshSVG();
    logBox.className = "widget-status verified";
    logBox.innerHTML += `<br><strong>Hop 2 (240ms):</strong> ✅ 100% Cluster Saturation Reached (13/13 Nodes Verified).`;
  });

  btnReset?.addEventListener('click', () => {
    nodes.forEach(n => { n.infected = false; n.byzantine = false; n.isolated = false; });
    renderMeshSVG();
    if (logBox) {
      logBox.className = "widget-status idle";
      logBox.innerHTML = `Cluster reset. 13 nodes healthy.`;
    }
    if (nodeInspector) nodeInspector.style.display = 'none';
    setActiveScenarioBtn(btnScenNormal);
  });


}
