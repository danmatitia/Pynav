# 1. Mots-clés FR et EN

Objectif initial : attirer les propriétaires déjà équipés et mesurer le passage vers l’App Store. FR générique et EN international, le temps de rédaction et le marché anglais restant à préciser. Les niveaux portent sur l’adéquation à l’intention et à l’offre. Aucun volume ni estimation de trafic.

| Priorité | Intention | FR | EN | Confiance |
|---|---|---|---|---|
| P0 | Transactionnelle | télécommande pypilot iPhone, application pypilot iPad | pypilot remote iPhone, pypilot app for iPad | Haute, besoin et fonction spécifiques |
| P0 | Transactionnelle | répétiteur NMEA iPhone, application instruments bateau iPad | NMEA repeater iPhone, boat instrument display iPad | Haute, besoin précis |
| P0 | Transactionnelle | télécharger PyNav | download PyNav | Haute sur l’intention de marque |
| P1 | Comparative | passerelle NMEA 2000 Wi-Fi iPhone, NMEA 2000 brut ou 0183 | NMEA 2000 Wi-Fi gateway for iPhone, raw NMEA 2000 vs NMEA 0183 | Moyenne, recherche souvent orientée matériel |
| P1 | Informationnelle | connecter pypilot en Wi-Fi, pypilot OpenPlotter iPhone | connect pypilot over Wi-Fi, OpenPlotter pypilot iPhone | Haute sur le problème, moyenne sur l’installation |
| P1 | Informationnelle | afficher vent NMEA sur iPad, NMEA 0183 TCP iPhone | display NMEA wind on iPad, NMEA 0183 TCP iPhone | Moyenne, dépend des données exposées |
| P2 | Comparative | alternative iNavX pour instruments NMEA, OpenCPN ou PyNav pour pypilot | iNavX alternative for NMEA instruments, OpenCPN vs PyNav for pypilot | Moyenne sur la pertinence, faible sur la demande |
| P2 | Comparative | YDWG-02 ou NavLink2 pour iPhone | YDWG-02 vs NavLink2 for iPhone | Moyenne sur le choix matériel, faible sans essai |
| P2 | Informationnelle | Raspberry Pi passerelle NMEA iPhone | Raspberry Pi NMEA gateway to iPhone | Moyenne, plusieurs architectures possibles |

