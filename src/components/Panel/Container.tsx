import React from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import Panel from "./Panel";

interface IContainer {
  expand: boolean;
  setExpand: () => void;
}

const Container = ({ expand, setExpand }: IContainer) => {
  return (
    <div className="animated-border !border rounded-xl w-full h-full">
      <LuArrowBigRightDash
        onClick={() => setExpand()}
        size="30px"
        className={`translate-y-48 translate-x-1 transition-all duration-1000 cursor-pointer text-green-500 ${
          expand ? "rotate-180 translate-y-[6px]" : ""
        }`}
      />
      {expand && <Panel />}
    </div>
  );
};

export default Container;
