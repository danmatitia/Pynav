// Point d'entrée des traductions. Pour ajouter une langue : créez de.ts (copie de en.ts)
// puis ajoutez-la ci-dessous et dans src/pages/ (voir docs/GUIDE_MODIFICATION.md).
import fr from './fr';
import en from './en';

export const texts = { fr, en };
export type Lang = keyof typeof texts;
export const languages: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
];
export const getText = (lang: Lang) => texts[lang];
