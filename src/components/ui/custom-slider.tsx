import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const marks = [{ value: 0 }, { value: 33 }, { value: 66 }, { value: 96.5 }];

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "custom-slider relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Thumb className="flex justify-center items-center h-5 w-[44px] rounded-[10px] bg-blue focus:outline-none cursor-pointer">
      <img src="/icon/slider-icon.svg" alt="" className="size-3" />
    </SliderPrimitive.Thumb>
    <SliderPrimitive.Track className="relative h-[1px] w-[calc(100%-2px)] overflow-hidden rounded-full bg-[#454545]">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {marks.map((mark) => (
      <div
        key={mark.value}
        className="absolute"
        style={{
          left: `${mark.value}%`,
        }}
      >
        <div className="size-2.5 rounded-full bg-white border border-[#454545]" />
      </div>
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
