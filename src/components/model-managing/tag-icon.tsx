const TagIcon = ({ tag }: { tag: "마취과" | "내과" }) => {
  if (tag === "내과") {
    return (
      <div className="flex items-center justify-center w-fit px-[10px] h-[29px] bg-green-40 rounded-sm text-nowrap">
        <span>내과</span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-fit px-[10px] h-[29px] bg-blue-50 rounded-sm text-nowrap">
      <span>마취과</span>
    </div>
  );
};

export default TagIcon;
