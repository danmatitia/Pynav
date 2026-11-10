# Guide de modification (sans être développeur)

## Ouvrir et lancer le projet
1. Installez Node.js et Visual Studio Code. Dans VS Code : Fichier > Ouvrir le dossier > `pynav-website`.
2. Menu Terminal > Nouveau terminal, puis tapez `npm install` (une seule fois) et `npm run dev`.
3. Ouvrez http://localhost:4321/fr/ : chaque enregistrement met la page à jour.

## Je veux modifier...
| Action | Fichier | Comment |
|---|---|---|
| Une phrase, un titre, un bouton | `src/i18n/fr.ts` et `en.ts` | Cherchez la phrase (Ctrl+F), changez le texte entre guillemets, dans les deux langues |
| Lien App Store ou Google Play | `src/config/site.ts` | Collez le lien dans `appStore` / `googlePlay`. Google Play vide = bouton « Bientôt » non cliquable |
| E-mail de support | `src/config/site.ts` | Renseignez `supportEmail` : il apparaît dans le pied de page |
| Les couleurs | `src/styles/variables.css` | Changez les valeurs `--color-...` |
| La police | `src/styles/variables.css` | Changez `--font-sans` |
| Le logo | `src/components/Header.astro` | Déposez `logo.svg` dans `public/images/logo/` et remplacez le lien `<a class="logo">` par `<img src="/images/logo/logo.svg" alt="PyNav">` |
| Une capture d'écran | `src/components/HomePage.astro` | Déposez l'image dans `public/images/screenshots/`, remplacez le bloc `phone-placeholder` par `<img src="/images/screenshots/accueil.png" alt="Description" width="540" height="1170">` |
| Titre et description Google | `src/i18n/fr.ts` et `en.ts` | Clés `meta.title` (environ 60 caractères) et `meta.description` (environ 155) |

Exemple avant / après (`fr.ts`) :
```ts
// avant
title: 'Commande pypilot',
// après
title: 'Télécommande pypilot',
```

## Ajouter une fonctionnalité ou une question de FAQ
Dans `fr.ts`, copiez un bloc `{ title: ..., text: ... }` (ou `{ q: ..., a: ... }`) dans la liste `features.items` (ou `faq.items`), puis faites de même dans `en.ts`. La carte apparaît seule. Si une langue manque une clé, VS Code souligne l'erreur.

## Ajouter une page
1. Dans `src/pages/fr/`, créez `fonctionnalites.astro` ; dans `src/pages/en/`, créez `features.astro`.
2. Copiez le principe de `HomePage.astro` : importez `BaseLayout`, passez `lang`, `title`, `description` et `path="fonctionnalites/"`.
3. Ajoutez les textes dans `fr.ts` et `en.ts`, puis le lien dans `Header.astro`.

## Ajouter une troisième langue (ex. espagnol)
1. Copiez `src/i18n/en.ts` en `es.ts` et traduisez.
2. Dans `src/i18n/index.ts`, importez `es`, ajoutez-le à `texts` et à `languages`.
3. Créez `src/pages/es/index.astro` (copie de `en/index.astro` avec `lang="es"`).
4. Ajoutez `es` dans `astro.config.mjs` (sitemap) et un `<link rel="alternate" hreflang="es">` dans `BaseLayout.astro`.

## Publier une nouvelle version
`git add .` puis `git commit -m "Mon changement"` puis `git push` : GitHub reconstruit et publie le site (voir README).

## Problèmes courants
- **`npm` n'est pas reconnu** : installez Node.js puis rouvrez VS Code.
- **Page blanche ou erreur rouge** : lisez le message dans le terminal, il indique le fichier et la ligne. Cause fréquente : une virgule ou une apostrophe oubliée dans `fr.ts` (écrivez `l’app` avec l’apostrophe courbe ’).
- **Une image ne s'affiche pas** : le chemin commence par `/images/...` (sans `public`) et la casse du nom compte.
- **Le site publié ne change pas** : vérifiez l'onglet Actions du dépôt GitHub (une exécution rouge indique l'erreur).
