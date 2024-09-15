import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ img, review }) => {

  return (
    <div className="w-56 h-60 border-slate-400 border-2 rounded-2xl m-2 bg-slate-200">
      <Image src={img} alt="icon-user" width={35} height={35} />
      <p>{review}</p>
      <div className="flex">
      
      </div>
    </div>
  );
};

export default ReviewCard;
