import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { About } from "../components/site/about";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About — Vantum Intelligence";
const DESCRIPTION =
  "Vantum Intelligence helps businesses turn complex information into clear priorities, better systems, and more confident decisions.";

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
