import SimpleBar from "simplebar-react";

import { cn } from "@/lib/utils";

import "@/styles/simplebar.css";

const CustomSimpleBar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SimpleBar className={cn("h-full", className)}>{children}</SimpleBar>;
};

export default CustomSimpleBar;
