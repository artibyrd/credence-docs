/**
 * Credence Documentation Full Taxonomy Rules Aggregator
 * Zero-npm native ES module.
 */

import { CORE_TAXONOMY_RULES } from './taxonomy-rules-core.js';
import { EXTENDED_TAXONOMY_RULES } from './taxonomy-rules-extended.js';

export const FULL_TAXONOMY_RULES = [
  ...CORE_TAXONOMY_RULES,
  ...EXTENDED_TAXONOMY_RULES,
];

export { CORE_TAXONOMY_RULES, EXTENDED_TAXONOMY_RULES };
