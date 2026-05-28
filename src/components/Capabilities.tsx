import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Capabilities() {
  return (
    <section className="py-12 sm:py-16">
      <div className="page-shell">
        <div
          className="relative overflow-hidden rounded-[34px] px-4 py-10 sm:px-8 sm:py-14 lg:px-12"
          style={{
            backgroundImage:
              "url('/Hand-drawn furniture concept sketches.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Light overlay so content is readable */}
          <div className="absolute inset-0 bg-white/55" />

          <div className="relative z-10 max-w-[440px] rounded-[28px] bg-white/88 p-8 shadow-[0_22px_50px_rgba(34,39,27,0.16)] backdrop-blur-sm sm:p-10">
            <p className="eyebrow">In-House Capability</p>
            <h2 className="section-heading mt-4">
              Design, manufacturing &amp; packaging —{" "}
              <em className="font-serif italic">working</em> in unison.
            </h2>
            <p className="body-copy mt-5">
              We take your concepts and bring them to life with our product
              design and engineering teams that work together to cater to your
              ideas. Working with a wide range of materials and finishes, our
              in-house corrugation also provides packaging solutions to ship
              products with ease.
            </p>
            <Link href="/export" className="button-dark mt-8 inline-flex gap-2">
              Learn about our materials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
