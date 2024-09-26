import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ServerItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center pl-6 h-[60px] border-b border-blue/20">
      <div className="flex justify-start items-center w-[350px]">
        <span>inference_server_0</span>
      </div>
      <div className="flex justify-center items-center w-[120px]">
        <span className="text-blue">0</span>
      </div>
      <div className="flex justify-center items-center w-[220px]">
        <span className="text-sm">sample_model_01</span>
      </div>
      <div className="flex justify-center items-center w-[130px]">
        <span className="text-sm">기록지 생성</span>
      </div>
      <div className="flex justify-center items-center flex-1">
        <Checkbox className="size-5 border-blue data-[state=checked]:bg-blue" />
      </div>
    </div>
  );
};

export default ServerItem;
