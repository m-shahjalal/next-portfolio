import { useEffect, useRef } from "react";
import Host from "./Host";
import { Fira_Code } from "next/font/google";
import useGlobalStore from "@/store/useGlobalStore";
import { History } from "./History";

const firaCode = Fira_Code({ subsets: ["latin"] });

const Panel = () => {
  const history = useGlobalStore((state) => state.currentHistory);
  const focusRef = useRef<HTMLInputElement>(null);
  useEffect(() => focusRef.current?.focus(), []);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "start",
      });
    }
  }, [history, focusRef]);

  return (
    <div
      onClick={() => focusRef.current?.focus()}
      className={`relative w-full overflow-y-auto h-[calc(100%-36px)] p-2 ${firaCode.className}`}
    >
      {history.map((item) => (
        <div className="flex" key={item.id}>
          <History command={item} />
        </div>
      ))}
      <Host ref={focusRef} />
    </div>
  );
};

export default Panel;
