import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { About } from "../components/site/about";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { ORG_ID, SITE_URL, WEBSITE_ID, breadcrumb } from "../lib/site";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About Vantum Intelligence";
const DESCRIPTION =
  "Vantum Intelligence finds where interest drops out of your process and rebuilds that part, rather than pushing more traffic down a path that already leaks.";

// This page carries no Organization/WebSite nodes of its own: it references the
// canonical ones defined on the homepage by @id, so the entity is stated once.
const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "AboutPage"],
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      mainEntity: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-US",
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
        <About headingLevel="h1" />
        <PageCrossLinks hide="about" />
      </main>
      <Footer />
    </div>
  );
}
