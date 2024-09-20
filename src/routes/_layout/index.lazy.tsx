import { createLazyFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

import SearchInput from "@/components/search-input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MODEL_LIST } from "@/lib/const";
import { Model } from "@/types";
import { cn } from "@/lib/utils";
import ModelList from "@/components/model-managing/model-list";
import ModelCompare from "@/components/model-managing/model-compare";

export const Route = createLazyFileRoute("/_layout/")({
  component: ModelManagingPage,
});

function searchModels(models: Model[], searchTerm: string): Model[] {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return models.filter(
    (model) =>
      model.name.toLowerCase().includes(lowercasedSearchTerm) ||
      model.tags.toLowerCase().includes(lowercasedSearchTerm)
  );
}

function ModelManagingPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword") || "";

  const models = useMemo(() => searchModels(MODEL_LIST, keyword), [keyword]);

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
    <div>
      <div className="flex items-center px-7 h-[68px]">
        <h4 className="text-lg font-hailsnow">모델 관리</h4>
      </div>
      <div>
        <div className="flex justify-between px-7">
          <SearchInput />
          <button
            onClick={() => setCarouselIndex(1)}
            className={cn(
              "flex justify-center items-center gap-4 h-12 w-[143px] px-6 rounded-[10px] bg-blue hover:bg-blue/90",
              carouselIndex === 0 ? "flex" : "hidden"
            )}
          >
            <img src="/icon/compare-icon.svg" alt="" className="size-6" />
            <span>비교하기</span>
          </button>
          <button
            onClick={() => setCarouselIndex(0)}
            className={cn(
              "flex justify-center items-center gap-4 h-12 w-[143px] px-6 rounded-[10px] bg-blue hover:bg-blue/90",
              carouselIndex === 1 ? "flex" : "hidden"
            )}
          >
            <img src="/icon/list-icon.svg" alt="" className="size-6" />
            <span>리스트</span>
          </button>
        </div>
        <div className="relative mt-4 px-7">
          <div className="sticky top-0 z-10 flex h-14 bg-white">
            <div className="flex justify-center items-center w-[240px]">
              <span className="text-gray-70 font-normal">모델명</span>
            </div>
            <div className="flex justify-center items-center gap-2 w-[190px] cursor-pointer">
              <span className="text-gray-70 font-normal">베이스 모델</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70 font-normal">상태</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70 font-normal">태그</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70 font-normal">생성 일자</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center w-[190px]">
              <span className="text-gray-70 font-normal">메모</span>
            </div>
          </div>
          <Carousel
            opts={{
              watchDrag: false,
              dragFree: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="h-[calc(100vh-188px)] overflow-auto">
                <ModelList models={models} />
              </CarouselItem>
              <CarouselItem>
                <ModelCompare models={models} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious ref={prevRef} className="hidden" />
            <CarouselNext ref={nextRef} className="hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
