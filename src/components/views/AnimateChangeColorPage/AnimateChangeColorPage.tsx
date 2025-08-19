import React from "react";
import Hero from "./Hero";
import Stack from "./Stack";
import About from "./About";
import LogoTicker from "./LogoTicker";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import AnimateChangeColorPageLayout from "@/components/layouts/AnimateChangeColorPageLayout";
import Footer from "./Footer";

const AnimateChangeColorPage = () => {
  return (
    <AnimateChangeColorPageLayout title="Home">
      <Hero />
      <About />
      <LogoTicker />
      <Portfolio />
      <Stack />
      <Contact />
      <Footer />
    </AnimateChangeColorPageLayout>
  );
};

export default AnimateChangeColorPage;
