import { create } from "zustand";

type ModalType = "temperature" | "loadPrompt" | "redirect";

interface ModalData {
  redirectData?: {
    title: string;
    description: string;
    buttonText: string;
    path?: string;
  };
}

interface IModalStore {
  type: ModalType | null;
  data: ModalData | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: null,
  onOpen: (type, data) => set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, data: null, isOpen: false }),
}));
