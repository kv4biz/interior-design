"use client";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer h-[2rem] w-[2rem]" />
      </SheetTrigger>
      {/* Accessible Title */}
      <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl font-semobold"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
