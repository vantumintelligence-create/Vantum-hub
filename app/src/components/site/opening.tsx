const HERO_IMAGE = "/assets/hero-quiet.webp";

export function Opening() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906]/55 via-transparent to-transparent" />
      </div>

      <div className="relative flex min-h-[92svh] items-end pb-14 pt-32 lg:min-h-screen lg:items-center lg:pb-0">
        <div className="flex w-full justify-end px-6 lg:px-16">
          <div className="max-w-[16ch] text-left">
            <p className="font-mono-vt text-sm uppercase leading-[2] tracking-[0.35em] text-[#f5f1e8]/80 sm:text-base lg:text-lg">
              A Quieter
              <br />
              Approach
              <br />
              To Growth
            </p>
            <span className="mt-6 block h-px w-10 bg-[#f5f1e8]/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
