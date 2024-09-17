"use client";
import React from "react";
import ReviewCard from "./ReviewCard";

// Import Framer Motion
import { motion, stagger } from "framer-motion";
import { Hidden } from "@mui/material";

const Reviews = ({ dancing }) => {
  const reviewsUtenti = [
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVSXPSEDuaODWiijQOZfpNPjqngaa6pK4AL21B6lkDeslotMiOs=w75-h75-p-rp-mo-br100",
      review:
        "Ottima pasticceria senza glutine e senza lattosio, ho ritrovato il piacere di.mangiare 🥰 …",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVqtkxXGNnvBUiLnjchJCRTs68MkB_2uuEGVuV8wnFMtsXEQEcMyQ=w75-h75-p-rp-mo-ba3-br100",
      review: "TOP",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjV0_GeHnvhvWlOtY6cfx63CufDH_CtlRBVHJ5iIjd1SkLywF1bQ=w75-h75-p-rp-mo-br100",
      review: "Torta vegana buonissima e gradita dai miei invitati!",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjW36IGDRYli_F0MspYw6exjt1KLEES3OTVHxIhnq6wkw_GjV_aI=w75-h75-p-rp-mo-ba4-br100",
      review: "Cibo: 4 Servizio: 4 Ambiente: 4",
      rating: 4,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      id="reviews"
      className="my-10 pt-40"
    >
      <h1
        className={`${dancing.className} text-primary text-[50px] text-center`}
      >
        Dicono di noi
      </h1>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.35,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-6 m-5"
      >
        {reviewsUtenti.map((rev, i) => (
          <ReviewCard
            key={i}
            img={rev.img}
            review={rev.review}
            rating={rev.rating}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Reviews;
