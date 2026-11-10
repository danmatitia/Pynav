// TEXTES FRANÇAIS : modifiez ici n'importe quelle phrase du site.
// Chaque clé existe aussi dans en.ts (TypeScript vous prévient s'il en manque une).
const fr = {
  htmlLang: 'fr',
  meta: {
    title: 'PyNav – Application marine : tableau de bord NMEA et télécommande pypilot',
    description: 'PyNav affiche vos instruments de bord NMEA sur iPhone et iPad et commande votre pypilot. Application gratuite, version Pro sans abonnement.',
  },
  nav: { usages: 'Usages', features: 'Fonctionnalités', compat: 'Compatibilité', pricing: 'Gratuit et Pro', faq: 'FAQ', menu: 'Menu', main: 'Navigation principale', skip: 'Aller au contenu', langLabel: 'Langue' },
  buttons: { appStore: 'Télécharger sur l’App Store', googlePlay: 'Disponible sur Google Play', googlePlaySoon: 'Bientôt sur Google Play' },
  hero: {
    title: 'Vos instruments de bord et votre pypilot, dans votre poche.',
    subtitle: 'PyNav est une application de navigation pour bateau : un tableau de bord NMEA personnalisable et une télécommande pypilot, sur iPhone et iPad.',
    placeholder: 'Visuel provisoire : capture d’écran de l’application à venir',
  },
  usages: {
    title: 'Deux usages, une seule application',
    items: [
      { title: 'Je navigue avec pypilot', text: 'Accédez aux commandes et aux réglages de votre pypilot depuis votre smartphone ou votre tablette.' },
      { title: 'J’ai des instruments NMEA', text: 'Affichez vos données de navigation sur un tableau de bord personnalisable, même sans pypilot, à partir d’une installation NMEA compatible.' },
    ],
  },
  features: {
    title: 'Ce que PyNav affiche et commande',
    items: [
      { title: 'Commande pypilot', text: 'Les commandes et les réglages de votre pilote automatique pypilot, à portée de main.' },
      { title: 'Tableau de bord NMEA', text: 'Composez un tableau de bord personnalisable avec les informations qui comptent pour vous.' },
      { title: 'Données de vent', text: 'Consultez les données de vent de votre installation.' },
      { title: 'Vitesse et navigation', text: 'Suivez vos données de vitesse et de navigation.' },
      { title: 'Moteur et jauges', text: 'Des instruments moteur et des jauges pour garder un œil sur la mécanique.' },
      { title: 'Alarmes configurables', text: 'Définissez des alarmes adaptées à votre bateau et à votre façon de naviguer.' },
    ],
  },
  compat: {
    title: 'Compatibilité et prérequis',
    text: 'PyNav se connecte à votre installation par le réseau, via une passerelle NMEA appropriée ou pypilot. Le téléchargement est disponible sur iPhone et iPad.',
    protocols: ['NMEA 0183', 'NMEA 2000 Raw', 'pypilot TCP'],
    limits: 'La compatibilité dépend de votre matériel et de votre réseau. PyNav n’est pas garanti avec tous les équipements NMEA.',
  },
  pricing: {
    title: 'Gratuit pour commencer, Pro quand vous voulez',
    free: { title: 'Version gratuite', text: 'L’application se télécharge gratuitement.' },
    pro: { title: 'Version Pro', text: 'Débloquez la version Pro par achat intégré : un achat unique, sans abonnement.' },
    note: 'Conditions et prix affichés par chaque store.',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      { q: 'PyNav est-il gratuit ?', a: 'Oui, l’application se télécharge gratuitement. Une version Pro est disponible par achat intégré, sans abonnement.' },
      { q: 'Faut-il pypilot pour utiliser PyNav ?', a: 'Non. Vous pouvez utiliser PyNav comme tableau de bord NMEA sans pypilot, ou comme télécommande pypilot.' },
      { q: 'Sur quels appareils fonctionne PyNav ?', a: 'PyNav est disponible sur iPhone et iPad via l’App Store.' },
      { q: 'PyNav remplace-t-il mes instruments de navigation ?', a: 'Non. PyNav ne remplace pas les équipements réglementaires de navigation. Le navigateur reste responsable de la sécurité du bateau et de la veille.' },
    ],
  },
  cta: { title: 'Prêt à embarquer ?', text: 'Téléchargez PyNav gratuitement.' },
  footer: { safety: 'PyNav ne remplace pas les équipements réglementaires de navigation. Le navigateur conserve la responsabilité de la sécurité du bateau et de la veille.', rights: 'Tous droits réservés.', support: 'Support' },
};
export default fr;
