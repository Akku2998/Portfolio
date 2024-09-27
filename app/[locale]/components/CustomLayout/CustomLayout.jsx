"use client";
import { useRef } from "react";
import { HeaderSection, MobileAppDrawer, Footer } from "..";
import { ScrollViewContext } from "@/app/[locale]/context/scrollViewContext";

export const CustomLayout = ({ children }) => {
  const drawerRef = useRef(null);
  const pageRefs = useRef({});

  const onMobileDrawerClick = () => {
    const drawerElement = drawerRef?.current;
    drawerElement.classList.add(...["opacity-100", "pointer-events-auto"]);
  };

  const smoothScollView = (key) => {
    pageRefs?.current[key]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeaderSection
        onMobileDrawerClick={onMobileDrawerClick}
        smoothScollView={smoothScollView}
      />
      <MobileAppDrawer
        drawerRef={drawerRef}
        smoothScollView={smoothScollView}
      />
      <ScrollViewContext.Provider value={pageRefs}>
        {children}
      </ScrollViewContext.Provider>
      <Footer />
    </>
  );
};
