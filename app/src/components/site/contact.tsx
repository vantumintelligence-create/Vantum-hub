import { useState, type FormEvent } from "react";

import { submitLead } from "../../lib/api/leads.functions";
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
          website: String(form.get("website") ?? ""),
        },
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong sending your request. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div
        ref={containerRef}
        className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14"
      >
        <div data-reveal>
          <h2 className="vt-display-xl max-w-[14ch] text-[#f5f1e8]">
            Tell us what you&apos;re working with.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            A few details now, a real conversation next. No obligation, no generic sales script.
          </p>

          <div data-reveal className="mt-10 border-t border-[#f5f1e8]/10">
            <ContactRow label="Email" value="hello@vantumintelligence.com" href="mailto:hello@vantumintelligence.com" />
            <ContactRow label="Phone" value="(555) 019-2044" href="tel:+15550192044" />
            <ContactRow label="Hours" value="Mon-Fri, 9am-6pm ET" href="#contact" />
          </div>
        </div>

        <form data-reveal onSubmit={handleSubmit} noValidate>
          {status === "success" ? (
            <div className="border-t border-[#c9a24b]/40 pt-8">
              <p className="font-display text-lg font-semibold text-[#f5f1e8]">Got it.</p>
              <p className="mt-2 text-sm text-[#f5f1e8]/60">
                We&apos;ll be in touch to set up your strategy call.
              </p>
            </div>
          ) : (
            <div className="space-y-7">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Business name" name="business" autoComplete="organization" />
              </div>
              <Field
                label="What's not working right now?"
                name="message"
                as="textarea"
                placeholder="Slow follow-up, weak ads, both..."
              />
              {status === "error" && (
                <p className="text-sm text-[#e3a06c]" role="alert">
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="vt-cta group mt-2 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Start a Project"}
                <span className="vt-cta-rule" />
                <svg
                  className="vt-cta-arrow h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M2 8h11M8 3l5 5-5 5" />
                </svg>
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
