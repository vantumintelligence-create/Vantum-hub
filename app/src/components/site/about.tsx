import { openCalendlyPopup } from "../../lib/calendly";
import { FOUNDER } from "../../lib/founder";
import {
  AREA_SERVED,
  CALENDLY_PUBLIC_URL,
  CONTACT_EMAIL,
  FOUNDING_YEAR,
  PRICING,
} from "../../lib/site";

// Full about content. Lives only on /about; the homepage carries AboutTeaser
// so the two pages do not duplicate each other.
export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">About</p>
        <h1 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">About Vantum Intelligence</h1>

        <div className="mt-12 max-w-3xl">
          <p className="font-display text-2xl leading-snug tracking-tight text-[#f5f1e8] sm:text-[1.75rem]">
            Vantum Intelligence builds client acquisition systems for remodelers and home-service
            businesses: the ads, the website, the search presence, and the follow-up, built and run
            by one team.
          </p>
          <p className="mt-8 text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Vantum Intelligence was founded in {FOUNDING_YEAR} and works remotely with
            owner-operated remodeling and home-service companies across the {AREA_SERVED}. It sells
            diagnosis before execution, because most growth problems in this trade are path problems
            rather than lead problems: estimates go out and nobody follows up, the company cannot be
            found for the work it wants, or the website gives a prospect no reason to call. Buying
            more leads into a path like that only loses them faster, so the firm fixes the path
            first and turns volume on second.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-[#f5f1e8]/65">
            That order is the whole approach. Volume is the last switch thrown, not the first, and
            nothing is turned up until the follow-up, the landing page and the booking step can
            carry it.
          </p>
        </div>
      </div>

      {/* Founder */}
      <div className="mt-20 border-t border-[#f5f1e8]/10 px-6 pt-16 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">Founder</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {FOUNDER.photo && (
            <div className="lg:col-span-4">
              <img
                src={FOUNDER.photo}
                alt={`${FOUNDER.name}, founder of Vantum Intelligence`}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-sm object-cover"
              />
            </div>
          )}
          <div className={FOUNDER.photo ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-8"}>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f1e8]">
              {FOUNDER.name}
            </h2>
            <p className="vt-meta-row mt-2">{FOUNDER.title}, Vantum Intelligence</p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
              {FOUNDER.name} founded Vantum Intelligence in {FOUNDING_YEAR} after years spent on the
              operating side of growth: building online audiences, running an e-commerce business,
              managing digital campaigns, and building the reporting that let client organizations
              see what their marketing was actually doing. {FOUNDER.name} runs every engagement
              personally, so the strategy and the execution never get handed between firms.
            </p>
            {FOUNDER.linkedin && (
              <a
                href={FOUNDER.linkedin}
                rel="me noopener"
                className="mt-5 inline-block font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#c9a24b] underline-offset-4 hover:underline"
              >
                LinkedIn profile
              </a>
            )}
          </div>
        </div>
      </div>

      {/* How engagements work */}
      <div className="mt-20 border-t border-[#f5f1e8]/10 px-6 pt-16 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">How engagements work</p>
        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#f5f1e8]">
            Diagnosis first, then a monthly retainer
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Every engagement opens with a free 30-minute path review on a screen share: Vantum
            Intelligence walks the company&rsquo;s own path from ad or search result to signed
            contract and shows where inquiries stop moving. If the fit is right, the work is priced
            on that call. Retainers run {PRICING.tiers[0]}, {PRICING.tiers[1]}, or{" "}
            {PRICING.tiers[2]} per month depending on scope, with a {PRICING.minimumMonths}-month
            minimum and a one-time setup fee of {PRICING.setup} for the build. Results are reported
            against booked calls and signed work, not impressions.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-[#f5f1e8]/65">
            Vantum Intelligence can be reached at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#c9a24b] underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            or by{" "}
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={openCalendlyPopup}
              className="text-[#c9a24b] underline-offset-4 hover:underline"
            >
              booking a 30-minute call
            </a>
            . Full details are on the{" "}
            <a href="/contact" className="text-[#c9a24b] underline-offset-4 hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
