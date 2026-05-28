import {
  Award,
  Leaf,
  Sparkles,
  ToyBrick,
} from "lucide-react";

const highlights = [
  {
    title: "Premium materials",
    description: "FSC-aligned hardwoods, natural finishes.",
    icon: Leaf,
  },
  {
    title: "Handcrafted",
    description: "Skilled artisans, time-honoured techniques.",
    icon: ToyBrick,
  },
  {
    title: "Timeless designs",
    description: "Modern silhouettes built to outlast trends.",
    icon: Sparkles,
  },
  {
    title: "High-quality finish",
    description: "Multi-stage QC before global dispatch.",
    icon: Award,
  },
];

export default function Highlights() {
  return (
    <section className="pb-0 pt-8">
      <div className="page-shell">
        <p className="eyebrow">Design Highlights</p>
        <h2 className="section-heading mt-4">Materials &amp; craftsmanship.</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="soft-card rounded-[18px] p-6">
              <Icon className="h-5 w-5 text-[color:var(--color-olive)]" />
              <h3 className="mt-6 text-[1.08rem] font-medium tracking-[-0.03em] text-[#273221]">
                {title}
              </h3>
              <p className="mt-3 max-w-[190px] text-[13px] leading-6 text-[#727b6c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
