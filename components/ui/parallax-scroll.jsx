"use client";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ParallaxScroll Component
export const ParallaxScroll = ({ images, className }) => {
  const { scrollYProgress } = useScroll(); // Track global scroll

  // Transform values for parallax effect
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "relative w-full mb-10 overflow-hidden scrollbar-hide",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb=28 lg:pb-40">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                height={400}
                width={400}
                alt={`gallery-image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                height={400}
                width={400}
                alt={`gallery-image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                height={400}
                width={400}
                alt={`gallery-image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
