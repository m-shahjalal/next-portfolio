import { useEffect, useRef, memo } from "react";
import Host from "./Host";
import { firaCode } from "@/lib/fonts";
import useGlobalStore from "@/store/useGlobalStore";
import { History } from "./History";
import { LuArrowBigLeftDash } from "react-icons/lu";

const MemoHistory = memo(History);

interface PanelProps {
  onCollapse: () => void;
}

const Panel = ({ onCollapse }: PanelProps) => {
  const history = useGlobalStore((state) => state.currentHistory);
  const focusRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => focusRef.current?.focus(), []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    focusRef.current?.focus();
  }, [history]);

  return (
    <div
      onClick={() => focusRef.current?.focus()}
      className={`relative w-full h-full flex flex-col ${firaCode.className}`}
    >
      {/* OS-style title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 select-none shrink-0">
        {/* Window dots */}
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Title */}
        <span className="text-[11px] tracking-wide text-emerald-400/70 font-mono">
          bash — shahjalal.sh ~ ❯
        </span>

        {/* Collapse button */}
        <button
          onClick={(e) => { e.stopPropagation(); onCollapse(); }}
          className="p-1 rounded-md hover:bg-white/5 hover:text-emerald-400 text-slate-600 transition-all duration-200 cursor-pointer"
          aria-label="Collapse terminal"
        >
          <LuArrowBigLeftDash size={16} />
        </button>
      </div>

      {/* Terminal body */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        {history.map((item) => (
          <div className="flex flex-col text-sm" key={item.id}>
            <MemoHistory command={item} />
          </div>
        ))}
        <Host ref={focusRef} />
      </div>
    </div>
  );
};

export default Panel;
