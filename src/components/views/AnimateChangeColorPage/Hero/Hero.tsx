"use client";
import React, { useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import profilepic from "/public/animate-change-color/profile1.png";
// import object1 from "/public/nimate-change-color/obj1.png";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useTheme } from "next-themes";

const COLORS_TOP = ["#8A2BE2", "#9370DB", "#9932CC", "#800080"];
const COLORS_TOP_LIGHT = ["#E6E6FA", "#DDA0DD", "#DA70D6", "#BA55D3"];

const Hero = () => {
  const { theme } = useTheme();
  const color = useMotionValue(COLORS_TOP[0]);
  const colorLight = useMotionValue(COLORS_TOP_LIGHT[0]);

  useEffect(() => {
    // Animate colors for both dark and light mode
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    animate(colorLight, COLORS_TOP_LIGHT, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Dark mode styles (original)
  const backgroundImageDark = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color}`;
  const borderDark = useMotionTemplate`1px solid ${color}`;
  const boxShadowDark = useMotionTemplate`0px 4px 24px ${color}`;

  // Light mode styles (new)
  const backgroundImageLight = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #fff 50%, ${colorLight}`;
  const borderLight = useMotionTemplate`1px solid ${colorLight}`;
  const boxShadowLight = useMotionTemplate`0px 4px 24px ${colorLight}`;

  // Choose styles based on theme
  const backgroundImage =
    theme === "dark" ? backgroundImageDark : backgroundImageLight;
  const border = theme === "dark" ? borderDark : borderLight;
  const boxShadow = theme === "dark" ? boxShadowDark : boxShadowLight;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative flex min-h-screen items-center justify-center py-24 text-gray-800/80 md:py-0 dark:text-white/80"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={500} factor={2} fade speed={2} />
        </Canvas>
      </div>

      <div className="max-auto z-10 flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <p className="mb-2 rounded-xl border border-purple-400/60 bg-purple-200/30 px-3 py-1 text-sm dark:border-purple-300/80 dark:bg-purple-700/40">
            Available for new projects
          </p>
          <p className="text-4xl font-bold md:text-5xl">Hi, I am</p>
          <p className="bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl dark:from-white dark:to-purple-400">
            Dicki Prasetya
          </p>
          <p className="mt-2 max-w-[200px] text-center text-base md:max-w-[400px] md:text-start">
            Full stack developer based in Indonesia, with over 3 years of
            experience build innovative web solutions and digital experiences
          </p>
          <div className="mt-6 flex flex-col gap-6 md:flex-row">
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-sm"
              style={{ border }}
            >
              View projects
              <FiArrowRight className="text-lg" />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                theme === "dark"
                  ? `radial-gradient(circle, ${COLORS_TOP[0]}, transparent 70%)`
                  : `radial-gradient(circle, ${COLORS_TOP_LIGHT[0]}, transparent 70%)`,
            }}
          />
          <div className="relative z-10 rounded-full border border-gray-400/40 bg-gradient-to-b to-white shadow-xl dark:border-gray-200/30 dark:to-black">
            <Image
              src={profilepic}
              alt="profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -right-2 -bottom-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 px-3 py-1 text-sm font-medium text-white dark:from-purple-500 dark:to-blue-500"
          >
            Developer
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
