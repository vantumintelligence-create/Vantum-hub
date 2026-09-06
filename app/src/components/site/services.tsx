import { IconMegaphone, IconGear, IconArrowRight } from "./icons";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const AD_CHECKLIST = [
  "Static ad design",
  "Video ad production",
  "Ad copy and messaging",
  "Creative testing and iteration",
  "Campaign setup and management",
  "Performance reporting",
];

const AI_CHECKLIST = [
  "Lead response and speed-to-lead systems",
  "Missed-call text-back",
  "Email and SMS sequences",
  "Review generation and reputation management",
  "CRM workflow automation",
  "Database reactivation campaigns",
];

function LearnMore() {
  return (
    <a href="#contact" className="group relative mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#c9a24b]">
      Learn More
      <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#c9a24b] transition-[width] duration-300 ease-out group-hover:w-[calc(100%-1.25rem)]" />
    </a>
  );
}

function AdMockup() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-4 top-4 overflow-hidden rounded-lg border border-[#f5f1e8]/15 bg-[#17241c] shadow-2xl">
        <div className="flex h-6 items-center gap-1.5 bg-[#1c2921] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
        </div>
        <div className="relative aspect-[16/10]">
          <img src="/assets/interior.jpg" alt="Modern home interior used in the ad creative" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1712]/85 via-[#0d1712]/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-3">
            <p className="font-display text-base font-semibold leading-tight text-[#f5f1e8]">Transform Your Space</p>
            <p className="mt-0.5 text-[11px] text-[#f5f1e8]/70">Custom. Reliable. Local.</p>
            <span className="mt-2 inline-block rounded bg-[#c9a24b] px-2.5 py-1 text-[10px] font-semibold text-[#0d1712]">
              Get A Quote
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 left-2 w-28 overflow-hidden rounded-2xl border-4 border-[#1c2921] bg-[#17241c] shadow-2xl">
        <div className="relative aspect-[9/16]">
          <img src="/assets/interior.jpg" alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1712]/90 via-[#0d1712]/25 to-transparent" />
          <div className="absolute inset-x-2 bottom-2">
            <p className="text-[9px] font-semibold leading-tight text-[#f5f1e8]">Quality Work.</p>
            <p className="text-[9px] font-semibold leading-tight text-[#f5f1e8]">Lasting Results.</p>
            <span className="mt-1 inline-block rounded bg-[#c9a24b] px-1.5 py-0.5 text-[7px] font-semibold text-[#0d1712]">
              Get A Quote
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="flex h-full items-center justify-center py-6">
      <div className="w-40 overflow-hidden rounded-[1.4rem] border-4 border-[#1c2921] bg-[#142019] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-[#f5f1e8]/10 px-3 py-2.5">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#c9a24b]/20 text-[10px] text-[#c9a24b]">
            !
          </span>
          <div className="leading-tight">
            <p className="text-[10px] font-semibold text-[#f5f1e8]">New Lead</p>
            <p className="text-[8px] text-[#f5f1e8]/50">Phone Call Missed</p>
          </div>
          <span className="ml-auto text-[7px] text-[#f5f1e8]/35">2m ago</span>
        </div>
        <div className="space-y-2 p-3">
          <p className="rounded-lg rounded-tl-sm bg-[#1c2921] p-2.5 text-[8.5px] leading-snug text-[#f5f1e8]/80">
            Hi! Thanks for reaching out. We&apos;re currently unavailable, but we&apos;ll get back to you
            shortly. In the meantime, would you like to schedule a time that works for you?
          </p>
          <span className="block w-fit rounded bg-[#c9a24b] px-2.5 py-1.5 text-[8px] font-semibold text-[#0d1712]">
            Schedule Now
          </span>
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    icon: IconMegaphone,
    title: "Ad Creation & Management",
    subtitle: "High-performing creative. Real results.",
    checklist: AD_CHECKLIST,
    Mockup: AdMockup,
  },
  {
    icon: IconGear,
    title: "AI Automation",
    subtitle: "Turn more opportunities into revenue, automatically.",
    checklist: AI_CHECKLIST,
    Mockup: AutomationMockup,
  },
];

export function Services() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
              Our Services
            </p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
              Two Powerful Solutions. One Partner.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            We combine high-converting creative with intelligent automation to help your
            business attract, engage, and retain more customers.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {SERVICES.map(({ icon: Icon, title, subtitle, checklist, Mockup }) => (
            <article
              key={title}
              data-reveal
              className="grid grid-cols-1 gap-8 border-t border-[#f5f1e8]/10 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
            >
              <div>
                <Icon className="h-9 w-9 text-[#c9a24b]" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#f5f1e8]">{title}</h3>
                <p className="mt-1.5 text-sm text-[#f5f1e8]/55">{subtitle}</p>
                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#f5f1e8]/75">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a24b]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <LearnMore />
              </div>
              <div className="relative h-64 lg:h-full lg:min-h-72">
                <Mockup />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
