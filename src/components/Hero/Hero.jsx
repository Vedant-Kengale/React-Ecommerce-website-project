import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = ({ handleOrderPopup, heroImage }) => {
  return (
    <section id="home" className="hero-bg-color overflow-hidden px-6 py-16 md:py-24" data-aos="fade-up">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="space-y-8 lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
          <div className="inline-flex rounded-full bg-slate-900/95 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/10">
            Smart deals for every lifestyle
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl">
              Premium electronics with fast delivery.
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Discover modern audio, wearables, and accessories built for comfort, performance, and style.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleOrderPopup}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Order now
              <BsArrowRight />
            </button>
            <a
              href="#category"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              View categories
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2" data-aos="fade-left" data-aos-delay="150">
          <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-brandBlue/20 blur-3xl" />
          <div className="relative mx-auto w-full max-w-[28rem] overflow-hidden rounded-[2.5rem] bg-white/90 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
            <img src={heroImage} alt="Hero product" className="h-[420px] w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
