// "use client";
// import Link from "next/link";
// import { Github, Facebook, Linkedin, Insta, Chevron } from "../../svgs";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// export const HeroSection = () => {
//   const { t } = useTranslation();
//   const { darkMode } = useContext(DarkModeContext);
//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat py-8"
//       style={{
//         backgroundImage:
//           "url(https://atom.redpixelthemes.com/assets/img/bg-hero.jpg)",
//       }}
//     >
//       <div
//         className="absolute inset-0 z-20"
//         style={{
//           backgroundImage: darkMode
//             ? "linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.87))"
//             : "linear-gradient(to right, rgba(85,64,174,.95), rgba(65,47,144,.93))",
//         }}
//       />

//       <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
//         <div className="flex flex-col items-center justify-center lg:flex-row">
//           <div className="rounded-full border-8 shadow-xl border-voilet-50 dark:border-dark-50">
//             <Image
//               loading="eager"
//               src="/user.jpg"
//               className="h-64 w-64 object-cover rounded-full"
//               height={200}
//               width={200}
//               alt="Nidhi Kumari"
//             />
//           </div>
//           <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
//             <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
//               {t("heroIntro")}
//             </h1>
//             <h2 className="text-center sm:text-left pt-3 text-xl text-yellow-400 font-semibold sm:text-2xl">
//               {t("heroRole")}
//             </h2>
//             <p className="text-center sm:text-left pt-3 max-w-xl text-white/80 leading-relaxed">
//               {t("heroSummary")}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center sm:justify-start">
//               <Link
//                 href="/Nidhi_Kumari_Resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full text-center hover:bg-yellow-400 transition"
//               >
//                 {t("downloadResume")}
//               </Link>
//               <Link
//                 href="#contact"
//                 className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full text-center hover:bg-white hover:text-black transition"
//               >
//                 {t("letsTalk")}
//               </Link>
//             </div>

//             <div className="flex flex-col justify-center pt-6 sm:flex-row sm:pt-8 lg:justify-start">
//               <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
//                 <p className="font-body text-lg uppercase text-white">
//                   {t("connect")}
//                 </p>
//                 <div className="hidden sm:flex">
//                   <i className="text-3xl text-yellow-400">
//                     <Chevron color="currentColor" />
//                   </i>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
//                 <Link
//                   href="https://www.facebook.com/nidhi.gupta.16524"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-4"
//                 >
//                   <i className="text-2xl text-white hover:text-yellow-500">
//                     <Facebook color="currentColor" />
//                   </i>
//                 </Link>
//                 <Link
//                   href="https://github.com/Akku2998"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-4"
//                 >
//                   <i className="text-2xl text-white hover:text-yellow-500">
//                     <Github color="currentColor" />
//                   </i>
//                 </Link>
//                 <Link
//                   href="https://www.linkedin.com/in/nidhi-gupta-aakriti/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-4"
//                 >
//                   <i className="text-2xl text-white hover:text-yellow-500">
//                     <Linkedin color="currentColor" />
//                   </i>
//                 </Link>
//                 <Link
//                   href="https://www.instagram.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-4"
//                 >
//                   <i className="text-2xl text-white hover:text-yellow-500">
//                     <Insta color="currentColor" />
//                   </i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { DarkModeContext } from "../../context/darkModeContext";

