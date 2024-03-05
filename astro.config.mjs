import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://j4vierb.github.io/',
  base: '/portfolio',
  integrations: [preact()]
});
