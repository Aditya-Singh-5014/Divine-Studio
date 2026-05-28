import Image from "next/image";

const categories = [
  {
    title: "Kitchen & Dining",
    description: "Daily rituals, elevated through honest materials.",
    image: "/Charcuterie Board.png",
  },
  {
    title: "Lamps & Lighting",
    description: "Warm, ambient lighting in turned wood and linen.",
    image: "/Lamps & Lighting.png",
  },
  {
    title: "Decor & Living",
    description: "Curated objects to layer warmth into your interiors.",
    image: "/Decor & Living.png",
  },
  {
    title: "Everyday Use",
    description: "Quiet utility designed for everyday beauty.",
    image: "/Everyday Use.png",
  },
  {
    title: "Home Decor",
    description: "Statement pieces that complete a considered home.",
    image: "/Craftsmanship.png",
  },
  {
    title: "Garden Decor",
    description: "Outdoor companions, weatherwise and elegant.",
    image: "/Garden Decor.png",
  },
];

export default function Categories() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="page-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="group">
              <div className="relative aspect-[0.86] overflow-hidden rounded-[20px] bg-[#ece4d6]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-[1.38rem] font-semibold tracking-[-0.02em] text-[#273221]">
                {category.title}
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-[#7f8478]">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
