import {
  Beaker,
  Boxes,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";

const stages = [
  {
    label: "Stage 01",
    title: "Raw material quality inspection",
    icon: FileSearch,
  },
  {
    label: "Stage 02",
    title: "In-process quality checks",
    icon: ClipboardCheck,
  },
  {
    label: "Stage 03",
    title: "Final product testing",
    icon: Beaker,
  },
  {
    label: "Stage 04",
    title: "Packaging & shipment audit",
    icon: Boxes,
  },
];

export default function QualityStages() {
  return (
    <section className="bg-[#fbf7ef] py-18 sm:py-24">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-start">
          <div className="max-w-[470px]">
            <p className="eyebrow">Manufacturing Excellence</p>
            <h2 className="section-heading mt-4">
              Stringent quality controls, stage by stage.
            </h2>
            <p className="body-copy mt-6">
              Our manufacturing facility in Ghaziabad, Uttar Pradesh operates
              under stringent quality controls. Every production batch undergoes
              multi-stage inspection from raw material sourcing to final
              packaging ensuring that only the finest pieces reach our partners.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stages.map(({ label, title, icon: Icon }) => (
              <article
                key={label}
                className="soft-card min-h-[152px] rounded-[16px] px-5 py-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e9d8]">
                    <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#9aa18f]">
                    {label}
                  </p>
                </div>
                <h3 className="mt-7 max-w-[180px] text-[1.18rem] leading-7 tracking-[-0.03em] text-[#37412f]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
