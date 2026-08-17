# Credence Documentation & Editorial Engine (`credence-docs`)

This repository contains the decoupled documentation portal ([`docs.credence.run`](https://docs.credence.run)) and sovereign editorial blog ([`blog.credence.run`](https://blog.credence.run)) for the Credence network.

It is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), styled using the master Zero-Build Design System ([`https://credence.run/assets/credence-ui.css`](https://credence.run/assets/credence-ui.css)), and hosted on **Cloudflare Pages**.

---

## Repository Structure

```text
credence-docs/
├── .github/workflows/deploy.yml   # Cloudflare Pages automated deployment
├── astro.config.mjs               # Starlight documentation configuration
├── package.json                   # Astro + Starlight dependencies
├── src/
│   ├── assets/                    # Logos, SVG icons, and branding
│   └── content/
│       ├── blog/                  # Sovereign editorial essays (YAML frontmatter)
│       │   ├── 2026-08-17-the-blue-checkmark-is-dead.md
│       │   ├── 2026-08-20-the-anti-diploma-invariant.md
│       │   ├── 2026-08-24-bittorrent-economics-of-fact-checking.md
│       │   ├── 2026-08-28-the-galileo-rule.md
│       │   └── 2026-09-02-giving-claude-and-cursor-an-epistemic-brake.md
│       └── docs/                  # Technical documentation and guides
└── README.md
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static site
npm run build
```

---

## License

Apache License 2.0 &copy; 2026 Credence Network Contributors.
