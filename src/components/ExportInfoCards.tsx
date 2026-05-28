import {
  Boxes,
  ClipboardList,
  Globe2,
  Truck,
} from "lucide-react";

const exportCards = [
  {
    title: "Wholesale process",
    description:
      "Discovery → catalogue → custom samples → production → QC → dispatch. Transparent at every stage.",
    icon: ClipboardList,
  },
  {
    title: "MOQ details",
    description:
      "Flexible MOQs from 250 units per SKU for standard importers and 1000 pieces for retail buyers.",
    icon: Boxes,
  },
  {
    title: "Logistics capabilities",
    description:
      "FOB, DDP & door-to-door. Dedicated export documentation and freight partners.",
    icon: Truck,
  },
  {
    title: "Countries served",
    description:
      "USA, Germany, Netherlands, Sweden and 15+ more established markets.",
    icon: Globe2,
  },
];

export default function ExportInfoCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-2">
          {exportCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="soft-card min-h-[172px] rounded-[18px] p-6 sm:p-8"
            >
              <Icon className="h-5 w-5 text-[color:var(--color-olive)]" />
              <h2 className="mt-7 text-[1.45rem] font-semibold tracking-[-0.02em] text-[#273221]">
                {title}
              </h2>
              <p className="mt-3 max-w-[420px] text-[13px] leading-7 text-[#727b6c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
