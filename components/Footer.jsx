"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/utils/animation";

const Footer = () => {
  return (
    <div className="bg-tertiary oswald">
      <div className="container mx-auto lg:grid lg:grid-cols-2 px-5 py-12">
        <div className="grid gap-4 pb-4 text-center lg:text-left lg:pb-0 grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline">
                About us
              </Link>
              <Link href="#" className="py-1 hover:underline">
                Careers
              </Link>
              <Link href="#" className="py-1 hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Resources</h2>
            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline">
                Blog
              </Link>
              <Link href="#" className="py-1 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="py-1 hover:underline">
                Term & Condition
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="#" className="py-1 hover:underline">
                LinkedIn
              </Link>
              <Link href="#" className="py-1 hover:underline">
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <p className="pb-4 text-2xl lg:text-4xl tracking-wide font-bold">
            Stay Updated
          </p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="email" placeholder="Email Address" />
            <button className="absolute top-2 right-2 bg-black text-white rounded-full h-10 px-4 text-sm dark:bg-primary hover:border-2 hover:border-black hover:bg-white hover:text-black">
              Subscribe
            </button>
          </div>
          <p>Get the latest news, updates, and tips delivered right to you.</p>
        </motion.div>
      </div>
      <div className="py-4 bg-black dark:bg-primary">
        <div className="container text-white text-center">
          <p className="text-xs lg:text-sm font-light tracking-widest">
            &copy; 2024 INTD'COR. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
