"use client";

import Image from "next/image";

const experiences = [
  {
    company: "Valuete, Mumbai",
    period: "October 2025 — Present",
    role: "Full Stack Developer",
    summary:
      "Working as a Full Stack Developer at Valuete, I design and build scalable fintech solutions focused on high-performance backend systems and intuitive frontend experiences. I have implemented key features such as referral systems, partner commission tracking, and real-time trading workflows while improving API efficiency and secure data handling.",
    logo: "/_static/company/valuete.jpeg",
  },
  {
    company: "UnoiaTech, Mohali",
    period: "October 2024 — July 2025",
    role: "Full Stack Developer",
    summary:
      "At UnoiaTech, I developed and maintained full-stack web applications with responsive, user-friendly interfaces backed by efficient APIs. I collaborated with cross-functional teams to implement scalable features, optimize database queries, and improve accessibility and consistency across devices.",
    logo: "/_static/company/unoiatech.jpg",
  },
  {
    company: "DataBoxStudio, Mohali",
    period: "January 2021 — September 2024",
    role: "Full Stack Developer",
    summary:
      "At DataBoxStudio, I led the development of automated systems that streamlined end-to-end ordering and invoicing workflows. I built scalable backend services, improved supply chain transparency, and delivered data-driven solutions that reduced manual effort and improved system reliability.",
    logo: "/_static/company/databoxstudio.png",
  },
  {
    company: "Matrix Marketers, Mohali",
    period: "August 2018 — December 2020",
    role: "Junior Quality Analyst",
    summary:
      "As a Junior Quality Analyst at Matrix Marketers, I planned and executed testing strategies, identified defects early, and collaborated closely with developers to improve release quality. My work helped reduce production bugs and strengthen overall product stability.",
    logo: "/_static/company/matrix_marketers.jpg",
  },
];

export default function Experiences() {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold dark:text-neutral-200 sm:mt-6 lg:mt-10">
        Experience
      </h2>
      <div className="px-5 py-2">
        {experiences.map((item, index) => (
          <article
            key={`${item.company}-${item.period}`}
            className={`border-gray-200 pb-10 dark:border-neutral-700 ${index === experiences.length - 1 ? "border-l-0" : "border-l"}`}
          >
            <div className="relative flex flex-col justify-start pl-12">
              <div className="absolute left-0 top-0 z-40 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded object-contain"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {item.period}
              </p>
              <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                {item.role}
              </h3>
              <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                {item.company}
              </p>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
