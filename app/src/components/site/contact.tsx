import { useState, type FormEvent } from "react";

import { submitLead } from "../../lib/api/leads.functions";
import { IconArrowRight } from "./icons";
import { useSectionReveal } from "../../hooks/use-section-reveal";

type Status = "idle" | "loading" | "success" | "error";

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-b border-[#f5f1e8]/10 py-4 first:pt-0 last:border-0"
    >
      <span>
        <span className="block font-mono-vt text-[10px] uppercase tracking-[0.22em] text-[#f5f1e8]/40">
          {label}
        </span>
        <span className="mt-1 block text-base text-[#f5f1e8] transition-colors group-hover:text-[#c9a24b]">
          {value}
        </span>
      </span>
      <IconArrowRight className="h-4 w-4 shrink-0 text-[#f5f1e8]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c9a24b]" />
    </a>
  );
}

export function Contact() {
  const containerRef = useSectionReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitLead({
        data: {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? "") || undefined,
          business: String(form.get("business") ?? "") || undefined,
          message: String(form.get("message") ?? "") || undefined,
        },
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please try again.");
    }
  }

  return (
    <section id="contact" className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div ref={containerRef} className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div data-reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
            Tell us about your business.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            Share a few details and we will follow up with a plan for your ads and automation,
            no obligation. Prefer to skip the form? Reach us directly below.
          </p>

          <div data-reveal className="mt-10 border-t border-[#f5f1e8]/10">
            <ContactRow label="Email" value="hello@vantumintelligence.com" href="mailto:hello@vantumintelligence.com" />
            <ContactRow label="Phone" value="(555) 019-2044" href="tel:+15550192044" />
            <ContactRow label="Hours" value="Mon-Fri, 9am-6pm ET" href="#contact" />
          </div>
        </div>

        <form data-reveal onSubmit={handleSubmit} noValidate>
          {status === "success" ? (
            <div className="rounded-2xl border border-[#c9a24b]/30 bg-[#142019] p-10 text-center">
              <p className="font-display text-lg font-semibold text-[#f5f1e8]">Request received.</p>
              <p className="mt-2 text-sm text-[#f5f1e8]/60">
                We will reach out shortly to schedule your strategy call.
              </p>
            </div>
          ) : (
            <div className="space-y-7">
              <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Business name" name="business" autoComplete="organization" />
              </div>
              <Field
                label="What are you looking to grow?"
                name="message"
                as="textarea"
                placeholder="More leads, faster follow-up, both..."
              />
              {status === "error" && (
                <p className="text-sm text-[#e3a06c]" role="alert">
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#c9a24b] px-7 py-3.5 text-sm font-medium text-[#0d1712] transition-transform active:translate-y-px active:scale-[0.98] disabled:opacity-60"
              >
                <span className="pointer-events-none absolute left-1 top-1 h-2.5 w-2.5 -translate-x-2 -translate-y-2 border-l-2 border-t-2 border-[#0d1712]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#0d1712]/40" />
                <span className="pointer-events-none absolute bottom-1 right-1 h-2.5 w-2.5 translate-x-2 translate-y-2 border-b-2 border-r-2 border-[#0d1712]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#0d1712]/40" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  as?: "input" | "textarea";
}) {
  const shared =
    "peer w-full border-0 border-b border-[#f5f1e8]/20 bg-transparent px-0 py-2 text-sm text-[#f5f1e8] outline-none placeholder:text-[#f5f1e8]/25 focus:border-[#c9a24b]";
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-[#f5f1e8]/70">
        {label}
        {required && <span className="text-[#c9a24b]"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} rows={3} placeholder={placeholder} className={shared} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={shared}
        />
      )}
    </div>
  );
}
