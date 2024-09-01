"use client";
import Link from "next/link";
import {
  Github,
  Facebook,
  Linkedin,
  Twitter,
  Insta,
  Chevron,
} from "../../svgs";
import { useTranslation } from "react-i18next";

export const AboutSection = ({ setPageRef }) => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-gray-100"
      ref={(element) => setPageRef("about", element)}
    >
      <div className="container mx-auto flex flex-col items-center py-16 px-6 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2
            className="font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl"
            style={{ color: "rgba(85, 64, 175)" }}
          >
            {t("whoAmI")}
          </h2>

          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            {t("webDeveloper")}
          </h4>
          <p
            className="pt-6 font-mono leading-relaxed text-grey-20"
            style={{
              color: "rgb(124 124 124/1)",
            }}
          >
            {t("intro")}
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p
                style={{ color: "rgba(124, 124, 124, 1)" }}
                className="font-body text-lg font-semibold uppercase"
              >
                {t("connectMe")}
              </p>

              <div className="hidden sm:block">
                <i className="text-3xl text-voilet-50">
                  <Chevron color="currentColor" />
                </i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link
                href="https://www.facebook.com/people/Nidhi-Gupta/pfbid0MAP2Zj71H2UpdvjEbNV5UQtzBGGZP1A7qdm746WCQmnLURr1WE9rdsipwKKV2KCtl/?name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-2xl text-voilet-50 hover:text-yellow-500">
                  <Facebook color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://github.com/Akku2998"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-voilet-50 hover:text-yellow-500">
                  <Github color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.google.com/search?q=twitter&sca_esv=597209220&sxsrf=ACQVn0-eN7yflYsrX9C0uEzMCMTSXU71BQ%3A1704894340311&ei=hJ-eZc_MEqrV4-EPpOGdyAo&ved=0ahUKEwjPnqKs-tKDAxWq6jgGHaRwB6kQ4dUDCBA&uact=5&oq=twitter&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3R3aXR0ZXIyChAjGIAEGIoFGCcyFxAuGIMBGMcBGJECGLEDGNEDGIAEGIoFMhAQABiABBgUGIcCGLEDGIMBMg4QABiABBiKBRiRAhixAzIREAAYgAQYigUYkQIYsQMYgwEyCxAAGIAEGIoFGJECMhEQABiABBiKBRiRAhixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj1D1DqBFifCXABeACQAQCYAWmgAYQDqgEDMy4xuAEDyAEA-AEBwgIJEAAYBxgeGLADwgIOEAAYgAQYsQMYgwEYsAPCAggQABiABBiwA8ICChAAGIAEGBQYhwLCAgUQABiABOIDBBgBIEGIBgGQBgo&sclient=gws-wiz-serp"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-voilet-50 hover:text-yellow-500">
                  <Twitter color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nidhi-gupta-aati/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-voilet-50 hover:text-yellow-500">
                  <Linkedin color="currentColor" />
                </i>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4"
              >
                <i className="text-2xl text-voilet-50 hover:text-yellow-500">
                  <Insta color="currentColor" />
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div className="flex items-end justify-between">
            <h4 className="font-semibold uppercase text-black">{t("html")}</h4>
            <h3
              className="text-3xl font-semibold font-mono"
              style={{ color: "rgba(85, 64, 175)" }}
            >
              85%
            </h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div
              className=" h-2.5 rounded-full"
              style={{ width: "85%", backgroundColor: "rgba(85, 64, 175, 1)" }}
            ></div>
          </div>

          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-semibold uppercase text-black">{t("js")}</h4>
              <h3
                className="text-3xl font-semibold font-mono"
                style={{ color: "rgba(85, 64, 175)" }}
              >
                95%
              </h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
              <div
                className=" h-2.5 rounded-full"
                style={{
                  width: "95%",
                  backgroundColor: "rgba(85, 64, 175, 1)",
                }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-semibold uppercase text-black">
                {t("react")}
              </h4>
              <h3
                className="text-3xl font-semibold text-primary font-mono"
                style={{ color: "rgba(85, 64, 175)" }}
              >
                90%
              </h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
              <div
                className=" h-2.5 rounded-full"
                style={{
                  width: "90%",
                  backgroundColor: "rgba(85, 64, 175, 1)",
                }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-semibold uppercase text-black">
                {t("next")}
              </h4>
              <h3
                className="text-3xl font-semibold text-primary font-mono"
                style={{ color: "rgba(85, 64, 175)" }}
              >
                93%
              </h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
              <div
                className=" h-2.5 rounded-full"
                style={{
                  width: "93%",
                  backgroundColor: "rgba(85, 64, 175, 1)",
                }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-semibold uppercase text-black">
                {t("figma")}
              </h4>
              <h3
                className="text-3xl font-semibold text-primary font-mono"
                style={{ color: "rgba(85, 64, 175)" }}
              >
                75%
              </h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
              <div
                className=" h-2.5 rounded-full"
                style={{
                  width: "75%",
                  backgroundColor: "rgba(85, 64, 175, 1)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
