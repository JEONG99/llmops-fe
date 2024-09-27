import { useState } from "react";

import { cn } from "@/lib/utils";
import { Model, ModelStatus } from "@/types";

interface ModelListHeaderProps {
  className?: string;
  setModelData: React.Dispatch<React.SetStateAction<Model[]>>;
}

type OrderType = "asc" | "desc";
type StatusOrderType = ModelStatus;

const ModelListHeader = ({ className, setModelData }: ModelListHeaderProps) => {
  const [orderByName, setOrderByName] = useState<OrderType>("desc");
  const [orderByModel, setOrderByModel] = useState<OrderType>("desc");
  const [orderByStatus, setOrderByStatus] = useState<StatusOrderType>("failed");
  const [orderByDate, setOrderByDate] = useState<OrderType>("desc");

  const onClickOrderByName = () => {
    setModelData((prev) =>
      [...prev].sort((a, b) =>
        orderByName === "desc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    );
    setOrderByName(orderByName === "desc" ? "asc" : "desc");
  };

  const onClickOrderByModel = () => {
    setModelData((prev) =>
      [...prev].sort((a, b) =>
        orderByModel === "desc"
          ? a.base_model.localeCompare(b.base_model)
          : b.base_model.localeCompare(a.base_model)
      )
    );
    setOrderByModel(orderByModel === "desc" ? "asc" : "desc");
  };

  const sortByStatus = (
    items: Model[],
    orderByStatus: "failed" | "done"
  ): Model[] => {
    const priority = (status: StatusOrderType) => {
      const priorityMap: Record<StatusOrderType, number> = {
        failed: orderByStatus === "failed" ? 1 : 3,
        progress: 2,
        done: orderByStatus === "failed" ? 3 : 1,
      };
      return priorityMap[status];
    };

    return items.sort((a, b) => priority(a.status) - priority(b.status));
  };

  const onClickOrderByStatus = () => {
    setModelData((prev) =>
      orderByStatus === "done"
        ? sortByStatus([...prev], "failed")
        : sortByStatus([...prev], "done")
    );
    setOrderByStatus(orderByStatus === "done" ? "failed" : "done");
  };

  const onClickOrderByDate = () => {
    setModelData((prev) =>
      [...prev].sort(
        (a, b) =>
          a.created_at.localeCompare(b.created_at) *
          (orderByDate === "asc" ? 1 : -1)
      )
    );
    setOrderByDate(orderByDate === "asc" ? "desc" : "asc");
  };

  return (
    <div className={cn("flex h-14 bg-white", className)}>
      <div
        onClick={onClickOrderByName}
        className="flex justify-center items-center gap-2 w-[240px] cursor-pointer select-none"
      >
        <span className="text-gray-70">모델명</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
      <div
        onClick={onClickOrderByModel}
        className="flex justify-center items-center gap-2 w-[190px] cursor-pointer select-none"
      >
        <span className="text-gray-70">베이스 모델</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
      <div
        onClick={onClickOrderByStatus}
        className="flex justify-center items-center gap-2 w-[160px] cursor-pointer select-none"
      >
        <span className="text-gray-70">상태</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
      <div className="flex justify-center items-center w-[160px]">
        <span className="text-gray-70">태그</span>
      </div>
      <div
        onClick={onClickOrderByDate}
        className="flex justify-center items-center gap-2 w-[160px] cursor-pointer select-none"
      >
        <span className="text-gray-70">생성 일자</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
      <div className="flex justify-center items-center w-[190px]">
        <span className="text-gray-70">메모</span>
      </div>
    </div>
  );
};

export default ModelListHeader;
