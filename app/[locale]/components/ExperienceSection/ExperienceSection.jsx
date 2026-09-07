"use client";

import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const ExperienceSection = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  const contributions = [
    "Built and maintained full-stack features for a production pharmacy management SaaS application.",
    "Developed secure REST APIs using Node.js and Express.js with JWT authentication and role-based access control.",
    "Worked on multi-tenant architecture to keep pharmacy-level data and access isolated.",
    "Implemented business workflows for medicines, inventory, billing, purchases, suppliers, and customers.",
    "Designed and managed database schemas, migrations, queries, and transactions using Prisma ORM and MySQL.",
    "Integrated third-party services for payments, WhatsApp Business, and SMS communication.",
    "Worked with Docker, CI/CD pipelines, and Azure for application deployment and production environments.",
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "MySQL",
    "JWT",
    "RBAC",
    "Docker",
    "Azure",
  ];

  return (
    <section
      id="experience"
      ref={(element) => setPageRef("experience", element)}
      className="bg-white py-12 dark:bg-[#0d0d0d] sm:py-14"
    >
      <div className="container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary dark:bg-yellow-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-yellow-400">
              Professional Experience
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Experience that goes beyond just writing code.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Over 2+ years of experience building production-ready web
            applications, working across frontend, backend, databases,
            authentication, integrations, and deployment.
          </p>
        </div>

        {/* Experience Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-[#151515]">
          {/* Top Company Area */}
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-yellow-400">
                    01 / Professional Experience
                  </p>

                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Cyrasoft Lab Technologies Pvt Ltd
                  </h3>

                  <p className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                    Full Stack Developer
                  </p>
                </div>

                {/* Experience Badge */}
                <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 dark:border-yellow-400/20 dark:bg-yellow-400/5">
                  <p className="text-2xl font-bold text-primary dark:text-yellow-400">
                    2+
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* Date / Location */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-gray-200 py-4 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
                <span>May 2024 — Present</span>
                <span>•</span>
                <span>Bengaluru, India</span>
              </div>

              {/* Project */}
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-primary dark:bg-yellow-400" />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
                      Main Product
                    </p>

                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Pharmacy Management SaaS
                    </h4>
                  </div>
                </div>

                <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400">
                  A production-focused pharmacy management application built to
                  support daily pharmacy operations including medicines,
                  inventory, purchases, suppliers, customers, billing, and
                  related business workflows.
                </p>
              </div>
            </div>

            {/* Right Accent Panel */}
            <div className="relative hidden w-52 overflow-hidden bg-primary lg:block dark:bg-yellow-400">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/20 dark:border-black/10" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-white/20 dark:border-black/10" />

              <div className="relative flex h-full flex-col justify-between p-8">
                <span className="text-7xl font-black text-white/20 dark:text-black/15">
                  01
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 dark:text-black/60">
                    Role
                  </p>

                  <p className="mt-2 text-xl font-bold text-white dark:text-black">
                    Full Stack
                    <br />
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contributions */}
          <div className="border-t border-gray-200 p-7 dark:border-white/10 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-yellow-400">
                  What I Worked On
                </p>

                <h4 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Key Contributions
                </h4>

                <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Working across the complete application lifecycle, from
                  frontend development and API design to databases,
                  integrations, deployment, and production support.
                </p>
              </div>

              {/* Right */}
              <div>
                <div className="space-y-4">
                  {contributions.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary dark:bg-yellow-400" />

                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-white/10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                Technologies Used
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-yellow-400 dark:hover:text-yellow-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex flex-col gap-4 border-l-2 border-primary pl-5 dark:border-yellow-400">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            From UI development to backend architecture and deployment.
          </p>

          <p className="max-w-3xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            My experience covers the complete development cycle, allowing me to
            understand both product requirements and the technical decisions
            needed to build maintainable applications.
          </p>
        </div>
      </div>
    </section>
  );
};
