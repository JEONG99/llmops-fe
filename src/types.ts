type ModelStatus = "progress" | "done" | "failed";

export interface Model {
  name: string;
  base_model: string;
  status: ModelStatus;
  tags: string;
  created_at: string;
  description: string;
}