Valider les requêtes dans Search Console par page, langue et pays après lancement. Examiner les formulations qui génèrent des impressions et qualifier séparément les clics sur l’App Store. La [fiche PyNav](https://apps.apple.com/fr/app/pynav/id6779253057), le [manuel pypilot](https://pypilot.org/doc/pypilot_user_manual/), la [documentation OpenPlotter](https://openplotter.readthedocs.io/latest/pypilot/pypilot_app.html) et les [fonctions iNavX](https://www.inavx.com/capabilities) étayent le périmètre, pas la demande.

# 2. Architecture et maillage

Chaque ligne FR et EN est une paire traduite. T = transactionnel, C = comparatif, I = informationnel. La racine redirige vers /fr/ et la 404 sert à récupérer les erreurs. Elles sont hors sitemap.

| FR et mot-clé | EN et mot-clé | Intention | État |
|---|---|---|---|
| /fr/ · télécharger PyNav | /en/ · download PyNav | T | Site |
| /fr/guides/ · guides PyNav | /en/guides/ · PyNav guides | I | Site |
| /fr/guides/telecommande-pypilot/ · télécommande pypilot iPhone | /en/guides/pypilot-remote/ · pypilot remote iPhone | T | Site |
| /fr/guides/repetiteur-nmea-iphone/ · répétiteur NMEA iPhone | /en/guides/nmea-repeater-iphone/ · NMEA repeater iPhone | T | Site |
| /fr/compatibilite/ · compatibilité PyNav | /en/compatibility/ · PyNav compatibility | I | Site |
| /fr/compatibilite/nmea-2000-wifi/ · passerelle NMEA 2000 Wi-Fi iPhone | /en/compatibility/nmea-2000-wifi/ · NMEA 2000 Wi-Fi gateway for iPhone | C | Site |
| /fr/guides/verifier-connexion-pypilot/ · connexion pypilot Wi-Fi | /en/guides/check-pypilot-connection/ · check pypilot Wi-Fi connection | I | Site |
| /fr/blog/ · blog instruments marins | /en/blog/ · marine instruments blog | I | Site |
| /fr/blog/nmea-0183-ou-2000/ · NMEA 0183 ou 2000 sur mobile | /en/blog/nmea-0183-vs-2000/ · NMEA 0183 vs 2000 on mobile | C | Site |
| /fr/faq/ · FAQ PyNav | /en/faq/ · PyNav FAQ | I | Site |
| /fr/guides/nmea-0183-tcp/ · NMEA 0183 TCP iPhone | /en/guides/nmea-0183-tcp/ · NMEA 0183 TCP iPhone | I | M1 |
| /fr/guides/openplotter-raspberry-pi/ · pypilot OpenPlotter iPhone | /en/guides/openplotter-raspberry-pi/ · OpenPlotter pypilot iPhone | I | M1 |
| /fr/compatibilite/ydwg-02/ · YDWG-02 PyNav | /en/compatibility/ydwg-02/ · YDWG-02 PyNav | C | Essai requis |
| /fr/compatibilite/navlink2/ · NavLink2 PyNav | /en/compatibility/navlink2/ · NavLink2 PyNav | C | Essai requis |
| /fr/compatibilite/macarthur-hat/ · MacArthur HAT PyNav | /en/compatibility/macarthur-hat/ · MacArthur HAT PyNav | C | Essai requis |
| /fr/guides/vent-iphone/ · afficher vent NMEA iPhone | /en/guides/wind-iphone/ · display NMEA wind on iPhone | I | M2 |
| /fr/guides/cadrans-vides/ · répétiteur NMEA sans données | /en/guides/empty-gauges/ · NMEA dashboard no data | I | M2 |
| /fr/comparatifs/ · comparatifs applications et passerelles NMEA | /en/comparisons/ · NMEA app and gateway comparisons | C | M3 avec deux comparatifs |
| /fr/comparatifs/inavx/ · alternative iNavX instruments NMEA | /en/comparisons/inavx/ · iNavX alternative for NMEA instruments | C | Vérification requise |
| /fr/comparatifs/opencpn/ · OpenCPN ou PyNav pypilot | /en/comparisons/opencpn/ · OpenCPN vs PyNav pypilot | C | Vérification requise |
| /fr/comparatifs/ydwg-02-navlink2/ · YDWG-02 ou NavLink2 | /en/comparisons/ydwg-02-navlink2/ · YDWG-02 vs NavLink2 | C | Essais requis |
| /fr/blog/reseau-wifi-bord/ · Wi-Fi bateau instruments | /en/blog/boat-wifi-network/ · boat Wi-Fi for instruments | I | M3 |
| /fr/blog/journal-essais/ · tester passerelle NMEA | /en/blog/gateway-test-log/ · test an NMEA gateway | I | M3 |

Accueil → hubs → pages usage/guide. Guide répétiteur ↔ passerelle Wi-Fi et comparatif des formats. Page pypilot ↔ tutoriel de connexion et futur guide OpenPlotter. Chaque future fiche modèle pointe vers le guide des formats, l’usage pertinent et le comparatif correspondant. Chaque page de conversion a un CTA App Store et les articles de diagnostic pointent vers une page d’usage. Les versions FR/EN se lient par identifiant de traduction. Les fiches modèle exigent firmware, versions de l’app et du système, format et transport, lecture par donnée et contrôle pypilot évalué séparément. Au besoin, l’état reste « à vérifier » dans le hub.

# 3. Astro et migration

Tous les fichiers complets sont dans le dépôt. Les collections se trouvent dans src/content.config.ts et src/content/. BaseLayout appelle SEO.astro. Les routes et les traductions se construisent depuis les collections. Les URL HTML alternates et canoniques utilisent Astro.site et le chemin de base. Le sitemap ne duplique pas hreflang. Les versions FR et EN ont chacune leur canonical et se renvoient mutuellement. Le repli x-default est FR.

Le build GitHub Pages garde /Pynav/. Le build de production utilise la racine et requiert la variable PYNAV_SITE_URL définie dans l’environnement de compilation. L’exemple www.example.com sert uniquement aux vérifications locales. Sur Cloudflare Pages, configurer npm run build, dist et la variable d’environnement de production. Configurer domaine sans www → www en 301 avec chemin et requête conservés. Les règles public/_redirects servent sur Cloudflare. Le modèle Nginx sert sur un ancien hôte dont on contrôle le serveur.

L’adresse danmatitia.github.io est gérée par GitHub. Pour une réponse HTTP de migration depuis cette adresse, tester GitHub Pages avec domaine personnalisé sur le projet, y compris /Pynav/, /Pynav/fr/ et /Pynav/en/. Avec Cloudflare comme hébergeur direct, ses règles ne s’appliquent qu’aux noms qu’il sert. Si GitHub ne permet pas le 301 vers la destination Cloudflare, garder l’ancien site accessible et publier des redirections HTML immédiates ciblées sur les anciennes URL lors de la bascule. Vérifier le résultat réel avant de considérer la migration validée. [GitHub Pages et domaines](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) · [Redirections Google](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

SoftwareApplication et Organization sont sur l’accueil, FAQPage sur la FAQ, BreadcrumbList sur les collections et HowTo sur le diagnostic pypilot. Évaluer séparément l’éligibilité aux résultats enrichis. Google a retiré les résultats enrichis HowTo et réserve les résultats FAQ aux sites gouvernementaux ou de santé reconnus. Les avis et notes restent hors balisage. [Galerie Google](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) · [FAQ Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage).

Le visuel de l’accueil est une illustration. Les sorties AVIF et WebP, tailles responsives, dimensions et priorité de chargement sont générées par astro:assets. Utiliser une vraie capture annotée dès qu’elle est disponible. Mesurer les Core Web Vitals sur les pages réelles après publication.

# 4. Calendrier sur trois mois

Un sujet représente une paire FR/EN. Publier les trois premières paires et le diagnostic déjà rédigé, puis ajuster le rythme au temps disponible. Les créneaux avec essai passent derrière les diagnostics si le matériel manque.

| # | Mois | Titre FR / EN | Mot-clé FR / EN | Angle et H2 |
|---|---|---|---|---|
| 1 | M1 | Télécommande pypilot / pypilot remote | télécommande pypilot iPhone / pypilot remote iPhone | Installation existante → Prérequis / Vérifier le pilote / Identifier la commande / Installer |
| 2 | M1 | Répétiteur NMEA / NMEA repeater | répétiteur NMEA iPhone / NMEA repeater iPhone | Une lecture exploitable → Sortie / Première donnée / Cadran vide / Télécharger |
| 3 | M1 | Passerelle NMEA 2000 Wi-Fi / NMEA 2000 Wi-Fi gateway | passerelle NMEA 2000 Wi-Fi iPhone / NMEA 2000 Wi-Fi gateway for iPhone | Choix par format → Trajet / Format / Deux modèles / Test |
| 4 | M1 | Vérifier pypilot / Check pypilot connectivity | connexion pypilot Wi-Fi / pypilot Wi-Fi connection | Diagnostic → Préparation / Connexion / État |
| 5 | M1 | NMEA 0183 ou 2000 / NMEA 0183 vs 2000 | NMEA 0183 ou 2000 / NMEA 0183 vs 2000 | Sortie utile → Format reçu / Même capteur |
| 6 | M1 | Lire NMEA 0183 par TCP / Read NMEA 0183 over TCP | NMEA 0183 TCP iPhone / NMEA 0183 TCP iPhone | Premier flux → Prérequis / Réglages / Lecture |
| 7 | M1 | pypilot sur OpenPlotter / pypilot on OpenPlotter | pypilot OpenPlotter iPhone / OpenPlotter pypilot iPhone | Schéma Pi → Réseau / Rôle du Pi / Vérification |
| 8 | M2 | YDWG-02 et PyNav / YDWG-02 with PyNav | YDWG-02 PyNav / YDWG-02 PyNav | Essai → Version / Modes / Résultats et limites |
| 9 | M2 | NavLink2 et PyNav / NavLink2 with PyNav | NavLink2 PyNav / NavLink2 PyNav | Essai → Firmware / Sortie / Résultats et limites |
| 10 | M2 | MacArthur HAT et PyNav / MacArthur HAT with PyNav | MacArthur HAT PyNav / MacArthur HAT PyNav | Chaîne complète → Raspberry Pi / Flux / Résultats |
| 11 | M2 | Afficher le vent / Display wind data | vent NMEA iPhone / NMEA wind iPhone | Mesure précise → Capteur / Vent apparent et vrai / Comparaison |
| 12 | M2 | Cadrans sans données / Empty gauges | répétiteur NMEA sans données / NMEA dashboard no data | Diagnostic → Tout est vide / Un cadran est vide / Donnée figée |
| 13 | M3 | iNavX ou PyNav / iNavX vs PyNav | alternative iNavX instruments NMEA / iNavX alternative for NMEA instruments | Comparaison par besoin → Cartes / Instruments / Choix |
| 14 | M3 | OpenCPN ou PyNav / OpenCPN vs PyNav | OpenCPN PyNav pypilot / OpenCPN vs PyNav pypilot | Deux interfaces → Plugin / Mobile / Cas d’usage |
| 15 | M3 | YDWG-02 ou NavLink2 / YDWG-02 vs NavLink2 | YDWG-02 ou NavLink2 iPhone / YDWG-02 vs NavLink2 iPhone | Comparer les mêmes mesures → Montage / Formats / Résultats |
| 16 | M3 | Réseau Wi-Fi du bord / Boat Wi-Fi for instruments | Wi-Fi bateau instruments / boat Wi-Fi instruments | Topologies → Point d’accès / Réseau partagé / Diagnostic |
| 17 | M3 | Journal d’essai NMEA / NMEA gateway test log | tester passerelle NMEA / test NMEA gateway | Fiche réutilisable → Matériel / Mesures / Résultats / Rapporter un essai |

Textes complets des trois premières paires dans src/content/docs/{fr,en}-pypilot.md, src/content/docs/{fr,en}-repeater.md et src/content/compatibility/{fr,en}-wifi.md.

# 5. Netlinking

| Cible | Action | Page à proposer |
|---|---|---|
| [pypilot](https://github.com/pypilot/pypilot_doc) | Après validation sur une version précise, proposer une contribution documentaire avec étapes reproductibles et déclarer le lien avec PyNav. | Diagnostic pypilot |
| [OpenMarine, rubrique pypilot](https://forum.openmarine.net/forumdisplay.php?fid=17) | Répondre à un fil réseau pertinent avec schéma et mesures, puis demander des contre-exemples de configuration. | Diagnostic |
| [OpenPlotter](https://openplotter.readthedocs.io/latest/pypilot/pypilot_app.html) | Proposer une note sur une configuration Pi testée, avec versions et flux mesurés. | Guide Raspberry Pi |
| [Hisse et Oh](https://www.hisse-et-oh.com/) et [ForumVoile](https://www.forumvoile.com/) | Répondre à un fil pertinent sur un répétiteur ou une passerelle. Indiquer l’affiliation et demander des retours sur le modèle exact. | Répétiteur FR |
| [Cruisers Forum](https://www.cruisersforum.com/) | Contribuer dans la rubrique électronique avec la matrice format/firmware et un résultat vérifiable. | Fiche EN |
| [r/sailing](https://www.reddit.com/r/sailing/), [r/voile](https://www.reddit.com/r/voile/) | Lire les règles et demander aux modérateurs si nécessaire. Publier un retour d’essai avec schéma et limites. | Journal d’essais |
| [Yacht Devices](https://www.yachtd.com/), [Digital Yacht](https://digitalyacht.support/product/navlink2/) | Soumettre au support un tableau version/format/données et demander l’ajout aux ressources d’intégration si le test est reproductible. | Fiche du modèle |
| [Signal K, catalogue d’applications](https://signalk.org/apps/) | Examiner les critères et soumettre seulement si une intégration Signal K est documentée et admissible. Sinon, privilégier les listes d’applications tenues par les fabricants testés. | Intégration vérifiée |

Commencer avec trois contributions utiles et deux demandes fabricants après les essais. Suivre réponses, liens obtenus, visites référentes et clics App Store.

# 6. Mise en ligne et mesure

- [ ] Acheter le domaine, vérifier accès DNS et GitHub Pages, définir PYNAV_SITE_URL avec www et compiler. Contrôler que les URL de production ne contiennent plus /Pynav/.
- [ ] Tester HTTP/HTTPS, www et domaine nu, URL GitHub historiques FR/EN, 404 réelle, redirections en un saut et absence de liens internes cassés. Vérifier robots.txt, sitemap-index.xml et sitemap enfant.
- [ ] Vérifier canonical, HTML lang, hreflang réciproques, x-default, carte OG et JSON-LD sur les deux langues. Inspecter l’accueil, chaque hub et les trois pages prioritaires.
- [ ] Valider la propriété de domaine dans Search Console via DNS et soumettre le sitemap. Inspecter les pages prioritaires. Garder l’accès à l’ancienne propriété si disponible. Examiner l’outil Changement d’adresse selon les conditions d’éligibilité. [Migration Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
- [ ] Vérifier Bing Webmaster Tools, soumettre le sitemap et inspecter une URL par langue. [Bing Webmaster Tools](https://www.bing.com/webmasters/).
- [ ] Instrumenter le clic App Store avec langue, page, emplacement du CTA et canal, selon l’outil de mesure retenu. Avec accès App Store Connect, créer des liens de campagne FR/EN et suivre les premiers téléchargements attribués. Un clic sortant est un indicateur intermédiaire. [Campagnes App Store Connect](https://developer.apple.com/help/app-store-connect/view-app-analytics/manage-campaigns/).
- [ ] À J+7, J+30 et J+90, relever indexation, impressions et clics Google, CTR, clics App Store par page, taux de clic vers le store et premiers téléchargements attribués si disponibles. Ventiler FR/EN et marque/hors marque. Corriger les erreurs d’exploration avant d’ajouter des pages.
- [ ] Tester Lighthouse sur mobile pour l’accueil et les trois pages prioritaires. Surveiller le 75e percentile terrain quand disponible : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. [Core Web Vitals](https://web.dev/articles/vitals).
