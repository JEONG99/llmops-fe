import { createLazyFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import PageLayout from "@/components/layout/page-layout";
import SearchInput from "@/components/common/search-input";
import { searchModels } from "@/lib/utils";
import ModelList from "@/components/common/model/model-list";
import ModelListHeader from "@/components/common/model/model-list-header";
import ServerItem from "@/components/deploy/server-item";
import { Model } from "@/types";
import CustomSimpleBar from "@/components/common/simplebar";
import { useModelStore } from "@/hooks/use-model-store";
import { useServerStore } from "@/hooks/use-server-store";
import { useModalStore } from "@/hooks/use-modal-store";

export const Route = createLazyFileRoute("/_layout/deploy")({
  component: DeployPage,
});

function DeployPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword") || "";

  const { onOpen } = useModalStore();
  const { servers, deployModel } = useServerStore();
  const { models: initialModels } = useModelStore();
  const [modelData, setModelData] = useState<Model[]>(initialModels);
  const models = useMemo(
    () => searchModels(modelData, keyword),
    [modelData, keyword]
  );

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedServers, setSelectedServers] = useState<number[]>([]);

  const toggleServer = (id: number) => {
    setSelectedServers((selectedServer) => {
      if (selectedServer.includes(id)) {
        return selectedServer.filter((server) => server !== id);
      }
      return [...selectedServer, id];
    });
  };

  const deployModelToServers = () => {
    if (!selectedId || selectedServers.length === 0) return;
    for (const id of selectedServers) {
      const model = models.find((model) => model.id === selectedId);
      if (!model) continue;
      deployModel(id, model);
    }
    onOpen("redirect", {
      redirectData: {
        title: "모델 배포 완료",
        description: "선택한 모델이 서버에 배포되었어요.",
        buttonText: "확인",
      },
    });
    setSelectedId(null);
    setSelectedServers([]);
  };

  useEffect(() => {
    if (models.findIndex((model) => model.id === selectedId) === -1) {
      setSelectedId(null);
    }
  }, [models, selectedId]);

  return (
    <PageLayout title="배포하기">
      <div className="mt-4 px-7">
        <div className="flex justify-between">
          <SearchInput />
        </div>
        <div className="relative mt-4">
          <ModelListHeader setModelData={setModelData} />
          <CustomSimpleBar className="max-h-[390px]">
            <div className="h-full">
              <ModelList
                models={models}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                className="pb-0"
              />
            </div>
          </CustomSimpleBar>
        </div>
        <div className="my-3.5 flex items-center justify-between h-12">
          <h4 className="text-lg font-bold">서버 현황</h4>
          <button
            onClick={deployModelToServers}
            className="flex items-center h-full px-11 rounded-[10px] bg-blue hover:bg-blue/90"
          >
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
            {servers.map((server) => (
              <ServerItem
                key={server.id}
                server={server}
                toggleServer={toggleServer}
                checked={selectedServers.includes(server.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
