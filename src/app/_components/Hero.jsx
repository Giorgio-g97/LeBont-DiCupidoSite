import Image from "next/image";
import React from "react";

// ShadCN UI
import { Button } from "@/components/ui/button"

const Hero = ({ dancing, patrick }) => {
  return (
    <div id="home">
      <div
        id="circle"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[-270px] top-[10px] -z-10"
      ></div>
      <h1
        className={`mt-36 w-full text-center text-[40px] font-bold ${dancing.className} text-primary p-5`}
      >
        Benvenuti nel paradiso senza glutine!
      </h1>
      <Image
        className="mx-auto"
        src="/hero.jpg"
        width={300}
        height={300}
        alt="hero-image"
      />
      <p className={`${patrick.className} m-5 text-xl text-justify`}>
        Sognavate di gustare torte e pasticcini freschi, realizzati con
        ingredienti genuini e senza compromessi? Ora è possibile! La nostra
        pasticceria è dedicata ai celiaci e a tutti coloro che amano il dolce,
        ma vogliono evitare glutine. Offriamo una vasta gamma di prodotti
        artigianali, preparati con cura e passione utilizzando ingredienti di
        qualità e ricette tradizionali adattate.
      </p>
      <Button className="flex mx-auto my-5" >Prenota ora!</Button>
      <div
        id="circle"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[300px] md:end-[1200px] top-[400px] -z-10"
      ></div>
    </div>
  );
};

export default Hero;
