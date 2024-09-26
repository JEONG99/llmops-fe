import { createLazyFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import PageLayout from "@/components/layout/page-layout";
import SearchInput from "@/components/search-input";
import { cn, searchModels } from "@/lib/utils";
import { MODEL_LIST } from "@/lib/const";
import ModelList from "@/components/model-managing/model-list";
import ModelDetail from "@/components/model-managing/model-detail";
import ServerItem from "@/components/deploy/server-item";

export const Route = createLazyFileRoute("/_layout/deploy")({
  component: DeployPage,
});

function DeployPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword") || "";

  const models = useMemo(() => searchModels(MODEL_LIST, keyword), [keyword]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <PageLayout title="배포하기">
      <div className="mt-4 px-7">
        <div className="flex justify-between">
          <SearchInput />
        </div>
        <div className="relative mt-4">
          <div className="flex h-14 bg-white">
            <div className="flex justify-center items-center w-[240px]">
              <span className="text-gray-70">모델명</span>
            </div>
            <div className="flex justify-center items-center gap-2 w-[190px] cursor-pointer">
              <span className="text-gray-70">베이스 모델</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70">상태</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70">태그</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center gap-2 w-[160px] cursor-pointer">
              <span className="text-gray-70">생성 일자</span>
              <img src="/icon/sort-icon.svg" alt="" className="size-6" />
            </div>
            <div className="flex justify-center items-center w-[190px]">
              <span className="text-gray-70">메모</span>
            </div>
          </div>
          <div className="relative">
            <div
              className={cn(
                "absolute w-full h-[786px] pb-5",
                selectedId === null ? "hidden" : "block"
              )}
            >
              <ModelDetail
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            </div>
            <div className="max-h-[390px] overflow-auto">
              <ModelList models={models} setSelectedId={setSelectedId} />
            </div>
          </div>
        </div>
        <div className="my-3.5 flex items-center justify-between h-12">
          <h4 className="text-lg font-bold">서버 현황</h4>
          <button className="flex items-center h-full px-11 rounded-[10px] bg-blue hover:bg-blue/90">
            배포하기
          </button>
        </div>
        <div>
          <div className="flex h-12 rounded-[30px] bg-[#FCFDFF] border border-[#E0E8FF]">
            <div className="flex justify-center items-center w-[370px]">
              <span className="text-gray-70">서버명</span>
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <span className="text-gray-70">GPU ID</span>
            </div>
            <div className="flex justify-center items-center w-[220px]">
              <span className="text-gray-70">배포 현황</span>
            </div>
            <div className="flex justify-center items-center w-[130px]">
              <span className="text-gray-70">서비스</span>
            </div>
            <div className="flex justify-center items-center flex-1">
              <span className="text-gray-70">선택</span>
            </div>
          </div>
          <div>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <ServerItem key={i} />
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
