"use client";

import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const WorkPage = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const workCards = [
    {
      number: "01",
      title: t("designer"),
      subtitle: "Full Stack Development",
      description: t("designerDsc"),
      period: "May 2024 – Present",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "Prisma",
        "MySQL",
      ],
      points: [
        "Multi-tenant SaaS architecture",
        "JWT authentication & RBAC",
        "Razorpay, WhatsApp Business & SMS APIs",
        "Multi-language support with i18next",
      ],
    },
    {
      number: "02",
      title: t("frontend"),
      subtitle: "Frontend Development",
      description: t("frontendDsc"),
      period: "Production Application",
      technologies: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "Tailwind CSS",
      ],
      points: [
        "Billing & inventory dashboards",
        "Supplier & purchase management",
        "Reusable component library with Storybook",
        "SSR & lazy loading for better performance",
      ],
    },
    {
      number: "03",
      title: t("backend"),
      subtitle: "Backend & Cloud",
      description: t("backendDsc"),
      period: "Production & Deployment",
      technologies: [
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Azure",
      ],
      points: [
        "REST API development",
        "Secure JWT authentication",
        "Docker containerization",
        "CI/CD pipelines & Azure deployment",
      ],
    },
  ];

  return (
    <section
      id="work"
      ref={(element) => {
        if (element) {
          setPageRef("work", element);
        }
      }}
      className="relative overflow-hidden bg-white py-20 dark:bg-[#0d0d0d] sm:py-24 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-voilet-50 dark:text-yellow-400">
            Experience & Expertise
          </span>

          <h2 className="mt-5 font-header text-4xl font-bold uppercase tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t("recentWork")}
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-yellow-400" />

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t("workDsc")}
          </p>
        </div>

        {/* Experience Highlight */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid lg:grid-cols-[0.35fr_1fr]">
            {/* Left */}
            <div className="flex flex-col justify-between bg-voilet-50 p-7 text-white dark:bg-yellow-400 dark:text-gray-900 sm:p-9">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                  Professional Experience
                </p>

                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Full Stack Developer
                </h3>

                <p className="mt-2 text-sm font-medium opacity-80">
                  Cyrasoft Lab Technologies Pvt. Ltd.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold">May 2024 – Present</p>

                <div className="mt-4 h-px w-full bg-white/20 dark:bg-black/20" />

                <p className="mt-4 text-sm leading-6 opacity-80">
                  Building and maintaining production-ready web applications
                  with modern full-stack technologies.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-voilet-50 dark:text-yellow-400">
                Key Contributions
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "Developed a multi-tenant Pharmacy Management SaaS",
                  "Implemented secure JWT authentication and RBAC",
                  "Built billing, inventory, purchase and supplier modules",
                  "Integrated Razorpay, WhatsApp Business and SMS APIs",
                  "Designed Prisma schemas, migrations and database queries",
                  "Improved application performance with SSR and lazy loading",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-voilet-50 dark:text-yellow-400">
            Technical Expertise
          </p>

          <h3 className="mt-2 text-center font-header text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            What I Work With
          </h3>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {workCards.map((card) => (
            <div
              key={card.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5 sm:p-8"
            >
              {/* Top line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-voilet-50 transition-colors duration-300 group-hover:bg-yellow-400 dark:bg-yellow-400" />

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-voilet-50 text-sm font-bold text-white dark:bg-yellow-400 dark:text-gray-900">
                  {card.number}
                </span>

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {card.period}
                </span>
              </div>

              {/* Title */}
              <h4 className="mt-7 text-2xl font-bold text-gray-900 dark:text-white">
                {card.title}
              </h4>

              <p className="mt-1 text-sm font-semibold text-voilet-50 dark:text-yellow-400">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {card.description}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {card.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-7 border-t border-gray-200 pt-6 dark:border-white/10">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Key Work
                </p>

                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center rounded-full border-2 border-voilet-50 px-6 py-3 text-sm font-bold text-voilet-50 transition-all duration-300 hover:bg-purple-600 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900"
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};
// "use client";
// import { useTranslation } from "react-i18next";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// export const WorkPage = ({ setPageRef }) => {
//   const { t } = useTranslation();
//   const { darkMode } = useContext(DarkModeContext);
//   return (
//     <div>
//       {/* <section
//         className="section bg-primary dark:bg-black text-white pb-52"
//         ref={(element) => setPageRef("work", element)}
//       > */}
//       <section
//         id="work"
//         className="section bg-primary dark:bg-black text-white pb-52"
//         ref={(element) => setPageRef("work", element)}
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col text-center items-center">
//             <h2 className="font-header py-16 md:py-10 mx-auto mt-8 text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
//               {t("recentWork")}
//             </h2>

//             <p
//               className="pt-6 leading-relaxed w-9/12"
//               style={{
//                 color: "rgb(240, 234, 214)",
//               }}
//             >
//               {t("workDsc")}
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto mt-[-8rem] text-center">
//         <div className="container mx-auto px-4">
//           <div className="bg-white p-8 shadow-lg rounded-lg">
//             <div className="text-center">
//               <div className="flex justify-center mb-6">
//                 {/* CARD 1 — Experience overview */}
//                 <div className="flex flex-col items-center">
//                   <span className="fa-stack fa-2x">
//                     <div className="flex justify-center items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill={darkMode ? "#000000" : "#5540af"}
//                         className="w-14 h-auto font-bold"
//                       >
//                         <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" />
//                       </svg>
//                     </div>
//                   </span>
//                   <h1 className="text-xl font-semibold mb-4">
//                     {t("designer")}
//                   </h1>
//                   <p className="mb-4">{t("designerDsc")}</p>
//                   <p className="font-semibold text-lg mt-2 text-primary dark:text-black">
//                     {t("designerLanguage")}
//                   </p>
//                   <p className="mb-4">May 2024 – Present</p>
//                   <p className="font-bold mb-2 text-primary dark:text-black">
//                     {t("dtool")}
//                   </p>
//                   <ul className="list-disc list-inside">
//                     <li>Multi-tenant SaaS architecture</li>
//                     <li>JWT auth & RBAC (Admin/Pharmacist/Staff)</li>
//                     <li>Razorpay, WhatsApp Business, SMS APIs</li>
//                     <li>i18next multi-language support</li>
//                   </ul>
//                 </div>

//                 {/* CARD 2 — Frontend work */}
//                 <div className="flex flex-col items-center mb-6">
//                   <span className="fa-stack fa-2x">
//                     <div className="flex justify-center items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 100 100"
//                         className="w-14 h-auto"
//                         fill={darkMode ? "#000000" : "#5540af"}
//                       >
//                         <title>frontend</title>
//                         <path d="M61.996,22.231c-0.929,0-1.858,0.563-2.225,1.434L35.919,74.337c-0.591,1.152-0.028,2.699,1.126,3.233   c1.154,0.534,2.704-0.056,3.182-1.209l23.852-50.7c0.338-0.703,0.311-1.603-0.112-2.278C63.573,22.709,62.785,22.259,61.996,22.231   L61.996,22.231z M32.371,30.189c-0.62,0.056-1.211,0.337-1.633,0.787L14.854,48.41c-0.789,0.872-0.789,2.334,0,3.178l15.883,17.435   c0.845,0.984,2.506,1.096,3.436,0.252c0.958-0.871,1.014-2.53,0.113-3.43L19.839,50.013l14.447-15.832   c0.647-0.703,0.789-1.799,0.394-2.643C34.258,30.695,33.3,30.133,32.371,30.189L32.371,30.189z M67.348,30.189   c-0.901,0.056-1.746,0.646-2.084,1.49c-0.338,0.815-0.142,1.828,0.45,2.502l14.447,15.832L65.714,65.845   c-0.901,0.899-0.845,2.559,0.112,3.43c0.93,0.844,2.591,0.732,3.436-0.252l15.884-17.435c0.788-0.844,0.788-2.306,0-3.178   L69.262,30.976C68.783,30.442,68.051,30.161,67.348,30.189L67.348,30.189z"></path>
//                       </svg>
//                     </div>
//                   </span>
//                   <h1 className="text-xl font-semibold mb-2">
//                     {t("frontend")}
//                   </h1>
//                   <p className="mb-4">{t("frontendDsc")}</p>
//                   <p className="font-semibold text-lg mt-2 text-primary dark:text-black">
//                     {t("frontendLanguage")}
//                   </p>
//                   <p className="mb-4">
//                     React.js, Next.js, Redux Toolkit, TypeScript, Tailwind CSS
//                   </p>
//                   <p className="font-bold mb-2 text-primary dark:text-black">
//                     {t("ftool")}
//                   </p>
//                   <ul className="list-disc list-inside">
//                     <li>Billing & inventory dashboards</li>
//                     <li>Supplier & purchase modules</li>
//                     <li>Reusable component library (Storybook)</li>
//                     <li>SSR + lazy loading — 90+ Lighthouse score</li>
//                   </ul>
//                 </div>

//                 {/* CARD 3 — Backend & Infra */}
//                 <div className="flex flex-col items-center">
//                   <span className="fa-stack fa-2x">
//                     <div className="flex justify-center items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 100 100"
//                         className="w-14 h-auto"
//                         fill={darkMode ? "#000000" : "#5540af"}
//                       >
//                         <title>backend</title>
//                         <path d="M82,41a9.01,9.01,0,0,0-8.768,7H57.788a4.967,4.967,0,0,1-4.659-3.188L49.6,35.738A8.944,8.944,0,0,0,41.211,30H26.768a9,9,0,1,0,0,4H41.211a4.968,4.968,0,0,1,4.66,3.188L49.4,46.262A8.973,8.973,0,0,0,52.152,50,8.971,8.971,0,0,0,49.4,53.738l-3.53,9.075A4.967,4.967,0,0,1,41.211,66H26.768a9,9,0,1,0,0,4H41.211A8.943,8.943,0,0,0,49.6,64.262l3.53-9.075A4.967,4.967,0,0,1,57.788,52H73.232A9,9,0,1,0,82,41ZM18,37a5,5,0,1,1,5-5A5.006,5.006,0,0,1,18,37Zm0,36a5,5,0,1,1,5-5A5.006,5.006,0,0,1,18,73ZM82,55a5,5,0,1,1,5-5A5.006,5.006,0,0,1,82,55Z" />
//                       </svg>
//                     </div>
//                   </span>
//                   <h1 className="text-xl font-semibold mb-2">{t("backend")}</h1>
//                   <p className="mb-4">{t("backendDsc")}</p>
//                   <p className="font-semibold text-lg mt-2 text-primary dark:text-black">
//                     {t("backendLanguage")}
//                   </p>
//                   <p className="mb-4">
//                     Node.js, Express.js, Prisma ORM, MySQL, PostgreSQL
//                   </p>
//                   <p className="font-bold mb-2 text-primary dark:text-black">
//                     {t("btool")}
//                   </p>
//                   <ul className="list-disc list-inside">
//                     <li>REST APIs + JWT authentication</li>
//                     <li>Docker containerization</li>
//                     <li>CI/CD pipelines on Azure</li>
//                     <li>Postman & DevTools debugging</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
