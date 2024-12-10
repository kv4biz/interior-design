"use client";
import { useEffect, useState } from "react";
import ThemeToogle from "./ThemeToogle";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-tertiary shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          <div className="flex gap-x-4">
            {/* nav */}
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary"
              underlinStyles="absolute left-0 top-full h-[2px] w-full bg-primary dark:bg-primary"
            />
            {/* toogle */}
            <ThemeToogle />
            {/* mobile */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
