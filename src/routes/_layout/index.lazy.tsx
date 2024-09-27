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
import { cn, searchModels } from "@/lib/utils";
import ModelList from "@/components/model-list";
import ModelCompare from "@/components/model-managing/model-compare";
import ModelDetail from "@/components/model-managing/model-detail";
import PageLayout from "@/components/layout/page-layout";
import { Model } from "@/types";
import ModelListHeader from "@/components/model-list-header";

export const Route = createLazyFileRoute("/_layout/")({
  component: ModelManagingPage,
});

function ModelManagingPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword") || "";

  const [modelData, setModelData] = useState<Model[]>(MODEL_LIST);
  const models = useMemo(
    () => searchModels(modelData, keyword),
    [modelData, keyword]
  );

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (carouselIndex === 0) {
      prevRef.current?.click();
    } else {
      nextRef.current?.click();
    }
  }, [carouselIndex]);

  return (
    <PageLayout title="모델 관리" className="pb-0">
      <div className="mt-4">
        <div className="flex justify-between px-7">
          <SearchInput />
          <button
            onClick={() => setCarouselIndex(1)}
            className={cn(
              "flex justify-center items-center gap-4 h-12 min-w-[146px] px-6 rounded-[10px] bg-blue hover:bg-blue/90",
              carouselIndex === 0 ? "flex" : "hidden"
            )}
          >
            <img src="/icon/compare-icon.svg" alt="" className="size-6" />
            <span>비교하기</span>
          </button>
          <button
            onClick={() => setCarouselIndex(0)}
            className={cn(
              "flex justify-center items-center gap-4 h-12 min-w-[146px] px-6 rounded-[10px] bg-blue hover:bg-blue/90",
              carouselIndex === 1 ? "flex" : "hidden"
            )}
          >
            <img src="/icon/list-icon.svg" alt="" className="size-6" />
            <span>리스트</span>
          </button>
        </div>
        <div className="relative mt-4 px-7">
          <ModelListHeader
            className="sticky top-0 z-10"
            setModelData={setModelData}
          />
          <Carousel
            opts={{
              watchDrag: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="h-[calc(100vh-204px)]">
              <CarouselItem className="h-full">
                <div className="relative h-full pb-4">
                  <div
                    className={cn(
                      "relative h-full overflow-auto",
                      selectedId === null ? "hidden" : "block"
                    )}
                  >
                    <div className="absolute w-full">
                      <ModelDetail
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "h-full overflow-auto",
                      selectedId === null ? "block" : "hidden"
                    )}
                  >
                    <ModelList models={models} setSelectedId={setSelectedId} />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full">
                <ModelCompare models={models} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious ref={prevRef} className="hidden" />
            <CarouselNext ref={nextRef} className="hidden" />
          </Carousel>
        </div>
      </div>
    </PageLayout>
  );
}
