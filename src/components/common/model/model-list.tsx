import ModelItem from "@/components/common/model/model-item";
import { cn } from "@/lib/utils";
import { Model } from "@/types";

const ModelList = ({
  models,
  setSelectedId,
  className,
}: {
  models: Model[];
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  className?: string;
}) => {
  return (
    <ul className={cn("space-y-1.5 h-fit pb-4", className)}>
      {models.map((model) => (
        <ModelItem
          key={model.id}
          onClick={() => setSelectedId(model.id)}
          model={model}
        />
      ))}
    </ul>
  );
};

export default ModelList;
