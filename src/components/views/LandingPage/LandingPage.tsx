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

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
