import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  site: 'https://mizunashi-mana.github.io',
  base: '/profile',
  outDir: './dist',
  publicDir: './src/asset',

  build: {
    assets: 'asset',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
