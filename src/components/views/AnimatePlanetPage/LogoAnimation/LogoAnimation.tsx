"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "/public/assets/udemy.png";
import fiverr from "/public/assets/fiverr.png";
import elementor from "/public/assets/elementor.png";
import logitech from "/public/assets/logitech.png";
import oracle from "/public/assets/oracle.png";

const baseLogos = [
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

// gandakan supaya loop terasa mulus (total 20 item)
const images = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

const LogoAnimation = () => {
  return (
    <>
      <div className="my-24 skew-y-3 py-8">
        <div className="container mx-auto">
          {/* pakai token warna shadcn/ui + gradient mask */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="text-muted-foreground flex flex-none gap-14 pr-14"
              animate={{ translateX: "-50%" }}
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
                    className="h-8 w-auto opacity-60 transition-opacity hover:opacity-100"
                  />
                ) : (
                  <div
                    key={index}
                    className="border-border bg-muted text-muted-foreground flex h-8 w-24 items-center justify-center rounded-md border px-3 text-xs font-medium"
                  >
                    LOGO
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoAnimation;
