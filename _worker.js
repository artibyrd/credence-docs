/**
 * Credence Documentation & Workstation Plane Edge Handler
 * Zero-build static asset delegation for Cloudflare Pages & Workers Builds
 */

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
