import { InputList } from "@/enums/outputType";
import { BYPASS_COMMANDS, commands, defaultText } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";
import { uuid } from "@/utils/uniqueId";
import { Fira_Code } from "next/font/google";
import { FormEvent, KeyboardEvent, LegacyRef, forwardRef } from "react";

const firaCode = Fira_Code({ weight: "400", preload: false });

const Host = forwardRef(function Host(
  _,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const value = useGlobalStore((state) => state.typing);
  const setValue = useGlobalStore((state) => state.handleInput);
  const handleCommand = useGlobalStore((state) => state.handleCommand);
  const handleAskCommand = useGlobalStore((state) => state.handleAskCommand);
  const clearHistory = useGlobalStore((state) => state.clearHistory);
  const toggleTerminal = useGlobalStore((state) => state.toggleTerminal);

  const handleTrigger = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const raw = value.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();

    // ── Terminal builtins ──────────────────────────────────────────────────
    if (lower === InputList.clear) return clearHistory();

    if (lower === InputList.exit) {
      toggleTerminal();
      return clearHistory();
    }

    if (lower === InputList.pwd || lower === InputList.history || lower === InputList.help) {
      const target = commands.find((c) => c.input === (lower as InputList));
      if (target) {
        const cmd = { ...target, id: uuid(), inputValue: raw };
        // history output needs the store history — handled in History.tsx
        return handleCommand(cmd);
      }
    }

    if (lower.startsWith("echo")) {
      const target = commands.find((c) => c.input === InputList.echo);
      if (target) {
        return handleCommand({ ...target, id: uuid(), inputValue: raw });
      }
    }

    // ── Everything else → AI ───────────────────────────────────────────────
    const askCmd = commands.find((c) => c.input === InputList.ask);
    if (askCmd) {
      const trimmed = raw.slice(0, 300); // hard cap before sending
      handleAskCommand({ ...askCmd, id: uuid(), inputValue: trimmed });
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
          onChange={(e) => setValue(e.target.value.slice(0, 300))}
          onKeyDown={handleKeyDown}
          ref={ref}
          type="text"
          name="command"
          aria-autocomplete="none"
          autoComplete="off"
          className="bg-transparent outline-none text-slate-200 w-full font-mono caret-emerald-400"
          placeholder="ask me anything about Shahjalal..."
        />
      </form>
    </div>
  );
});

export default Host;
