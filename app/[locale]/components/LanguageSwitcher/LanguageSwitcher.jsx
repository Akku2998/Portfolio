"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

const languages = [
  {
    code: "en",
    label: "EN",
    flag: "https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png",
  },
  {
    code: "hi",
    label: "HI",
    flag: "https://img.icons8.com/color/48/india.png",
  },
  {
    code: "fr",
    label: "FR",
    flag: "https://img.icons8.com/color/48/france.png",
  },
  {
    code: "de",
    label: "DE",
    flag: "https://img.icons8.com/color/48/germany.png",
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // const handleChange = (e) => {
  //   const newLocale = e.target.value;
  const handleChange = (newLocale) => {
    setIsOpen(false);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="flex" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 flex flex-row items-center border border-none text-sm font-medium text-gray-100 focus:outline-none"
      >
        <img
          src={languages.find((lang) => lang.code === currentLocale)?.flag}
          className="w-5 h-5"
          alt={currentLocale}
        />
        <span className="ml-1">
          {languages.find((lang) => lang.code === currentLocale)?.label}
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`p-2 flex flex-row items-center w-full text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ${
                currentLocale === lang.code ? "bg-gray-200" : ""
              }`}
            >
              <img src={lang.flag} className="w-5 h-5" alt={lang.label} />
              <span className="ml-1">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>

    // <select onChange={handleChange} value={currentLocale}>
    //   <option value="en">English</option>
    //   <option value="hi">Hindi</option>
    //   <option value="fr">French</option>
    //   <option value="de">German</option>
    // </select>
  );
};
