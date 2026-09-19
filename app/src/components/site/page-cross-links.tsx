const LINKS = [
  { to: "/remodeler-marketing", label: "For remodelers" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

type PageSlug = "remodeler-marketing" | "services" | "work" | "about" | "contact";

export function PageCrossLinks({ hide }: { hide?: PageSlug }) {
  const items = LINKS.filter((l) => l.to !== `/${hide}`);

  return (
    <nav
      aria-label="Explore more"
      className="border-t border-[#f5f1e8]/10 px-6 py-14 lg:pl-72 lg:pr-16"
    >
      <p className="vt-chapter-num">Explore More</p>
      <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
        {items.map((item) => (
          <li key={item.to}>
            <a
              href={item.to}
              className="group inline-flex items-center gap-2 font-display text-xl font-medium text-[#f5f1e8] transition-colors hover:text-[#c9a24b]"
            >
              {item.label}
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </a>
          </li>
        ))}
        <li>
          <a
            href="/"
            className="group inline-flex items-center gap-2 font-display text-xl font-medium text-[#f5f1e8]/60 transition-colors hover:text-[#c9a24b]"
          >
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}
