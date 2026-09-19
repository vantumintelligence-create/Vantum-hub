import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { openCalendlyPopup } from "../lib/calendly";
import {
  AREA_SERVED,
  CALENDLY_PUBLIC_URL,
  CONTACT_EMAIL,
  FUNNEL_URL,
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  breadcrumb,
  organizationGraph,
} from "../lib/site";

const PAGE_URL = `${SITE_URL}/contact`;
const TITLE = "Contact Vantum Intelligence: Email or Book a 30-Minute Call";
const DESCRIPTION = `Reach Vantum Intelligence by email at ${CONTACT_EMAIL} or book a free 30-minute path review. Working remotely with remodelers and home-service businesses across the ${AREA_SERVED}.`;

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph(),
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
    },
    breadcrumb("/contact", "Contact"),
  ],
});

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const ROWS = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    note: "Answered within one business day.",
  },
  {
    label: "Book a call",
    value: "30-minute path review",
    href: CALENDLY_PUBLIC_URL,
    note: "Free. Screen share of your own path from ad or search result to signed contract.",
    popup: true,
  },
  {
    label: "Remodelers",
    value: "Start with the path review page",
    href: FUNNEL_URL,
    note: "Two qualifying questions, then a calendar.",
  },
] as const;

function ContactPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        <section className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24">
          <p className="vt-chapter-num">Contact</p>
          <h1 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">Get in touch</h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Vantum Intelligence works remotely with remodelers and home-service businesses across
            the {AREA_SERVED}. Email or book a call. Both reach the founder directly.
          </p>

          <dl className="mt-14 max-w-3xl divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
            {ROWS.map((row) => (
              <div key={row.label} className="grid gap-2 py-7 sm:grid-cols-12 sm:gap-6">
                <dt className="font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#f5f1e8]/45 sm:col-span-3 sm:pt-1">
                  {row.label}
                </dt>
                <dd className="sm:col-span-9">
                  <a
                    href={row.href}
                    onClick={"popup" in row && row.popup ? openCalendlyPopup : undefined}
                    className="font-display text-xl font-medium text-[#f5f1e8] transition-colors hover:text-[#c9a24b]"
                  >
                    {row.value}
                  </a>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#f5f1e8]/60">{row.note}</p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f1e8]">
              Service area
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#f5f1e8]/65">
              All of the work is done remotely, so the firm takes clients anywhere in the{" "}
              {AREA_SERVED}. Calls are scheduled in Eastern Time.
            </p>
          </div>
        </section>

        <div className="mt-16">
          <PageCrossLinks hide="contact" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
