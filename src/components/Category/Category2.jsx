import React from "react";
import Heading from "../Shared/Heading";
import macbook from "../../assets/category/macbook.png";
import vr from "../../assets/category/vr.png";
import watch from "../../assets/category/watch.png";

const Category2 = () => {
  const collections = [
    { title: "Workspace", description: "Modern desk setups", image: macbook },
    { title: "Virtual Reality", description: "Enter the next dimension", image: vr },
    { title: "Wearables", description: "Track your day in style", image: watch },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Heading title="Featured collections" subtitle="Trending picks to upgrade your home, fitness, and entertainment." />
      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-6 shadow-lg shadow-slate-300/20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-black/20"
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <div className="mb-6 h-52 overflow-hidden rounded-[1.75rem] bg-slate-50 p-4 dark:bg-slate-800">
              <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Category2;
