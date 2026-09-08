import { useEffect } from "react";

import { useSectionReveal } from "../../hooks/use-section-reveal";
import { CrackLines } from "./crack-lines";

const CALENDLY_URL =
  "https://calendly.com/vantumintelligence/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=161310&text_color=f5f1e8&primary_color=c9a24b";

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-b border-[#f5f1e8]/10 py-4 first:pt-0 last:border-0"
    >
      <span>
        <span className="block font-mono-vt text-[10px] uppercase tracking-[0.22em] text-[#f5f1e8]/40">
          {label}
        </span>
        <span className="mt-1 block text-base text-[#f5f1e8] transition-colors group-hover:text-[#c9a24b]">
          {value}
        </span>
      </span>
    </a>
  );
}

function CalendlyWidget() {
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-[#f5f1e8]/10 bg-[#161310]">
      <div
        className="calendly-inline-widget min-w-[280px]"
        data-url={CALENDLY_URL}
        style={{ height: "700px" }}
      />
    </div>
  );
}

export function Contact() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#f5f1e8]/8 py-20 lg:py-24">
      <CrackLines variant={2} />
      <div
        ref={containerRef}
        className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14"
      >
        <div data-reveal>
          <h2 className="vt-display-xl max-w-[14ch] text-[#f5f1e8]">Pick a time that works.</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            30 minutes, no pressure, no generic sales script.
          </p>

          <div data-reveal className="mt-10 border-t border-[#f5f1e8]/10">
            <ContactRow label="Email" value="hello@vantumintelligence.com" href="mailto:hello@vantumintelligence.com" />
            <ContactRow label="Phone" value="(555) 019-2044" href="tel:+15550192044" />
            <ContactRow label="Hours" value="Mon-Fri, 9am-6pm ET" href="#contact" />
          </div>
        </div>

        <div data-reveal>
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
}
