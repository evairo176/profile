"use client";
import React from "react";
import { motion } from "framer-motion";
import { Timeline, type TimelineItem } from "@/components/ui/timeline";
import { Briefcase, Code, Laptop, Rocket } from "lucide-react";

const experienceData: TimelineItem[] = [
  {
    id: 1,
    date: "Jan 2022 - Present",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center",
    status: "current",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    id: 2,
    date: "Mar 2020 - Dec 2021",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    description:
      "Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
    status: "past",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 3,
    date: "Jun 2019 - Feb 2020",
    title: "Frontend Developer",
    company: "StartupHub Indonesia",
    description:
      "Focused on creating intuitive user interfaces and improving user experience for various startup projects.",
    technologies: ["React", "JavaScript", "SASS", "Figma"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center",
    status: "past",
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    id: 4,
    date: "Aug 2018 - May 2019",
    title: "Junior Web Developer",
    company: "WebDev Agency",
    description:
      "Started my professional journey as a junior developer, learning industry best practices and contributing to various client projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop&crop=center",
    status: "past",
    icon: <Code className="h-6 w-6" />,
  },
];

const Experiences = () => {
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
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My professional journey in web development
          </p>
        </motion.div>

        {/* shadcn/ui Timeline */}
        <div className="w-full">
          <Timeline items={experienceData} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
