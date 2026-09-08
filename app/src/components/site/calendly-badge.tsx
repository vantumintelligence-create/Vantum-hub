import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

export function CalendlyBadge() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }

    function initBadge() {
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/vantumintelligence/30min",
        text: "Book a Strategy Call",
        color: "#c9a24b",
        textColor: "#0e0d0c",
        branding: true,
      });
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_JS}"]`);
    if (existing) {
      if (window.Calendly) initBadge();
      else existing.addEventListener("load", initBadge);
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    script.addEventListener("load", initBadge);
    document.body.appendChild(script);
  }, []);

  return null;
}
