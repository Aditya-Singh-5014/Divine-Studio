export default function AboutMission() {
  return (
    <section className="bg-[#fbf7ef] py-18 sm:py-24">
      <div className="page-shell">
        <div className="grid gap-10 border-b border-[#ece5d7] pb-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[460px]">
            <p className="eyebrow">Mission</p>
            <h2
              className="mt-4 text-[2.4rem] font-light leading-[1.1] tracking-[-0.01em] text-[#1e2619] sm:text-[3rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              To carry Indian craftsmanship into the world&apos;s most considered
              homes — responsibly, beautifully, and at scale.
            </h2>
          </div>

          <div className="max-w-[500px]">
            <p className="eyebrow">Vision</p>
            <h2
              className="mt-4 text-[2.4rem] font-light leading-[1.1] tracking-[-0.01em] text-[#1e2619] sm:text-[3rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A future where heritage skills and modern design coexist, making
              timeless objects accessible everywhere.
            </h2>
          </div>
        </div>

        <div className="grid gap-10 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-[380px]">
            <p className="eyebrow">Our Heritage</p>
            <h2
              className="mt-4 text-[2.4rem] font-light leading-[1.1] tracking-[-0.01em] text-[#1e2619] sm:text-[3rem]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Rooted in Sahibabad, UP India.
              <span className="block italic text-[color:var(--color-olive)]">
                Carried to the world.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] space-y-5">
            <p className="body-copy">
              Divine India Exports began in the lanes of UP India, a town where
              the scent of seasoned sheesham has perfumed family workshops for
              generations. What started as a single bench and a handful of
              chisels has matured into an export house trusted by interior
              studios, hospitality groups, and lifestyle retailers worldwide.
            </p>
            <p className="body-copy">
              We marry inherited woodworking craft with the discipline of
              contemporary design sketching in our studio, prototyping with
              master artisans, and finishing each piece with a quiet attention
              that machines alone cannot replicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
