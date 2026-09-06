import { LogoMark } from "./logo-mark";
import { IconArrowRight } from "../../components/site/icons";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f5f1e8]/8 bg-[#0d1712]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="shrink-0">
          <LogoMark />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#f5f1e8]/70 transition-colors hover:text-[#f5f1e8]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c9a24b] px-4 py-2.5 text-sm font-medium text-[#0d1712] transition-colors hover:bg-[#e3bd6c]"
        >
          Book a Strategy Call
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}
