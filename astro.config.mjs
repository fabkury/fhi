import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fhi.kury.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
