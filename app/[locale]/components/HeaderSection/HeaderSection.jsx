"use client";
import Image from "next/image";
import { MobileMenu } from "../../svgs";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "..";

export const HeaderSection = ({ onMobileDrawerClick, smoothScollView }) => {
  const { t } = useTranslation();
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
                onClick={() => smoothScollView("portfolio")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("portfolio")}
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
                onClick={() => smoothScollView("contact")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  {t("contact")}
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li>
                <LanguageSwitcher />
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
