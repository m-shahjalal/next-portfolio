import Image from "next/image";
import logo from "@/images/logo.svg";
import { Jost } from "next/font/google";

const font = Jost({
  subsets: ["latin"],
});

const Card = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col relative h-full">
      <Image className="" src={logo} height={100} width={100} alt="logo" />
      <div className={font.className}>
        <h1 className="text-6xl capitalize">Md Shahjalal</h1>
        <sub className="tracking-[5.5px] text-base">
          Fullstack Software Engineer
        </sub>
      </div>
    </div>
  );
};

export default Card;
