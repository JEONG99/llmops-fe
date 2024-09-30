import {
  CustormSelecTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useModelStore } from "@/hooks/use-model-store";

interface ModelSelectProps {
  value?: string;
  onChange?: (...event: any[]) => void;
  disabled?: boolean;
}

const ModelSelect = ({ value, onChange, disabled }: ModelSelectProps) => {
  const { models } = useModelStore();

  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <CustormSelecTrigger className="disabled:opacity-50 disabled:cursor-not-allowed">
        <SelectValue
          placeholder="모델을 선택해 주세요..."
          className="text-[#4f4f4f]"
        />
      </CustormSelecTrigger>
      <SelectContent className="rounded-[10px] bg-[#FCFDFF] border-blue/20">
        {models.map((model) => (
          <SelectItem
            key={model.id}
            value={model.id + ""}
            className="h-[50px] rounded-[10px] text-base focus:bg-[#F1F4FF]/50"
          >
            {model.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ModelSelect;
