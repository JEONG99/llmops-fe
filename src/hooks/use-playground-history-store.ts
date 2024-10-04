import { create } from "zustand";

import { HISTORY_LIST } from "@/lib/const";
import { PlaygroundHistory } from "@/types";

interface IUsePlaygroundHistoryStore {
  histories: PlaygroundHistory[];
  addHistory: (history: PlaygroundHistory) => void;
}

export const usePlaygroundHistoryStore = create<IUsePlaygroundHistoryStore>(
  (set) => ({
    histories: HISTORY_LIST,
    addHistory: (history) =>
      set((state) => ({ ...state, histories: [...state.histories, history] })),
  })
);
