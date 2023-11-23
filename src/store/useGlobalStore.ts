import { create } from "zustand";
import { logger } from "./logger";
import { WindowState } from "@/enums/windowState";
import { Command, commands } from "@/lib/commands";

interface GlobalState {
  windowState: WindowState;
  commands: Command[];
  history: Command[];
}

interface GlobalStore extends GlobalState {
  handleWindow: (window: WindowState) => void;
  handleCommand: (command: Command) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  windowState: WindowState.DEFAULT,
  commands: commands,
  history: [commands[0]],
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
        }));
      },
    }),
    "Zustand triggered =>"
  )
);

export default useGlobalStore;
