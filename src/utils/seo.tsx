import { useRouter } from "next/router";
import {
  WebPageJsonLd,
  ProfilePageJsonLd,
  // Jika versi next-seo kamu mendukung:
  // PersonJsonLd,
} from "next-seo";

const BASE_URL = "https://profile-mu-two.vercel.app";
const SITE_NAME = "Dicki Prasetya ( Evairo )";
const DEFAULT_IMAGE = `${BASE_URL}/assets/proj5.png`; // pakai URL absolut

export default function MySEO() {
  const { locale = "id", asPath } = useRouter();
  const pageUrl = `${BASE_URL}${asPath === "/" ? "" : asPath}`;

  // Deskripsi multi-bahasa singkat
  const desc =
    locale === "id"
      ? "Portfolio web Dicki Prasetya, seorang Middle Developer yang berfokus pada pengembangan aplikasi web modern, scalable, dan user-friendly."
      : "Dicki Prasetya’s portfolio — a Middle Developer focused on building modern, scalable, and user-friendly web applications.";

  return (
    <>
      {/* 1) Deskripsikan keseluruhan situs */}

      {/* 2) Halaman saat ini */}
      <WebPageJsonLd
        id={pageUrl} // ✅ tambahkan ini
        url={pageUrl}
        name="Dicki Prasetya Portfolio"
        description={desc}
        inLanguage={locale}
        // gambar utama halaman (bagus untuk preview)
        primaryImageOfPage={{
          "@type": "ImageObject",
          url: DEFAULT_IMAGE,
        }}
        isPartOf={{
          "@type": "WebSite",
          name: SITE_NAME,
          url: BASE_URL,
        }}
      />

      <ProfilePageJsonLd
        id={`${pageUrl}#profile`} // ✅ memberi identifier unik
        type="Person"
        name="Dicki Prasetya"
        jobTitle="Middle Developer"
        url={BASE_URL}
        breadcrumb={pageUrl} // ✅ tambahkan breadcrumb (string URL)
        sameAs={[
          "https://github.com/evairo176",
          "https://www.linkedin.com/in/dicki-prasetya-3a7587195",
        ]}
        image={`${BASE_URL}/avatar.jpg`} // ganti jika ada
        description={desc}
        knowsAbout={[
          "Next.js",
          "TypeScript",
          "React",
          "Node.js",
          "Tailwind CSS",
        ]}
      />

      {/* 
        Jika versi next-seo kamu punya PersonJsonLd, kamu bisa tambahkan ini (duplikasi aman karena schema berbeda konteks):
        <PersonJsonLd
          name="Dicki Prasetya"
          jobTitle="Middle Developer"
          url={BASE_URL}
          image={`${BASE_URL}/avatar.jpg`}
          sameAs={[ ... ]}
          knowsAbout={[ ... ]}
        />
      */}
    </>
  );
}
