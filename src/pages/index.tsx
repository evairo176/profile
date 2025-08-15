import React from "react";
import { GetStaticProps } from "next";
// import AnimateChangeColorPage from "@/components/views/AnimateChangeColorPage";
import AnimatePlanetPage from "@/components/views/AnimatePlanetPage";

export default function HomePage() {
  return <AnimatePlanetPage />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
