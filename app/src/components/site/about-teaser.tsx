import { FOUNDING_YEAR } from "../../lib/site";

// Homepage teaser. Deliberately a separate module from about.tsx: that file
// imports lib/founder.ts, so importing the teaser from there would pull the
// founder chunk onto the homepage.
export function AboutTeaser() {
  return (
    <section id="about" className="border-t border-[#f5f1e8]/10 py-24 lg:py-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">About</p>
        <h2 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">Who is behind it</h2>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
          Founded in {FOUNDING_YEAR}, Vantum Intelligence is built on operating experience rather
          than agency process: the strategy and the work that follows it stay under one roof.
        </p>
        <a
          href="/about"
          className="mt-8 inline-flex items-center gap-2 font-display text-xl font-medium text-[#f5f1e8] transition-colors hover:text-[#c9a24b]"
        >
          Read about the firm
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
      </div>
    </section>
  );
}
