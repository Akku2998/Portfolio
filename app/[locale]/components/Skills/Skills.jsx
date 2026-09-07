"use client";

import Image from "next/image";
import { Html5, Nextjs, Github } from "../../svgs";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: "html",
    description: "Semantic and accessible web structure",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "react",
    description: "Component-based UI development",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "javascript",
    description: "Modern ES6+ application development",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "typescript",
    description: "Type-safe and maintainable applications",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "nextjs",
    description: "SSR, routing and full-stack applications",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "tailwind",
    description: "Responsive and modern UI development",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "node",
    description: "Scalable server-side applications",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "express",
    description: "REST API and backend development",
  },
  {
    name: "Prisma ORM",
    category: "Database",
    icon: "prisma",
    description: "Database schema and type-safe queries",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "mysql",
    description: "Relational database design",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "docker",
    description: "Containerization and deployment",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "github",
    description: "Version control and collaboration",
  },
];

const categoryColors = {
  Frontend: "text-voilet-50 dark:text-yellow-400",
  Backend: "text-blue-600 dark:text-yellow-400",
  Database: "text-green-600 dark:text-yellow-400",
  DevOps: "text-orange-600 dark:text-yellow-400",
  Tools: "text-gray-700 dark:text-yellow-400",
};

const SkillIcon = ({ icon }) => {
  switch (icon) {
    case "html":
      return <Html5 />;

    case "nextjs":
      return <Nextjs />;

    case "github":
      return <Github width="70px" height="70px" />;

    case "react":
      return (
        <Image
          src="/react.svg"
          alt="React.js"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "javascript":
      return (
        <Image
          src="/js.svg"
          alt="JavaScript"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "typescript":
      return (
        <Image
          src="https://cdn.simpleicons.org/typescript"
          alt="TypeScript"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "tailwind":
      return (
        <Image
          src="/tailwind.svg"
          alt="Tailwind CSS"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "node":
      return (
        <Image
          src="https://cdn.simpleicons.org/nodedotjs"
          alt="Node.js"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "express":
      return (
        <Image
          src="https://cdn.simpleicons.org/express"
          alt="Express.js"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "mysql":
      return (
        <Image
          src="https://cdn.simpleicons.org/mysql"
          alt="MySQL"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "prisma":
      return (
        <Image
          src="https://cdn.simpleicons.org/prisma"
          alt="Prisma ORM"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    case "docker":
      return (
        <Image
          src="https://cdn.simpleicons.org/docker"
          alt="Docker"
          width={70}
          height={70}
          className="h-[70px] w-[70px]"
        />
      );

    default:
      return null;
  }
};

export const Skills = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      ref={(element) => {
        if (element) {
          setPageRef("skills", element);
        }
      }}
      className="relative overflow-hidden bg-gray-50 py-8 dark:bg-[#111111] sm:py-8 lg:py-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-voilet-50 dark:text-yellow-400">
            Technical Skills
          </span>

          <h2 className="mt-5 font-header text-4xl font-bold uppercase tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t("goodAt")}
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-voilet-50 dark:bg-yellow-400" />

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t("theseSkill")}
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-voilet-50 transition-all duration-300 group-hover:w-full" />

              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-300 group-hover:bg-purple-50 dark:bg-white/5 dark:group-hover:bg-yellow-400/10">
                <div className="h-[70px] w-[70px] [&_svg]:h-[70px] [&_svg]:w-[70px]">
                  <SkillIcon icon={skill.icon} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      categoryColors[skill.category]
                    }`}
                  >
                    {skill.category}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Summary */}
        <div className="mt-12 rounded-2xl border border-voilet-50 dark:border-yellow-400/20  p-6 text-center sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
            Full Stack Technology Stack
          </p>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            React.js • Next.js • Redux Toolkit • TypeScript • Tailwind CSS •
            Node.js • Express.js • REST APIs • JWT • RBAC • Prisma • MySQL •
            PostgreSQL • Docker • Azure • Git • GitHub • Storybook
          </p>
        </div>
      </div>
    </section>
  );
};

// "use client";
// import Image from "next/image";
// import { Html5, Nextjs, Github } from "../../svgs";
// import { useTranslation } from "react-i18next";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// const skillCardClass =
//   "group p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500 hover:dark:bg-black hover:dark:text-white";

// export const Skills = ({ setPageRef }) => {
//   const { t } = useTranslation();
//   const { darkMode } = useContext(DarkModeContext);

//   return (
//     <>
//       <section
//         className="container py-16 md:py-20 mx-auto mt-8 text-center "
//         ref={(element) => setPageRef("skills", element)}
//       >
//         <h2
//           className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl"
//           style={{ color: darkMode ? "#000000" : "rgba(85, 64, 175)" }}
//         >
//           {t("goodAt")}
//         </h2>
//         <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
//           {t("theseSkill")}
//         </h3>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
//           <div className={skillCardClass}>
//             <Html5 />
//             HTML5
//           </div>
//           <div className={skillCardClass}>
//             <Image src="/react.svg" alt="React" width={100} height={100} />
//             React.js
//           </div>
//           <div className={skillCardClass}>
//             <Image src="/js.svg" alt="js" width={100} height={100} />
//             JavaScript
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/typescript"
//               alt="TypeScript"
//               width={100}
//               height={100}
//             />
//             TypeScript
//           </div>
//           <div className={skillCardClass}>
//             <Nextjs />
//             Next.js
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="/tailwind.svg"
//               alt="tailwind"
//               width={100}
//               height={100}
//             />
//             Tailwind CSS
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/nodedotjs"
//               alt="Node.js"
//               width={100}
//               height={100}
//             />
//             Node.js
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/express"
//               alt="Express.js"
//               width={100}
//               height={100}
//             />
//             Express.js
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/mysql"
//               alt="MySQL"
//               width={100}
//               height={100}
//             />
//             MySQL
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/prisma"
//               alt="Prisma"
//               width={100}
//               height={100}
//             />
//             Prisma ORM
//           </div>
//           <div className={skillCardClass}>
//             <Image
//               src="https://cdn.simpleicons.org/docker"
//               alt="Docker"
//               width={100}
//               height={100}
//             />
//             Docker
//           </div>
//           <div className={skillCardClass}>
//             <Github width="100px" height="100px" />
//             GitHub
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
