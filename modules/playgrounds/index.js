/**
 * Credence Documentation Playgrounds Coordinator
 * Zero-npm native ES module.
 */

import { setupMeshSimulatorWidget } from './mesh-sim.js';
import { setupCryptoWidgets } from './crypto-sim.js';
import { setupTaxonomyWidgets } from './taxonomy-sim.js';
import { setupForensicWidgets } from './forensic-sim.js';

export function setupPlaygroundWidgets() {
  setupMeshSimulatorWidget();
  setupCryptoWidgets();
  setupTaxonomyWidgets();
  setupForensicWidgets();
}

export { setupMeshSimulatorWidget } from './mesh-sim.js';
export { setupCryptoWidgets } from './crypto-sim.js';
export { setupTaxonomyWidgets } from './taxonomy-sim.js';
export { setupForensicWidgets } from './forensic-sim.js';
export { mountContentEvolutionLab, mountBadgeSecurityLab } from './labs.js';
