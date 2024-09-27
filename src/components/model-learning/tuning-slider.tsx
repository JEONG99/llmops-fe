import { Slider } from "@/components/ui/custom-slider";

interface TuningSliderProps {
  value: number;
  onChange: (...event: any[]) => void;
  max: number;
  step: number;
}

const TuningSlider = ({ value, onChange, max, step }: TuningSliderProps) => {
  return (
    <div className="flex items-center w-full">
      <div className="ml-3 mr-5">
        <input
          value={value}
          onChange={onChange}
          className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-sm text-center focus:outline-none"
        />
      </div>
      <div className="relative flex-1">
        <Slider
          value={[value]}
          onValueChange={(value) => onChange(value[0])}
          max={max}
          step={step}
          className="w-full"
        />
        <div className="absolute -bottom-8 flex justify-between w-full">
          <span className="text-[#858585] text-xs">0</span>
          <span className="text-[#858585] text-xs">{max}</span>
        </div>
      </div>
    </div>
  );
};

export default TuningSlider;
