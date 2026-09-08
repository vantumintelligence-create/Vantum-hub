const TILES = [
  { label: "Ad Creative", image: "/assets/tile-ad-creative.webp" },
  { label: "Automation", image: "/assets/tile-automation.webp" },
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-6">
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
        </a>
      ))}
    </section>
  );
}
