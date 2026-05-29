import React from "react";
import Heading from "../Shared/Heading";
import earphone from "../../assets/category/earphone.png";
import gaming from "../../assets/category/gaming.png";
import speaker from "../../assets/category/speaker.png";

const Category = () => {
  const categories = [
    { title: "Headphones", subtitle: "Pure sound quality", image: earphone },
    { title: "Gaming", subtitle: "Immersive experience", image: gaming },
    { title: "Speakers", subtitle: "Bold deep bass", image: speaker },
  ];

  return (
    <section id="category" className="mx-auto max-w-6xl px-6 py-16">
      <Heading title="Shop by category" subtitle="Explore curated collections built for every lifestyle." />
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((item, index) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <div className="mb-6 h-56 overflow-hidden rounded-[1.75rem] bg-slate-100 p-6 dark:bg-slate-800">
              <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Category;
