import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mizunashi-mana.github.io',
  base: '/profile',
  outDir: './dist',
  publicDir: './src/asset',
  build: {
    assets: 'asset'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
