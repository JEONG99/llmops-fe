import { useNavigate } from "@tanstack/react-router";

import PromptItem from "@/components/prompt-gallery/prompt-item";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";
import { usePromptStore } from "@/hooks/use-prompt-store";
import { Prompt } from "@/types";

const LoadPromptModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isModalOpen = isOpen && type === "loadPrompt";

  const navigate = useNavigate();

  const { prompts } = usePromptStore();

  const copyPromptAndRefresh = (prompt: Prompt) => {
    navigate({ to: "/prompt-making", state: { prompt: prompt } });
    onClose();
  };

  if (!isModalOpen) return null;
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="gap-8 py-[30px] max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-medium">
            프롬프트 불러오기
          </DialogTitle>
          <DialogDescription className="hidden">
            프롬프트 불러오기
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[610px] px-2 overflow-y-auto">
          <div className="grid grid-cols-3 gap-5">
            {prompts.map((prompt) => (
              <PromptItem
                key={prompt.id}
                prompt={prompt}
                variant="loadModal"
                onClick={() => copyPromptAndRefresh(prompt)}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadPromptModal;
