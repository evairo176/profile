"use client";

import {
  AiFillGithub,
  AiOutlineX,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { useTranslations } from "next-intl";

type LinkItem = { label: string; href: string };

const Footer = () => {
  const t = useTranslations("footer");

  // Ambil array dari JSON menggunakan t.raw (next-intl v3)
  const usefulLinks = t.raw("sections.links.items") as LinkItem[];
  const socialList = t.raw("sections.social.items") as LinkItem[];

  return (
    <footer className="relative container mx-auto max-w-[1200px] px-4 py-8">
      {/* mobile blobs */}
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <div className="absolute top-[20%] left-[20%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-200 opacity-20 dark:bg-purple-300 dark:opacity-30"></div>
        <div className="absolute top-[20%] left-[50%] h-[70px] w-[150px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-400 opacity-25 dark:bg-purple-900 dark:opacity-50"></div>
        <div className="absolute top-[25%] left-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-20 dark:bg-purple-600 dark:opacity-30"></div>
      </div>

      {/* desktop blobs */}
      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute top-[40%] left-[20%] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-200 opacity-25 dark:bg-purple-300 dark:opacity-40"></div>
        <div className="absolute top-[45%] left-[60%] h-[150px] w-[250px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-100 opacity-15 dark:bg-purple-200 dark:opacity-20"></div>
        <div className="absolute top-[60%] left-[49%] h-[100px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-20 dark:bg-purple-600 dark:opacity-30"></div>
      </div>

      {/* BRAND BIG TEXT */}
      <div className="relative z-10 mt-8 overflow-clip text-center">
        <h1 className="hidden font-bold text-gray-300/20 md:block md:text-[12rem] lg:text-[15rem] dark:text-white/10">
          {t("brand")}
        </h1>
        <h1 className="relative mb-12 text-8xl font-bold text-gray-300/20 md:hidden dark:text-white/10">
          {t("brand")}
        </h1>
      </div>

      {/* 3 columns */}
      <div className="relative z-1 grid grid-cols-2 gap-8 text-gray-700 sm:grid-cols-3 dark:text-gray-200">
        {/* Contact */}
        <div className="space-y-2">
          <h3 className="font-bold">{t("sections.contact.title")}</h3>
          <p>{t("sections.contact.phone")}</p>
          <p>{t("sections.contact.email")}</p>
        </div>

        {/* Useful links */}
        <div className="space-y-2">
          <h3 className="font-bold">{t("sections.links.title")}</h3>
          <ul>
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="cursor-pointer hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social (text list) */}
        <div className="space-y-2">
          <h3 className="font-bold">{t("sections.social.title")}</h3>
          <ul>
            {socialList.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="cursor-pointer hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom row (copyright + icon buttons) */}
      <div className="relative z-1 container mt-12 flex flex-col-reverse items-center justify-center gap-10 text-gray-500 sm:justify-between md:flex-row dark:text-gray-400">
        <p>{t("copyright")}</p>

        <ul className="flex flex-row gap-6">
          <li>
            <a
              className="cursor-pointer"
              href="https://github.com/evairo176"
              aria-label="GitHub"
            >
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a className="cursor-pointer" href="#" aria-label="X">
              <AiOutlineX size={30} />
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/evairo1"
              aria-label="Facebook"
            >
              <AiFillFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
