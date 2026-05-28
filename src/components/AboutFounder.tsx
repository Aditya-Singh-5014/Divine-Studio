import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="page-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left — Founder photo */}
          <div className="relative mx-auto aspect-[0.8] w-full max-w-[480px] overflow-hidden rounded-[18px] bg-[#e9e0d0]">
            <Image
              src="/PrachiGarg.png"
              alt="Prachi Garg — Founder, Divine India Exports"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right — Founder info */}
          <div className="max-w-[520px]">
            <p className="eyebrow">Founder</p>

            {/* Cormorant Garamond heading — ultra-thin elegant serif */}
            <h2
              className="mt-3 text-[2.8rem] font-light leading-[1.1] tracking-[-0.01em] text-[#1e2619] sm:text-[3.4rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prachi Garg
            </h2>

            <p className="mt-6 text-[15px] leading-[1.85] text-[#5d6659]">
              Divine India Exports was founded with one belief — that the
              objects we live with should carry meaning. From sourcing each
              plank of timber to overseeing the final coat of finish, Prachi
              leads a tight-knit team of designers, Product developers working
              with artisans.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-[#5d6659]">
              Today, Divine India Exports ships to design-forward homes in over
              15+ countries, while remaining rooted in the workshops of
              Ghaziabad&nbsp; where it all began.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#ece7d8] pt-8">
              <div>
                <p
                  className="text-[2.2rem] font-light leading-none text-[#273221]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  15+
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#98a08c]">
                  Countries
                </p>
              </div>
              <div>
                <p
                  className="text-[2.2rem] font-light leading-none text-[#273221]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  1
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#98a08c]">
                  Generations
                </p>
              </div>
              <div>
                <p
                  className="text-[2.2rem] font-light leading-none text-[#273221]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  100k+
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#98a08c]">
                  Pieces / Months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
