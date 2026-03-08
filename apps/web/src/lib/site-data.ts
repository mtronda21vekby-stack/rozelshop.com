export const siteData = {
  brand: 'ROZEL',
  domain: 'rozelshop.com',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    eyebrow: 'Maison ROZEL',
    title: 'A modern fashion house shaped by silhouette, precision, and restraint.',
    description:
      'Luxury ready-to-wear, editorial collections, and a quiet digital experience built for the house of ROZEL.',
    primaryCta: {
      label: 'Explore Collections',
      href: '/collections'
    },
    secondaryCta: {
      label: 'Enter the House',
      href: '/about'
    }
  },
  collections: [
    {
      slug: 'noir-atelier',
      title: 'Noir Atelier',
      description: 'Sharp tailoring, deep black tones, and sculpted outerwear.'
    },
    {
      slug: 'private-capsule',
      title: 'Private Capsule',
      description: 'Limited silhouettes designed for editorial presentation.'
    },
    {
      slug: 'evening-study',
      title: 'Evening Study',
      description: 'Fluid forms, precise lines, and quiet luxury for nightwear.'
    }
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} ROZEL. All rights reserved.`
  }
};
