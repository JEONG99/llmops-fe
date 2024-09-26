import StepGraph from "@/components/model-managing/step-graph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/accordion";

const ModelDetail = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className="pt-8 px-10 pb-5 h-full w-full rounded-[10px] bg-[#FAFBFE] border border-blue-border">
      <div className="flex justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">sample-model_01</span>
            <button className="hover:opacity-80">
              <img src="/icon/pencil-icon.svg" alt="" className="size-6" />
            </button>
          </div>
          <div className="text-black/70">2024-03-23 10:39:33</div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
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
              <span>data 01</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-5">
              <span className="text-sm">검증데이터</span>
              <span>data 01</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-5">
              <span className="text-sm">파인튜닝 방법</span>
              <span>풀파인튜닝</span>
            </div>
            <div className="flex-1" />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <div className="mt-5 flex">
                <div className="flex-1 flex items-center justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">Batches size</span>
                  <span>8</span>
                </div>
                <div className="flex-1 flex items-center  justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">
                    Learning rate multiplier
                  </span>
                  <span>0.001</span>
                </div>
                <div className="flex-1 flex items-center justify-start gap-5">
                  <span className="text-sm text-[#6E88D9]">
                    number of epochs
                  </span>
                  <span>3</span>
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
                    <span>0.9</span>
                  </div>
                  <div className="flex-1 flex items-center  justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Beta2</span>
                    <span>0.999</span>
                  </div>
                  <div className="flex-1 flex items-center justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Epsilon</span>
                    <span>0.000001</span>
                  </div>
                  <div className="flex-1 flex items-center justify-start gap-5">
                    <span className="text-sm text-[#6E88D9]">Weight Decay</span>
                    <span>0.0</span>
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
              <span>0.1</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-1</span>
              <span>0.5</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-2</span>
              <span>0.5</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5">
              <span>ROUGE-2</span>
              <span>0.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
