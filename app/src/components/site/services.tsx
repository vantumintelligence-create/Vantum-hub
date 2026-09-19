// The five services, stated once. `summary` is the one-line teaser used on the
// homepage; `sections` is the long-form copy on /services. Each long-form
// block is written to stand on its own: it names the service and Vantum
// Intelligence in the first sentence, gives one concrete example, and carries
// at least one number, so a search engine or an AI answer can quote it
// without the surrounding page.

export type Service = {
  slug: string;
  title: string;
  tag: string;
  question: string;
  summary: string;
  sections: string[];
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "strategy-planning",
    title: "Strategy & Planning",
    tag: "Customer research · Positioning · Marketing planning",
    question: "What does strategy and planning include?",
    summary:
      "A diagnosis of the offer, the customers, the competition, and the current numbers, delivered as an ordered plan.",
    sections: [
      "Strategy and planning at Vantum Intelligence is the diagnostic that precedes every other service: a review of the offer, the customers, the competition, and the current performance of a remodeling or home-service business, delivered as an ordered list of what to fix first. The work starts with a free 30-minute path review that walks the company's own path from ad or search result to signed contract and shows where inquiries stop moving. The first thing it looks for is the gap after the estimate goes out: four estimates sent and one signed, with no pricing problem behind it.",
      "The written plan that follows ranks each recommendation by expected effect and by cost, states the reasoning behind it, and sequences the work to fit the budget and the staff the company actually has. You get it in writing, and we review it against the numbers every month.",
    ],
    image: "/assets/tile-strategy-planning.webp",
    alt: "Strategy and marketing planning process at Vantum Intelligence",
  },
  {
    slug: "advertising-creative",
    title: "Advertising & Creative",
    tag: "Static and video advertising · Campaign management · Creative testing",
    question: "How does Vantum Intelligence run advertising?",
    summary:
      "Campaign concepts, copy, and static and video ads, managed against lead quality rather than impressions.",
    sections: [
      "Advertising and creative at Vantum Intelligence covers the concept, the copy, and the production of static and short-form video ads for remodelers and home-service companies, plus the management of the campaigns they run in on Meta and Google. Ad accounts stay owned by the client. A campaign for a remodeler, for example, opens with a direct call-out to the trade, shows the finished work, and sends the viewer to a page that asks two qualifying questions before it offers a call, so the estimate calendar fills with the right projects.",
      "Every campaign is judged on lead quality and on what the sales conversation reports back, not on clicks. Each week the ads are reviewed against booked calls and signed work, and the creative is adjusted, tested, or retired on that evidence. Vantum Intelligence does not turn up volume until the path behind the ad can carry it.",
    ],
    image: "/assets/tile-ad-creative.webp",
    alt: "Ad creative example from a Vantum Intelligence advertising campaign",
  },
  {
    slug: "websites-landing-pages",
    title: "Websites & Landing Pages",
    tag: "Business websites · Landing pages · Booking and inquiry forms",
    question: "Does Vantum Intelligence build websites?",
    summary:
      "Sites and landing pages planned, written, designed, and built around one clear way to inquire or book.",
    sections: [
      "Websites and landing pages at Vantum Intelligence are planned, written, designed, and built as the middle of the client acquisition path: the place a prospect lands after an ad or a search result and decides whether to reach out. For a remodeling company that means the services, the service area, real project examples, and one obvious way to inquire or book, on a page that shows the work before anything else has to load. A landing page built for a paid campaign is narrower still: one offer, one form, one calendar.",
      "The build includes the inquiry and booking forms, the pixel and conversion tracking, and the connection to the follow-up system so that a submitted form is answered automatically rather than waiting in an inbox. Every page ships with its titles, structured data, and canonical URLs in place so the search work that follows has a sound foundation.",
    ],
    image: "/assets/tile-strategy.webp",
    alt: "Website and landing page design built by Vantum Intelligence",
  },
  {
    slug: "search-ai-visibility",
    title: "Search & AI Visibility",
    tag: "Search optimization · Local visibility · Content development",
    question: "What is search and AI visibility (SEO and AEO)?",
    summary:
      "The content, structured data, and crawler configuration that get a business found and quoted by search engines and AI assistants.",
    sections: [
      "Search and AI visibility is the content and technical work that helps both search engines and AI answer engines find, read, and correctly describe a business's website. At Vantum Intelligence this covers five things: the service pages customers actually search for, the questions they ask before hiring, the comparison information they use to choose between companies, the structured data that tells a machine what the business is, and the crawler rules in robots.txt and at the CDN edge. The AEO half matters because assistants such as ChatGPT, Perplexity, and Google AI Overviews answer by quoting self-contained passages rather than listing ten links.",
      "A page can sit on the first page of Google and still never appear in an AI answer if its content cannot be lifted out on its own. Vantum Intelligence audits both surfaces together and fixes passage structure, schema, and crawler access in one pass, the same pass this site went through.",
    ],
    image: "/assets/tile-search-visibility.webp",
    alt: "Search engine and AI visibility optimization work by Vantum Intelligence",
  },
  {
    slug: "automation-follow-up",
    title: "Automation & Follow-Up",
    tag: "Inquiry response · Customer follow-up · CRM workflows",
    question: "What does the automation and follow-up service handle?",
    summary:
      "Inquiry response, estimate follow-up, and customer records handled automatically, with a person stepping in when it matters.",
    sections: [
      "Automation and follow-up at Vantum Intelligence is the system that answers every inquiry, chases every open estimate, and keeps the customer record current without the owner or the office manager doing it by hand. A new inquiry gets a reply by text and email the moment it lands, and a call is booked from that reply. An estimate that has been out for 3 days without an answer triggers a follow-up sequence, and one that has been out for 10 days triggers a personal call.",
      "The messages, the timing, and the handoffs are agreed with the client before anything goes live, so the system reflects how the crew actually works and never sends something the owner would not say. Vantum Intelligence builds and hosts these workflows in its own systems, so the client has nothing to install or maintain.",
    ],
    image: "/assets/tile-automation.webp",
    alt: "Inquiry response and customer follow-up automation built by Vantum Intelligence",
  },
];

