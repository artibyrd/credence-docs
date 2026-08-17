import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.credence.run',
  integrations: [
    starlight({
      title: 'Credence Documentation',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Credence Shield',
      },
      social: {
        github: 'https://github.com/credence-network/credence',
      },
      customCss: [
        // Consumes the master shared design system
        'https://credence.run/assets/credence-ui.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction & Overview', link: '/intro/' },
            { label: 'Quickstart & Installation', link: '/quickstart/' },
          ],
        },
        {
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
        },
        {
          label: 'Operations & Mesh',
          items: [
            { label: 'Bootstrap Operator Guide', link: '/operator-guide/' },
          ],
        },
        {
          label: 'Invariants & Architecture',
          items: [
            { label: '32 Agent Invariants', link: '/invariants/' },
            { label: 'Decentralized Architecture', link: '/architecture/' },
          ],
        },
        {
          label: 'Editorial Dispatches & Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
    }),
  ],
});
