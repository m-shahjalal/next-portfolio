import { InputList } from "@/enums/outputType";
import { Command } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";
import { Fira_Code } from "next/font/google";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const firaCode = Fira_Code({
  weight: "400",
  preload: false,
});

export const History = ({ command }: { command: Command }) => {
  const history = useGlobalStore((state) => state.history);
  let output = command.inputValue?.replace(/echo /gi, "");
  if (command.input === InputList.history) {
    output = history.map((item) => item.inputValue).join("\n");
  }
  return (
    <div>
      <div className={`text-yellow-400 flex ${firaCode.className}`}>
        <p
          className="flex justify-center items-center"
          style={{ fontFamily: "Fira Code, monospace" }}
        >
          root <FaLongArrowAltRight size="20px" />
        </p>
        <p className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full">
          {command.inputValue}
        </p>
      </div>
      <div className="whitespace-pre-wrap">{command.output(output)}</div>
      {command.input === InputList.notFound && (
        <div className="text-red-500">
          --Type <b>&ldquo;help&rdquo;</b> to get instruction.
        </div>
      )}
    </div>
  );
};
