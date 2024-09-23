import {
  Accordion,
  AccordionContent,
  AccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/custom-slider";
import { CustomSwitch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/_layout/model-learning")({
  component: ModelLearningPage,
});

function ModelLearningPage() {
  const [amsgradChecked, setAmsgradChecked] = useState(false);

  return (
    <div className="pb-20">
      <div className="flex items-center px-7 h-[68px]">
        <h4 className="text-lg font-hailsnow">모델 학습</h4>
      </div>
      <div className="px-10">
        <div className="space-y-3 pt-6 pb-9">
          <div>
            <input
              placeholder="모델명을 입력해 주세요."
              className="px-6 w-full h-[60px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 focus:outline-none placeholder:text-black/60 text-lg"
            />
          </div>
          <div>
            <Textarea
              placeholder="모델에 대해 설명해 주세요."
              className="min-h-[74px] h-[74px] px-6 py-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 resize-none"
            />
          </div>
        </div>
        <form>
          <div className="flex gap-12">
            <div className="space-y-10 w-[470px]">
              <div>
                <h4 className="mb-3 text-lg font-hailsnow">모델 선정</h4>
                <div className="flex justify-between items-center h-[50px] px-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 cursor-pointer">
                  <span className="text-[#4f4f4f]">
                    모델을 선택해 주세요...
                  </span>
                  <img src="/icon/sort-icon.svg" alt="" className="size-6" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-hailsnow">학습 데이터 설정</h4>
                  <div className="flex items-center gap-7">
                    <div className="flex items-center gap-[10px] cursor-pointer">
                      <div className="flex items-center justify-center size-[22px] border border-black rounded-full"></div>
                      <span className="text-sm">데이터 업로드</span>
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer">
                      <div className="flex items-center justify-center size-[22px] border border-black rounded-full">
                        <div className="size-[14px] rounded-full bg-blue" />
                      </div>
                      <span className="text-sm">기존 파일 선택</span>
                    </div>
                  </div>
                </div>
                <div className="h-[146px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 overflow-y-auto">
                  <ul>
                    {Array(50)
                      .fill("data")
                      .map((value, index) => (
                        <li
                          key={index}
                          className="flex items-center h-[38px] px-6 border-b border-blue/20 last:border-none"
                        >
                          <div className="text-[#373737]">{`${value} ${index}`}</div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-hailsnow">검증 데이터</h4>
                  <div className="flex items-center gap-7">
                    <div className="flex items-center gap-[10px] cursor-pointer">
                      <div className="flex items-center justify-center size-[22px] border border-black rounded-full">
                        <div className="size-[14px] rounded-full bg-blue" />
                      </div>
                      <span className="text-sm">데이터 업로드</span>
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer">
                      <div className="flex items-center justify-center size-[22px] border border-black rounded-full"></div>
                      <span className="text-sm">기존 파일 선택</span>
                    </div>
                  </div>
                </div>
                <div className="h-[156px] rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <div className="flex flex-col justify-center items-center gap-2 h-full">
                    <img
                      src="/icon/folder-add-icon.svg"
                      alt=""
                      className="size-[58px]"
                    />
                    <h5 className="text-sm">드래그 앤 드롭으로 파일 업로드</h5>
                    <p className="text-black/50 text-sm">(파일 형식)</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-hailsnow">
                  파인튜닝 방법 선택
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center flex-1 h-[50px] rounded-[10px] bg-[#F1F4FF] border border-blue"
                  >
                    LoRA
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-1 h-[50px] rounded-[10px] bg-blue-light-box border border-blue-border hover:bg-blue-light/70"
                  >
                    QLoRA
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-1 h-[50px] rounded-[10px] bg-blue-light-box border border-blue-border hover:bg-blue-light/70"
                  >
                    풀파인튜닝
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[537px]">
              <h4 className="mb-5 text-lg font-hailsnow">세부 조정</h4>
              <div className="space-y-10">
                <div className="flex items-center">
                  <div className="w-36 text-[#454545] truncate">
                    Batches Size
                  </div>
                  <div className="ml-3 mr-5">
                    <input
                      value={0}
                      className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Slider
                      defaultValue={[0]}
                      max={10}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="absolute -bottom-8 flex justify-between w-full">
                      <span className="text-[#858585] text-xs">0</span>
                      <span className="text-[#858585] text-xs">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 text-[#454545] truncate">
                    Learning rate multiplier
                  </div>
                  <div className="ml-3 mr-5">
                    <input
                      value={0}
                      className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Slider
                      defaultValue={[0]}
                      max={10}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="absolute -bottom-8 flex justify-between w-full">
                      <span className="text-[#858585] text-xs">0</span>
                      <span className="text-[#858585] text-xs">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 text-[#454545] truncate">
                    Number Of Epoch
                  </div>
                  <div className="ml-3 mr-5">
                    <input
                      value={0}
                      className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Slider
                      defaultValue={[0]}
                      max={10}
                      step={1}
                      className="w-full"
                    />
                    <div className="absolute -bottom-8 flex justify-between w-full">
                      <span className="text-[#858585] text-xs">0</span>
                      <span className="text-[#858585] text-xs">10</span>
                    </div>
                  </div>
                </div>
              </div>
              <Accordion type="single" collapsible className="mt-9">
                <AccordionItem value="item-1" className="border-none">
                  <CustomAccordionTrigger>고급 옵션</CustomAccordionTrigger>
                  <AccordionContent className="py-4">
                    <div className="space-y-10">
                      <div className="flex items-center">
                        <div className="w-36 text-[#454545] text-base truncate">
                          Beta1
                        </div>
                        <div className="ml-3 mr-5">
                          <input
                            value={0}
                            className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                          />
                        </div>
                        <div className="relative flex-1">
                          <Slider
                            defaultValue={[0]}
                            max={1}
                            step={0.01}
                            className="w-full"
                          />
                          <div className="absolute -bottom-8 flex justify-between w-full">
                            <span className="text-[#858585] text-xs">0</span>
                            <span className="text-[#858585] text-xs">1</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-36 text-[#454545] text-base truncate">
                          Beta2
                        </div>
                        <div className="ml-3 mr-5">
                          <input
                            value={0}
                            className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                          />
                        </div>
                        <div className="relative flex-1">
                          <Slider
                            defaultValue={[0]}
                            max={1}
                            step={0.01}
                            className="w-full"
                          />
                          <div className="absolute -bottom-8 flex justify-between w-full">
                            <span className="text-[#858585] text-xs">0</span>
                            <span className="text-[#858585] text-xs">1</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-36 text-[#454545] text-base truncate">
                          Epsilon
                        </div>
                        <div className="ml-3 mr-5">
                          <input
                            value={0}
                            className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                          />
                        </div>
                        <div className="relative flex-1">
                          <Slider
                            defaultValue={[0]}
                            max={1}
                            step={0.01}
                            className="w-full"
                          />
                          <div className="absolute -bottom-8 flex justify-between w-full">
                            <span className="text-[#858585] text-xs">0</span>
                            <span className="text-[#858585] text-xs">1</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-36 text-[#454545] text-base truncate">
                          Weight Decay
                        </div>
                        <div className="ml-3 mr-5">
                          <input
                            value={0}
                            className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                          />
                        </div>
                        <div className="relative flex-1">
                          <Slider
                            defaultValue={[0]}
                            max={1}
                            step={0.01}
                            className="w-full"
                          />
                          <div className="absolute -bottom-8 flex justify-between w-full">
                            <span className="text-[#858585] text-xs">0</span>
                            <span className="text-[#858585] text-xs">1</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-36 text-[#454545] text-base truncate">
                          AMSGrad
                        </div>
                        <div className="ml-3 flex items-center space-x-2">
                          <CustomSwitch
                            id="ams-grad"
                            checked={amsgradChecked}
                            onCheckedChange={setAmsgradChecked}
                          />
                          <label
                            htmlFor="ams-grad"
                            className="text-[#454545] text-base"
                          >
                            {amsgradChecked ? "On" : "Off"}
                          </label>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex justify-end mt-[10px]">
                <button className="flex justify-center items-center h-12 w-[161px] px-6 rounded-[10px] bg-blue hover:bg-blue/90">
                  학습하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
