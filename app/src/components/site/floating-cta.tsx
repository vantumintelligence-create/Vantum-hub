"use client";

import { useEffect, useState } from "react";

import { loadCalendlyScript, openCalendlyPopup } from "../../lib/calendly";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  // The popup API needs the widget script + stylesheet loaded, even though we
  // no longer use Calendly's own badge widget for the floating button.
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }
    loadCalendlyScript();
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={openCalendlyPopup}
      aria-label="Book a call"
      className={`fixed bottom-4 right-4 z-50 rounded-sm border border-[#c9a24b]/50 bg-black/55 px-4 py-2.5 font-mono-vt text-xs tracking-[0.04em] text-[#c9a24b] backdrop-blur-sm transition-[opacity,transform,border-color] duration-300 ease-out hover:border-[#c9a24b] focus-visible:border-[#c9a24b] focus-visible:outline-none motion-reduce:translate-y-0 motion-reduce:duration-200 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-[13px] ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none"
      }`}
    >
      Book a Call →
    </button>
  );
}
