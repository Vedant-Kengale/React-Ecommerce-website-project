import React from "react";
import Heading from "../Shared/Heading";
import { BsRocketTakeoff, BsShieldLock, BsHeadphones } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      title: "Fast delivery",
      description: "Receive your order quickly with express shipping options.",
      icon: <BsRocketTakeoff size={24} />,
    },
    {
      title: "Secure checkout",
      description: "Protected payment flow for every purchase.",
      icon: <BsShieldLock size={24} />,
    },
    {
      title: "Expert support",
      description: "Live help from our product and shipping specialists.",
      icon: <BsHeadphones size={24} />,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Heading title="The services you can trust" subtitle="Designed to make your shopping experience faster, safer, and smarter." />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brandBlue/10 text-brandBlue dark:bg-brandBlue/15">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
