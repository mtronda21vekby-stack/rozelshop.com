export const siteData = {
  brand: 'ROZEL',
  domain: 'rozelshop.com',
  navigation: [
    { label: 'House', href: '/house' },
    { label: 'Collections', href: '/collections' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    eyebrow: 'Maison ROZEL',
    title: 'A modern fashion house built on precision, silhouette, and restraint.',
    description:
      'ROZEL creates luxury ready-to-wear with a cinematic point of view, sharp tailoring, and quiet intensity.',
    primaryCta: {
      label: 'Explore Collections',
      href: '/collections'
    },
    secondaryCta: {
      label: 'Enter the House',
      href: '/house'
    }
  },
  highlights: [
    {
      title: 'Editorial Direction',
      text: 'A controlled visual language shaped by shadow, proportion, and movement.'
    },
    {
      title: 'House Signatures',
      text: 'Tailoring, evening forms, and private capsule pieces refined for modern luxury.'
    },
    {
      title: 'Private Client Layer',
      text: 'A future-ready foundation for drops, appointments, and premium account experiences.'
    }
  ],
  collections: [
    {
      slug: 'noir-atelier',
      title: 'Noir Atelier',
      description: 'Structured outerwear, deep black tones, and sharp silhouette control.'
    },
    {
      slug: 'private-capsule',
      title: 'Private Capsule',
      description: 'Limited editorial forms designed for release in tightly curated quantities.'
    },
    {
      slug: 'evening-study',
      title: 'Evening Study',
      description: 'Fluid evening silhouettes defined by restraint, balance, and quiet power.'
    }
  ],
  journal: [
    {
      title: 'The discipline of silhouette',
      category: 'House Notes',
      excerpt:
        'ROZEL begins with shape: structure first, noise removed, emphasis placed on line and proportion.'
    },
    {
      title: 'Dark tailoring as language',
      category: 'Editorial',
      excerpt:
        'Black is treated as a material system — depth, contrast, and texture rather than absence.'
    },
    {
      title: 'The private capsule model',
      category: 'Collections',
      excerpt:
        'Limited release structures create a more intentional relationship between garment and client.'
    }
  ],
  contact: {
    email: 'clientservices@rozelshop.com',
    city: 'Paris / Online'
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ROZEL. All rights reserved.`
  }
};
