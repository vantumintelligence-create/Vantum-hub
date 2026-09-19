import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { CONTACT_EMAIL, ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID, breadcrumb } from "../lib/site";

const PAGE_URL = `${SITE_URL}/privacy`;
const TITLE = "Privacy Policy — Vantum Intelligence";
const DESCRIPTION =
  "How Vantum Intelligence collects, uses and protects information from vantumintelligence.com and go.vantumintelligence.com, including our text message and data sharing position.";

// One date per page. The display string is what readers see; the ISO form is
// the same day in the shape schema.org expects. Change both together.
const LAST_UPDATED = "September 17, 2026";
const LAST_UPDATED_ISO = "2026-09-17";

const LEGAL_NAME = "Vantum Intelligence LLC";
const EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#f5f1e8]">{children}</strong>;
}

function MailLink() {
  return (
    <a
      href={EMAIL_HREF}
      className="text-[#c9a24b] underline decoration-[#c9a24b]/40 underline-offset-4 transition-colors hover:text-[#e3bd6c]"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

type Block = { kind: "p"; body: ReactNode } | { kind: "ul"; items: ReactNode[] };
type Section = { id: string; heading: string; blocks: Block[] };

const SECTIONS: Section[] = [
  {
    id: "what-we-collect",
    heading: "What we collect",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            <Strong>What you give us.</Strong> When you request a path review, we collect your
            business website, first name, mobile number, and email address, along with your answers
            to our questions about revenue, your team, and where your customers come from. If you
            use the estimate calculator on our landing page, the numbers you entered are sent with
            your request. When you book a time, we collect the booking details.
          </>
        ),
      },
      {
        kind: "p",
        body: (
          <>
            <Strong>What is collected automatically.</Strong> The page address you visited, the time
            of your request, and advertising tags in the link that brought you here (UTM parameters
            and ad click identifiers). Our hosting and analytics providers also receive standard
            technical data such as IP address, browser, and device type.
          </>
        ),
      },
      {
        kind: "p",
        body: (
          <>
            <Strong>Cookies and pixels.</Strong> We use the Meta Pixel to measure how our ads
            perform and to show our ads to people who have visited this site. It sets cookies and
            reports page views and completed requests to Meta. Fonts are loaded from Google Fonts,
            which receives your IP address when the page loads.
          </>
        ),
      },
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use it",
    blocks: [
      {
        kind: "ul",
        items: [
          "To prepare for and carry out your review, and to send you what we find.",
          "To confirm and remind you about a booked time by email, and by text if you agreed to texts.",
          "To reply when you contact us.",
          "To measure and improve our pages and advertising.",
          "To meet legal obligations and protect against misuse.",
        ],
      },
    ],
  },
  {
    id: "text-messages",
    heading: "Text messages",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            If you tick the text message box on the review form, we text you about the review you
            requested: a confirmation and reminders for your booked time. Message frequency varies
            with your booking. Message and data rates may apply. Reply <Strong>STOP</Strong> to end
            texts at any time, or <Strong>HELP</Strong> for help. Consent to receive texts is not a
            condition of buying anything. You must be 18 years of age or older to opt in to text
            messages.
          </>
        ),
      },
      {
        kind: "p",
        body: (
          <>
            <Strong>
              We do not share mobile numbers or text messaging consent with third parties or
              affiliates for their marketing or promotional purposes.
            </Strong>{" "}
            Text messaging originator opt-in data and consent are not shared with any third party,
            except the providers that deliver the messages on our behalf.
          </>
        ),
      },
    ],
  },
  {
    id: "who-we-share-it-with",
    heading: "Who we share it with",
    blocks: [
      { kind: "p", body: <>We do not sell your personal information. We share it only with:</> },
      {
        kind: "ul",
        items: [
          <>
            <Strong>Service providers</Strong> that run our customer records, scheduling, email,
            text delivery, and site hosting, under agreements that limit them to working on our
            behalf.
          </>,
          <>
            <Strong>Meta</Strong>, through the pixel described above, for ad measurement and
            advertising.
          </>,
          <>
            <Strong>Authorities or other parties</Strong> when the law requires it, or to protect
            our rights, our clients, or the public.
          </>,
          <>
            <Strong>A successor</Strong>, if the business is sold or merged, under the terms of this
            policy.
          </>,
        ],
      },
    ],
  },
  {
    id: "how-long-we-keep-it",
    heading: "How long we keep it",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            We keep review requests and related messages for as long as we have a working
            relationship with you, and up to 24 months after the last contact, unless the law
            requires longer. You can ask us to delete your information sooner.
          </>
        ),
      },
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices",
    blocks: [
      {
        kind: "ul",
        items: [
          <>
            <Strong>Texts:</Strong> reply STOP.
          </>,
          <>
            <Strong>Email:</Strong> use the unsubscribe link, or email us.
          </>,
          <>
            <Strong>Access, correction, deletion:</Strong> email <MailLink /> and we will act on
            your request within 30 days. We will not treat you differently for asking.
          </>,
          <>
            <Strong>Ad tracking:</Strong> you can limit how Meta uses your activity in your Facebook
            or Instagram ad settings, and you can block cookies in your browser.
          </>,
        ],
      },
      {
        kind: "p",
        body: (
          <>
            Depending on where you live, state law may give you additional rights over your personal
            information. We honor those requests at the same address.
          </>
        ),
      },
    ],
  },
  {
    id: "security",
    heading: "Security",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            We limit access to your information to the people and providers who need it, and we use
            providers that encrypt data in transit. No system is perfectly secure, and we cannot
            guarantee that it is.
          </>
        ),
      },
    ],
  },
  {
    id: "age-requirement",
    heading: "Age requirement (18+)",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            This site and our text messaging program are for business owners who are 18 years of age
            or older. You must be at least 18 to request a review or to opt in to text messages. We
            do not knowingly collect information from anyone under 18, and if we learn that we have,
            we delete it.
          </>
        ),
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            If we change this policy, we will post the new version here and update the effective
            date. Material changes to how we use information you already gave us will not apply to
            that information without your consent.
          </>
        ),
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            {LEGAL_NAME}
            <br />
            <MailLink />
          </>
        ),
      },
    ],
  },
];

