import LoadPromptModal from "@/components/modal/load-prompt-modal";
import RedirectModal from "@/components/modal/redirect-modal";
import TemperatureModal from "@/components/modal/temperature-modal";

const ModalProvider = () => {
  return (
    <>
      <TemperatureModal />
      <LoadPromptModal />
      <RedirectModal />
    </>
  );
};

export default ModalProvider;
