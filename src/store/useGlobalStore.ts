import { create } from "zustand";
import { logger } from "./logger";
import { WindowState } from "@/enums/windowState";
import { Command, commands, defaultText } from "@/lib/commands";

interface GlobalState {
  windowState: WindowState;
  commands: Command[];
  history: Command[];
  typing: string;
}

interface GlobalStore extends GlobalState {
  handleWindow: (window: WindowState) => void;
  handleCommand: (command: Command) => void;
  handleInput: (str: string) => void;
  clearHistory: () => void;
  clearInput: () => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  windowState: WindowState.DEFAULT,
  commands: commands,
  history: [],
  typing: defaultText,
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      handleWindow: (window) => {
        set({
          windowState: window,
        });
      },
      handleCommand: (command) => {
        set((state) => ({
          history: [...state.history, command],
          typing: "",
        }));
      },
      handleInput: (str) => {
        const prevText = str.slice(0, -1);
        if (prevText === defaultText)
          return set({ typing: str.charAt(str.length - 1) });
        set({ typing: str });
      },
      clearHistory: () => set({ history: [], typing: "" }),
      clearInput: () => set({ typing: "" }),
    }),
    "Zustand triggered =>"
  )
);

export default useGlobalStore;
