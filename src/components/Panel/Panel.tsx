import { useRef } from "react";
import Host from "./Host";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

const Panel = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => focusRef.current?.focus()}
      className={`relative w-full h-full p-2 ${firaCode.className}`}
    >
      <Host ref={focusRef} />
    </div>
  );
};

export default Panel;
