import PageHead from "@/components/commons/PageHead";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
export const BASE_URL = "https://profile-mu-two.vercel.app";

// OG default (pakai URL absolut). Jika file ada di /public, cukup "/og-default.jpg" lalu gabung dengan BASE_URL.
export const OG_DEFAULT = `${BASE_URL}/assets/proj5.png`;

type Props = {
  title: string;
  children: ReactNode;
};

const AnimateChangeColorPageLayout = ({ title, children }: Props) => {
  return (
    <>
      <PageHead
        title="Dicki Prasetya"
        titleTemplate="%s | Fullstack Developer"
        description="Saya adalah fullstack developer yang fokus menciptakan aplikasi web dengan pengalaman pengguna terbaik."
        canonical="https://profile-mu-two.vercel.app"
        openGraph={{
          type: "profile",
          url: "https://profile-mu-two.vercel.app",
          title: "Dicki Prasetya",
          description:
            "Fullstack developer - profil, pengalaman, dan proyek-proyek terbaru.",
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
          description:
            "Fullstack developer yang bersemangat membangun aplikasi web berkualitas tinggi.",
          sameAs: [
            "https://github.com/evairo176",
            "https://www.linkedin.com/in/dicki-prasetya-3a7587195",
          ],
          image: OG_DEFAULT,
        }}
      />

      {/* navbar  */}
      <Navbar />
      {/* main  */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AnimateChangeColorPageLayout;
