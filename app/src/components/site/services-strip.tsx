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
        <div key={t.label} className="border-t border-[#f5f1e8]/8">
          <div className="group relative block h-64 overflow-hidden sm:h-72 lg:h-80">
            <img
              src={t.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-6">
              <span className="font-mono-vt text-xs uppercase tracking-[0.2em] text-[#f5f1e8]">{t.label}</span>
            </div>
          </div>

          {t.headline && (
            <div className="px-6 py-6">
              <p className="font-display text-base font-semibold leading-tight text-[#f5f1e8]">{t.headline}</p>
              {t.detail && <p className="mt-1 text-xs text-[#f5f1e8]/60">{t.detail}</p>}
              {t.pill && (
                <span className="mt-3 inline-block rounded bg-[#c9a24b] px-2.5 py-1 text-[10px] font-semibold text-[#0b0906]">
                  {t.pill}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
