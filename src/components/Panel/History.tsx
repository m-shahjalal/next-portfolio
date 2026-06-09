import { InputList, OutputType } from "@/enums/outputType";
import { Command } from "@/lib/commands";
import useGlobalStore from "@/store/useGlobalStore";
import { firaCode } from "@/lib/fonts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const History = ({ command }: { command: Command }) => {
  const history = useGlobalStore((state) => state.history);
  let output = command.inputValue?.replace(/echo /gi, "");
  if (command.input === InputList.history) {
    output = history.map((item) => item.inputValue).join("\n");
  }

  const isAi = command.input === InputList.ask;

  return (
    <div className={`my-1.5 font-mono text-sm ${firaCode.className}`}>
      {/* Input line */}
      <div className="flex items-center gap-2 text-emerald-400">
        <p className="flex items-center gap-1 select-none">
          <span>m-shahjalal</span>
          <span className="text-cyan-400 font-bold">❯</span>
        </p>
        <p className="text-slate-300">{command.inputValue}</p>
      </div>

      {/* Output */}
      <div className="mt-1 pl-4 border-l border-emerald-500/10">
        {isAi ? (
          command.isLoading ? (
            <span className="text-yellow-400/70 animate-pulse">
              ✦ thinking...
            </span>
          ) : command.type === OutputType.ERROR || (command.type as string) === "error" ? (
            <span className="text-red-400">{command.aiReply}</span>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p className="text-violet-300 mb-1 last:mb-0 leading-relaxed">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="text-emerald-400 font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="text-slate-300 italic">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="text-violet-300 space-y-0">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="text-violet-300 space-y-0 list-decimal list-inside">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="flex gap-2 leading-snug">
                    <span className="text-emerald-500 select-none shrink-0">-</span>
                    <span>{children}</span>
                  </li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="text-yellow-300 bg-white/5 px-1 rounded text-xs">
                    {children}
                  </code>
                ),
              }}
            >
              {command.aiReply ?? ""}
            </ReactMarkdown>
          )
        ) : (
          <span className="text-slate-400">{command.output(output)}</span>
        )}
      </div>

      {command.input === InputList.notFound && (
        <div className="text-red-500 pl-4">
          --Type <b>&ldquo;help&rdquo;</b> to get instruction.
        </div>
      )}
    </div>
  );
};
