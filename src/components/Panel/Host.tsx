import { InputList } from "@/enums/outputType";
import { commands, defaultText } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";
import { uuid } from "@/utils/uniqueId";
import { Fira_Code } from "next/font/google";
import {
  FormEvent,
  KeyboardEvent,
  LegacyRef,
  forwardRef,
  useEffect,
} from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  const toggleTerminal = useGlobalStore((state) => state.toggleTerminal);

  const handleTrigger = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = value.toLowerCase().trim();
    if (!input) return;
    if (input === InputList.clear) return clearHistory();

    const target = commands.find((item) => {
      return input.startsWith("echo")
        ? item.input === InputList.echo
        : item.input === input;
    });

    if (target) {
      target.id = uuid();
      target.inputValue = value;
      if (target.input === InputList.exit) {
        toggleTerminal();
        return clearHistory();
      }
      return handleCommand({ ...target });
    }

    const notFound = commands.find((item) => item.input === InputList.notFound);
    if (notFound) {
      notFound.id = uuid();
      notFound.inputValue = value;
      handleCommand({ ...notFound });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === defaultText) setValue("");
  };

  return (
    <div className={`text-yellow-400 flex p-1 ${firaCode.className}`}>
      <p
        className="flex justify-center items-center"
        style={{ fontFamily: "Fira Code, monospace" }}
      >
        @m-shahjalal <FaLongArrowAltRight size="20px" />
      </p>
      <form onSubmit={handleTrigger}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={ref}
          type="text"
          name="command"
          aria-autocomplete="none"
          autoComplete="off"
          className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full -translate-y-[2px]"
        />
      </form>
    </div>
  );
});

export default Host;
