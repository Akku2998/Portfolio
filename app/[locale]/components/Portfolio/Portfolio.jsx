"use client";
import { Hero } from "../../svgs/Hero";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "..";
import { useContext } from "react";

export const Portfolio = ({ setPageRef }) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);
  const projects = [
    {
      title: t("project1"),
      description: t("project1Dsc"),
      technologies: ["HTMl", "CSS", "javaScript", "C#"],
    },
    {
      title: t("project2"),
      description: t("project2Dsc"),
      technologies: ["HTML", "CSS", "Tailwind", "RactJS", "Routers"],
    },
    {
      title: t("project3"),
      description: t("project3Dsc"),
      technologies: ["React.js", "Nextjs", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <div className="flex justify-center mb-[-0.2rem] mt-16">
        <Hero color={darkMode ? "#000000" : "#6E07F3"} />
      </div>
      <section
        className="section bg-primary dark:bg-black text-white pb-52"
        ref={(element) => setPageRef("portfolio", element)}
      >
        <div className="container mx-auto">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-header py-16 md:py-10 mx-auto mt-8 text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
              {t("myPortfolio")}
            </h2>
            <h3 className="font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              {t("hereIs")}
            </h3>
            <p
              className="pt-6 leading-relaxed w-9/12"
              style={{
                color: "rgb(240, 234, 214)",
              }}
            >
              {t("portfolioIntro")}
            </p>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="container  mx-auto mt-[-8rem] text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="text-gray-500 ">
                <div className=" text-black font-bold">{t("technologies")}</div>
                {project.technologies.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
