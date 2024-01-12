"use client";
import { useContext } from "react";
import { HeroSection, AboutSection, Skills, Portfolio, ContactUs } from "..";
import { ScrollViewContext } from "@/app/context/customContexts";

export const MainPage = () => {
  const pageRefs = useContext(ScrollViewContext);

  const setPageRef = (key, element) => {
    pageRefs.current[key] = element;
  };

  return (
    <>
      <HeroSection />
      <AboutSection setPageRef={setPageRef} />
      <Skills setPageRef={setPageRef} />
      <Portfolio setPageRef={setPageRef} />
      <ContactUs setPageRef={setPageRef} />
    </>
  );
};
