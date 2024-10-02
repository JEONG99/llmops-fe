import { useNavigate } from "@tanstack/react-router";

import StatusIcon from "@/components/common/model/status-icon";
import TagIcon from "@/components/common/model/tag-icon";
import { Model } from "@/types";
import ActionTooltip from "@/components/common/action-tootip";
import { cn } from "@/lib/utils";

interface ModelItemProps {
  onClick: () => void;
  model: Model;
  className?: string;
}

const ModelItem = ({ onClick, model, className }: ModelItemProps) => {
  const navigate = useNavigate();

  const copyModelAndRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate({ to: "/model-learning", state: { model } });
  };

  return (
    <li
      onClick={onClick}
      className={cn(
        "flex items-center h-[60px] bg-blue-light-box border border-blue-border rounded-[10px] cursor-pointer hover:bg-blue-light-bg/70",
        className
      )}
    >
      <div className="flex justify-between px-6 w-[240px]">
        <span className="text-gray-70">{model.name}</span>
        <ActionTooltip side="right" title="모델 학습하기">
          <button onClick={copyModelAndRedirect} className="hover:opacity-50">
            <img src="/icon/copy-icon.svg" alt="" className="size-5" />
          </button>
        </ActionTooltip>
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
  );
};

export default ModelItem;
