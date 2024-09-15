import { ChefHat, MilkOff, Ticket, WheatOff } from "lucide-react";
import React from "react";

const Services = ({ dancing, patrick }) => {
  return (
    <div id="servizi">
      <h1
        className={`w-full text-center text-[50px] font-bold ${dancing.className} text-primary p-5`}
      >
        Servizi
      </h1>
      <p className={`text-center text-xl ${patrick.className}`}>
        Scopri il nostro mondo senza limiti
      </p>
      <ul
        className={`list-none text-xl flex flex-col items-center text-center ${patrick.className}`}
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
    </div>
  );
};

export default Services;
