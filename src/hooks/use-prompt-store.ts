import { create } from "zustand";

import { PROMPT_LIST } from "@/lib/const";
import { Prompt } from "@/types";

interface IPromptStore {
  prompts: Prompt[];
  addPrompt: (prompt: Prompt) => void;
  updatePrompt: (prompt: Prompt) => void;
}

export const usePromptStore = create<IPromptStore>((set) => ({
  prompts: PROMPT_LIST,
  addPrompt: (prompt) =>
    set((state) => ({ ...state, prompts: [...state.prompts, prompt] })),
  updatePrompt: (prompt) =>
    set((state) => {
      const index = state.prompts.findIndex((item) => item.id === prompt.id);

      if (index !== -1) {
        return {
          ...state,
          prompts: [
            ...state.prompts.slice(0, index),
            prompt,
            ...state.prompts.slice(index + 1),
          ],
        };
      }

      return { ...state, prompts: state.prompts };
    }),
}));
