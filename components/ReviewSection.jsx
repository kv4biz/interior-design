"use client";

import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "./ui/marquee";

const posts = [
  {
    id: 1,
    title: "A Dream Kitchen Come to Life",
    desc: "Working with [Your Company Name] was a fantastic experience. They transformed my outdated kitchen into a sleek, modern culinary space that's both functional and beautiful. I can't wait to host dinner parties now!",
    date: "Dec 2, 2024",
    author: {
      name: "Sophia Williams",
      role: "Homeowner",
      image: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Perfect Office for Productivity",
    desc: "My new office is a game-changer! The team at [Your Company Name] designed a workspace that perfectly balances style and functionality. I feel more motivated and focused than ever.",
    date: "Nov 28, 2024",
    author: {
      name: "Daniel Carter",
      role: "Freelance Consultant",
      image: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Living Room That Wows Everyone",
    desc: "I love how my living room turned out! It's cozy yet sophisticated, with every piece carefully chosen to match my style. My guests always compliment how stunning it looks.",
    date: "Dec 5, 2024",
    author: {
      name: "Emily Johnson",
      role: "Interior Design Enthusiast",
      image: "/image/profile3.jpg",
    },
  },
  {
    id: 4,
    title: "Modern Home with a Timeless Appeal",
    desc: "[Your Company Name] turned my vision of a modern home into a reality. From the open floor plans to the stylish accents, they nailed every detail. It's truly a place I'm proud to call home.",
    date: "Nov 22, 2024",
    author: {
      name: "Michael Adams",
      role: "Entrepreneur",
      image: "/image/profile1.jpg",
    },
  },
  {
    id: 5,
    title: "Kitchen Design That Inspires Creativity",
    desc: "I never thought I could love cooking as much as I do now. [Your Company Name] designed a kitchen that's as beautiful as it is functional. It's my favorite spot in the house!",
    date: "Dec 1, 2024",
    author: {
      name: "Rachel Green",
      role: "Food Blogger",
      image: "/image/profile2.jpg",
    },
  },
];

const ReviewCard = ({ author, desc, title, date }) => {
  return (
    <figure className="relative w-[400px] h-auto quattrocento cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] shadow-lg">
      {/* Author Section */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={author.name}
          src={author.image}
        />
        <div>
          <figcaption className="text-sm font-medium dark:text-white">
            {author.name}
          </figcaption>
          <p className="text-xs font-medium text-primary">{author.role}</p>
        </div>
      </div>
      {/* Review Title */}
      <h3 className="text-lg font-bold dark:text-white tracking-wider mb-2">
        {title}
      </h3>
      {/* Review Description */}
      <blockquote className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        {desc}
      </blockquote>
      {/* Rating Section */}
      <div className="flex items-center gap-2 mb-2">
        <Image
          src="/image/star.svg"
          alt="stars"
          width={80}
          height={5}
          className="inline-block"
        />
        <p className="text-xs text-gray-600 dark:text-gray-400">5/5</p>
      </div>
      {/* Date Section */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Reviewed on {date}
      </p>
    </figure>
  );
};

const ReviewSection = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="h2 underline underline-offset-8 decoration-primary"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="uppercase pb-6 text-xl quattrocento font-bold tracking-wider mt-5"
        >
          What Our Clients Are Saying
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="p"
        >
          Hear from our happy clients about our exceptional interior décor
          services!
        </motion.p>
        <div>
          <Marquee pauseOnHover className="[--duration:60s] mt-5">
            {posts.map((post) => (
              <ReviewCard
                key={post.id}
                title={post.title}
                desc={post.desc}
                date={post.date}
                author={post.author}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
