import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "../components/site/nav";
import { Opening } from "../components/site/opening";
import { Services } from "../components/site/services";
import { About } from "../components/site/about";
import { Footer } from "../components/site/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-[#0b0906]">
      <SiteNav />
      <main>
        <Opening />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}
