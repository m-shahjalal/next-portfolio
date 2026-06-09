import { create, type StateCreator } from "zustand";
import { logger } from "./logger";
import { WindowState } from "@/enums/windowState";
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

const storeCreator: StateCreator<GlobalStore> = (set, get) => ({
  ...initialState,

  handleWindow: (window) => set({ windowState: window }),

  handleCommand: (command) =>
    set((state) => ({
      currentHistory: [...state.currentHistory, command],
      typing: "",
    })),

  handleAskCommand: (command) => {
    set((state) => ({
      currentHistory: [
        ...state.currentHistory,
        { ...command, isLoading: true, aiReply: undefined },
      ],
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

        // Transition from loading spinner to streaming text
        set((state) => ({
          currentHistory: state.currentHistory.map((c) =>
            c.id === command.id ? { ...c, isLoading: false, aiReply: "" } : c
          ),
        }));

        // Iterative loop — avoids deep recursive call stack on long streams
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            accumulated += decoder.decode(value, { stream: true });
            set((state) => ({
              currentHistory: state.currentHistory.map((c) =>
                c.id === command.id ? { ...c, aiReply: accumulated } : c
              ),
            }));
          }
        } catch {
          get().updateCommandReply(
            command.id as number,
            accumulated || "Stream interrupted.",
            !accumulated
          );
        }
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
          ? {
            ...c,
            isLoading: false,
            aiReply: reply,
            type: error ? ("error" as any) : c.type,
          }
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
});

const useGlobalStore = create<GlobalStore>()(
  process.env.NODE_ENV === "development"
    ? logger<GlobalStore>(storeCreator, "Zustand =>")
    : storeCreator
);

export default useGlobalStore;
