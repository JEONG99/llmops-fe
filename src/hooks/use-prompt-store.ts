import { create } from "zustand";

import { PROMPT_LIST } from "@/lib/const";
import { Prompt } from "@/types";

interface IPromptStore {
  prompts: Prompt[];
  addPrompt: (prompt: Prompt) => void;
}

export const usePromptStore = create<IPromptStore>((set) => ({
  prompts: PROMPT_LIST,
  addPrompt: (prompt) =>
    set((state) => ({ ...state, prompts: [...state.prompts, prompt] })),
}));
