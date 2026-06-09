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
    <div className={`flex items-center gap-2 p-1 text-sm font-mono ${firaCode.className}`}>
      <p className="flex items-center gap-1 text-emerald-400 select-none">
        <span>m-shahjalal</span>
        <span className="text-cyan-400 font-bold">❯</span>
      </p>
      <form onSubmit={handleTrigger} className="flex-1">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={ref}
          type="text"
          name="command"
          aria-autocomplete="none"
          autoComplete="off"
          className="bg-transparent outline-none text-slate-200 w-full font-mono caret-emerald-400"
          placeholder="type 'help'..."
        />
      </form>
    </div>
  );
});

export default Host;
