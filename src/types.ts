export type ModelStatus = "progress" | "done" | "failed";

export interface Model {
  id: number;
  name: string;
  base_model: BaseModel;
  status: ModelStatus;
  tags: string;
  created_at: string;
  description: string;
  learning_rate: number;
  epochs: number;
  batch_size: number;
  beta1: number;
  beta2: number;
  epsilon: number;
  weight_decay: number;
  bleu: number;
  rouge_1: number;
  rouge_2: number;
  rouge_l: number;
  learning_data: string;
  verification_data: string;
  tuning_method: TuningMethod;
  amsgrad: boolean;
}

export interface Prompt {
  id: number;
  title: string;
  description: string;
  created_at: string;
  base_model: Model;
  instruction: string;
  data: string;
  temperature: number;
  samples: { input: string; output: string }[];
  result: string;
  checked: boolean;
}

export interface Server {
  id: number;
  title: string;
  gpu_id: number;
  deploy_model: Model;
  service: string;
}

export const tuningMethods = ["LoRA", "QLoRA", "풀파인튜닝"] as const;
export type TuningMethod = (typeof tuningMethods)[number];

export const baseModels = ["llama-3", "llama-3.1", "gpt-3.5"] as const;
export type BaseModel = (typeof baseModels)[number];
