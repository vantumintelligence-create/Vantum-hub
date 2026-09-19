import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { openCalendlyPopup } from "../lib/calendly";
import {
  AREA_SERVED,
  CALENDLY_PUBLIC_URL,
  FUNNEL_URL,
  ORG_ID,
  PRICING,
  SITE_URL,
  WEBSITE_ID,
  breadcrumb,
  organizationGraph,
} from "../lib/site";

const PAGE_URL = `${SITE_URL}/remodeler-marketing`;
const TITLE = "Marketing Agency for Remodelers | Vantum Intelligence";
const DESCRIPTION =
  "Vantum Intelligence is a marketing agency for home remodelers doing $1M or more a year. It fixes the path from first click to signed contract, then turns lead volume on. Free 30-minute path review.";

const FAQS = [
  {
    q: "What does a marketing agency for remodelers actually do?",
    a: "A marketing agency for remodelers is responsible for everything between a homeowner first hearing about the company and that homeowner signing a contract. At Vantum Intelligence that means five things: the ads that reach homeowners planning a project, the website and landing pages they land on, the search and AI-assistant presence that makes the company findable, the follow-up system that answers every inquiry within minutes, and the strategy work that decides which of those four is worth money this quarter. What is unusual is buying all five in one place; most remodelers end up buying one and owning the other four themselves.",
  },
  {
    q: "Why do I get estimates out and never hear back?",
    a: "Usually because nothing happens after the estimate goes out. A homeowner shopping a remodel is rarely talking to one company, and the decision takes weeks rather than days. Staying in front of them through those weeks is a job, and in most shops it belongs to nobody: the estimator is already on the next site visit and the office is handling schedules. That gap is a path problem rather than a lead problem, and buying more leads only makes it more expensive.",
  },
  {
    q: "How much does marketing for a remodeling company cost?",
    a: `Vantum Intelligence retainers run ${PRICING.tiers[0]}, ${PRICING.tiers[1]}, or ${PRICING.tiers[2]} per month depending on how much of the path is being rebuilt, with a ${PRICING.minimumMonths}-month minimum and a one-time setup fee of ${PRICING.setup} for the build itself. Ad spend is separate and is paid to Meta or Google directly from the remodeler's own accounts. The scope and the price are named on the first call rather than after a proposal cycle.`,
  },
  {
    q: "How is this different from buying leads from a lead service?",
    a: "A lead service is paid when it delivers a lead, so its job ends at delivery. Whether that lead was answered in four minutes or four days, whether it landed on a page that explained anything, and whether anyone followed up after the estimate all sit outside what it is paid for, and the same lead is often sold to more than one company. Vantum Intelligence is paid to make the path work, so it will not turn volume on until the path can carry it.",
  },
  {
    q: "Do I have to give up control of my ad accounts?",
    a: "No. Ad accounts stay owned by the remodeler and Vantum Intelligence works inside them with delegated access, so the spend history, the pixel data, and the accounts themselves stay with the company if the engagement ends. The follow-up and CRM workflows are built and hosted on Vantum Intelligence's side, so there is nothing for the office to install or maintain.",
  },
  {
    q: "What size remodeling company is this for?",
    a: "The work fits companies doing roughly $1 million a year or more with at least two crews, usually already spending money on a lead service or on ads and not sure what it is buying. Below that, the constraint is normally capacity rather than acquisition, and a retainer at this level is hard to justify. Vantum Intelligence works remotely with companies anywhere in the United States.",
  },
  {
    q: "How quickly does any of this show up in the numbers?",
    a: "Follow-up changes show up fastest, usually inside the first month, because they act on inquiries the company is already getting. Website and landing page work shows up as soon as the next campaign runs against it. Search and AI visibility is the slow one: expect the first movement at around 6 to 12 weeks and the real effect over two or three quarters. The plan sequences the fast items first for that reason.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    ...organizationGraph(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
    },
    breadcrumb("/remodeler-marketing", "Marketing for remodelers"),
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: "Marketing for home remodelers",
      serviceType: "Marketing agency services for home remodeling companies",
      description: DESCRIPTION,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: AREA_SERVED },
      audience: {
        "@type": "BusinessAudience",
        name: "Home remodeling companies doing $1M or more in annual revenue",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 2500,
          minPrice: 2500,
          maxPrice: 6500,
          priceCurrency: "USD",
          unitCode: "MON",
          description: `Monthly retainer from ${PRICING.tiers[0]} to ${PRICING.tiers[2]}, ${PRICING.minimumMonths}-month minimum, plus a one-time setup fee of ${PRICING.setup}.`,
        },
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
});

export const Route = createFileRoute("/remodeler-marketing")({
  head: () => ({
    links: [{ rel: "canonical", href: PAGE_URL }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
    ],
  }),
  component: RemodelerMarketingPage,
});

