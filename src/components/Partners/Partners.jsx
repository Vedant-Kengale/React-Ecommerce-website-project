import React from "react";
import br1 from "../../assets/brand/br-1.png";
import br2 from "../../assets/brand/br-2.png";
import br3 from "../../assets/brand/br-3.png";
import br4 from "../../assets/brand/br-4.png";
import br5 from "../../assets/brand/br-5.png";

const Partners = () => {
  const brands = [br1, br2, br3, br4, br5];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-brandBlue">Partners</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">Trusted by leading brands</h2>
      </div>
      <div className="grid gap-6 grid-cols-2 items-center justify-items-center sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex h-24 w-full items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <img src={brand} alt={`Partner ${index + 1}`} className="max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
