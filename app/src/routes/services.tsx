import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { ServiceSections, SERVICES } from "../components/site/services";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { openCalendlyPopup } from "../lib/calendly";
import {
  CALENDLY_PUBLIC_URL,
  ORG_ID,
  PRICING,
  SITE_URL,
  WEBSITE_ID,
  breadcrumb,
  organizationGraph,
} from "../lib/site";

const PAGE_URL = `${SITE_URL}/services`;
const TITLE =
  "Services: Strategy, Ads, Websites, SEO & AEO, Follow-Up Automation | Vantum Intelligence";
const DESCRIPTION =
  "The five services Vantum Intelligence uses to build a client acquisition system for remodelers and home-service businesses: strategy and planning, advertising and creative, websites and landing pages, search and AI visibility, and automation and follow-up.";

const FAQS = [
  {
    q: "What services does Vantum Intelligence offer?",
    a: "Vantum Intelligence offers five connected services: strategy and planning, advertising and creative, websites and landing pages, search and AI visibility (SEO and AEO), and automation and follow-up. They are sold together as a client acquisition system for remodelers and home-service businesses, and an engagement starts with the one or two the path review shows are losing the most work.",
  },
  {
    q: "Does Vantum Intelligence work only with remodelers?",
    a: "Remodelers and home-service businesses are the focus, because the path from inquiry to estimate to signed contract is the same shape in every one of them and the fixes carry over. Vantum Intelligence also takes on other owner-operated service businesses when the path review shows the same kind of problem.",
  },
  {
    q: "Does Vantum Intelligence sell leads?",
    a: "Yes — once the path can carry them. Vantum Intelligence runs the campaigns that produce your inquiries, and those inquiries are yours alone; they are never resold to anyone else. What it will not do is turn volume up before the follow-up, the website, and the booking step are fixed, because more leads into a broken path only lose more leads. A lead service is paid the moment it hands over a name, so nothing it earns depends on what happens next. That is the difference, and it is a difference of sequence.",
  },
  {
    q: "How much does it cost?",
    a: `Retainers run ${PRICING.tiers[0]}, ${PRICING.tiers[1]}, or ${PRICING.tiers[2]} per month depending on scope, with a ${PRICING.minimumMonths}-month minimum and a one-time setup fee of ${PRICING.setup} for the build. The scope and the price are named on the first call, after the path review.`,
  },
  {
    q: "How does an engagement start?",
    a: "With a free 30-minute path review on a screen share. Vantum Intelligence walks the company's own path from ad or search result to signed contract, shows where inquiries stop moving, and names what it would fix first. If the fit is right, the work is scoped and priced on that call.",
  },
  {
    q: "Who owns the ad accounts and the systems?",
    a: "Ad accounts stay owned by the client; Vantum Intelligence works inside them with delegated access. The follow-up workflows are built and hosted on Vantum Intelligence's side, so there is nothing for the office to install or maintain.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
    },
    breadcrumb("/services", "Services"),
    ...SERVICES.map((s) => ({
      "@type": "Service",
      "@id": `${PAGE_URL}#${s.slug}`,
      url: `${PAGE_URL}#${s.slug}`,
      name: s.title,
      serviceType: s.title,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      description: s.sections[0],
    })),
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
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
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        <header className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24">
          <p className="vt-chapter-num">Services</p>
          <h1 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">
            Five services, one client acquisition system
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Vantum Intelligence builds client acquisition systems for remodelers and home-service
            businesses. Each of the five below fixes one stretch of the path from first click to
            signed contract.
          </p>
          <nav aria-label="On this page" className="mt-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SERVICES.map((s, i) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]"
                  >
                    {String(i + 1).padStart(2, "0")} {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="mt-16 lg:mt-20">
          <ServiceSections />
        </div>

        <section
          aria-labelledby="faq-heading"
          className="border-t border-[#f5f1e8]/10 px-6 py-24 lg:pl-72 lg:pr-16 lg:py-32"
        >
          <p className="vt-chapter-num">FAQ</p>
          <h2 id="faq-heading" className="vt-display-xl mt-8 max-w-3xl text-[#f5f1e8]">
            Frequently asked questions
          </h2>
          <div className="mt-12 max-w-3xl divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
            {FAQS.map((item) => (
              <article key={item.q} className="py-7">
                <h3 className="font-display text-lg font-medium text-[#f5f1e8]">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">{item.a}</p>
              </article>
            ))}
          </div>
          <a
            href={CALENDLY_PUBLIC_URL}
            onClick={openCalendlyPopup}
            className="mt-12 inline-flex items-center gap-2.5 rounded-md border border-[#c9a24b]/60 px-6 py-3.5 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#0b0906]"
          >
            Book a 30-minute path review
            <svg
              className="h-3 w-3"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M2 8h11M8 3l5 5-5 5" />
            </svg>
          </a>
        </section>

        <PageCrossLinks hide="services" />
      </main>
      <Footer />
    </div>
  );
}
