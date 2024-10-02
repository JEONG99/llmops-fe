import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
  side?: "right" | "top" | "bottom" | "left";
  title: string;
  children: React.ReactNode;
}

const ActionTooltip = ({ side, title, children }: ActionTooltipProps) => {
  return (
    <Tooltip delayDuration={50}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>{title}</TooltipContent>
    </Tooltip>
  );
};

export default ActionTooltip;
