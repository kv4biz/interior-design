"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/products", name: "Our products" },
  { path: "/about", name: "about" },
  { path: "/gallery", name: "gallery" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact us" },
];
const Nav = ({ containerStyles, linkStyles, underlinStyles }) => {
  const path = usePathname();
  return (
    <nav
      className={`${containerStyles} font-[family-name:var(--font-russoOne)]`}
    >
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} uppercase tracking-wider`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlinStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
