import { create } from "zustand";
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
  isExpand: true,
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
          currentHistory: [...state.currentHistory, command],
          typing: "",
        }));
      },
      handleInput: (str) => {
        const prevText = str.slice(0, -1);
        if (prevText === defaultText)
          return set({ typing: str.charAt(str.length - 1) });
        set({ typing: str });
      },
      clearHistory: () =>
        set((state) => {
          return {
            history: [...state.history, ...state.currentHistory],
            currentHistory: [],
            typing: "",
          };
        }),
      clearInput: () => set({ typing: "" }),
      toggleTerminal: () => set((state) => ({ isExpand: !state.isExpand })),
    }),
    "Zustand triggered =>"
  )
);

export default useGlobalStore;
