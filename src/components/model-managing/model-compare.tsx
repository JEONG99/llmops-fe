import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Model } from "@/types";
import { cn } from "@/lib/utils";
import CompareChart from "@/components/model-managing/compare-chart";

const ModelCompare = ({ models }: { models: Model[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (carouselIndex === 0) {
      prevRef.current?.click();
    } else {
      nextRef.current?.click();
    }
  }, [carouselIndex]);

  return (
    <div className="flex">
      <div className="h-[calc(100vh-188px)] w-fit px-2 overflow-auto">
        <ul className="space-y-1.5 h-fit pb-2">
          {models.map((model, index) => (
            <li
              key={model.name}
              className={cn(
                "flex items-center px-6 w-[190px] h-[60px] rounded-[10px] border cursor-pointer hover:bg-blue-light/70 bg-blue-light-box",
                index <= 2 ? "border-blue" : "border-blue-border"
              )}
            >
              <span className="text-gray-70">{model.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 flex-1 pl-3 pb-4 w-[880px]">
        <div className="w-full px-6 py-5 rounded-[10px] border border-[#EDF1FE] bg-[#F8F9FB]">
          <div className="flex mb-4">
            <div className="w-1/5 text-center font-bold">Name</div>
            <div className="w-1/5 text-center font-bold">Base Model</div>
            <div className="w-1/5 text-center font-bold">Learning Rate</div>
            <div className="w-1/5 text-center font-bold">#Epoch</div>
            <div className="w-1/5 text-center font-bold">Batch size</div>
          </div>
          {models.slice(0, 3).map((model, index) => (
            <div className="flex py-4">
              <div className="flex gap-5 items-center w-1/5 text-center">
                <div
                  className={cn(
                    "size-4 rounded-[2px] border border-[#6E88D9]",
                    index === 0
                      ? "bg-green-40"
                      : index === 1
                        ? "bg-red-40"
                        : "bg-[#6E88D9]"
                  )}
                />
                <span>{model.name}</span>
              </div>
              <div className="w-1/5 text-center">{model.base_model}</div>
              <div className="w-1/5 text-center">{model.learning_rate}</div>
              <div className="w-1/5 text-center">{model.epochs}</div>
              <div className="w-1/5 text-center">{model.batch_size}</div>
            </div>
          ))}
        </div>
        <div className="w-full px-6 py-5 rounded-[10px] border border-[#EDF1FE] bg-[#F8F9FB]">
          <div className="flex justify-between mb-8">
            <div className="w-[127px]" />
            <div className="font-hailsnow text-lg">모델 별 정확도 비교</div>
            <div className="w-[127px]">
              <button
                onClick={() => setCarouselIndex(1)}
                className={cn(
                  "flex items-center gap-2.5 h-8 px-2.5 rounded-sm bg-[#F2FAFF] hover:bg-blue-light",
                  carouselIndex === 0 ? "flex" : "hidden"
                )}
              >
                <img src="/icon/chart-icon.svg" alt="" className="size-5" />
                <span className="text-sm text-[#637FD6]">그래프로 보기</span>
              </button>
              <button
                onClick={() => setCarouselIndex(0)}
                className={cn(
                  "flex items-center gap-2.5 h-8 px-2.5 rounded-sm bg-[#F2FAFF] hover:bg-blue-light",
                  carouselIndex === 1 ? "flex" : "hidden"
                )}
              >
                <img src="/icon/list-blue-icon.svg" alt="" className="size-5" />
                <span className="text-sm text-[#637FD6]">표로 보기</span>
              </button>
            </div>
          </div>
          <Carousel
            opts={{
              watchDrag: false,
              dragFree: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col justify-center mt-6">
                  <div className="flex mb-6">
                    <div className="w-1/5 text-center font-bold">Name</div>
                    <div className="w-1/5 text-center font-bold">BLEU</div>
                    <div className="w-1/5 text-center font-bold">ROUGE-1</div>
                    <div className="w-1/5 text-center font-bold">ROUGE-2</div>
                    <div className="w-1/5 text-center font-bold">ROUGE-L</div>
                  </div>
                  {models.slice(0, 3).map((model, index) => (
                    <div className="flex py-4">
                      <div className="flex gap-5 items-center w-1/5 text-center">
                        <div
                          className={cn(
                            "size-4 rounded-[2px] border border-[#6E88D9]",
                            index === 0
                              ? "bg-green-40"
                              : index === 1
                                ? "bg-red-40"
                                : "bg-[#6E88D9]"
                          )}
                        />
                        <span>{model.name}</span>
                      </div>
                      <div className="w-1/5 text-center">{model.bleu}</div>
                      <div className="w-1/5 text-center">{model.rouge_1}</div>
                      <div className="w-1/5 text-center">{model.rouge_2}</div>
                      <div className="w-1/5 text-center">{model.rouge_l}</div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <CompareChart models={models} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious ref={prevRef} className="hidden" />
            <CarouselNext ref={nextRef} className="hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ModelCompare;
