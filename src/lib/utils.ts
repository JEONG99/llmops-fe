import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Model } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function searchModels(models: Model[], searchTerm: string): Model[] {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return models.filter(
    (model) =>
      model.name.toLowerCase().includes(lowercasedSearchTerm) ||
      model.tags.toLowerCase().includes(lowercasedSearchTerm)
  );
}

export function getFormatToday(): string {
  const specificDate = new Date();
  return specificDate.toISOString().split("T")[0];
}
