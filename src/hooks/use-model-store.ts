import { create } from "zustand";

import { Model } from "@/types";
import { MODEL_LIST } from "@/lib/const";

interface IModelStore {
  models: Model[];
  addModel: (model: Model) => void;
  updateModel: (model: Model) => void;
}

export const useModelStore = create<IModelStore>((set) => ({
  models: MODEL_LIST,
  addModel: (model) =>
    set((state) => ({ ...state, models: [...state.models, model] })),
  updateModel: (model) =>
    set((state) => {
      const index = state.models.findIndex((item) => item.id === model.id);

      if (index !== -1) {
        return {
          ...state,
          models: [
            ...state.models.slice(0, index),
            model,
            ...state.models.slice(index + 1),
          ],
        };
      }

      return { ...state, models: state.models };
    }),
}));
