import { Fira_Code } from "next/font/google";
import { FormEvent, LegacyRef, forwardRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Command, commands, defaultText } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";
import { InputList } from "@/enums/outputType";

const firaCode = Fira_Code({
  weight: "400",
  preload: false,
});

const Host = forwardRef(function Host(
  _,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const value = useGlobalStore((state) => state.typing);
  const setValue = useGlobalStore((state) => state.handleInput);
  const handleCommand = useGlobalStore((state) => state.handleCommand);
  const clearHistory = useGlobalStore((state) => state.clearHistory);
  const clearInput = useGlobalStore((state) => state.clearInput);

  const handleTrigger = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = value.toLowerCase().trim();
    if (input === InputList.clear) return clearHistory();
    if (input === defaultText) return clearInput();

    if (input.startsWith("echo")) {
      const target = commands.find((item) => item.input === InputList.echo);
      if (target) {
        target.inputValue = value;
        return handleCommand(target);
      }
    }

    const target = commands.find((item) => item.input === input);
    if (target) {
      target.inputValue = value;
      return handleCommand(target);
    }

    const notFound = commands.find((item) => item.input === InputList.notFound);
    if (notFound) {
      notFound.inputValue = value;
      handleCommand(notFound);
    }
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
          aria-autocomplete="none"
          className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full -translate-y-[2px]"
        />
      </form>
    </div>
  );
});

export default Host;
