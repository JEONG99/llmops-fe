import { cn } from "@/lib/utils";
import { tuningMethods } from "@/types";

const ChoiceTuningMethod = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (...event: any[]) => void;
}) => {
  return (
    <div>
      <h4 className="mb-3 text-lg ">파인튜닝 방법 선택</h4>
      <div className="flex items-center gap-2">
        {tuningMethods.map((method) => (
          <button
            key={method}
            type="button"
            onClick={() => onChange(method)}
            className={cn(
              "flex items-center justify-center flex-1 h-[50px] rounded-[10px] border",
              value === method
                ? "bg-[#F1F4FF] border-blue"
                : "bg-blue-light-box border-blue-border hover:bg-blue-light-bg/70"
            )}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChoiceTuningMethod;
