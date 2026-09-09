const TILES = [
  {
    label: "Ad Creative",
    image: "/assets/tile-ad-creative.webp",
    headline: "Transform Your Space",
    detail: "Custom. Reliable. Local.",
    pill: "Get A Quote",
  },
  {
    label: "Automation",
    image: "/assets/tile-automation.webp",
    headline: "New Lead — Phone Call Missed",
    detail: "A text goes out automatically, in minutes.",
    pill: "Schedule Now",
  },
  { label: "Lead Systems", image: "/assets/tile-lead-systems.webp" },
  { label: "Strategy", image: "/assets/tile-strategy.webp" },
];

export function ServicesStrip() {
  return (
    <section id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {TILES.map((t) => (
        <a
          key={t.label}
          href="#"
          className="group relative block h-64 overflow-hidden border-t border-[#f5f1e8]/8 sm:h-72 lg:h-80"
        >
          <img
            src={t.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-vt text-xs uppercase tracking-[0.2em] text-[#f5f1e8]">{t.label}</span>
              <svg
                className="h-4 w-4 text-[#f5f1e8] transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </div>
            {t.headline && (
              <div className="mt-3">
                <p className="font-display text-base font-semibold leading-tight text-[#f5f1e8]">{t.headline}</p>
                {t.detail && <p className="mt-1 text-xs text-[#f5f1e8]/70">{t.detail}</p>}
                {t.pill && (
                  <span className="mt-2 inline-block rounded bg-[#c9a24b] px-2.5 py-1 text-[10px] font-semibold text-[#0b0906]">
                    {t.pill}
                  </span>
                )}
              </div>
            )}
          </div>
        </a>
      ))}
    </section>
  );
}
