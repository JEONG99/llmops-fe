import { useNavigate } from "@tanstack/react-router";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";

const LearningNoticeModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isModalOpen = isOpen && type === "learningNotice";

  const navigate = useNavigate();

  const closeAndRedirect = () => {
    onClose();
    navigate({ to: "/" });
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
            학습 진행중
          </DialogTitle>
          <DialogDescription className="hidden">학습 진행중</DialogDescription>
        </DialogHeader>
        <p className="text-center">
          학습이 완료되면 리스트에서 확인이 가능합니다.
        </p>
        <button
          onClick={closeAndRedirect}
          className="flex items-center justify-center w-[360px] h-12 rounded-[10px] bg-blue hover:bg-blue/90"
        >
          리스트로 이동
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default LearningNoticeModal;
