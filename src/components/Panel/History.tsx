import { Fira_Code } from "next/font/google";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const firaCode = Fira_Code({
  weight: "400",
  preload: false,
});

export const History = ({ command }: { command: any }) => {
  console.log("history", command?.[0]?.output());
  return (
    <div>
      {/* <div className={`text-yellow-400 flex ${firaCode.className}`}>
        <p
          className="flex justify-center items-center"
          style={{ fontFamily: "Fira Code, monospace" }}
        >
          root <FaLongArrowAltRight size="20px" />
        </p>
        <form>
          <input
            value={command.value}
            readOnly
            type="text"
            name="command"
            className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full"
          />
        </form>
      </div>
      <div>{command.output()}</div> */}
      <pre>{JSON.stringify(command, null, 4)}</pre>
    </div>
  );
};
