"use client";

import { Close } from "../../svgs";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "..";

export const MobileAppDrawer = ({ drawerRef, smoothScollView }) => {
  const { t } = useTranslation();

  const onClose = () => {
    const drawerElement = drawerRef?.current;

    if (drawerElement) {
      drawerElement.classList.remove("opacity-100", "pointer-events-auto");
    }
  };

  const handleNavigation = (section) => {
    onClose();
    smoothScollView(section);
  };

  return (
    <div
      ref={drawerRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-50
        min-h-screen
        bg-black/60
        opacity-0
        transition-opacity
        duration-300
        lg:hidden
      "
    >
      {/* Drawer */}
      <div
        className="
          absolute
          right-0
          min-h-screen
          w-[68%]
          bg-primary
          px-5
          py-4
          shadow-2xl
          sm:w-[55%]
          md:w-1/3
        "
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            transition
            hover:bg-white/10
          "
        >
          <span className="flex h-5 w-5 items-center justify-center">
            <Close />
          </span>
        </button>

        {/* Menu */}
        <ul className="mt-12 flex flex-col">
          {/* About */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("about")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("about")}
            </span>
          </li>

          {/* Skills */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("skills")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("skills")}
            </span>
          </li>

          {/* Experience */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("experience")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("experience")}
            </span>
          </li>

          {/* Work */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("work")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("work")}
            </span>
          </li>

          {/* Portfolio */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("portfolio")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("portfolio")}
            </span>
          </li>

          {/* Contact */}
          <li
            className="
              cursor-pointer
              border-b
              border-white/10
              py-3
            "
            onClick={() => handleNavigation("contact")}
          >
            <span className="font-header text-sm font-semibold uppercase tracking-wide text-white">
              {t("contact")}
            </span>
          </li>

          {/* Language */}
          <li className="mt-4 px-1 pt-2">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
};
// "use client";
// import { Close } from "../../svgs";
// import { useTranslation } from "react-i18next";
// import { LanguageSwitcher } from "..";

// export const MobileAppDrawer = ({ drawerRef, smoothScollView }) => {
//   const { t } = useTranslation();
//   const onClose = () => {
//     const drawerElement = drawerRef?.current;
//     drawerElement.classList.remove(...["opacity-100", "pointer-events-auto"]);
//   };

//   return (
//     <div
//       ref={drawerRef}
//       className="pointer-events-none fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
//     >
//       <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
//         <button className="absolute top-0 right-0 mt-4 mr-4" onClick={onClose}>
//           <Close />
//         </button>

//         <ul className="mt-8 flex flex-col">
//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("about");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("about")}
//             </span>
//           </li>

//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("skills");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("skills")}
//             </span>
//           </li>
//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("experience");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("experience")}
//             </span>
//           </li>

//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("portfolio");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("portfolio")}
//             </span>
//           </li>

//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("work");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("work")}
//             </span>
//           </li>

//           <li
//             className="py-2"
//             onClick={() => {
//               onClose();
//               smoothScollView("contact");
//             }}
//           >
//             <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
//               {t("contact")}
//             </span>
//           </li>
//           <li className="py-2">
//             <LanguageSwitcher />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
