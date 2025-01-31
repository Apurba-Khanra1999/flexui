import React from "react";
import { Intro } from "./Intro";
import { HeroSampleUI } from "./HeroSampleUI";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-between my-6 lg:my-0 overflow-hidden lg:overflow-auto">
      <Intro />
      <HeroSampleUI />
    </section>
  );
};
