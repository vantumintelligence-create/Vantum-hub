export {};

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
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const CALENDLY_URL =
  "https://calendly.com/vantumintelligence/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=161310&text_color=f5f1e8&primary_color=c9a24b";

const CALENDLY_WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

export function loadCalendlyScript(onReady?: () => void) {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_WIDGET_JS}"]`);
  if (existing) {
    if (window.Calendly) onReady?.();
    else if (onReady) existing.addEventListener("load", onReady);
    return;
  }
  const script = document.createElement("script");
  script.src = CALENDLY_WIDGET_JS;
  script.async = true;
  if (onReady) script.addEventListener("load", onReady);
  document.body.appendChild(script);
}

export function openCalendlyPopup(event: { preventDefault: () => void }) {
  event.preventDefault();
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    loadCalendlyScript(() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }));
  }
}