// No Organization or WebSite node here: both are defined once on the homepage
// and referenced by @id, so the entity is stated in exactly one place.
const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      dateModified: LAST_UPDATED_ISO,
      inLanguage: "en-US",
    },
    breadcrumb("/privacy", "Privacy Policy"),
  ],
});

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

const REVEAL_DELAYS = ["vt-reveal-1", "vt-reveal-2", "vt-reveal-3", "vt-reveal-4"];

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <StructuredData json={SCHEMA} />
      <SiteNav />
      <main>
        <div className="px-6 pt-32 lg:pl-72 lg:pr-16 lg:pt-24" />

        <section className="border-t border-[#f5f1e8]/10 px-6 py-24 lg:pl-72 lg:pr-16 lg:py-32">
          <header>
            <p className="vt-chapter-num vt-reveal vt-reveal-1">Legal</p>
            <h1 className="vt-display-xl vt-reveal vt-reveal-2 mt-8 max-w-4xl text-[#f5f1e8]">
              Privacy Policy
            </h1>
            <p className="vt-meta-row vt-reveal vt-reveal-3 mt-6">
              Effective {LAST_UPDATED} · Last updated {LAST_UPDATED}
            </p>
            <p className="vt-reveal vt-reveal-4 mt-10 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
              This policy explains what {LEGAL_NAME} (“{SITE_NAME},” “we,” “us”) collects through
              vantumintelligence.com and go.vantumintelligence.com, what we do with it, and the
              choices you have. It is written to be read.
            </p>
          </header>

          <nav
            aria-label="Sections of this policy"
            className="vt-reveal vt-reveal-4 mt-14 max-w-2xl border-y border-[#f5f1e8]/10 py-6"
          >
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-20">
            {SECTIONS.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className={`vt-reveal ${REVEAL_DELAYS[Math.min(i, REVEAL_DELAYS.length - 1)]} scroll-mt-28 border-t border-[#f5f1e8]/10 pt-10 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-12 lg:gap-10 lg:pt-12 ${i > 0 ? "mt-14" : ""}`}
              >
                <div className="lg:col-span-4">
                  <p className="vt-chapter-num">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-display text-xl font-medium tracking-tight text-[#f5f1e8]">
                    {section.heading}
                  </h2>
                </div>

                <div className="mt-6 max-w-2xl lg:col-span-8 lg:mt-0">
                  {section.blocks.map((block, bi) =>
                    block.kind === "p" ? (
                      <p
                        key={bi}
                        className={`text-[15px] leading-relaxed text-[#f5f1e8]/65 ${bi > 0 ? "mt-6" : ""}`}
                      >
                        {block.body}
                      </p>
                    ) : (
                      <ul
                        key={bi}
                        className={`list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#f5f1e8]/65 marker:text-[#c9a24b]/60 ${bi > 0 ? "mt-6" : ""}`}
                      >
                        {block.items.map((item, ii) => (
                          <li key={ii}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>

        <PageCrossLinks />
      </main>
      <Footer />
    </div>
  );
}
