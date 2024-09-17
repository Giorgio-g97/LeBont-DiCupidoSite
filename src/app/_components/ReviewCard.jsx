"use client";
import Image from "next/image";

// Import Review Material UI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

// Import Framer Motion
import { motion } from "framer-motion";

const ReviewCard = ({ img, review, rating }) => {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="w-40 p-3 border-primary border-2 rounded-2xl bg-third flex flex-col gap-3 justify-center items-center"
    >
      <Image src={img} alt="icon-user" width={35} height={35} />
      <p>{review}</p>
      <div className="flex">
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
