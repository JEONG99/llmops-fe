import { useNavigate } from "@tanstack/react-router";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";

const PromptSavingModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isModalOpen = isOpen && type === "promptSaving";

  const navigate = useNavigate();

  const closeAndRedirect = () => {
    onClose();
    navigate({ to: "/prompt-gallery" });
  };

  if (!isModalOpen) return null;
  return (
    <Dialog open={isModalOpen}>
      <DialogContent
        showClose={false}
        className="gap-8 py-[30px] px-[50px] w-fit"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-medium">
            프롬프트 저장 완료
          </DialogTitle>
          <DialogDescription className="hidden">
            프롬프트 저장 완료
          </DialogDescription>
        </DialogHeader>
        <p className="text-center">
          저장한 프롬프트는 갤러리에서 확인 가능합니다.
        </p>
        <button
          onClick={closeAndRedirect}
          className="flex items-center justify-center w-[360px] h-12 rounded-[10px] bg-blue hover:bg-blue/90"
        >
          갤러리로 이동
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default PromptSavingModal;
