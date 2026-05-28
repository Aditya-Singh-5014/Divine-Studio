"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    label: "Studio",
    value:
      "A-33/22A Site-IV, Industrial Area Sahibabad, Ghaziabad, Uttar Pradesh, India 201010",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+91 8527174349",
    icon: Phone,
  },
  {
    label: "Email",
    value: "prachi@divineindiaexports.com",
    icon: Mail,
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left column — contact info */}
          <div>
            <h2 className="font-serif text-[2rem] font-light tracking-[-0.02em] text-[#273221] sm:text-[2.6rem]">
              Let&apos;s talk.
            </h2>

            <div className="mt-8 space-y-6">
              {contactItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1e9d8]">
                    <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9aa18f]">
                      {label}
                    </p>
                    <p className="mt-1 text-[14px] leading-7 text-[#4f574b]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — contact form */}
          <div>
            <h2 className="font-serif text-[2rem] font-light tracking-[-0.02em] text-[#273221] sm:text-[2.6rem]">
              Send a message.
            </h2>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#e2dbd0] bg-[#faf7f2] px-4 py-3 text-[14px] text-[#3a4333] placeholder-[#b0b8a8] outline-none transition focus:border-[#8baa7a] focus:ring-2 focus:ring-[#8baa7a]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-[#e2dbd0] bg-[#faf7f2] px-4 py-3 text-[14px] text-[#3a4333] placeholder-[#b0b8a8] outline-none transition focus:border-[#8baa7a] focus:ring-2 focus:ring-[#8baa7a]/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Wholesale enquiry / Catalogue request"
                  className="w-full rounded-xl border border-[#e2dbd0] bg-[#faf7f2] px-4 py-3 text-[14px] text-[#3a4333] placeholder-[#b0b8a8] outline-none transition focus:border-[#8baa7a] focus:ring-2 focus:ring-[#8baa7a]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-[#e2dbd0] bg-[#faf7f2] px-4 py-3 text-[14px] text-[#3a4333] placeholder-[#b0b8a8] outline-none transition focus:border-[#8baa7a] focus:ring-2 focus:ring-[#8baa7a]/20"
                />
              </div>

              <button
                type="submit"
                className="button-primary mt-2 w-full sm:w-auto sm:min-w-[160px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
