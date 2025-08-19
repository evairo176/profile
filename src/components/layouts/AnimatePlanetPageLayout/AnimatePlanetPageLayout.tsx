import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  title?: string;
  children: ReactNode;
};

const AnimatePlanetPageLayout = ({ title, children }: Props) => {
  return (
    <>
      {/* navbar  */}
      <Navbar />
      {/* main  */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AnimatePlanetPageLayout;
