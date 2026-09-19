import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { About } from "../components/site/about";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { founderNode } from "../lib/founder";
import {
  FOUNDER_ID,
  FOUNDING_YEAR,
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  breadcrumb,
  organizationGraph,
} from "../lib/site";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About Vantum Intelligence: Who Runs It and How Engagements Work";
const DESCRIPTION = `Vantum Intelligence was founded in ${FOUNDING_YEAR} and works remotely with remodelers and home-service businesses across the United States. Who runs the firm, how engagements are structured and priced, and how to get in touch.`;

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph({ withFounderRef: true }),
    founderNode(),
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": ORG_ID },
      mentions: { "@id": FOUNDER_ID },
    },
    breadcrumb("/about", "About"),
  ],
});

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: PAGE_URL }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        <div className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24" />
        <About />
        <PageCrossLinks hide="about" />
      </main>
      <Footer />
    </div>
  );
}