// Homepage: one line per service, each linking to its section on /services.
export function ServicesIndex() {
  return (
    <section id="services" className="border-t border-[#f5f1e8]/10 py-24 lg:py-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">Services</p>
        <h2 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">Five services, one path</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
          Each service fixes one stretch of the path from first click to signed contract. Vantum
          Intelligence diagnoses which stretch is losing work, then builds only what that stretch
          needs.
        </p>
      </div>

      <ol className="mt-14 border-y border-[#f5f1e8]/10">
        {SERVICES.map((s, i) => (
          <li key={s.slug} className={i > 0 ? "border-t border-[#f5f1e8]/10" : ""}>
            <a
              href={`/services#${s.slug}`}
              className="group grid gap-3 px-6 py-8 transition-colors hover:bg-[#f5f1e8]/[0.03] lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:pl-72 lg:pr-16"
            >
              <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-[#f5f1e8] transition-colors group-hover:text-[#c9a24b] sm:text-2xl lg:col-span-4">
                {s.title}
              </h3>
              <span className="text-[15px] leading-relaxed text-[#f5f1e8]/65 lg:col-span-7">
                {s.summary}
              </span>
              <span
                aria-hidden="true"
                className="hidden font-mono-vt text-[10px] uppercase tracking-[0.18em] text-[#f5f1e8]/40 transition-colors group-hover:text-[#c9a24b] lg:col-span-1 lg:block lg:text-right"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

// /services: the long-form blocks, one H2 per service.
export function ServiceSections() {
  return (
    <div className="border-t border-[#f5f1e8]/10">
      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          aria-labelledby={`${s.slug}-heading`}
          className={`scroll-mt-28 px-6 py-16 lg:pl-72 lg:pr-16 lg:py-20 ${
            i > 0 ? "border-t border-[#f5f1e8]/10" : ""
          }`}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="vt-chapter-num">{String(i + 1).padStart(2, "0")}</p>
              <h2
                id={`${s.slug}-heading`}
                className="mt-4 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-[#f5f1e8] sm:text-3xl"
              >
                {s.title}
              </h2>
              <p className="vt-meta-row mt-5">{s.tag}</p>
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="mt-8 aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h3 className="font-display text-lg font-medium text-[#c9a24b]">{s.question}</h3>
              {s.sections.map((paragraph, j) => (
                <p
                  key={j}
                  className={`text-[15px] leading-relaxed text-[#f5f1e8]/72 ${j === 0 ? "mt-4" : "mt-5"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
