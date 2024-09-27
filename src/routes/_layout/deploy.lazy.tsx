import { createLazyFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import PageLayout from "@/components/layout/page-layout";
import SearchInput from "@/components/common/search-input";
import { cn, searchModels } from "@/lib/utils";
import { MODEL_LIST } from "@/lib/const";
import ModelList from "@/components/common/model/model-list";
import ModelDetail from "@/components/common/model/model-detail";
import ModelListHeader from "@/components/common/model/model-list-header";
import ServerItem from "@/components/deploy/server-item";
import { Model } from "@/types";
import CustomSimpleBar from "@/components/common/simplebar";

export const Route = createLazyFileRoute("/_layout/deploy")({
  component: DeployPage,
});

function DeployPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword") || "";

  const [modelData, setModelData] = useState<Model[]>(MODEL_LIST);
  const models = useMemo(
    () => searchModels(modelData, keyword),
    [modelData, keyword]
  );

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <PageLayout title="배포하기">
      <div className="mt-4 px-7">
        <div className="flex justify-between">
          <SearchInput />
        </div>
        <div className="relative mt-4">
          <ModelListHeader setModelData={setModelData} />
          <div className="relative">
            <div
              className={cn(
                "absolute w-full pb-4",
                selectedId === null ? "hidden" : "block"
              )}
            >
              <ModelDetail
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            </div>
            <CustomSimpleBar className="max-h-[390px]">
              <div
                className={cn(
                  "h-full",
                  selectedId === null ? "block" : "hidden"
                )}
              >
                <ModelList
                  models={models}
                  setSelectedId={setSelectedId}
                  className="pb-0"
                />
              </div>
            </CustomSimpleBar>
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
