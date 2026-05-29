import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[860px] items-end overflow-hidden bg-[#5c512e] pt-[72px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Modern living room with handcrafted wooden décor.png')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,23,17,0.62)_0%,rgba(37,34,18,0.35)_40%,rgba(47,45,16,0.22)_100%)]" />

      {/* Watermark text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <span className="font-serif whitespace-nowrap text-[12vw] font-bold uppercase leading-none tracking-[0.08em] text-white/[0.05]">
          Divine India Exports
        </span>
      </div>

      <div className="page-shell relative z-10 flex w-full items-end pb-16 sm:pb-20 lg:min-h-[calc(860px-72px)]">
        <div className="max-w-[480px]">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/75">
            Divine India Exports
          </p>
          <h1 className="hero-heading text-balance">
            Elevate Your{" "}
            <em className="not-italic font-serif italic">Living Space</em>
          </h1>
          <p className="mt-5 max-w-[380px] text-[15px] leading-8 text-white/78">
            Timeless wooden creations, handcrafted in India for modern homes
            around the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="button-primary min-w-[148px]">
              Explore Collections
            </Link>
            <Link href="/export" className="button-secondary min-w-[130px]">
              Export Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
