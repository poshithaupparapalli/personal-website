import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // the bare domain is the real one — www redirects here.
  // sitemap + canonical urls are built off this
  site: 'https://poshithaupparapalli.com',
  integrations: [sitemap()],
});
