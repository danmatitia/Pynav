// Configuration Astro : domaine du site + génération automatique du sitemap (FR/EN avec hreflang).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pynav.fr', // doit rester identique à src/config/site.ts
  integrations: [
    sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } } }),
  ],
});
