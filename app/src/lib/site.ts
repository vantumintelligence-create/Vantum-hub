// Single source of truth for the entity facts the site publishes. Every page,
// schema graph and footer reads from here so the positioning line, the
// contact path and the founder facts are stated once and never drift.

export const SITE_URL = "https://vantumintelligence.com";
export const SITE_NAME = "Vantum Intelligence";

// The one positioning line, used verbatim everywhere.
export const POSITIONING = "Client acquisition systems for remodelers and home-service businesses.";
export const SITE_DESCRIPTION =
  "Vantum Intelligence builds client acquisition systems for remodelers and home-service businesses: the ads, the website, the search presence, and the follow-up, built and run by one team.";

// Contact path. No mailing address is published: the firm works remotely.
export const CONTACT_EMAIL = "contact@vantumintelligence.com";
export const CALENDLY_PUBLIC_URL = "https://calendly.com/vantumintelligence/30min";
export const FUNNEL_URL = "https://go.vantumintelligence.com/landing";
export const PRIVACY_URL = "https://go.vantumintelligence.com/privacy";
export const TERMS_URL = "https://go.vantumintelligence.com/terms";

export const FOUNDING_YEAR = "2025";
export const AREA_SERVED = "United States";

// The founder's name and photo live in lib/founder.ts, NOT here. This module
// is imported by components that render on every page, so anything added here
// ships in the shared client bundle that every visitor downloads. See the note
// at the top of lib/founder.ts before moving it back.

// Real profile URLs only. Empty entries are hidden in the footer and omitted
// from `sameAs`.
export const SOCIAL_LINKS: { label: "LinkedIn" | "Instagram" | "YouTube"; href: string }[] = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "YouTube", href: "" },
];

export const socialUrls = () => SOCIAL_LINKS.map((s) => s.href).filter(Boolean);

// Pricing band, stated the same way on /remodeler-marketing and /about.
export const PRICING = {
  from: "$2,500",
  tiers: ["$2,500", "$4,000", "$6,500+"],
  minimumMonths: 3,
  setup: "$2,000–$5,000",
};

// Shared JSON-LD nodes. Page graphs spread these in and add their own.
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;
export const FOUNDER_ID = `${SITE_URL}/about#founder`;

// The founder's name never appears here, so it stays out of the shared client
// bundle (see lib/founder.ts). `withFounderRef` adds the Organization.founder
// pointer, and only /about passes it — that is the one page that also emits the
// Person node, so the reference always resolves inside the document it is in.
export function organizationGraph({ withFounderRef = false } = {}) {
  const sameAs = socialUrls();
  const nodes: Record<string, unknown>[] = [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${SITE_URL}/assets/icon-512.png`,
      contentUrl: `${SITE_URL}/assets/icon-512.png`,
      width: 512,
      height: 512,
      caption: SITE_NAME,
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@id": LOGO_ID },
      image: { "@id": LOGO_ID },
      description: SITE_DESCRIPTION,
      slogan: POSITIONING,
      email: CONTACT_EMAIL,
      foundingDate: FOUNDING_YEAR,
      ...(withFounderRef ? { founder: { "@id": FOUNDER_ID } } : {}),
      areaServed: { "@type": "Country", name: AREA_SERVED },
      knowsAbout: [
        "Client acquisition",
        "Home remodeling marketing",
        "Paid advertising",
        "Landing pages",
        "Search engine optimization",
        "Answer engine optimization",
        "CRM automation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        url: `${SITE_URL}/contact`,
        availableLanguage: "English",
        areaServed: "US",
      },
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": ORG_ID },
    },
  ];
  return nodes;
}

export function breadcrumb(path: string, name: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

// Per-page last-modified dates for the sitemap. Update the line for a page
// when its content changes.
export const PAGE_LASTMOD: Record<string, string> = {
  "/": "2026-09-18",
  "/services": "2026-09-18",
  "/remodeler-marketing": "2026-09-18",
  "/work": "2026-09-18",
  "/about": "2026-09-18",
  "/contact": "2026-09-18",
};
