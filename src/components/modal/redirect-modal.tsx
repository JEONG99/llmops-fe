import { useNavigate } from "@tanstack/react-router";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";

const RedirectModal = () => {
  const { isOpen, type, onClose, data } = useModalStore();
  const isModalOpen = isOpen && type === "redirect";

  const navigate = useNavigate();

  const closeAndRedirect = () => {
    onClose();
    if (data?.redirectData?.path) {
      navigate({ to: data.redirectData.path });
    }
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
            {data?.redirectData?.title}
          </DialogTitle>
          <DialogDescription className="hidden">
            {data?.redirectData?.title}
          </DialogDescription>
        </DialogHeader>
        <p className="text-center">{data?.redirectData?.description}</p>
        <button
          onClick={closeAndRedirect}
          className="flex items-center justify-center w-[360px] h-12 rounded-[10px] bg-blue hover:bg-blue/90"
        >
          {data?.redirectData?.buttonText}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default RedirectModal;
