import { create } from "zustand";

import { SERVER_LIST } from "@/lib/const";
import { Model, Server } from "@/types";

interface IUseServerStore {
  servers: Server[];
  deployModel: (id: number, model: Model) => void;
}

export const useServerStore = create<IUseServerStore>((set) => ({
  servers: SERVER_LIST,
  deployModel: (id, model) =>
    set((state) => ({
      ...state,
      servers: state.servers.map((server) =>
        server.id === id ? { ...server, deploy_model: model } : server
      ),
    })),
}));
