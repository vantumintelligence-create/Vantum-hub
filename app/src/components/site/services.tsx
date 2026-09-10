const SERVICES = [
  {
    num: "01",
    title: "Advertising",
    tag: "Ad Creation and Campaign Management",
    body: "We develop and manage advertising campaigns built around clear objectives and informed by ongoing performance. Each engagement may include campaign strategy, audience development, copywriting, static and video creative, testing, campaign management, and reporting. We assess what is working, make purposeful adjustments, and keep your advertising focused on generating meaningful business opportunities.",
    image: "/assets/tile-ad-creative.webp",
  },
  {
    num: "02",
    title: "Automation",
    tag: "Faster Responses and More Consistent Follow-Up",
    body: "We build practical automations that help your business respond to leads, maintain communication, and reduce repetitive administrative work. Capabilities include immediate lead response, missed-call text-back, SMS and email follow-up, CRM workflows, review requests, and customer reactivation. These systems help prevent opportunities from being overlooked while giving your team a more organized way to manage customer relationships.",
    image: "/assets/tile-automation.webp",
  },
  {
    num: "03",
    title: "Web Design and Development",
    tag: "Websites Built to Support Business Growth",
    body: "We design and develop websites that clearly communicate your value and make it easy for visitors to take the next step. Our web services include website design and development, landing pages, lead-capture systems, analytics, deployment, and ongoing website management. Every project is approached as a working part of your business, with attention to usability, performance, and conversion.",
    image: "/assets/tile-strategy.webp",
  },
];

export function Services() {
  return (
    <section id="services" className="pt-24 lg:pt-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">01 · Services</p>
        <p className="mt-8 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-[#f5f1e8] sm:text-3xl">
          Vantum Intelligence helps businesses attract qualified leads, respond faster, and manage growth with greater consistency.
        </p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/60">
          Our work brings advertising, automation, and web development together so each part of the customer journey supports the next.
        </p>
      </div>

      <div className="mt-16 border-y border-[#f5f1e8]/10 lg:mt-24">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-8 px-6 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20 lg:pl-72 lg:pr-16 ${
              i > 0 ? "border-t border-[#f5f1e8]/10" : ""
            }`}
          >
            <div className="lg:col-span-5">
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="vt-chapter-num">{s.num}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-[#f5f1e8] sm:text-4xl">
                {s.title}
              </h3>
              <p className="vt-meta-row mt-4">{s.tag}</p>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#f5f1e8]/65">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lead generation closing */}
      <div className="px-6 py-16 lg:py-24 lg:pl-72 lg:pr-16">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/assets/tile-lead-systems.webp"
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="vt-chapter-num">Lead Generation</p>
            <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed text-[#f5f1e8]/85 sm:text-2xl">
              Our services work together to create a more complete lead-generation system. Advertising brings the right
              people to your business, your website gives them a clear path forward, and automation helps ensure each
              inquiry receives timely attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}