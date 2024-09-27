import LearningNoticeModal from "@/components/modal/learning-notice-modal";
import TemperatureModal from "@/components/modal/temperature-modal";

const ModalProvider = () => {
  return (
    <>
      <TemperatureModal />
      <LearningNoticeModal />
    </>
  );
};

export default ModalProvider;
