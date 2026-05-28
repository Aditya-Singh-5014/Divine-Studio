import type { Metadata } from "next";
import Image from "next/image";
import AboutFounder from "@/components/AboutFounder";
import AboutMission from "@/components/AboutMission";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutQuote from "@/components/AboutQuote";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About | Divine India Exports",
  description:
    "Learn about the story, values, and craftsmanship philosophy behind Divine India Exports.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[72px]">
        {/* Background image at natural resolution — no crop/stretch */}
        <Image
          src="/Gradient-2.png"
          alt=""
          fill
          className="object-contain object-right"
          priority
        />
        {/* Light cream overlay fading left → transparent right */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(252,247,238,0.96)_0%,rgba(252,247,238,0.82)_38%,rgba(252,247,238,0.45)_62%,rgba(252,247,238,0.08)_100%)]" />

        <div className="page-shell relative z-10 py-20 sm:py-28">
          <div className="max-w-[640px] py-8 sm:py-12">
            <p className="eyebrow">Our House</p>
            <h1
              className="display-heading mt-4 text-[#1e2619]"
            >
              About Divine India Exports
            </h1>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.8] text-[#5f6759]">
              A family-run export house with a quiet obsession for
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <AboutFounder />
      <AboutMission />
      <AboutQuote />
      <AboutPhilosophy />
      <AboutValues />
    </div>
  );
}
