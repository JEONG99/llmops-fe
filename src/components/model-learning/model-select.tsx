import {
  CustormSelecTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { baseModels } from "@/types";

const ModelSelect = () => {
  return (
    <Select>
      <CustormSelecTrigger>
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
            className="h-[50px] rounded-[10px] text-base focus:bg-blue-light/50"
          >
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ModelSelect;
