import { cn } from "@/lib/utils";
import { PlaygroundHistory } from "@/types";

interface HistoryItemProps {
  checked?: boolean;
  history: PlaygroundHistory;
  onClickHistory: () => void;
}

const HistoryItem = ({
  checked = false,
  history,
  onClickHistory,
}: HistoryItemProps) => {
  return (
    <div
      onClick={onClickHistory}
      className={cn(
        "p-4 rounded-[10px] border bg-[#F1F4FF] cursor-pointer",
        checked ? "border-blue" : "border-[#F1F4FF]"
      )}
    >
      <h4 className="mb-1 truncate">{history.input}</h4>
      <span className="text-xs text-black/70">{history.created_at}</span>
    </div>
  );
};

export default HistoryItem;
