"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const images = [
  "/image/gallery1.jpeg",
  "/image/gallery2.jpeg",
  "/image/gallery3.png",
];
const page = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="oswald font-bold tracking-tighter text-[88px] lg:text-[202px] text-primary mb-6">
          Let's Connect
        </h1>

        {/* Social Buttons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Schedule a Meeting */}
        <p className="text-white">
          Schedule a meeting:{" "}
          <a
            href="https://calendly.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300 transition"
          >
            Click now
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
