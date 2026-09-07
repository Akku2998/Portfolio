"use client";

import Link from "next/link";
import { Hero } from "../../svgs/Hero";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Portfolio = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const projects = [
    {
      number: "01",
      featured: true,
      title: "Pharmacy Management SaaS",
      category: "Full Stack SaaS Application",

      description:
        "A production-focused pharmacy management application built to manage medicines, inventory, purchases, suppliers, customers, billing, and daily pharmacy operations.",

      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Prisma",
        "MySQL",
      ],

      highlights: [
        "Multi-tenant architecture",
        "JWT authentication & RBAC",
        "Medicine & inventory management",
        "Billing & transaction management",
        "Purchase & supplier management",
        "Third-party API integrations",
      ],

      liveUrl: "",
      githubUrl: "",
    },

    {
      number: "02",
      featured: false,

      title: t("project2"),
      category: "Frontend Application",

      description: t("project2Dsc"),

      technologies: ["React.js", "JavaScript", "Tailwind CSS", "React Router"],

      highlights: [
        "Responsive user interface",
        "Reusable React components",
        "Client-side routing",
        "Responsive design",
      ],

      liveUrl: "",
      githubUrl: "",
    },

    {
      number: "03",
      featured: false,

      title: t("project3"),
      category: "Personal Portfolio",

      description: t("project3Dsc"),

      technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],

      highlights: [
        "Next.js App Router",
        "Responsive design",
        "Dark mode support",
        "Performance optimized",
      ],

      liveUrl: "https://portfolio-swart-kappa-35.vercel.app/",
      githubUrl: "https://github.com/Akku2998",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={(element) => setPageRef("portfolio", element)}
      className="bg-white text-gray-900 dark:bg-[#0d0d0d] dark:text-white"
    >
      {/* =====================================================
          PORTFOLIO HEADER
      ====================================================== */}
      <div className="border-b border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-5 py-20 sm:px-8 md:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT SIDE */}
            <div>
              {/* Section Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-primary dark:bg-yellow-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-yellow-400">
                  Selected Work
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                {t("myPortfolio")}
              </h2>

              {/* Accent */}
              <div className="mt-7 h-1 w-20 rounded-full bg-primary dark:bg-yellow-400" />
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:pb-1">
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
                A selection of applications and products I&apos;ve built using
                modern frontend, backend, database, and cloud technologies.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "Prisma",
                  "MySQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROJECTS
      ====================================================== */}
      <div className="container mx-auto px-5 py-16 sm:px-8 md:py-20">
        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.number}>
              {/* =================================================
                  FEATURED PROJECT
              ================================================== */}
              {project.featured ? (
                <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-white/10 dark:bg-[#151515]">
                  <div className="grid lg:grid-cols-5">
                    {/* LEFT PROJECT PANEL */}
                    {/* <div className="relative overflow-hidden bg-primary p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
                    
                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

                      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10" />

                      <div className="relative">
                      
                        <div className="flex items-center justify-between">
                          <span className="text-6xl font-black text-white/20">
                            {project.number}
                          </span>

                          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                            Featured Project
                          </span>
                        </div>

                      
                        <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                          {project.category}
                        </p>

                        
                        <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                          {project.title}
                        </h3>

                       
                        <p className="mt-6 leading-7 text-white/75">
                          {project.description}
                        </p>

                   
                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div> */}
                    {/* LEFT PROJECT PANEL */}
                    <div className="relative overflow-hidden bg-primary p-8 text-white dark:bg-yellow-400 dark:text-black sm:p-10 lg:col-span-2 lg:p-12">
                      {/* Decorative Elements */}
                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10 dark:border-black/10" />

                      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10 dark:border-black/10" />

                      <div className="relative">
                        {/* Number + Featured */}
                        <div className="flex items-center justify-between">
                          <span className="text-6xl font-black text-white/20 dark:text-black/20">
                            {project.number}
                          </span>

                          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-300 dark:border-black/20 dark:bg-black/10 dark:text-black">
                            Featured Project
                          </span>
                        </div>

                        {/* Category */}
                        <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/60 dark:text-black/60">
                          {project.category}
                        </p>

                        {/* Title */}
                        <h3 className="mt-4 text-3xl font-bold leading-tight text-white dark:text-black sm:text-4xl">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-6 leading-7 text-white/75 dark:text-black/70">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 dark:border-black/15 dark:bg-black/10 dark:text-black/80"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* RIGHT PROJECT DETAILS */}
                    <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-yellow-400">
                        Project Overview
                      </p>

                      <h4 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Pharmacy Management SaaS
                      </h4>

                      <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                        The application helps pharmacies manage their daily
                        operations through a centralized platform. It includes
                        medicine management, inventory, purchases, suppliers,
                        customers, billing, tax management, and reporting
                        features.
                      </p>

                      <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                        The system uses JWT authentication and role-based access
                        control to provide secure access to different users.
                        Multi-tenant architecture is used to keep pharmacy data
                        isolated, while Prisma is used for database operations,
                        schemas, migrations, and queries.
                      </p>

                      {/* Key Features */}
                      <div className="mt-8">
                        <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                          Key Features
                        </h5>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white dark:bg-yellow-400 dark:text-black">
                                ✓
                              </span>

                              <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="mt-8 flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-yellow-400 dark:text-black"
                            >
                              View Live Project →
                            </Link>
                          )}

                          {project.githubUrl && (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                            >
                              View GitHub
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ) : (
                /* =================================================
                    OTHER PROJECTS
                ================================================== */
                <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#151515] sm:p-8">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    {/* PROJECT INFORMATION */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-black text-gray-200 dark:text-white/10">
                          {project.number}
                        </span>

                        <span className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-yellow-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-gray-900 transition group-hover:text-primary dark:text-white dark:group-hover:text-yellow-400 sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PROJECT HIGHLIGHTS */}
                    <div className="w-full lg:max-w-sm">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                        Key Highlights
                      </h4>

                      <div className="mt-4 space-y-3">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1 text-primary dark:text-yellow-400">
                              ✓
                            </span>

                            <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-yellow-400 dark:text-black"
                            >
                              Live Demo →
                            </Link>
                          )}

                          {project.githubUrl && (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                            >
                              GitHub
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gray-100 p-8 text-center dark:bg-[#151515] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-yellow-400">
            Have a project in mind?
          </p>

          <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Let&apos;s build something useful together.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            I&apos;m interested in building reliable, scalable, and
            user-friendly web applications.
          </p>

          <Link
            href="#contact"
            className="mt-7 inline-flex rounded-xl bg-primary px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-yellow-400 dark:text-black"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </section>
  );
};

// "use client";
// import Link from "next/link";
// import { Hero } from "../../svgs/Hero";
// import { useTranslation } from "react-i18next";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// export const Portfolio = ({ setPageRef }) => {
//   const { t } = useTranslation();
//   const { darkMode } = useContext(DarkModeContext);
//   const projects = [
//     {
//       title: t("project1"),
//       description: t("project1Dsc"),
//       technologies: ["HTML", "CSS", "JavaScript"],
//       liveUrl: "", // add your real deployed link here
//       githubUrl: "", // add your real repo link here
//     },
//     {
//       title: t("project2"),
//       description: t("project2Dsc"),
//       technologies: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Router"],
//       liveUrl: "",
//       githubUrl: "",
//     },
//     {
//       title: t("project3"),
//       description: t("project3Dsc"),
//       technologies: ["React.js", "Next.js", "Tailwind CSS"],
//       liveUrl: "https://portfolio-swart-kappa-35.vercel.app/",
//       githubUrl: "https://github.com/Akku2998",
//     },
//   ];
//   return (
//     <>
//       <div className="flex justify-center mb-[-0.2rem] mt-16">
//         <Hero color={darkMode ? "#000000" : "#6E07F3"} />
//       </div>
//       <section
//         className="section bg-primary dark:bg-black text-white pb-52"
//         ref={(element) => setPageRef("portfolio", element)}
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col text-center items-center">
//             <h2 className="font-header py-16 md:py-10 mx-auto mt-8 text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
//               {t("myPortfolio")}
//             </h2>
//             <h3 className="font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
//               {t("hereIs")}
//             </h3>
//             <p
//               className="pt-6 leading-relaxed w-9/12"
//               style={{
//                 color: "rgb(240, 234, 214)",
//               }}
//             >
//               {t("portfolioIntro")}
//             </p>
//           </div>
//         </div>
//       </section>
//       <section
//         id="portfolio"
//         className="container  mx-auto mt-[-8rem] text-center"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects?.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-8 rounded hover:scale-105 transition duration-300 flex flex-col"
//             >
//               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//               <p className="text-gray-700 mb-2 flex-grow">
//                 {project.description}
//               </p>
//               <div className="text-gray-500 mb-4">
//                 <div className="text-black font-bold">{t("technologies")}</div>
//                 {project.technologies.join(", ")}
//               </div>
//               <div className="flex gap-3 justify-center mt-auto">
//                 {project.liveUrl && (
//                   <Link
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm font-semibold text-voilet-50 dark:text-black underline hover:text-yellow-500"
//                   >
//                     Live Demo
//                   </Link>
//                 )}
//                 {project.githubUrl && (
//                   <Link
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm font-semibold text-voilet-50 dark:text-black underline hover:text-yellow-500"
//                   >
//                     GitHub
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };
