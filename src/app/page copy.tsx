"use client";
import BackPart from "@/components/Card/BackPart";
import FontPart from "@/components/Card/FontPart";
import Container from "@/components/Panel/Container";
import Panel from "@/components/Panel/Panel";
import useGlobalStore from "@/store/useGlobalStore";
import dynamic from "next/dynamic";
import { useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import Tilt from "react-parallax-tilt";
const ScrollingText = dynamic(
  () => import("@/components/BgText/ScrollingText"),
  { ssr: false }
);

export default function Home() {
  const [isFont, setFont] = useState(false);
  const expand = useGlobalStore((state) => state.isExpand);
  const setExpand = useGlobalStore((state) => state.toggleTerminal);

  return (
    <div className="w-full flex justify-center items-center h-screen gap-10 relative">
      <ScrollingText />
      <div
        className={`relative top-0 bottom-0 w-full flex justify-center items-center transition-all duration-1000 ${
          expand ? "-translate-x-52" : ""
        }`}
      >
        <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} perspective={500}>
          <div className="rounded-lg flex justify-center items-center card-shadow border border-gray-500 backdrop-blur-xl aspect-video h-[400px]">
            <span
              onClick={() => setFont(!isFont)}
              className="bottom-4 border p-1 rounded-full absolute left-4 aspect-square w-9 flex justify-center items-center cursor-pointer z-50"
            >
              🚀
            </span>
            {/* {isFont ? <BackPart /> : <FontPart />} */}
          </div>
        </Tilt>
        <div
          className={`h-[400px] absolute left-[calc(50vw+365px)] rounded-lg transition-all ${
            expand ? "w-[400px]" : "w-10"
          }`}
        >
          <div className="rounded-lg bg-opacity-50 card-shadow backdrop-blur-xl w-full h-full overflow-auto">
            <Container expand={expand} setExpand={setExpand} />
          </div>
        </div>
      </div>
    </div>
  );
}
