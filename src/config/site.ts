// ============================================================
// RÉGLAGES GLOBAUX : un lien ou une info change ICI, une seule fois.
// ============================================================
export const site = {
  name: 'PyNav',
  defaultLang: 'fr',
  downloads: {
    appStore: 'https://apps.apple.com/fr/app/pynav/id6779253057',
    // À REMPLIR quand le lien officiel existe. Tant que c'est vide,
    // le bouton affiche "Bientôt" et n'est pas cliquable.
    googlePlay: '',
  },
  // À REMPLIR (À VALIDER) : laissez vide pour ne rien afficher.
  supportEmail: '',
  social: {} as Record<string, string>, // ex. { youtube: 'https://...' }
};
