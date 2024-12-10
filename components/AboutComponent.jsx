"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
const AboutComponent = () => {
  return (
    <div className="container group py-12 xl:py-24 h-auto mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-x-10 items-center justify-between">
        <div className="w-full pt-10 lg:pt-0 px-5">
          <div className="h-full xl:h-[468px] xl:w-[700px] lg:h-[366px] lg:w-[500px] hex-img-container2 overflow-hidden">
            <Image
              src="/image/aboutfront.png"
              width={800}
              height={500}
              alt="image2"
              className="object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-2 px-2 items-center lg:items-start text-center lg:text-justify">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 h2"
          >
            Your{" "}
            <span className="underline underline-offset-8 decoration-primary">
              Trusted
            </span>{" "}
            Partner
          </motion.h1>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="tracking-widest uppercase p"
          >
            Why Choose Us
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-muted-foreground p"
          >
            At INT-D'COR, we pride ourselves on delivering exceptional interior
            design services you can rely on. With a commitment to quality,
            attention to detail, and customer satisfaction, we transform your
            spaces into stunning works of art. Trust us to bring your vision to
            life with professionalism, expertise, and care.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-muted-foreground p xl:pb-10"
          >
            Our team works closely with you at every step, ensuring your ideas
            and preferences are at the heart of the design process. Whether it’s
            a cozy home makeover or a complete commercial transformation, we
            combine creativity and functionality to create spaces you’ll love
            for years to come.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
