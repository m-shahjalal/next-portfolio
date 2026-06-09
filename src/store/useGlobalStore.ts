import { create } from "zustand";
import { logger } from "./logger";
import { WindowState } from "@/enums/windowState";
import { InputList } from "@/enums/outputType";
import { Command, commands, defaultText } from "@/lib/commands";

interface GlobalState {
  windowState: WindowState;
  commands: Command[];
  history: Command[];
  currentHistory: Command[];
  typing: string;
  isExpand: boolean;
}

interface GlobalStore extends GlobalState {
  handleWindow: (window: WindowState) => void;
  handleCommand: (command: Command) => void;
  handleAskCommand: (command: Command) => void;
  updateCommandReply: (id: number, reply: string, error?: boolean) => void;
  handleInput: (str: string) => void;
  clearHistory: () => void;
  clearInput: () => void;
  toggleTerminal: () => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  windowState: WindowState.DEFAULT,
  commands: commands,
  history: [],
  currentHistory: [],
  typing: defaultText,
  isExpand: false,
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set, get) => ({
      ...initialState,
      handleWindow: (window) => {
        set({ windowState: window });
      },
      handleCommand: (command) => {
        set((state) => ({
          currentHistory: [...state.currentHistory, command],
          typing: "",
        }));
      },
      handleAskCommand: (command) => {
        // add loading entry immediately
        const loadingCommand: Command = {
          ...command,
          isLoading: true,
          aiReply: undefined,
        };
        set((state) => ({
          currentHistory: [...state.currentHistory, loadingCommand],
          typing: "",
        }));

        const question = command.inputValue?.trim() ?? "";

        fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: question }),
        })
          .then(async (res) => {
            if (!res.ok || !res.body) {
              const data = await res.json().catch(() => ({}));
              get().updateCommandReply(
                command.id as number,
                data.error ?? "AI service error. Try again.",
                true
              );
              return;
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let accumulated = "";

            // mark as no longer loading, start streaming
            set((state) => ({
              currentHistory: state.currentHistory.map((c) =>
                c.id === command.id ? { ...c, isLoading: false, aiReply: "" } : c
              ),
            }));

            const pump = async (): Promise<void> => {
              const { done, value } = await reader.read();
              if (done) return;

              // toTextStreamResponse sends raw text chunks — decode and append directly
              accumulated += decoder.decode(value, { stream: true });
              set((state) => ({
                currentHistory: state.currentHistory.map((c) =>
                  c.id === command.id ? { ...c, aiReply: accumulated } : c
                ),
              }));

              return pump();
            };

            await pump().catch(() => {
              get().updateCommandReply(
                command.id as number,
                accumulated || "Stream interrupted.",
                !accumulated
              );
            });
          })
          .catch(() => {
            get().updateCommandReply(
              command.id as number,
              "Network error. Check connection.",
              true
            );
          });
      },
      updateCommandReply: (id, reply, error = false) => {
        set((state) => ({
          currentHistory: state.currentHistory.map((c) =>
            c.id === id
              ? { ...c, isLoading: false, aiReply: reply, type: error ? "error" as any : c.type }
              : c
          ),
        }));
      },
      clearHistory: () =>
        set((state) => ({
          history: [...state.history, ...state.currentHistory],
          currentHistory: [],
          typing: "",
        })),
      clearInput: () => set({ typing: "" }),
      handleInput: (str) => set({ typing: str }),
      toggleTerminal: () => set((state) => ({ isExpand: !state.isExpand })),
    }),
    "Zustand triggered =>"
  )
);

export default useGlobalStore;
