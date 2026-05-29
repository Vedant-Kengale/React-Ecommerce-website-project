import React from "react";
import { BsCart3 } from "react-icons/bs";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#home" className="text-lg font-bold uppercase tracking-[0.24em] text-slate-900 dark:text-white">
          NexaShop
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-slate-900 dark:hover:text-white">Home</a>
          <a href="#category" className="transition hover:text-slate-900 dark:hover:text-white">Category</a>
          <a href="#services" className="transition hover:text-slate-900 dark:hover:text-white">Services</a>
          <a href="#blogs" className="transition hover:text-slate-900 dark:hover:text-white">Blogs</a>
        </nav>
        <button
          onClick={handleOrderPopup}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          <BsCart3 />
          Order Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
