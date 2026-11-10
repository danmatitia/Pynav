# PyNav

Site Astro bilingue pour la télécommande pypilot et les instruments NMEA. Le [dossier SEO](docs/SEO_ACQUISITION.md) décrit les pages, le calendrier éditorial et les mesures de conversion.

## Développement

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Sans variable de domaine, Astro utilise `/Pynav/`. Pour les pages éditoriales, modifier les fichiers Markdown de `src/content/`. Les versions d’une page partagent la même clé de traduction. Les liens de téléchargement se configurent dans `src/config/site.ts`.

## Publication actuelle

Le workflow GitHub Actions publie la branche `main` sur [GitHub Pages](https://danmatitia.github.io/Pynav/). La source de publication du dépôt doit être **GitHub Actions**. Le sitemap est à `/Pynav/sitemap-index.xml`. Sur ce domaine partagé, le fichier de règles de crawl reconnu par les moteurs se trouve à la racine de l’hôte. Soumettre directement le sitemap dans une propriété de préfixe d’URL si la vérification Search Console est disponible.

## Domaine dédié

1. Réserver le domaine et garder l’accès aux DNS. Le nom utilisé par le site sera `www`.
2. Dans Cloudflare Pages, importer le dépôt, choisir `main`, utiliser `npm run build` et publier `dist`. Définir `PYNAV_SITE_URL=https://www.example.com` dans l’environnement de production avec le vrai domaine.
3. Ajouter le domaine `www` dans **Custom domains**, puis suivre les instructions DNS. Configurer le 301 du domaine nu vers `www` en conservant chemin et requête.
4. Vérifier les réponses du nouveau domaine et de l’ancienne adresse, puis suivre la checklist dans le [dossier SEO](docs/SEO_ACQUISITION.md). Cloudflare ne contrôle pas les réponses HTTP du domaine `github.io`.

[Guide Astro sur Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
