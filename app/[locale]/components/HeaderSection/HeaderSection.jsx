"use client";
import Image from "next/image";
import { MobileMenu } from "../../svgs";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "..";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export const HeaderSection = ({ onMobileDrawerClick, smoothScollView }) => {
  const { t } = useTranslation();

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <a href="/">
              <Image src="/nidhi_logo.svg" alt="xyz" height={150} width={150} />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li
                className="group pl-6"
                onClick={() => smoothScollView("about")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("about")}
                </span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("skills")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("skills")}
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li
                className="group pl-6"
                onClick={() => smoothScollView("work")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("work")}
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("portfolio")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("portfolio")}
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("contact")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("contact")}
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group pl-6">
                <LanguageSwitcher />
              </li>
              <li className="nav-item md:pl-3 pt-1">
                <button
                  className="nav-link nav-svg cursor-pointer"
                  aria-label="Toggle Dark Mode"
                  onClick={toggleDarkMode} // Toggle dark mode when clicking the icon
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={darkMode ? "#fff" : "#000"}
                  >
                    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={onMobileDrawerClick}>
              <MobileMenu />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
