import { useRef } from "react";
import Host from "./Host";
import { Fira_Code } from "next/font/google";
import useGlobalStore from "@/store/useGlobalStore";
import { History } from "./History";

const firaCode = Fira_Code({ subsets: ["latin"] });

const Panel = () => {
  const history = useGlobalStore((state) => state.history);
  const focusRef = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => focusRef.current?.focus()}
      className={`relative w-full h-full p-2 ${firaCode.className}`}
    >
      {history.map((item, idx) => (
        <div className="flex" key={new Date().toString()}>
          <History command={item} />
        </div>
      ))}
      <Host ref={focusRef} />
    </div>
  );
};

export default Panel;