export const HeroSection = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://atom.redpixelthemes.com/assets/img/bg-hero.jpg)",
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: darkMode
            ? "linear-gradient(120deg, rgba(8,8,15,0.98), rgba(20,20,28,0.97))"
            : "linear-gradient(120deg, rgba(54,39,130,0.97), rgba(91,69,181,0.93))",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 py-28 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              {/* Small Label */}
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-yellow-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                  Full Stack Developer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-header text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Hi, I&apos;m{" "}
                <span className="text-yellow-400">Nidhi Kumari</span>
              </h1>

              {/* Short Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:mx-0">
                I build scalable, secure, and production-ready web applications
                using modern frontend and backend technologies.
              </p>

              {/* Technology Stack */}
              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
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
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm transition-colors hover:border-yellow-400/50 hover:text-yellow-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                {/* Resume */}
                <a
                  href="/Nidhi_Kumari_Resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-lg bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Download Resume
                </a>

                {/* AI Assistant */}
                <button
                  type="button"
                  onClick={() => {
                    // TODO:
                    // Open your AI portfolio assistant here.
                    // Example:
                    // setIsAiAssistantOpen(true);
                  }}
                  className="group inline-flex w-full items-center justify-center rounded-lg border border-yellow-400/60 bg-yellow-400/10 px-6 py-3.5 text-sm font-semibold text-yellow-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.5 3.5h5l1 3 2.5 1.5-1 3 1 3-2.5 1.5-1 3h-5l-1-3L6 14l1-3-1-3 2.5-1.5 1-3z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 11h.01M14 11h.01M10.5 14c.8.6 2.2.6 3 0"
                    />
                  </svg>
                  Ask My AI Assistant
                </button>
                <Link
                  href="#contact"
                  className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-yellow-400
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-yellow-400
                  transition
                  hover:bg-yellow-400
                  hover:text-black
                  sm:w-auto
                "
                >
                  Let&rsquo;s Talk
                </Link>
              </div>

              {/* Small Professional Info */}
              <div className="mt-8 flex flex-col items-center gap-3 text-sm text-white/50 sm:flex-row lg:justify-start">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Available for opportunities
                </span>

                <span className="hidden text-white/20 sm:block">•</span>

                <span>2+ Years Experience</span>
              </div>
            </div>

            {/* RIGHT PROFILE */}
            {/* <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
              
                <div className="absolute -inset-8 rounded-full bg-yellow-400/10 blur-3xl" />

               
                <div className="relative">
                  <div className="rounded-[50%] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
                    <div className="overflow-hidden rounded-[50%] border-4 border-yellow-400/70">
                      <Image
                        src="/user.jpg"
                        alt="Nidhi Kumari - Full Stack Developer"
                        width={360}
                        height={360}
                        priority
                        className="h-[280px] w-[280px] object-cover sm:h-[330px] sm:w-[330px] lg:h-[360px] lg:w-[360px]"
                      />
                    </div>
                  </div>

                  
                  <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-10">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                      Experience
                    </p>

                    <p className="mt-1 text-xl font-bold text-white">
                      2+ Years
                    </p>
                  </div>

                  
                  <div className="absolute -right-5 top-8 rounded-2xl border border-yellow-400/20 bg-black/60 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-10">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                      Specialization
                    </p>

                    <p className="mt-1 text-sm font-bold text-yellow-400">
                      Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* ================================
              RIGHT SIDE / PROFILE
          ================================= */}

            <div
              className="
              order-1
              flex
              justify-center
              lg:order-2
            "
            >
              <div
                className="
                relative
                mt-4
                sm:mt-6
                lg:mt-0
              "
              >
                {/* Outer Circle */}
                <div
                  className="
                  absolute
                  inset-[-10px]
                  rounded-full
                  border
                  border-yellow-400/30
                  sm:inset-[-15px]
                "
                />

                <div
                  className="
                  absolute
                  inset-[-18px]
                  rounded-full
                  border
                  border-white/10
                  sm:inset-[-25px]
                "
                />

                {/* Profile Image */}
                <div
                  className="
                  relative
                  h-[175px]
                  w-[175px]
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white/20
                  bg-white/10
                  shadow-2xl

                  sm:h-[220px]
                  sm:w-[220px]

                  md:h-[270px]
                  md:w-[270px]

                  lg:h-[350px]
                  lg:w-[350px]
                "
                >
                  <Image
                    src="/user.jpg"
                    alt="Nidhi Kumari"
                    width={350}
                    height={350}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* ==========================
                  EXPERIENCE CARD
              =========================== */}
                {/* <div
                  className="
                  absolute
                  -bottom-3
                  -left-5
                  rounded-lg
                  border
                  border-white/10
                  bg-black/80
                  px-3
                  py-2
                  shadow-lg
                  backdrop-blur-md

                  sm:-bottom-4
                  sm:-left-8
                  sm:px-4
                  sm:py-3
                "
                >
                  <p
                    className="
                    text-base
                    font-bold
                    text-yellow-400
                    sm:text-lg

                  "
                  >
                    2+
                  </p>

                  <p
                    className="
                    text-[8px]
                    uppercase
                    tracking-wide
                    text-white/70
                    sm:text-[10px]
                  "
                  >
                    Years Experience
                  </p>
                </div>

                <div
                  className="
                  absolute
                  -right-5
                  top-0
                  max-w-[130px]
                  rounded-lg
                  border
                  border-white/10
                  bg-black/80
                  px-3
                  py-2
                  shadow-lg
                  backdrop-blur-md

                  sm:-right-8
                  sm:top-3
                  sm:max-w-none
                  sm:px-4
                  sm:py-3
                "
                >
                  <p
                    className="
                    text-[9px]
                    font-semibold
                    text-white
                    sm:text-xs
                  "
                  >
                    Specialization
                  </p>

                  <p
                    className="
                    mt-0.5
                    text-[9px]
                    leading-4
                    text-yellow-400
                    sm:mt-1
                    sm:text-xs
                  "
                  >
                    Full Stack Development
                  </p>
                </div> */}
                {/* ==========================
    EXPERIENCE CARD
=========================== */}
                <div
                  className="
    absolute
    -bottom-2
    -left-3
    rounded-md
    border
    border-white/10
    bg-black/80
    px-2
    py-1
    shadow-lg
    backdrop-blur-md

    sm:-bottom-4
    sm:-left-8
    sm:rounded-lg
    sm:px-4
    sm:py-3
  "
                >
                  <p
                    className="
      text-sm
      font-bold
      leading-none
      text-yellow-400

      sm:text-lg
    "
                  >
                    2+
                  </p>

                  <p
                    className="
      mt-0.5
      whitespace-nowrap
      text-[6px]
      uppercase
      tracking-wide
      text-white/70

      sm:mt-1
      sm:text-[10px]
    "
                  >
                    Years Experience
                  </p>
                </div>

                {/* ==========================
    SPECIALIZATION CARD
=========================== */}
                <div
                  className="
    absolute
    -right-3
    top-0
    max-w-[100px]
    rounded-md
    border
    border-white/10
    bg-black/80
    px-2
    py-1.5
    shadow-lg
    backdrop-blur-md

    sm:-right-8
    sm:top-3
    sm:max-w-none
    sm:rounded-lg
    sm:px-4
    sm:py-3
  "
                >
                  <p
                    className="
      text-[7px]
      font-semibold
      leading-none
      text-white

      sm:text-xs
    "
                  >
                    Specialization
                  </p>

                  <p
                    className="
      mt-0.5
      text-[7px]
      leading-3
      text-yellow-400

      sm:mt-1
      sm:text-xs
      sm:leading-4
    "
                  >
                    Full Stack Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
