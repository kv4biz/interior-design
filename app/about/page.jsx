"use client";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
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
          <div className="items-center lg:items-start lg:flex gap-x-8 mb-4">
            {/* left section */}
            <motion.div style={{ scale }} ref={ref} className="w-full">
              <Image
                src="/image/gallery1123.jpg"
                width={700}
                height={700}
                className="object-cover"
                alt="about-image"
              />
            </motion.div>
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
        {/* team section */}
        <div className="lg:py-5">
          <div className="pt-4">
            <h1 className="oswald font-medium text-4xl uppercase text-center tracking-widest">
              Our Team
            </h1>
          </div>
          <div className="grid py-8 gap-16 lg:grid-cols-3">
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile2.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="p py-4 text-2xl uppercase font-semibold">
                  Building Survey
                </h2>
                <p className="p text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities
                </p>
              </div>
            </div>
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile1.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="p py-4 text-2xl uppercase font-semibold">
                  Building Survey
                </h2>
                <p className="p text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities
                </p>
              </div>
            </div>
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile3.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="p py-4 text-2xl uppercase font-semibold">
                  Building Survey
                </h2>
                <p className="p text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
