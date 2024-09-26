import { cn } from "@/lib/utils";

interface PageLayoutProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  headerContent?: React.ReactNode;
}

const PageLayout = ({
  className,
  children,
  title,
  headerContent,
}: PageLayoutProps) => {
  return (
    <div className={cn("pb-20", className)}>
      <div className="flex justify-between items-center px-7 h-[68px]">
        <h4 className="text-lg">{title}</h4>
        {headerContent}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
