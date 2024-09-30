import LearningNoticeModal from "@/components/modal/learning-notice-modal";
import PromptSavingModal from "@/components/modal/prompt-saving-modal";
import TemperatureModal from "@/components/modal/temperature-modal";

const ModalProvider = () => {
  return (
    <>
      <TemperatureModal />
      <LearningNoticeModal />
      <PromptSavingModal />
    </>
  );
};

export default ModalProvider;
