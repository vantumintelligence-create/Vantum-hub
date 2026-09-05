import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Hero } from "../components/site/hero";
import { TrustStrip } from "../components/site/trust-strip";
import { Services } from "../components/site/services";
import { Process } from "../components/site/process";
import { Results } from "../components/site/results";
import { About } from "../components/site/about";
import { Industries } from "../components/site/industries";
import { CtaBand } from "../components/site/cta-band";
import { Contact } from "../components/site/contact";
import { Footer } from "../components/site/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Results />
        <About />
        <Industries />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
