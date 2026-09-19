import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Work } from "../components/site/work";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/work`;
const TITLE = "Work — Vantum Intelligence";
const DESCRIPTION =
  "Selected ad creative and campaign work from Vantum Intelligence, spanning event activation, short-form ad creative, and paid social campaigns.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <SiteNav />
      <main>
        <div className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24" />
        <Work headingLevel="h1" />

        <section className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16">
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/60">
            The reel above spans ad creative and campaign work produced as part of broader
            engagements — strategy, creative development, and performance management working
            together rather than one-off assets.
          </p>
        </section>

        <PageCrossLinks hide="work" />
      </main>
      <Footer />
    </div>
  );
}
