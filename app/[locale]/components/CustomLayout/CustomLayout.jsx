"use client";
import { useRef } from "react";
import { HeaderSection, MobileAppDrawer, Footer } from "..";
import { ScrollViewContext } from "@/app/[locale]/context/customContexts";
import TranslationsProvider from "@/app/[locale]/context/translationProvider";
import initTranslations from "@/i18n";

const i18nNamespaces = ["home"];

export const CustomLayout = ({ params: { locale }, children }) => {
  const { resources } = initTranslations(locale, i18nNamespaces);
  const drawerRef = useRef(null);
  const pageRefs = useRef({});

  const onMobileDrawerClick = () => {
    const drawerElement = drawerRef?.current;
    drawerElement.classList.add(...["opacity-100", "pointer-events-auto"]);
  };

  const smoothScollView = (key) => {
    debugger;
    pageRefs?.current[key]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
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
    </TranslationsProvider>
  );
};
