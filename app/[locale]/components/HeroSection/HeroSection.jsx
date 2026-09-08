"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiAssistant } from "../AiAssistant/AiAssistant";
import { DarkModeContext } from "../../context/darkModeContext";

export const HeroSection = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

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
                  onClick={() => setIsAiAssistantOpen(true)}
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
      <AiAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />
    </section>
  );
};
