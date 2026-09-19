import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Opening } from "../components/site/opening";
import { ServicesIndex, SERVICES } from "../components/site/services";
import { Work } from "../components/site/work";
import { AboutTeaser } from "../components/site/about-teaser";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import {
  FUNNEL_URL,
  ORG_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  organizationGraph,
} from "../lib/site";

const HOME_TITLE =
  "Client Acquisition Systems for Remodelers & Home-Service Businesses | Vantum Intelligence";

const HOME_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph(),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: HOME_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Client acquisition system",
      url: `${SITE_URL}/services`,
      description: SITE_DESCRIPTION,
      serviceType: SERVICES.map((s) => s.title),
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        name: "Home remodelers and home-service businesses",
      },
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE_URL }],
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
    ],
  }),
  component: Index,
});

function RemodelerTeaser() {
  return (
    <section className="border-t border-[#f5f1e8]/10 py-24 lg:py-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">For remodelers</p>
        <h2 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">
          Four estimates out, one back
        </h2>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
          Four estimates out and one back, invisible in search for the work you want, and nobody
          following up. Lead sellers are paid at delivery and never look at what happens next.{" "}
          {SITE_NAME} fixes the path first, then turns the volume on.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <a
            href="/remodeler-marketing"
            className="inline-flex items-center gap-2 font-display text-xl font-medium text-[#f5f1e8] transition-colors hover:text-[#c9a24b]"
          >
            How it works for remodelers
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M2 8h11M8 3l5 5-5 5" />
            </svg>
          </a>
          <a
            href={FUNNEL_URL}
            className="inline-flex items-center gap-2 font-display text-xl font-medium text-[#f5f1e8]/60 transition-colors hover:text-[#c9a24b]"
          >
            Book a free path review
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={HOME_SCHEMA} />
      <SiteNav />
      <main>
        <Opening />
        <RemodelerTeaser />
        <ServicesIndex />
        <Work posterOnly />
        <AboutTeaser />
      </main>
      <Footer />
    </div>
  );
}
