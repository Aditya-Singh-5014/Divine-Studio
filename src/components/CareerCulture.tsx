import {
  Flower2,
  MoveUpRight,
  Scale,
  UsersRound,
} from "lucide-react";

const cultureItems = [
  {
    title: "Meaningful Craft",
    description:
      "Shape objects that travel into considered homes around the world work that lingers far beyond the workshop.",
    icon: Flower2,
  },
  {
    title: "Room to Grow",
    description:
      "Mentorship from master artisans and designers, with clear pathways to lead your own briefs and collections.",
    icon: MoveUpRight,
  },
  {
    title: "Inclusive Studio",
    description:
      "A close-knit team where artisans, designers and exporters sit at one table every voice carries weight.",
    icon: UsersRound,
  },
  {
    title: "Considered Balance",
    description:
      "Sensible hours, real holidays and a calm studio rhythm, because good craft is never made in a hurry.",
    icon: Scale,
  },
];

export default function CareerCulture() {
  return (
    <section className="bg-[#f1f2e7] py-18 sm:py-24">
      <div className="page-shell">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="eyebrow">Culture</p>
          <h2 className="section-heading mt-4">
            Why work at <span className="text-[color:var(--color-olive)]">Divine India</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-7 text-[#6f7769]">
            A studio built on craft, care and conversation where what we make
            and how we make it carry equal weight.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cultureItems.map(({ title, description, icon: Icon }) => (
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
