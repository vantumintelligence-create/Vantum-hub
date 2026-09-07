import { LogoMark } from "./logo-mark";

const LINKS = [
  { href: "#attention", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f5f1e8]/8 bg-[#0d1712]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-14">
        <a href="#top" className="shrink-0">
          <LogoMark />
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono-vt text-xs uppercase tracking-[0.16em] text-[#f5f1e8]/60 transition-colors hover:text-[#f5f1e8]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="vt-cta group shrink-0">
          Start a Project
          <span className="vt-cta-rule hidden sm:block" />
        </a>
      </nav>
    </header>
  );
}
