"use client";

import Link from "next/link";
import { Github, Facebook, Linkedin, Insta, Chevron } from "../../svgs";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const AboutSection = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const strengths = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and scalable interfaces using React.js, Next.js, TypeScript and Tailwind CSS.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description:
        "Developing secure REST APIs, authentication systems and backend services with Node.js and Express.js.",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      title: "Database & Architecture",
      description:
        "Designing reliable database structures and scalable application architecture for production applications.",
      skills: ["Prisma", "MySQL", "PostgreSQL", "Multi-Tenant"],
    },
  ];

  return (
    <section
      ref={(element) => setPageRef("about", element)}
      className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#111111] sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-voilet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white dark:text-yellow-400 dark:bg-white">
            About Me
          </span>

          <h2 className="mt-5 font-header text-4xl font-bold uppercase tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t("whoAmI")}
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-yellow-400" />
        </div>

        {/* Main About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-voilet-50 dark:text-yellow-400">
              Full Stack Developer
            </p>

            <h3 className="font-header text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              Building modern applications with{" "}
              <span className="text-voilet-50 dark:text-yellow-400">
                clean & scalable code.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
              {t("intro")}
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              I have hands-on experience building production applications using
              React.js, Next.js, Node.js, Express.js, Prisma and SQL databases.
              My work includes secure authentication, RBAC, multi-tenant SaaS
              architecture, REST APIs and third-party integrations.
            </p>

            {/* Experience highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-3xl font-bold text-voilet-50 dark:text-yellow-400">
                  2+
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-3xl font-bold text-voilet-50 dark:text-yellow-400">
                  15+
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:col-span-1">
                <p className="text-3xl font-bold text-voilet-50 dark:text-yellow-400">
                  1
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Production SaaS
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center">
                <p className="font-body text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                  {t("connectMe")}
                </p>

                <span className="ml-3 text-voilet-50 dark:text-yellow-400">
                  <Chevron color="currentColor" />
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/nidhi.gupta.16524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-yellow-400"
                >
                  <Facebook color="currentColor" />
                </Link>

                <Link
                  href="https://github.com/Akku2998"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-yellow-400"
                >
                  <Github color="currentColor" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nidhi-gupta-aakriti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-yellow-400"
                >
                  <Linkedin color="currentColor" />
                </Link>

                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-yellow-400"
                >
                  <Insta color="currentColor" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-voilet-50 dark:text-yellow-400">
                What I Do
              </p>

              <h3 className="mt-2 font-header text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                My Core Expertise
              </h3>
            </div>

            <div className="space-y-5">
              {strengths.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-voilet-50 text-sm font-bold text-white transition-colors group-hover:bg-yellow-400 group-hover:text-gray-900 dark:bg-yellow-400 dark:text-gray-900">
                      0{index + 1}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom tech line */}
            <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">
                  Also experienced with:
                </span>{" "}
                Redux Toolkit, React Native, Docker, Azure, CI/CD, Storybook,
                Postman, Git and third-party API integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// "use client";
// import Link from "next/link";
// import { Github, Facebook, Linkedin, Insta, Chevron } from "../../svgs";
// import { useTranslation } from "react-i18next";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// export const AboutSection = ({ setPageRef }) => {
//   const { t } = useTranslation();
//   const { darkMode } = useContext(DarkModeContext);
//   return (
//     <div
//       className="bg-gray-100 dark:bg-gray-300 "
//       ref={(element) => setPageRef("about", element)}
//     >
//       <div className="container mx-auto flex flex-col items-center py-16 px-6 md:py-20 lg:flex-row">
//         <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
//           <h2 className="font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl text-voilet-50 dark:text-black">
//             {t("whoAmI")}
//           </h2>

//           <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
//             {t("webDeveloper")}
//           </h4>
//           <p className="pt-6 font-mono leading-relaxed text-gray-500">
//             {t("intro")}
//           </p>
//           <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
//             <div className="flex items-center justify-center sm:justify-start">
//               <p className="font-body text-lg font-semibold uppercase text-gray-600">
//                 {t("connectMe")}
//               </p>

//               <div className="hidden sm:block">
//                 <i className="text-3xl text-voilet-50">
//                   <Chevron color="currentColor" />
//                 </i>
//               </div>
//             </div>
//             <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
//               <Link
//                 href="https://www.facebook.com/nidhi.gupta.16524"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="text-2xl text-voilet-50 dark:text-black hover:text-yellow-500 hover:dark:text-white">
//                   <Facebook color="currentColor" />
//                 </i>
//               </Link>
//               <Link
//                 href="https://github.com/Akku2998"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="pl-4"
//               >
//                 <i className="text-2xl text-voilet-50 dark:text-black hover:text-yellow-500 hover:dark:text-white">
//                   <Github color="currentColor" />
//                 </i>
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/nidhi-gupta-aakriti/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="pl-4"
//               >
//                 <i className="text-2xl text-voilet-50 dark:text-black hover:text-yellow-500 hover:dark:text-white">
//                   <Linkedin color="currentColor" />
//                 </i>
//               </Link>
//               <Link
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="pl-4"
//               >
//                 <i className="text-2xl text-voilet-50 dark:text-black hover:text-yellow-500 hover:dark:text-white">
//                   <Insta color="currentColor" />
//                 </i>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
//           <div className="flex items-end justify-between">
//             <h4 className="font-semibold uppercase text-black">{t("react")}</h4>
//             <h3 className="text-3xl font-semibold font-mono text-voilet-50 dark:text-black">
//               90%
//             </h3>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
//             <div className="h-2.5 rounded-full w-[90%] bg-voilet-50 dark:bg-black"></div>
//           </div>

//           <div className="pt-6">
//             <div className="flex items-end justify-between">
//               <h4 className="font-semibold uppercase text-black">
//                 {t("next")}
//               </h4>
//               <h3 className="text-3xl font-semibold font-mono text-voilet-50 dark:text-black">
//                 93%
//               </h3>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
//               <div className="h-2.5 rounded-full w-[93%] bg-voilet-50 dark:bg-black"></div>
//             </div>
//           </div>
//           <div className="pt-6">
//             <div className="flex items-end justify-between">
//               <h4 className="font-semibold uppercase text-black">
//                 {t("node")}
//               </h4>
//               <h3 className="text-3xl font-semibold font-mono text-voilet-50 dark:text-black">
//                 88%
//               </h3>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
//               <div className="h-2.5 rounded-full w-[88%] bg-voilet-50 dark:bg-black"></div>
//             </div>
//           </div>
//           <div className="pt-6">
//             <div className="flex items-end justify-between">
//               <h4 className="font-semibold uppercase text-black">{t("sql")}</h4>
//               <h3 className="text-3xl font-semibold font-mono text-voilet-50 dark:text-black">
//                 85%
//               </h3>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
//               <div className="h-2.5 rounded-full w-[85%] bg-voilet-50 dark:bg-black"></div>
//             </div>
//           </div>
//           <div className="pt-6">
//             <div className="flex items-end justify-between">
//               <h4 className="font-semibold uppercase text-black">
//                 {t("docker")}
//               </h4>
//               <h3 className="text-3xl font-semibold font-mono text-voilet-50 dark:text-black">
//                 75%
//               </h3>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
//               <div className="h-2.5 rounded-full w-[75%] bg-voilet-50 dark:bg-black"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
