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
