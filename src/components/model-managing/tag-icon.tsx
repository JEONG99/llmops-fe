const TagIcon = ({ tag }: { tag: "마취과" | "내과" | "" }) => {
  if (!tag) return null;
  if (tag === "내과") {
    return (
      <div className="flex items-center justify-center w-fit px-[10px] h-[29px] bg-green-40 rounded-sm text-nowrap text-sm">
        <span>내과</span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-fit px-[10px] h-[29px] bg-blue rounded-sm text-nowrap text-sm">
      <span>마취과</span>
    </div>
  );
};

export default TagIcon;
