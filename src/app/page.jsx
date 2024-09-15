import { Dancing_Script, Patrick_Hand } from "next/font/google";
import Navbar from "./_components/Navbar";
import { DnaIcon } from "lucide-react";
import Hero from "./_components/Hero";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Navbar patrick={patrick} />
      <Hero dancing={dancing} patrick={patrick} />
    </>
  );
}