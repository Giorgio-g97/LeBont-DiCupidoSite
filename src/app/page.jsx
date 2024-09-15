import { Dancing_Script, Patrick_Hand } from "next/font/google";
import Navbar from "./_components/Navbar";
import { DnaIcon } from "lucide-react";

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
      <Navbar dancing={dancing} />
    </>
  );
}
