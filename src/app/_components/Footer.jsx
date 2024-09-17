import { Clock, Mail, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

const Footer = ({ dancing, patrick }) => {
  return (
    <>
      <div className={`bg-secondary ${patrick.className} py-3 `}>
        <div className="flex px-3 justify-center md:justify-around">
          <div className="pt-1 flex flex-col text-center gap-2">
            <h2 className={`${dancing.className} text-primary text-[30px]`}>
              Contatti
            </h2>
            <div className="flex items-center text-xl gap-3">
              <Mail />
              <p>giekappa@gmail.com</p>
            </div>
            <div className="flex items-center text-xl gap-3">
              <PhoneIcon /> <p>+39 351 656 8470</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-xl gap-3">
                <MapPin />
                <p>Viale G. Di Vittorio, 207</p>
              </div>
              <p className="text-xl">71121, Foggia (FG)</p>
            </div>
          </div>

          <div
            className={`pt-1 flex flex-col items-center text-center justify-center gap-2 ${patrick.className}`}
          >
            <h2 className={`${dancing.className} text-primary text-[30px]`}>
              Orari di apertura
            </h2>
            <div className="flex flex-col md:flex justify-center items-center text-xl">
              <Clock />
              <p className="">Mar-Sab</p>
            </div>
            <div className="text-xl text-center">
              <p>8:30 - 13:30</p>
              <p>17:00 - 20:00</p>
              <p>Dom</p>
              <p>8:30 - 13:30</p>
            </div>
            <p className="text-xl ">
              Lun <span className="text-primary">Chiuso</span>
            </p>
          </div>
        </div>
        {/* Mappa */}

        <div className="">
          <h2
            className={`${dancing.className} text-primary text-[30px] text-center py-5`}
          >
            Ci troviamo qui
          </h2>
          <iframe
            className="border-0 rounded-3xl shadow-2xl w-full h-96 px-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11961.309138449651!2d15.552752230781064!3d41.45381634257328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339d934ac365e69%3A0x50f43dcd6517c0e0!2sLe%20Bont%C3%A0%20di%20Cupido!5e0!3m2!1sit!2sit!4v1726565850061!5m2!1sit!2sit"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Footer;
