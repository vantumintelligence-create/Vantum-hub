import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Services } from "../components/site/services";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/services`;
const TITLE = "Services — Vantum Intelligence";
const DESCRIPTION =
  "Strategy and planning, advertising and creative, websites, search and AI visibility, and automation — the services Vantum Intelligence uses to acquire and convert customers for growing businesses.";

const FAQS = [
  {
    q: "What services does Vantum Intelligence offer?",
    a: "Vantum Intelligence offers five connected services: strategy and planning, advertising and creative, websites and landing pages, search and AI visibility, and automation and follow-up.",
  },
  {
    q: "What does the strategy and planning service include?",
    a: "It includes customer research, positioning, and marketing planning — examining your offer, customers, competition, and current performance to identify what deserves attention, with prioritized recommendations that account for your budget and resources.",
  },
  {
    q: "Does Vantum Intelligence build websites, or only run ads?",
    a: "Both. Websites and landing pages is a core service — planning, writing, designing, and building sites with booking and inquiry forms — alongside strategy, advertising, search visibility, and automation.",
  },
  {
    q: "What is search and AI visibility (SEO and AEO)?",
    a: "It's the content and technical work that helps search engines and AI search tools find and interpret a business's website, covering the services customers search for, the questions they ask, and the information they use to compare providers.",
  },
  {
    q: "What does the automation and follow-up service handle?",
    a: "Workflows for responding to inquiries, coordinating follow-up, and maintaining customer records — with agreed messages, timing, and handoffs for situations that need personal attention.",
  },
];

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={FAQ_SCHEMA} />
      <SiteNav />
      <main>
        <div className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24">
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/60">
            Vantum Intelligence helps businesses identify what needs attention and carry out the
            work — from positioning and advertising to websites, search visibility, and customer
            follow-up.
          </p>
        </div>
        <Services headingLevel="h1" />

        <section className="border-t border-[#f5f1e8]/10 px-6 py-24 lg:pl-72 lg:pr-16 lg:py-32">
          <p className="vt-chapter-num">FAQ</p>
          <h2 className="vt-display-xl mt-8 max-w-3xl text-[#f5f1e8]">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 max-w-3xl divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer list-none font-display text-lg font-medium text-[#f5f1e8] transition-colors group-hover:text-[#c9a24b]">
                  {item.q}
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-[#f5f1e8]/65">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <PageCrossLinks hide="services" />
      </main>
      <Footer />
    </div>
  );
}
