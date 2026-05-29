import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">© 2026 NexaShop. All rights reserved.</p>
        <p className="text-sm">Built for fast shopping and beautiful tech browsing.</p>
      </div>
    </footer>
  );
};

export default Footer;
