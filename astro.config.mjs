import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://cancerlogo.pages.dev',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark',
        dark: 'github-dark',
      },
    },
  },

  adapter: cloudflare()
});