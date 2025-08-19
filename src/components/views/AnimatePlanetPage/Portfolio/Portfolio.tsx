"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

import mris from "/public/portfolio/mris/mris_browser_mockup.webp";
import eventku from "/public/portfolio/eventku/eventku_browser_mockup.webp";
import rkb from "/public/portfolio/rkb/mcs_browser_mockup.webp";
import ppa from "/public/portfolio/ppa/photoproof.webp";
import psaweb from "/public/portfolio/psaweb/psa_browser_mockup.webp";
import tnosApp from "/public/portfolio/tnos/tnos_clean.webp";
import paymentXenditCustom from "/public/portfolio/tnos/payment-xendit-custom.png";
import discord from "/public/portfolio/discord/discord.png";
import jobseeker from "/public/portfolio/jobseeker/jobhuntly_browser_mockup.webp";
import blog from "/public/portfolio/blog/explorer_browser_mockup.webp";
import news from "/public/portfolio/news/magz_browser_mockup.webp";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: StaticImageData;
  technologies: string[];
  link?: string;
}

const Portfolio = () => {
  const t = useTranslations("portfolio");
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid");

  // Create translated projects data with technologies
  const projects: Project[] = [
    {
      id: "1",
      title: t("projects.event.title"),
      description: t("projects.event.description"),
      year: t("projects.event.year"),
      image: eventku,
      technologies: [
        "Next JS",
        "Express.js",
        "Typescript.js",
        "MongoDB",
        "Socket.io",
        "Midtrans",
        "Shadcn UI",
      ],
      link: "https://frontend-event-two.vercel.app/",
    },
    {
      id: "2",
      title: t("projects.mris.title"),
      description: t("projects.mris.description"),
      year: t("projects.mris.year"),
      image: mris,
      technologies: [
        ".NET",
        "Sql Server",
        "Oracle",
        "SAP Integration",
        "Redis",
        "System Analyst",
      ],
      link: "#",
    },
    {
      id: "3",
      title: t("projects.rkb.title"),
      description: t("projects.rkb.description"),
      year: t("projects.rkb.year"),
      image: rkb,
      technologies: [".NET", "Sql Server", "Oracle", "SAP Integration"],
      link: "#",
    },
    {
      id: "4",
      title: t("projects.psaweb.title"),
      description: t("projects.psaweb.description"),
      year: t("projects.psaweb.year"),
      image: psaweb,
      technologies: [
        "Next JS",
        "Express.js",
        "Typescript.js",
        "Sql Server",
        "Shadcn UI",
      ],
      link: "#",
    },
    {
      id: "5",
      title: t("projects.ppa.title"),
      description: t("projects.ppa.description"),
      year: t("projects.ppa.year"),
      image: ppa,
      technologies: [".NET", "Sql Server", "Oracle", "SAP Integration"],
      link: "#",
    },
    {
      id: "6",
      title: t("projects.pwa.title"),
      description: t("projects.pwa.description"),
      year: t("projects.pwa.year"),
      image: tnosApp,
      technologies: ["Next JS", "React JS", "MySql", "Laravel", "Express Js"],
      link: "https://app.tnosworld.com/",
    },
    {
      id: "7",
      title: t("projects.tnosPayment.title"),
      description: t("projects.tnosPayment.description"),
      year: t("projects.tnosPayment.year"),
      image: paymentXenditCustom,
      technologies: ["Next JS", "React JS", "MySql", "Laravel", "Express Js"],
      link: "https://app.tnosworld.com/",
    },
    {
      id: "8",
      title: t("projects.discord.title"),
      description: t("projects.discord.description"),
      year: t("projects.discord.year"),
      image: discord,
      technologies: [
        "Next JS",
        "Express.js",
        "Typescript.js",
        "MongoDB",
        "Socket.io",
        "Shadcn UI",
        "Emoji",
        "Framer Motion",
      ],
      link: "#",
    },
    {
      id: "9",
      title: t("projects.jobseeker.title"),
      description: t("projects.jobseeker.description"),
      year: t("projects.jobseeker.year"),
      image: jobseeker,
      technologies: [
        "Next JS",
        "Express.js",
        "Typescript.js",
        "MongoDB",
        "Shadcn UI",
        "Emoji",
        "Framer Motion",
      ],
      link: "#",
    },
    {
      id: "10",
      title: t("projects.blog.title"),
      description: t("projects.blog.description"),
      year: t("projects.blog.year"),
      image: blog,
      technologies: [
        "Next JS",
        "Express.js",
        "Typescript.js",
        "MongoDB",
        "Shadcn UI",
        "Emoji",
        "Framer Motion",
      ],
      link: "#",
    },
    {
      id: "11",
      title: t("projects.news.title"),
      description: t("projects.news.description"),
      year: t("projects.news.year"),
      image: news,
      technologies: ["Laravel", "MySql"],
      link: "#",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <motion.section
      className="bg-background text-foreground px-4 py-20"
      id="portfolio"
    >
      <div className="container mx-auto max-w-7xl">
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
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            {t("description")}
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
              size="sm"
              className="cursor-pointer"
            >
              Grid View
            </Button>
            <Button
              variant={viewMode === "detailed" ? "default" : "outline"}
              onClick={() => setViewMode("detailed")}
              size="sm"
              className="cursor-pointer"
            >
              Detailed View
            </Button>
          </div>
        </motion.div>

        {/* Grid View - Better for many projects */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full pt-0 transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={200}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">
                        {t("technologies")}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <>
                        {project.link === "#" ? (
                          <Button
                            className="w-full cursor-not-allowed"
                            size="sm"
                            disabled
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {t("view_project")}
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="w-full cursor-pointer"
                            size="sm"
                          >
                            <Link href={project.link} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {t("view_project")}
                            </Link>
                          </Button>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Detailed View - Original style but improved */}
        {viewMode === "detailed" && (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group hover:bg-muted/50 cursor-pointer rounded-lg p-6 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </Badge>
                  </div>

                  <h3
                    className={`group-hover:text-primary mb-3 text-2xl font-semibold transition-colors duration-300 ${
                      selectedProject.id === project.id ? "text-primary" : ""
                    }`}
                  >
                    {project.title} ↗
                  </h3>

                  {selectedProject.id === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-primary mb-4 border-l-4 pl-4">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="mb-2 text-sm font-semibold">
                            {t("technologies")}:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {project.link && (
                          <>
                            {project.link === "#" ? (
                              <Button
                                className="w-full cursor-not-allowed"
                                size="sm"
                                disabled
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {t("view_project")}
                              </Button>
                            ) : (
                              <Button
                                asChild
                                className="w-full cursor-pointer"
                                size="sm"
                              >
                                <Link href={project.link} target="_blank">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  {t("view_project")}
                                </Link>
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl shadow-2xl"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
