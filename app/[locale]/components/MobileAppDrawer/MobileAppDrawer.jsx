"use client";
import { Close } from "../../svgs";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "..";

export const MobileAppDrawer = ({ drawerRef, smoothScollView }) => {
  const { t } = useTranslation();
  const onClose = () => {
    const drawerElement = drawerRef?.current;
    drawerElement.classList.remove(...["opacity-100", "pointer-events-auto"]);
  };

  return (
    <div
      ref={drawerRef}
      className="pointer-events-none fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
    >
      <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4" onClick={onClose}>
          <Close />
        </button>

        <ul className="mt-8 flex flex-col">
          <li
            className="py-2"
            onClick={() => {
              onClose();
              smoothScollView("about");
            }}
          >
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              {t("about")}
            </span>
          </li>

          <li
            className="py-2"
            onClick={() => {
              onClose();
              smoothScollView("skills");
            }}
          >
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              {t("skills")}
            </span>
          </li>

          <li
            className="py-2"
            onClick={() => {
              onClose();
              smoothScollView("portfolio");
            }}
          >
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              {t("portfolio")}
            </span>
          </li>

          <li
            className="py-2"
            onClick={() => {
              onClose();
              smoothScollView("work");
            }}
          >
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              {t("work")}
            </span>
          </li>

          <li
            className="py-2"
            onClick={() => {
              onClose();
              smoothScollView("contact");
            }}
          >
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
              {t("contact")}
            </span>
          </li>
          <li className="py-2">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
};
