import React from "react";
import Hero from "./Hero";
import About from "./About";
import LogoAnimation from "./LogoAnimation";
import Portfolio from "./Portfolio";
import KeyMetrics from "./KeyMetrics";
import Stack from "./Stack";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import AnimatePlanetPageLayout from "@/components/layouts/AnimatePlanetPageLayout";

const LandingPage = () => {
  return (
    <AnimatePlanetPageLayout title="Home">
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </AnimatePlanetPageLayout>
  );
};

export default LandingPage;
