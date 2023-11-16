"use client";
import { WindowState } from "@/enums/windowState";
import useGlobalStore from "@/store/useGlobalStore";
import { CgMaximizeAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import Host from "./Host";

const Panel = () => {
  const { handleWindow } = useGlobalStore();

  return (
    <div className="box border relative overflow-hidden">
      <div className="absolute flex top-4 z-20 left-5 gap-3">
        <RxCross1
          color="white"
          className="bg-red-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.MINIMIZED)}
        />
        <TbArrowsDiagonalMinimize2
          color="white"
          className="bg-green-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.DEFAULT)}
        />
        <CgMaximizeAlt
          color="white"
          className="bg-yellow-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.MAXIMIZED)}
        />
      </div>
      <div className="relative z-10 w-full h-full mt-16 p-2">
        <Host />
      </div>
    </div>
  );
};

export default Panel;
