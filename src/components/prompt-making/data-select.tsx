import {
  CustormSelecTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const DataSelect = () => {
  return (
    <Select>
      <CustormSelecTrigger>
        <SelectValue placeholder="데이터를 선택해 주세요..." />
      </CustormSelecTrigger>
      <SelectContent className="rounded-[10px] bg-[#FCFDFF] border-blue/20">
        {["data1", "data2", "data3"].map((data) => (
          <SelectItem
            key={data}
            value={data}
            className="h-[50px] rounded-[10px] focus:bg-blue-light/50"
          >
            {data}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DataSelect;
