"use client";
import { Close } from "../../svgs";

export const MobileAppDrawer = ({ drawerRef, smoothScollView }) => {
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
              About
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
              Skills
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
              Portfolio
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
              Work
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
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
