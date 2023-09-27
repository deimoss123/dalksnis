import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
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
