"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { FiCode, FiLayers, FiServer, FiCpu } from "react-icons/fi";

const COLORS_TOP = ["#8A2BE2", "#9370DB", "#9932CC", "#800080"];

const skills = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Building modern, responsive interfaces with React, Next.js, and TypeScript",
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description:
      "Creating robust APIs and services with Node.js, Python, and cloud technologies",
  },
  {
    icon: FiLayers,
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with modern design principles",
  },
  {
    icon: FiCpu,
    title: "AI & Machine Learning",
    description:
      "Implementing AI solutions and machine learning models for enhanced functionality",
  },
];

const About = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    f;
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="overflow-x-clip px-6 py-32 text-white"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1200px]"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 w-full text-center text-5xl font-bold text-white"
        >
          About <span className="text-purple-300">Me</span>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6 rounded-lg border border-gray-800 p-6 transition-colors duration-300 hover:border-purple-500/50">
              <p className="text-2xl font-semibold text-purple-300">
                My Journey
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                {`I'm`} a passionate Fullstack Developer with over 5 years of
                experience in creating innovative web solutions. My journey in
                tech has been driven by a constant desire to learn and push the
                boundaries of {`what's`} possible on the web.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                When {`I'm`} not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through technical writing and mentoring.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="rounded-lg border border-gray-800 p-6 backdrop-blur-3xl transition-colors duration-300 hover:border-purple-500/50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-500/10 p-3 text-purple-300">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
