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
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between sm:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Home">
              <Image
                src="/nidhi_logo.svg"
                alt="Nidhi Gupta"
                height={150}
                width={150}
                className="h-auto w-28 sm:w-32"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-7">
              {/* About */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("about")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  {t("about")}
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Skills */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("skills")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  {t("skills")}
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Experience */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("experience")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  Experience
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Work */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("work")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  {t("work")}
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Portfolio */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("portfolio")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  {t("portfolio")}
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Contact */}
              <li
                className="group cursor-pointer"
                onClick={() => smoothScollView("contact")}
              >
                <span className="font-header text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-yellow-400">
                  {t("contact")}
                </span>

                <span className="mt-1 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>

              {/* Language */}
              <li>
                <LanguageSwitcher />
              </li>

              {/* Dark Mode */}
              <li>
                {/* <button
                  type="button"
                  aria-label="Toggle Dark Mode"
                  onClick={toggleDarkMode}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                > */}
                <button
                  className="nav-link nav-svg cursor-pointer"
                  aria-label="Toggle Dark Mode"
                  onClick={toggleDarkMode} // Toggle dark mode when clicking the icon
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm2 0c0-5.514 4.486-10 10-10v20C6.486 22 2 17.514 2 12z" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <button
              type="button"
              onClick={onMobileDrawerClick}
              aria-label="Open navigation menu"
              className="
    flex
    h-9
    w-9
    items-center
    justify-center
    lg:hidden
  "
            >
              <MobileMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
// "use client";
// import Image from "next/image";
// import { MobileMenu } from "../../svgs";
// import { useTranslation } from "react-i18next";
// import { LanguageSwitcher } from "..";
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";

// export const HeaderSection = ({ onMobileDrawerClick, smoothScollView }) => {
//   const { t } = useTranslation();

//   const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

//   return (
//     <>
//       <div className="absolute top-0 z-50 w-full py-3 sm:py-4">
//         {/* <div className="container mx-auto flex items-center justify-between"> */}
//         <div className="absolute top-0 z-50 w-full py-3 sm:py-4">
//           <div className="container mx-auto flex items-center justify-between px-4">
//             <div>
//               <a href="/">
//                 <Image
//                   src="/nidhi_logo.svg"
//                   alt="xyz"
//                   height={150}
//                   width={150}
//                 />
//               </a>
//             </div>
//             <div className="hidden lg:block">
//               <ul className="flex items-center">
//                 <li
//                   className="group pl-6"
//                   onClick={() => smoothScollView("about")}
//                 >
//                   <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
//                     {t("about")}
//                   </span>
//                   <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
//                 </li>

//                 <li
//                   className="group pl-6"
//                   onClick={() => smoothScollView("skills")}
//                 >
//                   <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
//                     {t("skills")}
//                   </span>

//                   <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
//                 </li>
//                 <li
//                   className="group pl-6"
//                   onClick={() => smoothScollView("work")}
//                 >
//                   <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
//                     {t("work")}
//                   </span>

//                   <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
//                 </li>

//                 <li
//                   className="group pl-6"
//                   onClick={() => smoothScollView("portfolio")}
//                 >
//                   <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
//                     {t("portfolio")}
//                   </span>

//                   <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
//                 </li>

//                 <li
//                   className="group pl-6"
//                   onClick={() => smoothScollView("contact")}
//                 >
//                   <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
//                     {t("contact")}
//                   </span>

//                   <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
//                 </li>
//                 <li className="group pl-6">
//                   <LanguageSwitcher />
//                 </li>
//                 <li className="nav-item md:pl-3 pt-1">
//                   <button
//                     className="nav-link nav-svg cursor-pointer"
//                     aria-label="Toggle Dark Mode"
//                     onClick={toggleDarkMode} // Toggle dark mode when clicking the icon
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill={darkMode ? "#fff" : "#000"}
//                     >
//                       <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
//                     </svg>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             <div className="block lg:hidden">
//               <button onClick={onMobileDrawerClick}>
//                 <MobileMenu />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
