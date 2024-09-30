import {
  CustormSelecTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { baseModels } from "@/types";

interface ModelSelectProps {
  value?: string;
  onChange?: (...event: any[]) => void;
  disabled?: boolean;
}

const ModelSelect = ({ value, onChange, disabled }: ModelSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <CustormSelecTrigger className="disabled:opacity-50 disabled:cursor-not-allowed">
        <SelectValue
          placeholder="모델을 선택해 주세요..."
          className="text-[#4f4f4f]"
        />
      </CustormSelecTrigger>
      <SelectContent className="rounded-[10px] bg-[#FCFDFF] border-blue/20">
        {baseModels.map((model) => (
          <SelectItem
            key={model}
            value={model}
            className="h-[50px] rounded-[10px] text-base focus:bg-[#F1F4FF]/50"
          >
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ModelSelect;