const STATIONS = [
  {
    n: "01",
    title: "Get found",
    body: "A homeowner planning a kitchen starts with a search, a neighbor, or a feed. If the company is not present in those three places for the work it actually wants, the project is decided before it ever hears about it.",
  },
  {
    n: "02",
    title: "Get understood",
    body: "The page has a few seconds to show the kind of work, the service area, and a reason to trust it. A slideshow of finished kitchens answers none of the three.",
  },
  {
    n: "03",
    title: "Get the inquiry",
    body: "A long form asking for project details filters people out, and the busiest homeowner with the biggest project goes first. One question and a calendar asks less and gets more.",
  },
  {
    n: "04",
    title: "Answer fast",
    body: "They almost certainly contacted someone else the same afternoon. Answering while they are still looking is the cheapest change most shops can make.",
  },
  {
    n: "05",
    title: "Follow up until there is an answer",
    body: "The estimate goes out and the decision takes weeks. Nobody owns those weeks, so the company that keeps showing up wins work it never had to bid harder for.",
  },
];

function RemodelerMarketingPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24">
          <p className="vt-chapter-num">Marketing for remodelers</p>
          <h1 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">
            You don&rsquo;t have a leads problem. You have a path problem.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/72">
            Vantum Intelligence is a marketing agency for home remodelers doing $1 million a year or
            more, built to own the whole path rather than one slice of it. It works on the path a
            homeowner travels from the first time they hear about your company to the day they sign,
            finds the stretch where the work is being lost, and rebuilds it. Only then does it turn
            lead volume up. The firm works remotely with remodeling companies across the{" "}
            {AREA_SERVED}.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={FUNNEL_URL}
              className="inline-flex items-center gap-2.5 rounded-md border border-[#c9a24b]/60 bg-[#c9a24b] px-6 py-3.5 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#0b0906] transition-colors hover:bg-[#e3bd6c]"
            >
              Book my free 30-minute path review
              <svg
                className="h-3 w-3"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </a>
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={openCalendlyPopup}
              className="font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#f5f1e8]/60 underline-offset-4 transition-colors hover:text-[#c9a24b] hover:underline"
            >
              Or pick a time directly
            </a>
          </div>
        </section>

        {/* The symptoms */}
        <section
          aria-labelledby="symptoms-heading"
          className="mt-24 border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20"
        >
          <h2
            id="symptoms-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl"
          >
            Three symptoms, one cause
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/72">
            Three complaints come up again and again in this trade, and underneath all three is the
            same thing: the path from interest to signature has a gap in it, and every lead poured
            in at the top falls through it.
          </p>
          <dl className="mt-10 max-w-3xl divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
            <div className="py-7">
              <dt className="font-display text-lg font-medium text-[#c9a24b]">
                Four estimates out, one back
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                The crew is quoting plenty of work and closing a fraction of it. The instinct is to
                blame pricing. Usually the estimate went out, the homeowner went quiet, and nobody
                in the company had the job of making the next move. The company that calls twice
                over those three weeks tends to win it at the same price.
              </dd>
            </div>
            <div className="py-7">
              <dt className="font-display text-lg font-medium text-[#c9a24b]">
                Invisible for the work you want
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                The company ranks for its own name and nothing else, so every homeowner who searches
                for the service rather than the brand meets somebody else first. The same gap now
                shows up inside ChatGPT and Google&rsquo;s AI answers, which quote pages that state
                plainly what a company does, where it works, and what it costs.
              </dd>
            </div>
            <div className="py-7">
              <dt className="font-display text-lg font-medium text-[#c9a24b]">
                Paying for leads and not sure what you&rsquo;re buying
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                The invoice is predictable and the results are not. The lead service is paid when it
                hands over a name, so nothing it is paid for depends on that name turning into a
                contract. More volume into an unfixed path just produces more names.
              </dd>
            </div>
          </dl>
        </section>

        {/* The path */}
        <section
          aria-labelledby="path-heading"
          className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20"
        >
          <p className="vt-chapter-num">The path</p>
          <h2
            id="path-heading"
            className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl"
          >
            Five stations between a homeowner and a signed contract
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/72">
            Every remodeling company has the same five stations. Work is lost at whichever one is
            weakest, and the path review walks your own five to say which is costing the most.
          </p>
          <ol className="mt-10 grid gap-px overflow-hidden border border-[#f5f1e8]/10 bg-[#f5f1e8]/10 lg:grid-cols-5">
            {STATIONS.map((s) => (
              <li key={s.n} className="bg-[#0b0906] p-6">
                <p className="font-mono-vt text-[11px] tracking-[0.18em] text-[#c9a24b]">{s.n}</p>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-[#f5f1e8]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#f5f1e8]/60">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* What gets built */}
        <section
          aria-labelledby="build-heading"
          className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20"
        >
          <p className="vt-chapter-num">What gets built</p>
          <h2
            id="build-heading"
            className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl"
          >
            The order the work happens in
          </h2>
          <div className="mt-10 max-w-3xl space-y-8">
            <div>
              <h3 className="font-display text-lg font-medium text-[#c9a24b]">
                First: the follow-up system, because it acts on leads you already have
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                Every inquiry gets an answer by text and email the moment it arrives, and that
                answer offers a time instead of asking the homeowner to call back. An estimate still
                unanswered after 3 days triggers a written follow-up; at 10 days it puts a personal
                call on your estimator&rsquo;s list. The messages and the timing are agreed with you
                before anything sends, so nothing goes out that you would not say. This part acts on
                inquiries the company is already generating and already paying for, which is why it
                moves first.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-[#c9a24b]">
                Second: the page the homeowner lands on
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                A remodeler&rsquo;s landing page has to answer three questions above the fold: what
                kind of work, in what area, and why this company. Vantum Intelligence writes,
                designs, and builds it, builds it to show the work before anything else has to load,
                replaces the long project-details form with one or two qualifying questions and a
                calendar, and wires the booking straight into the follow-up system. Campaign traffic
                gets its own narrow page rather than the homepage.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-[#c9a24b]">
                Third: being found, in search and in AI answers
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                Service pages for the projects the company actually wants, written to be quoted
                rather than skimmed, plus the structured data that tells a machine what the business
                is, the local signals that put it in the map results, and the crawler configuration
                that lets AI assistants read it at all. This is the slow one: expect first movement
                at around 6 to 12 weeks and the real effect over two or three quarters. That is why
                it sits third in the order.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-[#c9a24b]">
                Fourth, and only then: volume
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">
                Ads on Meta and Google, with creative produced in-house: short-form video of real
                finished work, before-and-after pieces, and static ads written to call out the trade
                and the area directly. Campaigns are reviewed every week against booked calls and
                signed work rather than clicks or impressions. The ad accounts stay yours. By the
                time this switch is thrown, everything the traffic hits has already been rebuilt.
              </p>
            </div>
          </div>
        </section>

        {/* Proof and pricing */}
        <section
          aria-labelledby="pricing-heading"
          className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20"
        >
          <p className="vt-chapter-num">What it costs</p>
          <h2
            id="pricing-heading"
            className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl"
          >
            Priced on the first call, not after a proposal cycle
          </h2>
          <div className="mt-10 grid max-w-4xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[15px] leading-relaxed text-[#f5f1e8]/72">
                Retainers run {PRICING.tiers[0]}, {PRICING.tiers[1]}, or {PRICING.tiers[2]} per
                month depending on how much of the path is being rebuilt, with a{" "}
                {PRICING.minimumMonths}-month minimum and a one-time setup fee of {PRICING.setup}{" "}
                for the build. Ad spend is separate and paid directly to Meta or Google out of your
                own accounts, so you always see exactly what the media costs. Everything is reported
                against booked calls and signed work.
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-[#f5f1e8]/72">
                Vantum Intelligence is a young firm and is taking on its first remodeling clients
                now, which is the honest reason there are no remodeling case studies on this page
                yet. There is{" "}
                <a href="/work" className="text-[#c9a24b] underline-offset-4 hover:underline">
                  ad creative and campaign work
                </a>{" "}
                you can watch, and the free path review shows you the actual method on your own
                business before any money changes hands. Published results will appear here as
                clients agree to them, with dates and numbers attached.
              </p>
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-[#f5f1e8]/12 p-7">
                <p className="font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b]">
                  Good fit
                </p>
                <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-[#f5f1e8]/65">
                  <li>$1M or more in annual revenue</li>
                  <li>Two or more crews</li>
                  <li>Already paying for leads or running ads</li>
                  <li>Someone who can answer a booked call</li>
                  <li>Anywhere in the {AREA_SERVED}</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="border-t border-[#f5f1e8]/10 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20"
        >
          <p className="vt-chapter-num">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl"
          >
            Questions remodelers ask
          </h2>
          <div className="mt-10 max-w-3xl divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
            {FAQS.map((item) => (
              <article key={item.q} className="py-7">
                <h3 className="font-display text-lg font-medium text-[#f5f1e8]">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#f5f1e8]/65">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Close */}
        <section className="border-t border-[#f5f1e8]/10 px-6 py-20 lg:pl-72 lg:pr-16">
          <h2 className="vt-display-xl max-w-3xl text-[#f5f1e8]">
            Start with the review, not the retainer
          </h2>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/72">
            Thirty minutes on a screen share. Vantum Intelligence walks your own path from ad or
            search result to signed contract, shows you where the work is being lost, and tells you
            what it would fix first. You leave with that whether or not you hire the firm.
          </p>
          <a
            href={FUNNEL_URL}
            className="mt-9 inline-flex items-center gap-2.5 rounded-md border border-[#c9a24b]/60 bg-[#c9a24b] px-6 py-3.5 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#0b0906] transition-colors hover:bg-[#e3bd6c]"
          >
            Book my free 30-minute path review
            <svg
              className="h-3 w-3"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M2 8h11M8 3l5 5-5 5" />
            </svg>
          </a>
        </section>

        <PageCrossLinks hide="remodeler-marketing" />
      </main>
      <Footer />
    </div>
  );
}
