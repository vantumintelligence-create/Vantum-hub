// Founder facts, deliberately kept OUT of lib/site.ts.
//
// site.ts is imported by components that render on every page, so anything in
// it lands in the shared client bundle that every visitor downloads. Putting
// the founder's name there published it site-wide even though it was only
// rendered on /about. This module is imported by the /about route and the
// About component only, so the name ships in the /about chunk and nowhere
// else. Do not import it from site.ts, the nav, the footer, or any component
// used on another page.

import { FOUNDER_ID, ORG_ID, SITE_URL } from "./site";

export const FOUNDER = {
  name: "Curtis Phillips",
  title: "Founder",
  // Set to a path under /assets once a real headshot exists.
  photo: "",
  linkedin: "",
};

// The Person node for /about's JSON-LD. Empty fields are omitted rather than
// published as blanks.
export function founderNode() {
  const sameAs = [FOUNDER.linkedin].filter(Boolean);
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.title,
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/about`,
    ...(FOUNDER.photo ? { image: `${SITE_URL}${FOUNDER.photo}` } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}
