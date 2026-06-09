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
    <div className="my-1.5 font-mono text-sm">
      <div className="flex items-center gap-2 text-emerald-400">
        <p className="flex items-center gap-1 select-none">
          <span>m-shahjalal</span>
          <span className="text-cyan-400 font-bold">❯</span>
        </p>
        <p className="text-slate-300">
          {command.inputValue}
        </p>
      </div>
      <div className="whitespace-pre-wrap mt-1 text-slate-400 pl-4 border-l border-emerald-500/10">
        {command.output(output)}
      </div>
      {command.input === InputList.notFound && (
        <div className="text-red-500">
          --Type <b>&ldquo;help&rdquo;</b> to get instruction.
        </div>
      )}
    </div>
  );
};
