import { Dancing_Script, Patrick_Hand } from "next/font/google";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Gallery from "./_components/Gallery";
import Reviews from "./_components/Reviews";

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
      <Services dancing={dancing} patrick={patrick} />
      <Gallery dancing={dancing} patrick={patrick} />
      <Reviews dancing={dancing} />
    </>
  );
}
