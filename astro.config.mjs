// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Public URL — use your custom domain, or https://USER.github.io if you only use the default Pages URL. */
const site = 'https://macbookairwithstones.online';

/**
 * GitHub Pages project URL is https://USER.github.io/REPO/ — Astro needs the same base path.
 * Use custom domain only → keep base '/'.
 * If you open the site as USER.github.io/REPO and get 404, set base to '/REPO/' (your repo name, slashes).
 */
const base = process.env.ASTRO_BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms', 'ja', 'es', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
          ms: 'ms',
          ja: 'ja',
          es: 'es',
          fr: 'fr',
        },
      },
    }),
  ],
});
