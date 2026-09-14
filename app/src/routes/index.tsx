import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Opening } from "../components/site/opening";
import { Services } from "../components/site/services";
import { Work } from "../components/site/work";
import { About } from "../components/site/about";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "../lib/site";

const HOME_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/icon-512.png`,
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      areaServed: ["Atlanta", "Miami", "London"],
      serviceType: [
        "Strategy & Planning",
        "Advertising & Creative",
        "Websites & Landing Pages",
        "Search & AI Visibility",
        "Automation & Follow-Up",
      ],
      provider: { "@id": `${SITE_URL}/#org` },
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE_URL }],
    meta: [{ property: "og:url", content: SITE_URL }],
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
