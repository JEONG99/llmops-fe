type ModelStatus = "progress" | "done" | "failed";

export interface Model {
  name: string;
  base_model: string;
  status: ModelStatus;
  tags: string;
  created_at: string;
  description: string;
  learning_rate: number;
  epochs: number;
  batch_size: number;
  bleu: number;
  rouge_1: number;
  rouge_2: number;
  rouge_l: number;
}

export const tuningMethods = ["LoRA", "QLoRA", "풀파인튜닝"] as const;
export type TuningMethod = (typeof tuningMethods)[number];

export const baseModels = ["llama3", "llama3.1", "gpt-3.5"] as const;
export type BaseModel = (typeof baseModels)[number];
