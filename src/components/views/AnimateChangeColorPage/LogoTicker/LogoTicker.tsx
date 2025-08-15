// This line tells Next.js that this component uses client-side features
"use client";

// Import necessary components and libraries
import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "/public/animate-change-color/udemy.png";
import fiverr from "/public/animate-change-color/fiverr.png";
import elementor from "/public/animate-change-color/elementor.png";
import logitech from "/public/animate-change-color/logitech.png";
import oracle from "/public/animate-change-color/oracle.png";
// Define an array of image objects, currently empty
const images = [
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

const LogoTicker = () => {
  return (
    <div className="bg-purple-200/10 bg-gradient-to-br from-white/10 to-transparent py-8 shadow-lg backdrop-blur-md">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) =>
              image.src ? (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={30}
                />
              ) : (
                <div
                  key={index}
                  className="flex h-8 w-24 items-center justify-center bg-gray-300 text-gray-600"
                >
                  LOGO
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
