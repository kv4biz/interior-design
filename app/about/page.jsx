"use client";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="container mx-auto py-32 text-center text-black lg:py-48 h1"
        >
          Who are we?
        </motion.h1>
      </div>
      <div className="container px-2 lg:px-0 mx-auto">
        <div className="p pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            vairiants={tagVariants}
            className="tracking-widest uppercase text-center lg:p-10 font-bold lg:text-3xl"
          >
            Your Vision, Our Craftsmanship
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mb-4 text-center font-bold"
          >
            Welcome to [Your Company Name], where design meets functionality to
            create spaces that inspire and delight. With a passion for
            innovation and a keen eye for detail, we specialize in crafting
            interiors that reflect your unique style and needs. Whether it's a
            contemporary kitchen that brings families together, a productive
            office space that sparks creativity, or a cozy living room where
            memories are made, we bring your vision to life with unmatched
            expertise and care.
          </motion.p>
        </div>
        <div>
          <div className="items-center lg:items-start lg:flex gap-x-8 mb-10">
            {/* left section */}
            <div className="w-full">
              <Image
                src="/image/gallery1123.jpg"
                width={700}
                height={700}
                className="object-cover"
                alt="about-image"
              />
            </div>
            {/* left section */}
            <div className="p mt-5 lg:mt-0">
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="mb-4"
              >
                Whether it's a sleek, modern kitchen that redefines culinary
                experiences, a vibrant office space that enhances productivity,
                or a warm and inviting living room where cherished moments
                unfold, we bring your vision to life with creativity and
                precision. Our designs are thoughtfully curated to cater to your
                lifestyle while embracing timeless elegance and contemporary
                trends.
              </motion.p>
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="mb-4"
              >
                At [Your Company Name], we understand that every space tells a
                story. That’s why we take a personalized approach, working
                closely with you every step of the way—from ideation to
                execution. With our dedication to quality craftsmanship and a
                seamless process, we deliver spaces that not only meet but
                exceed your expectations. Let us help you create interiors that
                resonate with your unique essence and leave a lasting
                impression.
              </motion.p>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="mb-10 text-xl font-bold"
              >
                Ready to transform your space? Let us design the interior of
                your dreams—where every detail is crafted for comfort and style.
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
