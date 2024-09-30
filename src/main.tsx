import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import "@/styles/index.css";
import "simplebar-react/dist/simplebar.min.css";

import { routeTree } from "./routeTree.gen";

import { Model, Prompt } from "@/types";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface HistoryState {
    prompt?: Prompt;
    model?: Model;
    isEdit?: boolean;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
