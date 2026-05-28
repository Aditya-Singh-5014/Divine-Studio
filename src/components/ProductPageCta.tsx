export default function ProductPageCta() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="page-shell text-center">
        <h2 className="section-heading text-[2.35rem] sm:text-[3rem]">
          Interested in our products?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="button-primary min-w-[158px]">
            Request a Catalogue
          </button>
          <button className="button-dark min-w-[122px] rounded-full px-8">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
