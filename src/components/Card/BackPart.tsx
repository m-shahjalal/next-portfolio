import Image from "next/image";
import logo from "@/images/logo.svg";
import { Jost } from "next/font/google";

const font = Jost({
  subsets: ["latin"],
});

const Card = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col relative h-full p-8 text-[#e2e8f0] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      
      {/* Pulsing logo wrapper */}
      <div className="relative mb-6 p-4 bg-emerald-500/5 rounded-full border border-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)] group">
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
        <Image 
          className="relative drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-transform duration-700 group-hover:rotate-180" 
          src={logo} 
          height={80} 
          width={80} 
          alt="logo" 
        />
      </div>

      {/* Typography with glowing subtitles */}
      <div className={`${font.className} text-center`}>
        <h1 className="text-4xl uppercase font-bold tracking-widest text-white glow-text-cyan">
          Md Shahjalal
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="h-[1px] w-8 bg-emerald-500/50" />
          <sub className="tracking-[4px] text-xs font-mono uppercase text-emerald-400">
            Fullstack Engineer
          </sub>
          <span className="h-[1px] w-8 bg-emerald-500/50" />
        </div>
      </div>
    </div>
  );
};

export default Card;
