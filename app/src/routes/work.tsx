import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { REEL, Work } from "../components/site/work";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { ORG_ID, SITE_URL, WEBSITE_ID, breadcrumb, organizationGraph } from "../lib/site";

const PAGE_URL = `${SITE_URL}/work`;
const TITLE = "Work: Ad Creative and Campaign Reel | Vantum Intelligence";
const DESCRIPTION =
  "Selected ad creative and campaign work from Vantum Intelligence: short-form video ads, before-and-after pieces, event activation, and static ads produced inside client engagements.";

// Production date of the current reel edit; individual clips predate it.
const REEL_PUBLISHED = "2026-09-13";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph(),
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      hasPart: { "@id": `${PAGE_URL}#reel` },
    },
    breadcrumb("/work", "Work"),
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#reel`,
      name: "Vantum Intelligence work reel",
      numberOfItems: REEL.length,
      itemListElement: REEL.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item:
          item.media === "video"
            ? {
                "@type": "VideoObject",
                "@id": `${PAGE_URL}#${item.key}`,
                name: item.title,
                description: `${item.kind} produced by Vantum Intelligence.`,
                thumbnailUrl: `${SITE_URL}/assets/work/${item.key}.jpg`,
                contentUrl: `${SITE_URL}/assets/work/${item.key}.mp4`,
                uploadDate: REEL_PUBLISHED,
                creator: { "@id": ORG_ID },
              }
            : {
                "@type": "ImageObject",
                "@id": `${PAGE_URL}#${item.key}`,
                name: item.title,
                description: `${item.kind} produced by Vantum Intelligence.`,
                contentUrl: `${SITE_URL}/assets/work/${item.key}.jpg`,
                creator: { "@id": ORG_ID },
              },
      })),
    },
  ],
});

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
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        <div className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24" />
        <Work headingLevel="h1" />

        <section className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f1e8]">
            What the reel is
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Every piece above was produced by Vantum Intelligence inside a broader engagement, with
            strategy, creative development, and campaign management working together rather than as
            one-off assets. The reel spans short-form video ads, a before-and-after piece, event
            activation footage, a concept video, and a static ad. Case studies are in progress with
            the clients involved.
          </p>
        </section>

        <PageCrossLinks hide="work" />
      </main>
      <Footer />
    </div>
  );
}
