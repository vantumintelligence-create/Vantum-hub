const INDUSTRIES = [
  "Home Services",
  "Medical & Dental",
  "Real Estate",
  "Automotive",
  "Law Firms",
  "E-Commerce",
  "and More",
];

export function Industries() {
  return (
    <section className="border-t border-[#f5f1e8]/8 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5 text-center">
          <span className="font-mono-vt mr-2 text-[11px] uppercase tracking-[0.28em] text-[#f5f1e8]/40">
            We work with
          </span>
          {INDUSTRIES.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[#f5f1e8]/12 px-4 py-1.5 text-sm text-[#f5f1e8]/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
