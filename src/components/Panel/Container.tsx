import React from "react";
import Panel from "./Panel";

interface IContainer {
  expand: boolean;
  setExpand: () => void;
}

const Container = ({ expand, setExpand }: IContainer) => {
  console.log('expand', expand)
  return (
    <div className="relative w-full h-full glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500">
      {/* Collapsed State (Slim Strip) */}
      <div
        onClick={!expand ? () => setExpand() : undefined}
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${!expand
          ? "opacity-100 cursor-pointer hover:bg-emerald-500/5"
          : "opacity-0 hidden md:block pointer-events-none"
          }`}
      >
        <span className={`[writing-mode:vertical-lr] text-[10px] tracking-widest uppercase text-emerald-400/40 hover:text-emerald-400 transition-colors duration-300 font-mono select-none ${expand && 'hidden'}`}>
          Click to Expand Console
        </span>
      </div>

      {/* Expanded State (Full Terminal) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${expand ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"
          }`}
      >
        <Panel onCollapse={setExpand} />
      </div>
    </div>
  );
};

export default Container;
