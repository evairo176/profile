"use client";
import React, { useState } from "react";
import Image from "next/image";

import placeholderImage1 from "/public/assets/proj5.png";
import placeholderImage2 from "/public/assets/proj6.png";
import placeholderImage3 from "/public/assets/proj5.png";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2023,
    title: "Doodle - customer support chatbot",
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
    image: placeholderImage1,
  },
  {
    id: 2,
    year: 2024,
    title: "Dash - AI calling system",
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
    image: placeholderImage2,
  },
  {
    id: 3,
    year: 2024,
    title: "Atomic - AI driven outreach",
    description:
      "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
    image: placeholderImage3,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <motion.section className="text-foreground/80 py-32" id="portfolio">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-10 text-6xl font-bold">
            Selected <span className="text-primary">projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group mb-8 cursor-pointer"
            >
              <p className="text-primary mb-2 text-lg">{project.year}</p>
              <h3
                className={`group-hover:text-primary text-3xl font-semibold transition-colors duration-300 ${
                  selectedProject.id === project.id ? "text-primary/60" : ""
                }`}
              >
                {project.title} ↗
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-border/80 my-4 border-b-2"></div>
              )}
              {selectedProject.id === project.id && (
                <p
                  className={`text-foreground/60 transition-all duration-500 ease-in-out ${
                    selectedProject.id === project.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
