"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import ModeToggle from "@/components/commons/ModeToggle";
import { LanguageSwitcher } from "@/components/commons/LanguageSwitcher";
import { useTranslations } from "next-intl";

type NavLink = { title: string; path: string };

const HEADER_OFFSET = 96; // px: sesuaikan dengan tinggi header/padding kamu

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const t = useTranslations("navigation");

  // Flag untuk menahan observer saat kita melakukan scroll terprogram
  const isProgrammaticScrollRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navLinks: NavLink[] = useMemo(
    () => [
      { title: t("about"), path: "#about" },
      { title: t("experience"), path: "#experience" },
      { title: t("portfolio"), path: "#portfolio" },
      { title: t("stack"), path: "#stack" },
      { title: t("services"), path: "#services" },
      { title: t("contact"), path: "#contact" },
    ],
    [t],
  );

  // Sinkron dengan hash URL saat load & navigasi browser
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setActiveHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  // IntersectionObserver: set active berdasarkan section in-view
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (observerRef.current) observerRef.current.disconnect();

    const callback: IntersectionObserverCallback = (entries) => {
      if (isProgrammaticScrollRef.current) return; // jangan override saat scroll manual
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
        );
      if (visible.length > 0) {
        const id = visible[0].target.id;
        if (id && `#${id}` !== activeHash) {
          setActiveHash(`#${id}`);
          // update hash tanpa trigger scroll ulang
          window.history.replaceState(null, "", `#${id}`);
        }
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: null,
      // pusatkan “sweet spot” ke tengah viewport
      rootMargin: "-40% 0px -55% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const obs = observerRef.current;
    navLinks.forEach((l) => {
      const id = l.path.slice(1);
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [navLinks, activeHash]);

  const toggleNav = () => setNav((v) => !v);
  const closeNav = () => setNav(false);

  // Klik link: scroll manual + update hash, tahan observer sebentar
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string,
  ) => {
    e.preventDefault();
    closeNav();
    setActiveHash(hash);

    if (typeof window === "undefined") return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) {
      // fallback: tetap update URL agar bisa reload ke anchor
      window.history.pushState(null, "", hash);
      return;
    }

    isProgrammaticScrollRef.current = true;

    // Hitung posisi dengan offset (biar tidak ketutup header)
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    // Update hash dulu agar URL konsisten
    window.history.pushState(null, "", hash);

    // Smooth scroll
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

    // Lepas “pause” observer setelah animasi scroll (sesuaikan durasi)
    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 700);
  };

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } },
  };

  const linkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `text-4xl font-bold tracking-tight transition-colors ${
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="fixed top-5 right-0 left-0 z-50 flex w-full justify-center font-bold">
      {/* Desktop navbar */}
      <div className="border-border bg-card/40 supports-[backdrop-filter]:bg-card/30 mx-auto hidden items-center justify-center rounded-3xl border p-2 backdrop-blur md:flex md:flex-row">
        <div className="mr-3 flex gap-2">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <ul className="flex flex-row space-x-8 p-2">
          {navLinks.map((link) => {
            const isActive = activeHash === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={linkClass(isActive)}
                  onClick={(e) => handleNavClick(e, link.path)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile trigger */}
      <button
        onClick={toggleNav}
        aria-label="Toggle navigation"
        className="border-border bg-card/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground fixed top-5 right-5 z-50 rounded-md border p-2 shadow-sm backdrop-blur transition-colors md:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="menu bg-background/90 fixed top-0 left-0 z-40 h-full w-full md:hidden"
      >
        <div className="mt-5 ml-5 flex gap-2">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <ul className="flex h-full flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => {
            const isActive = activeHash === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={mobileLinkClass(isActive)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
