import React from "react";
import Heading from "../Shared/Heading";
import blog1 from "../../assets/blogs/blog-1.jpg";
import blog2 from "../../assets/blogs/blog-2.jpg";
import blog3 from "../../assets/blogs/blog-3.jpg";

const Blogs = () => {
  const posts = [
    { title: "How to choose the right headset", date: "Apr 10, 2026", image: blog1 },
    { title: "Top smartwatch trends in 2026", date: "Mar 28, 2026", image: blog2 },
    { title: "Home office essentials for better focus", date: "Feb 14, 2026", image: blog3 },
  ];

  return (
    <section id="blogs" className="mx-auto max-w-6xl px-6 py-16">
      <Heading title="Latest stories" subtitle="Read tips, reviews, and tech inspiration from our blog." />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <div className="overflow-hidden">
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-brandBlue">{post.date}</p>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{post.title}</h3>
              <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Read more
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
