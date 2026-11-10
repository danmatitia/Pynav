import type { APIRoute } from 'astro';
import { pathFor } from '../config/paths';

export const GET: APIRoute = ({ site }) => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${new URL(pathFor('sitemap-index.xml'), site)}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
