export const SITE_URL = "https://rivreach.com";
export const SITE_NAME = "Rivreach";
export const OG_IMAGE = "/assets/og-image.jpg";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61595464893592",
  instagram: "https://www.instagram.com/rivreach?psln=cnJnNmthdHozbW5t",
  linkedin: "https://www.linkedin.com/company/rivreach/",
};

export const WHATSAPP_URL = "https://wa.me/918689842513?text=Hi%20Rivreach";

// Per-page head tags. Next.js replaces (does not merge) openGraph and twitter
// between layout and page, so every page gets the full set from here.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Rivreach" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/rivreach-logo.webp`,
  description:
    "Performance ads, video creative and AI search optimisation agency in Navi Mumbai.",
  email: "siddhant@rivreach.com",
  telephone: "+918689842513",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [
    SOCIAL_LINKS.linkedin,
    "https://www.instagram.com/rivreach",
    SOCIAL_LINKS.facebook,
  ],
};
