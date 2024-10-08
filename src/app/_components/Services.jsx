"use client"
import { ChefHat, MilkOff, Ticket, WheatOff } from "lucide-react";
import React from "react";

//Import Framer Motion
import {motion} from "framer-motion"

const Services = ({ dancing, patrick }) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7}}
    className="pt-40" id="servizi">
      <h1
        className={`w-full text-center text-[50px] font-bold ${dancing.className} text-primary pb-5`}
      >
        Servizi
      </h1>
      <p className={`text-center text-xl md:text-[30px] ${patrick.className} text-primary mb-5`}>
        Scopri il nostro mondo senza limiti
      </p>
      <ul
        className={`list-none text-xl md:text-[25px] gap-2 flex flex-col items-center text-center ${patrick.className}`}
      >
        <li className="flex gap-2">
          <ChefHat /> Produzione artigianale
        </li>
        <li className="flex gap-3">
          <WheatOff />
          Senza glutine
        </li>
        <li className="flex gap-3">
          <MilkOff /> Senza lattosio
        </li>
        <li className="flex gap-3">
          <Ticket /> Prodotti erogabili ASL
        </li>
      </ul>
    </motion.div>
  );
};

export default Services;
