import PageHead from "@/components/commons/PageHead";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  title: string;
  children: ReactNode;
};

const LandingPageLayout = ({ title, children }: Props) => {
  return (
    <>
      <PageHead title={title} />
      {/* navbar  */}
      <Navbar />
      {/* main  */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default LandingPageLayout;
