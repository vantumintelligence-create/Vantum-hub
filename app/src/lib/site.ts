// Single source of truth for the site-wide entity facts. Every page, schema
// graph and head tag reads from here so nothing drifts between them.

export const SITE_URL = "https://vantumintelligence.com";
export const SITE_NAME = "Vantum Intelligence";

// Feeds the homepage meta description, the default og:description and the
// `description` field of the Organization and Service JSON-LD nodes. Stated
// once here so those four never drift apart.
export const SITE_DESCRIPTION =
  "Vantum Intelligence builds the path from search to signature: ads, website, search visibility and follow-up, built to work as one system.";

// Booking path. This plain public URL is what every CTA carries in its href so
// the link works before hydration, with JavaScript off, and for crawlers and
// AI agents. The themed Calendly popup (lib/calendly.ts) layers on top of it.
export const CALENDLY_PUBLIC_URL = "https://calendly.com/vantumintelligence/30min";

export const CONTACT_EMAIL = "contact@vantumintelligence.com";

// Structural entity facts used by the Organization node.
export const FOUNDING_YEAR = "2025";
export const AREA_SERVED = "United States";

// Shared JSON-LD node identifiers. Page graphs reference these by @id rather
// than redefining the nodes they point at.
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

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
