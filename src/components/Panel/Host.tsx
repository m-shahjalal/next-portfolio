import { Fira_Code } from "next/font/google";
import { FormEvent, LegacyRef, forwardRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Command, commands } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";

const firaCode = Fira_Code({
  weight: "400",
  preload: false,
});

const Host = forwardRef(function Host(
  _,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const [value, setValue] = useState("");
  const handleCommand = useGlobalStore((state) => state.handleCommand);

  const handleTrigger = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = commands.find((item) => item.input === value);
    if (target) target.inputValue = value;

    const notFound = commands[commands.length - 1];
    notFound.inputValue = value;
    handleCommand(target || notFound);
  };

  return (
    <div className={`text-yellow-400 flex ${firaCode.className}`}>
      <p
        className="flex justify-center items-center"
        style={{ fontFamily: "Fira Code, monospace" }}
      >
        root <FaLongArrowAltRight size="20px" />
      </p>
      <form onSubmit={handleTrigger}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={ref}
          type="text"
          name="command"
          className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full"
        />
      </form>
    </div>
  );
});

export default Host;
