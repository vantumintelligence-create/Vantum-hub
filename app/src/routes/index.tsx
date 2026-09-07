import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { JourneyIndicator } from "../components/site/journey-indicator";
import { Opening } from "../components/site/opening";
import { ChapterAttention } from "../components/site/chapter-attention";
import { ChapterClick } from "../components/site/chapter-click";
import { ChapterResponse } from "../components/site/chapter-response";
import { ChapterSystem } from "../components/site/chapter-system";
import { Capabilities } from "../components/site/capabilities";
import { SelectedWork } from "../components/site/selected-work";
import { Process } from "../components/site/process";
import { About } from "../components/site/about";
import { FinalCta } from "../components/site/final-cta";
import { Contact } from "../components/site/contact";
import { Footer } from "../components/site/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-[#0e0d0c]">
      <SiteNav />
      <JourneyIndicator />
      <main>
        <Opening />
        <ChapterAttention />
        <ChapterClick />
        <ChapterResponse />
        <ChapterSystem />
        <Capabilities />
        <SelectedWork />
        <Process />
        <About />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
