"use client";
import FontPart from "@/components/Card/FontPart";
import Container from "@/components/Panel/Container";
import useGlobalStore from "@/store/useGlobalStore";
import dynamic from "next/dynamic";

const ScrollingText = dynamic(
  () => import("@/components/BgText/ScrollingText"),
  { ssr: false }
);


export default function Home() {
  const expand = useGlobalStore((state) => state.isExpand);
  const setExpand = useGlobalStore((state) => state.toggleTerminal);

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen relative overflow-hidden bg-[#03030d] px-4">
      <ScrollingText />

      {/* Mobile Tab Selector */}
      <div className="flex md:hidden bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md mb-6 z-20 select-none">
        <button
          onClick={() => { if (expand) setExpand(); }}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${!expand
            ? "bg-emerald-500 text-[#03030d] font-bold shadow-lg"
            : "text-slate-400 hover:text-white"
            }`}
        >
          Overview
        </button>
        <button
          onClick={() => { if (!expand) setExpand(); }}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${expand
            ? "bg-emerald-500 text-[#03030d] font-bold shadow-lg"
            : "text-slate-400 hover:text-white"
            }`}
        >
          Terminal
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-5 items-center justify-center z-10">
        {/* Card */}
        <div
          onClick={expand ? () => setExpand() : undefined}
          className={`relative h-[400px] rounded-2xl glass-card border border-white/10 overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out ${expand
            ? "w-12 cursor-pointer hover:border-emerald-500/30 hover:bg-emerald-500/5"
            : "w-[650px] shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            }`}
        >
          <div className={`absolute inset-0 transition-opacity duration-300 ${expand ? "opacity-0 pointer-events-none" : "opacity-100 delay-150"}`}>
            <FontPart />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${expand ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}>
            <span className="[writing-mode:vertical-lr] text-[10px] tracking-widest uppercase text-emerald-400/40 hover:text-emerald-400 transition-colors font-mono select-none">
              Show Overview
            </span>
          </div>
        </div>

        {/* Console */}
        <div
          onClick={!expand ? () => setExpand() : undefined}
          className={`h-[400px] rounded-xl flex-shrink-0 transition-all duration-500 ease-in-out ${expand ? "w-[650px]" : "w-12 cursor-pointer hover:border-emerald-500/30"}`}
        >
          {/* Collapsed label — only shown when slim, lives here so it's never clipped by Container */}
          {!expand && (
            <div className="w-full h-full flex items-center justify-center glass-card rounded-xl border border-white/10 hover:bg-emerald-500/5 transition-colors duration-300">
              <span className="[writing-mode:vertical-lr] text-[10px] tracking-widest uppercase text-emerald-400/40 hover:text-emerald-400 transition-colors duration-300 font-mono select-none">
                Click to Expand Terminal
              </span>
            </div>
          )}
          {expand && <Container expand={expand} setExpand={setExpand} />}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative z-10 w-full max-w-[420px] h-[80vh]">
        {/* Card — slides left out */}
        <div
          className={`absolute inset-0 rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${expand ? "-translate-x-6 opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
            }`}
        >
          <FontPart />
        </div>

        {/* Console — slides in from right */}
        <div
          className={`absolute inset-0 rounded-xl transition-all duration-500 ease-in-out ${expand ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-6 opacity-0 pointer-events-none"
            }`}
        >
          <Container expand={expand} setExpand={setExpand} />
        </div>
      </div>
    </div>
  );
}
