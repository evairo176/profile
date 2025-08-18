"use client";
import React from "react";
import { motion } from "framer-motion";
import { Timeline, type TimelineItem } from "@/components/ui/timeline";
import { Briefcase, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const Experiences = () => {
  const t = useTranslations("experience");

  // Create translated experience data
  const translatedExperienceData: TimelineItem[] = [
    {
      id: 1,
      date: t("jobs.kpnPlantation.date"),
      title: t("jobs.kpnPlantation.title"),
      company: t("jobs.kpnPlantation.company"),
      description: t("jobs.kpnPlantation.description"),
      technologies: [
        ".NET",
        "Next Js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "AWS",
        "Sql Server",
        "Postgree",
        "MongoDb",
        "Google Maps",
        "Leaflet Maps",
        "Redis",
      ],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center",
      status: "current",
      icon: <Rocket className="h-6 w-6" />,
      statusLabels: {
        current: t("status.current"),
        previous: t("status.previous"),
      },
      technologiesLabel: t("technologies"),
    },
    {
      id: 2,
      date: t("jobs.extremeNetwork.date"),
      title: t("jobs.extremeNetwork.title"),
      company: t("jobs.extremeNetwork.company"),
      description: t("jobs.extremeNetwork.description"),
      technologies: [
        "Next Js",
        "Laravel",
        "MySQL",
        "Redis",
        "Express.js",
        "TypeScript",
        "Xendit",
        "Midtrans",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      status: "past",
      icon: <Briefcase className="h-6 w-6" />,
      statusLabels: {
        current: t("status.current"),
        previous: t("status.previous"),
      },
      technologiesLabel: t("technologies"),
    },
  ];

  return (
    <section
      id="experience"
      className="bg-background text-foreground px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t("title_1")} <span className="text-primary">{t("title_2")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("description")}
          </p>
        </motion.div>

        {/* shadcn/ui Timeline */}
        <div className="w-full">
          <Timeline items={translatedExperienceData} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
