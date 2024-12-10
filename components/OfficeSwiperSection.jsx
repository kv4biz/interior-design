"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const swiperImages = [
  { src: "/image/swiper1.jpg", alt: "swiper1" },
  { src: "/image/swiper2.jpg", alt: "swiper2" },
  { src: "/image/swiper3.jpg", alt: "swiper3" },
  { src: "/image/swiper4.jpg", alt: "swiper4" },
  { src: "/image/swiper5.jpg", alt: "swiper5" },
];

const OfficeSwiperSection = () => {
  return (
    <div className="">
      <div className="container mx-auto grid pb-8 lg:grid-cols-1">
        <div className="text-right px-6 lg:px-0">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 h2 lg:py-0"
          >
            Workspace <span className="text-primary">T</span>ransformation
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="uppercase pb-6 text-xl quattrocento font-bold tracking-wider mt-5"
          >
            Empowering Productivity in Style
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="grid grid-cols-1 px-6 lg:px-0 lg:grid-cols-2 p text-gray-600 dark:text-gray-400 gap-x-8 "
        >
          <p>
            Elevate your office with designs that inspire creativity and
            efficiency. We specialize in crafting workspaces that blend
            functionality and sophistication, tailored to meet your professional
            needs. From ergonomic layouts to stylish furnishings, we ensure
            every element works together to create an environment that motivates
            and impresses. Let us transform your office into a space where
            productivity thrives.
          </p>
          <p>
            Our experienced designers collaborate with you to bring your vision
            to life, incorporating modern trends and personalized touches to
            reflect your brand’s identity. Whether it's a small home office or a
            large corporate space, we deliver timeless solutions that redefine
            your work experience.
          </p>
        </motion.div>
        <a className="my-4 mx-auto lg:mx-0" href="/gallary">
          <Button className="inline-flex items-center px-8 py-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallary <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>
      {/* swiper section */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mt-5"
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={1020}
              height={520}
              className="w-full object-cover hover:scale-110"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfficeSwiperSection;
