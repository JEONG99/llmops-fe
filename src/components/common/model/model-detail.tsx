import { useNavigate } from "@tanstack/react-router";

import StepGraph from "@/components/model-managing/step-graph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { MODEL_LIST } from "@/lib/const";

const ModelDetail = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const model = MODEL_LIST.find((model) => model.id === selectedId);

  const navigate = useNavigate();

  const copyModelAndRedirect = () => {
    if (!model) return;
    navigate({ to: "/prompt-making", state: { model } });
  };

  if (!model) return null;
  return (
    <div className="pt-8 px-10 pb-5 h-full w-full rounded-[10px] bg-[#FAFBFE] border border-blue-border">
      <div className="flex justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{model.name}</span>
            <button className="hover:opacity-80">
              <img src="/icon/pencil-icon.svg" alt="" className="size-6" />
            </button>
          </div>
          <div className="text-black/70">{model.created_at}</div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={copyModelAndRedirect}
            className="flex items-center justify-center gap-2 w-[165px] h-12 rounded-[10px] bg-blue-light hover:bg-blue-light/70"
          >
            <img
              src="/icon/circle-arrow-right-icon.svg"
              alt=""
              className="size-6"
            />
            <span>프롬프트 만들기</span>
          </button>
          <button
            onClick={() => setSelectedId(null)}
            className="hover:opacity-80"
          >
            <img src="/icon/cancel-icon.svg" alt="" className="size-8" />
          </button>
        </div>
      </div>
      <div className="mt-9 space-y-4">
        <div className="pt-[25px] pb-[30px] px-[54px] rounded-[10px] bg-white border border-[#EDF1FE]">
          <h4 className="text-center text-lg">Hyperpartameters</h4>
          <div className="mt-[35px] flex">
            <div className="flex-1 flex items-center justify-start gap-5">
              <span className="text-sm">학습데이터</span>
              <span>{model.learning_data}</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-5">
              <span className="text-sm">검증데이터</span>
              <span>{model.verification_data}</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-5">
              <span className="text-sm">파인튜닝 방법</span>
              <span>{model.tuning_method}</span>
            </div>
            <div className="flex-1" />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <div className="mt-5 flex">
                <div className="flex-1 flex items-center justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">Batches size</span>
                  <span>{model.batch_size}</span>
                </div>
                <div className="flex-1 flex items-center  justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">
                    Learning rate multiplier
                  </span>
                  <span>{model.learning_rate}</span>
                </div>
                <div className="flex-1 flex items-center justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">
                    number of epochs
                  </span>
                  <span>{model.epochs}</span>
                </div>
                <div className="flex-1 flex items-center justify-end">
                  <CustomAccordionTrigger
                    color="rgba(0,0,0,0.7)"
                    className="text-black/70 text-sm w-20"
                  >
                    고급 옵션
                  </CustomAccordionTrigger>
                </div>
              </div>
              <AccordionContent className="text-base">
                <div className="mt-5 flex">
                  <div className="flex-1 flex items-center justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Beta1</span>
                    <span>{model.beta1}</span>
                  </div>
                  <div className="flex-1 flex items-center  justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Beta2</span>
                    <span>{model.beta2}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Epsilon</span>
                    <span>{model.epsilon}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Weight Decay</span>
                    <span>{model.weight_decay}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex gap-4">
          <StepGraph
            title="Learning_rate"
            data={[
              { x: 0, y: 10.0e-6 },
              { x: 2500, y: 6.0e-6 },
              { x: 5000, y: 2.0e-6 },
            ]}
          />
          <StepGraph
            title="Loss"
            data={[
              { x: 0, y: 10.0e-6 },
              { x: 500, y: 8.0e-6 },
              { x: 1000, y: 6.0e-6 },
              { x: 1500, y: 5.0e-6 },
              { x: 2000, y: 4.0e-6 },
              { x: 2500, y: 3.5e-6 },
              { x: 3000, y: 3.0e-6 },
              { x: 3500, y: 2.7e-6 },
              { x: 4000, y: 3.0e-6 },
              { x: 4500, y: 3.3e-6 },
              { x: 5000, y: 3.5e-6 },
            ]}
          />
        </div>
        <div className="pt-5 pb-[34px] rounded-[10px] bg-white border border-[#EDF1FE]">
          <h4 className="text-center text-lg">Evaluation Metric</h4>
          <div className="mt-7 flex">
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>BLEU</span>
              <span>{model.bleu}</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-1</span>
              <span>{model.rouge_1}</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-2</span>
              <span>{model.rouge_2}</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-L</span>
              <span>{model.rouge_l}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
