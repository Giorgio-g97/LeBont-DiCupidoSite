import Image from "next/image";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="m-3 h-30 bg-secondary flex justify-between items-center p-2 Home shadow-lg rounded-xl">
        <Image
          className="p-1"
          alt="logo"
          src="/logo.png"
          width={100}
          height={100}
        />
        <div>
          <Sheet>
            <SheetTrigger>
              <Menu className="size-[50px]" />
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent className="w-[230px] bg-third rounded-xl">
              <SheetHeader className="text-[20px] gap-10">
                <Link href="#home">
                  <SheetClose>Home</SheetClose>
                </Link>
                <Link href="#servizi">
                  <SheetClose>Servizi</SheetClose>
                </Link>
                <Link href="#gallery">
                  <SheetClose>Gallery</SheetClose>
                </Link>
                <Link href="#reviews">
                  <SheetClose>Dicono di noi</SheetClose>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
