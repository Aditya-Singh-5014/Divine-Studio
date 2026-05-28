const openings = [
  {
    title: "Production Manager",
    details: "Saharanpur, India · Full-time",
  },
  {
    title: "Export Sales Executive",
    details: "Delhi NCR, India · Full-time",
  },
  {
    title: "Product Designer (Wood)",
    details: "Noida / India · In-Office",
  },
  {
    title: "QC Inspector",
    details: "Saharanpur, India · Full-time",
  },
];

export default function CareerOpenings() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="page-shell">
        <div className="max-w-[760px]">
          <h2 className="text-[2.15rem] font-light tracking-[-0.04em] text-[#273221] sm:text-[2.8rem]">
            Open positions
          </h2>

          <div className="mt-8 space-y-4">
            {openings.map((opening) => (
              <article
                key={opening.title}
                className="flex flex-col justify-between gap-5 rounded-[14px] border border-[#ece5d7] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(46,53,37,0.04)] sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-[1.15rem] font-medium tracking-[-0.03em] text-[#273221]">
                    {opening.title}
                  </h3>
                  <p className="mt-2 text-[12px] text-[#7c8476]">
                    {opening.details}
                  </p>
                </div>

                <a
                  href="#"
                  className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8e987c] transition hover:text-[#5f6f4d]"
                >
                  Apply →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
