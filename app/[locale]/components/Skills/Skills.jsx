"use client";
import Image from "next/image";
import { Github } from "../../svgs";
import { useTranslation } from "react-i18next";

export const Skills = ({ setPageRef }) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="container py-16 md:py-20 mx-auto mt-8 text-center"
        ref={(element) => setPageRef("skills", element)}
      >
        <h2
          className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl"
          style={{ color: "rgba(85, 64, 175)" }}
        >
          {t("goodAt")}
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          {t("theseSkill")}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {/* Add your skill components or visuals here */}
          <div className="group p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/html.svg" alt="html" width={100} height={100} />
            HTML5
          </div>
          <div className="group p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/react.svg" alt="React" width={100} height={100} />
            ReactJs
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/css.svg" alt="css" width={100} height={100} />
            CSS
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/js.svg" alt="js" width={100} height={100} />
            JavaScript
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/nicon.svg" alt="nicon" width={100} height={100} />
            NextJs
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image
              src="/tailwind.svg"
              alt="tailwind"
              width={100}
              height={100}
            />
            Tailwind
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/java.svg" alt="java" width={100} height={100} />
            Core Java
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            {/* <Image src="/github.svg" alt="github" width={100} height={100}/> */}
            <Github width="100px" height="100px" />
            Github
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/git.svg" alt="git" width={100} height={100} />
            Git
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/webpack.svg" alt="webpack" width={100} height={100} />
            Webpack
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image src="/debug.svg" alt="debug" width={100} height={100} />
            Debugging
          </div>
          <div className="p-4 bg-gray-100 rounded flex flex-col justify-evenly items-center font-bold shadow transition duration-300 transform hover:scale-105 hover:bg-voilet-50 hover:text-yellow-500">
            <Image
              src="/teamwork.svg"
              alt="teamwork"
              width={100}
              height={100}
            />
            Teamwork
          </div>
        </div>
      </section>
    </>
  );
};
