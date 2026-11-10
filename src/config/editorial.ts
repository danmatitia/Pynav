import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';

export const sections = {
  fr: { docs: ['guides', 'Guides et usages'], compatibility: ['compatibilite', 'Compatibilité'], blog: ['blog', 'Blog'] },
  en: { docs: ['guides', 'Guides and use cases'], compatibility: ['compatibility', 'Compatibility'], blog: ['blog', 'Blog'] },
} as const;

type Section = keyof (typeof sections)['fr'];

export async function getEditorial() {
  const names = ['docs', 'compatibility', 'blog'] as const;
  const entries = (await Promise.all(names.map(async (section) =>
    (await getCollection(section)).map((entry) => ({ section, entry }))
  ))).flat();
  return entries.map(({ section, entry }) => ({
    section, entry,
    path: `${entry.data.lang}/${sections[entry.data.lang][section][0]}/${entry.data.slug}/`,
  }));
}

export function sectionPath(lang: Lang, section: Section) {
  return `${lang}/${sections[lang][section][0]}/`;
}
