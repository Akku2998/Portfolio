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

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Github, Linkedin, Facebook, Twitter, Insta } from "../../svgs";

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
        className="absolute inset-0 bg-[#09090f]/95"
        style={{
          background: darkMode
            ? "linear-gradient(120deg, rgba(8,8,15,0.97), rgba(25,20,45,0.96))"
            : "linear-gradient(120deg, rgba(54,39,130,0.97), rgba(91,69,181,0.92))",
        }}
      />

      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-white/10" />

      {/* Main Hero */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 py-28 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              {/* Experience Badge */}
              <div className="mb-5 inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
                <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-sm font-semibold tracking-wide text-yellow-300">
                  2+ YEARS EXPERIENCE
                </span>
              </div>

              {/* Small Heading */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-base">
                Full Stack Developer
              </p>

              {/* Main Heading */}
              <h1 className="font-header text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Hi, I&apos;m{" "}
                <span className="text-yellow-400">Nidhi Kumari</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 lg:mx-0">
                I build scalable, secure and high-performance web applications
                using modern frontend and backend technologies.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base lg:mx-0">
                Experienced in React.js, Next.js, Node.js, Express.js, Prisma,
                MySQL, REST APIs, JWT authentication and multi-tenant SaaS
                applications.
              </p>

              {/* Technology Stack */}
              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  React.js
                </span>

                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  Next.js
                </span>

                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  Node.js
                </span>

                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  TypeScript
                </span>

                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  Prisma
                </span>

                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  MySQL
                </span>
              </div>

              {/* CTA Buttons */}
              {/* <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"> */}
              {/* Download Resume */}
              {/* <a
                  href="/Nidhi-Kumari-Resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-lg bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
                > */}
              {/* <Link
                  href="/Nidhi_Kumari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </Link>

                <Link
                  href="#portfolio"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
                >
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div> */}
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                {/* Download Resume */}
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

                {/* View Work */}
                <Link
                  href="#work"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
                >
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                {/* Let's Talk */}
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
                >
                  {t("letsTalk")}
                </Link>
              </div>
              {/* Bottom Information */}
              <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/60 sm:flex-row lg:justify-start">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 21l-4.243-4.343a8 8 0 1111.314 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Bengaluru, India
                </div>

                <span className="hidden text-white/30 sm:block">|</span>

                <a
                  href="mailto:aakritinidhi123@gmail.com"
                  className="transition-colors hover:text-yellow-400"
                >
                  aakritinidhi123@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-7 flex items-center justify-center gap-5 lg:justify-start">
                <Link
                  href="https://www.linkedin.com/in/nidhi-gupta-aakriti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
                >
                  <Linkedin color="currentColor" />
                </Link>

                <Link
                  href="https://github.com/Akku2998"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
                >
                  <Github color="currentColor" />
                </Link>

                <Link
                  href="https://www.facebook.com/nidhi.gupta.16524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
                >
                  <Facebook color="currentColor" />
                </Link>

                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
                >
                  <Twitter color="currentColor" />
                </Link>

                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
                >
                  <Insta color="currentColor" />
                </Link>
              </div>
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute -inset-5 rounded-full bg-yellow-400/10 blur-2xl" />

                {/* Image Container */}
                <div className="relative rounded-[50%] border-8 border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[50%] border-4 border-yellow-400/70">
                    <Image
                      src="/user.jpg"
                      alt="Nidhi Kumari"
                      width={300}
                      height={300}
                      priority
                      className="h-[300px] w-[300px] object-cover"
                    />
                  </div>
                </div>
                {/* <div className="relative rounded-full border-8 border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                  <div className="overflow-hidden rounded-full border-4 border-yellow-400/70">
                    <Image
                      src="/user.jpg"
                      alt="Nidhi Kumari"
                      width={320}
                      height={320}
                      priority
                      className="h-64 w-64 object-cover sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[360px] lg:w-[360px]"
                    />
                  </div>
                </div> */}

                {/* Floating Experience Card */}
                <div className="absolute -bottom-4 -left-6 rounded-xl border border-white/10 bg-black/50 px-5 py-3 shadow-xl backdrop-blur-md sm:-left-10">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Experience
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">2+ Years</p>
                </div>

                {/* Floating Stack Card */}
                <div className="absolute -right-5 top-10 rounded-xl border border-white/10 bg-black/50 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-10">
                  <p className="text-xs text-white/50">Specialization</p>

                  <p className="mt-1 text-sm font-semibold text-yellow-400">
                    Full Stack
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
//========================

// "use client";
// import Link from "next/link";
// import {
//   Github,
//   Facebook,
//   Linkedin,
//   Twitter,
//   Insta,
//   Chevron,
// } from "../../svgs";
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
//               alt="user"
//             />
//           </div>
//           <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
//             <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
//               {t("heroIntro")}
//             </h1>
//             <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
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
//                   href="https://www.google.com/search?q=twitter&sca_esv=597209220&sxsrf=ACQVn0-eN7yflYsrX9C0uEzMCMTSXU71BQ%3A1704894340311&ei=hJ-eZc_MEqrV4-EPpOGdyAo&ved=0ahUKEwjPnqKs-tKDAxWq6jgGHaRwB6kQ4dUDCBA&uact=5&oq=twitter&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3R3aXR0ZXIyChAjGIAEGIoFGCcyFxAuGIMBGMcBGJECGLEDGNEDGIAEGIoFMhAQABiABBgUGIcCGLEDGIMBMg4QABiABBiKBRiRAhixAzIREAAYgAQYigUYkQIYsQMYgwEyCxAAGIAEGIoFGJECMhEQABiABBiKBRiRAhixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj1D1DqBFifCXABeACQAQCYAWmgAYQDqgEDMy4xuAEDyAEA-AEBwgIJEAAYBxgeGLADwgIOEAAYgAQYsQMYgwEYsAPCAggQABiABBiwA8ICChAAGIAEGBQYhwLCAgUQABiABOIDBBgBIEGIBgGQBgo&sclient=gws-wiz-serp"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-4"
//                 >
//                   <i className="bx bxl-twitter text-2xl text-white hover:text-yellow-500">
//                     <Twitter color="currentColor" />
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
