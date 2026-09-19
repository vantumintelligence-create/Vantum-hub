import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { PageCrossLinks } from "../components/site/page-cross-links";
import { Footer } from "../components/site/footer";
import { StructuredData } from "../components/site/structured-data";
import { CONTACT_EMAIL, ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID, breadcrumb } from "../lib/site";

const PAGE_URL = `${SITE_URL}/terms`;
const TITLE = "Terms of Use — Vantum Intelligence";
const DESCRIPTION =
  "The terms that govern use of vantumintelligence.com and go.vantumintelligence.com, the free path review, text messages, and the limits of what Vantum Intelligence promises.";

// One date per page. The display string is what readers see; the ISO form is
// the same day in the shape schema.org expects. Change both together.
const LAST_UPDATED = "September 17, 2026";
const LAST_UPDATED_ISO = "2026-09-17";

const LEGAL_NAME = "Vantum Intelligence LLC";
const GOVERNING_STATE = "Maryland";
const EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#f5f1e8]">{children}</strong>;
}

const LINK_CLASS =
  "text-[#c9a24b] underline decoration-[#c9a24b]/40 underline-offset-4 transition-colors hover:text-[#e3bd6c]";

function MailLink() {
  return (
    <a href={EMAIL_HREF} className={LINK_CLASS}>
      {CONTACT_EMAIL}
    </a>
  );
}

function PrivacyLink({ children }: { children: ReactNode }) {
  return (
    <a href="/privacy" className={LINK_CLASS}>
      {children}
    </a>
  );
}

type Block = { kind: "p"; body: ReactNode } | { kind: "ul"; items: ReactNode[] };
type Section = { id: string; heading: string; blocks: Block[] };

const SECTIONS: Section[] = [
  {
    id: "the-path-review",
    heading: "The path review",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            The review is a free 30-minute screen-share call in which we look at how customers find,
            evaluate, and contact your business, and tell you what we see. It is offered at our
            discretion. We may decline or reschedule a request, including when a business is outside
            the size we serve.
          </>
        ),
      },
      {
        kind: "p",
        body: (
          <>
            What we share in a review is our professional opinion based on what we can see from the
            outside at the time. It is general business information, not legal, financial, or tax
            advice, and it is not a promise of any result.
          </>
        ),
      },
    ],
  },
  {
    id: "no-guarantee-of-results",
    heading: "No guarantee of results",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            Any figures, examples, or estimates on the site, including anything produced by the
            on-page calculator, are illustrations based on the numbers you enter or on stated
            assumptions. They are not a forecast or a guarantee of revenue, leads, or sales. Results
            depend on your market, pricing, team, and follow-through.
          </>
        ),
      },
    ],
  },
  {
    id: "paid-services",
    heading: "Paid services",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            Requesting or attending a review does not make you a client and does not obligate you to
            buy anything. Paid work begins only under a separate written agreement signed by both
            sides, and that agreement controls if it conflicts with these terms.
          </>
        ),
      },
    ],
  },
  {
    id: "text-message-terms",
    heading: "Text message terms",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            When you tick the text message box on the review form, you agree to receive text
            messages from {SITE_NAME} about that review: a confirmation and reminders for your
            booked time. Message frequency varies with your booking. Message and data rates may
            apply. Reply <Strong>STOP</Strong> to cancel at any time; you will get one message
            confirming it. Reply <Strong>HELP</Strong> for help, or email <MailLink />. Consent to
            texts is not a condition of any purchase. You must be 18 years of age or older to opt
            in. Carriers are not liable for delayed or undelivered messages. How we handle your
            number is described in our <PrivacyLink>Privacy Policy</PrivacyLink>.
          </>
        ),
      },
    ],
  },
  {
    id: "your-information",
    heading: "Your information",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            You agree to give accurate information and to request a review only for a business you
            own or are authorized to represent. Our use of what you submit is described in the{" "}
            <PrivacyLink>Privacy Policy</PrivacyLink>.
          </>
        ),
      },
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            Do not misuse the site: no attempts to break, overload, or probe it, no automated
            submissions, no false identities, and no copying of its content for a competing service.
          </>
        ),
      },
    ],
  },
  {
    id: "our-content",
    heading: "Our content",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            The text, design, images, and video on the site belong to {SITE_NAME} or its licensors.
            You may view and share links to it. You may not reproduce or republish it without our
            written permission.
          </>
        ),
      },
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-party services",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            The site relies on third-party services, including scheduling and advertising platforms.
            Their own terms and policies apply to your use of them. This site is not part of, or
            endorsed by, Meta Platforms, Inc. or Google LLC.
          </>
        ),
      },
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            The site and the review are provided “as is” and “as available,” without warranties of
            any kind, express or implied, to the fullest extent the law allows.
          </>
        ),
      },
    ],
  },
  {
    id: "limit-of-liability",
    heading: "Limit of liability",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            To the fullest extent the law allows, {SITE_NAME} is not liable for indirect,
            incidental, special, or consequential damages, or for lost profits or revenue, arising
            from your use of the site or the review. Our total liability for any claim relating to
            the site or the free review is limited to one hundred US dollars.
          </>
        ),
      },
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    blocks: [
      {
        kind: "p",
        body: (
          <>
            These terms are governed by the laws of the State of {GOVERNING_STATE}, without regard
            to its conflict-of-law rules. Disputes will be brought in the state or federal courts
            located in {GOVERNING_STATE}, and both sides consent to those courts.
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
            We may update these terms. The new version applies from the effective date shown at the
            top once it is posted here.
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
    breadcrumb("/terms", "Terms of Use"),
  ],
});

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const REVEAL_DELAYS = ["vt-reveal-1", "vt-reveal-2", "vt-reveal-3", "vt-reveal-4"];

function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="vt-meta-row vt-reveal vt-reveal-3 mt-6">
              Effective {LAST_UPDATED} · Last updated {LAST_UPDATED}
            </p>
            <p className="vt-reveal vt-reveal-4 mt-10 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
              These terms cover your use of vantumintelligence.com and go.vantumintelligence.com
              (the “site”) and the free path review offered on it. The site is run by {LEGAL_NAME}{" "}
              (“
              {SITE_NAME},” “we,” “us”). By using the site or requesting a review, you agree to
              these terms. If you do not agree, do not use the site.
            </p>
          </header>

          <nav
            aria-label="Sections of these terms"
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
