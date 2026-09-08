import { useEffect } from "react";

import { CALENDLY_URL, loadCalendlyScript } from "../../lib/calendly";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

export function CalendlyBadge() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }

    loadCalendlyScript(() => {
      window.Calendly?.initBadgeWidget({
        url: CALENDLY_URL,
        text: "Book a Strategy Call",
        color: "#c9a24b",
        textColor: "#0e0d0c",
        branding: true,
      });
    });
  }, []);

  return null;
}
