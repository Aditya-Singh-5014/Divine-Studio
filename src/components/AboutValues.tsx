import {
  BadgeCheck,
  HandHeart,
  Leaf,
  Scale,
} from "lucide-react";

const values = [
  {
    title: "Quality First",
    description: "Uncompromising standards from raw plank to packaged piece.",
    icon: BadgeCheck,
  },
  {
    title: "Sustainability",
    description: "Responsible sourcing, low-VOC finishes, mindful waste.",
    icon: Leaf,
  },
  {
    title: "Fair Practice",
    description: "Dignified wages and safe workshops for every artisan.",
    icon: Scale,
  },
  {
    title: "Integrity",
    description: "Transparent dealings with partners, buyers and makers alike.",
    icon: HandHeart,
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#f1f2e7] py-18 sm:py-24">
      <div className="page-shell">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="eyebrow">Our Values</p>
          <h2 className="section-heading mt-4">
            The principles behind <span className="text-[color:var(--color-olive)]">every piece</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#6f7769]">
            Quietly held, consistently practiced across our studio, our
            workshops and every partnership we keep.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <article key={title} className="soft-card rounded-[18px] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e9d8]">
                <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
              </div>
              <h3 className="mt-6 text-[1.15rem] font-medium tracking-[-0.03em] text-[#273221]">
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
