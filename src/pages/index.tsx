import React from "react";

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
