"use client";

import {
  FaReact,
  //  FaNodeJs
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const COLORS_TOP = ["#8A2BE2", "#9370DB", "#9932CC", "#800080"];
const COLORS_TOP_LIGHT = ["#E6E6FA", "#DDA0DD", "#DA70D6", "#BA55D3"];

const stackItems = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Framer",
    icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "#0055FF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#00684A",
  },
];

const Stack = () => {
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
  const backgroundImageDark = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #000 50%, ${color})`;

  // Light mode styles (new)
  const backgroundImageLight = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #fff 50%, ${colorLight})`;

  // Choose styles based on theme
  const backgroundImage =
    theme === "dark" ? backgroundImageDark : backgroundImageLight;

  return (
    <motion.section
      id="stack"
      style={{ backgroundImage }}
      className="px-4 py-32 text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1200px]"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Tech{" "}
          <span className="text-purple-600 dark:text-purple-300">Stack</span>
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group rounded-xl border border-gray-300 p-6 transition-all duration-300 hover:border-purple-400/50 dark:border-gray-800 dark:hover:border-purple-500/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-xl transition-colors duration-300 dark:from-purple-500/40 dark:to-blue-500/40" />
                  <div className="relative rounded-xl border border-gray-300 bg-gray-100/50 p-4 transition-colors duration-300 group-hover:border-purple-400/50 dark:border-gray-800 dark:bg-gray-900/50 dark:group-hover:border-purple-500/50">
                    <item.icon
                      className="h-12 w-12"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Stack;
