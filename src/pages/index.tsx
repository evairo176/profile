import React from "react";
import { GetStaticProps } from "next";
import MasterPage from "@/components/views/MasterPage";

export default function HomePage() {
  return <MasterPage />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
