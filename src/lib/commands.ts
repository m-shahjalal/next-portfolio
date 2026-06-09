import { InputList, OutputType } from "@/enums/outputType";

export interface Command {
  id?: number;
  input: InputList;
  output: (value?: any) => string;
  type: OutputType;
  trigger?: string;
  inputValue?: string;
  aiReply?: string;
  isLoading?: boolean;
}

export const defaultText = "";

// These bypass AI — terminal builtins that don't need a network call
export const BYPASS_COMMANDS = new Set<InputList>([
  InputList.clear,
  InputList.exit,
  InputList.pwd,
  InputList.echo,
  InputList.history,
]);

export const commands: Command[] = [
  // ── Terminal builtins (never go to AI) ──────────────────────────────────
  {
    input: InputList.echo,
    output: (value: any) => value,
    type: OutputType.INFO,
  },
  {
    input: InputList.pwd,
    output: () => "/home/m-shahjalal",
    type: OutputType.INFO,
  },
  {
    input: InputList.history,
    output: (value) => value,
    type: OutputType.INFO,
  },
  {
    input: InputList.exit,
    output: () => "Closing console...",
    type: OutputType.WORN,
  },
  // ── AI catch-all (everything else routes here) ───────────────────────────
  {
    input: InputList.ask,
    output: (value: any) => value ?? "",
    type: OutputType.AI,
  },
  // ── notFound kept for echo/pwd edge cases only ───────────────────────────
  {
    input: InputList.notFound,
    output: () => `Command not found. Type "help" for available commands.`,
    type: OutputType.ERROR,
  },
  {
    input: InputList.help,
    output: () => {
      const cmds = [
        ["help", "Show this help"],
        ["pwd", "Current directory"],
        ["history", "Command history"],
        ["echo <text>", "Print text"],
        ["clear", "Clear terminal"],
        ["exit", "Close console"],
        ["<anything else>", "Ask AI about Shahjalal"],
      ];
      return (
        "Available commands:\n\n" +
        cmds.map(([cmd, desc]) => `  ${cmd.padEnd(18)}${desc}`).join("\n") +
        "\n\nTip: just type naturally — \"what projects has he built?\""
      );
    },
    type: OutputType.HELP,
  },
];
