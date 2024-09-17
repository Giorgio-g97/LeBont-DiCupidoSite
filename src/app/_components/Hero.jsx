"use client";
import Image from "next/image";
import React from "react";

// ShadCN UI
import { Button } from "@/components/ui/button";

// Import Framer Motion
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ dancing, patrick }) => {
  return (
    <div id="home">
      <div
        id="circle"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[-270px] top-[10px] -z-10"
      ></div>
      <motion.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className={`pt-40 w-full text-center text-[40px] font-bold ${dancing.className} text-primary p-5`}
      >
        Benvenuti nel paradiso senza glutine!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          className="mx-auto"
          src="/hero.jpg"
          width={300}
          height={300}
          alt="hero-image"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className={`${patrick.className} m-5 text-xl text-justify`}
      >
        Sognavate di gustare torte e pasticcini freschi, realizzati con
        ingredienti genuini e senza compromessi? Ora è possibile! La nostra
        pasticceria è dedicata ai celiaci e a tutti coloro che amano il dolce,
        ma vogliono evitare glutine. Offriamo una vasta gamma di prodotti
        artigianali, preparati con cura e passione utilizzando ingredienti di
        qualità e ricette tradizionali adattate.
      </motion.p>
      <Button className="flex mx-auto hover:scale-105 transition-all ease-in-out">
        <Link
          className="flex items-center"
          href="https://wa.me/3516568470?text=Ciao%2C+vorrei+effettuare+una+prenotazione%21"
        >
          <Image className="p-1" src="/wa-icon.svg" width={30} height={30} alt="wa-icon" />
          Prenota ora!
        </Link>
      </Button>
      <div
        id="circle-2"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[300px] md:end-[1200px] top-[400px] -z-10"
      ></div>
    </div>
  );
};

export default Hero;
