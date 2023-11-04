"use client";
import React from "react";
import "./panel.css";
import { RxCross1 } from "react-icons/rx";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { CgMaximizeAlt } from "react-icons/cg";
import useGlobalStore from "@/store/useGlobalStore";
import { WindowState } from "@/enums/windowState";

const Panel = () => {
  const { handleWindow } = useGlobalStore();

  return (
    <div className="box border">
      <div className="absolute flex top-6 z-20 left-8 gap-3">
        <RxCross1
          size="1.4rem"
          color="white"
          className="bg-red-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.MINIMIZED)}
        />
        <TbArrowsDiagonalMinimize2
          size="1.4rem"
          color="white"
          className="bg-green-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.DEFAULT)}
        />
        <CgMaximizeAlt
          size="1.4rem"
          color="white"
          className="bg-yellow-500 rounded-full p-1 cursor-pointer"
          onClick={() => handleWindow(WindowState.MAXIMIZED)}
        />
      </div>
      <div className="relative z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor
        modi rem distinctio. Magnam, debitis ex. Sint repellendus debitis amet
        labore minus quisquam, aliquam mollitia maxime accusantium quae
        dignissimos accusamus.
      </div>
    </div>
  );
};

export default Panel;
