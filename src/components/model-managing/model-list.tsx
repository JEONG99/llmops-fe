import StatusIcon from "@/components/model-managing/status-icon";
import TagIcon from "@/components/model-managing/tag-icon";
import { Model } from "@/types";

const ModelList = ({ models }: { models: Model[] }) => {
  return (
    <ul className="space-y-1.5 h-fit">
      {models.map((model) => (
        <li
          key={model.name}
          className="flex items-center h-[60px] bg-blue-light-box border border-blue-border rounded-[10px] cursor-pointer hover:bg-blue-light/70"
        >
          <div className="flex justify-between px-6 w-[240px]">
            <span className="text-gray-70">{model.name}</span>
            <button className="hover:opacity-50">
              <img src="/icon/copy-icon.svg" alt="" className="size-5" />
            </button>
          </div>
          <div className="flex justify-center px-6 w-[190px]">
            <span className="text-sm">{model.base_model}</span>
          </div>
          <div className="flex justify-center px-6 w-[160px]">
            <StatusIcon status={model.status} />
          </div>
          <div className="flex justify-center px-6 w-[160px] gap-2">
            {(model.tags.split(",") as ("내과" | "마취과")[]).map((tag) => {
              return <TagIcon key={tag} tag={tag} />;
            })}
          </div>
          <div className="flex justify-center px-6 w-[160px]">
            <span className="text-sm text-gray-60">{model.created_at}</span>
          </div>
          <div className="flex justify-center px-6 w-[190px]">
            <span className="text-gray-70 text-sm truncate">
              {model.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ModelList;
