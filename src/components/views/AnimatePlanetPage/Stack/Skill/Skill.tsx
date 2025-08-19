"use client";

import { motion, useInView, Variants } from "framer-motion";
import React from "react";
import { STACKS, stacksProps } from "../Stack.constans";

const Skill = () => {
  const ref = React.useRef<HTMLUListElement | null>(null);
  const inView = useInView(ref, {
    once: false, // true = hanya animasi sekali
    amount: 0.2, // 20% elemen masuk viewport baru dianggap inView
    // margin: "-10% 0px" // opsional, ubah threshold dengan rootMargin
  });

  const container = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween", // <— penting agar 'ease' valid
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.ul
      ref={ref}
      className="flex w-full flex-wrap justify-center gap-2 text-lg"
      variants={container}
      initial="initial"
      animate={inView ? "animate" : "initial"} // << logic inView di sini
    >
      {STACKS?.map((row: stacksProps, key: number) => (
        <motion.li
          key={key}
          variants={item}
          className="bg-muted ring-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 flex items-center gap-2 rounded-xl px-5 py-3 shadow-sm ring-1 transition-all duration-200 hover:shadow-md"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        >
          {row.icon}
          {row.name}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Skill;
