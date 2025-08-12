"use client";
import React from "react";
import { motion } from "framer-motion";
import profilepic from "/public/assets/profilepic.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero-gradient text-foreground dark:text-foreground relative min-h-screen overflow-clip dark:bg-[linear-gradient(to_bottom,hsl(var(--gradient-start)),hsl(var(--gradient-mid1))_35%,hsl(var(--gradient-mid2))_55%,hsl(var(--gradient-end))_85%)]">
      <div className="bg-background bg-hero-radial border-hero absolute top-[450px] left-1/2 h-[1000px] w-[2400px] -translate-x-1/2 rounded-[50%] border" />

      <div className="relative container mx-auto px-4 pt-12 pb-24">
        <div className="z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-24 mb-8"
          >
            <div className="from-primary/40 absolute inset-0 rounded-full bg-gradient-to-b to-transparent blur-3xl"></div>
            <Image
              src={profilepic}
              alt="profile pic"
              className="relative z-10 w-[250px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-foreground/80 mx-auto mb-6 max-w-lg text-6xl font-bold tracking-tighter md:text-7xl">
              Hi, I am <br /> Dicki{" "}
              <span className="text-primary">Prasetya</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-6 max-w-lg text-xl leading-relaxed">
              I am a fullstack developer focusing on creating websites that
              provides user with best experience
            </p>

            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 font-bold transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-border hover:bg-accent hover:text-accent-foreground rounded-full border px-6 py-3 font-bold transition-colors"
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div></motion.div>
      </div>
    </div>
  );
};

export default Hero;
