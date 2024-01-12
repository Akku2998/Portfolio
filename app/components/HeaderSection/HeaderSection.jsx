"use client";
import Image from "next/image";
import { MobileMenu } from "../../svgs";

export const HeaderSection = ({ onMobileDrawerClick, smoothScollView }) => {
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
                  About
                </span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("skills")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  Skills
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("portfolio")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  Portfolio
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("work")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  Work
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li
                className="group pl-6"
                onClick={() => smoothScollView("contact")}
              >
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white hover:underline hover:decoration-yellow-500">
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
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
