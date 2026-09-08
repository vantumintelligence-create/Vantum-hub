import { useEffect } from "react";

import { useSectionReveal } from "../../hooks/use-section-reveal";
import { CrackLines } from "./crack-lines";

const CALENDLY_URL =
  "https://calendly.com/vantumintelligence/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=161310&text_color=f5f1e8&primary_color=c9a24b";

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
      <div ref={containerRef} className="relative mx-auto max-w-[900px] px-6 lg:px-14">
        <h2 className="sr-only">Contact</h2>
        <p data-reveal className="mx-auto max-w-sm text-center text-sm leading-relaxed text-[#f5f1e8]/55">
          30 minutes, no pressure, no generic sales script.
        </p>
        <div data-reveal className="mt-8">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
}
