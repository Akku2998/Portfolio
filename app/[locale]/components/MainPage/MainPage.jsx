"use client";
import { useContext } from "react";
import {
  HeroSection,
  AboutSection,
  Skills,
  Portfolio,
  ContactUs,
  WorkPage,
} from "..";
import { ScrollViewContext } from "@/app/[locale]/context/customContexts";

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
      <WorkPage setPageRef={setPageRef} />
      <Portfolio setPageRef={setPageRef} />
      <ContactUs setPageRef={setPageRef} />
    </>
  );
};
