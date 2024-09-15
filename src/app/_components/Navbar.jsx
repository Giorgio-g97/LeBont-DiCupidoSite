"use client";
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

import { useWindowSize } from "../../lib/useWindowSize";

const Navbar = ({ patrick }) => {
  const { width } = useWindowSize();

  return (
    <>
      <div
        className={`m-3 h-30 bg-secondary flex justify-between md:justify-normal items-center p-2 Home shadow-lg rounded-xl ${patrick.className} text-[30px]`}
      >
        <Link href="/">
          <Image
            className="p-1"
            alt="logo"
            src="/logo.png"
            width={100}
            height={100}
          />
        </Link>
        {width > 768 ? (
          <div className={`w-full`}>
            <ul className={`flex justify-center gap-10 ${patrick.className}`}>
              <Link
                className="text-primary hover:scale-105 transition-all ease-in-out"
                href="#home"
              >
                Home
              </Link>
              <Link
                className="text-primary hover:scale-105 transition-all ease-in-out"
                href="#servizi"
              >
                Servizi
              </Link>
              <Link
                className="text-primary hover:scale-105 transition-all ease-in-out"
                href="#gallery"
              >
                Gallery
              </Link>
              <Link
                className="text-primary hover:scale-105 transition-all ease-in-out"
                href="#reviews"
              >
                Dicono di noi
              </Link>
            </ul>
          </div>
        ) : (
          <div>
            <Sheet>
              <SheetTrigger>
                <Menu className="size-[50px]" />
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent className="w-[230px] bg-third rounded-xl">
                <SheetHeader
                  className={`flex flex-col items-center text-[30px] gap-10 ${patrick.className}`}
                >
                  <Link className="text-primary" href="#home">
                    <SheetClose>Home</SheetClose>
                  </Link>
                  <Link className="text-primary" href="#servizi">
                    <SheetClose>Servizi</SheetClose>
                  </Link>
                  <Link className="text-primary" href="#gallery">
                    <SheetClose>Gallery</SheetClose>
                  </Link>
                  <Link className="text-primary" href="#reviews">
                    <SheetClose>Dicono di noi</SheetClose>
                  </Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
