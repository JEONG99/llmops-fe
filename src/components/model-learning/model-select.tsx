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
    <div>
      <h4 className="mb-3 text-lg font-hailsnow">모델 선정</h4>
      <Select>
        <CustormSelecTrigger>
          <SelectValue placeholder="모델을 선택해 주세요..." />
        </CustormSelecTrigger>
        <SelectContent className="rounded-[10px] bg-[#FCFDFF] border-blue/20">
          {baseModels.map((model) => (
            <SelectItem
              key={model}
              value={model}
              className="h-[50px] rounded-[10px] focus:bg-blue-light/50"
            >
              {model}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelSelect;
