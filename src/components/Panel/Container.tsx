"use client";
import React, { useEffect, useState } from "react";
import Panel from "./Panel";

interface IContainer {
  expand: boolean;
  setExpand: () => void;
}

const Container = ({ expand, setExpand }: IContainer) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isExpanded = mounted ? expand : false;

  return (
    <div className="relative w-full h-full glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Terminal — only visible when expanded */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${isExpanded ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"
          }`}
      >
        <Panel onCollapse={setExpand} />
      </div>
    </div>
  );
};

export default Container;
