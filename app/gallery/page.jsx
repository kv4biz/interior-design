"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "framer-motion";
import { desVariants } from "@/utils/animation";
const images = [
  "/image/gallery1.jpeg",
  "/image/gallery2.jpeg",
  "/image/gallery3.png",
  "/image/gallery1.jpeg",
  "/image/gallery2.jpeg",
  "/image/gallery3.png",
  "/image/gallery1.jpeg",
  "/image/gallery2.jpeg",
  "/image/gallery3.png",
  "/image/gallery1.jpeg",
  "/image/gallery2.jpeg",
  "/image/gallery3.png",
];

const Page = () => {
  return (
    <div className="container mx-auto">
      {/* Video Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/image/hall.png"
        >
          <source src="/video/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-35" />
        {/* Title */}
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h1"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          Our Gallery
        </h1>
      </div>
      {/* Short Tag Under Video */}
      <div className="flex justify-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-center max-w-2xl pt-5 p"
        >
          Immerse yourself in elegant and inspiring interior designs,
          thoughtfully curated to spark your creativity.
        </motion.div>
      </div>
      {/* Image Parallax Scroll Section */}
      <ParallaxScroll images={images} className="py-10" />
    </div>
  );
};

export default Page;
