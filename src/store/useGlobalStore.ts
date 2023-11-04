import { create } from "zustand";
import { logger } from "./logger";
import { WindowState } from "@/enums/windowState";

interface GlobalState {
  windowState: WindowState;
}

interface GlobalStore extends GlobalState {
  handleWindow: (window: WindowState) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  windowState: WindowState.DEFAULT,
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
    }),
    "Zustand triggered =>"
  )
);

export default useGlobalStore;
