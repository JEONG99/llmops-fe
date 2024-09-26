import { cn } from "@/lib/utils";

interface ChevronDownProps {
  size?: number;
  className?: string;
  color: string;
}

const ChevronDown = ({ size = 24, className, color }: ChevronDownProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path d="M6 10L12 16L18 10" stroke={color} stroke-linecap="round" />
    </svg>
  );
};

export default ChevronDown;
