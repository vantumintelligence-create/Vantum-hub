import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Opening } from "../components/site/opening";
import { Services } from "../components/site/services";
import { Work } from "../components/site/work";
import { About } from "../components/site/about";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  FOUNDING_YEAR,
  AREA_SERVED,
  ORG_ID,
  WEBSITE_ID,
  LOGO_ID,
} from "../lib/site";

const HOME_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
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
      email: CONTACT_EMAIL,
      foundingDate: FOUNDING_YEAR,
      areaServed: { "@type": "Country", name: AREA_SERVED },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      serviceType: [
        "Strategy & Planning",
        "Advertising & Creative",
        "Websites & Landing Pages",
        "Search & AI Visibility",
        "Automation & Follow-Up",
      ],
      provider: { "@id": ORG_ID },
    },
  ],
});

const HOME_TITLE = "Client Acquisition Systems | Vantum Intelligence";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE_URL }],
    meta: [{ title: HOME_TITLE }, { property: "og:url", content: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={HOME_SCHEMA} />
      <SiteNav />
      <main>
        <Opening />
        <Services />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}
