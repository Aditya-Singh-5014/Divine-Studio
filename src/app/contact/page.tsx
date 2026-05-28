import type { Metadata } from "next";
import ContactDetails from "@/components/ContactDetails";
import ContactMap from "@/components/ContactMap";

export const metadata: Metadata = {
  title: "Contact | Divine India Exports",
  description:
    "Get in touch with Divine India Exports for wholesale enquiries, catalogue requests, and general questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#f4ead6_0%,#f7efdf_100%)] pt-[120px]">
        <div className="page-shell py-18 sm:py-22">
          <div className="max-w-[560px]">
            <p className="eyebrow">Get in Touch</p>
            <h1 className="section-heading mt-4 text-[3.35rem] sm:text-[4.5rem]">
              Contact
            </h1>
            <p className="mt-5 max-w-[500px] text-[15px] leading-8 text-[#717b6a]">
              For wholesale enquiries, catalogue requests, or general
              questions.
            </p>
          </div>
        </div>
      </section>

      <ContactDetails />
      <ContactMap />
    </div>
  );
}
