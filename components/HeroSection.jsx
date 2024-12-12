"use client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const HeroSection = () => {
  return (
    <div className="container group mx-auto py-12 xl:py-24 h-auto text-center lg:py-0 lg:text-left lg:flex lg:justify-between gap-2">
      {/* left section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="tracking-widest uppercase p"
        >
          Elevate Your Home, Elevate Your Life
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="h1"
        >
          Transform Your <span className="text-primary">Space</span> into <br />
          a Masterpiece
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="pb-6 text-muted-foreground p xl:pb-10"
        >
          Discover the perfect blend of elegance and functionality with our
          expert interior design services. We craft personalized, timeless
          spaces that reflect your style and inspire comfort, making every room
          in your home a true masterpiece. Let us bring your vision to life.
        </motion.p>
        <Button className="inline-flex items-center px-8 py-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          Book now
          <ArrowUpRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
      {/* right section */}
      <div className="w-full lg:w-1/2 pt-10 lg:pt-0 px-2 lg:px-0">
        <div className="lg:absolute h-full xl:h-[448px] xl:w-[650px] lg:h-[344px] lg:w-[500px] hex-img-container overflow-hidden">
          <video
            width="650"
            height="448"
            className="obiect-cover w-full h-full group-hover:scale-110"
            autoPlay
            loop
            muted
            preload="none"
          >
            <source src="/video/herovideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
