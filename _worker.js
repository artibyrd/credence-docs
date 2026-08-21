/**
 * Credence Docs Zero-Build Static Asset Handler for Cloudflare Workers & Pages
 */
export default {
  async fetch(request, env) {
    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return fetch(request);
  }
};
