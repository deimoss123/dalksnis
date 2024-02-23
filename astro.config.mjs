import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    icon({ include: { devicon: ['*'], mdi: ['*'], ic: ['*'], logos: ['*'] } }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: ['sql'],
    },
  },
  server: {
    port: 4321,
    host: '127.0.0.1',
  },
});
