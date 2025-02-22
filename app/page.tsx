import Carousel from "@/src/components/features/Carousel/Carousel";
import ThreeScene from "@/src/components/features/model/ThreeScene";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="container bg-white">
        <Carousel />

        <ThreeScene />
      </div>
    </div>
  );
}
