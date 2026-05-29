import React from "react";

const ProductCard = ({ item, onOrder, delay }) => {
  return (
    <article
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="overflow-hidden bg-slate-100 p-6 dark:bg-slate-800">
        <img src={item.image} alt={item.name} className="mx-auto h-56 w-full object-contain" />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.name}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
        <button
          onClick={() => onOrder(item)}
          className="w-full rounded-full bg-brandBlue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brandBlue/90"
        >
          Order now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
