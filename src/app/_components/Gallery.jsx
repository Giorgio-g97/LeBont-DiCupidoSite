"use client";
import React from "react";
import Image from "next/image";

// ShadCN UI
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = ({ dancing }) => {
  const arrayImages = [
    { id: 1, url: "/img_1.jpg" },
    { id: 2, url: "/img_2.jpg" },
    { id: 3, url: "/img_3.jpg" },
    { id: 4, url: "/img_4.jpg" },
    { id: 5, url: "/img_5.jpg" },
    { id: 6, url: "/img_6.jpg" },
    { id: 7, url: "/img_7.jpg" },
  ];

  return (
    <div id="gallery" className="my-10 pt-40">
      <h1
        className={`${dancing.className} text-primary text-[50px] text-center`}
      >
        Le nostre creazioni
      </h1>
      <div className="mt-5 flex justify-center">
        <Carousel
          className="max-w-xs md:max-w-[80vw]"
          plugins={[Autoplay({ delay: 2000, loop: true })]}
        >
          <CarouselContent>
            {arrayImages.map((img, i) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={i}>
                <Image
                  className="mx-auto rounded-2xl shadow-2xl"
                  src={img.url}
                  width={450}
                  height={450}
                  alt={img.url}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
