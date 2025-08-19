"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

interface Metric {
  id: number;
  value: string;
  label: string;
  description: string;
}

const KeyMetrics: React.FC = () => {
  const t = useTranslations("keyMetrics");
  const metrics = t.raw("metrics") as Metric[]; // ← ambil array dari JSON
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id="key-metrics"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="container mx-auto px-4 py-32 md:px-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="mb-12 text-6xl font-bold"
      >
        {t("title")}
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric: Metric, index: number) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.4,
                type: "spring",
              }}
              className="mb-2 text-5xl font-bold text-purple-300"
            >
              {metric.value}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className="mb-2 text-xl font-semibold"
            >
              {metric.label}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="text-gray-400"
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyMetrics;
