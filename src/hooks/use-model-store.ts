import { create } from "zustand";

import { Model } from "@/types";
import { MODEL_LIST } from "@/lib/const";

interface IModelStore {
  models: Model[];
  addModel: (model: Model) => void;
}

export const useModelStore = create<IModelStore>((set) => ({
  models: MODEL_LIST,
  addModel: (model) =>
    set((state) => ({ ...state, models: [...state.models, model] })),
}));
