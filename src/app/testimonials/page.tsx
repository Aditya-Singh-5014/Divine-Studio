import type { Metadata } from "next";
import TestimonialGrid from "@/components/TestimonialGrid";

export const metadata: Metadata = {
  title: "Testimonials | Divine India Exports",
  description:
    "Read testimonials from buyers, designers, and partners who work with Divine India Exports.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#f4ead6_0%,#f7efdf_100%)] pt-[120px]">
        <div className="page-shell py-18 sm:py-22">
          <div className="max-w-[560px]">
            <p className="eyebrow">Voices</p>
            <h1 className="section-heading mt-4 text-[3.35rem] sm:text-[4.5rem]">
              Testimonials
            </h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-8 text-[#717b6a]">
              A selection of words from those who have built with us.
            </p>
          </div>
        </div>
      </section>

      <TestimonialGrid />
    </div>
  );
}
