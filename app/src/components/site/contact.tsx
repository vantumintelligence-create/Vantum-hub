import { useState, type FormEvent } from "react";

import { submitLead } from "../../lib/api/leads.functions";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="vt-reveal font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
            Get Started
          </p>
          <h2 className="vt-reveal vt-reveal-1 mt-4 font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
            Tell us about your business.
          </h2>
          <p className="vt-reveal vt-reveal-1 mt-4 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            Share a few details and we will follow up with a plan for your ads and automation,
            no obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="vt-reveal vt-reveal-2 space-y-5" noValidate>
          {status === "success" ? (
            <div className="rounded-2xl border border-[#c9a24b]/30 bg-[#12100d] p-8 text-center">
              <p className="font-display text-lg font-semibold text-[#f5f1e8]">Request received.</p>
              <p className="mt-2 text-sm text-[#f5f1e8]/60">
                We will reach out shortly to schedule your strategy call.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Business name" name="business" autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-[#f5f1e8]/70">
                  What are you looking to grow?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-[#f5f1e8]/15 bg-[#12100d] px-3.5 py-2.5 text-sm text-[#f5f1e8] outline-none placeholder:text-[#f5f1e8]/30 focus:border-[#c9a24b]"
                  placeholder="More leads, faster follow-up, both..."
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-[#e3a06c]" role="alert">
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative overflow-hidden rounded-md bg-[#c9a24b] px-6 py-3.5 text-sm font-medium text-[#0b0906] transition-transform active:translate-y-px active:scale-[0.98] disabled:opacity-60"
              >
                <span className="pointer-events-none absolute left-1 top-1 h-2.5 w-2.5 -translate-x-2 -translate-y-2 border-l-2 border-t-2 border-[#0b0906]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#0b0906]/40" />
                <span className="pointer-events-none absolute bottom-1 right-1 h-2.5 w-2.5 translate-x-2 translate-y-2 border-b-2 border-r-2 border-[#0b0906]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#0b0906]/40" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-[#f5f1e8]/70">
        {label}
        {required && <span className="text-[#c9a24b]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-[#f5f1e8]/15 bg-[#12100d] px-3.5 py-2.5 text-sm text-[#f5f1e8] outline-none placeholder:text-[#f5f1e8]/30 focus:border-[#c9a24b]"
      />
    </div>
  );
}
