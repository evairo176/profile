"use client";
import { motion } from "framer-motion";
import profilepic from "/public/assets/profilepic.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-clip bg-[linear-gradient(to_bottom,#fff,#F8F4FF_35%,#E6D7FF_55%,#D4C5FF_85%)] text-gray-800 dark:bg-[linear-gradient(to_bottom,#000,#340F41_35%,#8A3DA4_55%,#B993ED_85%)] dark:text-white">
      <div className="absolute top-[450px] left-1/2 h-[1000px] w-[2400px] -translate-x-1/2 rounded-[50%] border-[1px] border-[#BD8CDE]/30 bg-white bg-[radial-gradient(closest-side,#fff_85%,#C084FC)] dark:bg-black dark:bg-[radial-gradient(closest-side,#000_85%,#9E4AC5)]" />

      <div className="relative container mx-auto px-4 pt-12 pb-24">
        <div className="z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-24 mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-400/30 to-transparent blur-3xl dark:from-purple-500/40"></div>
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
            <h1 className="mx-auto mb-6 max-w-lg text-6xl font-bold tracking-tighter text-gray-800/80 md:text-7xl dark:text-white/80">
              Hi, I am <br /> John{" "}
              <span className="text-purple-600 dark:text-purple-300">Doe</span>
            </h1>
            <p className="mx-auto mb-6 max-w-lg text-xl leading-relaxed text-gray-700/80 dark:text-white/80">
              I am a fullstack developer focusing on creating websites that
              provides user with best experience
            </p>

            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 font-bold text-white transition-colors hover:bg-purple-600 dark:from-purple-700 dark:to-purple-500 dark:hover:bg-purple-700"
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-purple-400/40 px-6 py-3 font-bold transition-colors hover:bg-purple-500 hover:text-white dark:border-purple-400/20 dark:hover:bg-purple-700"
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
