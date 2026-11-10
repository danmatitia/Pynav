// ENGLISH TEXTS: same keys as fr.ts (TypeScript flags any missing key).
import type fr from './fr';

const en: typeof fr = {
  htmlLang: 'en',
  meta: {
    title: 'PyNav – Marine navigation app: NMEA dashboard and pypilot remote',
    description: 'PyNav shows your NMEA boat instruments on iPhone, iPad and Android and controls your pypilot. Free app, Pro version with no subscription.',
  },
  nav: { usages: 'Use cases', features: 'Features', compat: 'Compatibility', pricing: 'Free and Pro', faq: 'FAQ', menu: 'Menu', main: 'Main navigation', skip: 'Skip to content', langLabel: 'Language' },
  buttons: { appStore: 'Download on the App Store', googlePlay: 'Get it on Google Play', googlePlaySoon: 'Coming soon on Google Play' },
  hero: {
    title: 'Your boat instruments and your pypilot, in your pocket.',
    subtitle: 'PyNav is a marine navigation app: a customizable NMEA dashboard and a pypilot remote, on iPhone, iPad and Android.',
    placeholder: 'Placeholder visual: app screenshot coming soon',
  },
  usages: {
    title: 'Two ways to use it, one app',
    items: [
      { title: 'I sail with pypilot', text: 'Access your pypilot controls and settings from your smartphone or tablet.' },
      { title: 'I have NMEA instruments', text: 'Display your navigation data on a customizable dashboard, even without pypilot, from a compatible NMEA setup.' },
    ],
  },
  features: {
    title: 'What PyNav displays and controls',
    items: [
      { title: 'pypilot control', text: 'The controls and settings of your pypilot autopilot, right at your fingertips.' },
      { title: 'NMEA dashboard', text: 'Build a customizable dashboard with the information that matters to you.' },
      { title: 'Wind data', text: 'View the wind data from your installation.' },
      { title: 'Speed and navigation', text: 'Follow your speed and navigation data.' },
      { title: 'Engine and gauges', text: 'Engine instruments and gauges to keep an eye on the machinery.' },
      { title: 'Configurable alarms', text: 'Set alarms that fit your boat and the way you sail.' },
    ],
  },
  compat: {
    title: 'Compatibility and requirements',
    text: 'PyNav connects to your setup over the network, through a suitable NMEA gateway or pypilot. It runs on iPhone, iPad and compatible Android devices.',
    protocols: ['NMEA 0183', 'NMEA 2000 Raw', 'pypilot TCP'],
    limits: 'Compatibility depends on your hardware and network. PyNav is not guaranteed to work with every NMEA device.',
  },
  pricing: {
    title: 'Free to start, Pro when you want it',
    free: { title: 'Free version', text: 'The app is free to download.' },
    pro: { title: 'Pro version', text: 'Unlock Pro with an in-app purchase: a one-time purchase, no subscription.' },
    note: 'Terms and prices are shown by each store.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Is PyNav free?', a: 'Yes, the app is free to download. A Pro version is available as an in-app purchase, with no subscription.' },
      { q: 'Do I need pypilot to use PyNav?', a: 'No. You can use PyNav as an NMEA dashboard without pypilot, or as a pypilot remote.' },
      { q: 'Which devices does PyNav run on?', a: 'iPhone, iPad and compatible Android devices.' },
      { q: 'Does PyNav replace my navigation instruments?', a: 'No. PyNav does not replace mandatory navigation equipment. The skipper remains responsible for the safety of the boat and for keeping a proper lookout.' },
    ],
  },
  cta: { title: 'Ready to cast off?', text: 'Download PyNav for free.' },
  footer: { safety: 'PyNav does not replace mandatory navigation equipment. The skipper remains responsible for the safety of the boat and for keeping a proper lookout.', rights: 'All rights reserved.', support: 'Support' },
};
export default en;
