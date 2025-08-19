import PageHead from "@/components/commons/PageHead";
import React from "react";
import { OG_DEFAULT } from "./Seo.constant";
import { useTranslations } from "next-intl";

const Seo = () => {
  const t = useTranslations("meta");
  return (
    <PageHead
      title="Dicki Prasetya | Animate Change Color"
      titleTemplate="%s | Fullstack Developer"
      description={t("metaDescription")}
      canonical="https://profile-mu-two.vercel.app"
      openGraph={{
        type: "profile",
        url: "https://profile-mu-two.vercel.app",
        title: "Dicki Prasetya",
        description: `${t("metaDescription")}`,
        siteName: "Dicki Prasetya",
        images: [
          {
            url: OG_DEFAULT,
            width: 400,
            height: 400,
            alt: "Foto Profil Dicki Prasetya",
          },
        ],
      }}
      twitter={{
        card: "summary_large_image",
        site: "@dickipr",
        creator: "@dickipr",
      }}
      robots={{ index: true, follow: true, maxImagePreview: "large" }}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dicki Prasetya",
        url: "https://profile-mu-two.vercel.app",
        jobTitle: "Fullstack Developer",
        description: `${t("metaDescription")}`,
        sameAs: [
          "https://github.com/evairo176",
          "https://www.linkedin.com/in/dicki-prasetya-3a7587195",
        ],
        image: OG_DEFAULT,
      }}
    />
  );
};

export default Seo;
