"use client";
import { motion } from "framer-motion";
import Badge from "./Badge";
import { titleVariants } from "@/utils/animation";

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 text-center">
          {/* Bagde 1 */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs items-center flex-col gap-y-4"
          >
            <dt className="text-white leading-7 p">
              of Expertise in the Industry
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={3} endCountText="+ Years" />
            </dd>
          </motion.div>
          {/* Bagde 2 */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs items-center flex-col gap-y-4"
          >
            <dt className="text-white leading-7 p">Successfully Completed</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={500} endCountText="+ Projects " />
            </dd>
          </motion.div>
          {/* Bagde 3 */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs items-center flex-col gap-y-4"
          >
            <dt className="text-white leading-7 p">Satisfaction Guaranteed</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={100} endCountText="% Client" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default CompanySection;
