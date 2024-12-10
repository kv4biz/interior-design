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

const HomeSwiperSection = () => {
  return (
    <div className="py-8 lg:pt-16 lg:pb-10">
      <div className="container mx-auto grid lg:grid-cols-1">
        <div className="text-left px-6 lg:px-0">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 h2 lg:py-0"
          >
            Modern <span className="text-primary">H</span>omes
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="uppercase pb-6 text-xl quattrocento font-bold tracking-wider mt-5"
          >
            Luxury Décor for Ultimate Comfort and Style
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="grid p grid-cols-1 px-6 lg:px-0 lg:grid-cols-2 text-gray-600 dark:text-gray-400 gap-x-8 "
        >
          <p className="">
            Experience the perfect blend of luxury and comfort with our modern
            home décor solutions. We specialize in creating elegant, functional
            spaces that reflect contemporary sophistication. From sleek
            furniture arrangements to carefully curated accents, we ensure every
            detail contributes to a home that's both beautiful and welcoming.
            Let us help you transform your space into the epitome of modern
            living.
          </p>
          <p>
            Our expert designers work closely with you to bring your vision to
            life, combining your preferences with the latest trends in modern
            interior design. Whether you're updating a single room or revamping
            your entire home, we deliver timeless designs that elevate your
            living experience.
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

export default HomeSwiperSection;
