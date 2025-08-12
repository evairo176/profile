import React from "react";
import { GetStaticProps } from "next";

import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import LandingPage from "@/components/views/LandingPage";

export default function HomePage() {
  return (
    <>
      <LandingPageLayout title="Home">
        <LandingPage />
      </LandingPageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
