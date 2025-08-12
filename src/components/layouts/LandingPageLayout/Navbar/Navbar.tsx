import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import ModeToggle from "@/components/commons/ModeToggle";
import { LanguageSwitcher } from "@/components/commons/LanguageSwitcher";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const t = useTranslations("navigation");

  const navLinks = [
    { title: t("about"), path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: t("contact"), path: "#contact" },
  ];

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 20, damping: 15 },
    },
  };

  return (
    <div className="z-50">
      {/* Desktop navbar */}
      <div className="border-border bg-card/40 supports-[backdrop-filter]:bg-card/30 mx-auto mt-12 hidden max-w-[600px] items-center justify-center rounded-3xl border p-2 backdrop-blur md:flex">
        <div className="mr-3 flex gap-2">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <ul className="flex flex-row space-x-8 p-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile trigger */}
      <button
        onClick={toggleNav}
        className="border-border bg-card/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground fixed top-5 right-5 z-50 rounded-md border p-2 shadow-sm backdrop-blur transition-colors md:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="menu bg-background/90 fixed top-0 left-0 z-40 h-full w-full"
      >
        <div className="mt-5 ml-5 flex gap-2">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <ul className="flex h-full flex-col items-center justify-center space-y-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-foreground hover:text-muted-foreground text-4xl font-bold tracking-tight"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
