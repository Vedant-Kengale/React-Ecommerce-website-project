import React from "react";
import { BsX } from "react-icons/bs";

const Popup = ({ orderPopup, handleOrderPopup, selectedProduct }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!orderPopup) {
      setName("");
      setEmail("");
      setNotes("");
      setSubmitted(false);
    }
  }, [orderPopup]);

  if (!orderPopup) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white text-slate-950 shadow-2xl shadow-slate-900/20 dark:bg-slate-900 dark:text-white">
        <button
          onClick={handleOrderPopup}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <BsX size={20} />
        </button>
        <div className="space-y-6 p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brandBlue">Order details</p>
            <h2 className="text-3xl font-bold">{selectedProduct?.name ?? "Place an order"}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {selectedProduct
                ? `Ready to purchase ${selectedProduct.name}? Fill in your details below.`
                : "Choose products and we will help you complete the order."}
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl bg-slate-100 p-6 text-center dark:bg-slate-800">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">Order submitted successfully!</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                We’ll contact you soon at {email || "your email"} with the payment and shipping details.
              </p>
              <button
                onClick={handleOrderPopup}
                className="mt-6 rounded-full bg-brandBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandBlue/90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Note</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Delivery instructions or product request"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brandBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandBlue/90"
              >
                Submit order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
