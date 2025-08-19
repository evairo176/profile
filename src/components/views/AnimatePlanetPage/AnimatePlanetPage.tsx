import React from "react";
import Hero from "./Hero";
import About from "./About";

import Portfolio from "./Portfolio";
import KeyMetrics from "./KeyMetrics";
import Stack from "./Stack";
import Services from "./Services";
import Footer from "./Footer";
import AnimatePlanetPageLayout from "@/components/layouts/AnimatePlanetPageLayout";
import LogoTicker from "./LogoTicker";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Seo from "./Seo";

const LandingPage = () => {
  return (
    <AnimatePlanetPageLayout title="Home">
      <Seo />
      <Hero />
      <LogoTicker />
      <About />
      <Experiences />
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
