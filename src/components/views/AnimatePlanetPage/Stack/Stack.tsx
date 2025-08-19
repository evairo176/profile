"use client";
import React, { use } from "react";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { useTranslations } from "next-intl";

const Stack = () => {
  const t = useTranslations("stack");
  return (
    <section id="stack" className="overflow-hidden">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t("title")} <span className="text-primary">{t("subtitle")} </span>
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            {t("description")}
          </p>
        </motion.div>
      </div>
      {/* <div className="grid gap-8 overflow-hidden" ref={ref}>
          {SKILLS.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="flex flex-row items-center justify-center overflow-hidden rounded-xl bg-gray-200/30 p-4 shadow-lg hover:shadow-2xl dark:bg-white/10"
            >
              <div className={`mb-4`}>
                {<item.Icon color={item.color} size={100} />}
              </div>
              <div>
                <p className="rotate-[-90deg] transform text-3xl whitespace-nowrap text-gray-400/40 dark:text-white/20">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div> */}
      <Skill />
    </section>
  );
};

export default Stack;
