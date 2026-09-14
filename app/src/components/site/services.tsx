"use client";

import { useState } from "react";

const SERVICES = [
  {
    title: "Strategy & Planning",
    tag: "Customer research · Positioning · Marketing planning",
    body: "We examine your offer, customers, competition, and current performance to identify what deserves attention. You receive recommendations with a rationale, an order of priority, and a plan that accounts for your budget and available resources.",
    image: "/assets/tile-strategy-planning.webp",
    alt: "Strategy and marketing planning process at Vantum Intelligence",
  },
  {
    title: "Advertising & Creative",
    tag: "Static and video advertising · Campaign management · Creative testing",
    body: "We develop campaign concepts, write copy, and produce static and video ads that communicate your offer. For managed campaigns, we review performance alongside lead quality and sales feedback to decide what to adjust, test, or discontinue.",
    image: "/assets/tile-ad-creative.webp",
    alt: "Ad creative example from a Vantum Intelligence advertising campaign",
  },
  {
    title: "Websites & Landing Pages",
    tag: "Business websites · Landing pages · Booking and inquiry forms",
    body: "We plan, write, design, and build websites that give prospective customers the information they need to assess your business. The work brings together service information, relevant project examples, and a straightforward way to inquire, book, or purchase.",
    image: "/assets/tile-strategy.webp",
    alt: "Website and landing page design built by Vantum Intelligence",
  },
  {
    title: "Search & AI Visibility",
    tag: "Search optimization · Local visibility · Content development",
    body: "We improve the content and technical structure that help search engines and AI search tools find and interpret your website. Our SEO and AEO work addresses the services customers search for, the questions they ask, and the information they use to compare providers.",
    image: "/assets/tile-search-visibility.webp",
    alt: "Search engine and AI visibility optimization work by Vantum Intelligence",
  },
  {
    title: "Automation & Follow-Up",
    tag: "Inquiry response · Customer follow-up · CRM workflows",
    body: "We build workflows for responding to inquiries, coordinating follow-up, and maintaining customer records. Each system reflects your team's responsibilities, with agreed messages, timing, and handoffs for situations that require personal attention.",
    image: "/assets/tile-automation.webp",
    alt: "Inquiry response and customer follow-up automation built by Vantum Intelligence",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative mt-1 h-3.5 w-3.5 shrink-0 text-[#f5f1e8]/50 transition-transform duration-300 ease-out group-hover:text-[#c9a24b] ${
        open ? "rotate-45" : ""
      }`}
    >
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  );
}

export function Services({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const Heading = headingLevel;

  return (
    <section id="services" className="pt-24 lg:pt-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <Heading className="vt-display-xl text-[#f5f1e8]">Services</Heading>
      </div>

      <div className="mt-16 border-y border-[#f5f1e8]/10 lg:mt-24">
        {SERVICES.map((s, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={s.title} className={i > 0 ? "border-t border-[#f5f1e8]/10" : ""}>
              <button
                type="button"
                id={`service-trigger-${i}`}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 px-6 py-10 text-left transition-colors lg:px-72 lg:pr-16 lg:py-12"
              >
                <span className="font-display text-2xl font-semibold uppercase leading-tight tracking-tight transition-colors duration-300 sm:text-3xl text-[#f5f1e8] group-hover:text-[#c9a24b]">
                  {s.title}
                </span>
                <span className="flex items-center gap-6">
                  <span className="hidden max-w-56 font-mono-vt text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[#f5f1e8]/40 transition-colors group-hover:text-[#f5f1e8]/60 sm:block lg:max-w-none lg:text-right">
                    {s.tag}
                  </span>
                  <PlusIcon open={isOpen} />
                </span>
              </button>

              <div
                id={`service-panel-${i}`}
                role="region"
                aria-labelledby={`service-trigger-${i}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid items-center gap-8 px-6 pb-14 lg:grid-cols-12 lg:gap-12 lg:pl-72 lg:pr-16 lg:pb-16">
                    <div className="lg:col-span-5">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                      <p className="vt-meta-row">{s.tag}</p>
                      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
