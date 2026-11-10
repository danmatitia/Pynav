# Site officiel PyNav

Site statique bilingue (français / anglais) construit avec [Astro](https://astro.build). Domaine prévu : https://pynav.fr

> **État du projet** : version de base. Pages réalisées : accueil FR et EN. Pages restant à créer : Fonctionnalités, Compatibilité, Démarrage rapide, FAQ détaillée, Confidentialité et sécurité, pages légales. Voir `docs/INFORMATIONS_A_VALIDER.md`.

## Démarrer
Prérequis : [Node.js](https://nodejs.org) 18.20 ou plus récent.

```bash
npm install        # installe Astro (une seule fois)
npm run dev        # serveur local : http://localhost:4321  (les modifications s'affichent seules)
npm run build      # génère le site final dans le dossier dist/
npm run preview    # teste le site généré
```

## Où est quoi
| Dossier / fichier | Rôle |
|---|---|
| `src/config/site.ts` | Réglages globaux : domaine, liens App Store / Google Play, support |
| `src/i18n/fr.ts`, `en.ts` | **Tous les textes** (titres, boutons, FAQ, SEO) |
| `src/pages/fr/`, `src/pages/en/` | Les pages (une par langue et par route) |
| `src/components/` | Blocs réutilisables (en-tête, boutons, cartes, accueil...) |
| `src/layouts/BaseLayout.astro` | Squelette commun + balises SEO (canonical, hreflang, Open Graph, JSON-LD) |
| `src/styles/variables.css` | Couleurs, police, espacements |
| `src/styles/global.css` | Styles des composants et responsive |
| `public/` | Fichiers servis tels quels : images, favicon, `robots.txt`, `CNAME` |
| `docs/` | Documentation |

## Publier (GitHub Pages + pynav.fr)
1. Créez un dépôt GitHub et envoyez-y ce dossier (`git init`, `git add .`, `git commit`, `git push`).
2. Dépôt > Settings > Pages > Source : **GitHub Actions**. Le fichier `.github/workflows/deploy.yml` publie à chaque envoi sur `main`.
3. Domaine : Settings > Pages > Custom domain : `pynav.fr`. Chez votre registrar, ajoutez les enregistrements DNS indiqués par la [documentation GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site) (le fichier `public/CNAME` est déjà prêt).
4. Autres hébergeurs statiques possibles (Netlify, Cloudflare Pages) : commande `npm run build`, dossier de sortie `dist`.
