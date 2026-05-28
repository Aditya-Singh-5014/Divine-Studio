import {
  BadgeCheck,
  CircleCheckBig,
  ShieldEllipsis,
  UsersRound,
} from "lucide-react";

const frameworkItems = [
  {
    title: "AQL Testing",
    description:
      "Acceptance Quality Limit sampling on every batch to international statistical standards.",
    icon: CircleCheckBig,
  },
  {
    title: "Third-Party Audits",
    description:
      "Independent inspections by globally recognised agencies - SGS, Intertek, Bureau Veritas.",
    icon: UsersRound,
  },
  {
    title: "Material Safety",
    description:
      "Non-toxic finishes, food-safe coatings, and REACH-compliant chemical use across the line.",
    icon: ShieldEllipsis,
  },
  {
    title: "Export Quality",
    description:
      "Pre-shipment verification aligned with EU, US, UK, and GCC import requirements.",
    icon: BadgeCheck,
  },
];

export default function QualityFramework() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="page-shell">
        <p className="eyebrow">Quality Framework</p>
        <h2 className="section-heading mt-4">Quality you can trust.</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {frameworkItems.map(({ title, description, icon: Icon }) => (
            <article key={title} className="soft-card rounded-[18px] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e9d8]">
                <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
              </div>
              <h3 className="mt-6 text-[1.2rem] font-medium tracking-[-0.03em] text-[#273221]">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#727b6c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
