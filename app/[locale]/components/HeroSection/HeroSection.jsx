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
import Image from "next/image";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{
        backgroundImage:
          "url(https://atom.redpixelthemes.com/assets/img/bg-hero.jpg)",
      }}
    >
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(85,64,174,.95), rgba(65,47,144,.93))",
        }}
      />

      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div
            className="rounded-full border-8 shadow-xl"
            style={{
              borderColor: "rgb(85 64 175/1)",
            }}
          >
            <Image
              loading="eager"
              src="/user.jpg"
              className="h-64 w-64 object-cover rounded-full"
              height={200}
              width={200}
              alt="user"
            />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              {t("heroIntro")}
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">
                  {t("connect")}
                </p>
                <div className="hidden sm:flex">
                  <i className="text-3xl text-yellow-400">
                    <Chevron color="currentColor" />
                  </i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link
                  href="https://www.facebook.com/people/Nidhi-Gupta/pfbid0MAP2Zj71H2UpdvjEbNV5UQtzBGGZP1A7qdm746WCQmnLURr1WE9rdsipwKKV2KCtl/?name=xhp_nt__fb__action__open_user"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4"
                >
                  <i className="text-2xl text-white hover:text-yellow-500">
                    <Facebook color="currentColor" />
                  </i>
                </Link>
                <Link
                  href="https://github.com/Akku2998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4"
                >
                  <i className="text-2xl text-white hover:text-yellow-500">
                    <Github color="currentColor" />
                  </i>
                </Link>
                <Link
                  href="https://www.google.com/search?q=twitter&sca_esv=597209220&sxsrf=ACQVn0-eN7yflYsrX9C0uEzMCMTSXU71BQ%3A1704894340311&ei=hJ-eZc_MEqrV4-EPpOGdyAo&ved=0ahUKEwjPnqKs-tKDAxWq6jgGHaRwB6kQ4dUDCBA&uact=5&oq=twitter&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3R3aXR0ZXIyChAjGIAEGIoFGCcyFxAuGIMBGMcBGJECGLEDGNEDGIAEGIoFMhAQABiABBgUGIcCGLEDGIMBMg4QABiABBiKBRiRAhixAzIREAAYgAQYigUYkQIYsQMYgwEyCxAAGIAEGIoFGJECMhEQABiABBiKBRiRAhixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj1D1DqBFifCXABeACQAQCYAWmgAYQDqgEDMy4xuAEDyAEA-AEBwgIJEAAYBxgeGLADwgIOEAAYgAQYsQMYgwEYsAPCAggQABiABBiwA8ICChAAGIAEGBQYhwLCAgUQABiABOIDBBgBIEGIBgGQBgo&sclient=gws-wiz-serp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4"
                >
                  <i className="bx bxl-twitter text-2xl text-white hover:text-yellow-500">
                    <Twitter color="currentColor" />
                  </i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nidhi-gupta-aati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4"
                >
                  <i className="text-2xl text-white hover:text-yellow-500">
                    <Linkedin color="currentColor" />
                  </i>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4"
                >
                  <i className="text-2xl text-white hover:text-yellow-500">
                    <Insta color="currentColor" />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
