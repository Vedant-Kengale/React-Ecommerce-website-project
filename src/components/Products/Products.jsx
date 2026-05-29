import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import p1 from "../../assets/product/p-1.jpg";
import p2 from "../../assets/product/p-2.jpg";
import p3 from "../../assets/product/p-3.jpg";
import p4 from "../../assets/product/p-4.jpg";
import p5 from "../../assets/product/p-5.jpg";
import p7 from "../../assets/product/p-7.jpg";

const Products = ({ handleProductOrder }) => {
  const items = [
    { image: p1, name: "Audio Max", price: "$89", description: "Balanced sound for everyday listening." },
    { image: p2, name: "Smart Band", price: "$79", description: "Fitness tracking with advanced sensors." },
    { image: p3, name: "Pro Speaker", price: "$149", description: "Rich bass and crystal-clear vocals." },
    { image: p4, name: "Studio Headset", price: "$129", description: "Comfortable wear for long sessions." },
    { image: p5, name: "Pocket Charger", price: "$39", description: "Fast charging for your mobile gear." },
    { image: p7, name: "Wireless Pods", price: "$99", description: "True wireless audio with deep bass." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" data-aos="fade-up">
      <Heading title="Popular products" subtitle="Browse our best-selling tech picks selected for you." />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <ProductCard key={item.name} item={item} onOrder={handleProductOrder} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default Products;
