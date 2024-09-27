import ModelItem from "@/components/common/model/model-item";
import { Model } from "@/types";

const ModelList = ({
  models,
  setSelectedId,
}: {
  models: Model[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <ul className="space-y-1.5 h-fit">
      {models.map((model) => (
        <ModelItem
          key={model.name}
          onClick={() => setSelectedId(model.name)}
          model={model}
        />
      ))}
    </ul>
  );
};

export default ModelList;
