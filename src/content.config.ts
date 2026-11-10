import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const markdown = (base: string) => glob({
  pattern: '**/*.md', base, generateId: ({ entry }) => entry.replace(/\.md$/, ''),
});

const editorial = z.object({
  key: z.string(),
  lang: z.enum(['fr', 'en']),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  description: z.string(),
  related: z.array(z.string()).default([]),
  steps: z.array(z.object({ name: z.string(), text: z.string() })).min(2).optional(),
});
export const collections = {
  docs: defineCollection({ loader: markdown('./src/content/docs'), schema: editorial }),
  blog: defineCollection({ loader: markdown('./src/content/blog'), schema: editorial }),
  compatibility: defineCollection({
    loader: markdown('./src/content/compatibility'),
    schema: editorial.extend({ status: z.enum(['protocol', 'unverified', 'tested']) }),
  }),
};
