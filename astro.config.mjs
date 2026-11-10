import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const legacy = 'https://danmatitia.github.io';
const origin = process.env.PYNAV_SITE_URL;
if (origin && !/^https:\/\/www\.[a-z0-9.-]+\.[a-z]{2,}$/i.test(origin)) {
  throw new Error('PYNAV_SITE_URL must be an HTTPS www origin without a trailing slash.');
}

export default defineConfig({
  site: origin || legacy,
  base: origin ? '/' : '/Pynav',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !['/404/', '/404.html', origin ? '/' : '/Pynav/'].includes(new URL(page).pathname) })],
});
