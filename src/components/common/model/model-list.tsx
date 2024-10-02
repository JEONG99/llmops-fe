import ModelItem from "@/components/common/model/model-item";
import { cn } from "@/lib/utils";
import { Model } from "@/types";

const ModelList = ({
  models,
  selectedId,
  setSelectedId,
  className,
}: {
  models: Model[];
  selectedId?: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  className?: string;
}) => {
  return (
    <ul className={cn("space-y-1.5 h-fit pb-4", className)}>
      {models.map((model) => (
        <ModelItem
          key={model.id}
          onClick={() =>
            setSelectedId((prev) => (prev === model.id ? null : model.id))
          }
          model={model}
          className={
            selectedId === model.id ? "bg-[#F1F4FF] hover:bg-[#F1F4FF]" : ""
          }
        />
      ))}
    </ul>
  );
};

export default ModelList;
