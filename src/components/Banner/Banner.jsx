import React from "react";

const Banner = ({ data }) => {
  if (!data) return null;

  return (
    <section
      className="mx-auto my-12 flex max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-2xl shadow-slate-900/10 md:flex-row"
      style={{ backgroundColor: data.bgColor }}
      data-aos="zoom-in"
    >
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
          {data.discount}
        </span>
        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">{data.title}</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/90">{data.title4}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            {data.date}
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            {data.title2}
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl"></div>
        <img
          src={data.image}
          alt={data.title}
          className="relative h-72 w-72 max-w-full rounded-[2rem] object-contain shadow-2xl shadow-black/30"
        />
      </div>
    </section>
  );
};

export default Banner;
