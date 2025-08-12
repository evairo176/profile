"use client";
import React from "react";
import { motion } from "framer-motion";
import profilepic from "/public/assets/profilepic.png";
import Image from "next/image";
import ModeToggle from "@/components/commons/ModeToggle";

const Hero = () => {
  return (
    <div
      className="relative overflow-clip min-h-screen bg-hero-gradient text-foreground 
    dark:bg-[linear-gradient(to_bottom,hsl(var(--gradient-start)),hsl(var(--gradient-mid1))_35%,hsl(var(--gradient-mid2))_55%,hsl(var(--gradient-end))_85%)] dark:text-foreground"
    >
      <div
        className="    absolute
    bg-background
    w-[2400px] h-[1000px] rounded-[50%]
    left-1/2 -translate-x-1/2 top-[450px]
    bg-hero-radial
    border border-hero"
      />

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent rounded-full blur-3xl"></div>
            <Image
              src={profilepic}
              alt="profile pic"
              className="w-[250px] relative z-10"
            />
            <div className="absolute top-2 right-2 z-20">
              <ModeToggle />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-foreground/80 max-w-lg mx-auto tracking-tighter mb-6">
              Hi, I am <br /> Dicki{" "}
              <span className="text-primary">Prasetya</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
              I am a fullstack developer focusing on creating websites that
              provides user with best experience
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-border rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
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
