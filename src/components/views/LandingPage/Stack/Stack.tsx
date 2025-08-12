"use client";
import React, { useEffect } from "react";
import {
  SiFramer,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-primary",
  },
  { id: 2, name: "Figma", icon: <SiFigma size={100} />, color: "text-primary" },
  { id: 3, name: "React", icon: <SiReact size={100} />, color: "text-primary" },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-primary",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100} />,
    color: "text-primary",
  },
  {
    id: 6,
    name: "Docker",
    icon: <SiDocker size={100} />,
    color: "text-primary",
  },
];

const itemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

export const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="stack">
      <div className="mx-auto max-w-[250px] text-center">
        <h2 className="text-foreground/80 mb-10 text-7xl font-bold">
          My Stack
        </h2>

        <div className="grid gap-8" ref={ref}>
          {stackItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="border-border bg-card flex flex-row items-center justify-center rounded-xl border p-4 shadow-sm hover:shadow-md"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <p className="text-muted-foreground/40 rotate-[-90deg] transform text-3xl">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
