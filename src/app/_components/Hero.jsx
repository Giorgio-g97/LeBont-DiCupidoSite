import React from "react";

const Hero = ({ dancing, patrick }) => {
  return (
    <div id="home">
        <div
        id="circle"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[-270px] top-[10px] -z-10"
      ></div>
      <h1
        className={`w-full h-[800px] text-center text-[40px] font-bold ${dancing.className} p-5`}
      >
        Benvenuti nel paradiso senza glutine!
      </h1>
      <div
        id="circle"
        className="bg-secondary rounded-full w-[450px] h-[450px] fixed end-[450px] top-[200px] -z-10"
      ></div>
    </div>
  );
};

export default Hero;
