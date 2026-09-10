"use client";

import { useState } from "react";

const SERVICES = [
  {
    title: "Advertising",
    tag: "Ad Creation and Campaign Management",
    body: "We develop and manage advertising campaigns built around clear objectives and informed by ongoing performance. Each engagement may include campaign strategy, audience development, copywriting, static and video creative, testing, campaign management, and reporting. We assess what is working, make purposeful adjustments, and keep your advertising focused on generating meaningful business opportunities.",
    image: "/assets/tile-ad-creative.webp",
  },
  {
    title: "Automation",
    tag: "Faster Responses and More Consistent Follow-Up",
    body: "We build practical automations that help your business respond to leads, maintain communication, and reduce repetitive administrative work. Capabilities include immediate lead response, missed-call text-back, SMS and email follow-up, CRM workflows, review requests, and customer reactivation. These systems help prevent opportunities from being overlooked while giving your team a more organized way to manage customer relationships.",
    image: "/assets/tile-automation.webp",
  },
  {
    title: "Web Design and Development",
    tag: "Websites Built to Support Business Growth",
    body: "We design and develop websites that clearly communicate your value and make it easy for visitors to take the next step. Our web services include website design and development, landing pages, lead-capture systems, analytics, deployment, and ongoing website management. Every project is approached as a working part of your business, with attention to usability, performance, and conversion.",
    image: "/assets/tile-strategy.webp",
  },
  {
    title: "Lead Generation",
    tag: "One Connected System",
    body: "Our services work together to create a more complete lead-generation system. Advertising brings the right people to your business, your website gives them a clear path forward, and automation helps ensure each inquiry receives timely attention.",
    image: "/assets/tile-lead-systems.webp",
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

export function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="pt-24 lg:pt-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">01 · Services</p>
        <p className="mt-8 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-[#f5f1e8] sm:text-3xl">
          Vantum Intelligence helps businesses attract qualified leads, respond faster, and manage growth with greater
          consistency.
        </p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/60">
          Our work brings advertising, automation, and web development together so each part of the customer journey
          supports the next.
        </p>
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
                        alt=""
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                      <p className="vt-meta-row">{s.tag}</p>
                      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#f5f1e8]/65">{s.body}</p>
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